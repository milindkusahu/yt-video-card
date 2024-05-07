import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function VideoCard({ previewImage, genre, title, releaseDate }) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image={previewImage}
        title="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {genre}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {releaseDate}
        </Typography>
      </CardContent>
    </Card>
  );
}
