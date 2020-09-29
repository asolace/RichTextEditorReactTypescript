import { getDeserializedPropsHtml } from './Deserialize';
import initialMockValue from '../initialMockValues';

describe('>> Deserializer <<', () => {
  it(`Should deserialize to <h1>.`, () => {
    const htmlString = '<h1>Heading 1</h1>';
    const expectedObject = [
      {
        type: 'heading-one',
        children: [{ text: 'Heading 1' }],
      },
    ];

    expect(getDeserializedPropsHtml(htmlString)).toStrictEqual(expectedObject);
  });

  it(`Should deserialize to <h2>.`, () => {
    const htmlString = '<h2>Heading 2</h2>';
    const expectedObject = [
      {
        type: 'heading-two',
        children: [{ text: 'Heading 2' }],
      },
    ];

    expect(getDeserializedPropsHtml(htmlString)).toStrictEqual(expectedObject);
  });

  it(`Should deserialize to <p> with bold and underline.`, () => {
    const htmlString = '<p><b><u>Title</b></u></p>';
    const expectedObject = [
      {
        type: 'paragraph',
        children: [{ text: 'Title', underline: true, bold: true }],
      },
    ];

    expect(getDeserializedPropsHtml(htmlString)).toStrictEqual(expectedObject);
  });

  it(`Should deserialize paragraphs with some words to be either/or all marks.`, () => {
    const htmlString =
      '<p>A line of text in a <i>paragraph</i>. Where <b><i><u>awesome </b></i></u>things happen! </p>';
    const expectedObject = [
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

    expect(getDeserializedPropsHtml(htmlString)).toStrictEqual(expectedObject);
  });

  it(`Should deserialize an empty line.`, () => {
    const htmlString = '<p></p>';
    const expectedObject = [
      {
        type: 'paragraph',
        children: [{ text: '' }],
      },
    ];

    expect(getDeserializedPropsHtml(htmlString)).toStrictEqual(expectedObject);
  });

  it(`Should deserialize a simple block quote.`, () => {
    const htmlString =
      '<blockquote>&quot;What a great life!&quot;</blockquote>';
    const expectedObject = [
      {
        type: 'block-quote',
        children: [{ text: '"What a great life!"' }],
      },
    ];

    expect(getDeserializedPropsHtml(htmlString)).toStrictEqual(expectedObject);
  });

  it(`Should deserialize a block quote with a link.`, () => {
    const htmlString = `<blockquote>&quot;<a href='https://www.asolace.me' target='_blank' rel='noopener noreferrer'>Jack&#39;s</a> code is <b>great</b>!&quot;</blockquote>`;
    const expectedObject = [
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

    expect(getDeserializedPropsHtml(htmlString)).toStrictEqual(expectedObject);
  });

  it(`Should deserialize a code tag.`, () => {
    const htmlString = '<p><code>&lt;h1&gt;Hello World&lt;/h1&gt;</code></p>';
    const expectedObject = [
      {
        type: 'paragraph',
        children: [{ text: '<h1>Hello World</h1>', code: true }],
      },
    ];

    expect(getDeserializedPropsHtml(htmlString)).toStrictEqual(expectedObject);
  });

  it(`Should deserialize a bulleted list.`, () => {
    const htmlString =
      '<ul><li>Watch the <b>sunrise</b>.</li><li>Watch the <u>sunset</u>.</li><li>Sail <i>away</i>.</li></ul>';
    const expectedObject = [
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

    expect(getDeserializedPropsHtml(htmlString)).toStrictEqual(expectedObject);
  });

  it(`Should deserialize a numbered list.`, () => {
    const htmlString =
      '<ol><li>Go to <b>&quot;The Lost Island&quot;</b>.</li><li>Find the <u>red mushroom</u>.</li><li>Fly <i>away</i>.</li></ol>';
    const expectedObject = [
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

    expect(getDeserializedPropsHtml(htmlString)).toStrictEqual(expectedObject);
  });

  it('Should deserialize object strings.', () => {
    const objectString = String(initialMockValue.fullArray);
    const expectedObject = [
      {
        children: [
          {
            text:
              '[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]',
          },
        ],
        type: 'paragraph',
      },
    ];
    expect(getDeserializedPropsHtml(objectString)).toStrictEqual(
      expectedObject
    );
  });
});
