import React from 'react';
import { shallow } from 'enzyme';
import SlateToolbar from './SlateToolbar';

import BoldButton from '../Features/Buttons/BoldButton';
import ItalicButton from '../Features/Buttons/ItalicButton';
import UnderlineButton from '../Features/Buttons/UnderlineButton';
import CodeButton from '../Features/Buttons/CodeButton';
import LinkButton from '../Features/Buttons/LinkButton';
import QuoteButton from '../Features/Buttons/QuoteButton';
import NumberedListButton from '../Features/Buttons/NumberedListButton';
import BulletedListButton from '../Features/Buttons/BulletedListButton';
import FontSizeDropdown from '../Features/Buttons/FontSizeDropdown';

const features = {
  bold: true,
  counter: true,
  code: true,
  fontSize: true,
  hoveringToolbar: true,
  italic: true,
  image: false,
  link: true,
  listBulleted: true,
  listNumbered: true,
  quote: true,
  underline: true,
};

describe('>> Slate Toolbar <<', () => {
  const wrapper = shallow(<SlateToolbar features={features} />);
  const {
    bold,
    code,
    fontSize,
    italic,
    image,
    link,
    listBulleted,
    listNumbered,
    quote,
    underline,
  } = features;

  describe('Should display SlateToolbar and Buttons.', () => {
    it('Should display SlateToolbar.', () => {
      const SlateToolbar = wrapper.find('[aria-label="text editor toolbar"]');
      expect(SlateToolbar.exists()).toBe(true);
    });

    it('Should display Font Size Dropdown if it is enabled in initialConfig.', () => {
      expect(wrapper.find(FontSizeDropdown).exists()).toBe(fontSize);
    });

    it('Should display Bold Button if it is enabled in initialConfig.', () => {
      expect(wrapper.find(BoldButton).exists()).toBe(bold);
    });

    it('Should display Italic Button if it is enabled in initialConfig.', () => {
      expect(wrapper.find(ItalicButton).exists()).toBe(italic);
    });

    it('Should display Underline Button if it is enabled in initialConfig.', () => {
      expect(wrapper.find(UnderlineButton).exists()).toBe(underline);
    });

    it('Should display Code Button if it is enabled in initialConfig.', () => {
      expect(wrapper.find(CodeButton).exists()).toBe(code);
    });

    it('Should display Link Button if it is enabled in initialConfig.', () => {
      expect(wrapper.find(LinkButton).exists()).toBe(link);
    });

    it('Should display Quote Button if it is enabled in initialConfig.', () => {
      expect(wrapper.find(QuoteButton).exists()).toBe(quote);
    });

    it('Should display Numbered List Button if it is enabled in initialConfig.', () => {
      expect(wrapper.find(NumberedListButton).exists()).toBe(listNumbered);
    });

    it('Should display Bulleted List Button if it is enabled in initialConfig.', () => {
      expect(wrapper.find(BulletedListButton).exists()).toBe(listBulleted);
    });

    it('Should display Image Button if it is enabled in initialConfig.', () => {
      expect(wrapper.find(Image).exists()).toBe(image);
    });
  });
});
