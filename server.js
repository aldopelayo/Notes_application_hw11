const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const util = require('util')

const readFileA = util.promisify(fs.readFile)
const writeFileA = util.promisify(fs.writeFile)

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

///save button activation
///read db field 
app.get('/public/notes',function(req, res){
    readFileA('./db/db.json','utf-8').then(function(data){
        notes = [].concat(JSON.parse(data))
        res.json(notes);
    })
});
///post notes 


//delete data 




app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });


