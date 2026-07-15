import { useState } from "react";
import axios from "axios";
import "./Home.css";

function Home() {
  const [movie, setMovie] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleRecommend = async () => {
    try {
      const res = await axios.get(
        `https://movie-recommender-system-4-nn5m.onrender.com/api/recommend/${movie}`
      );

      console.log(res.data);

      setRecommendations(
        Array.isArray(res.data) ? res.data : []
      );

    } catch (error) {
      console.error("Error:", error);
      setRecommendations([]);
    }
  };

  return (
    <div className="container">
      <h1>Movie Recommendation System</h1>

      <input
        type="text"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        placeholder="Enter movie name"
      />

      <button onClick={handleRecommend}>
        Recommend
      </button>

      <div className="movies">
        {recommendations.length > 0 ? (
          recommendations.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item}</h3>
            </div>
          ))
        ) : (
          <p>No recommendations found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
