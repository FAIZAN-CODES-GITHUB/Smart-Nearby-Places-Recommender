// What this does
// Checks req.user
// Blocks request if user not logged in

export function requireAuth(req, res, next) {
  if (!req.user) {
    return res.status(401).json({
      error: true,
      message: "Authentication required",
    });
  }

  next();
}