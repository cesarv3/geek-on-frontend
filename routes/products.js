// Configuracion express
const { response } = require('express');
const express = require('express');
const router = express.Router();


router.get('/crear',(req,res) => {
    res.render('product-create-form');
});

router.post('/crear',(req,res) => {
    res.render('product-create-form');
});

router.get('/actualizar/:id',(req,res) => {
    res.render('product-update-form');
})

router.get('/:id',(req,res) => {
    res.render('productDetail.ejs');
})

router.get('/categoria/:id',(req,res) => {
    res.render('productsCategoria.ejs');
})







module.exports = router;