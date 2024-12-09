import { NextResponse } from "next/server"
import { z } from "zod"
import axios from "axios"

const bodyShema = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string()
})

const WEEBHOOK_URL = process.env.WEBHOOK_URL!

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const {email,message,name} = bodyShema.parse(body)

        const messageData = {
            embeds: [
              { 
                title: 'Mensagem de Contato',
                color: 0x4983f5,
                fields: [
                  {
                    name: 'Nome',
                    value: name,
                    inline: true,
                  },
                  {
                    name: 'E-mail',
                    value: email,
                    inline: true,
                  },
                  {
                    name: 'Mensagem',
                    value: message,
                  },
                ],
              },
            ],
          }

          await axios.post(WEEBHOOK_URL, messageData)
        
          return NextResponse.json({
            message: 'Mensagem enviada'
          })
    }catch(error) {
        console.error(error)
        return NextResponse.error()
    }
}