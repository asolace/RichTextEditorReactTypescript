import initialMockValues from '../initialMockValues';
import { Node } from 'slate';
import parseFormContent from './Parser';

describe('>> Parser <<', () => {
  describe('Should parse the entire form to the right format.', () => {
    it('Should parse to HTML string.', () => {
      const results = (data: string) => {
        expect(data).toBe(
          `<h1>Heading 1</h1><h2>Heading 2</h2><p><b><u>Title</b></u></p><p>A line of text in a <i>paragraph</i>. Where <b><i><u>awesome </b></i></u>things happen! </p><p></p><blockquote>&quot;<a href='https://www.asolace.me' target='_blank' rel='noopener noreferrer'>Jack&#39;s</a> code is <b>great</b>!&quot;</blockquote><p></p><p>Check this code out.</p><p><code>&lt;h1&gt;Hello World&lt;/h1&gt;</code></p><p></p><p><b><u>Things to do</b></u>:</p><ul><li>Watch the <b>sunrise</b>.</li><li>Watch the <u>sunset</u>.</li><li>Sail <i>away</i>.</li></ul><p></p><p><b><u>Directions</b></u>:</p><ol><li>Go to <b>&quot;The Lost Island&quot;</b>.</li><li>Find the <u>red mushroom</u>.</li><li>Fly <i>away</i>.</li></ol><p>Where the world ends.</p>IMAGE<p>Achieved.</p>`
        );
      };
      parseFormContent('html', initialMockValues.fullArray, results);
    });

    it('Should parse to JSON string.', () => {
      const expectedJson = JSON.stringify(initialMockValues.fullArray);
      const results = (data: string) => {
        expect(data).toBe(expectedJson);
      };
      parseFormContent('json', initialMockValues.fullArray, results);
    });

    it('Should parse to plain text.', () => {
      const expectedText = initialMockValues.fullArray
        .map((n) => Node.string(n))
        .join('\n');
      const results = (data: string) => {
        expect(data).toBe(expectedText);
      };
      parseFormContent('plain-text', initialMockValues.fullArray, results);
    });
  });
});
