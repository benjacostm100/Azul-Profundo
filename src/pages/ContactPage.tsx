"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, User, Smartphone } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import ContactInfo from "@/components/ContactInfo";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCaptcha = (token: string) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      toast.error("Por favor, completa el captcha.");
      return;
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/Azulprofundo-buceo@hotmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          nombre: `${formData.firstName} ${formData.lastName}`,
          telefono: formData.phone,
          email: formData.email,
          mensaje: formData.message,
          _subject: "Nuevo mensaje desde la web - Azul Profundo",
          _template: "table",
          _captcha: "false",
        })
      });

      if (!response.ok) throw new Error("Error en el servidor");

      toast.success("¡Mensaje enviado! Te contactaremos pronto.");
      setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();
    } catch (error) {
      console.error("FormSubmit error:", error);
      toast.error("Ocurrió un error al enviar el mensaje. Inténtalo nuevamente.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-44 pb-24 relative text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/imagenes/hero2.jpg')" }}
        >
          <div className="w-full h-full bg bg-gradient-to-t from-ocean-dark/30 to-cyan-200/30"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Contacta con Nosotros</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium drop-shadow-md">
            ¿Preguntas sobre cursos o viajes? Escríbenos y te responderemos pronto.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulario */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-ocean mb-6 border-b pb-4">
                    Formulario de Contacto
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                          Nombre *
                        </label>
                        <div className="relative">
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Ej: María"
                            className="pl-10 py-4 text-base"
                            required
                          />
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                          Apellido *
                        </label>
                        <div className="relative">
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Ej: González"
                            className="pl-10 py-4 text-base"
                            required
                          />
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Teléfono *
                      </label>
                      <div className="relative">
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Ej: +54 11 1234 5678"
                          className="pl-10 py-4 text-base"
                          required
                        />
                        <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Ej: ejemplo@email.com"
                          className="pl-10 py-4 text-base"
                          required
                        />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Mensaje *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Escribe tu consulta aquí..."
                        rows={6}
                        className="text-base p-4"
                        required
                      />
                    </div>

                    {/* Captcha */}
                    <div className="pt-4">
                      <HCaptcha
                        sitekey="086cff12-80b8-4738-aa5a-762e4528ab1a"
                        onVerify={handleCaptcha}
                        ref={captchaRef}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-ocean hover:bg-ocean-dark text-white py-6 text-lg mt-2">
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensaje
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Info de contacto */}
            <div className="space-y-8">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
