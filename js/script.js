let numberOfFilms;

function start () {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  while ( 
    numberOfFilms == '' || 
    numberOfFilms == null || 
    isNaN(numberOfFilms) 
    ) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}
start();


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


function detectPersonalLevel(){
  if ( personalMovieDB.count < 10 ) {
    alert('Просмотрено довольно мало фильмов');
  }else if ( personalMovieDB.count >= 10|| personalMovieDB < 30 ) {
    alert('Вы классический зритель!!');
  }else if ( personalMovieDB.count >= 30 ) {
    alert('Вы киноман!!');
  }else{
    alert('ошибка');
  }
}
detectPersonalLevel();

function rememberMyFilms(){
  for ( let i = 0; i < 2; i++ ) {
    const a = prompt("Один из последних фильмов?",''),
          b = prompt("На сколько вы его оцените на 10-бальной шкале?",'');
  
    if ( 
      a != null && 
      b != null && 
      a != '' && 
      b != '' && 
      a.length < 50 && 
      b <= 10 ) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    }else{
      console.log('error');
      i--;
    }
  }
}
rememberMyFilms();

function writeYourGenres () {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres.push( prompt(`Ваш жанр под номером ${i}`) ); 
    // personalMovieDB.genres[i-1]
  }
}
writeYourGenres();

function showMyDB (hidden) {
  if( !hidden ) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);



// let i = 0;
// do{
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
// } while(i < 2);

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
// }