import React from 'react';
import ToolbarButtonTemplate from './ToolbarButtonTemplate';
import { FormatListBulleted } from '@material-ui/icons';
import { useStyles } from '../../../Shared/Styles';

const BulletedListButton = () => {
  const classes = useStyles();

  return (
    <ToolbarButtonTemplate
      title="bulleted list"
      format="bulleted-list"
      type="block"
      ariaLabel="bulleted list button"
      icon={<FormatListBulleted className={classes.icon} />}
    />
  );
};

export default BulletedListButton;
