import { createEditor } from 'slate';
import { withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import { withLinks } from '../../Components/Features/Buttons/LinkButton';

const createSlateEditor = () => {
  return withLinks(withHistory(withReact(createEditor())));
};

export default createSlateEditor;
