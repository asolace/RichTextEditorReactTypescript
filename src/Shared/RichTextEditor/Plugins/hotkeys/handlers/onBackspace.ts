import { Editor } from "slate";

interface OnBackspaceProps {
  event: React.KeyboardEvent<HTMLDivElement>;
  editor: Editor;
};

const onBackspace = ({ event, editor }: OnBackspaceProps) => {
  console.log("backspace")
};

export default onBackspace;