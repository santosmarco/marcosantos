import '@titan/design-system/styles/globals.css';
import { fonts } from '@titan/design-system/lib/fonts';
import { DesignSystemProvider } from '@titan/design-system/providers';
import { ClerkProvider } from '@titan/design-system/providers/clerk';
import { Analytics } from '@vercel/analytics/react';
import type { ReactNode } from 'react';

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html lang="en" className={fonts} suppressHydrationWarning>
    <body>
      <DesignSystemProvider>
        <ClerkProvider>{children}</ClerkProvider>
      </DesignSystemProvider>
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
