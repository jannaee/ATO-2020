import React from 'react';
import { shallow } from 'enzyme';
import ATOForm from './ATOForm';

    // First wrap the test suite in a describe
    describe('ATOForm', () => { 
    
    // Next describe what the test is for
    // Lesson: Make sure its very descriptive yet concise
    // Always have an opposite coverage for your test too
    it('should show text from ATOForm Component', () => { 
        const wrapper = shallow(<ATOForm />);
        console.log(wrapper.debug()) ; 

        // const text = wrapper.find('')
        expect(wrapper).toMatchSnapshot();
        //We match the element and then assert what this should be
        //There are many matchers jest.io
    });
});