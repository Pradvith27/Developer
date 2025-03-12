export type Movie = {
    id: string;
    title: string;
    director: string;
    releaseYear: number;
    genre: string;
    ratings: number[];
  };
  
  let movies: Movie[] = [];
  
  export function addMovie(id: string, title: string, director: string, releaseYear: number, genre: string): void {
    if (movies.some(movie => movie.id === id)) {
      throw new Error("Movie with this ID already exists.");
    }
    movies.push({ id, title, director, releaseYear, genre, ratings: [] });
  }
  
  export function rateMovie(id: string, rating: number): void {
    if (rating < 1 || rating > 5) {
      throw new Error("Rating must be between 1 and 5.");
    }
    const movie = movies.find(movie => movie.id === id);
    if (!movie) {
      throw new Error("Movie not found.");
    }
    movie.ratings.push(rating);
  }
  
  export function getAverageRating(id: string): number | undefined {
    const movie = movies.find(movie => movie.id === id);
    if (!movie || movie.ratings.length === 0) {
      return undefined;
    }
    return movie.ratings.reduce((sum, rating) => sum + rating, 0) / movie.ratings.length;
  }
  
  export function getTopRatedMovies(): Movie[] {
    return movies
      .filter(movie => movie.ratings.length > 0)
      .sort((a, b) => (getAverageRating(b.id) ?? 0) - (getAverageRating(a.id) ?? 0));
  }
  
  export function getMoviesByGenre(genre: string): Movie[] {
    return movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
  }
  
  export function getMoviesByDirector(director: string): Movie[] {
    return movies.filter(movie => movie.director.toLowerCase() === director.toLowerCase());
  }
  
  export function searchMoviesBasedOnKeyword(keyword: string): Movie[] {
    return movies.filter(movie => movie.title.toLowerCase().includes(keyword.toLowerCase()));
  }
  
  export function getMovie(id: string): Movie | undefined {
    return movies.find(movie => movie.id === id);
  }
  
  export function removeMovie(id: string): void {
    movies = movies.filter(movie => movie.id !== id);
  }