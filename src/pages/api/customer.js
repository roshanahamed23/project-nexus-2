import { Resend } from 'resend';
import { render } from "@react-email/render";
import CustomerEmail from '../../../emails/Customeremail';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handle(req, res) {
  const { method } = req;

  if (method === 'POST') {
    try {
      const {name,email,service} = req.body;

      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [email],
        subject: 'You Got Booking',
        html: render(CustomerEmail({name,service})),
      });

      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send email' });
      }

      return res.status(200).json({ message: 'Email sent successfully', data });
    } catch (error) {
      console.error('Error in POST handler:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
