//First import necessary modules especially the local components
import React from 'react';
import { shallow } from 'enzyme';
import Launch from './Launch';
import { ModalWrapper, TextInput } from 'carbon-components-react';

// Next wrap the test suite in a describe
describe( '<Launch /> rendering', () => {
    const wrapper = shallow( <Launch /> );
    it( 'should render a <ModalWrapper /> to display additional options', () => {
        expect( wrapper.find( ModalWrapper ) ).toHaveLength( 0 );
    } );

    it( 'should render a <TextInput /> to display the maximum length of the comment', () => {
        expect( wrapper.find( TextInput ) ).toHaveLength( 0 );
    } );
} );
