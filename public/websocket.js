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
        socket.send(JSON.stringify({username: user, message: input.value}))
        input.value = ""
    }
    input.focus()
}

document.querySelector("form").addEventListener("submit", sendMessage)

socket.addEventListener("message", ({data}) => {
    const li = document.createElement("li")
    let parsed = JSON.parse(data)
    li.textContent = `${parsed.username}: ${parsed.message}`
    document.querySelector("ul").appendChild(li)
})