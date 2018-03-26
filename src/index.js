import * as Rxjs from 'rxjs'
import {interval} from 'rxjs/observable/interval'

const div = document.createElement("div")
document.body.appendChild(div)

const button = document.createElement("button")
document.body.appendChild(button)
button.innerHTML = 'clickable'

const input = document.createElement("input")
document.body.appendChild(input)

// observable koji generise random brojeve i subscriber koji elemente stampa u div-u
const obs1 = Rxjs.Observable.create(generator => {
    setInterval(() => {
        let broj = parseInt(Math.random() * 6)
        generator.next(broj)
    }, 1000)
})
.subscribe(num => {
    div.innerHTML = num
})

// event za dugme, svaki event se posmatra kao element niza (zato se koristi map)
Rxjs.Observable.fromEvent(button, 'click')
    .map(event => ({x: event.screenX, y: event.screenY}))
    .subscribe(coords => console.log(coords))

// event za input sa debounce time - update-uje obzervera periodicno za uneto vreme
Rxjs.Observable.fromEvent(input, 'input')
    .debounceTime(500)
    .map(event => event.target.value)
    .filter(text => text.length >= 1)
    .switchMap(text => moviesObservable)
    .subscribe(movies => console.log(movies))

// promise
const moviesObservable = Rxjs.Observable.fromPromise(
    fetch('http://localhost:3000/movies')
        .then(response => response.json())
)
moviesObservable.subscribe(movies => console.log(movies))

// interval je observable koji se update-uje periodicno
interval(800)
    .map(num => parseInt(Math.random() * 10))
    // .subscribe(num => console.log(`Random stampa ${num}`))
