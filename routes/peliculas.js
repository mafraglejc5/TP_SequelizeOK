var express = require('express');
var router = express.Router();
var peliculasController = require ("../controllers/peliculasController");

//CREACION
router.get ("/crear",peliculasController.crear);
router.post ("/crear",peliculasController.guardado);

//LECTURA
router.get ("/",peliculasController.listado);


//DETALLE
router.get ("/detail/:id",peliculasController.detalle);


//EDITAR - ACTUALIZAR
router.get ("/editar/:id",peliculasController.editar);
router.post ("/editar/:id",peliculasController.actualizar);

//BORRADO
router.post ("/borrar/:id",peliculasController.borrar);



module.exports = router;
