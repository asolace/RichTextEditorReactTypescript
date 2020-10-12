import React, { useCallback } from 'react';
import { Editable, useSlate } from 'slate-react';

import Leaf from './Renders/Leaf';
import Element from './Renders/Element';
import onKeyDownHotkey from './Plugins/hotkeys/hotkeys';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

interface SlateEditableProps {
  className?: string;
  loading?: boolean;
  onEnterSubmit?: () => void;
}

const useStyles = makeStyles(() => ({
  editable: {
    backgroundColor: '#fff',
    padding: '1rem 1.2rem',
    borderRadius: '0 0 1rem 1rem',
  },
}));

const SlateEditable = (props: SlateEditableProps) => {
  const editor = useSlate();
  const classes = useStyles();
  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);

  return (
    <Editable
      id='editable-textbox'
      className={clsx(classes.editable, props.className)}
      renderElement={renderElement}
      renderLeaf={renderLeaf}
      onKeyDown={event => onKeyDownHotkey({ event, editor, onEnterSubmit: props.onEnterSubmit })}
      readOnly={props.loading}
      placeholder='Enter your text...'
      spellCheck
      autoFocus
    />
  );
};

export default SlateEditable;
