import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { RichTextEditor, SlateEditable, SlateToolbar } from '../../../index';
import UnderlineButton from './UnderlineButton';
import { FormatUnderlined } from '@material-ui/icons';

describe('>> Underline Button <<', () => {
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

  describe('Should make text underline.', () => {
    it('Should display underline button.', () => {
      const underlineButton = wrapper.find(UnderlineButton);
      const underlinedIcon = wrapper.find(FormatUnderlined);

      expect(underlineButton.exists()).toBe(true);
      expect(underlinedIcon.exists()).toBe(true);
    });
  });
});
