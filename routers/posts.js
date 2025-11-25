const express = require("express");
const router = express.Router();

const posts = require("../posts");

router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Dettagli del post ${id}`);
});