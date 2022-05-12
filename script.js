// Array of starting portion of the message, will deteremine what category message will be created.
let baseLine = ['NEVER', 'Only you can', 'Remember,', 'You will be', 'You are'];

// Object containing lists of endlines with do diff categories, if baseline[x] < 3 then use category 1, if baseline[x] >=3 use category 2, with one extra exception.
const endLine = {
    categoryOne: ['prevent forest fires.', 
    'be yourself.', 
    'stop the hate', 
    'climb the mountain that is your life.', 
    'escape the doubts that hold you back.',
    'be the sailor of the ship that is your life.',
    'stop holding yourself back.'
    ],
    catergoryTwo: ['the greatest you out there.',
    'the only one who controls your destiny.',
    'the one with ALL the cards.',
    'the best.',
    'the greatest to ever do whatever it is that you do.',
    'the pilot of your life.',
    'the top lion of your pride.'
    ],
    positiveFace: '(｡◕‿◕｡)',
    negativeFace: '( ಠ ʖ̯ ಠ )',
};

//Randomize Functions

//Creates random message using variables created so far.
const messageCreator = () => {
    let randMessage = '';
    let decider = Math.floor(Math.random() * 2); //Decides whether random message will be positive or negative
    let bases = Math.floor(Math.random() * 5); //Decides which base part will be used for the random message
    if (bases === 0) {
        let endSelect = endLine.categoryOne[Math.floor(Math.random() * 7)];
        randMessage = baseLine[bases] + " " + endSelect + " " + endLine.negativeFace;
    } else if (bases < 3 && bases !== 0) {
        let endSelect = endLine.categoryOne[Math.floor(Math.random() * 7)];
        randMessage = baseLine[bases] + " " + endSelect + " " + endLine.positiveFace;
    } else if (bases >= 3 && decider === 0) {                                 //This section modifies the category 2 outcomes to add a negative option to them, adding more randomization.
        let endSelect = endLine.catergoryTwo[Math.floor(Math.random() * 7)];
        baseLine[3] = 'You will NEVER be';
        baseLine[4] = 'You are NEVER';
        randMessage = baseLine[bases] + " " + endSelect + " " + endLine.negativeFace;
    } else if (bases >= 3 && decider === 1) {
        let endSelect = endLine.catergoryTwo[Math.floor(Math.random() * 7)];
        randMessage = baseLine[bases] + " " + endSelect + " " + endLine.positiveFace;
    };
    //console.log(randMessage);
    return randMessage;
};

 //(messageCreator(negOrPos, baseSelect));

let targetButton = document.getElementById('motivebutton');

targetButton.onclick = function changeContent() {
    document.getElementById('motivebox').innerHTML = messageCreator();
}


