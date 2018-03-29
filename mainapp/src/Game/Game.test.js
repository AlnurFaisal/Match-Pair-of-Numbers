import React, { Component } from "react";
import Game from "./Game";
import { shallow } from "enzyme";

describe("Game Component", () => {
  it("should generate the game component", () => {
    const element = { value: 1, isMatched: false, show: false };
    const wrapper = shallow(<Game />);

    expect(wrapper.find("Square")).toHaveLength(12);
  });
});
