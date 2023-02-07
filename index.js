// Add your code here
function submitData(userName, userEmail) {
    const data = {
        name: userName,
        email: userEmail
    }
    const postObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    };
    return fetch("http://localhost:3000/users", postObj)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            //debugger;
            const body = document.querySelector("body");
            //const p = document.createElement("p");
            body.textContent = data.id;
            console.log(body);
            //body.appendChild(p);
        })
        .catch(err => {
            const body = document.querySelector("body");
            //const p = document.createElement("p");
            body.textContent = err.message;
            //body.appendChild(p);
        });
}