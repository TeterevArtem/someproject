const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

if ( personalMovieDB.count < 10 ) {
  alert('Просмотрено довольно мало фильмов');
}else if ( personalMovieDB.count >= 10|| personalMovieDB < 30 ) {
  alert('Вы классический зритель!!');
}else if ( personalMovieDB.count >= 30 ) {
  alert('Вы киноман!!');
}else{
  alert('ошибка');
}
let i = 0;
do{
  const a = prompt("Один из последних фильмов?",''),
        b = prompt("На сколько вы его оцените на 10-бальной шкале?",'');

  if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  }else{
    console.log('error');
    i--;
  }
  i++;
} while(i < 2);

// while(i < 2) {
//   const a = prompt("Один из последних фильмов?",''),
//         b = prompt("На сколько вы его оцените на 10-бальной шкале?",'');

//   if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   }else{
//     console.log('error');
//     i--;
//   }
//   i++;
// }
// for ( let i = 0; i < 2; i++ ) {
//   const a = prompt("Один из последних фильмов?",''),
//         b = prompt("На сколько вы его оцените на 10-бальной шкале?",'');

//   if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   }else{
//     console.log('error');
//     i--;
//   }
// }
 


console.log(personalMovieDB);