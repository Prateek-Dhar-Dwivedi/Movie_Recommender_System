import { useState } from "react";
import axios from "axios";
import "./Home.css";

function Home() {

  const [movie, setMovie] = useState("");
  const [recommendations, setRecommendations] = useState(null);

  const handleRecommend = async () => {

    const res = await axios.get(
      `https://movie-recommender-system-4-nn5m.onrender.com/api/recommend/${encodeURIComponent(movie)}`
    );

    setRecommendations(res.data);
  };

  return (
    <div className="container">

      <h1>Movie Recommendation System</h1>

      <input
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        placeholder="Enter movie name"
      />

      <button onClick={handleRecommend}>
        Recommend
      </button>

      <div className="movies">

        {recommendations === null ? null : recommendations.length === 0 ? (
          <h3>No movies available</h3>
        ) : (
          recommendations.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item}</h3>
            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Home;
