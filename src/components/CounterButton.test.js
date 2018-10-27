import { shallow } from 'enzyme';
import CounterButton from './CounterButton';
import React from 'react';

it('exp to render CounterBtn comp', () => {
    const mockColor = 'red'
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
})

it('correctly increments counter', () => {
    const mockColor = 'red'
    const wrapper = shallow(<CounterButton color={mockColor} />);
    wrapper.find('[id="counter"]').simulate('click')
    expect(wrapper.state()).toEqual({ count: 1 })
    expect(wrapper.props().color).toEqual('red')
})
