import { Editor, Node, Text } from 'slate';
import escapeHtml from 'escape-html';

enum NodeTypes {
  BlockQuote = 'block-quote',
  BulletedList = 'bulleted-list',
  HeadingOne = 'heading-one',
  HeadingTwo = 'heading-two',
  ImageType = 'image',
  LinkType = 'link',
  ListItem = 'list-item',
  NumberedList = 'numbered-list',
  ParagraphType = 'paragraph',
}

const Serializers = {
  [NodeTypes.BlockQuote]: (children: string) =>
    `<blockquote>${children}</blockquote>`,
  [NodeTypes.BulletedList]: (node: Editor) => parseList(node),
  [NodeTypes.HeadingOne]: (children: string) => `<h1>${children}</h1>`,
  [NodeTypes.HeadingTwo]: (children: string) => `<h2>${children}</h2>`,
  [NodeTypes.ImageType]: () => `IMAGE`,
  [NodeTypes.LinkType]: (node: Editor) => parseLink(node),
  [NodeTypes.ListItem]: (children: string) => `<li>${children}</li>`,
  [NodeTypes.NumberedList]: (node: Editor) => parseList(node),
  [NodeTypes.ParagraphType]: (children: string) => `<p>${children}</p>`,
};

const parseMarks = (node: Node): string => {
  const parsedString = escapeHtml(node.text as string);
  let beginningTags = '';
  let endingTags = '';

  if (node.bold) {
    beginningTags = beginningTags + '<b>';
    endingTags = endingTags + '</b>';
  }

  if (node.code) {
    beginningTags = beginningTags + '<code>';
    endingTags = endingTags + '</code>';
  }

  if (node.italic) {
    beginningTags = beginningTags + '<i>';
    endingTags = endingTags + '</i>';
  }

  if (node.underline) {
    beginningTags = beginningTags + '<u>';
    endingTags = endingTags + '</u>';
  }

  return `${beginningTags}${parsedString}${endingTags}`;
};

const parseLink = (node: Editor): string => {
  const text: string = node.children
    .map((n: Node) => serializeHTML(n))
    .join('');

  return `<a href='${node.url}' target='_blank' rel='noopener noreferrer'>${text}</a>`;
};

const parseList = (node: Editor): string => {
  const list: string = node.children
    .map((n: Node) => serializeHTML(n))
    .join('');

  if (node.type === NodeTypes.NumberedList) return `<ol>${list}</ol>`;

  return `<ul>${list}</ul>`;
};

export const serializeHTML = (node: Node) => {
  if (Text.isText(node)) {
    return parseMarks(node);
  }

  const children: string = node.children
    .map((n: Node) => serializeHTML(n))
    .join('');
  const nodeType = node.type
    ? (node.type as NodeTypes)
    : NodeTypes.ParagraphType;

  if (
    nodeType === NodeTypes.NumberedList ||
    nodeType === NodeTypes.BulletedList ||
    nodeType === NodeTypes.LinkType
  ) {
    return Serializers[nodeType](node as Editor);
  } else {
    return Serializers[nodeType](children);
  }
};

export const serializePlainText = (value: Node[]): string => {
  return value.map((n) => Node.string(n)).join('\n');
};
