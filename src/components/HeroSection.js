const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hola, soy <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">[Jhon Mario]</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Desarrollador Full Stack especializado en crear experiencias digitales excepcionales
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all">
              Ver proyectos
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-500 transition-colors">
              Contactarme
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;