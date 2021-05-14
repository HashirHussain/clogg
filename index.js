function getTime() {
  const currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
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

function conlog(input, comment) {
  const time = `Time: ${getTime()}`;
  const type = `Type: ${getType(input)}`;
  const value = `Value: ${getValue(input)}`;
  const _comment = comment ? `Comment: ${comment}` : "Comment: --";
  console.log(`${time}\n${type}\n${value}\n${_comment}`);
}

module.exports.conlog = conlog;
