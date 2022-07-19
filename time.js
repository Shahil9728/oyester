let hour = 11;
let min = 40;
let sec = 30;
let time = "AM";
if (sec >= 15) {
    sec = Math.abs(60 - (sec + 45));
    min++;
    if (min >= 15) {
        min = Math.abs(60 - (min + 45));
        hour++;
        if(time == "PM")
        {
            hour=hour
        }
        else{
            if(hour>=12){
                hour = "0"+Math.abs(12-hour)
            }
        }
    }
    else {
        min = min + 45;
        if(time == "PM")
        {
            if (hour > 12) {
                hour = Math.abs(12 - hour)
            }
        }
        else{
            if(hour>=12){
                hour = "0"+Math.abs(12-hour)
            }
        }
    }
}
else {
    sec = sec + 45;
    if (min >= 15) {
        min = Math.abs(60 - (min + 45));
        hour++;
        if(time == "PM")
        {
            if (hour > 12) {
                hour = Math.abs(12 - hour)
            }
        }
        else{
            if(hour>=12){
                hour = "0"+Math.abs(12-hour)
            }
        }
    }
    else {
        min = min + 45;
        if(time == "PM")
        {
            if (hour > 12) {
                hour = Math.abs(12 - hour)
            }
        }
        else{
            if(hour>=12){
                hour = "0"+Math.abs(12-hour)
            }
        }
    }
}
console.log(hour, ":", min, ":", sec);