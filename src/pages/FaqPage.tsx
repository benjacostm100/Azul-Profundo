import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [ 
  {
    question: "¿Por qué un curso de buceo?",
    answer: "Un curso de buceo te permite explorar un mundo completamente nuevo bajo el agua, conocer ecosistemas marinos únicos y vivir una experiencia de libertad y aventura incomparable. Además, te proporciona las habilidades y conocimientos necesarios para bucear de manera segura y responsable en cualquier parte del mundo. En Azul Profundo contamos con tres agencias de gran prestigio internacional que avalan nuestro profesionalismo."
  },
  {
    question: "¿Qué se necesita para aprender a bucear?",
    answer: "Primero que nada ganas. Ganas por aprender, por conocer, por explorar y por querer participar de aventuras y desafíos nuevos. También se necesita dedicación y esfuerzo. En Azul Profundo te acompañamos en todas tus etapas de aprendizaje y experiencias para que cumplas tus objetivos."
  },
  {
    question: "¿Hace falta saber nadar?",
    answer: "No es necesario ser un nadador experto, pero sí es importante sentirse cómodo en el agua y tener habilidades básicas de natación. En Azul Profundo aprenderás técnicas específicas para moverte bajo el agua que son diferentes a la natación convencional."
  },
  {
    question: "No tuve una buena experiencia en un bautismo, ¿Puede ser distinto con un curso de buceo?",
    answer: "Absolutamente. Un bautismo suele ser una experiencia muy breve y sin mucha preparación. En un curso completo, aprenderás gradualmente, con tiempo para adaptarte al equipo y al entorno subacuático. En Azul Profundo encontrarás instructores que te guiarán paso a paso para superar cualquier ansiedad inicial, lo que hace que la experiencia sea mucho más placentera y satisfactoria."
  },
  {
    question: "¿Necesito contar con algún elemento para el curso?",
    answer: "Para comenzar el curso inicial, sólo necesitas traje de baño, toalla y ganas de aprender. En Azul Profundo te proporcionamos todo el equipo especializado (regulador, tanque, chaleco, traje, etc.) y a medida que avances, podrás ir adquiriendo tu propio equipo si lo deseas, y estaremos encantados de asesorarte."
  },
  {
    question: "¿Hasta qué edad se puede bucear?",
    answer: "Mientras te mantengas saludable, el cuerpo te lo permita y tu mente esté despejada y con ganas de seguir explorando nuevas sensaciones, podrás bucear. No hay límite de edad."
  },
  {
    question: "¿Qué horarios se cursa?",
    answer: "En Azul Profundo nuestros cursos son personalizados, así que los horarios y modalidad de cursada los propones vos. Podemos cursar en la semana, los fines de semana, durante la mañana, tarde o noche. Cuando nos contactes diseñaremos juntos la modalidad, regularidad y horarios que mejor se adapten a tus necesidades."
  },
  {
    question: "¿Cuánto dura el curso?",
    answer: "El ritmo del curso lo pone tu velocidad de aprender. No hay un límite máximo de clases. En Azul Profundo los cursos duran hasta que se aprenden los conocimientos y los ejercicios en el agua salen a la perfección."
  }
];

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section Mejorado */}
      <section className="pt-44 pb-24 relative text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/imagenes/hero2.jpg')",
          }}
        >
          <div className="w-full h-full bg bg-gradient-to-t from-ocean-dark/30 to-cyan-200/30"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium drop-shadow-md">
            Resolvemos todas tus dudas sobre el buceo y nuestros cursos
          </p>
        </div>
      </section>

      {/* Sección de FAQs Mejorada */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50 flex-grow">
        <div className="container mx-auto px-2">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-10">
                <h2 className="text-2xl md:text-4xl font-bold text-ocean mb-16 text-center">
                  ¿Tienes dudas? Aquí las respondemos
                </h2>
                
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border-b border-gray-200 last:border-b-0"
                    >
                      <AccordionTrigger className="text-lg md:text-2xl font-semibold text-gray-800 hover:text-ocean py-4">
                        <span className="text-left">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4 text-lg leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                <div className="mt-12 text-center">
                  <p className="text-lg text-gray-600 mb-6">
                    ¿No encontraste lo que buscabas?
                  </p>
                  <a 
                    href="/contacto" 
                    className="inline-block bg-ocean hover:bg-ocean-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
                  >
                    Contáctanos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}