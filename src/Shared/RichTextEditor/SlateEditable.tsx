import React, { useCallback } from 'react';
import { Editable, useSlate } from 'slate-react';

import Leaf from './Renders/Leaf';
import Element from './Renders/Element';
import onKeyDownHotkey from './Plugins/hotkeys';

import { makeStyles } from '@material-ui/core/styles';

export interface SlateEditableProps {
  className?: string;
  loading?: boolean;
}

const useStyles = makeStyles(() => ({
  editable: {
    backgroundColor: '#fff',
    padding: '20px',
  },
}));

const SlateEditable = (props: SlateEditableProps) => {
  const editor = useSlate();
  const classes = useStyles();
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  return (
    <Editable
      id="editable-textbox"
      className={`${classes.editable} ${props.className}`}
      renderElement={renderElement}
      renderLeaf={renderLeaf}
      onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) =>
        onKeyDownHotkey(event, editor)
      }
      readOnly={props.loading}
      placeholder="Enter your text..."
      spellCheck
      autoFocus
    />
  );
};

export default SlateEditable;
