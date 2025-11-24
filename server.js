const express = require('express')
const app = express()
const PORT = 3000

const posts = [
    {
        titolo: 'Ciambellone',
        contenuto: '',
        immagine: '',
        tags: ''
    },
    {
        titolo: 'Cracker barbabietola',
        contenuto: '',
        immagine: '',
        tags: ''
    },
    {
        titolo: 'Pane fritto dolce',
        contenuto: '',
        immagine: '',
        tags: ''
    },
    {
        titolo: 'Pasta barbabietola',
        contenuto: '',
        immagine: '',
        tags: ''
    },
    {
        titolo: 'Torta paesana',
        contenuto: '',
        immagine: '',
        tags: ''
    },

]

app.get('/', (req, res) => {
    res.send(`Server del mio blog`)
})

app

app.listen(PORT, () => {
    console.log(`Example app on port ${PORT}`)
})