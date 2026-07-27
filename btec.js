let techno = document.querySelectorAll(".technonum");
let length = techno.length;

for(let i=0 ; i<length ; i++){

     document.querySelectorAll(".technonum")[i].addEventListener("click",function(){
        if(i==1){
            document.querySelector(".tech_img").src="technology_spaceport.jpg"
            document.querySelector(".tech_name").innerHTML="SPACE PORT"
            document.querySelector(".tech_para").innerHTML="A spaceport is a specialized facility where rockets and spacecraft are prepared, launched, and sometimes recovered. It plays an important role in modern space exploration."
        }
        else if(i==0){
            document.querySelector(".tech_img").src="technology_launch.jpg"
            document.querySelector(".tech_name").innerHTML="LAUNCH VEHICLE"
            document.querySelector(".tech_para").innerHTML="A launch vehicle is a rocket designed to carry spacecraft, satellites, or other payloads from Earth into space. It provides the necessary power and speed to overcome Earth’s gravity."
        }
        else if(i==2){
            document.querySelector(".tech_img").src="technology_capsule.jpg"
            document.querySelector(".tech_name").innerHTML="CAPSULE"
            document.querySelector(".tech_para").innerHTML="A spaceport is a specialized facility where rockets and spacecraft are prepared, launched, and sometimes recovered. It plays an important role in modern space exploration."
        }
     });
        
        
}
