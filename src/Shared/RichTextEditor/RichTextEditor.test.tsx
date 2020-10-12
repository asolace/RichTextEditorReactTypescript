import React from 'react';
import { mount } from 'enzyme';
import { RichTextEditor, SlateEditable, SlateToolbar, Counters } from './index';

describe('>> RichTextEditor <<', () => {
  const wrapper = mount(
    <RichTextEditor onChange={jest.fn} parseFormat='html'>
      <SlateToolbar />
      <SlateEditable />
      <Counters />
    </RichTextEditor>
  );

  it('Should display the rich text editor wrapper.', () => {
    expect(wrapper.find('[aria-label="rich text editor form"]').exists()).toBe(true);
    expect(wrapper.find('#editable-textbox').exists()).toBe(true);
  });

  it('Should display Hovering Toolbar if it is enabled in initialConfig.', () => {
    expect(wrapper.find(SlateToolbar).exists()).toBe(true);
  });

  it('Should display Font Size Dropdown if it is enabled in initialConfig.', () => {
    expect(wrapper.find(Counters).exists()).toBe(true);
  });
});
