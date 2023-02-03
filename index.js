const btn = document.querySelector('.btn');
const trailer = document.querySelector('#trailer');
const close = document.querySelector('#close');
const video = document.querySelector('#video');


btn.addEventListener('click', play);
close.addEventListener('click', stop);
function play() {
    return trailer.classList.remove('active');
}
function stop() {
    video.pause();
    video.currentTime = 0;
    return trailer.classList.add('active');

}