import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { RichTextEditor, SlateEditable, SlateToolbar } from '../../../index';
import BulletedListButton from './BulletedListButton';
import { FormatListBulleted } from '@material-ui/icons';

describe('>> Bulleted List Button <<', () => {
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

  describe('Should make text block a bulleted list.', () => {
    it('Should display bulleted list button.', () => {
      const bulletedListButton = wrapper.find(BulletedListButton);
      const bulletedListIcon = wrapper.find(FormatListBulleted);

      expect(bulletedListButton.exists()).toBe(true);
      expect(bulletedListIcon.exists()).toBe(true);
    });
  });
});
