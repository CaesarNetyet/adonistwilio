import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const axios = require('axios').default;

import Env from '@ioc:Adonis/Core/Env';


export default class TwiliosController {

    public async index({params}){
        const {v} = params
      return [
        {
            "name": v
        }

      ]
        
    }
    public async Hola(){
        return "Hello World"
    }
    public async Axios(){

        const res =  await axios.get('https://api.twilio.com/2010-04-01/Accounts/AC193748db1fbb5c57427a6213626dd785/Messages.json',
         {
            auth: {
                username: Env.get('TWILIO_ACCOUNT_SID'),
                password: Env.get('TWILIO_AUTH_TOKEN')
              }
            
        })
        return res.data;
    }
    public async specificMessage({params}){

        const res =  await axios.get('https://api.twilio.com/2010-04-01/Accounts/AC193748db1fbb5c57427a6213626dd785/Messages.json',
         {
            auth: {
                username: Env.get('TWILIO_ACCOUNT_SID'),
                password: Env.get('TWILIO_AUTH_TOKEN')
              }
            
        })
        const {messages} = res.data;

        return messages[params.v];
    }
    public async sendMessage(ctx : HttpContextContract){
        const accountSid = Env.get('TWILIO_ACCOUNT_SID');
        const authToken = Env.get('TWILIO_AUTH_TOKEN');
        const client = require('twilio')(accountSid, authToken);
        client.messages.create({
            body: ctx.params.v,
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+5218721170691'
        }).done();
        return ctx.response.status(201).json({message: "Mensaje Enviado con exito"})
    }
   

}