import * as z from 'zod';

export const contactFormSchema = z.object({
    nombre: z.string().min(2, {message: 'El nombre debe tener al menos 2 caracteres'}).max(50, { message: 'El nombre no puede exceder los 50 caracteres'}),
    email: z.string().email({message: 'Ingresa un email válido'}),
    telefono: z.string().length(9, {message: 'El teléfono debe tener al menos 9 dígitos'}),
    servicio: z.string().min(1,{message: 'Por favor selecciona un servicio'}),
    mensaje: z.string().min(10, {message: 'El mensaje debe tener al menos 10 caracteres'}).max(250, { message: 'El mensaje no puede exceder los 250 caracteres'})
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;