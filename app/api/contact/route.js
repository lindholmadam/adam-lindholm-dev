import { Resend } from "resend";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Grundläggande validering
    if (!name || !email || !message) {
      return Response.json({ error: "All fields are required" }, { status: 400 });
    }

    // Initiera Resend med API-nyckeln från .env.local
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Skicka e-post via Resend
    const emailResponse = await resend.emails.send({
      from: "noreply@adam-lindholm.dev", // Nu använder vi din verifierade domän
      to: "adam-lindholm@hotmail.com", // Ändra till din egen e-post där du vill ta emot meddelanden
      subject: `New message from ${name}`,
      reply_to: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    if (emailResponse.error) {
      return Response.json({ error: emailResponse.error.message }, { status: 500 });
    }

    return Response.json({ success: "Message sent successfully!" }, { status: 200 });

  } catch (error) {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
