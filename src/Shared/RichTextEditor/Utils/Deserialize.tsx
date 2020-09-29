import { jsx } from 'slate-hyperscript';
import { Node } from 'slate';

interface NodeParams {
  children: Node[];
  el: ChildNode;
}

interface LinkParams {
  children: Node[];
  el: Element;
}

enum NodeTypes {
  BlockQuote = 'BLOCKQUOTE',
  BulletedList = 'UL',
  HeadingOne = 'H1',
  HeadingTwo = 'H2',
  ImageType = 'IMAGE',
  ListItem = 'LI',
  NumberedList = 'OL',
  ParagraphType = 'P',
}

enum LinkTag {
  LinkType = 'A',
}

enum MarkTags {
  Bold = 'B',
  Code = 'CODE',
  Italic = 'I',
  Underline = 'U',
}

enum NodeNumberRef {
  Text = 3,
  Element = 1,
}

type DeserializeElement = HTMLElement | ChildNode | Element;

const Deserializers = {
  [LinkTag.LinkType]: (params: LinkParams) =>
    jsx(
      'element',
      { type: 'link', url: params.el.getAttribute('href') },
      params.children
    ),
  [NodeTypes.BlockQuote]: (params: NodeParams) =>
    jsx('element', { type: 'block-quote' }, params.children),
  [NodeTypes.HeadingOne]: (params: NodeParams) =>
    jsx('element', { type: 'heading-one' }, params.children),
  [NodeTypes.HeadingTwo]: (params: NodeParams) =>
    jsx('element', { type: 'heading-two' }, params.children),
  [NodeTypes.ImageType]: () => `IMAGE`,
  [NodeTypes.ListItem]: (params: NodeParams) =>
    jsx('element', { type: 'list-item' }, params.children),
  [NodeTypes.NumberedList]: (params: NodeParams) =>
    jsx('element', { type: 'numbered-list' }, params.children),
  [NodeTypes.ParagraphType]: (params: NodeParams) => {
    const children = params.children.length === 0 ? [''] : params.children;
    return jsx('element', { type: 'paragraph' }, children);
  },
  [NodeTypes.BulletedList]: (params: NodeParams) =>
    jsx('element', { type: 'bulleted-list' }, params.children),
  [MarkTags.Bold]: (params: NodeParams) =>
    jsx('text', { bold: true }, params.children),
  [MarkTags.Code]: (params: NodeParams) =>
    jsx('text', { code: true }, params.children),
  [MarkTags.Italic]: (params: NodeParams) =>
    jsx('text', { italic: true }, params.children),
  [MarkTags.Underline]: (params: NodeParams) =>
    jsx('text', { underline: true }, params.children),
};

const isLink = (nodeName: string) => nodeName === 'A';
const isMark = (nodeName: string) =>
  Object.values(MarkTags).includes(nodeName as MarkTags);
const isNode = (nodeName: string) =>
  Object.values(NodeTypes).includes(nodeName as NodeTypes);

export const getDeserializedPropsHtml = (data: string): Node[] => {
  // Tests if string is Html format.
  const htmlRegex = /<\/?[a-z][\s\S]*>/i;
  if (htmlRegex.test(data)) {
    const htmlDocument = new DOMParser().parseFromString(data, 'text/html');
    return deserializeHTML(htmlDocument.body) as Node[];
  }

  return [
    {
      type: 'paragraph',
      children: [{ text: data }],
    },
  ];
};

export const deserializeHTML = (
  element: DeserializeElement
): Node[] | Node | string | null => {
  if (element.nodeType === NodeNumberRef.Text) {
    return element.textContent;
  } else if (element.nodeType !== NodeNumberRef.Element) {
    return null;
  }

  // 1 comes here
  const children = Array.from(element.childNodes).map(
    deserializeHTML
  ) as Node[];
  const params = { children, el: element };

  switch (true) {
    case isLink(element.nodeName):
      return Deserializers['A'](params as LinkParams);
    case isMark(element.nodeName):
      return Deserializers[element.nodeName as MarkTags](params);
    case isNode(element.nodeName):
      return Deserializers[element.nodeName as NodeTypes](params);
    default:
      return children;
  }
};
