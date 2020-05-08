module.exports = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.status(403).json({ message: "Пользователь не авторизован" });
};