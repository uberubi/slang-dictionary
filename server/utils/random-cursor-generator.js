module.exports.randomCursorGenerator = () => {
  let cursor = `${Math.floor(
    Math.random() * Math.floor(Math.random() * Date.now())
  )}`;
  return cursor;
};
