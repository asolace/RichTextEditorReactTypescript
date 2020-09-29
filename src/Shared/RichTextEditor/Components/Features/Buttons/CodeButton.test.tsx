import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { RichTextEditor, SlateEditable, SlateToolbar } from '../../../index';
import CodeButton from './CodeButton';
import { Code } from '@material-ui/icons';

describe('>> Code Button <<', () => {
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

  describe('Should make text code.', () => {
    it('Should display code button.', () => {
      const codeButton = wrapper.find(CodeButton);
      const codeIcon = wrapper.find(Code);

      expect(codeButton.exists()).toBe(true);
      expect(codeIcon.exists()).toBe(true);
    });
  });
});
