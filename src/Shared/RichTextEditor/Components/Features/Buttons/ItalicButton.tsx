import React from 'react';
import ToolbarButtonTemplate from './ToolbarButtonTemplate';
import { FormatItalic } from '@material-ui/icons';
import { useStyles } from '../../../Shared/Styles';

const ItalicButton = () => {
  const classes = useStyles();

  return (
    <ToolbarButtonTemplate
      title="italic"
      format="italic"
      type="mark"
      ariaLabel="italic button"
      icon={<FormatItalic className={classes.icon} />}
    />
  );
};

export default ItalicButton;
