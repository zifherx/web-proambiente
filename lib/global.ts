import { CustomerContact } from "@/interfaces";

export const createWhatsAppLinkForProduct = (productName: string) => {
  const message = encodeURIComponent(
    `Hola, estoy interesado en el producto "${productName}". Me gustaría obtener más información y cotización. Gracias.`
  );
  return `https://wa.me/51966188038?text=${message}`;
};

export const createWhatsAppLinkForContact = (customer: CustomerContact) => {
  const message = encodeURIComponent(
    `Hola, soy ${customer.cliente}. Estoy interesado en el servicio "${customer.servicio}". Mi número de contacto es ${customer.celular} y mi correo es ${customer.correo}. ${customer.mensaje}`
  );
  return `https://wa.me/51966188038?text=${message}`;
}