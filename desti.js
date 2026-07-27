let desti = document.querySelectorAll(".desti0");
let lengthofdesti = desti.length;
for(let i=0;i<lengthofdesti;i++){

    document.querySelectorAll(".desti0")[i].addEventListener("click",function(event){
        
        event.preventDefault();
        if(i==1){
            document.querySelector(".moon").src="image-mars.png";
            document.querySelector(".h1").innerHTML="Mars";
            document.querySelector(".destipara1").innerHTML=" Don't forget to pack your hiking boots. you will need them to tackle olympus mons, The tallest planetary mountain in our solar system. it's two and half times the size of Everest!";
            document.querySelector(".destipara2").innerHTML="500km"
            document.querySelector(".destipara3").innerHTML="17 Months"
        }
        else if(i==0){
            document.querySelector(".moon").src="image-moon.png";
            document.querySelector(".h1").innerHTML="Moon";
            document.querySelector(".destipara1").innerHTML="The moon has no atmosphare which means there is no wind, rain, weather. Footprints left by the astronauts can remain visible for millions of years. The moon hass been orbiting earth for over 4.5 billion years and plays a major role in creating ocean tides and stabilizing earth rotation. The first human landing on the moon took place during the historic Apollo 11 landing mission in 1969 .";
            document.querySelector(".destipara2").innerHTML="200km"
            document.querySelector(".destipara3").innerHTML="9 Months"
        }
         else if(i==2){
            document.querySelector(".moon").src="image-europa.png";
            document.querySelector(".h1").innerHTML="Europa";
            document.querySelector(".destipara1").innerHTML="Europa is one of Jupiter's most fascinating moons. Beneath its frozen icy surface lies a vast ocean that may contain more water than all of Earth's oceans combined. Scientists believe this hidden ocean could provide conditions suitable for life, making Europa one of the most exciting destinations for future space exploration.";
            document.querySelector(".destipara2").innerHTML="800km"
            document.querySelector(".destipara3").innerHTML="15 Months"
        }
         else if(i==3){
            document.querySelector(".moon").src="image-titan.png";
            document.querySelector(".h1").innerHTML="Titan";
            document.querySelector(".destipara1").innerHTML="Titan, Saturn's largest moon, is one of the most Earth-like worlds in the Solar System. It has a dense atmosphere, flowing rivers, and vast lakes—but instead of water, they are filled with liquid methane. With its unique environment and rich organic chemistry, Titan is considered one of the most intriguing destinations for future space exploration.";
            document.querySelector(".destipara2").innerHTML="1400km"
            document.querySelector(".destipara3").innerHTML="37 Months"
        }
    });
}