import PassportJWT from 'passport-jwt';
import passport from 'passport';
import Admin from '../../api/Admin/adminModel';

export const configureJWTStrategy = () => {
  const opts = {};
  opts.jwtFromRequest = PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = "secret_Key";
  passport.use(
    new PassportJWT.Strategy(opts, (payload, done) => {
      Admin.findOne({ _id: payload._id }, (err, admin) => {
        if (err) {
          return done(err, false);
        }
        if (admin) {
          return done(null, admin);
        }
        return done(null, false);
      });
    })
  );
};
