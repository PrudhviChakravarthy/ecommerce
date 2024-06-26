
const notFound = (req, res, next) => {
    const error = new Error(`Not Found : ${req.originalUrl}`);
    res.status(404);
    next(error);
}


const errorHandler = (err, req, res, next) => {
    const statuscode = res.statusCode == 200 ? 500 : res.statusCode;
    res.status(statuscode)
    console.log(err?.message)
    res.json({
        message: err?.messge,
        stack : err?.stack
    })
}

module.exports = {notFound, errorHandler}