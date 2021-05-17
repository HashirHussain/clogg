function getTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes + " " + amOrPm;
}

function getType(input) {
  if (Array.isArray(input)) {
    return "array";
  } else {
    return typeof input;
  }
}

function getValue(input) {
  return JSON.stringify(input);
}

function clogg(input, comment) {
  const time = `Time: ${getTime()}`;
  const type = `Type: ${getType(input)}`;
  const value = `Value: ${getValue(input)}`;
  const _comment = comment ? `Comment: ${getValue(comment)}` : "Comment: --";
  console.log(`${time}\n${type}\n${value}\n${_comment}`);
}

module.exports.clogg = clogg;
