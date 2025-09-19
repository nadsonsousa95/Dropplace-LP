import Image from "next/image";
import logo from "../assets/img/logo.png";
import bg from "../assets/img/bg.jpeg";
import applications from "../assets/img/applications.png";
import { HiCursorClick } from "react-icons/hi";
import { FaPaintRoller } from "react-icons/fa";
import { MdViewModule } from "react-icons/md";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import logobgWhite from "../assets/img/logo-2.png";


export default function HomePage() {
  return (
    <>
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
        <header className="relative z-10 flex flex-col items-center justify-center mb-10">
          <div className="relative z-10 text-4xl font-bold flex items-center justify-center gap-2 mb-5">
            <Image src={logo} alt="Dropplace Logo" width={240} height={240} />
          </div>
          <nav className="text-white mt-2">
            <a href="#solucoes" className="mx-3 hover:text-[#ef7d00] transition-colors active:text-[#ef7d00] focus:text-[#ef7d00]">Soluções</a>
            <a href="#sobre" className="mx-3 hover:text-[#ef7d00] transition-colors active:text-[#ef7d00] focus:text-[#ef7d00]">Clientes</a>
            <a href="#valores" className="mx-3 hover:text-[#ef7d00] transition-colors active:text-[#ef7d00] focus:text-[#ef7d00]">Sobre Nós</a>
            <a href="#contato" className="mx-3 hover:text-[#ef7d00] transition-colors active:text-[#ef7d00] focus:text-[#ef7d00]">Contato</a>
          </nav>
          <div className="relative z- mx-auto mt-10">
             <h1 className="font-poppins text-5xl mt-12"><span className="font-bold">Soluções logísticas</span> com a sua identidade!</h1>
              <p className="font-quicksand text-lg mt-5">Empodere PMEs e e-commerces com uma plataforma whitelabel flexível para dominar sua logística.</p>
              <a href="#solucoes" className="bg-[#ef7d00] text-white text-center font-bold py-4 px-8 text-lg rounded-md my-10 flex flex-row items-center gap-2 justify-center transform hover:scale-105 w-50  mx-auto hover:bg-[#914b00] cursor-pointer transition-all duration-300">         
                Saiba mais  <HiCursorClick size={20} className="text-white"/>
                </a>
          </div>
        </header>
      </section>

      <section id="solucoes" className="bg-[#0349ad] text-white py-20 px-5 text-center flex flex-col items-center">
         <Image src={logo} className="mb-8" alt="Dropplace aplicações" width={300} height={300}/>
         <Image src={applications} alt="Dropplace aplicações" width={800} height={800}/>
        <h2 className="font-poppins text-3xl font-bold">Plataforma Whitelabel para o seu negócio</h2>
        <p className="font-quicksand max-w-4xl mx-auto mt-5 leading-relaxed">A Dropplace oferece <strong>soluções white label</strong> em logística e entregas, permitindo que empresas tenham seus próprios aplicativos com identidade personalizada. Desenvolvemos plataformas completas, escaláveis e flexíveis, adaptadas às necessidades de cada negócio. Nosso objetivo é democratizar o acesso à tecnologia logística, entregando eficiência, controle e autonomia para marcas que desejam inovar e crescer com sua própria cara.</p>
        <a href="#contato" className="bg-white text-[#0349ad] font-poppins font-bold py-4 px-8 rounded-md inline-block mt-8 transition-transform transform hover:scale-105">Fale com um especialista</a>
      </section>

      <section className="bg-white text-[#0349ad] py-20 px-5 text-center">
        <h2 className="font-poppins text-3xl font-bold">Nossas Vantagens</h2>
        <div className="flex justify-center flex-wrap mt-10 gap-8">
          <div className="max-w-xs shadow-lg p-6 rounded-lg border gap-1 flex flex-col justify-center items-center border-gray-200">
          <div className="bg-[#0349ad] text-white p-2 rounded-md mb-2">
             <MdViewModule size={30}/>
          </div>
         
            <h3 className="font-poppins text-[#0349ad] font-bold text-xl">Modularidade</h3>
            <p className="font-quicksand text-[#909091] mt-2">Nossa plataforma se adapta às necessidades específicas de cada cliente, oferecendo soluções personalizadas e escaláveis.</p>
          </div>
          <div className="max-w-xs shadow-lg p-6 rounded-lg border gap-1  flex flex-col justify-center items-center border-gray-200">
            <div className="bg-[#ef7d00] text-white p-2 rounded-md mb-2">
             <MdOutlineConnectWithoutContact size={30}/>
            </div>
            <h3 className="font-poppins text-[#0349ad] font-bold text-xl">Conectividade</h3>
            <p className="font-quicksand text-[#909091] mt-2">Integração eficiente entre diferentes sistemas e processos logísticos, facilitando a comunicação e o fluxo de informações.</p>
          </div>
          <div className="max-w-xs shadow-lg p-6 rounded-lg border gap-1  flex flex-col justify-center items-center border-gray-200">
             <div className="bg-[#467ecb] text-white p-3 rounded-md mb-2">
            <FaPaintRoller size={25}/>
            </div>
            <h3 className="font-poppins text-[#0349ad] font-bold text-xl">Personalização</h3>
            <p className="font-quicksand text-[#909091] mt-2">Compromisso em fornecer soluções únicas que refletem a identidade de cada parceiro.</p>
          </div>
        </div>
      </section>

      <section id="valores" className="bg-gradient-to-r from-[#0349ad] to-[#043f93] text-white py-20 flex flex-col gap-8 px-5 text-center">
       <div>
        <h3 className="font-poppins font-bold text-2xl mt-5">Visão</h3>
          <p className="font-quicksand max-w-4xl mx-auto mt-2 leading-relaxed">Ser uma plataforma white label
            consolidada que transforma a
            logística com soluções flexíveis,
            inovadoras e acessíveis,
            empoderando clientes e construindo
            um futuro de crescimento
            impulsionado por logística eficiente</p>
       </div>

      <div>
        <h3 className="font-poppins font-bold text-2xl mt-5">Valores</h3>   
        <div className="font-quicksand mt-5 gap-2 flex flex-wrap justify-center max-w-4xl mx-auto">
            <span className="font-bold mx-2 border-2 border-[#ef7d00] p-2 rounded-md hover:bg-[#ef7d00] hover:text-white transition-all">Empoderamento</span>
            <span className="font-bold mx-2 border-2 border-[#ef7d00] p-2 rounded-md hover:bg-[#ef7d00] hover:text-white transition-all">Integridade</span>
            <span className="font-bold mx-2 border-2 border-[#ef7d00] p-2 rounded-md hover:bg-[#ef7d00] hover:text-white transition-all">Democratização</span>
            <span className="font-bold mx-2 border-2 border-[#ef7d00] p-2 rounded-md hover:bg-[#ef7d00] hover:text-white transition-all">Parceria</span>
            <span className="font-bold mx-2 border-2 border-[#ef7d00] p-2 rounded-md hover:bg-[#ef7d00] hover:text-white transition-all">Qualidade</span>
            <span className="font-bold mx-2 border-2 border-[#ef7d00] p-2 rounded-md hover:bg-[#ef7d00] hover:text-white transition-all">Flexibilidade</span>
            <span className="font-bold mx-2 border-2 border-[#ef7d00] p-2 rounded-md hover:bg-[#ef7d00] hover:text-white transition-all">Colaboração</span>
            <span className="font-bold mx-2 border-2 border-[#ef7d00] p-2 rounded-md hover:bg-[#ef7d00] hover:text-white transition-all">Transparência</span> 
            <span className="font-bold mx-2 border-2 border-[#ef7d00] p-2 rounded-md hover:bg-[#ef7d00] hover:text-white transition-all">Inovação</span>
        </div>
      </div>

        <div>
         <h3 className="font-poppins font-bold text-2xl mt-5">Missão</h3>
        <p className="font-quicksand max-w-4xl mx-auto mt-2 leading-relaxed">Empoderar PMEs e e-commerces com uma plataforma whitelabel flexível para dominar sua logística.</p>
        </div>

      </section>

      <section id="contato" className="bg-white text-[#0349ad] py-20 flex flex-col items-center px-5 text-center">
        <Image src={logobgWhite} className="mb-10" alt="Dropplace Logo" width={240} height={240} />
        <h2 className="font-poppins text-4xl font-bold">Pronto para transformar sua logística?</h2>
        <p className="font-quicksand text-lg  mt-4">Entre em contato e descubra como a Dropplace pode impulsionar o crescimento da sua empresa.</p>
        <a href="#contato" className="bg-[#ef7d00] text-white font-poppins font-bold py-4 px-8 rounded-md inline-block mt-8 transition-transform transform hover:scale-105">Fale com um especialista</a>
      </section>

      <footer className="bg-black text-white py-10 px-5 text-center">
        <p className="font-quicksand text-sm">&copy; 2025 Dropplace. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}