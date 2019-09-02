const router = require('express').Router()
const {User} = require('./../models/')
const registerValidation = require('../validator/registerUsers')
const bcrypt = require('bcryptjs')

router.post('/register', async (req, res) => {
    try{
        const {error} = registerValidation(req.body);
        if(error) return res.status(400).json({validation_error: error.details[0].message});

        let {namaLengkap, email, levelUser, password, status} = req.body

        levelUser = !levelUser?'member':levelUser
        status = !status?'active':status

        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        const data = {namaLengkap, email, levelUser, password, status}

        const result = await User.create(data)
        res.status(201).json(result)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

router.get('/', async (req, res) => {
    try{
        const data = await User.findAll()
        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router