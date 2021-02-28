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

            res.status(500).send('Server Error');
        }
    }
);


// @route   Get api/lists
// @desc    Get boards
// @access  Private

router.get('/', async (req, res) => {
    try {
        //const lists = await List.find({ "_id": { $in: card._list } }, null, { sort: { order: 1 } })
        const lists = await List.aggregate([
            {
                $lookup:
                {
                    from: 'cards',
                    localField: '_id',
                    foreignField: '_list',
                    as: 'cards'
                }
            }
        ])
        console.log(lists[1].cards)
        res.json(lists);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   PUT api/lists/:id
// @desc    Edit single list
// @access  Private

// TODO save new list order of list 1 and list 2

router.put('/', auth, async (req, res) => {
    console.log("----------------------");
    console.log(req.body);
    console.log("----------------------");


    const myQuery = {
        '_id': req.body.id,
    }
    const newVal = {
        $set: {
            order: req.body.order
        }
    }
    try {
        const list = await List.updateOne(myQuery, newVal)
        res.json(list);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectID') {
            return res.status(404).json({ msg: 'Post not found' });
        }
        res.status(500).send('Server error');
    }
});


// @route   DELETE api/lists/:id
// @desc    Delete single list
// @access  Private



module.exports = router;