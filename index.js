console.log("Spotify")

//Intializing Variables
let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
// audioElement.play();
let index;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songsList = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    { songName: "Chaand Baaliyan", filepath: "Songs/1.mp3", coverPath: "Images/1.jpg" },
    { songName: "Kesariya", filepath: "Songs/2.mp3", coverPath: "Images/2.jpg" },
    { songName: "Apna Bana le", filepath: "Songs/3.mp3", coverPath: "Images/3.jpg" },
    { songName: "Pyar Hota Kayi Baar hai", filepath: "Songs/4.mp3", coverPath: "Images/4.jpg" },
    { songName: "Nashe Si Chadh Gyi", filepath: "Songs/5.mp3", coverPath: "Images/5.jpg" },
    { songName: "Ghungroo", filepath: "Songs/6.mp3", coverPath: "Images/6.jpg" },
    { songName: "First Class", filepath: "Songs/7.mp3", coverPath: "Images/7.jpg" },
    { songName: "Chaand Baaliyan", filepath: "Songs/8.mp3", coverPath: "Images/8.jpg" },
]

songsList.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByTagName('span')[0].innerText = songs[i].songName;

});


masterPlay.addEventListener('click', () => {
    if (audioElement.pause() || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
// Listen To Events
audioElement.addEventListener('timeupdate', () => {
    // Progress Bar me chije % me samne piche hoti hai
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    console.log(audioElement.duration / 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration) / 100);
})

const playAll = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e)
        playAll();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${index + 1}.mp3`
        masterSongName.innerText = songs[index].songName
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (index > 7) {
        index = 0;
    }
    else {
        index += 1;
    }
    audioElement.src = `${index + 1}.mp3`
    masterSongName.innerText = songs[index].songName
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', () => {
    if (index < 1) {
        index = 0;
    }
    else {
        index -= 1;
    }
    audioElement.src = `${index + 1}.mp3`
    masterSongName.innerText = songs[index].songName
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

