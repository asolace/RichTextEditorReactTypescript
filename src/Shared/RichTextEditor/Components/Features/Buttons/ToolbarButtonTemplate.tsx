import React, { ReactElement } from 'react';
import { Editor } from 'slate';
import { useSlate } from 'slate-react';
import {
  capitalize,
  toggleMark,
  toggleBlock,
  isBlockActive,
  isMarkActive,
  isLinkActive,
} from '../../../Plugins/createSlateEditor/editorExtensions';
import { IconButton, Tooltip } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core';

interface ToolbarButtonTemplateProps {
  ariaLabel: string;
  format: string;
  icon: ReactElement;
  title: string;
  type: string;
  onMouseDown?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

export const useStyles = makeStyles(() =>
  createStyles({
    button: {
      backgroundColor: (props) => (props ? '#ccc' : 'white'),
      borderRadius: '5px',
      color: (props) => (props ? 'black' : '#aaa'),
      cursor: 'pointer',
      margin: '5px',
      padding: '5px',
    },
  })
);

const checkIsActive = (editor: Editor, format: string, type: string) => {
  switch (type) {
    case 'mark':
      return isMarkActive(editor, format);
    case 'block':
      return isBlockActive(editor, format);
    case 'link':
      return isLinkActive(editor);
  }
  return;
};

const ToolbarButtonTemplate = ({
  ariaLabel,
  format,
  icon,
  title,
  type,
  onMouseDown,
  ...rest
}: ToolbarButtonTemplateProps) => {
  const editor = useSlate();
  const mark = checkIsActive(editor, format, type);
  const classes = useStyles(mark);

  const handleOnMouseDown = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    switch (type) {
      case 'mark':
        toggleMark(editor, format);
        break;
      case 'block':
        toggleBlock(editor, format);
    }

    onMouseDown && onMouseDown(event);
  };

  return (
    // TODO: Remove TransitionComponent={({children}) => children || null} when Material-5 is released.
    <Tooltip
      title={capitalize(title)}
      placement="top"
      arrow
      TransitionComponent={({ children }) => children || null}
    >
      <IconButton
        aria-label={ariaLabel}
        className={classes.button}
        onMouseDown={(event) => handleOnMouseDown(event)}
        {...rest}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default ToolbarButtonTemplate;
