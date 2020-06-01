module.exports = (...groups) => (req, res, next) => {
  try {
    const inGroup = groups.some((group) =>
      group.some((role) => req.user.position === role)
    )

    if (!inGroup) {
      return res.status(403).json({ message: 'Нет прав' })
    }

    return next()
  } catch (error) {
    return next(error)
  }
}
