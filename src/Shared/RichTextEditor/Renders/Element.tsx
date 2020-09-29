import React from 'react';
// import { ImageElement } from '../Toolbar/Buttons/ImageButton';

interface ElementProps {
  attributes: string;
  children: React.ReactNode;
  element: {
    type: string;
    url: string;
  };
}

const Element = ({ attributes, children, element }: ElementProps) => {
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>;
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>;
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>;
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>;
    // case 'image':
    //   return <ImageElement attributes={attributes} children={children} element={element}/>
    case 'list-item':
      return <li {...attributes}>{children}</li>;
    case 'link':
      return (
        <a {...attributes} href={element.url}>
          {children}
        </a>
      );
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>;
    default:
      return (
        <p {...attributes} style={{ margin: 0 }}>
          {children}
        </p>
      );
  }
};

export default Element;
