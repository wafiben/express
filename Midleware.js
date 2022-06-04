const midelware = (req, res, next) => {
  let day = new Date();
  let numberOfDate = day.getDay();
  let time = day.getHours();
  const x = true;
  if (x) {
    return res.status(400).json({ msg: "you are not authorized" });
  } else {
    next();
  }
};

module.exports = midelware;
