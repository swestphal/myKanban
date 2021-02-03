const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const request = require('request');


const List = require('../../models/List');
//const User = require('../../models/User');
//const checkObjectId = require('../../middleware/checkObjectId');

// @route   POST api/lists
// @desc    Create a list
// @access  Private
router.post(
    '/',
    auth,
    async (req, res) => {

        try {
            console.log(req)
            const newList = new List({
                list_title: req.body.list_title,
                order: req.body.order
            });



            const list = await newList.save();

            res.json(list);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);


// @route   Get api/lists
// @desc    Get boards
// @access  Private

router.get('/', auth, async (req, res) => {
    try {
        const lists = await List.find().sort({ date: -1 });
        res.json(lists);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   PUT api/lists/:id
// @desc    Edit single list
// @access  Private



// @route   DELETE api/lists/:id
// @desc    Delete single list
// @access  Private



module.exports = router;