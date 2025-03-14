import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

type Movie = {
  id: number;
  title: string;
  director: string;
  releaseYear: number;
  genre: string;
  ratings?: number[];
}


const movies: Movie[] = [];


app.post("/movies", async (c) => {
  const movie: Movie = await c.req.json();
  if (!movie.id || !movie.title || !movie.director || !movie.releaseYear || !movie.genre) {
    return c.json({ error: "Missing required fields" }, 400);
  }
  console.log(movie);
  movies.push({ ...movie, ratings: [] });
  return c.json({ message: "Movie added successfully" }, 201);
});


app.patch("/movies/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const updates: Partial<Movie> = await c.req.json();
  const movie = movies.find((m) => m.id === id);

  if (!movie) return c.json({ error: "Movie not found" }, 404);
  
  Object.assign(movie, updates);
  console.log(movie);
  return c.json({ message: "Movie updated successfully" });
});




app.delete("/movies/:id", (c) => {
  const id = Number(c.req.param("id"));
  const index = movies.findIndex((m) => m.id === id);
  if (index === -1) return c.json({ error: "Movie not found" }, 404);
  
  movies.splice(index, 1);
  return c.json({ message: "Movie deleted successfully" });
});


app.post("/movies/:id/rating", async (c) => {
  const id = Number(c.req.param("id"));
  const { rating } = await c.req.json();
  if (rating < 1 || rating > 5) return c.json({ error: "Rating must be between 1 and 5" }, 400);
  
  const movie = movies.find((m) => m.id === id);
  if (!movie) return c.json({ error: "Movie not found" }, 404);

  movie.ratings?.push(rating);
  return c.json({ message: "Rating added successfully" });
});


app.get("/movies/:id/rating", (c) => {
  const movie = movies.find((m) => m.id === Number(c.req.param("id")));
  if (!movie) return c.json({ error: "Movie not found" }, 404);
  if (!movie.ratings?.length) return c.body(null, 204);

  const avgRating = movie.ratings.reduce((a, b) => a + b, 0) / movie.ratings.length;
  return c.json({ averageRating: avgRating.toFixed(2) });
});


app.get("/movies/top-rated", (c) => {
  if (!movies.length) return c.json({ error: "No movies found" }, 404);
  
  const sortedMovies = [...movies].sort((a, b) => {
    const avgA = a.ratings && a.ratings.length > 0 ? a.ratings.reduce((x, y) => x + y, 0) / a.ratings.length : 0;
    const avgB = b.ratings && b.ratings.length > 0 ? b.ratings.reduce((x, y) => x + y, 0) / b.ratings.length : 0;
    return avgB - avgA;
  });

  return c.json(sortedMovies);
});


app.get("/movies/genre/:genre", (c) => {
  const genre = c.req.param("genre").toLowerCase();
  const result = movies.filter((m) => m.genre.toLowerCase() === genre);
  return result.length ? c.json(result) : c.json({ error: "No movies found" }, 404);
});


app.get("/movies/director/:director", (c) => {
  const director = c.req.param("director").toLowerCase();
  const result = movies.filter((m) => m.director.toLowerCase() === director);
  return result.length ? c.json(result) : c.json({ error: "No movies found" }, 404);
});


app.get("/movies/search", (c) => {
  const keyword = c.req.query("keyword")?.toLowerCase();
  if (!keyword) return c.json({ error: "Keyword is required" }, 400);

  const result = movies.filter((m) => m.title.toLowerCase().includes(keyword));
  return result.length ? c.json(result) : c.json({ error: "No movies found" }, 404);
});



app.get("/movies/:id", (c) => {
    const movie = movies.find((m) => m.id === Number(c.req.param("id")));
    return movie ? c.json(movie) : c.json({ error: "Movie not found" }, 404);
  });



serve( app );
  
console.log("Server running on http://localhost:3000");