"use client";

import Image from "next/image";
import logo from "../assets/img/logo.png";
import bg from "../assets/img/bg.jpeg";
import applications from "../assets/img/applications.png";
import { FaPaintRoller } from "react-icons/fa";
import { MdViewModule, MdOutlineConnectWithoutContact } from "react-icons/md";
import logobgWhite from "../assets/img/logo-2.png";
import Header from "./_Components/Header";
import Footer from "./_Components/Footer";
import { useEffect } from "react";
import Carousel from "./_Components/Carroussel";

export default function HomePage() {

    useEffect (() => {
      window.addEventListener("scroll",()=>{
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = (winScroll / height) * 100
        const bar = document.getElementById("scrollBar")

        if(bar){
          bar.style.width = scrolled + "%"
        }
      })
    }, []);


  return (
    <>
    <div className="fixed top-0 left-0 h-1 bg-orange-400 from-blue-600 to-accent z-50" id="scrollBar"></div>
      <section className="bg-gradient-to-t from-[#004AAD] to-[#00357a] relative text-white py-20 px-5 text-center overflow-hidden min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={bg}
            alt="Background"
            fill
            style={{ objectFit: "cover", opacity: 0.2 }}
            priority
          />
        </div>
        <div data-aos="fade-down">
          <Header />
        </div>
      </section>

      <section id="solucoes" className="bg-[#0349ad] text-white py-20 px-5 text-center flex flex-col items-center">
        <Image data-aos="zoom-in" src={logo} className="mb-8" alt="Dropplace aplicações" width={300} height={300} />
        <Image data-aos="fade-up" data-aos-delay="200" src={applications} alt="Dropplace aplicações" width={800} height={800} />
        <h2 data-aos="fade-up" className="font-poppins text-3xl font-bold mt-8">Plataforma Whitelabel para o seu negócio</h2>
        <p data-aos="fade-up" data-aos-delay="200" className="font-quicksand max-w-4xl mx-auto mt-5 leading-relaxed">A Dropplace oferece <strong>soluções white label</strong> em logística e entregas, permitindo que empresas tenham seus próprios aplicativos com identidade personalizada. Desenvolvemos plataformas completas, escaláveis e flexíveis, adaptadas às necessidades de cada negócio. Nosso objetivo é democratizar o acesso à tecnologia logística, entregando eficiência, controle e autonomia para marcas que desejam inovar e crescer com sua própria cara.</p>
        <a data-aos="flip-up" data-aos-delay="400" href="#contato" className="bg-white text-[#0349ad] font-poppins font-bold py-4 px-8 rounded-md inline-block mt-8 transition-transform transform hover:scale-105 active:bg-gray-200 focus:bg-gray-200">Fale com um especialista</a>
      </section>

      <section className="bg-white text-[#0349ad] py-20 px-5 text-center">
        <h2 data-aos="fade-down" className="font-poppins text-3xl font-bold">Nossas Vantagens</h2>
        <div className="flex justify-center flex-wrap mt-10 gap-8">
          <div data-aos="fade-up" data-aos-delay="100" className="max-w-xs shadow-lg p-6 rounded-lg border gap-1 flex flex-col justify-center items-center border-gray-200 transition-transform hover:scale-105 duration-400">
            <div className="bg-[#0349ad] text-white p-2 rounded-md mb-2">
              <MdViewModule size={30} />
            </div>
            <h3 className="font-poppins text-[#0349ad] font-bold text-xl">Modularidade</h3>
            <p className="font-quicksand text-[#909091] mt-2">Nossa plataforma se adapta às necessidades específicas de cada cliente, oferecendo soluções personalizadas e escaláveis.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="max-w-xs shadow-lg p-6 rounded-lg border gap-1 flex flex-col justify-center items-center border-gray-200 transition-transform hover:scale-105 duration-400">
            <div className="bg-[#ef7d00] text-white p-2 rounded-md mb-2">
              <MdOutlineConnectWithoutContact size={30} />
            </div>
            <h3 className="font-poppins text-[#0349ad] font-bold text-xl">Conectividade</h3>
            <p className="font-quicksand text-[#909091] mt-2">Integração eficiente entre diferentes sistemas e processos logísticos, facilitando a comunicação e o fluxo de informações.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="500" className="max-w-xs shadow-lg p-6 rounded-lg border gap-1 flex flex-col justify-center items-center border-gray-200 transition-transform hover:scale-105 duration-400">
            <div className="bg-[#467ecb] text-white p-3 rounded-md mb-2">
              <FaPaintRoller size={25} />
            </div>
            <h3 className="font-poppins text-[#0349ad] font-bold text-xl">Personalização</h3>
            <p className="font-quicksand text-[#909091] mt-2">Compromisso em fornecer soluções únicas que refletem a identidade de cada parceiro.</p>
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-[#0349ad]/10 flex flex-col md:flex-row items-center justify-between gap-10 text-white py-20 px-5 md:px-20">
        <div className="w-full md:w-1/2">
            <h2 data-aos="fade-down" className="font-poppins text-[#0349ad] text-center md:text-left text-3xl md:text-4xl font-bold">Quem Somos</h2>
            <p data-aos="fade-up" data-aos-delay="200" className="text-center text-[#909091] md:text-left font-quicksand text-base max-w-3xl mx-auto md:mx-0 mt-6 leading-relaxed">
Somos uma equipe jovem e multidisciplinar formada durante um programa de residência em software promovido pelo CEPEDI no âmbito do <strong>Restic36.</strong> Foi nesse ambiente de prática e inovação que concebemos e desenvolvemos esta plataforma.

Reunimos competências em front-end, back-end, UI/UX e arquitetura de software, o que nos permite construir e evoluir soluções digitais de forma autônoma e contínua.<br></br>

Embora sediados em Salvador, muitos integrantes da equipe vivenciaram a falta de soluções de delivery e logística em cidades pequenas e médias da Bahia. Essa experiência motivou a criação de uma plataforma white label, pensada para atender <strong>PMEs, cooperativas e iniciativas locais.</strong>

Atualmente, avançamos na validação de mercado com parcerias em desenvolvimento, incluindo uma <strong>cooperativa de motoboys</strong> e a startup de impacto social <strong>Traz Favela.</strong>             </p>
            <button data-aos="flip-up" data-aos-delay="400" 
            className="bg-[#0349ad] cursor-pointer text-white flex items-center justify-center font-poppins font-bold py-4 px-8 rounded-md md:text-left text-center mt-8 transition-transform transform hover:scale-105 active:bg-[#914b00] focus:bg-[#914b00]" 
            onClick={() => window.open(process.env.NEXT_PUBLIC_WHATSAPP_LINK, "_blank")}>Entre em contato!</button>
        </div>
        <div className="w-full md:w-1/2 max-w-lg w-full" data-aos="fade-left">
          <Carousel />
        </div>
      </section>

      <section id="valores" className="bg-white] text-[#909091] py-20 flex flex-col gap-8 px-5 text-center">
        <div data-aos="fade-right">
          <h3 className="font font-bold text-[#0349ad] text-2xl mt-5">Visão</h3>
          <p className="font max-w-4xl mx-auto mt-2 leading-relaxed">Ser uma plataforma white label consolidada que transforma a logística com soluções flexíveis, inovadoras e acessíveis, empoderando clientes e construindo um futuro de crescimento impulsionado por logística eficiente.</p>
        </div>
        <div data-aos="fade-left">
          <h3 className="font font-bold text-[#0349ad] text-2xl mt-5">Valores</h3>
          <div className="font mt-5 gap-2 text-white flex flex-wrap justify-center max-w-4xl mx-auto">
            <span className="font-bold m-2 border-2 border-[#ef7d00] p-2 rounded-md text-[#ef7d00] hover:bg-[#ef7d00] hover:text-white transition-all active:bg-[#914b00] focus:bg-[#914b00]">Empoderamento</span>
            <span className="font-bold m-2 border-2 border-[#ef7d00] p-2 rounded-md text-[#ef7d00] hover:bg-[#ef7d00] hover:text-white transition-all active:bg-[#914b00] focus:bg-[#914b00]">Integridade</span>
            <span className="font-bold m-2 border-2 border-[#ef7d00] p-2 rounded-md text-[#ef7d00] hover:bg-[#ef7d00] hover:text-white transition-all active:bg-[#914b00] focus:bg-[#914b00]">Democratização</span>
            <span className="font-bold m-2 border-2 border-[#ef7d00] p-2 rounded-md text-[#ef7d00] hover:bg-[#ef7d00] hover:text-white transition-all active:bg-[#914b00] focus:bg-[#914b00]">Parceria</span>
            <span className="font-bold m-2 border-2 border-[#ef7d00] p-2 rounded-md text-[#ef7d00] hover:bg-[#ef7d00] hover:text-white transition-all active:bg-[#914b00] focus:bg-[#914b00]">Qualidade</span>
            <span className="font-bold m-2 border-2 border-[#ef7d00] p-2 rounded-md text-[#ef7d00] hover:bg-[#ef7d00] hover:text-white transition-all active:bg-[#914b00] focus:bg-[#914b00]">Flexibilidade</span>
            <span className="font-bold m-2 border-2 border-[#ef7d00] p-2 rounded-md text-[#ef7d00] hover:bg-[#ef7d00] hover:text-white transition-all active:bg-[#914b00] focus:bg-[#914b00]">Colaboração</span>
            <span className="font-bold m-2 border-2 border-[#ef7d00] p-2 rounded-md text-[#ef7d00] hover:bg-[#ef7d00] hover:text-white transition-all active:bg-[#914b00] focus:bg-[#914b00]">Transparência</span>
            <span className="font-bold m-2 border-2 border-[#ef7d00] p-2 rounded-md text-[#ef7d00] hover:bg-[#ef7d00] hover:text-white transition-all active:bg-[#914b00] focus:bg_[#914b00]" >Inovação</span>
          </div>
        </div>
        <div data-aos="fade-up">
          <h3 className="font-poppins font-bold text-[#0349ad] text-2xl mt-5">Missão</h3>
          <p className="font-quicksand max-w-4xl mx-auto mt-2 leading-relaxed">Empoderar PMEs e e-commerces com uma plataforma whitelabel flexível para dominar sua logística.</p>
        </div>
      </section>

      <section id="contato" className="bg-white text-[#0349ad] py-20 flex flex-col items-center px-5 text-center">
        <Image data-aos="zoom-in" src={logobgWhite} className="mb-10" alt="Dropplace Logo" width={240} height={240} />
        <h2 data-aos="fade-up" className="font-poppins text-4xl font-bold">Pronto para transformar sua logística?</h2>
        <p data-aos="fade-up" data-aos-delay="200" className="font-quicksand text-lg mt-4">Entre em contato e descubra como a Dropplace pode impulsionar o crescimento da sua empresa.</p>
        <a data-aos="zoom-in" data-aos-delay="400" href={process.env.NEXT_PUBLIC_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#ef7d00] shadow-lg text-white font-poppins font-bold py-4 px-8 rounded-md inline-block mt-8 transition-all transform hover:scale-105 active:scale-105 hover:bg-[#914b00] active:bg-[#914b00] focus:bg-[#914b00]">Fale com um especialista</a>
      </section>

      <Footer />
    </>
  );
}
