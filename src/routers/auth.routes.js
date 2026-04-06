const { route } = require("../app");

const express = require




const router = express.Router();



router.post("/register", (req, res) => {
    res.send("User registration endpoint");
});



module.exports = router;
