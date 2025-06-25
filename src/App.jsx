import React, { useState } from 'react';
import './App.css';
import huLogo from './assets/images/hu-logo.png';
import sfbLogo from './assets/images/sfb-logo.png';
import huUni from './assets/images/hu-uni.jpg';

const App = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'programa', label: 'Programa' },
    { id: 'registro', label: 'Registro' },
    { id: 'sede', label: 'Sede' },
    { id: 'comite', label: 'Comité Organizador' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'inicio':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">Bienvenidos</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                El VII Wedisyn Meeting es un encuentro académico dedicado al estudio de la sintaxis dialectal 
                en el extremo occidental de Europa. Este evento reúne a investigadores, lingüistas y académicos 
                interesados en explorar las variaciones sintácticas regionales y su impacto en la comprensión 
                de la evolución lingüística.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Objetivos del Encuentro</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Analizar las variaciones sintácticas en dialectos del oeste europeo</li>
                  <li>• Promover el intercambio de investigaciones recientes</li>
                  <li>• Establecer colaboraciones académicas internacionales</li>
                  <li>• Discutir metodologías innovadoras en dialectología</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Información General</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Fecha:</strong> Por confirmar</p>
                  <p><strong>Lugar:</strong> Institut für Romanistik, Humboldt-Universität zu Berlin</p>
                  <p><strong>Modalidad:</strong> Presencial</p>
                  <p><strong>Idiomas:</strong> Español, Inglés, Alemán</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'programa':
        return (
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">Programa</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 max-w-2xl mx-auto">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-lg font-medium text-yellow-800">En construcción</p>
                  <p className="text-yellow-700 mt-1">El programa detallado estará disponible próximamente.</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'registro':
        return (
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">Registro</h2>
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-lg text-gray-600">
                Para participar en el VII Wedisyn Meeting, complete el formulario de registro a través del siguiente enlace:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <a 
                  href="https://forms.google.com/VII-Wedisyn-Meeting-Westmost-Europe-Dialect-Syntax" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  VII Wedisyn Meeting - Westmost Europe Dialect Syntax
                </a>
              </div>
              <p className="text-sm text-gray-500">
                El registro es gratuito pero obligatorio para la participación en el evento.
              </p>
            </div>
          </div>
        );
      
      case 'sede':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Sede</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Institut für Romanistik</h3>
                  <p className="text-gray-700 mb-4">
                    El evento se llevará a cabo en el prestigioso Institut für Romanistik de la 
                    Humboldt-Universität zu Berlin, un centro de excelencia en estudios románicos 
                    y lingüística comparada.
                  </p>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Dirección:</strong> Unter den Linden 6, 10117 Berlin, Alemania</p>
                    <p><strong>Transporte:</strong> Estación Friedrichstraße (S-Bahn, U-Bahn)</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Humboldt-Universität zu Berlin</h3>
                  <p className="text-gray-700">
                    Fundada en 1810, la Humboldt-Universität zu Berlin es una de las universidades 
                    más prestigiosas de Alemania y Europa. Su tradición en investigación lingüística 
                    y filológica la convierte en el lugar ideal para nuestro encuentro académico.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Información Turística de Berlín</h3>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <h4 className="font-medium">Lugares de Interés</h4>
                      <p className="text-sm">Puerta de Brandenburgo, Museo de Pérgamo, East Side Gallery, Checkpoint Charlie</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Transporte</h4>
                      <p className="text-sm">Excelente red de S-Bahn, U-Bahn y autobuses. Tarjeta Berlin WelcomeCard recomendada</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Gastronomía</h4>
                      <p className="text-sm">Currywurst, Döner Kebab, cervecerías tradicionales y restaurantes internacionales</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Alojamiento</h4>
                      <p className="text-sm">Amplia oferta hotelera en Mitte, Prenzlauer Berg y Kreuzberg</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'comite':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Comité Organizador</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">DR</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Dr. María González</h3>
                <p className="text-blue-600 font-medium">Presidenta del Comité</p>
                <p className="text-sm text-gray-600 mt-2">Especialista en Sintaxis Dialectal</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">PR</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Prof. Hans Mueller</h3>
                <p className="text-green-600 font-medium">Coordinador Académico</p>
                <p className="text-sm text-gray-600 mt-2">Institut für Romanistik, HU Berlin</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600">DR</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Dra. Sophie Dubois</h3>
                <p className="text-purple-600 font-medium">Coordinadora de Programa</p>
                <p className="text-sm text-gray-600 mt-2">Lingüística Comparada</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Comité Científico</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p>• Prof. Dr. Antonio Fernández (Universidad de Salamanca)</p>
                  <p>• Dr. Elena Rossi (Università di Roma)</p>
                  <p>• Prof. Jean-Pierre Martin (Sorbonne Université)</p>
                </div>
                <div>
                  <p>• Dr. Michael Schmidt (Universität Wien)</p>
                  <p>• Dra. Carmen López (Universidad de Barcelona)</p>
                  <p>• Prof. Dr. Klaus Weber (LMU München)</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'contacto':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Contacto</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Información General</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>wedisyn2024@hu-berlin.de</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+49 30 2093-9743</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p>Institut für Romanistik</p>
                        <p>Humboldt-Universität zu Berlin</p>
                        <p>Unter den Linden 6</p>
                        <p>10117 Berlin, Alemania</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Envíanos un Mensaje</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Institución</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                    <textarea rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img src={huLogo} alt="Humboldt University" className="h-12" />
              <img src={sfbLogo} alt="SFB" className="h-12" />
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${huUni})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">VII Wedisyn Meeting</h1>
            <p className="text-xl md:text-2xl">Westmost Europe Dialect Syntax</p>
            <p className="text-lg">Institut für Romanistik, Humboldt-Universität zu Berlin</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">VII Wedisyn Meeting</h3>
              <p className="text-gray-300">
                Westmost Europe Dialect Syntax - Un encuentro académico dedicado al estudio 
                de la sintaxis dialectal en Europa occidental.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-gray-300">
                <p>wedisyn2024@hu-berlin.de</p>
                <p>+49 30 2093-9743</p>
                <p>Institut für Romanistik, HU Berlin</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Organizadores</h3>
              <div className="flex space-x-4">
                <img src={huLogo} alt="Humboldt University" className="h-8" />
                <img src={sfbLogo} alt="SFB" className="h-8" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VII Wedisyn Meeting. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

