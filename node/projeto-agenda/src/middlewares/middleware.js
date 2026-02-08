exports.checkcsrferror = (err, req, res, next) => {
    if (err){
        return res.render('404')
    }
    next()
}

exports.csfrmiddleware = (req,res,next) => {
    const token = req.csrfToken()
    res.locals.csrftoken = token
    res.locals.csrfToken = token
    next()
}

exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors')
    res.locals.success = req.flash('success')
    res.locals.user = req.session.user
    next()
}

exports.loginRequired = (req, res, next) => {
    if(!req.session.user) {
        req.flash('errors', 'Você precisa fazer login')
        req.session.save(() => res.redirect('/'))
        return
    }
    next()
}