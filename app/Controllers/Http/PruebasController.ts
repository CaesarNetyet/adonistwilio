// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import axios from "axios";
import Env from '@ioc:Adonis/Core/Env'

export default class PruebasController {

    public async prueba({params}) {

        const {name} = params;

        const contexto = [{
            "name": "AdonisJS",
            "description": "A web framework for Node.js",

        },
        {
            "name": "Lucid ORM",
            "description": "A database ORM for AdonisJS",
            "detalles": [
                "AdonisJS",
                 {
                    "name": "Lucid ORM",
                    "description": "A database ORM for AdonisJS",
                 }
                ]
        }
     ]
    
    
    }

    public async twilio() {

        
    }


}
