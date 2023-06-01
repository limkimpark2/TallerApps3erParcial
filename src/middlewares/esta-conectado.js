module.exports = (req, res, next) => {
    if (req.cookies.usuario) {
        if (req.cookies.rol === "Admin") {
            res.redirect("/panel-compras");
        } else {
            next();
        }
    } else {
        res.redirect("/registro");
    }
}