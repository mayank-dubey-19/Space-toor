const dots = document.querySelectorAll(".dot");
const crewImage = document.querySelector("#crew");
const crewName = document.querySelector(".crew-name");
const crewProfession = document.querySelector(".crew-profession");
const crewPara = document.querySelector(".crew-para");

let currentIndex = 0;

const crewData = [
    {
        img: "crew1.png",
        name: "ANUSHEH ANSARI",
        profession: "FLIGHT ENGINEER",
        para: "Anousheh Ansari is an Iranian-American entrepreneur and space enthusiast who became the first Iranian woman in space. She traveled aboard the International Space Station in 2006 as a private space explorer."
    },

    {
        img: "crew3.png",
        name: "Victor Glover",
        profession: "Pilot",
        para: "Victor Glover is a NASA astronaut and U.S. Navy commander. He served as the pilot of SpaceX’s first operational Crew Dragon mission to the International Space Station.."
    },

    {
        img: "crew2.png",
        name: "Douglas Hurley",
        profession: "COMMANDER",
        para: "Douglas Hurley is an American engineer, former Marine Corps pilot, and NASA astronaut. He served as the commander of Crew Dragon Demo-2 and has traveled to space three times."
    },

    {
        img: "crew4.png",
        name: "Mark Shuttleworth",
        profession: "MISSION SPECIALIST",
        para: "Mark Shuttleworth is a South African entrepreneur and the founder of Canonical. He became the first South African citizen to travel to space as a private space traveler."
    }
];

// Crew update function
function updateCrew(index){

    crewImage.src = crewData[index].img;
    crewName.innerHTML = crewData[index].name;
    crewProfession.innerHTML = crewData[index].profession;
    crewPara.innerHTML = crewData[index].para;

    // Active Dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

// Dot Click
dots.forEach((dot,index)=>{

    dot.addEventListener("click",function(){

        currentIndex = index;
        updateCrew(currentIndex);

    });

});

// Keyboard Controls
document.addEventListener("keydown",function(event){

    // Right Arrow
    if(event.key === "ArrowRight"){

        currentIndex++;

        if(currentIndex >= crewData.length){
            currentIndex = 0;
        }

        updateCrew(currentIndex);
    }

    // Left Arrow
    if(event.key === "ArrowLeft"){

        currentIndex--;

        if(currentIndex < 0){
            currentIndex = crewData.length - 1;
        }

        updateCrew(currentIndex);
    }

});

// Initial Data
updateCrew(currentIndex);