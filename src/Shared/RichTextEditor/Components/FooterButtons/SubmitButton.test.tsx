import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from './SubmitButton';
import initialMockValues from '../../initialMockValues';

const handleFormData = jest.fn();

describe('>> Submit Button <<', () => {
  const wrapper = shallow(
    <SubmitButton
      loading={false}
      parseFormat="html"
      submitBtnName="Send"
      value={initialMockValues.fullArray}
      handleFormData={handleFormData}
    />
  );

  const button = wrapper.find('[aria-label="rich text editor submit button"]');

  it('Should render submit button.', () => {
    expect(button.exists()).toBe(true);
  });

  it('Should trigger callback on click.', () => {
    button.simulate('click');
    expect(handleFormData).toBeCalled();
  });
});
