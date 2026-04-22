import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full flex flex-col relative items-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
