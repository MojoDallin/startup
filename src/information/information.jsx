import React from 'react'
import './information.css'

export function Information(props) {
    const [quote, setQuote] = React.useState('Loading...')
    const [author, setAuthor] = React.useState('Unknown')
    const [totalPages, setTotalPages] = React.useState('an unknown amount of')
    React.useState(() => {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                setQuote(data.content);
                setAuthor(data.author);
            })
            .catch();

        fetch('/total-created-pages-no-increment')
            .then(response => response.json())
            .then(data => {
                setTotalPages(data.counter);
            })
            .catch();
    }, []);
    return (
        <main>
            <head>
                <title>Information</title>
            </head>
            <img alt = "notepadapp.click" src="logo.png"/>
            <header>
                <h1>Information</h1>
            </header>
            <p>Double Click a page twice to delete it (name changes to 'Delete?' to make sure).</p>
            <p>Maximum page name length is 12 characters.</p>
            <p>Pages will autosave every five seconds and autoload when the website is loaded and on login.</p>
            <p>There have been <span id="pageCounter">{totalPages}</span> total created pages. Isn't that neat?</p>
            <a href="notes"><button>Back to Notes</button></a>
            <br/>
            <br/>
            <div>
                <p>{quote}</p>
                <p>{author}</p>
            </div>
            <br/>
            <footer>
                <p>Created by Dallin Schmidt for CS260</p>
                <a href="https://github.com/MojoDallin/startup">Github</a>
            </footer>
        </main>
    );
}