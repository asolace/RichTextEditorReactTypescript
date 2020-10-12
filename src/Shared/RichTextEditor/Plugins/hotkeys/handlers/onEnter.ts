import { Editor } from "slate";
import { checkListBlock, newLine } from "../../createSlateEditor/editorExtensions";

interface OnEnterProps {
  event: React.KeyboardEvent<HTMLDivElement>;
  editor: Editor;
  onEnterSubmit?: () => void;
};

const onEnter = ({ event, editor, onEnterSubmit }: OnEnterProps) => {
  if (checkListBlock(editor)) return;

  if (event.shiftKey && onEnterSubmit) {
    event.preventDefault();

    onEnterSubmit();
  };

  newLine(editor, event);
};

export default onEnter;