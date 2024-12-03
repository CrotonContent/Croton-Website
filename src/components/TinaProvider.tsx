import React from 'react';
import { TinaProvider as BaseTinaProvider } from 'tinacms';
import { TinaCMS } from 'tinacms';

const cms = new TinaCMS({
  enabled: true,
  branch: process.env.TINA_BRANCH || 'main',
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  tinaioConfig: {
    frontendUrlOverride: typeof window !== 'undefined' ? window.location.origin : undefined,
    contentApiUrlOverride: 'https://content.tinajs.io',
  },
});

export function TinaProvider({ children }: { children: React.ReactNode }) {
  return <BaseTinaProvider cms={cms}>{children}</BaseTinaProvider>;
}