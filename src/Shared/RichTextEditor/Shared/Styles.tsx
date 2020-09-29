import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
  createStyles({
    box: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '5px',
    },
    button: {
      backgroundColor: (props) => (props ? '#ccc' : 'white'),
      borderRadius: '5px',
      color: (props) => (props ? 'black' : '#aaa'),
      cursor: 'pointer',
      margin: '5px',
      padding: '5px',
    },
    buttons: {
      fontWeight: 'bold',
    },
    cancel: {
      marginRight: '20px',
    },
    editor: {
      backgroundColor: '#fff',
      padding: '20px',
    },
    icon: {
      verticalAlign: 'text-bottom',
      cursor: 'pointer',
    },
    insertTitle: {
      marginBottom: '10px',
    },
    form: {
      marginBottom: '30px',
    },
    ok: {
      marginRight: theme.spacing(2),
    },
    save: {
      marginRight: theme.spacing(2),
    },
    spinner: {
      marginLeft: theme.spacing(1),
    },
    urlHelper: {
      fontSize: '1rem',
    },
  })
);
