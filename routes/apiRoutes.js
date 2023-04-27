const router = require("express").Router();
const db = require("../db/db.json");
const fs = require("fs")

router.get("/notes", (req,res) => {
    return res.json(db);  
});

router.post("/notes", (req,res) => {
    let parsedNote = JSON.stringify(req.body);

    fs.writeFile("../db/db.json", parsedNote, (error) => {
        if (error) throw error;
        console.log("new data added to database")

    }) 
});


module.exports = router;