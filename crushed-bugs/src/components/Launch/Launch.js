import React from 'react';
import { ModalWrapper, TextInput, Select, SelectItem } from 'carbon-components-react';


const Launch = () => {
    return (
        <ModalWrapper
            id="input-modal"
            buttonTriggerText="Launch Modal"
            handleSubmit={() => {return true;}}
            >
            <TextInput
                id="test2"
                placeholder="Hint text here"
                labelText="Text Input:"
            />
            <br />
            <Select id="select-1" labelText="Select">
                <SelectItem
                    disabled
                    hidden
                    value="placeholder-item"
                    text="Pick an option"
                />
                <SelectItem value="option-1" text="Option 1" />
                <SelectItem value="option-2" text="Option 2" />
                <SelectItem value="option-3" text="Option 3" />
            </Select>
        </ModalWrapper>
    );
};

export default Launch;