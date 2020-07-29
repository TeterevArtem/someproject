const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while ( 
      this.count == '' || 
      this.count == null || 
      isNaN(this.count) 
    ) {
     this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  detectPersonalLevel: () => {
    if ( this.count < 10 ) {
      alert('Просмотрено довольно мало фильмов');
    }else if ( this.count >= 10 && this.count <= 30 ) {
      alert('Вы классический зритель!!');
    }else if ( this.count > 30 ) {
      alert('Вы киноман!!');
    }else{
      alert('ошибка');
    }
  },
  rememberMyFilms: () => {
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
  },
  writeYourGenres: () => {
    // for (let i = 1; i <= 3; i++) {
    //   let genre = prompt(`Ваш жанр под номером ${i}`);
    //   if ( genre == '' || genre == null ){
    //     i--;
    //   } else {
    //     personalMovieDB.genres.push( genre );
    //   }
    //   // personalMovieDB.genres[i-1]
    // }
    for (let i = 1; i < 2; i++) {
      let genres = prompt('Введите ваши любимые жанры через запятную').toLocaleLowerCase();
      if ( genres == '' || genres == null ) {
        i--;
      } else {
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item,index) => {
      console.log(`Любимый жанр под номером ${index + 1} - это ${item}`);
    });
  },
  toggleVisibleMyDB: () => {
    // ( personalMovieDB.privat ) ? personalMovieDB.privat = false : personalMovieDB.privat = true;
    if(personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  showMyDB: (hidden) => {
    if( !hidden ) {
      console.log(personalMovieDB);
    }      
  }
};



personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
console.log(personalMovieDB);

// function showMyDB (hidden) {
//   if( !hidden ) {
//     console.log(personalMovieDB);
//   }
// }

// showMyDB(personalMovieDB.privat);



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