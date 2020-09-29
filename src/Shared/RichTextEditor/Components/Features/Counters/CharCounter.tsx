import React from 'react';
import { Node } from 'slate';
import { useSlate } from 'slate-react';
import { serializePlainText } from '../../../Utils/Serialize';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  text: {
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
  },
  textError: {
    color: theme.palette.error.main,
  },
}));

interface CharCounterProps {
  maxChars: number;
}

const getCharLength = (nodes: Node[]) => {
  return serializePlainText(nodes).length;
};

const CharCounter = ({ maxChars }: CharCounterProps) => {
  const classes = useStyles();
  const editor = useSlate();
  const { children } = editor;

  const charLength = getCharLength(children);
  const errorExceedCharsLimit = charLength > maxChars;

  return (
    <Typography
      variant="subtitle2"
      color="textSecondary"
      aria-label="rich text editor char counter"
      className={`${classes.text} ${
        errorExceedCharsLimit && classes.textError
      }`}
    >
      {maxChars ? `${charLength} / ${maxChars}` : charLength} characters
    </Typography>
  );
};

export default CharCounter;
