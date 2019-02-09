const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;

passport.use(new Strategy({
    clientID: '423187595105850',
    clientSecret: '9138de8b49a1db1c59dec3a32db7c4da',
    callbackURL: '/return'
},
    function (accessToken, refreshToken, profile, cb) {
        return cb(null, profile);
    }));

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

module.exports = passport;