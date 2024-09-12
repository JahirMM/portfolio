const Header = () => {
  return (
    <header className="flex justify-center items-center py-5 w-[1120px] mx-auto">
      <nav className="flex flex-row gap-x-10 opacity-80">
        <a href="/experience">Experiencia</a>
        <a href="/projects">Proyectos</a>
        <a href="/contact">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
