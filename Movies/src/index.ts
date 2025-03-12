import { addMovie, rateMovie, getAverageRating, getTopRatedMovies } from "./movies";

addMovie("1", "Inception", "Christopher Nolan", 2010, "Sci-Fi");
addMovie("2", "The Dark Knight", "Christopher Nolan", 2008, "Action");
addMovie("3", "Interstellar", "Christopher Nolan", 2014, "Sci-Fi");
addMovie("4", "The Matrix", "Lana Wachowski, Lilly Wachowski", 1999, "Sci-Fi");
addMovie("5", "Pulp Fiction", "Quentin Tarantino", 1994, "Crime");
addMovie("6", "KGF", "Prashanth Neel", 2018, "Action");
addMovie("7", "Max: Fury Road", "George Miller", 2015, "Action");
addMovie("8", "Kantara", "Rishab Shetty", 2022, "Drama");
addMovie("9", "Max", "Kannada Director", 2025, "Action");

rateMovie("1", 5);
rateMovie("2", 4);
rateMovie("3", 5);
rateMovie("4", 4);
rateMovie("5", 5);
rateMovie("6", 5);
rateMovie("7", 4);
rateMovie("8", 5);
rateMovie("9", 5);

console.log(getAverageRating("1")); // 5
console.log(getTopRatedMovies());