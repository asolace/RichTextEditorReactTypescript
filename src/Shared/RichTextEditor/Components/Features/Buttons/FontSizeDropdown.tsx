import React, { useRef } from 'react';
import { ReactEditor, useSlate } from 'slate-react';
import { Range } from 'slate';
import {
  toggleBlock,
  isBlockActive,
} from '../../../Plugins/createSlateEditor/editorExtensions';
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Popover,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import { ArrowDropDown, Check, FormatSize } from '@material-ui/icons';

const useStyles = makeStyles(() =>
  createStyles({
    dropdown: {
      borderRadius: '5px',
      cursor: 'pointer',
      color: '#aaa',
      '&:hover': {
        color: 'balck',
      },
      '&:focus': {
        color: 'balck',
      },
    },
    icon: {
      verticalAlign: 'text-bottom',
      cursor: 'pointer',
    },
    listItemText: {
      textAlign: 'right',
    },
    listItemTextLarge: {
      '& span': {
        fontSize: '1.5em',
        fontWeight: 'bold',
      },
    },
    listItemTextHuge: {
      '& span': {
        fontSize: '2em',
        fontWeight: 'bold',
      },
    },
  })
);

const CheckIcon = () => <Check style={{ marginRight: '15px' }} />;

const setFontsize = (
  editor: ReactEditor,
  format: string,
  editorSelection: React.MutableRefObject<Range | null>
) => {
  if (editorSelection) {
    editor.selection = (editorSelection.current as unknown) as Range;

    toggleBlock(editor, format);
  }
};

const FontSizeDropdown = () => {
  const editor = useSlate();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const editorSelection = useRef(editor.selection);
  const open = Boolean(anchorEl);
  const id = open ? 'font-size-popover' : undefined;

  const handleClosePopover = () => setAnchorEl(null);

  const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    editorSelection.current = editor.selection;
    setAnchorEl(event.currentTarget);
  };

  const handleSelectFont = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    format: string
  ) => {
    event.preventDefault();

    setFontsize(editor, format, editorSelection);
    handleClosePopover();
  };

  return (
    <>
      <Tooltip title="Font Size" placement="top">
        <IconButton
          className={classes.dropdown}
          aria-describedby={id}
          onMouseDown={(event) => handlePopoverClick(event)}
        >
          <FormatSize className={classes.icon} />
          <ArrowDropDown className={classes.icon} />
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
        <List component="nav" aria-label="change font size list">
          <ListItem button onMouseDown={(event) => handleSelectFont(event, '')}>
            {!isBlockActive(editor, 'heading-one') &&
              !isBlockActive(editor, 'heading-two') && <CheckIcon />}
            <ListItemText primary="Normal" className={classes.listItemText} />
          </ListItem>

          <ListItem
            button
            onMouseDown={(event) => handleSelectFont(event, 'heading-two')}
          >
            {isBlockActive(editor, 'heading-two') && <CheckIcon />}
            <ListItemText
              primary="Large"
              className={`${classes.listItemText} ${classes.listItemTextLarge}`}
            />
          </ListItem>

          <ListItem
            button
            onMouseDown={(event) => handleSelectFont(event, 'heading-one')}
          >
            {isBlockActive(editor, 'heading-one') && <CheckIcon />}
            <ListItemText
              primary="Huge"
              className={`${classes.listItemText} ${classes.listItemTextHuge}`}
            />
          </ListItem>
        </List>
      </Popover>
    </>
  );
};

export default FontSizeDropdown;
