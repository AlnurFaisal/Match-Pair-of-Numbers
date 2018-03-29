import React, { Component } from 'react';
import Square from "./Square";
import { shallow } from 'enzyme';

describe('Square Component', () => {
    it('should show the values in the box', () => {
        const element = {value: 1, isMatched: false, show:false};
        const wrapper = shallow(<Square  numberObj={element}/>);
        
        expect(wrapper.find("SquareItem")).toHaveLength(1);
    });
    
    it.skip('should have css toggle from hide to show when click', () => {
        const element = {value: 1, isMatched: false, show:false};
        const wrapper = shallow(<Square  numberObj={element}/>);

        // wrapper.find('SquareItem').simulate('click');  
        
        console.log(wrapper.props().handleClick());

        console.log(wrapper.props().showOrHideCssProperty);
    });
});