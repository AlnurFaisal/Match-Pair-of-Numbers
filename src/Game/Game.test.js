import React, { Component } from "react";
import Game from "./Game";
import { shallow } from "enzyme";

describe("Game Component", () => {
  it("should generate the game component", () => {
    const element = { value: 1, isMatched: false, show: false };
    const myMockFunction = jest.fn(4);
    const wrapper = shallow(<Game gameLevel="4" />);
    console.log(wrapper.find("Square"));
    expect(wrapper).toHaveLength(1);
  });
});
