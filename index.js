const express = require('express')
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('wow! My name is chandanI am very to excited learning node from Programming hero')
})
const users = [
    {id: 0, name : 'shabana', email : 'shabana@gmail.com', phone: '8918308609'},
    {id: 1, name : 'Shabnoor', email : 'shabnoor@gmail.com', phone: '8918308789'},
    {id: 2, name : 'Shrabonti', email : 'shrabonti@gmail.com', phone: '8918308609'},
    {id: 3, name : 'suchorita', email : 'suchorita@gmail.com', phone: '8918308609'},
    {id: 4, name : 'sonia', email : 'sonia@gmail.com', phone: '8918308609'},
    {id: 5, name : 'susmita', email : ' susmita@gmail.com', phone: '8918308609'},
]

app.get('/users', (req, res) => {
    const search = (req.query.search);
    // use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
    
})

// app.METHOD
app.post('/users',(req,res) => {
    const newUser =  req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api 
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
    // console.log(req.params.id);
})

app.get('/fruits', (req,res) => {
    res.send(['mango', 'oranges', 'bananna'])
})

app.get('/fruits/mangoes/fozli', (req,res) => {
    res.send('Yummy Yummy tasty fazli')
})

app.listen(port, () => {
    console.log('Listening  to port 3000');
})