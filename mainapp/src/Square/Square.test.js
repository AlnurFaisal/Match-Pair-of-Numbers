import React, { Component } from 'react';
import Square from "./Square";
import { shallow } from 'enzyme';

describe('Square Component', () => {
    it('should show the values in the box', () => {
        const wrapper = shallow(<Square />);
        console.log(wrapper);

    });
});