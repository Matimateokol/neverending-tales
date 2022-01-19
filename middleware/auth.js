module.exports = {
    ensureAuth: function (req, res, nextt) {
        if (req.isAuthenticated()) {
            return nextt()
        } else {
            res.redirect('/')
        }
    },
    ensureGuest: function (req, res, next) {
        if (req.isAuthenticated()) {
            res.redirect('/dashboard')
        } else {
            return next()
        }
    },
}