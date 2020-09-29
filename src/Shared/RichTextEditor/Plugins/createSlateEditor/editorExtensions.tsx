import { Editor, Transforms } from 'slate';

const LIST_TYPES = ['numbered-list', 'bulleted-list'];

/**
 * Transforms word/each word to capitalize.
 *
 * @param text
 *
 * @returns {string}
 */
export const capitalize = (text: string) => {
  return text
    .toLowerCase()
    .split(' ')
    .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
    .join(' ');
};

/**
 * Checks if text block are active.
 * Block text include: [Quote, Numbered List, BulletedList].
 *
 * @param editor
 * @param format
 *
 * @returns {boolean}
 */
export const isBlockActive = (editor: Editor, format: string) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n.type === format,
  });

  return !!match;
};

/**
 * Checks if text are marked active.
 * Mark items include: [Bold, Italic, Link, Underline, Code].
 *
 * @param editor
 * @param format
 *
 * @returns {boolean}
 */
export const isMarkActive = (editor: Editor, format: string) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

/**
 * Checks if text is a link.
 *
 * @param editor
 * @param format
 *
 * @returns {boolean}
 */
export const isLinkActive = (editor: Editor) => {
  const [link] = Editor.nodes(editor, { match: (n) => n.type === 'link' });
  return !!link;
};

/**
 * Toggles text to the selected block format.
 * Block formats includes [Bold, Italic, Link, Underline, Code].
 *
 * @param editor
 * @param format
 */
export const toggleBlock = (editor: Editor, format: string) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) => LIST_TYPES.includes(n.type as string),
    split: true,
  });

  Transforms.setNodes(editor, {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  });

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

/**
 * Toggles text to the selected mark format.
 * Mark formats includes [Bold, Italic, Link, Underline, Code].
 *
 * @param editor
 * @param format
 */
export const toggleMark = (editor: Editor, format: string) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};
