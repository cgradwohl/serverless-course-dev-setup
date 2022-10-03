interface Foo {
  bar: string;
}

export const foobar = () => {
  const foo: Foo = {
    bar: "baz",
  };
  return foo;
};
