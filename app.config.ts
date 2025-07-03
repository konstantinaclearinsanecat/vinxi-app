import { createApp } from 'vinxi';
import { config } from 'vinxi/plugins/config';

export default createApp({
  server: {
    experimental: {
      asyncContext: true,
    },
  },
  routers: [
    {
      name: 'public',
      type: 'static',
      dir: './public',
      base: '/',
    },
    {
      name: 'client',
      type: 'client',
      handler: './app/entry-client.tsx',
      target: 'browser',
      plugins: () => [
        config('react', {
          babel: {
            plugins: [
              [
                '@babel/plugin-transform-react-jsx',
                {
                  runtime: 'automatic',
                },
              ],
            ],
          },
        }),
      ],
      base: '/_build',
    },
    {
      name: 'ssr',
      type: 'http',
      handler: './app/entry-server.tsx',
      target: 'server',
    },
  ],
});