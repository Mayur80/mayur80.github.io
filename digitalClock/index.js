const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const greetingEl = document.getElementById("greeting");



function askName() { 
    var user=localStorage.getItem('Username');
    if(user){
    document.getElementById("userpara").innerHTML = "Hello, " + user; 
    }
    else{
    let username = prompt("To make your time on this website better, please enter your name."); if (username != null) { 
    user=localStorage.setItem('Username', username)
    document.getElementById("userpara").innerHTML = "Hello, " + username; 
    } else { 
    document.getElementById("noUser").innerHTML = "Welcome, Stranger!"; 
    }} }



function formatAMPM(date) {
   var hours = date.getHours();
  
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
   var ampm = hours >= 12 ? 'PM' : 'AM';
   
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    //var ampm = "PM";
   
   
    

    if (ampm == "PM")
        {   
            if (hours == 12 || hours <5)
            {
            greetingEl.innerText="Good afternoon"
             }
             else if (hours >= 5 && hours <11)
             {
                greetingEl.innerText="Good Evening";
             }
            else if (hours >= 11 && hours <12)
            {
                greetingEl.innerText="Good Night";
            }
        }
    else if (ampm == "AM" && hours >= 0 && hours <6)
        {
        greetingEl.innerText="Good Night";
        }

    hourEl.innerText=hours;
    minuteEl.innerText=minutes;
    secondEl.innerText=seconds;
    ampmEl.innerText=ampm;


    setTimeout(()=>{formatAMPM(new Date)}, 1000);
    
    
  }
  
  formatAMPM(new Date);
 
  
 




