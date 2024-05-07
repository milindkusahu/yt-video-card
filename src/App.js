import "./styles.css";
import VideoCard from "./VideoCard";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://content-xflix-backend.azurewebsites.net/v1/videos")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.videos);
      });
  }, []);

  function handleChange(e) {
    const searchValue = e.target.value;
    const apiUrl = searchValue
      ? `https://content-xflix-backend.azurewebsites.net/v1/videos?title=${searchValue}`
      : "https://content-xflix-backend.azurewebsites.net/v1/videos";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.videos);
      });
  }

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <TextField
          id="outlined-basic"
          label="Search..."
          variant="outlined"
          onChange={handleChange}
        />
      </Box>
      <Grid container spacing={2} mt={1}>
        {videos.map((video) => (
          <Grid key={video.id} item xs={12} sm={6} lg={3}>
            <VideoCard
              previewImage={video.previewImage}
              genre={video.genre}
              title={video.title}
              releaseDate={video.releaseDate}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
