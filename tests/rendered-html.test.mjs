import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);

async function render(pathname = "/") {
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the Spanish home without starter metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>BMARE \| Gestión integral de flotas<\/title>/i);
  assert.match(html, /Te acompañamos en cada travesía/);
  assert.match(html, /SMART MARITIME FLEET MANAGEMENT/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/i);
});

test("renders the English locations route", async () => {
  const response = await render("/en/locations");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Wherever you are, we are close/);
  assert.match(html, /BMARE Vigo, Spain/);
  assert.match(html, /BMARE Harlingen, Netherlands/);
});
