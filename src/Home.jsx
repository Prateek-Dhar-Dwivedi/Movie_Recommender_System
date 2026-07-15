import { useState } from "react";
import axios from "axios";
import "./Home.css";

function Home() {

  const [movie, setMovie] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleRecommend = async () => {
  try {
    const res = await axios.get(
      `https://movie-recommender-system-4-nn5m.onrender.com/api/recommend/${encodeURIComponent(movie)}`
    );

    console.log(res.data);

    if (res.data.error) {
      alert("No movies available");
      setRecommendations([]);
      return;
    }

    setRecommendations(res.data);

  } catch (error) {
    console.log(error.response?.data);

    alert("No movies available");
    setRecommendations([]);
  }
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

        {recommendations.map((item,index)=>(
          <div className="card" key={index}>
            <h3>{item}</h3>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Home;
