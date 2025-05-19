"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { contactFormSchema, ContactFormValues } from "@/lib/validations/forms";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { createWhatsAppLinkForContact } from "@/lib/global";

export function FormularioSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "",
      servicio: "",
      mensaje: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    setIsSubmitting(true);
    // console.log(values);
    createWhatsAppLinkForContact({
      cliente: values.nombre,
      correo: values.email,
      celular: values.telefono,
      servicio: values.servicio,
      mensaje: values.mensaje,
    })

    setTimeout(() => {
      form.reset();
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre completo</FormLabel>
              <FormControl>
                <Input placeholder="Ingresa tu nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="tu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telefono"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Tu número de celular"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="servicio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Servicio de interés</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="desratizacion">Desratización</SelectItem>
                  <SelectItem value="desinsectacion">Desinsectación</SelectItem>
                  <SelectItem value="desinfeccion">Desinfección</SelectItem>
                  <SelectItem value="limpieza-oficinas">
                    Limpieza de Oficinas
                  </SelectItem>
                  <SelectItem value="limpieza-fachadas">
                    Limpieza de Fachadas
                  </SelectItem>
                  <SelectItem value="limpieza-tanques">
                    Limpieza de Tanques
                  </SelectItem>
                  <SelectItem value="control-aviar">Control Aviar</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mensaje"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Cuéntanos más sobre lo que necesitas"
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full cursor-pointer bg-blueAmbiente hover:bg-blueAmbiente/60"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" strokeWidth={2} />
              Enviando...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" strokeWidth={2} />
              Enviar Mensaje
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
