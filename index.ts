import { APIGatewayProxyHandlerV2 } from "aws-lambda";

// import { APIGatewayProxyHandlerV2 } from "aws-lambda";
interface Foo {
  bar: string;
}

export const foobar: APIGatewayProxyHandlerV2 = async (event) => {
  const foo: Foo = {
    bar: "baz",
  };
  return {
    statusCode: 200,
    body: JSON.stringify({ foo, event }),
  };
};
