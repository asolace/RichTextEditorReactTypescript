import React from 'react';
import { Node } from 'slate';
import clsx from 'clsx';
import parseFormContent from '../../Utils/Parser';
import { useStyles } from '../../Shared/Styles';
import { Button, CircularProgress } from '@material-ui/core';

interface SubmitButtonProps {
  loading?: boolean;
  parseFormat?: string;
  submitBtnName?: string;
  value: Node[];
  handleFormData: (value: string) => void;
}

const SubmitButton = ({
  loading,
  parseFormat,
  submitBtnName,
  value,
  handleFormData,
}: SubmitButtonProps) => {
  const classes = useStyles();

  return (
    <Button
      id="rich-text-editor-submit-btn"
      color="primary"
      aria-label="rich text editor submit button"
      className={clsx(classes.buttons, classes.save)}
      disabled={loading}
      onClick={() => parseFormContent(parseFormat, value, handleFormData)}
      variant="contained"
    >
      {submitBtnName || 'Submit'}
      {loading && <CircularProgress className={classes.spinner} size={16} />}
    </Button>
  );
};

export default SubmitButton;
