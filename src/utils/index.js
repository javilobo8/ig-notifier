const GAMEID_REGEXP = /\/(\d+)-/;

function parseNumber(value) {
  const number = Number(value);
  if (value != null && Number.isFinite(number)) {
    return number;
  }
  console.error('Can not parse ', value, 'returning null');
  return null;
}

function parseGameId(URL) {
  const match = GAMEID_REGEXP.exec(URL);
  if (match && match[1] != null) {
    return parseNumber(match[1]);
  }
  console.error('Can not find number on ', URL, 'returning null');
  return null;
}

exports.parseNumber = parseNumber;
exports.parseGameId = parseGameId;
