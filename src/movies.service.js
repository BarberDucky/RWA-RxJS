import { Movie } from "./movie";

export class MovieService {
    constructor(){
        this.movies = [];   
        this.movies.push(new Movie("Rambo", 1985, 10));
        this.movies.push(new Movie("Rocky", 1987, 8));
        this.movies.push(new Movie("Expendables", 2015, 9));
        this.movies.push(new Movie("Mrak film", 2005, 2));
    }

    getCb(cbf){ // get sa callbackom
        setTimeout(() => cbf(movies), 1000)
    }

    get(i){ // vraca element sa indexom i
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.movies[i]), 1000)
        })
    }

    get(){ // vraca ceo niz
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.movies), 1000)
        })
    }

    retRand(){ // vraca random broj preko promisa
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(Math.floor(Math.random() * 4)), 1000)
        })
    }
}