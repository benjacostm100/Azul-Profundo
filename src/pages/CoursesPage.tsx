import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, ChevronRight, Anchor, Gauge, LifeBuoy, Star, Activity, UserCheck, Layers, HeartPulse } from "lucide-react";

// eslint-disable-next-line react-refresh/only-export-components
export const allCourses = [
  {
    id: "open-water-diver",
    title: "Open Water Diver",
    description: "Tu pasaporte al mundo submarino. Aprende las habilidades esenciales para bucear hasta 18 metros con seguridad y confianza.",
    duration: "4-5 días",
    level: "Principiante",
    price: "$450",
    image: "/imagenes/open3.jpg",
    icon: <Anchor className="text-ocean" />
  },
  {
    id: "advanced-diver",
    title: "Advanced Diver",
    description: "Amplía tus límites hasta 30 metros y domina especialidades como buceo nocturno, navegación submarina y fotografía acuática.",
    duration: "2-3 días",
    level: "Intermedio",
    price: "$380",
    image: "/imagenes/avanzado3.jpg",
    icon: <Gauge className="text-ocean" />
  },
  {
    id: "rescue-diver",
    title: "Rescue Diver",
    description: "Desarrolla habilidades para prevenir y manejar emergencias. El curso más desafiante y gratificante de tu formación como buceador.",
    duration: "4 días",
    level: "Avanzado",
    price: "$420",
    image: "/imagenes/rescue.jpg",
    icon: <LifeBuoy className="text-ocean" />
  },
  {
    id: "master-diver",
    title: "Master Diver",
    description: "El pináculo del buceo recreativo. Combina especialidades avanzadas para convertirte en un buceador experto y versátil.",
    duration: "5-7 días",
    level: "Experto",
    price: "$650",
    image: "/imagenes/master2.jpg",
    icon: <Star className="text-ocean" />
  },
  {
    id: "nitrox",
    title: "Especialidad Nitrox",
    description: "Bucea con mezclas enriquecidas para prolongar tus tiempos de fondo y reducir la fatiga post-inmersión. Ideal para viajeros.",
    duration: "2 días",
    level: "Intermedio",
    price: "$220",
    image: "/imagenes/nitrox.jpg",
    icon: <Activity className="text-ocean" />
  },
  {
    id: "dive-master",
    title: "Dive Master",
    description: "Tu primer paso profesional. Aprende a liderar inmersiones y asistir en la formación de nuevos buceadores. Carrera en el mundo del buceo.",
    duration: "4-6 semanas",
    level: "Profesional",
    price: "$950",
    image: "/imagenes/dive-master.jpg",
    icon: <UserCheck className="text-ocean" />
  },
  {
    id: "intro-to-tech",
    title: "Intro to Tech",
    description: "Introducción al buceo técnico. Configuraciones avanzadas, planificación rigurosa y técnicas para inmersiones más exigentes.",
    duration: "3-4 días",
    level: "Avanzado",
    price: "$580",
    image: "/imagenes/tech.jpg",
    icon: <Layers className="text-ocean" />
  },
  {
    id: "primeros-auxilios",
    title: "Primeros Auxilios",
    description: "Aprende RCP, uso de DEA y manejo de emergencias médicas. Certificación esencial para Rescue Diver y requisito profesional.",
    duration: "2 días",
    level: "Todos los niveles",
    price: "$180",
    image: "/imagenes/auxilios2.jpg",
    icon: <HeartPulse className="text-ocean" />
  },
  {
    id: "sidemount-diver",
    title: "Sidemount Diver",
    description: "Optimizá tu flotabilidad y movilidad con esta configuración lateral. Ideal para buceo en cuevas, naufragios o técnico recreativo.",
    duration: "2-3 días",
    level: "Avanzado",
    price: "$390",
    image: "/imagenes/sidemount.jpg",
  
  },
  {
    id: "freediving",
    title: "Freediving",
    description: "Explorá el mundo submarino a pulmón. Técnicas de respiración, relajación y control mental en un entorno seguro y controlado.",
    duration: "2-3 días",
    level: "Todos los niveles",
    price: "$280",
    image: "/imagenes/freediving.jpg",

  }
];



export default function CoursesPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Cursos de Buceo</h1>
              <p className="text-xl max-w-3xl mx-auto drop-shadow-md">
                Desde tus primeras experiencias bajo el agua hasta convertirte en un buceador profesional, tenemos el curso perfecto para cada etapa de tu aventura submarina.
              </p>
            </div>
          </section>
      

      {/* Cards de cursos (versión mejorada) */}
      <div className="py-16 bg-gray-50 relative z-10 px-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {allCourses.map((course) => (
              <Card key={course.id} className="group overflow-hidden border border-gray-200 hover:border-ocean transition-all duration-300 hover:shadow-lg">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-gray-800">{course.title}</CardTitle>
                  <CardDescription className="flex flex-wrap gap-2 mt-2">
                    <span className="inline-flex items-center bg-ocean-light/20 text-ocean-dark text-xs px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pb-4">
                  <p className="text-gray-600 text-sm line-clamp-3">{course.description}</p>
                </CardContent>
                
                <CardFooter>
                  <Link to={`/cursos/${course.id}`} className="w-full">
                    <Button variant="outline" className="w-full border-ocean text-ocean hover:bg-ocean hover:text-white group">
                      Ver detalles 
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}