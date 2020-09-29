import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Editor, Range } from 'slate';
import { ReactEditor, useSlate } from 'slate-react';

import BoldButton from '../Features/Buttons/BoldButton';
import ItalicButton from '../Features/Buttons/ItalicButton';
import UnderlineButton from '../Features/Buttons/UnderlineButton';
import CodeButton from '../Features/Buttons/CodeButton';
import LinkButton from '../Features/Buttons/LinkButton';

import FeaturesProps from './FeatureTypes';
import { Box, makeStyles } from '@material-ui/core';

interface PortalProps {
  children: React.ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  return ReactDOM.createPortal(children, document.body);
};

const useStyles = makeStyles((theme) => ({
  hoveringToolbar: {
    position: 'absolute',
    padding: theme.spacing(1 / 4),
    zIndex: 1,
    top: '-10000px',
    left: '-10000px',
    opacity: 0,
    backgroundColor: theme.palette.grey[200],
    transition: 'opacity 0.75s',
  },
  verticalDivider: {
    margin: '15px',
  },
}));

const defaultFeatures = {
  bold: true,
  code: true,
  fontSize: true,
  italic: true,
  link: true,
  underline: true,
};

const HoveringToolbar = ({
  features: propFeatures,
}: {
  features?: FeaturesProps;
}) => {
  const classes = useStyles();
  const editor = useSlate();
  const [features, setFeatures] = useState(defaultFeatures);
  const ref = useRef<HTMLDivElement>();
  const { bold, code, italic, link, underline } = features;

  useEffect(() => {
    setFeatures((features) => ({
      ...features,
      ...propFeatures,
    }));
  }, [propFeatures]);

  useEffect(() => {
    const el: HTMLDivElement | undefined = ref.current;
    const { selection } = editor;

    if (!el) return;

    if (
      !selection ||
      !ReactEditor.isFocused(editor) ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ''
    ) {
      el.removeAttribute('style');
      return;
    }

    const domSelection = window.getSelection();

    if (domSelection != null) {
      const domRange = domSelection.getRangeAt(0);
      const rect = domRange.getBoundingClientRect();
      el.style.opacity = `1`;
      el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight - 4}px`;
      el.style.left = `${
        rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2
      }px`;
    }
  });

  return (
    <Portal>
      <Box
        borderRadius="borderRadius"
        {...{ ref: ref }}
        className={classes.hoveringToolbar}
        aria-label="text editor hovering toolbar"
      >
        {bold && <BoldButton />}

        {italic && <ItalicButton />}

        {underline && <UnderlineButton />}

        {code && <CodeButton />}

        {link && <LinkButton />}
      </Box>
    </Portal>
  );
};

export default HoveringToolbar;
