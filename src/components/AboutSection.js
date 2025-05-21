const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/img/foto.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre Mí</h2>
            <p className="text-gray-600 mb-4">
              Soy un Desarrollo de software: fuertemente enfocado en React JS,
              con experiencia en el manejo de Angular Y Vue. Además tengo amplio
              conocimiento desarrollo Backend en el manejo de Nest JS, NodeJs,
              Laravel y python
            </p>
            <p className="text-gray-600 mb-6">
              Cuando no estoy codificando, me gusta contribuir a proyectos open
              source, aprender nuevas tecnologías y compartir conocimiento con
              la comunidad de desarrolladores.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Contrátame
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
