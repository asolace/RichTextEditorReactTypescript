import React, { useState, useRef } from 'react';
import isUrl from 'is-url';
import { ReactEditor, useSlate } from 'slate-react';
import { Transforms, Editor, Range } from 'slate';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputLabel,
  Popover,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { Link } from '@material-ui/icons';
import { useStyles } from '../../../Shared/Styles';

/**
 * HOC withLinks() is required to be plugged into createSlateEditor.tsx
 *
 * @param editor
 */
export const withLinks = (editor: ReactEditor) => {
  const { insertData, insertText, isInline } = editor;

  editor.isInline = (element) => {
    return element.type === 'link' ? true : isInline(element);
  };

  editor.insertText = (text) => {
    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertText(text);
    }
  };

  editor.insertData = (data) => {
    const text = data.getData('text/plain');

    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

const insertLink = (
  editor: ReactEditor,
  url: string,
  editorSelection: React.MutableRefObject<Range | null>
) => {
  if (editorSelection) {
    editor.selection = (editorSelection.current as unknown) as Range;
    wrapLink(editor, url);
  }
};

const isLinkActive = (editor: ReactEditor) => {
  const [link] = Editor.nodes(editor, { match: (n) => n.type === 'link' });
  return !!link;
};

const unwrapLink = (editor: ReactEditor) => {
  Transforms.unwrapNodes(editor, { match: (n) => n.type === 'link' });
};

const wrapLink = (editor: ReactEditor, url: string) => {
  if (isLinkActive(editor)) {
    unwrapLink(editor);
  }

  const { selection } = editor;
  const isCollapsed = selection && Range.isCollapsed(selection);
  const link = {
    type: 'link',
    url,
    children: isCollapsed ? [{ text: url }] : [],
  };

  if (isCollapsed) {
    Transforms.insertNodes(editor, link);
  } else {
    Transforms.wrapNodes(editor, link, { split: true });
    Transforms.collapse(editor, { edge: 'end' });
  }
};

const LinkButton = () => {
  const editor = useSlate();
  const props = isLinkActive(editor);
  const classes = useStyles(props);
  const [url, setUrl] = useState('');
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const editorSelection = useRef(editor.selection);
  const open = Boolean(anchorEl);
  const id = open ? 'link-popover' : undefined;

  const handleClosePopover = () => setAnchorEl(null);

  const handleLinkClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    editorSelection.current = editor.selection;
    setAnchorEl(event.currentTarget);
  };

  const handleOk = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!url) return;

    insertLink(editor, url, editorSelection);
    handleClosePopover();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <>
      <Tooltip title="Link" placement="top">
        <IconButton
          aria-describedby={id}
          aria-label="link button"
          className={classes.button}
          onMouseDown={(event) => handleLinkClick(event)}
        >
          <Link className={classes.icon} />
        </IconButton>
      </Tooltip>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Box className={classes.box}>
          <Typography
            className={classes.insertTitle}
            variant="h5"
            aria-label="Insert link"
          >
            Insert Link
          </Typography>

          <form onSubmit={handleOk}>
            <FormControl className={classes.form}>
              <InputLabel htmlFor="url">URL</InputLabel>
              <Input
                id="url"
                aria-describedby="helper-url"
                onChange={onChange}
              />
              <FormHelperText id="helper-url" className={classes.urlHelper}>
                What URL should this link go to?
              </FormHelperText>
            </FormControl>

            <Box alignSelf="flex-end">
              <Button
                color="primary"
                className={classes.save}
                onMouseDown={handleOk}
                variant="contained"
              >
                Ok
              </Button>
              <Button onMouseDown={handleClosePopover}>Cancel</Button>
            </Box>
          </form>
        </Box>
      </Popover>
    </>
  );
};

export default LinkButton;
