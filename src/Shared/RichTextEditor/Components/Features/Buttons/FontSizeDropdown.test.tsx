import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { RichTextEditor, SlateEditable, SlateToolbar } from '../../../index';
import FontSizeDropdown from './FontSizeDropdown';
import { ArrowDropDown, FormatSize } from '@material-ui/icons';

describe('>> Font Size Button <<', () => {
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

  describe('Should change font size.', () => {
    it('Should display font size button.', () => {
      const fontSizeDropdown = wrapper.find(FontSizeDropdown);
      const formatSizeIcon = wrapper.find(FormatSize);
      const arrowDropDownIcon = wrapper.find(ArrowDropDown);

      expect(fontSizeDropdown.exists()).toBe(true);
      expect(formatSizeIcon.exists()).toBe(true);
      expect(arrowDropDownIcon.exists()).toBe(true);
    });
  });
});
