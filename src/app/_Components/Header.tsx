import Image from "next/image";
import logo from "../../assets/img/logo.png";
import { HiCursorClick } from "react-icons/hi";

export default function Header() {
  return (
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
        <a href="#solucoes" className="bg-[#ef7d00] text-white text-center font-bold py-4 px-8 text-lg shadow-lg rounded-md my-10 flex flex-row items-center gap-2 justify-center transform hover:scale-105 w-50 mx-auto hover:bg-[#914b00] active:bg-[#914b00] focus:bg-[#914b00] cursor-pointer transition-all duration-300">
          Saiba mais <HiCursorClick size={20} className="text-white" />
        </a>
      </div>
    </header>
  );
}
