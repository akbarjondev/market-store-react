export function toCapitalize(text) {
  return text.replace(new RegExp(text[0]), text[0].toUpperCase());
}
