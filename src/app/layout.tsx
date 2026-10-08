import type { Metadata } from 'next';
import './globals.css';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Varad Engineering | Electrical Connectors, Clamps & Substation Hardware',
  description:
    'Established in 2003, Varad Engineering is a trusted Indian manufacturer of high-quality electrical clamps, connectors and custom-built engineering products for H.T./L.T./EHV transmission lines and substations. Tested & Approved by C.P.R.I. Bangalore.',
  keywords: [
    'Varad Engineering',
    'Electrical Connectors',
    'Palm Connector',
    'CT Connector',
    'BPI Support Clamp',
    'Terminal Connector',
    'Suspension Hardware',
    'Tension Hardware',
    'Power Transmission Hardware',
    'EHV Substation Hardware',
    'Pune Electrical Manufacturer',
    'CPRI Approved Clamps'
  ],
  authors: [{ name: 'Varad Engineering' }],
  icons: {
    icon: '/images/logo.svg'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-neutral-900 antialiased font-sans">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
