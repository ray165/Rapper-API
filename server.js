const express = require('express')
// By convention we make a const app function. Brings in all methods of the express package!
const app = express()
const cors = require('cors')
const PORT = 8000
const fs = require("fs");
app.use(cors())
const myData = require('./private/data/rapperData');
const rapperData = require('./private/data/rapperData');

app.use('/js', express.static('private/js'));
app.use('/css', express.static('private/css'));
app.use('/img', express.static('private/img'));
// app.use('/data', express.static('private/data'));

let rappers = {
    '21 savage': {
        'age': 28,
        'birthName': 'Savage Kim',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 27,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthLocation': 'Chicago, USA'
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}




// response comes with mehtods we can use to respond to a user request 
app.get('/', (req, res) => {
    // __dirname tells node where to look for the file!  --> look in the directory for the html file
    // '/clientSide/index.html' currently doesnt work for some reason
    res.sendFile(__dirname + '/private/index.html')
})

app.get('/api/rappers/:rapperName', (req, res)=>{
    // rapperName constant below peels off the ':rapperName' which is provided by the user!
    const rapName = req.params.rapperName.toLowerCase()
    console.log(rapName)
    // Check for invalid input, spit out default if invalid
    let rapperData = myData.getJSON();
    // rapperData = myData;

    if (rapperData[rapName]){
        res.json(rapperData[rapName])
    } else {
        res.json(rapperData['unknown'])
    }

    // if (rappers[rapName]){
    //     res.json(rappers[rapName])
    // } else {
    //     res.json(rappers['unknown'])
    // }

})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})