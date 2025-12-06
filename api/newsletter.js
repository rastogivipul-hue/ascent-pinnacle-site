export default function handler(request, response) {
  if (request.method === 'POST') {
    const { email } = request.body;
    console.log("🎉 NEW SUBSCRIBER:", email);
    return response.status(200).json({ message: 'Subscribed successfully!' });
  }
  return response.status(405).json({ message: 'Method Not Allowed' });
}
