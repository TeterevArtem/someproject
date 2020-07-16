const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt("Один из последних фильмов?",''),
      b = +prompt("На сколько вы его оцените на 10-бальной шкале?",''),
      c = prompt("Один из последних фильмов?",''),
      d = +prompt("На сколько вы его оцените на 10-бальной шкале?",'');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);