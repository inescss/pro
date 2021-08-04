const checkRole = userRole => (req, res, next) =>
  !userRole.includes(req.user.role)
    ? res.status(401).json("Forbidden")
    : next();



module.exports = checkRole