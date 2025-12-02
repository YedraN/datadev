const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  // Validar variables de entorno
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error("STRIPE_SECRET_KEY no está configurada");
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Configuración del servidor incompleta",
        message: "STRIPE_SECRET_KEY no está configurada"
      }),
    };
  }

  if (!process.env.URL_SITE) {
    console.error("URL_SITE no está configurada");
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Configuración del servidor incompleta",
        message: "URL_SITE no está configurada"
      }),
    };
  }

  try {
    // Validar que el body existe
    if (!event.body) {
      throw new Error("No se recibió ningún dato en la petición");
    }

    const { priceId } = JSON.parse(event.body);

    // Validar que se recibió el priceId
    if (!priceId) {
      throw new Error("No se proporcionó un priceId");
    }

    console.log("Creando sesión de checkout para priceId:", priceId);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.URL_SITE}/dashboard?success=true`,
      cancel_url: `${process.env.URL_SITE}/dashboard?canceled=true`,
    });

    console.log("Sesión creada exitosamente:", session.id);

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    console.error("Error al crear sesión de checkout:", err);

    return {
      statusCode: 400,
      body: JSON.stringify({
        error: err.message || "Error al crear la sesión de checkout",
        type: err.type || "unknown_error",
        details: err.raw?.message || err.toString()
      }),
    };
  }
};