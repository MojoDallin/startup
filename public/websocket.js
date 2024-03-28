const socket = new WebSocket('ws://localhost:4000')

function sendMessage(e)
{
    e.preventDefault()
    const input = document.getElementById("chatBox")
    let user = "Guest"
    if(currentUser)
        user = currentUser
    if(input.value)
    {
        socket.send(input.value)
        input.value = ""
    }
    input.focus()
}

document.querySelector("form").addEventListener("submit", sendMessage)

socket.addEventListener("message", ({data}) => {
    const li = document.createElement("li")
    let msg = ""
    console.log(data.value)
    if(currentUser)
        msg = currentUser + ": " + data
    else
        msg = "Guest: " + data
    li.textContent = msg
    document.querySelector("ul").appendChild(li)
})