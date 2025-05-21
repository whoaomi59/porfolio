const PortfolioHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            DevFolio
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Proyectos</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Habilidades</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre mí</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</a>
          </nav>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default PortfolioHeader;