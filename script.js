let subscribeClicked = false;
let likeClicked = false;

function subscribe() {
    window.open('https://www.youtube.com/@YouSSef-Mansour-YM', '_blank');
    subscribeClicked = true;
    updateProgress();
}

function like() {
    window.open('https://youtu.be/EfncuO1z8U4?si=UT2-zTxkiHwWxfLV', '_blank');
    likeClicked = true;
    updateProgress();
}

function updateProgress() {
    let progressBar = document.getElementById('progress-bar');
    let downloadBtn = document.getElementById('download-btn');

    if (subscribeClicked && likeClicked) {
        progressBar.style.width = '100%';
        downloadBtn.disabled = false;
    } else if (subscribeClicked || likeClicked) {
        progressBar.style.width = '50%';
    }
}
