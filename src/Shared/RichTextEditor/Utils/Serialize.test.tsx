import { serializeHTML, serializePlainText } from './Serialize';
import imageOfJackB64 from '../Assets/image-of-sunset-b64';

const h1Header = [
  {
    type: 'heading-one',
    children: [{ text: 'Heading 1' }],
  },
];

const h2Header = [
  {
    type: 'heading-two',
    children: [{ text: 'Heading 2' }],
  },
];

const title = [
  {
    type: 'paragraph',
    children: [{ text: 'Title', underline: true, bold: true }],
  },
];

const paragraph = [
  {
    type: 'paragraph',
    children: [
      { text: 'A line of text in a ' },
      { text: 'paragraph', italic: true },
      { text: '. Where ' },
      { text: 'awesome ', bold: true, underline: true, italic: true },
      { text: 'things happen! ' },
    ],
  },
];

const emptyLine = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
];

const blockQuote = [
  {
    type: 'block-quote',
    children: [{ text: '"What a great life!"' }],
  },
];

const blockQuoteWithLink = [
  {
    type: 'block-quote',
    children: [
      { text: '"' },
      {
        children: [{ text: "Jack's" }],
        type: 'link',
        url: 'https://www.asolace.me',
      },
      { text: ' code is ' },
      { text: 'great', bold: true },
      { text: '!"' },
    ],
  },
];

const code = [
  {
    type: 'paragraph',
    children: [{ text: '<h1>Hello World</h1>', code: true }],
  },
];

const bulletedList = [
  {
    type: 'bulleted-list',
    children: [
      {
        type: 'list-item',
        children: [
          { text: 'Watch the ' },
          { text: 'sunrise', bold: true },
          { text: '.' },
        ],
      },
      {
        type: 'list-item',
        children: [
          { text: 'Watch the ' },
          { text: 'sunset', underline: true },
          { text: '.' },
        ],
      },
      {
        type: 'list-item',
        children: [
          { text: 'Sail ' },
          { text: 'away', italic: true },
          { text: '.' },
        ],
      },
    ],
  },
];

const numberedList = [
  {
    type: 'numbered-list',
    children: [
      {
        type: 'list-item',
        children: [
          { text: 'Go to ' },
          { text: '"The Lost Island"', bold: true },
          { text: '.' },
        ],
      },
      {
        type: 'list-item',
        children: [
          { text: 'Find the ' },
          { text: 'red mushroom', underline: true },
          { text: '.' },
        ],
      },
      {
        type: 'list-item',
        children: [
          { text: 'Fly ' },
          { text: 'away', italic: true },
          { text: '.' },
        ],
      },
    ],
  },
];

const image = [
  {
    type: 'image',
    url: imageOfJackB64,
    children: [{ text: '' }],
  },
];

describe('>> Serializer <<', () => {
  describe('HTML', () => {
    it(`Should serialize to <h1>.`, () => {
      const html = serializeHTML(h1Header[0]);
      expect(html).toBe('<h1>Heading 1</h1>');
    });

    it(`Should serialize to <h2>.`, () => {
      const html = serializeHTML(h2Header[0]);
      expect(html).toBe('<h2>Heading 2</h2>');
    });

    it(`Should serialize to <p> with bold and underline.`, () => {
      const html = serializeHTML(title[0]);
      expect(html).toBe('<p><b><u>Title</b></u></p>');
    });

    it(`Should serialize paragraphs with some words to be either/or all marks.`, () => {
      const html = serializeHTML(paragraph[0]);
      expect(html).toBe(
        '<p>A line of text in a <i>paragraph</i>. Where <b><i><u>awesome </b></i></u>things happen! </p>'
      );
    });

    it(`Should serialize an empty line.`, () => {
      const html = serializeHTML(emptyLine[0]);
      expect(html).toBe('<p></p>');
    });

    it(`Should serialize a simple block quote.`, () => {
      const html = serializeHTML(blockQuote[0]);
      expect(html).toBe(
        '<blockquote>&quot;What a great life!&quot;</blockquote>'
      );
    });

    it(`Should serialize a block quote with a link.`, () => {
      const html = serializeHTML(blockQuoteWithLink[0]);
      expect(html).toBe(
        `<blockquote>&quot;<a href='https://www.asolace.me' target='_blank' rel='noopener noreferrer'>Jack&#39;s</a> code is <b>great</b>!&quot;</blockquote>`
      );
    });

    it(`Should serialize a code tag.`, () => {
      const html = serializeHTML(code[0]);
      expect(html).toBe('<p><code>&lt;h1&gt;Hello World&lt;/h1&gt;</code></p>');
    });

    it(`Should serialize a bulleted list.`, () => {
      const html = serializeHTML(bulletedList[0]);
      expect(html).toBe(
        '<ul><li>Watch the <b>sunrise</b>.</li><li>Watch the <u>sunset</u>.</li><li>Sail <i>away</i>.</li></ul>'
      );
    });

    it(`Should serialize a numbered list.`, () => {
      const html = serializeHTML(numberedList[0]);
      expect(html).toBe(
        '<ol><li>Go to <b>&quot;The Lost Island&quot;</b>.</li><li>Find the <u>red mushroom</u>.</li><li>Fly <i>away</i>.</li></ol>'
      );
    });

    // TODO: should serialize image
    it(`TODO: Should serialize an image.`, () => {
      const html = serializeHTML(image[0]);
      expect(html).toBe('IMAGE');
    });
  });

  // PLAIN TEXT
  describe('Plain Text', () => {
    it(`Should serialize to <h1>.`, () => {
      const html = serializePlainText(h1Header);
      expect(html).toBe('Heading 1');
    });

    it(`Should serialize to <h2>.`, () => {
      const html = serializePlainText(h2Header);
      expect(html).toBe('Heading 2');
    });

    it(`Should serialize to <p> with bold and underline.`, () => {
      const html = serializePlainText(title);
      expect(html).toBe('Title');
    });

    it(`Should serialize paragraphs with some words to be either/or all marks.`, () => {
      const html = serializePlainText(paragraph);
      expect(html).toBe(
        'A line of text in a paragraph. Where awesome things happen! '
      );
    });

    it(`Should serialize an empty line.`, () => {
      const html = serializePlainText(emptyLine);
      expect(html).toBe('');
    });

    it(`Should serialize a simple block quote.`, () => {
      const html = serializePlainText(blockQuote);
      expect(html).toBe('"What a great life!"');
    });

    it(`Should serialize a block quote with a link.`, () => {
      const html = serializePlainText(blockQuoteWithLink);
      expect(html).toBe(`"Jack's code is great!"`);
    });

    it(`Should serialize a code tag.`, () => {
      const html = serializePlainText(code);
      expect(html).toBe('<h1>Hello World</h1>');
    });

    it(`Should serialize a bulleted list.`, () => {
      const html = serializePlainText(bulletedList);
      expect(html).toBe('Watch the sunrise.Watch the sunset.Sail away.');
    });

    it(`Should serialize a numbered list.`, () => {
      const html = serializePlainText(numberedList);
      expect(html).toBe(
        'Go to "The Lost Island".Find the red mushroom.Fly away.'
      );
    });

    // TODO: should serialize image
    it(`TODO: Should serialize an image.`, () => {
      const html = serializePlainText(image);
      expect(html).toBe('');
    });
  });
});
