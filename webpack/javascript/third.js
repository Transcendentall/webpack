document.querySelector("#h3").onclick = function()
{
    let audio = new Audio();
    audio.preload = 'auto';
    audio.src = 'sylv.wav';
    audio.play();
}