const playBtn = document.querySelector("#play")
const song = document.querySelector("#song")
const forward = document.querySelector("#forward")
const backward = document.querySelector("#backward")


let songData = [
    {
        image: "images/Do anything.jpg",
        audio: "audios/Do anything.mp3",
        author: "Ilaiyaraaja",
        songName: "Do Anything"
    },
    {
        image: "images/Theera Ulaa.jpg",
        audio: "audios/Theera Ulaa.mp3",
        author: "A.R Rahman",
        songName: "Theera Ulaa"
    },
    {
        image: "images/Bombay theme.png",
        audio: "audios/Bombay theme.mp3",
        author: "A.R Rahman",
        songName: "Bombay Theme"
    },
    {
        image: "images/How to Name It.jpg",
        audio: "audios/How to name it.mp3",
        author: "Ilaiyaraaja",
        songName: "How To Name It"
    }
]

//Initially the song is not playing
let isPlaying = false

//to Play Song
function play() {
    song.play()
    isPlaying = true
    playBtn.classList.replace("fa-play", "fa-pause")
}

//to Pause Song
function pause() {
    song.pause()
    isPlaying = false
    playBtn.classList.replace("fa-pause", "fa-play")
}

//Actions to do when play button is clicked
playBtn.addEventListener("click", function () {
    if (isPlaying == false) {
        play()
    } else {
        pause()
    }

})

//Saving all the elements to change the song when any of the bottons are clicked
const img = document.querySelector("img")
const songname = document.querySelector("h1")
const auth = document.querySelector("h2")

//to Change the song when any of the buttons clicked
function changeSong(info) {
    img.src = info.image
    songname.textContent = info.songName
    auth.textContent = info.author
    song.src = info.audio
}
//the next song location in data
let songNumber = 1

//Logic for Forward button
forward.addEventListener("click", function () {
    changeSong(songData[songNumber])
    songNumber++
    play()
    if (songNumber >= songData.length) songNumber = 0
    //heart reset
    heart.style.color = "black"
    heartClicked = false
})

//Logic for Backward button
backward.addEventListener("click", function () {
    changeSong(songData[songNumber])
    songNumber--
    play()
    if (songNumber < 0) songNumber = songData.length - 1
    //heart reset
    heart.style.color = "black"
    heartClicked = false
})



//Time
const currentTime = document.querySelector("#currentTime")
const totalTime = document.querySelector("#totalTime")

const playingIndicator = document.querySelector("#movableLine")

song.addEventListener("timeupdate", function (info) {
    let totalTimeOfSong = info.srcElement.duration
    let currentTimeOfSong = info.srcElement.currentTime

    let playingWidth = (currentTimeOfSong / totalTimeOfSong) * 100

    playingIndicator.style.width = `${playingWidth}%`

    let totalTimeInMinutes = Math.floor(totalTimeOfSong / 60)
    let totalTimeInSeconds = Math.floor(totalTimeOfSong % 60)

    totalTime.textContent = `${totalTimeInMinutes}:${totalTimeInSeconds}`

    let currentTimeInMinutes = Math.floor(currentTimeOfSong / 60)
    let currentTimeInSeconds = Math.floor(currentTimeOfSong % 60)

    if (currentTimeInSeconds <= 9) currentTimeInSeconds = `0${currentTimeInSeconds}`

    currentTime.textContent = `${currentTimeInMinutes}:${currentTimeInSeconds}`
})

//for the heart
const heart = document.querySelector("#heart")
heartClicked = false

heart.addEventListener("click", function () {
    if (!heartClicked) {
        heart.style.color = "red"
        heartClicked = true
    } else {
        heart.style.color = "black"
        heartClicked = false
    }

})

//Shuffle
const shuffle = document.querySelector("#shuffle")

shuffle.addEventListener("click", function () {
    let n = Math.floor(Math.random() * (songData.length))
    changeSong(songData[n])
    play()
    //heart reset
    heart.style.color = "black"
    heartClicked = false
})


