const Header = () => {
  return (
    <header className="fixed top-0 z-50 flex items-center justify-center w-full mx-auto mt-2">
      <nav className="flex flex-row gap-x-10 opacity-80">
        <a href="/experience">Experiencia</a>
        <a href="/projects">Proyectos</a>
        <a href="/contact">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
