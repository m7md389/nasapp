const Express = require("express");
const router = Express.Router();
const Favourites = require("./../model/favourites")

router.get("/api/favourites", async (req, res) => {
    res.send(await Favourites.find({}).exec())
})

router.post("/api/favourites", async (req, res) => {
    const { astronomyTitle, astronomyImage } = req.body;
    if (!astronomyTitle || !astronomyImage) {
        res.status(400).send("Not compleaded data");
        return null;
    }
    if (!!(await Favourites.findOne({ title: astronomyTitle }).exec())) {
        res.status(400).send("Currently Exist");
        return null;
    }
    new Favourites({ title: astronomyTitle, image: astronomyImage }).save();
    res.send("Added");
})

router.delete("/api/favourites", async (req, res) => {
    const { astronomyTitle } = req.body;
    if (!astronomyTitle) {
        res.status(400).send("Missing Id");
        return null;
    }
    Favourites.findOneAndDelete({ title: astronomyTitle }).exec()
    res.send("Deleted");
})

module.exports = router;