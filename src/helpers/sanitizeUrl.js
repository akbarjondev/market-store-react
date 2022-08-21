export default function sanitizeUrl(url) {
  let parsed = new URL(url);

  console.log(parsed.protocol);

  return ["http:", "https:"].includes(parsed.protocol);
}
