import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full h-8 z-50 group pointer-events-auto">
      <nav className="absolute top-0 w-full border-b border-border shadow-sm bg-background/90 backdrop-blur-md transition-transform duration-500 ease-in-out -translate-y-full group-hover:translate-y-0">
        <div className="w-full mx-auto flex justify-between items-center px-8 md:px-16 h-16">
          <Link to="/" className="font-mono text-lg font-bold tracking-tighter">Daegu Cho, Ph.D.</Link>
          <div className="hidden md:flex gap-8 items-center font-sans tracking-tight text-sm font-medium">
            <NavLink to="/" className={({isActive}) => isActive ? "text-primary border-b-2 border-primary pb-1 active:scale-[0.98] transition-transform" : "text-muted-foreground hover:text-foreground transition-colors duration-200 active:scale-[0.98] transition-transform"} end>Home</NavLink>
            <NavLink to="/profile" className={({isActive}) => isActive ? "text-primary border-b-2 border-primary pb-1 active:scale-[0.98] transition-transform" : "text-muted-foreground hover:text-foreground transition-colors duration-200 active:scale-[0.98] transition-transform"}>Profile</NavLink>
            <NavLink to="/technology" className={({isActive}) => isActive ? "text-primary border-b-2 border-primary pb-1 active:scale-[0.98] transition-transform" : "text-muted-foreground hover:text-foreground transition-colors duration-200 active:scale-[0.98] transition-transform"}>Technology</NavLink>
            <NavLink to="/research" className={({isActive}) => isActive ? "text-primary border-b-2 border-primary pb-1 active:scale-[0.98] transition-transform" : "text-muted-foreground hover:text-foreground transition-colors duration-200 active:scale-[0.98] transition-transform"}>Research</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "text-primary border-b-2 border-primary pb-1 active:scale-[0.98] transition-transform" : "text-muted-foreground hover:text-foreground transition-colors duration-200 active:scale-[0.98] transition-transform"}>Contact</NavLink>
          </div>
          <div className="hidden md:block">
            <Link to="/contact">
              <button className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium rounded-md hover:opacity-90 transition-opacity">Consultation</button>
            </Link>
          </div>
          <button className="md:hidden text-foreground">
            <span className="material-symbols-outlined" data-icon="menu">menu</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
