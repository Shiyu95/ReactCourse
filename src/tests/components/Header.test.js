// @ts-nocheck
//react-test-render
import React from 'react';
import { shallow } from 'enzyme';
import { Header }from '../../components/Header';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={()=> { }}/>);
    expect(wrapper).toMatchSnapshot();
});

//use spy for test button action
test('Should call startLogout on button click ', ()=> {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout = {startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});



    //expect(wrapper.find('h1').text()).toBe('Expensify');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();