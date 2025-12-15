
function mytime(){

  let date = new Date();

  let hour = date.getHours(); 
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let time = hour + ":" + min + ":" + sec;

 setTimeout(()=>{

    mytime()

 },1000)

  // document.getElementById("time").innerText = time;

  document.getElementById("hour").innerText = hour 
  document.getElementById("min").innerText= min 
  document.getElementById("sec").innerText= sec 
}

mytime();


function myAlarm(){

   let dropdown = document.getElementById("box1time1")
   
   let dropdown2 = document.getElementById("box1time2")
   
   let dropdown3 = document.getElementById("box1time3")
   
   let dropdown4 = document.getElementById("box1time4")

let button = document.getElementById("setAlarm");

button.addEventListener("click", function() {
   let selectedvalue = dropdown.value ; 
   let selectedvalue2 = dropdown2.value ; 
   let selectedvalue3 = dropdown3.value ; 
   let selectedvalue4 = dropdown4.value ; 

   let displaySpan = document.getElementById("Alarm1");
   displaySpan.innerText =  "Wake Up Time :" + selectedvalue;

   let displaySpan2 = document.getElementById("Alarm2");
   displaySpan2.innerText = "Lunch Time :" + selectedvalue2;
   
   let displaySpan3 = document.getElementById("Alarm3");
   displaySpan3.innerText = " Nap Time :" +  selectedvalue3;

   let displaySpan4 = document.getElementById("Alarm4");
   displaySpan4.innerText = " Night Time :" + selectedvalue4;
});
}