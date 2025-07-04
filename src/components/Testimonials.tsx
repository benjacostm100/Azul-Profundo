import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Laura Martínez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    role: "Open Water Diver",
    quote: "Mi experiencia con Azul Profundo fue increíble. Los instructores son muy profesionales y pacientes. Me sentí segura en todo momento y aprendí muchísimo. ¡No puedo esperar para hacer mi próximo curso con ellos!"
  },
  {
    id: 2,
    name: "Carlos Ramírez",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    role: "Advanced Open Water Diver",
    quote: "Hice mi curso Advanced con Azul Profundo y la experiencia fue excelente. El instructor me ayudó a mejorar mis habilidades y ganar confianza bajo el agua. Las inmersiones fueron espectaculares."
  },
  {
    id: 3,
    name: "Sofía García",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    role: "Rescue Diver",
    quote: "El curso de Rescue Diver fue desafiante pero increíblemente gratificante. Los instructores de Azul Profundo son muy experimentados y te preparan para manejar situaciones complejas bajo el agua."
  },
  {
    id: 4,
    name: "Javier López",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    role: "Divemaster",
    quote: "Convertirme en Divemaster con Azul Profundo fue la mejor decisión. El programa es completo y los instructores son de primer nivel. Ahora trabajo con ellos y sigo aprendiendo cada día."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  // Mostrar 3 testimonios a la vez
  const visibleTestimonials = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Fondo con degradado oceánico y blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(/imagenes/bg4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/80 via-ocean/70 to-ocean-light/60 backdrop-blur-sm"></div>
      
      {/* Burbujas decorativas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: `${Math.random() * 10 + 10}px`,
              height: `${Math.random() * 10 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0.5, 0],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Que Dicen Nuestros Alumnos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-700/50 via-red-900/60 to-red-700/50 mx-auto rounded-full"></div>
        </motion.div>

        {/* Contenedor de testimonios */}
        <div className="relative">
          
          <div className="overflow-hidden">
            <div className="flex justify-center gap-6">
              <AnimatePresence custom={direction} mode="wait">
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.id}-${currentIndex}`}
                    custom={direction}
                    initial={{ opacity: 0, x: 80 * direction, scale: 0.95 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0, 
                      scale: 1,
                      transition: { 
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1] 
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      x: -80 * direction, 
                      scale: 0.95,
                      transition: { 
                        duration: 0.4,
                        ease: [0.7, 0, 0.84, 0] 
                      }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="w-full max-w-sm flex-shrink-0"
                  >
                    
                    <Card className="bg-white shadow-lg border-0 relative h-full min-h-[420px]">
                      <CardContent className="pt-24 pb-8 px-6 text-center h-full flex flex-col">
                        
                        <div className="absolute pt-12 -top-10 left-1/2 transform -translate-x-1/2">
                          <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="w-20 h-20 rounded-full overflow-hidden border-3 border-white shadow-lg bg-white"
                          >
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        </div>
                        <div className="text-4xl text-ocean-light mb-2 opacity-30">"</div>
                        <p className="text-gray-600 mb-4 italic text-base leading-relaxed flex-grow">
                          {testimonial.quote}
                        </p>
                        <div className="mt-auto">
                          <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                          <p className="text-ocean font-medium text-sm">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          
          </div>

          {/* Controles de navegación */}
          <Button 
            onClick={prevTestimonial}
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 backdrop-blur-md shadow-lg rounded-full w-12 h-12 hover:bg-white hover:shadow-xl transition-all"
          >
            <ChevronLeft className="text-ocean-dark" size={24} />
          </Button>
          <Button 
            onClick={nextTestimonial}
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 backdrop-blur-md shadow-lg rounded-full w-12 h-12 hover:bg-white hover:shadow-xl transition-all"
          >
            <ChevronRight className="text-ocean-dark" size={24} />
          </Button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-10 gap-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}
              whileHover={{ scale: 1.2 }}
              className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-white w-6' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}