import {
    Movie
} from "./movie";
import { MovieService } from "./movies.service";
import {MoviesService} from "../another-movies.service.js"

MoviesService.get().then(movies => console.log(movies))

/*service.get().then(movies => { 
    movies.forEach(movie => ShowMovie(movie));
});*/

function ShowMovie(movie){
    const {title, year, score} = movie;
    document.write(`<p>${title}, ${year}, ${score}</p>`);
}

/*service.retRand()  // promise u promise-u
    .then(num => service.get(num)
    .then(movie => console.log(movie)))*/

/*Promise.all([ // promise koji paralelno pozove funkcije i po zavrsetku svih prelazi u then
    service.get(),
    service.retRand()
]).then(([movies, number]) => { // argument then-a je vektor sa povratnim vrednostima gorepozvanih promise-a
    console.log(`there are ${number} movies: `)
    console.log(movies)
})*/