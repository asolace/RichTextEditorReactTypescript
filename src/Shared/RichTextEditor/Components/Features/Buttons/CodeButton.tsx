import React from 'react';
import ToolbarButtonTemplate from './ToolbarButtonTemplate';
import { Code } from '@material-ui/icons';
import { useStyles } from '../../../Shared/Styles';

const CodeButton = () => {
  const classes = useStyles();

  return (
    <ToolbarButtonTemplate
      title="code"
      format="code"
      type="mark"
      ariaLabel="code button"
      icon={<Code className={classes.icon} />}
    />
  );
};

export default CodeButton;
