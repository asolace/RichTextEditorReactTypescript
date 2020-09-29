import React from 'react';
import ToolbarButtonTemplate from './ToolbarButtonTemplate';
import { FormatUnderlined } from '@material-ui/icons';
import { useStyles } from '../../../Shared/Styles';

const UnderlineButton = () => {
  const classes = useStyles();

  return (
    <ToolbarButtonTemplate
      title="underline"
      format="underline"
      type="mark"
      ariaLabel="underline button"
      icon={<FormatUnderlined className={classes.icon} />}
    />
  );
};

export default UnderlineButton;
