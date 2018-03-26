export class MoviesService{

    static get(){ // fetch se koristi za slanje zahteva, po defaultu je GET
        return fetch("http://localhost:3000/movies")
            .then(response => response.json())
    }
}