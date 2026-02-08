exports.checkcsrferror = (err, req, res, next) => {
    if (err && err.code === "EBADCSRFTOKEN")
        return res.send('BAD CSRF')
}

exports.csfrmiddleware = (req,res,next) => {
    res.locals.csrftoken = req.csrftoken
    next()
}