import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  const values = req.body;

  console.log('values: ', values);

  const text = `
    =========================
    会社名： ${values.company}
    名前： ${values.name}
    Email: ${values.mail}
    電話番号: ${values.phoneNumber}
    内容: ${values.content}
    =========================
    `;

  const attachment = {
    author_name: 'お問い合わせ',
  };

  const data = {
    text: text,
    attachments: JSON.stringify(attachment) || [],
  };

  if (req.method === 'POST') {
    try {
      await axios({
        method: 'post',
        url: process.env.SLACK_URL,
        data: data,
      });
      res.writeHead(201).end('Created');
      return;
    } catch (err) {
      console.error('this is axios Error: ', err);
      return;
    }
  } else {
    res.writeHead(405).end('Method not allowed');
  }
};
