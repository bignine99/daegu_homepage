import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-6 z-50 group pointer-events-auto">
      <footer className="absolute bottom-0 w-full border-t border-border bg-card shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
        <div className="w-full mx-auto py-4 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs font-bold text-foreground">
            © 2026 Daegu Cho, Ph.D. • Construction Intelligence Architect
          </div>
          <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <Link className="hover:text-primary transition-colors" to="#">System Status</Link>
            <Link className="hover:text-primary transition-colors" to="#">Privacy Policy</Link>
            <Link className="hover:text-primary transition-colors" to="#">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
