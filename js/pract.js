'use strict';

const numberOfFilms = +prompt('Скільки фільмів переглянуто?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один з останніх фільмів?', ''),
      b = prompt('На скільки оціните його?', ''),
      c = prompt('Один з останніх фільмів?', ''),
      d = prompt('На скільки оціните його?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);