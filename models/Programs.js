const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProgramSchema = new Schema ({
  media : {
    channel : String,
    channelogo : String,
    banner : String,
    contenidos : {

        name : {
            programa : String,
            description : String
            },
            
            origin : { 
                country : String,
                language : String

            },

            categoria : { 
                principal : String,
                second: String,
                third: String,
                gender: {
                    rating: String,
                    ageMin: Number
                }

            },

            programation: { 
                duration: Number,
                publication: String

            },

            logo: { 
                programlogo: String,
                aditional : {
                    miniature : String,
                    secondary : String,
                    secundaryMin : String
                }

            }

    }
}
})

const Program = mongoose.model('Program', ProgramSchema);

module.exports = Program;