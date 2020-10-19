import { Form, TextInput } from 'carbon-components-react';
import React from 'react';

const ATOForm = () => {
    return (
        <Form className="someForm">
            <h4 className="title">Our Test Subject</h4>
            <div style={{ marginBottom: '2rem' }}>
                <TextInput
                    id="test2"
                    invalidText="Invalid error message."
                    labelText="First input field"
                    placeholder="Placeholder text"
                />
            </div>
        </Form>

    )
}


export default ATOForm;