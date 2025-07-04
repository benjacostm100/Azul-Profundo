import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, BookOpen, Clock, Award, CheckCircle, 
  AlertTriangle, Star, Layers, LifeBuoy, Shield,
  Gauge, UserCheck, Anchor, Activity, HeartPulse,
  Waves, Calendar, MapPin, Bookmark, ChevronRight, 
  GraduationCap, Clock3, Info, Compass, 
  Ship, Moon, Sun, GaugeCircle, Zap, AlertCircle,
  ShieldCheck, ClipboardList, Target, Image as ImageIcon
} from "lucide-react";
import coursesData from "@/data/coursesData";
import CoursesPage from "./CoursesPage";
import { allCourses } from "./CoursesPage";

export default function CoursePage() {
  const { courseId } = useParams();
  const course = courseId ? coursesData[courseId as keyof typeof coursesData] : null;
  const matchingCourse = allCourses.find(c => c.id === courseId);

  if (!course || !matchingCourse) return <NotFound />;

  const shortDescription = matchingCourse.description;
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-ocean-light/10">
      <Navbar />

      {/* Hero Section con botón de volver */}
      <div className="pt-44 md:pt-40 pb-20 md:pb-24 relative overflow-hidden">
        {/* Fondo con gradiente superpuesto a la imagen */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src={course.image} 
            alt={course.nombre}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-700/50" />
        </div>
        
        {/* Botón de volver a cursos (discreto en esquina) */}
        <Link 
          to="/cursos" 
          className="absolute top-36 p-3 left-4 z-20 flex items-center text-white/70 hover:text-ocean-light transition-colors group"
        >
          <ArrowLeft className="mr-1 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Volver a cursos</span>
        </Link>
        
        {/* Contenido principal del hero */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 text-yellow-200 uppercase tracking-widest font-bold flex justify-center items-center">
              <Zap className="mr-2 h-5 w-5" fill="currentColor" />
              {course.frase}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-xl">
              {course.nombre}
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              {shortDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/contacto">
                    <Button className="bg-white/20 text-black hover:bg-blue-100 border-2 border-black font-bold px-8 py-6 text-lg rounded-sm shadow-lg transition-all hover:scale-105 backdrop-blur-sm">
                      <GraduationCap className="mr-2" />
                      ¡Quiero certificarme!
                    </Button>
                  </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="md:col-span-2 space-y-16">
              {/* Descripción Completa */}
              <section className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Info className="text-blue-600 h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Sobre este curso
                  </h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg font-medium">
                  {course.descripcion}
                </p>
              </section>

              {/* Lo más destacado */}
              <section className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <Star className="text-yellow-600 h-6 w-6" fill="currentColor" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Lo más destacado
                  </h2>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.destacado.map((item, index) => (
                    <li key={index} className="flex items-start group p-4 hover:bg-blue-50 rounded-lg transition-all duration-200">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
                        <CheckCircle className="text-blue-600 h-5 w-5" />
                      </div>
                      <span className="text-gray-800 group-hover:text-gray-900 transition-colors text-lg font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Temas del curso */}
              <section className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <ClipboardList className="text-purple-600 h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Temas destacados en este curso
                  </h2>
                </div>
                
                <div className="space-y-10">
                  {course.temas.aula.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-xl text-blue-700 mb-6 flex items-center">
                        <BookOpen className="mr-3 h-6 w-6" />
                        Teoría en aula
                      </h3>
                      <ul className="space-y-4">
                        {course.temas.aula.map((tema, i) => (
                          <li key={i} className="flex items-start bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                            <ChevronRight className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-800 font-medium text-lg">{tema}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {course.temas.pileta.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-xl text-blue-700 mb-6 flex items-center">
                        <Activity className="mr-3 h-6 w-6" />
                        Prácticas en agua
                      </h3>
                      <ul className="space-y-4">
                        {course.temas.pileta.map((tema, i) => (
                          <li key={i} className="flex items-start bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                            <ChevronRight className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-800 font-medium text-lg">{tema}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            </div>

            {/* Right Column - Sidebar */}
            <div className="md:col-span-1 space-y-8">
              {/* Incluye */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-500">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <ShieldCheck className="text-green-600 h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    El curso incluye
                  </h2>
                </div>
                
                <ul className="space-y-4">
                  {course.incluye.map((item, index) => (
                    <li key={index} className="flex items-start group p-3 hover:bg-green-50 rounded-lg transition-all">
                      <div className="bg-green-100 p-2 rounded-lg mr-4 group-hover:bg-green-200 transition-colors">
                        <CheckCircle className="text-green-600 h-5 w-5" />
                      </div>
                      <span className="text-gray-800 group-hover:text-gray-900 transition-colors font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requisitos */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-yellow-500">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <AlertCircle className="text-yellow-600 h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Requisitos
                  </h2>
                </div>
                
                <ul className="space-y-4">
                  {course.requisitos.map((req, index) => (
                    <li key={index} className="flex items-start p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                      <span className="bg-yellow-100 text-yellow-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-4 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-800 font-medium">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Horarios */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 text-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center mb-6">
                  <Clock className="mr-3 h-6 w-6 text-blue-200" />
                  <h3 className="font-bold text-xl">Horarios disponibles</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-700/80 p-4 rounded-lg hover:bg-blue-700 transition-colors">
                    <h4 className="font-semibold mb-2 flex items-center">
                      Flexible
                    </h4>
                    <p className="font-medium text-blue-100">Mañana o Tarde</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center mb-4">
                  <Target className="mr-3 h-6 w-6 text-blue-200" />
                  <h3 className="font-bold text-xl">¿Listo para comenzar?</h3>
                </div>
                <p className="mb-6 text-blue-100 font-medium">
                  Cupos limitados para garantizar la mejor experiencia de aprendizaje
                </p>
                
                <div className="space-y-3">
                  <Link to="/contacto">
                    <Button className="w-full bg-white text-blue-800 hover:bg-blue-100 font-bold py-5 text-lg shadow-md hover:shadow-lg transition-all hover:scale-[1.02]">
                      <GraduationCap className="mr-2" />
                      Inscribirme ahora
                    </Button>
                  </Link>
                  
                  <Link to="/faq">
                    <Button variant="ghost" className="w-full text-white hover:bg-blue-700/50 py-5 font-medium">
                      <UserCheck className="mr-2" />
                      Tengo preguntas
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-md p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
          <div className="bg-red-100 p-4 rounded-full inline-flex mb-6">
            <AlertCircle className="text-red-500 h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Curso no encontrado</h1>
          <p className="mb-6 text-gray-600 font-medium">
            Lo sentimos, el curso que buscas no está disponible o ha sido movido.
          </p>
          <Link to="/cursos">
            <Button className="px-8 py-4 font-bold">
              <ArrowLeft className="mr-2" />
              Volver a Cursos
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}