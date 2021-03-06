import { shallow } from 'enzyme';
import CardList from './CardList';
import React from 'react';

it('exp to render Card list comp', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'JohnJohn',
            email: 'john@gmail.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})

