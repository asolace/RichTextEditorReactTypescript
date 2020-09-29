import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { RichTextEditor, SlateEditable, SlateToolbar } from '../../../index';
import BoldButton from './BoldButton';
import { FormatBold } from '@material-ui/icons';

describe('>> Bold Button <<', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <RichTextEditor
        handleFormData={jest.fn}
        handleCancel={jest.fn}
        submitBtnName="Send"
        parseFormat="json"
      >
        <SlateToolbar />
        <SlateEditable />
      </RichTextEditor>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('Should display bold button.', () => {
    const boldButton = wrapper.find(BoldButton);
    const boldIcon = wrapper.find(FormatBold);

    expect(boldButton.exists()).toBe(true);
    expect(boldIcon.exists()).toBe(true);
  });
});
