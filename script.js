// Array of starting portion of the message, will deteremine what category message will be created.
const baseLine = ['Never', 'Only you can', 'Remember:', 'You will be', 'You are'];

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
    ]
};

//Randomize Functions

// Decides whether or not a category 2 message will be negative or positive, 0 = negative, 1 = positive
let negOrPos = Math.floor(Math.random() * 2);
console.log(negOrPos);

//Decides which baseLine to use
let baseSelect = Math.floor(Math.random() * 5);

const messageCreator = (decider, bases) => {
    
}


