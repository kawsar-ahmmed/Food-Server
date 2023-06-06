const express = require('express')
const app = express()
const port = 3001;


app.get('/', (req, res) => {
    res.send('nodemon worked auto restert')
})
const users = [
    { id: 1, name: "sabana", emial: "sabana@gmail.com", phone: "01299999922" },
    { id: 2, name: "sabnooks", emial: "sabnooks@gmail.com", phone: "01299999922" },
    { id: 3, name: "srabonti", emial: "srabonti@gmail.com", phone: "01299999922" },
    { id: 4, name: "suchuna", emial: "suchuna@gmail.com", phone: "01299999922" },
    { id: 5, name: "kobori", emial: "kobori@gmail.com", phone: "01299999922" },
    { id: 6, name: "sabila", emial: "sabila@gmail.com", phone: "01299999922" },
    { id: 7, name: "shakira", emial: "shakira@gmail.com", phone: "01299999922" },
]

app.get('/users', (req, res) => {
    res.send(users)
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send('User Finding')
    console.log(user);
});
app.listen(port, () => {
    console.log('Example app listening on port', port)
});