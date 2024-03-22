//dunno if i need this but oh well
const { MongoClient } = require('mongodb')

const config = require('../dbConfig.json')
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`
const client = new MongoClient(url)
const dbName = 'notepad'
const colName = 'notes'
const uuid = require('uuid')
const bcrypt = require('bcrypt')

async function tryToConnect(user)
{
    try
    {
        await client.connect()
        const result = await client.db(dbName).collection(colName).find({"username": user});
        const cursor = await result.toArray()
        cursor.forEach((i) => console.log(i["username"]))
    }
    finally
    {
        await client.close()
    }
}

async function appendNotes(note)
{
    const notesToAdd = await notes.insertOne(note)
    return notesToAdd
}




//tryToConnect().catch(console.error)