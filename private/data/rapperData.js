

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
    'kendrick lamar': {
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

let rapHTML = `<div class="table-responsive" id='inter'>
<table class="table table-hover table-dark table-striped">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Country</th>
            <th scope="col">Age</th>
            <th scope="col">Net Worth</th>
            <th scope="col">Best Song</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Dok2</td>
            <td>Korea</td>
            <td>31</td>
            <td>6m</td>
            <td>Beverly 1lls</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Bushido</td>
            <td>Germany</td>
            <td>42</td>
            <td>9m</td>
            <td>Mephisto</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>G Dragon</td>
            <td>Korea</td>
            <td>32</td>
            <td>40m</td>
            <td>Crooked</td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td>DJ Shadow</td>
            <td>USA</td>
            <td>48</td>
            <td>3m</td>
            <td>Nobody Speak</td>
        </tr>
        <tr>
            <th scope="row">5</th>
            <td>Miyachi</td>
            <td>Japan</td>
            <td>28</td>
            <td>1m</td>
            <td>WAKARIMASEN</td>
        </tr>
        <tr>
            <th scope="row">6</th>
            <td>Dwagie</td>
            <td>Taiwan</td>
            <td>36</td>
            <td>300k</td>
            <td>Refuse to listen</td>
        </tr>
        <tr>
            <th scope="row">7</th>
            <td>Afasi & Filthy</td>
            <td>Sweden</td>
            <td>36</td>
            <td>Unknown</td>
            <td>Bomfalleralla</td>
        </tr>
        <tr>
            <th scope="row">8</th>
            <td>Rich Brian</td>
            <td>USA</td>
            <td>21</td>
            <td>1m</td>
            <td>Dat $tick</td>
        </tr>
        <tr>
            <th scope="row">9</th>
            <td>Future </td>
            <td>USA</td>
            <td>37</td>
            <td>40m</td>
            <td>Life Is Good</td>
        </tr>
        <tr>
            <th scope="row">10</th>
            <td>VAVA</td>
            <td>China</td>
            <td>25</td>
            <td>1m</td>
            <td>Life's A Struggle</td>
        </tr>
    </tbody>
</table>
</div>`


module.exports = {
    getJSON: function () {
        console.log('called: getJSON');
        return rappers;
    },
    getHTML: function () {
        console.log("html working");
        return rapHTML;
    }
}
