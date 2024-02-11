import express from 'express';
const router = express.Router();

router.post('/signupUser', async (req, res) => {
    console.log(req.body)

    if(!req.body.email){
        return res.status(422).send('Email is required');
    };
    return res.status(200).send('Email is valid');
});

module.exports = router;
