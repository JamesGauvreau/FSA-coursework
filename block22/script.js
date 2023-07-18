

const SONGS_API_URL = 'https://fsa-async-await.herokuapp.com/api/guided-practice/songs';
const ARTISTS_API_URL = 'https://fsa-async-await.herokuapp.com/api/guided-practice/artists';
const GENRES_API_URL = 'https://fsa-async-await.herokuapp.com/api/guided-practice/genres';

const newSongForm = document.querySelector(`#new-song-form`)
const songContainer = document.querySelector(`#song-container`)

const fetchURL = async(url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
    catch(error) {
        console.log(error)
    }
}

const fetchAllSongs = async() => {
    return await fetchURL(SONGS_API_URL)
}

const renderAllSongs = (songsArray) => {
    for (const i in songsArray){
        songContainer.innerHTML += `<li>${songsArray[i].title}</li>`
    }
}

const addNewSong = async(title, release_date, genre_id, artist_id) => {
    try { 
        const response = await fetch(SONGS_API_URL, {
            method: `POST`,
            body: JSON.stringify({
                title,
                release_date,
                genre_id, 
                artist_id,
            })
        })
    }
    catch(error) {
        console.log(error)
    }
}

const button = document.querySelector

    // genre_id,
    // artist_id,
// }),
// headers: {
//  "Content-Type": "application/json"
// },
// })
// console.log(response)
// const newSong = await response.json()
// return newSong
// } catch(error) {
//     console.log(error)
// }
// }

// const renderNewSongForm = () => {
//     newSongForm.innerHTML =
//     // form info
// `
//     const form = document.querySelector(`#form`);

//     form.addEventListener(`submit`, async(event) => {
//         event.preventDefault()
//         const title = document.querySelector(`#title`).value;
//         const release_date = document.querySelector(`#release_date`).value;
// 

// const fetchAllSongs = async() => {
//     try {
//         const dog = await fetch(SONGS_API_URL);
//         const data = await dog.json();
//         return data;
//     }
//     catch(error) {
//         console.log(error);
//     }

// }

// // const renderAllSongs = (songList) => {
// //     if (!songList || songList.length === 0) {
// //         song-

// // function renderAllSongs(songs) {
// //     const songContainer = document.querySelector(`#song-container`);
// //     // songContainer.innerHTML = '';
// //     songs.forEach((songs) => {
// //         const songElement = renderAllSongs(songs); 
// //         song-container.append(songElement);
// //     });
// // }

// function renderSongs(songs) {
//     const songContainer = document.querySelector('#songContainer');
//     songContainer.innerHTML = '';
//     songs.forEach((song) => {
//       const songElement = renderSongs(song);
//       songContainer.append(songElement);
//     });
//   }

//   async function init() {
//     const songs = await fetchAllSongs();
//     renderSongs(songs);
//   }

// // init()

// init();