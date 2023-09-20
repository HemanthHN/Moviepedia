let titel = document.getElementById('title');
let Released = document.getElementById('released');
let Genre = document.getElementById('genre');
let Director = document.getElementById('director');
let Writer = document.getElementById('writer');
let Actors = document.getElementById('actors');
let Plot  = document.getElementById('plot');
let Language = document.getElementById('language');
let Awards = document.getElementById('awards');
let ImdbRating  = document.getElementById('imdbRating');
let BoxOfficeCollection = document.getElementById('boxOffice');

let poster = document.getElementById('poster');

let api = 'https://www.omdbapi.com/?i=tt3896198&apikey=91b32f89&t='

function searchMovie(){
    let movieNAme = document.getElementById('movieName')
    let url = api+movieNAme.value;
    
    fetch(url).then((data)=>{
        return data.json()
    }).then((data)=>{
        titel.innerText = data.Title
        Released.innerText = data.Released
        Genre.innerText = data.Genre
        Director.innerText = data.Director
        Writer.innerText = data.Writer
        Actors.innerText = data.Actors
        Plot.innerText = data.Plot 
        Language.innerText = data.Language
        Awards.innerText = data.Awards
        ImdbRating .innerText = data.imdbRating 
        BoxOfficeCollection.innerText = data.BoxOffice
        poster.src = data.Poster

    }) 
}





  