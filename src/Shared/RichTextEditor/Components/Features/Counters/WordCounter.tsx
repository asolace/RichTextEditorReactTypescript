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

interface WordCounterProps {
  maxWords: number;
}

const getWordsLength = (nodes: Node[]) => {
  const content = serializePlainText(nodes);
  const match = content.match(/\b[-?(\w+)?]+\b/gi);

  return match && match.length > 0 ? match.length : 0;
};

const WordCounter = ({ maxWords }: WordCounterProps) => {
  const classes = useStyles();
  const editor = useSlate();
  const { children } = editor;
  const wordsLength = getWordsLength(children);
  const errorExceedWordsLimit = wordsLength > maxWords;

  return (
    <Typography
      variant="subtitle2"
      color="textSecondary"
      aria-label="rich text editor word counter"
      className={`${classes.text} ${
        errorExceedWordsLimit && classes.textError
      }`}
    >
      {maxWords ? `${wordsLength} / ${maxWords}` : wordsLength} words
    </Typography>
  );
};

export default WordCounter;
