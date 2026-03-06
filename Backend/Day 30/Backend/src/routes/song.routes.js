const express = require("express");
const upload = require("../middlewares/upload.middleware");
const { uploadSongController } = require("../controllers/song.controller");

const router = express.Router();

/**
 * POST /api/songs
 */
router.post("/", upload.single("song"), uploadSongController);

module.exports = router;
