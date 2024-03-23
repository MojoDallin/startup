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
      if(result["password"] == pass)
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








app.post('/register', async (req, res) => {
  if(await getUser(req.body.email))
  {
    res.status(409).send({msg: "User already exists"})
  }
  else
  {
    const user = await createUser(req.body.email, req.body.password)
    setAuthCookie(res, user.token)
    res.send({ 
      id: user._id
    })
  }
})

app.post('/login', async (req, res) => {
  const user = await getUser(req.body.email)
  if(user)
  {
    if(await bcrypt.compare(req.body.password, user.password))
    {
      setAuthCookie(res, user.token)
      res.send({id: user._id})
      return
    }
  }
  res.status(401).send({msg: "Unauthorized"})
})

app.get('/user', async (req, res) => {
  token = req.cookies['token']
  const user = await collection.findOne({token: token})
  if(user)
  {
    res.send({email: user.email})
    return
  }
  res.status(401).send({msg: "Unauthorized"})
})

app.listen(port, () => {
  console.log(`Web service listening at port ${port}`);
});

app.use((req, res) => {
  res.sendFile('index.html', {root: './'})
})



function getUser(email)
{
    return collection.findOne({email: email})
}
async function createUser(username, password)
{
    const hashed = await bcrypt.hash(password, 10)
    const user = {
        username: username,
        password: hashed,
        pages: localStorage.getItem('pageIndxs'),
        pageNames: localStorage.getItem('pageNms'),
        noteData: localStorage.getItem('pageCntnt'),
        removed: localStorage.getItem('totalRemoved')
    }
    await collection.insertOne(user)
    return user
}


function setAuthCookie(res, token)
{
  res.cookie('token', token, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict'
  })
}