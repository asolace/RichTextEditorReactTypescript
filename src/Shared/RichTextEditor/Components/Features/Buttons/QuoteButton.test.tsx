import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { RichTextEditor, SlateEditable, SlateToolbar } from '../../../index';
import QuoteButton from './QuoteButton';
import { FormatQuote } from '@material-ui/icons';

describe('>> Quote Button <<', () => {
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

  describe('Should make text block a quote.', () => {
    it('Should display quote button.', () => {
      const quoteButton = wrapper.find(QuoteButton);
      const quoteIcon = wrapper.find(FormatQuote);

      expect(quoteButton.exists()).toBe(true);
      expect(quoteIcon.exists()).toBe(true);
    });
  });
});
