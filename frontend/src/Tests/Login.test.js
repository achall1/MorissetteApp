import React from 'react'
import TestRenderer from 'react-test-renderer'
import Login from '../Components/signin';

describe('Login component renders the form correctly', () => {
    it('renders correctly', () => {
        const render = TestRenderer.create(
            <Login />
        );
        expect(render.JSON()).toMatchSnapshot();
    })
})