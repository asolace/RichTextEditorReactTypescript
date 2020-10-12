import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { RichTextEditor, SlateEditable, SlateToolbar } from '../../../index';
import NumberedListButton from './NumberedListButton';
import { FormatListNumbered } from '@material-ui/icons';

describe('>> Numbered List Button <<', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <RichTextEditor onChange={jest.fn} parseFormat='html'>
        <SlateToolbar />
        <SlateEditable />
      </RichTextEditor>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe('Should make text block a bulleted list.', () => {
    it('Should display bulleted button.', () => {
      const numberedListButton = wrapper.find(NumberedListButton);
      const formatListNumberedIcon = wrapper.find(FormatListNumbered);

      expect(numberedListButton.exists()).toBe(true);
      expect(formatListNumberedIcon.exists()).toBe(true);
    });
  });
});
