import React from 'react';
import clsx from 'clsx';
import { useStyles } from '../../Shared/Styles';
import { Button } from '@material-ui/core';

interface CancelButtonProps {
  handleCancel: () => void;
}

const CancelButton = ({ handleCancel }: CancelButtonProps) => {
  const classes = useStyles();

  return (
    <Button
      className={clsx(classes.buttons, classes.cancel)}
      aria-label="rich text editor cancel button"
      onClick={handleCancel}
    >
      Cancel
    </Button>
  );
};

export default CancelButton;
