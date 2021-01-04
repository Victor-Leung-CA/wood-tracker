var express = require('express');
var router = express.Router();
let wood = require('../models/woodModel');

router.get('/', (req, res, next) => {
    wood.find()
        .then(wood => {
            res.json(wood);
        })
        .catch((err) => {
            res.status(400).json(err.message);
        })
})

router.post('/add', (req, res) => {
    const woodType = req.body.woodType;
    const woodThickness = req.body.woodThickness;
    const woodQuantity = req.body.woodQuantity;
    const woodLogs = req.body.woodLogs;

    wood.findOne({"woodType": woodType , "woodThickness": woodThickness})
        .then(woodCollection => {
            if(woodCollection != null){
                res.status(406).json("Wood exists")
            }
            else{
                const newWood = new wood({
                    woodType,
                    woodThickness,
                    woodQuantity,
                    woodLogs
                });
            
                newWood.save()
                    .then(() => {
                        res.json(`${woodQuantity} of ${woodType} wood created!`)
                    })
                    .catch(err => {
                        res.status(400).json(err.message)
                    })
            }
        })

});

router.post('/update', (req,res) => {
    const _woodType = req.body.woodType;
    const _woodThickness = req.body.woodThickness;
    const _amountAdded = req.body.amountAdded;

    wood.findOne({"woodType": _woodType , "woodThickness": _woodThickness})
        .then(woodCollection => {
            woodCollection.woodQuantity += Number(_amountAdded);
            woodCollection.woodLogs.push({user: "addWood", amountWithdrawn: 0, updatedAmount: woodCollection.woodQuantity})
            woodCollection.save()
                .then(() => {
                    res.json(`${_amountAdded} added to ${_woodThickness} ${_woodType} wood. New total: ${woodCollection.woodQuantity}`);
                })
                .catch(err => {
                    res.status(400).json(err.message);
                })
        })
        .catch(err => {
            res.status(400).json(err.message);
        })
})

router.post('/use', (req,res) => {
    const _woodType = req.body.woodType;
    const _woodThickness = req.body.woodThickness;
    const _amountUsed = req.body.amountUsed;
    // const _user = req.body.user;

    wood.findOne({"woodType": _woodType , "woodThickness": _woodThickness})
        .then(woodCollection => {
            if(woodCollection.woodQuantity < _amountUsed){
                res.status(406).json("Not enough wood");
            }
            else{
                woodCollection.woodQuantity -= Number(_amountUsed);
                woodCollection.woodLogs.push({amountWithdrawn: _amountUsed, updatedAmount: woodCollection.woodQuantity})
                woodCollection.save()
                    .then(() => {
                        res.json(`${_amountUsed} removed from ${_woodThickness} ${_woodType} wood. New total: ${woodCollection.woodQuantity}`);
                    })
                    .catch(err => {
                        res.status(400).json(err.message);
                    })

            }
        })
        .catch(err => {
            res.status(400).json(err.message)
        })
})

module.exports = router