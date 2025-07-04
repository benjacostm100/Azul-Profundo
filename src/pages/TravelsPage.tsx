import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const allTravels = [
  {
    id: "angra-dos-reis",
    destination: "Angra dos Reis",
    country: "Brasil",
    flag: "/imagenes/br.svg",
    date: "Destino con salidas frecuentes",
    description: "Descubre las maravillosas playas y aguas cristalinas y cálidas de esta joya brasileña que con sus más de 300 islas ofrece un sinfín de experiencias, con abundante vida marina.",
    image: "/imagenes/angra2.jpg",
    spots: "embarcado"
  },
  {
    id: "galapagos",
    destination: "Galápagos",
    country: "Ecuador",
    flag: "/imagenes/ec.svg",
    date: "Destino con salidas frecuentes",
    description: "Ubicadas en un aislado sector del Océano Pacífico, las Islas Galápagos representan uno de los lugares de mayor biodiversidad del Planeta, siendo uno de los tres mejores lugares del mundo para bucear.",
    image: "/imagenes/galapagos.jpg",
    spots: "embarcado"
  },
  {
    id: "egipto",
    destination: "Mar Rojo",
    country: "Egipto",
    flag: "/imagenes/eg.svg",
    date: "Destino con salidas frecuentes",
    description: "Las pirámides de Egipto y el río Nilo se combinan con las aguas cristalinas, coloridos arrecifes y muchos naufragios rodeados de una abundante vida marina en este destino.",
    image: "/imagenes/egypt2.jpg",
    spots: "embarcado"
  },
  {
    id: "bonaire",
    destination: "Bonaire",
    country: "Caribe Holandés",
    flag: "/imagenes/nl.svg",
    date: "Destino con salidas frecuentes",
    description: "Conocido como el paraíso de los buceadores, esta isla de las Antillas Holandesas ofrece acceso fácil a más de 60 sitios de inmersión y un ecosistema marino protegido con visibilidad excepcional y agua cálida.",
    image: "/imagenes/bonaire2.jpg",
    spots: "desde costa"
  },
  {
    id: "cenotes",
    destination: "Cenotes",
    country: "México",
    flag: "/imagenes/mx.svg",
    date: "Destino con salidas frecuentes",
    description: "Las cuevas de los cenotes mexicanos son escenarios únicos para aquellos intrépidos que quieren conocer las entrañas de la Tierra.",
    image: "/imagenes/cenote2.jpg",
    spots: "desde costa"
  },
  {
    id: "roatan",
    destination: "Roatán",
    country: "Honduras",
    flag: "/imagenes/hn.svg",
    date: "Destino con salidas frecuentes",
    description: "Esta famosa isla del mar Caribe de aguas transparentes y cálidas te permite bucear en cañadones sumergidos y con un gran arrecife de coral.",
    image: "/imagenes/roatan2.jpg",
    spots: "embarcado"
  }
];



export default function TravelsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Sección de encabezado con fondo e imagen */}
      <section className="pt-44 pb-24 relative text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
           backgroundImage: "url('/imagenes/hero2.jpg')",
              
          }}
        >
          <div className="w-full h-full bg bg-gradient-to-t from-ocean-dark/30 to-cyan-200/30"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Viajes y Expediciones</h1>
          <p className="text-xl max-w-3xl mx-auto drop-shadow-md">
            Explora los mejores destinos de buceo del mundo con nuestros viajes guiados por instructores expertos.
            Vive experiencias inolvidables en lugares únicos.
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allTravels.map((travel) => (
              <Card key={travel.id} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={travel.image}
                    alt={travel.destination}
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute top-0 right-0 bg-coral text-white py-1 px-4 rounded-bl-lg font-medium">
                    {travel.spots} 
                  </div>
                </div>
                <CardHeader>
                   <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl">{travel.destination}</CardTitle>
                  <div className="flex items-center text-gray-500 mt-1">
                     
                    <MapPin size={14} className="mr-1" />
                    <img
                      src={travel.flag}
                      alt={travel.country}
                      className="w-5 h-4 mr-2 object-cover rounded-sm shadow-sm"
                    />
                    <span>{travel.country}</span>
                  </div>
                  </div>

                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={14} className="mr-2" />
                    <span>{travel.date}</span>
                  </div>
                  <p className="text-gray-600">{travel.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link to={`/viajes/${travel.id}`}>
                    <Button variant="outline" className="border-ocean text-ocean hover:bg-ocean hover:text-white">
                      Ver Detalles
                    </Button>
                  </Link>
                  <Link to={'/contacto'}>
                  <Button className="bg-ocean hover:bg-ocean-dark text-white">
                    Reservar
                  </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">¿Buscas un destino específico?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Si tienes en mente un destino que no aparece en nuestra lista, podemos organizar un viaje a medida para ti y tu grupo.
            </p>
            <Link to={'/contacto'}>
              <Button className="bg-ocean hover:bg-ocean-dark text-white">
                Contacta con nosotros
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}