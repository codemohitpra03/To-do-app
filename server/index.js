const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser')
const port = 3000
var cors=require('cors')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

let database=[];

app.get('/notes', (req, res) => {
  res.send(database)
})

app.post('/add_note', (req, res) => {
    let data = req.body;
    database.push({id:uuidv4(),status:"pending",data});
    // res.send('Data Received: ' + JSON.stringify(database));
    res.status(200).send("Done")
})
app.delete('/delete_note', (req, res) => {
    database=database.filter((e)=>{
      return e.id!=req.body.id
    })
    res.send(database);
})
app.put('/update', (req, res) => {
    database=database.map((e)=>{
      if (e.id === req.body.id) {
        return { ...e, status:e.status==="pending"?"done":"pending" };
      }
      return e;
    })
    res.send(database);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})