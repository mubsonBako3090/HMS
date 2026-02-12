import './globals.css';

export const metadata = {
  title: 'Hospital Management System',
  description: 'Final Year Project HMS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
