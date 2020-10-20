import React from 'react';
import { shallow } from 'enzyme';
import { Form } from 'carbon-components-react';
// Example for super simple shallow rendering


// First wrap the test suite in a describe
describe( '<App /> rendering', () => {

    // Next describe what the test is for
    // Lesson: Make sure its very descriptive yet concise
    // Always have an opposite coverage for your test too
    it( 'should render 1 form  ', () => {
        const wrapper = shallow( <App /> );

        //Use shallow rendering to create a snapshot of the App
        expect( wrapper ).toMatchSnapshot();
    } );

    // Lesson: Make sure to subdivide tests

    it('should render', () =>{
        const wrapper = shallow( <App /> );
        const formComponent = wrapper.find( Form );
        expect( formComponent).toHaveLength( 0 );

        //We match the element and then assert what this should be
        //There are many matchers jest.io
    });
    
    it( 'should render 1 input field ', () => {
        const wrapper = shallow( <App /> );
        const inputField = wrapper.find( Form );
        expect( inputField ).toHaveLength( 1 );

    } );
} );