import { createApp } from 'vinxi';

export default createApp({
  routers: [
    {
      name: 'public',
      type: 'static',
      dir: './public',
      base: '/',
    },
    {
      name: 'client',
      type: 'spa',
      handler: './app/entry-client.tsx',
      target: 'browser',
      base: '/',
    },
  ],
});
