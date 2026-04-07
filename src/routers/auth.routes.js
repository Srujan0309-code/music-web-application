const { route } = require("../app");
const {regidterRoutes} = require("../app");
const express = require



const router = express.Router();



router.post("/register", (req, res) => {
    res.send("User registration endpoint");
    regidterRoutes(router);
});



module.exports = router;
