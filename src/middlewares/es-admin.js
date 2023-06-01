module.exports = (req, res, next) => {
    if (req.cookies.rol === "Admin") {
        next();
    } else {
        res.redirect("/");
    }
}