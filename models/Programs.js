const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProgramSchema = new Schema ({
  media : {
    holding : String,
    hologo : String,
    banner : String,
    contenidos : {

        nombre : {
            programa : String,
            descripcion : String
            },
            
            origen : { 
                pais : String,
                idioma : String

            },

            categoria : { 
                principal : String,
                secundaria: String,
                terciario: String,
                genero: {
                    clasificacion: String,
                    edadMin: Number
                }

            },

            programacion: { 
                duracionNminutos: Number,
                publicacion: String

            },

            logo: { 
                principal: String,
                adicionales : {
                    miniatura : String,
                    secunaria : String,
                    secundariaMin : String
                }

            }

    }
}
})

const Program = mongoose.model('Program', ProgramSchema);

module.exports = Program;