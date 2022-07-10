import fetch from 'node-fetch';

export default async function handler(request, response) {
  const res = await fetch(`https://api.notion.com/v1/databases/${process.env.DATABASE_ID}/query`, {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SECRET_TOKEN}`,
        'Notion-Version': '2021-08-16',
    },
  });

  const data = await res.json();

  response.setHeader('Access-Control-Allow-Credentials', true)
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  return response.status(200).json({ data });
}