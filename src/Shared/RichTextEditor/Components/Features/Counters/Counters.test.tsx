import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counters';
import WordCounter from './WordCounter';
import CharCounter from './CharCounter';

describe('>> Word/Char Counter <<', () => {
  const wrapper = shallow(<Counter />);

  it('Should render word counter.', () => {
    expect(wrapper.find(WordCounter).exists()).toBe(true);
  });

  it('Should render char counter.', () => {
    expect(wrapper.find(CharCounter).exists()).toBe(true);
  });
});
