const socket = new WebSocket('ws://localhost:4001')

function sendMessage(e)
{
    e.preventDefault()
    const input = document.getElementById("chatBox")
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
    if(currentUser)
        msg = currentUser + ": " + data
    else
        msg = "Guest: " + data
    li.textContent = msg
    document.querySelector("ul").appendChild(li)
})