console.log("Hello world")
let audioElement= new Audio('1.mp3')
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myProgressBar')
let songIndex=0
let gif=document.getElementById('gif')
let songList=Array.from(document.getElementsByClassName('songItem'))


let songs=[
    {songName:"Heavy",filePath: "songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Breaking the habit",filePath: "songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"New Divide",filePath: "songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Powerless",filePath: "songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Numb",filePath: "songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Castle of Glass",filePath: "songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Leave Out all the rest",filePath: "songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Burn it down",filePath: "songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Somewhere I belong",filePath: "songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"Lost in the echo",filePath: "songs/10.mp3",coverPath:"covers/10.jpg"},

]



audioElement.addEventListener('timeupdate',()=>{
    // console.log("timeupdate")
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress)
    myProgressBar.value=progress

})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100





})

masterPlay.addEventListener ('click', ()=> {
    if (audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0;
    }
})
 

// songList.forEach((element,i) => {
//     // console.log(element,i);
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByTagName("span")[0].innerText = songs[i].songName;
//     // element.

// })
// // console.log(songList)


// Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//         console.log(e)
//         index=parseInt()
//         audioElement.src=`songs/${index}.mp3`
//         audioElement.play()

//     })


// })

