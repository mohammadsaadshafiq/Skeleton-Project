const passport = require('passport');
module.exports = {
    ensureAuthenticated: (req, res, next) => {
      if (req.isAuthenticated()) {
        return next();
      }
      res.redirect('/login');
    },
    authenticateJwt: passport.authenticate('jwt', { session: false })
  };
  