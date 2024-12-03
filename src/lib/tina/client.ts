import { createClient } from 'tinacms/dist/client';

export const tinaClient = createClient({
  url: 'https://content.tinajs.io',
  token: process.env.TINA_TOKEN,
  clientId: process.env.TINA_CLIENT_ID,
  branch: process.env.TINA_BRANCH || 'main',
});