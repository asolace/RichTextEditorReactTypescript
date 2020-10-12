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
        onChange={setvalue}
        initialValue={String(initialMockValues.fullHtmlString)}
        parseFormat="html"
      >
        <HoveringToolbar features={features} />
        <SlateToolbar features={features} />
        <SlateEditable loading={false} onEnterSubmit={handleSend}/>
        <Counters />
      </RichTextEditor>

      <Button 
        color="primary"
        variant="contained"
        onClick={handleSend}
      >
        Send
      </Button>

      <Button 
        onClick={handleCancel}
      >
        Cancel
      </Button>
    </>
  );
};

export default Form;
