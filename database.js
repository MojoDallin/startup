const { MongoClient } = require('mongodb')

const url = `mongodb+srv://cs260serv:0425ds@cluster0.wcsyds8.mongodb.net/`
const client = new MongoClient(url)
const dbName = 'notepad'
const colName = 'notes'
const data = require('./noteData')

async function tryToConnect()
{
    try
    {
        await client.connect()
        const result = await client.db(dbName).collection(colName).find({"username": "tschmidt77"});
        const cursor = await result.toArray()
        cursor.forEach((i) => console.log(i))
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

tryToConnect().catch(console.error)