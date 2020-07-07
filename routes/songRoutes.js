const router = require('express').Router()
const { Song } = require('../models')

router.get('/songs', (req, res) => {
	Song.find()
		.then((songs) => {
      console.log(songs)
      res.json(songs)
    })
		.catch((err) => console.error(err))
})

router.get('/songs/:id', (req, res) => {})

router.post('/songs', (req, res) => {
	Song.create(req.body)
		.then((song) => res.json(song))
		.catch((err) => console.error(err))
})

router.put('/songs/:id', (req, res) => {})

router.delete('/songs/:id', (req, res) => {
	Song.findByIdAndDelete(req.params.id)
		.then(() => res.sendStatus(200))
		.catch((err) => console.error(err))
})

module.exports = router
