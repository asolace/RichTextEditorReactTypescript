import React from 'react';
import { shallow } from 'enzyme';
import HoveringToolbar from './HoveringToolbar';

import BoldButton from '../Features/Buttons/BoldButton';
import ItalicButton from '../Features/Buttons/ItalicButton';
import UnderlineButton from '../Features/Buttons/UnderlineButton';
import CodeButton from '../Features/Buttons/CodeButton';
import LinkButton from '../Features/Buttons/LinkButton';

const features = {
  bold: false,
  code: true,
  italic: true,
  link: true,
  underline: true,
};

describe('>> Slate Toolbar <<', () => {
  const wrapper = shallow(<HoveringToolbar features={features} />);
  const { bold, code, italic, link, underline } = features;

  describe('Should display HoveringToolbar and Buttons.', () => {
    it('Should display HoveringToolbar.', () => {
      const HoveringToolbar = wrapper.find(
        '[aria-label="text editor hovering toolbar"]'
      );
      expect(HoveringToolbar.exists()).toBe(true);
    });

    it('Should display Bold Button.', () => {
      expect(wrapper.find(BoldButton).exists()).toBe(bold);
    });

    it('Should display Italic Button.', () => {
      expect(wrapper.find(ItalicButton).exists()).toBe(italic);
    });

    it('Should display Underline Button.', () => {
      expect(wrapper.find(UnderlineButton).exists()).toBe(underline);
    });

    it('Should display Code Button.', () => {
      expect(wrapper.find(CodeButton).exists()).toBe(code);
    });

    it('Should display Link Button.', () => {
      expect(wrapper.find(LinkButton).exists()).toBe(link);
    });
  });
});
