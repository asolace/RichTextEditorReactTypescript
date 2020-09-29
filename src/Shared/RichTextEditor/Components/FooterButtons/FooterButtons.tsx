import React from 'react';
import { Node } from 'slate';
import { Box } from '@material-ui/core';

import SubmitButton from './SubmitButton';
import CancelButton from './CancelButton';

interface FooterButtonsProps {
  loading?: boolean;
  parseFormat?: string;
  submitBtnName?: string;
  value: Node[];
  handleCancel: () => void;
  handleFormData: (value: string) => void;
}

const FooterButtons = ({
  loading,
  parseFormat,
  submitBtnName,
  value,
  handleCancel,
  handleFormData,
}: FooterButtonsProps) => {
  return (
    <Box alignSelf="flex-end">
      <SubmitButton
        loading={loading}
        parseFormat={parseFormat}
        submitBtnName={submitBtnName}
        value={value}
        handleFormData={handleFormData}
      />

      <CancelButton handleCancel={handleCancel} />
    </Box>
  );
};

export default FooterButtons;
