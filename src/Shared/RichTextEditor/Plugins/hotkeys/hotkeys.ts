import { Editor } from 'slate';
import onEnter from './handlers/onEnter';
import onMark from './handlers/onMark';
import onTab from './handlers/onTab';
import onBackspace from './handlers/onBackspace';

interface KeydownProps {
  event: React.KeyboardEvent<HTMLDivElement>;
  editor: Editor;
  onEnterSubmit?: () => void;
};

const KEY_ENTER = 'Enter'; 
const KEY_TAB = 'Tab';
const KEY_BACKSPACE = 'Backspace';

const onKeyDownHotkey = ({ event, editor, onEnterSubmit }: KeydownProps) => {
  switch (event.key) {
    case KEY_ENTER:
      onEnter({ event, editor, onEnterSubmit });
      break;
    case KEY_TAB:
      onTab({ event, editor });
      break;
    case KEY_BACKSPACE:
      onBackspace({ event, editor });
      break;
    case 'mod+b':
    case 'mod+i':
    case 'mod+u':
    case 'mod+1':
      onMark({ event, editor });
      break;
    default:
      break;
  };
};

export default onKeyDownHotkey;
