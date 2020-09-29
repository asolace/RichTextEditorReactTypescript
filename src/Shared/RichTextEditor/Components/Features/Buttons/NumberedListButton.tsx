import React from 'react';
import ToolbarButtonTemplate from './ToolbarButtonTemplate';
import { FormatListNumbered } from '@material-ui/icons';
import { useStyles } from '../../../Shared/Styles';

const NumberedListButton = () => {
  const classes = useStyles();

  return (
    <ToolbarButtonTemplate
      title="numbered list"
      format="numbered-list"
      type="block"
      ariaLabel="numbered list button"
      icon={<FormatListNumbered className={classes.icon} />}
    />
  );
};

export default NumberedListButton;
