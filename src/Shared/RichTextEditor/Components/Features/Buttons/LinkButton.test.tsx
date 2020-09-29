import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { RichTextEditor, SlateEditable, SlateToolbar } from '../../../index';
import LinkButton from './LinkButton';
import { Link } from '@material-ui/icons';

describe('>> Link Button <<', () => {
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

  describe('Should make text a Link.', () => {
    it('Should display link button.', () => {
      const linkButton = wrapper.find(LinkButton);
      const linkIcon = wrapper.find(Link);

      expect(linkButton.exists()).toBe(true);
      expect(linkIcon.exists()).toBe(true);
    });
  });
});
