// const countDown = setInterval(countDown, 1000); //starts timer
// const time = 0; 

// function countDown() {
//     time++;
//     document.getElementById("buttons_icon").innerHTML = time;  
// }

let countDown = 60;
const timerElement = document.getElementById('buttons_icon');
const timerInterval = setInterval(() => {
    if (countDown <= 0) {
        clearInterval(timerInterval);
        timerElement.innerHTML = "times up";
        timerElement.style.fontSize = 38;
    } else {
        timerElement.innerHTML = `${countDown}`;
        countDown--;
    }

}, 1000);


// function stopTimer() {
//     clearInterval(countDown); //stops timer 
// }

// const quest = document.getElementById('question');
// quest.addEventListener('click', answers);
// function answers() {
//     alert("its false")
// };

// const btnPrevious = document.getElementById('btn_previous');
// btnPrevious.addEventListener('click', previous);
// function previous() {
//     alert("its false")
// };
// const btnNext = document.getElementById('btn_next');
// btnNext.addEventListener('click', next);
// function next() {
//     alert("its false")
// };
// const btnSkip = document.getElementById('btn_skip');
// btnSkip.addEventListener('click', skip);
// function skip() {
//     alert("its false")

// btn.addEventListener('click', function () {
//     alert('buttonn was clicked')
// })

// const quests = [
//     {
//         quests: "An interface design application that runs in the browser with team-based collaborative design projects",
//         answers: [
//             { text: "FIGMA", correct: false },
//             { text: "ADOBE XD", correct: true },
//             { text: "INVISION", correct: false },
//             { text: "SKETCH", correct: false }
//         ]
//     }
// ]

// function questions() {

// };