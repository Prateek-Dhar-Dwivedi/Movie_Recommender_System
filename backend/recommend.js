const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/:movie", async (req, res) => {
  try {
    const response = await axios.get(
      `https://movie-recommender-system-2-cvnf.onrender.com/recommend/${encodeURIComponent(req.params.movie)}`
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).json({
      message: "Recommendation error"
    });
  }
});

module.exports = router;