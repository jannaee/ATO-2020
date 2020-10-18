import React from 'react';
import { shallow } from 'enzyme';
import ATOForm from './ATOForm';

const title = 'Test Title';
let wrapper = shallow(<ATOForm>{title}</ATOForm>);

describe('ATOForm title', () => {
    it('should render the ATOForm Component correctly', () => {   
        expect(wrapper).toMatchSnapshot();
    });
});