const express = require('express')
// By convention we make a const app function. Brings in all methods of the express package!
const app = express()
const cors = require('cors')
const PORT = 8000
app.use(cors())

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
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/rappers/:rapperName', (req, res)=>{
    // rapperName constant below peels off the ':rapperName' which is provided by the user!
    const rapName = req.params.rapperName.toLowerCase()
    console.log(rapName)
    // Check for invalid input, spit out default if invalid
    if (rappers[rapName]){
        res.json(rappers[rapName])
    } else {
        res.json(rappers['unknown'])
    }
    
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})