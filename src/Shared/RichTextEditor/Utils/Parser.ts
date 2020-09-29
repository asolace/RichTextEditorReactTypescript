import { Node } from 'slate';
import { serializeHTML, serializePlainText } from './Serialize';

enum ParseTypes {
  Json = 'json',
  Html = 'html',
  PlainText = 'plain-text',
}

const Parsers = {
  [ParseTypes.Json]: (value: Node[], handleFormData: (value: string) => void) =>
    handleFormData(JSON.stringify(value)),
  [ParseTypes.Html]: (value: Node[], handleFormData: (value: string) => void) =>
    handleFormData(value.map((v) => serializeHTML(v)).join('')),
  [ParseTypes.PlainText]: (
    value: Node[],
    handleFormData: (value: string) => void
  ) => handleFormData(serializePlainText(value)),
};

const parseFormContent = (
  parseFormat: string | undefined,
  value: Node[],
  handleFormData: (value: string) => void
) => {
  const format = parseFormat ? (parseFormat as ParseTypes) : ParseTypes.Html;

  Parsers[format](value, handleFormData);
};

export default parseFormContent;
