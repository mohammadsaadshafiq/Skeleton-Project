const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const dotenv = require('dotenv');

dotenv.config();

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

module.exports = (passport) => {
  passport.use(new JwtStrategy(options, (jwtPayload, done) => {
    User.findById(jwtPayload.id)
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => done(err, false));
  }));
};
