import React from 'react'
import './notes.css'

export function Notes(props) {
    // var index = 1;
    // var currentPageUserIsOn = 0;
    // const [user, setUser] = React.useState(localStorage.getItem('userLoggedIn'));

    // var currentPageUserIsOn = 0;
    // var totalRemovedPages = 0;
    // var pageContent = ["This text will never be seen. Isn't that cool?"];
    // var pageIndexes = [];
    // var pageNames = [];
    // window.onload = function() {
    //     for(var i = 0; i < pageIndexes.length; i++) {
    //         pageIndexes = pageIndexes[i];
    //         addPage(true, pageNames[i]);
    //     }
    // }
    
    
    // function addPage(addedFromData, title = "Page " + index) {
    //     console.log(title)
    //     var anotherPage = document.createElement("button");
    //     anotherPage.textContent = title;
    //     anotherPage.id = "Page" + index;
    //     anotherPage.addEventListener("click", goToPage);
    //     anotherPage.addEventListener("dblclick", deletePage);
    //     anotherPage.style.backgroundColor = "#EC964A";
    //     document.getElementsByClassName("scrollingButtons").append(anotherPage);
    //     pageContent.push("This is page " + index + ", this text will be removed later and is currently a placeholder");

    //     if(!addedFromData) {
    //         pageIndexes.push(index);
    //         pageNames.push(title);
    //         fetch('/total-created-pages')
    //         .then(response => response.json())
    //         .then(data => {
    //             localStorage.setItem('totalPagesMade', data.counter); //unused but it increments counter soo
    //         })
    //     }
    //     localStorage.setItem('pageIndxs', pageIndexes);
    //     localStorage.setItem('pageNms', pageNames);
    //     index++;
    // }

    // function goToPage() {
    //     //Called when a user switches pages
    //     localStorage.setItem("pageCntnt", pageContent);
    //     if(anotherPage.textContent != "Delete?") {
    //         anotherPage.style.backgroundColor = "#4AC3EC";
    //         if(currentPageUserIsOn > 0) {
    //             try {
    //                 if(document.getElementById("Page" + currentPageUserIsOn).textContent != "Delete?");
    //                     document.getElementById("Page" + currentPageUserIsOn).style.backgroundColor = "#EC964A";
    //             } catch(ex) {
    //                 console.log("Failure");
    //             }
    //         }
    //         pageContent[currentPageUserIsOn] = document.getElementById("mainTextArea").value;
    //         currentPageUserIsOn = Number(anotherPage.id.substring(4));
    //         //change text content down here
    //         var textArea = document.getElementById("mainTextArea");
    //         textArea.value = pageContent[currentPageUserIsOn];
    //     }
    // }

    // var deleteIndex = 0;
    // function deletePage() {
    //     //Called when a user wants to delete a page
    //     var oldName = anotherPage.textContent;
    //     anotherPage.textContent = "Delete?";
    //     anotherPage.style.backgroundColor = "#F34F4F";  
    //     deleteIndex++;
    //     setTimeout(() => {
    //         anotherPage.textContent = oldName;
    //         deleteIndex = 0;
    //         anotherPage.style.backgroundColor = "#EC964A";
    //     }, 3000)
    //     if(deleteIndex > 1) {
    //         removed++;
    //         anotherPage.remove();
    //         pageIndexes.splice(pageIndexes.indexOf(currentPageUserIsOn), 1);
    //         pageNames.splice(currentPageUserIsOn - totalRemovedPages, 1);
    //         currentPageUserIsOn++;
    //         document.getElementById("Page" + currentPageUserIsOn).style.backgroundColor = "#4AC3EC";
    //         var textArea = document.getElementById("mainTextArea");
    //         textArea.value = pageContent[currentPageUserIsOn];
    //         localStorage.setItem("pageIndxs", JSON.stringify(pageIndexes));
    //         localStorage.setItem("pageNms", JSON.stringify(pageNames));
    //         localStorage.setItem("totalRemoved", totalRemovedPages);
    //     }
    // }
    // ////////
    // if(user) {
    //     save()
    //     document.getElementById("curUser").textContent = "Current User: " + localStorage.getItem('user')
    // }

    // function handleUsers(type, targ) {
    //     //Called when a user logs in
    //     console.log(targ)
    //     if(!document.getElementById("name").value || !document.getElementById("password").value) {
    //         document.getElementById("extra").textContent = "Credentials missing!"
    //         setTimeout(() => {
    //             document.getElementById("extra").textContent = ""
    //         }, 1500)
    //         return
    //     }
    //     setUser(document.getElementById("name").value)
    //     let pass = document.getElementById("password").value
    //     let bdy = JSON.stringify({username: user, password: pass, pages: pageIndexes, pageNames: pageNames, noteData: pageContent, removed: totalRemovedPages})
    //     document.getElementById("extra").textContent = "Thinking..."
    //     fetch(type, {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: bdy
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         if(data.output.message) {
    //             document.getElementById("extra").textContent = data.output.message
    //             localStorage.setItem("pageCntnt", JSON.stringify(data.output.noteData))
    //             localStorage.setItem("pageIndxs", JSON.stringify(data.output.pages))
    //             localStorage.setItem("pageNms", JSON.stringify(data.output.pageNames))
    //             localStorage.setItem("totalRemoved", data.output.removed)
    //             currentUser = data.output.username
    //             localStorage.setItem("userLoggedIn", data.output.username)
    //             location.reload()
    //         }
    //         else
    //             document.getElementById("extra").textContent = data.output
    //         if(document.getElementById("extra").textContent === "Successfully logged in.")
    //         {
    //             document.getElementById("curUser").textContent = "Current User: " + user
    //             localStorage.setItem('user', user)
    //         }
    //         setTimeout(() => {
    //             document.getElementById ("extra").textContent = ""
    //         }, 1500)
    //     })
    // }

    // function logout() {
    //     localStorage.clear()
    //     location.reload()
    // }

    // function save() {
    //     fetch('/update', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({username: currentUser, pgs: pageIndexes, nms: pageNames, data: pageContent, rmvd: totalRemovedPages})})
    //     .then(response => response.json())
    //     .then(data => {})
    //     setTimeout(save, 500)
    // }
    // //////


    // // document.getElementById("clearDataButton").style.display="none"
    // // if(user === "MojoDallin")
    // //     document.getElementById("clearDataButton").style.display="block"
    // // var clearIndex = 0;

    // async function reset() {
    //     document.getElementById("clearDataButton").textContent = "Clearing ALL Data..."
    //     fetch('/reset', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({})})
    //     .then(response => response.json())
    //     .then(data => {document.getElementById("clearDataButton").textContent = "ALL data cleared. Reloading..."})
    // }

    // function clearData() {
    //     var button = document.getElementById("clearDataButton")
    //     button.textContent = "Are you REALLY sure?"
    //     button.style.backgroundColor = "#F34F4F"
    //     clearIndex++;
    //     setTimeout(() => {
    //         button.textContent = "Clear ALL Data"
    //         clearIndex = 0;
    //         button.style.backgroundColor = "#EC964A"
    //     }, 3000)

    //     if(clearIndex > 1) {
    //         let result = reset()
    //         result.then(function(){
    //         setTimeout(() => {
    //             location.reload()
    //         }, 1500) })
    //     }
    // }

    // //////
    // function renamePage() {
    //     //Called when a user renames a page
    //     var txtCntnt = document.getElementById("renameName").value
    //     if(currentPageUserIsOn > 0 && txtCntnt.length > 0) {
    //         document.getElementById("Page" + currentPageUserIsOn).textContent = txtCntnt;
    //         pageNames[currentPageUserIsOn - 1] = txtCntnt
    //         localStorage.setItem("pageNms", JSON.stringify(pageNames))
    //     }
    // }

    return (
        <main>
            <div class="textBox">
                <textarea class="mainTextArea" id="mainTextArea" name="mainTextArea"></textarea>
            </div>

            <div class="scrollingButtons" id="scrollingButtons">
                <button class="newPage" id="newPage">New Page</button>
            </div>

            

            <div class="loginSystem">
                <label>Username: </label>
                <input class="usernameInput" type="text" id="name" name="name" size="10" maxlength="10"/>
                <br/>
                <label>Password: </label>
                <input class="passwordInput" type="password" id="password" name="password" size="10" maxlength="10"/>
                <br/>
                <label id="curUser">Current User: </label>
                <br/>
                <button class="loginButton" >Log In</button>
                <button class="logoutButton" >Log Out</button>
                <br/>
                <button class="signupButton" >Sign Up</button>
                <br/>
                <label id="extra"></label>
                <br/>
            </div>

            <div class="clearData">
                <button class="clearDataButton" id="clearDataButton">Clear ALL Data</button>
            </div>

            <div class="rename">
                <input type="text" class="renameName" id="renameName" name="renameName" maxlength="12"/>
                <br/>
                <button class="renameButton">Rename Page</button>
            </div>
            <div class="messageList"><ul></ul></div>
            <div class="chat">
                <form>
                    <input type="text" placeholder="Send a message!" id="chatBox" autocomplete="off" maxlength="8"/>
                    <br/>
                    <button id="sendButton">Send</button>
                </form>
                <script defer src="websocket.js"></script>
            </div>
        </main>
    );
}