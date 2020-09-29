import imageOfJackB64 from './Assets/image-of-sunset-b64';

export default {
  /**
   * Has most variations of tags.
   * Mainly used for testing.
   */
  fullArray: [
    {
      type: 'heading-one',
      children: [{ text: 'Heading 1' }],
    },

    {
      type: 'heading-two',
      children: [{ text: 'Heading 2' }],
    },

    {
      type: 'paragraph',
      children: [{ text: 'Title', underline: true, bold: true }],
    },

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

    {
      type: 'paragraph',
      children: [{ text: '' }],
    },

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

    {
      type: 'paragraph',
      children: [{ text: '' }],
    },

    {
      type: 'paragraph',
      children: [{ text: 'Check this code out.' }],
    },

    {
      type: 'paragraph',
      children: [{ text: '<h1>Hello World</h1>', code: true }],
    },

    {
      type: 'paragraph',
      children: [{ text: '' }],
    },

    {
      type: 'paragraph',
      children: [
        { text: 'Things to do', bold: true, underline: true },
        { text: ':' },
      ],
    },

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

    {
      type: 'paragraph',
      children: [{ text: '' }],
    },

    {
      type: 'paragraph',
      children: [
        { text: 'Directions', bold: true, underline: true },
        { text: ':' },
      ],
    },

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

    {
      type: 'paragraph',
      children: [{ text: 'Where the world ends.' }],
    },

    {
      type: 'image',
      url: imageOfJackB64,
      children: [{ text: '' }],
    },

    {
      type: 'paragraph',
      children: [{ text: 'Achieved.' }],
    },
  ],

  /**
   * Has most variations of tags.
   * Mainly used for testing.
   */
  fullHtmlString: `<h1>Heading 1</h1><h2>Heading 2</h2><p><b><u>Title</b></u></p><p>A line of text in a <i>paragraph</i>. Where <b><i><u>awesome </b></i></u>things happen! </p><p></p><blockquote>&quot;<a href='https://www.asolace.me' target='_blank' rel='noopener noreferrer'>Jack&#39;s</a> code is <b>great</b>!&quot;</blockquote><p></p><p>Check this code out.</p><p><code>&lt;h1&gt;Hello World&lt;/h1&gt;</code></p><p></p><p><b><u>Things to do</b></u>:</p><ul><li>Watch the <b>sunrise</b>.</li><li>Watch the <u>sunset</u>.</li><li>Sail <i>away</i>.</li></ul><p></p><p><b><u>Directions</b></u>:</p><ol><li>Go to <b>&quot;The Lost Island&quot;</b>.</li><li>Find the <u>red mushroom</u>.</li><li>Fly <i>away</i>.</li></ol><p>Where the world ends.</p><p>Achieved.</p>`,
};
