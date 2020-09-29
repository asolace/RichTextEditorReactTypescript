import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { RichTextEditor, SlateEditable, SlateToolbar } from '../../../index';
import ItalicButton from './ItalicButton';
import { FormatItalic } from '@material-ui/icons';

describe('>> Italic Button <<', () => {
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

  describe('Should make text italic.', () => {
    it('Should display itlaic button.', () => {
      const italicButton = wrapper.find(ItalicButton);
      const italicIcon = wrapper.find(FormatItalic);

      expect(italicButton.exists()).toBe(true);
      expect(italicIcon.exists()).toBe(true);
    });
  });
});
