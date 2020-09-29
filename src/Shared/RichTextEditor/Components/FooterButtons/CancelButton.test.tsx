import React from 'react';
import { shallow } from 'enzyme';
import CancelButton from './CancelButton';

const options = {
  handleCancel: jest.fn(),
};

describe('>> Cancel Button <<', () => {
  const wrapper = shallow(<CancelButton handleCancel={options.handleCancel} />);

  const button = wrapper.find('[aria-label="rich text editor cancel button"]');

  it('Should render cancel button.', () => {
    expect(button.exists()).toBe(true);
  });

  it('Should trigger callback on click.', () => {
    button.simulate('click');
    expect(options.handleCancel).toBeCalled();
  });
});
