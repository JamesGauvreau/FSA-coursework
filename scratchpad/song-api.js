const songContainer = document.getElementById('song-container');
const newSongForm = document.getElementById('new-song-form');

const SONGS_API_URL = 'https://fsa-async-await.herokuapp.com/api/guided-practice/songs';
const ARTISTS_API_URL = 'https://fsa-async-await.herokuapp.com/api/guided-practice/artists';
const GENRES_API_URL = 'https://fsa-async-await.herokuapp.com/api/guided-practice/genres';

// fetch all songs
const fetchAllSongs = async () => {
    try {
        const response = await fetch(SONGS_API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// fetch single song
const fetchSingleSong = async (id) => {
    try {
        const response = await fetch(`${SONGS_API_URL}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// fetch single artist
const fetchSingleArtist = async (id) => {
    try {
        const response = await fetch(`${ARTISTS_API_URL}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// render single artist
const renderSingleArtist = (artist) => {
    let artistHTML = `
        <h3>${artist.name}</h3>
        <p>${artist.bio}</p>
        <img src="${artist.image_url}">
        <button class="back-button">Back</button>
    `;
    songContainer.innerHTML = artistHTML;

    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', async () => {
        const songs = await fetchAllSongs();
        renderAllSongs(songs);
    });
    
}


// create song
// const addNewSong = async (song) => {
//     try {
//         const response = await fetch(SONGS_API_URL, {
//             method: 'POST',
//             body: JSON.stringify(song),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// }

// remove song
const removeSong = async (id) => {
    try {
        const response = await fetch(`${SONGS_API_URL}/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// get artist name by id
const getArtistNameById = async (id) => {
    try {
        const response = await fetch(`${ARTISTS_API_URL}/${id}`);
        const data = await response.json();
        return data.name;
    } catch (error) {
        console.log(error);
    }
}

// get genre name by id
const getGenreNameById = async (id) => {
    try {
        const response = await fetch(`${GENRES_API_URL}/${id}`);
        const data = await response.json();
        return data.name;
    } catch (error) {
        console.log(error);
    }
}

const getArtistById = async (artist_id) => {

    try {   // Wrapped in try/catch because you're making a network call.
            // fetch from the API 
    const response = await fetch(`${ARTISTS_API_URL}/${artist_id}`)
    const artist = await response.json();

    // return artist
    return artist;
    } catch (error) {   // You don't have to define 'error', just like you 
                        // don't have to define 'artist_id' up above preceding 
                        // the function arrow.
        console.log(`Error during getArtistByID`, error);
    }
}

const getGenreById = async (genre_id) => {

    try {   // Wrapped in try/catch because you're making a network call.
            // fetch from the API 
    const response = await fetch(`${GENRES_API_URL}/${genre_id}`)
    const genre = await response.json();

    // return genre
    return genre;
    } catch (error) {   // You don't have to define 'error', just like you 
                        // don't have to define 'artist_id' up above preceding 
                        // the function arrow.
        console.log(`Error during getGenreByID`, error);
    }
}

const addNewSong = async (song) => {
    // console.log(song);
    try {
        const response = await fetch(SONGS_API_URL, {
            method: "POST",
            body: JSON.stringify(song),
            headers: {
                "Content-Type": "application/json",
        },
    });
    const newSong = await response.json();
    return newSong;
} catch (error) {
    console.log(`Error during addNewSong: `, error);
}
    
};

// create song
// const addNewSong = async (song) => {
//     try {
//         const response = await fetch(SONGS_API_URL, {
//             method: 'POST',
//             body: JSON.stringify(song),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// }

// const renderNewSongForm = () => {
//     newSongForm.innerHTML = `
//     <h3>Add New Song</h3>
//     <form>
    
//     </form>
//     `;
// };

// render all songs mk 2
const renderAllSongs = (songList) => {
    // check if songList is empty
    if (!songList || songList.length === 0) {
        songContainer.innerHTML = `<h3>No Songs Yet!</h3>`;
        return;
    }

    songContainer.innerHTML = ``;


    songList.forEach(async (song) => {

        // In order to show the artist and genre, you could write a function
        // that converts ID# to specific strings.
        const title = song.title;
        const artist_id = song.artist_id;
        const genre_id = song.genre_id;
        const release_date = song.release_date;

        const artist = await getArtistById(artist_id);
        const genre = await getGenreById(genre_id);

        // console.log(`Genre`, genre); <-- find out what's in the "genre" 
        // array

        const div = document.createElement(`div`);

        const divHTML = `
            <h3>${title}</h3>
            <p>Artist: ${artist.name}</p>
            <p>Genre: ${genre.name}</p>
            <p>Release Date: ${release_date}</p>;
        `;

        div.innerHTML = divHTML;
        songContainer.appendChild(div);

    songContainer.appendChild(div);

    }); // Done with the loop.


};

// render all songs
// const renderAllSongs = async (songs) => {
//     if (!songs.length) {
//         songContainer.innerHTML = '<h3>No songs yet!</h3>';
//         return;
//     }

//     let songContainerHTML = '';

//     for (const song of songs) {
//         let artist = await getArtistNameById(song.artist_id);
//         let genre = await getGenreNameById(song.genre_id);

//         let songHTML = `
//             <div class="song">
//                 <h3>${song.title}</h3>
//                 <p><a href="#" class="artist-link" data-id="${song.artist_id}">${artist}</a></p>
//                 <p>${genre}</p>
//                 <p>${song.release_date}</p>
//                 <button class="delete-button" data-id="${song.id}">Delete</button>
//             </div>
//         `;
//         songContainerHTML += songHTML;
//     }

//     songContainer.innerHTML = songContainerHTML;

//     const deleteButtons = document.querySelectorAll('.delete-button');
//     deleteButtons.forEach(button => {
//         button.addEventListener('click', async (e) => {
//             const id = e.target.dataset.id;
//             await removeSong(id);
//             const songs = await fetchAllSongs();
//             renderAllSongs(songs);
//         });
//     });

//     const artistLinks = document.querySelectorAll('.artist-link');
//     artistLinks.forEach(link => {
//         link.addEventListener('click', async (e) => {
//             const id = e.target.dataset.id;
//             const artist = await fetchSingleArtist(id);
//             renderSingleArtist(artist);
//         });
//     });
// }


// add new genre
const addNewGenre = async (genre) => {
    try {
        const response = await fetch(GENRES_API_URL, {
            method: 'POST',
            body: JSON.stringify(genre),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// add new artist
const addNewArtist = async (artist) => {
    try {
        const response = await fetch(ARTISTS_API_URL, {
            method: 'POST',
            body: JSON.stringify(artist),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// render new song form
const renderNewSongForm = async () => {
    const [artists, genres] = await Promise.all([
        fetch(ARTISTS_API_URL).then(response => response.json()),
        fetch(GENRES_API_URL).then(response => response.json())
    ]);

    let formHTML = `
        <h3>Add a new song</h3>
        <form>
            <label for="title">Title</label>
            <input type="text" id="title" name="title" required>
            <select id="artist" name="artist" required>
                <option value="" disabled selected>Select an artist</option>
                ${artists.map(artist => `<option value="${artist.id}">${artist.name}</option>`).join('')}
            </select>
            <select id="genre" name="genre" required>
                <option value="" disabled selected>Select a genre</option>
                ${genres.map(genre => `<option value="${genre.id}">${genre.name}</option>`).join('')}
            </select>
            <label for="release-date">Release Date</label>
            <input type="date" id="release-date" name="release-date" required>
            <button type="submit">Add Song</button>
        </form>
    `;
    newSongForm.innerHTML = formHTML;

    // add new genre button
    const newGenreButton = document.createElement('button');
    newGenreButton.innerHTML = 'Add New Genre';
    newGenreButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const newGenreName = prompt('Enter the name of the new genre:');
        const newGenre = {
            name: newGenreName
        };
        await addNewGenre(newGenre);
        renderNewSongForm();
    });
    newSongForm.appendChild(newGenreButton);

    // add new artist button that takes name, bio, and image_url
    const newArtistButton = document.createElement('button');
    newArtistButton.innerHTML = 'Add New Artist';
    newArtistButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const newArtistName = prompt('Enter the name of the new artist:');
        const newArtistBio = prompt('Enter the bio of the new artist:');
        const newArtistImageUrl = prompt('Enter the image url of the new artist:');
        const newArtist = {
            name: newArtistName,
            bio: newArtistBio,
            image_url: newArtistImageUrl
        };
        await addNewArtist(newArtist);
        renderNewSongForm();
    });
    newSongForm.appendChild(newArtistButton);


    newSongForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const artist = document.getElementById('artist').value;
        const genre = document.getElementById('genre').value;
        const releaseDate = document.getElementById('release-date').value;

        const newSong = {
            title,
            artist_id: artist,
            genre_id: genre,
            release_date: releaseDate
        };

        await addNewSong(newSong);
        const songs = await fetchAllSongs();
        renderAllSongs(songs);
    });
}




// init function
const init = async () => {
    let songs = await fetchAllSongs();
    console.log(songs);

    renderNewSongForm();

    renderAllSongs(songs);

    alert(`Click to add test song`)
    // TEST
    await addNewSong({
        artist_id: 1, 
        genre_id: 1,
        length: {
            hours: 2, 
            minutes: 42
        },
        release_date: `1969-01-01T00:00:00.000Z`,
        title: "Testli Testla"
    })

    songs = await fetchAllSongs();
    console.log(songs);
    renderAllSongs(songs);

}

init();