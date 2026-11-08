import site from "../../dist/server/index.js";

export default async function handler(request, context) {
  const executionContext = {
    waitUntil(promise) {
      context.waitUntil?.(promise);
    },
    passThroughOnException() {},
  };

  return site.fetch(request, process.env, executionContext);
}
