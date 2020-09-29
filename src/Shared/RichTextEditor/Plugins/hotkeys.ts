import { Editor } from 'slate';
import isHotkey from 'is-hotkey';
import { toggleMark } from './createSlateEditor/editorExtensions';

interface HotkeysProps {
  [key: string]: string;
}

const HOTKEYS: HotkeysProps = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
};

const onKeyDownHotkey = (
  event: React.KeyboardEvent<HTMLDivElement>,
  editor: Editor
) => {
  for (const hotkey in HOTKEYS) {
    if (isHotkey(hotkey, (event as unknown) as KeyboardEvent)) {
      event.preventDefault();
      const mark = HOTKEYS[hotkey];

      toggleMark(editor, mark);
    }
  }
};

export default onKeyDownHotkey;
