// videoControls

const video = document.getElementById('video')
const playBtn = document.getElementById("playbtn");
const pauseBtn = document.getElementById("pausebtn");
const seekbar = document.querySelector('#seekbar')

const startTime = document.querySelector("#startTime")
const remainTime = document.getElementById("remainTime")
console.log(remainTime)



video.addEventListener('timeupdate', () => {
    seekbar.value = video.currentTime / video.duration * seekbar.max
    var vid = $("#video")
    var time = vid.get(0).currentTime
    var vidMin = Math.floor(time/ 60);
    var vidSec = Math.floor(time)

    if(vidSec = 60) {
        vidSec = 0
    }
    startTime.textContent = vidMin + ":" + vidSec

    vidDura = Math.floor(video.duration / 60) + ":" + Math.floor(video.duration / 3600)
    remainTime.textContent = vidDura
})

seekbar.addEventListener('change', () => {
    video.currentTime = video.duration * seekbar.value / seekbar.max
})
function fullscreen() {
    if (video.requestFullScreen) {
        video.requestFullScreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
    }
}

$('#pausebtn').hide()
$('#playbtn').click(function () {
    $(this).hide();
    $('#pausebtn').show();
});

$('#pausebtn').click(function () {
    $(this).hide();
    $('#playbtn').show();
});

playBtn.addEventListener("click", play_vid)
function play_vid() {
    video.play()
}

pauseBtn.addEventListener("click", pause_vid)
function pause_vid() {
    video.pause()
}

//searchBar
function search() {
    document.querySelector('.search').style.display = "flex"
    document.querySelector('.icon').style.display = "none"
}
function cancel() {
    document.querySelector('.search').style.display = "none"
    document.querySelector('.icon').style.display = "flex"
}

// Circular Progress

