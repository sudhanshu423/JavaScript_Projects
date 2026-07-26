
let colours = document.querySelectorAll(".colour");

let body = document.querySelector("body");


colours.forEach((colour)=>{

  colour.addEventListener("click",(e)=>{

    let value = e.target.id;

    if(value == "red"){
      body.style.backgroundColor = value
    }

     if(value == "green"){
      body.style.backgroundColor = value
    }

     if(value == "blue"){
      body.style.backgroundColor = value
    }
     if(value == "yellow"){
      body.style.backgroundColor = value
    }
    
  })

})