import React, { useEffect, useState } from 'react';

import BoldButton from '../Features/Buttons/BoldButton';
import ItalicButton from '../Features/Buttons/ItalicButton';
import UnderlineButton from '../Features/Buttons/UnderlineButton';
import CodeButton from '../Features/Buttons/CodeButton';
import LinkButton from '../Features/Buttons/LinkButton';
import QuoteButton from '../Features/Buttons/QuoteButton';
import NumberedListButton from '../Features/Buttons/NumberedListButton';
import BulletedListButton from '../Features/Buttons/BulletedListButton';
import FontSizeDropdown from '../Features/Buttons/FontSizeDropdown';

import FeaturesProps from './FeatureTypes';
import { Divider, Toolbar, createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    toolbar: {
      position: 'relative',
      padding: '0 15px',
      borderBottom: '2px solid #eee',
      backgroundColor: '#fff',
      borderTopRightRadius: '5px',
      borderTopLeftRadius: '5px',
      display: 'flex',
      flexWrap: 'wrap',
    },
    verticalDivider: {
      margin: '15px',
    },
  })
);

const defaultFeatures = {
  bold: true,
  code: true,
  fontSize: true,
  italic: true,
  image: true,
  link: true,
  listBulleted: true,
  listNumbered: true,
  quote: true,
  underline: true,
};

const SlateToolbar = ({
  features: propFeatures,
}: {
  features?: FeaturesProps;
}) => {
  const classes = useStyles();
  const [features, setFeatures] = useState(defaultFeatures);

  useEffect(() => {
    setFeatures((features) => ({
      ...features,
      ...propFeatures,
    }));
  }, [propFeatures]);

  const {
    bold,
    code,
    fontSize,
    italic,
    link,
    listBulleted,
    listNumbered,
    quote,
    underline,
  } = features;

  return (
    <Toolbar className={classes.toolbar} aria-label="text editor toolbar">
      {fontSize && (
        <>
          <FontSizeDropdown />

          <Divider
            orientation="vertical"
            flexItem
            className={classes.verticalDivider}
          />
        </>
      )}

      {bold && <BoldButton />}

      {italic && <ItalicButton />}

      {underline && <UnderlineButton />}

      {code && <CodeButton />}

      {link && <LinkButton />}

      <Divider
        orientation="vertical"
        flexItem
        className={classes.verticalDivider}
      />

      {quote && <QuoteButton />}

      {listNumbered && <NumberedListButton />}

      {listBulleted && <BulletedListButton />}
    </Toolbar>
  );
};

export default SlateToolbar;
