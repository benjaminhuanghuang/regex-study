import { isValideEmail } from "./validate_email";

describe("Test isValideEmail function", () => {
  test("it should return true", () => {
    // actual test

    const input = "ben@gamil.com";

    const output = true;

    expect(isValideEmail(input)).toEqual(output);
  });
});
