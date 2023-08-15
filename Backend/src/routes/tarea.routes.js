const router = require('express').Router()

const {
    getTareas,
    postTareas,
    putTareas,
    delTareas
} = require('../controllers/tareas.controllers');

router.get('/tarea',getTareas);

router.post('/tarea',postTareas);

router.put('/tarea/:id',putTareas);

router.delete('/tarea/:id',delTareas);


module.exports = router;