const express = require('express');
const router  = express.Router();
const Program = require('../models/Programs');

/* GET home page */
router.get('/api', (req, res, next) => {
  res.json({express : "Conectado"});
});

router.post('/', (req, res, next) => {
  const programa = new Program ({
    media : {
      holding : req.body.holding,
      hologo : req.body.hologo,
      banner : req.body.banner,
      contenidos : {
  
          nombre : {
              programa : req.body.programa,
              descripcion : req.body.descripcion
              },
              
              origen : { 
                  pais : req.body.pais,
                  idioma : req.body.idioma
  
              },
  
              categoria : { 
                  principal : req.body.principal,
                  secundaria: req.body.secundaria,
                  terciario: req.body.terciaria,
                  genero: {
                      clasificacion: req.body.clasificacion,
                      edadMin: req.body.edadMin
                  }
  
              },
  
              programacion: { 
                  duracionNminutos: Numbereq.body.duracionNminutos,
                  publicacion: req.body.publicacion
  
              },
  
              logo: { 
                  principal: req.body.principal,
                  adicionales : {
                      miniatura : req.body.miniatura,
                      secunaria : req.body.secunaria,
                      secundariaMin : req.body.secundariaMin
                  }
  
              }
  
      }
  }
  })

  programa.save()
  .then(p => {
    res.redirect('/')
  })
  .catch(err => {
    console.log(err)
  })
})

module.exports = router;