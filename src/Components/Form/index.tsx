import React, { useState } from 'react';
import {
  RichTextEditor,
  SlateEditable,
  SlateToolbar,
  Counters,
  HoveringToolbar,
} from '../../Shared/RichTextEditor';
import { Button } from '@material-ui/core';

import initialMockValues from '../../Shared/RichTextEditor/initialMockValues';

const features = {
  image: false,
};

const Form = () => {
  const [value, setvalue] = useState<string>()

  const handleFormData = (data: string) => {
    const stringData = data.toString();
    setvalue(stringData)
  };
  
  const handleSend = () => {
    console.log("--- SEND() ---")
    console.log(value)
  }
  
  const handleCancel = () => {
    console.log('--- CANCEL() ---');
  };

  return (
    <>
      <h4>Form</h4>

      <RichTextEditor
        handleFormData={handleFormData}
        initialValue={String(initialMockValues.fullHtmlString)}
        parseFormat="html"
      >
        <HoveringToolbar features={features} />
        <SlateToolbar features={features} />
        <SlateEditable loading={true} />
        <Counters />
      </RichTextEditor>

      <Button 
        color="primary"
        variant="contained"
        onClick={handleSend}
      >
        Send
      </Button>
    </>
  );
};

export default Form;
