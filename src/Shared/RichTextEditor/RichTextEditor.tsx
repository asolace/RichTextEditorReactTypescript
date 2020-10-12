import { Box, createStyles, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { Node } from 'slate';
import { Slate } from 'slate-react';
import initialSlateValues from './initialSlateValues';
import createSlateEditor from './Plugins/createSlateEditor/createSlateEditor';
import { getDeserializedPropsHtml } from './Utils/Deserialize';
import parseFormContent from './Utils/Parser';

interface Props {
  className?: string;
  initialValue?: string;
  parseFormat?: string;
  onChange: (value: string) => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      width: '100%',
      borderRadius: '1rem',
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

const RichTextEditor = ({
  children,
  className,
  initialValue,
  parseFormat,
  onChange,
}: PropsWithChildren<Props>) => {
  const InitialValue = initialValue
    ? getDeserializedPropsHtml(initialValue)
    : initialSlateValues.emptyArray;

  const classes = useStyles();
  const [value, setValue] = useState<Node[]>(InitialValue);
  const editor = useMemo(() => createSlateEditor(), []);

  useEffect(() => {
    parseFormContent(parseFormat, value, onChange);
  });

  return (
    <Box className={clsx(classes.wrapper, className)} aria-label='rich text editor form'>
      <Slate
        id='slate-editor'
        editor={editor}
        value={value}
        onChange={newValue => setValue(newValue)}>
        {children}
      </Slate>
    </Box>
  );
};

export default RichTextEditor;
