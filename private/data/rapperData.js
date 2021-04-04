let rappers = {
    '21 savage': {
        'age': 28,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
        'netWorth': '12m',
        'bestSong': 'X'
    },
    'chance the rapper': {
        'age': 27,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthLocation': 'Chicago, USA',
        'netWorth': '25m',
        'bestSong': 'Cocoa Butter Kisses'
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'netWorth': 'unknown',
        'bestSong': 'unknown'
    },
    'tupac shakur': {
        'age': 25,
        'birthName': 'Tupac Amaru Shakur',
        'birthLocation': 'East Harlem, USA',
        'netWorth': '200k',
        'bestSong': 'Hit Em Up'
    },
    'ice cube': {
        'age': 51,
        'birthName': 'O\'Shea Jackson',
        'birthLocation': 'Crenshaw, USA',
        'netWorth': '160m',
        'bestSong': 'No Vaseline'
    },
    'method man': {
        'age': 50,
        'birthName': 'Clifford Smith Jr.',
        'birthLocation': 'Hempstead, USA',
        'netWorth': '14m',
        'bestSong': '7th Chamber'
    },
    'drake': {
        'age': 34,
        'birthName': 'Aubrey Drake Graham',
        'birthLocation': 'Toronto, CAD',
        'netWorth': '180m',
        'bestSong': 'God\'s Plan'
    },
    'Kendrick Lamar': {
        'age': 33,
        'birthName': 'Kendrick Lamar Duckworth',
        'birthLocation': 'Compton, USA',
        'netWorth': '75m',
        'bestSong': 'Money Trees'
    },
    'nosewall': {
        'age': 99,
        'birthName': 'Nolan Nordwall',
        'birthLocation': 'unknown',
        'netWorth': 'unknown',
        'bestSong': 'Kool Aid Kid Remix'
    },
    'the notorious b.i.g.': {
        'age': 24,
        'birthName': 'Christopher George Latore Wallace',
        'birthLocation': 'Brooklyn, USA',
        'netWorth': '10m',
        'bestSong': 'Big Poppa'
    },
}

module.exports = {
    getJSON: function () {
        console.log('called: getJSON');
        return rappers;
    }
}
