import { shallow } from 'enzyme';
import ErrorBoundry from './ErrorBoundry';
import React from 'react';

it('exp to render Card comp', () => {
    // expect(shallow(<Card />).length).toEqual(1)
    expect(shallow(<ErrorBoundry />)).toMatchSnapshot();
})

