# CS260 Startup
### Elevator Pitch
Have you ever been typing notes on your computer to save them for an important presentation tomorrow, and right as you get to the office, you realize you forgot to print them, and you can't access them at the office? This is the perfect website for that accident; as long as you have an account and your notes are stored under your account, you can access them from any web browser once you log in. It's simple and easy to use with an intuitive user-interface that allows for multiple pages with stress-free organization. It's a very easy website to learn and you will get accustomed to the simplistic yet useful functions of it within a matter of minutes.

### Key Features
-Type anything, anywhere in the text area

-Accessible from any browser

-Easy organization

-Simplistic and elegant style

-Very easy to learn

### Technologies 
Authentication: Account button on the top right lets users log into their account and automatically save/load their pages from anywhere

Database Data: Every account and all their notes will be stored in this database which allows for authentication

WebSocket Data: Allows users to save and load their notes, as their notes will be sent from the client to the server periodically (autosaving) and sent from the server to the client when opening the page (autoloading)

### Mockup Image
![Mockup image of the website](https://github.com/MojoDallin/startup/blob/main/mockup.png)


# Recent
### HTML
-Added a base layout

-Added some functionality, such as adding and renaming pages

-Did information.html

-Deployed website


### CSS
-Vastly improved layout

-Added a color combination that looks good

-Squashed a few bugs

-Added more functionality such as buttons changing color based on your page

-Information.html cleaned up

-Added a logo


### Javascript
-Added saving between sessions (text, page names, usernames) (most functionality was already complete in HTML)

-Squashed some more bugs

-Tweaked minor things


### Service
-Added a total page counter which tracks the total amount of pages ever created, NOT the total amount of pages at a given time (deleted pages aren't subtracted)

-Also added a quote whenever information.html is loaded

-Minor tweaks

-index.js

### Login
-Login functionality

-Clear Data button repurposed to a clear all user data button, only accessible to admin

-Sign Up and Log Out buttons

-Quality of life fixes and changes

-Autosaves every 5 seconds, loads on page load and login
