import React from 'react';
import {
  RichTextEditor,
  SlateEditable,
  SlateToolbar,
  Counters,
  HoveringToolbar,
} from '../../Shared/RichTextEditor';

import initialMockValues from '../../Shared/RichTextEditor/initialMockValues';

const handleFormData = (data: string) => {
  const stringData = data.toString();
  console.log(stringData);
};

const handleCancel = () => {
  console.log('--- CANCEL() ---');
};

const features = {
  image: false,
};

const Form = () => {
  return (
    <>
      <h4>Form</h4>

      <RichTextEditor
        handleFormData={handleFormData}
        handleCancel={handleCancel}
        initialValue={String(initialMockValues.fullHtmlString)}
        submitBtnName="Send"
        parseFormat="json"
      >
        <HoveringToolbar features={features} />
        <SlateToolbar features={features} />
        <SlateEditable />
        <Counters />
      </RichTextEditor>
    </>
  );
};

export default Form;
