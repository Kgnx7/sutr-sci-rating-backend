module.exports = (...roles) => (req, res, next) => {
  try {

    const hasRole = roles.some(role => req.user.position === role)
    if (!hasRole) {
      return res.status(403).json({ message: "Нет прав" });
    }

    return next();

  } catch (error) {
    return next(error);
  }
};