var pc = 2;
var currentVideo = 0;
var videos = document.querySelectorAll(".active,.inactive");

Array.from(videos).forEach(item => {
    item.addEventListener('ended',myHandler,false);
})
console.log(currentVideo+1);

function myHandler(e) {
    var temp = Math.floor(Math.random() * 10);
    console.log(temp+" "+pc);
    if(temp<pc&&currentVideo==3){
        if(temp<pc){
            pc=2;
            videos[currentVideo].className="inactive";
            videos[0].className="active";
            videos[0].play();
            currentVideo=0;
            console.log(currentVideo+1);
        }
        else{
            pc++;
            videos[currentVideo].play();
        }
        return;
    }
    if(temp<pc){
        pc=2;
        videos[currentVideo].className="inactive";
        videos[currentVideo+1].className="active";
        videos[currentVideo+1].play();
        currentVideo++;
        console.log(currentVideo+1);
    }
    else{
        pc++;
        videos[currentVideo].play();
    }
}