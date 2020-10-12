import { Editor } from "slate";

interface onTabProps {
  event: React.KeyboardEvent<HTMLDivElement>;
  editor: Editor;
};

const onTab = ({ event, editor }: onTabProps) => {
  // Tab increases depth

  console.log("tab")
   // Shift + Tab reduce depth
   if (event.shiftKey) {
    event.preventDefault();
    console.log("shift tab")
  }
};

export default onTab;