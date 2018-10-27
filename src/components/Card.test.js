import { shallow } from 'enzyme';
import Card from './Card';
import React from 'react';

it('exp to render Card comp', () => {
    // expect(shallow(<Card />).length).toEqual(1)
    expect(shallow(<Card />)).toMatchSnapshot();
})

