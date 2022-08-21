import React from "react";
import { shallow } from "enzyme";
import App from "./../App";

const title = "Test App";

let wrapped = shallow(<App>{title}</App>);

describe("DefaultText", () => {
  it("should render the DefaultText Component accordingly", () => {
    expect(wrapped).toMatchSnapshot();
  });
  it("renders the DefaultTexts children component", () => {
    expect(wrapped.find("h1").text()).toEqual(title);
  });
});
