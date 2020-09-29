import React from 'react';
import ToolbarButtonTemplate from './ToolbarButtonTemplate';
import { FormatQuote } from '@material-ui/icons';
import { useStyles } from '../../../Shared/Styles';

const QuoteButton = () => {
  const classes = useStyles();

  return (
    <ToolbarButtonTemplate
      title="Block Quote"
      format="block-quote"
      type="block"
      ariaLabel="quote button"
      icon={<FormatQuote className={classes.icon} />}
    />
  );
};

export default QuoteButton;
