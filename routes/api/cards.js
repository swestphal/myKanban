const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const request = require('request');


const Card = require('../../models/Card');

// @route   POST api/cards
// @desc    Create a card
// @access  Private
router.post(
    '/',
    auth,
    async (req, res) => {
        console.log("newCard")
        console.log(req.body)
        try {
            const listID = req.body.listID.split('-')[1]
            const newCard = new Card({
                _list: listID,
                card_title: req.body.formData.title,
                card_text: req.body.formData.text,

            });

            console.log(newCard)

            const card = await newCard.save();

            res.json(card);
        } catch (err) {

            res.status(500).send('Server Error');
        }
    }
);


// @route   Get api/cards
// @desc    Get boards
// @access  Private



// @route   PUT api/cards/:id
// @desc    Edit single card
// @access  Private



// @route   DELETE api/cards/:id
// @desc    Delete single card
// @access  Private


module.exports = router;