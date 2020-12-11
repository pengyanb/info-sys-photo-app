import * as Constants from "../../../redux/apis/constants";

describe("redux/apis/constants tests", () => {
  it("constants snapshot test", () => {
    expect(Constants).toMatchSnapshot();
  });
});