'use client'

import { HiArrowNarrowRight } from "react-icons/hi"
import { SectionTitle } from "../section-title"
import { Button } from "../button"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import toast from "react-hot-toast"

const ContactFormShema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof ContactFormShema>

export const ContactForm = () => {

    const {handleSubmit, register, reset, formState: {isSubmitting}} = useForm<ContactFormData>({
        resolver: zodResolver(ContactFormShema)
    })

    const onSubmit = async (data: ContactFormData) => {
        try {
            await axios.post('/api/contact', data)
            toast.success("Mensagem enviada com sucesso!")
            reset()
        } catch (error) {
            console.error(error)
            toast.error("Erro ao enviar mensagem")
        }
    }

    return (
        <section id="contact" className="py-16 px-6 md:py-32 flex items-center justify-center bg-black">
            <div className="w-full max-w-[420px] mx-auto">
                <SectionTitle subtitle="Contato" title="Entre em contato comigo! Vamos trabalho juntos"
                className="items-center text-center"
                />

                <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-12 w-full flex flex-col gap-4">

                    <input
                    placeholder="Seu nome"
                    className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4
                    focus:outline-none focus:ring-2 ring-green-500
                    "
                    {...register('name')}
                    />

                    <input
                    type="email"
                    placeholder="Seu email"
                    className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4
                    focus:outline-none focus:ring-2 ring-green-500
                    "
                    {...register('email')}
                    />

                    <textarea
                    placeholder="Mensagem"
                    className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4
                    focus:outline-none focus:ring-2 ring-green-500
                    "
                    maxLength={500}
                    {...register('message')}
                    />

                    <Button className="w-max mx-auto mt-6 shadow-button" disabled={isSubmitting}>
                        Envie sua mensagem
                        <HiArrowNarrowRight size={18}/>
                    </Button>

                </form>
            </div>
        </section>
    )
}