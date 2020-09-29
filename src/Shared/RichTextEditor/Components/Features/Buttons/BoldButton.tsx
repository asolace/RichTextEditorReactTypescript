import React from 'react';
import ToolbarButtonTemplate from './ToolbarButtonTemplate';
import { FormatBold } from '@material-ui/icons';
import { useStyles } from '../../../Shared/Styles';

const BoldButton = () => {
  const classes = useStyles();

  return (
    <ToolbarButtonTemplate
      title="bold"
      format="bold"
      type="mark"
      ariaLabel="bold button"
      icon={<FormatBold className={classes.icon} />}
    />
  );
};

export default BoldButton;
