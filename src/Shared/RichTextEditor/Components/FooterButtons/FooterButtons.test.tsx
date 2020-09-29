import React from 'react';
import { shallow } from 'enzyme';
import FooterButtons from './FooterButtons';
import SubmitButton from './SubmitButton';
import CancelButton from './CancelButton';

import initialMockValues from '../../initialMockValues';

describe('>> Footer Buttons <<', () => {
  const wrapper = shallow(
    <FooterButtons
      loading={false}
      parseFormat="html"
      submitBtnName="Send"
      value={initialMockValues.fullArray}
      handleCancel={jest.fn()}
      handleFormData={jest.fn()}
    />
  );

  const cancelButton = wrapper.find(CancelButton);
  const submitButton = wrapper.find(SubmitButton);

  it('Should render cancel button.', () => {
    expect(cancelButton.exists()).toBe(true);
  });

  it('Should render send button.', () => {
    expect(submitButton.exists()).toBe(true);
  });
});
