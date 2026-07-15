const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());


// Test route
app.get("/", (req, res) => {
    res.send("Movie Backend Running");
});


// Recommendation API
app.get("/api/recommend/:movie", async (req, res) => {

    try {

        const movie = req.params.movie;

        const res = await axios.get(
      `https://movie-recommender-system-2-cvnf.onrender.com/api/recommend/${movie}`
    );
        res.json(response.data);

    } catch (error) {

        console.log(error.message);

        res.status(500).json({
            error: "Recommendation failed"
        });

    }

});


const PORT = 5001 || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
