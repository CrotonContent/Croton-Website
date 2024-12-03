import React from 'react';
import { TinaProvider as BaseTinaProvider, TinaCMS } from 'tinacms';
import { tinaClient } from '../../lib/tina/client';

const cms = new TinaCMS({
  enabled: true,
  client: tinaClient,
  sidebar: {
    enabled: true,
    position: 'overlay',
  },
});

export function TinaProvider({ children }: { children: React.ReactNode }) {
  return <BaseTinaProvider cms={cms}>{children}</BaseTinaProvider>;
}