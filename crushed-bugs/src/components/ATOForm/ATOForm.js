import { 
    Form, 
    TextArea, 
    TextInput, 
    Select, 
    Button } from 'carbon-components-react';
import React from 'react';

const ATOForm = () => {
    return (
        <Form className="someForm">
            <div style={{ marginBottom: '2rem' }}>
                <TextInput
                    id="test2"
                    invalidText="Invalid error message."
                    labelText="First input field"
                    placeholder="Placeholder text"
                />
            </div>
            <div style={{ marginBottom: '2rem' }}>
                <TextArea
                    cols={50}
                    // helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
                    id="test5"
                    invalidText="Invalid error message."
                    labelText="Second input field"
                    placeholder="Placeholder text"
                    rows={4}
                />
            </div>
            <div style={{ marginBottom: '2rem' }}>
                <Select
                    defaultValue="placeholder-item"
                    id="select-1"
                    invalidText="This is an invalid error message."
                    labelText="Dropdown"
                >
                </Select>
            </div>
            <Button
                kind="primary"
                tabIndex={0}
                type="submit"
            > Submit
            </Button>
        </Form>

    )
}


export default ATOForm;