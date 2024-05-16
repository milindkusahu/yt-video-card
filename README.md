<img src="https://raw.githubusercontent.com/milindkusahu/yt-video-card/main/video%20card%20demo.png?raw=true"></img>

# YT Video Card React App

This is a React application that fetches videos from a backend and displays them on the frontend. It also includes a search functionality to filter the videos based on user input.

## Features

- Fetches video data from a backend API
- Displays video cards with thumbnails, titles, and descriptions
- Implements search functionality for filtering videos
- Utilizes the debouncing concept to optimize search performance

## Debouncing

One of the key features implemented in this project is debouncing. Debouncing is a technique used to limit the rate at which a function is called. In this application, debouncing is applied to the search input field.

When a user types into the search input, instead of triggering a search for each keystroke, the debouncing mechanism waits for a short period of time (a specified delay) after the user stops typing. Once the delay expires, the search function is executed, preventing unnecessary API requests from being made during rapid user input.

By implementing debouncing, the application's performance is optimized, reducing the number of unnecessary API requests and improving the overall user experience.

## Technologies Used

- React
- JavaScript
- HTML
- CSS

## Getting Started

1. Clone the repository
2. Install dependencies using `npm install`
3. Start the development server with `npm start`

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
