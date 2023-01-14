export const handler = async (event) => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hello, Mate! You requested at ${event.requestContext.time}.`,
  };
};
