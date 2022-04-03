console.log("Welcome to Spotify");

let songindex=0;
let audioelement= new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');  

let songs=[
    {songName: "Hybrid Theory", filePath: "song/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Meteora", filePath: "song/2.mp3",coverPath:"covers/2.jpg"},
    {songName: "Castle of glass", filePath: "song/3.mp3",coverPath:"covers/3.jpg"},
    {songName: "Numb", filePath: "song/4.mp3",coverPath:"covers/4.jpg"},
    {songName: "Breaking the habit", filePath: "song/5.mp3",coverPath:"covers/5.jpg"},
    {songName: "Lost in the echo", filePath: "song/6.mp3",coverPath:"covers/6.jpg"},
    {songName: "", filePath: "song/6.mp3",coverPath:"covers/6.jpg"},
    {songName: "Hybrid Theory", filePath: "song/6.mp3",coverPath:"covers/6.jpg"}
]

masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioelement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    // console.log(progress);
    myprogressbar.value = progress;


})
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
})





