require("dotenv").config();
const passport = require("passport");
const passportJWT = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;

module.exports = (knex) => {
  const strategy = new passportJWT.Strategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      passReqToCallback: true,
    },
    async (payload, done) => {
      const user = await knex("customer").where({id: payload.id}).first();
      if (user) {
        return done(null, user);
      } else {
        return done(new Error("User not found"), null);
      }
    }
  );
  passport.use(strategy);
  return {
    initialize: () => {
      return passport.initialize();
    },
    authenticate: ()=>{
        return passport.authenticate("jwt", config.jwtSession);
    }
  };
};
