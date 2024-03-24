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

app.post('/update', (req, res) => {
  let result = update(req.body.username, req.body.pgs, req.body.nms, req.body.data, req.body.rmvd)
  result.then(function(output){res.send({output})})
})

async function update(user, pages, names, data, removed)
{
  try
  {
    await client.connect()
    await collection.updateOne({username: user}, {$set:{"pages": pages, "pageNames": names, "noteData": data, "removed": removed}})
  }
  finally
  {
    await client.close()
  }
}

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
        return result
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
      removed: rmvd,
      message: "Successfully logged in."
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