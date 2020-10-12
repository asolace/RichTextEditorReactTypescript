import { Editor } from "slate";
import isHotkey from 'is-hotkey';
import { toggleMark } from "../../createSlateEditor/editorExtensions";

interface OnMarkProps {
  event: React.KeyboardEvent<HTMLDivElement>;
  editor: Editor;
};

interface HotkeyProps {
  [key: string]: string;
};

const MARK_HOTKEYS: HotkeyProps = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
};

const onMark = ({ event, editor }: OnMarkProps) => {
  for (const hotkey in MARK_HOTKEYS) {
    if (isHotkey(hotkey, (event as unknown) as KeyboardEvent)) {
      event.preventDefault();
      const mark = MARK_HOTKEYS[hotkey];

      toggleMark(editor, mark);
    }
  }
};

export default onMark;