import React from 'react';
import WordCounter from './WordCounter';
import CharCounter from './CharCounter';
import { Box, Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  box: {
    marginTop: '20px',
    marginBottom: '20px',
  },
}));

const Counter = () => {
  const classes = useStyles();

  return (
    <Box
      className={classes.box}
      aria-label="rich text editor word and char counter."
    >
      <Divider />

      <Box display="flex" justifyContent="space-between" mr={1}>
        <WordCounter maxWords={42} />
        <CharCounter maxChars={200} />
      </Box>
    </Box>
  );
};

export default Counter;
