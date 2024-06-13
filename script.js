let [hour,minute,second]=[0,0,0];
let time=document.querySelector(".time");
let start=document.querySelector(".start");
let stop=document.querySelector(".stop");
let reset=document.querySelector(".reset");

start.addEventListener("click",()=>{
    intervalId=setInterval(()=>{
        second++;
        if(second==60){
            minute++;
            second=0;
        }
        if(minute==60){
            hour++;
            minute=0;
        }
        
        let displayHour = String(hour).padStart(2, '0');
        let displayMinute = String(minute).padStart(2, '0');
        let displaySecond = String(second).padStart(2, '0');
        time.innerHTML=`${displayHour}:${displayMinute}:${displaySecond}`;

    },1000);
})
stop.addEventListener("click",()=>{
    clearInterval(intervalId);
})
reset.addEventListener("click",()=>{
    clearInterval(intervalId);
    [hour,minute,second]=[0,0,0];
    let displayHour = String(hour).padStart(2, '0');
        let displayMinute = String(minute).padStart(2, '0');
        let displaySecond = String(second).padStart(2, '0');
        time.innerHTML=`${displayHour}:${displayMinute}:${displaySecond}`;
})