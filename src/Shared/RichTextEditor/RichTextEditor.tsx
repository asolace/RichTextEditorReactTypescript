import React, { useState, useMemo, PropsWithChildren } from 'react';
import { Node } from 'slate';
import { Slate } from 'slate-react';

import createSlateEditor from './Plugins/createSlateEditor/createSlateEditor';
import initialMockValues from './initialSlateValues';
import { getDeserializedPropsHtml } from './Utils/Deserialize';
import FooterButtons from './Components/FooterButtons/FooterButtons';

import { Box, makeStyles } from '@material-ui/core';

export interface SlateProps {
  className?: string;
  initialValue?: string;
  loading?: boolean;
  submitBtnName?: string;
  parseFormat?: string;
  handleCancel: () => void;
  handleFormData: (value: string) => void;
}

const useStyles = makeStyles(() => ({
  wrapper: {
    backgroundColor: '#fff',
    paddingBottom: '20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mb: 2,
  },
}));

const RichTextEditor = ({
  children,
  className,
  initialValue,
  loading = false,
  parseFormat,
  submitBtnName,
  handleCancel,
  handleFormData,
}: PropsWithChildren<SlateProps>) => {
  const InitialValue = initialValue
    ? getDeserializedPropsHtml(initialValue)
    : initialMockValues.emptyArray;

  const classes = useStyles();
  const [value, setValue] = useState<Node[]>(InitialValue);
  const editor = useMemo(() => createSlateEditor(), []);

  return (
    <Box
      className={`${classes.wrapper} ${className}`}
      aria-label="rich text editor form"
    >
      <Slate
        id="slate-editor"
        editor={editor}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      >
        {children}

        <FooterButtons
          loading={loading}
          parseFormat={parseFormat}
          submitBtnName={submitBtnName}
          value={value}
          handleCancel={handleCancel}
          handleFormData={handleFormData}
        />
      </Slate>
    </Box>
  );
};

export default RichTextEditor;
