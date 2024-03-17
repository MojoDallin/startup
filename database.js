const { MongoClient } = require('mongodb')

const url = `mongodb+srv://cs260serv:0425ds@cluster0.wcsyds8.mongodb.net/`
const client = new MongoClient(url)

async function tryToConnect()
{
    try
    {
        await client.connect()
        console.log("Running!")
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