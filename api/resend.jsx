import { Resend } from 'resend';

const resend = new Resend('YOUR_RESEND_API_KEY');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      await resend.emails.send({
        from: 'your-email@example.com',
        to: email,
        subject: 'Subscription Confirmation',
        text: 'Thank you for subscribing!',
      });
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
