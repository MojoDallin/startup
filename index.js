const parser = require('body-parser')
const express = require('express');
const app = express();
const port = 4000;
const cookie = require('cookie-parser')

const { MongoClient } = require('mongodb')

const config = require('./dbConfig.json')
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`
const client = new MongoClient(url)
const dbName = 'notepad'
const colName = 'notes'
const uuid = require('uuid')
const bcrypt = require('bcrypt')
const collection = client.db('notepad').collection('notes')
const database = require("./public/database.js")

app.use(cookie());
app.use(express.static('public'));
app.use(express.json())

let counter = 0;

app.get('/total-created-pages', (req, res) => {
  counter++;
  res.json({counter});
});

app.get('/total-created-pages-no-increment', (req, res) => {
  res.json({counter});
})

app.post('/login', (req, res) => {
  let result = login(req.body.username, req.body.password)
  result.then(function(output) {
    res.send({output})
  })
})

app.post('/register', (req, res) => {
  let result = register(req.body.username, req.body.password, req.body.pages, req.body.pageNames, req.body.noteData, req.body.removed)
  result.then(function(output) {
    res.send({output})
  })
})


async function login(user, pass)
{
  try
  {
    await client.connect()
    const result = await collection.findOne({"username": user});
    if(!result)
      return "User not found! Register?"
    else
    {
      if(await bcrypt.compare(pass, result["password"]))
        return `Successfully logged in.`
      else
        return "Incorrect password!"
    }
  }
  finally
  {
    await client.close()
  }
}

async function register(username, password, pgs, nms, data, rmvd)
{
  try
  {
    await client.connect()
    const hashed = await bcrypt.hash(password, 10)
    const user = {
      username: username,
      password: hashed,
      pages: pgs,
      pageNames: nms,
      noteData: data,
      removed: rmvd
    }
    await collection.insertOne(user)
    return "Successfully logged in."
  }
  finally
  {
    await client.close()
  }
}

app.listen(port, () => {
  console.log(`Web service listening at port ${port}`);
});

app.use((req, res) => {
  res.sendFile('index.html', {root: './'})
})


function setAuthCookie(res, token)
{
  res.cookie('token', token, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict'
  })
}