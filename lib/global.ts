export const createWhatsAppLink = (productName: string) => {
  const message = encodeURIComponent(
    `Hola, estoy interesado en el producto "${productName}". Me gustaría obtener más información y cotización. Gracias.`
  );
  return `https://wa.me/51966188038?text=${message}`;
};
