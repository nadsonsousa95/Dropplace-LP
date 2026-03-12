import Image from "next/image";
import logobgWhite from "../../assets/img/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#00224d] text-white py-16 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <Image src={logobgWhite} alt="Dropplace Logo" width={160} height={160} className="mb-4" />
          <p className="font-quicksand text-sm text-gray-300 leading-relaxed max-w-xs">
            Empoderando PMEs e e-commerces com plataformas whitelabel para o domínio total da sua logística.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-poppins font-bold text-lg mb-4 text-[#ef7d00]">Navegação</h4>
          <nav className="flex flex-col gap-3 font-quicksand text-sm text-gray-300">
            <a href="#solucoes" className="hover:text-white transition-colors">Soluções</a>
            <a href="#sobre" className="hover:text-white transition-colors">Clientes</a>
            <a href="#valores" className="hover:text-white transition-colors">Sobre Nós</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </nav>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-poppins font-bold text-lg mb-4 text-[#ef7d00]">Contato</h4>
          <p className="font-quicksand text-sm text-gray-300 mb-3">
            Pronto para transformar sua operação?
          </p>
          <a href="https://w.app/dropplace-startup" className="inline-block bg-[#ef7d00] text-white font-bold py-2 px-6 rounded hover:bg-[#914b00] transition-colors text-sm">
            Fale Conosco
          </a>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-quicksand">
        <p>&copy; {new Date().getFullYear()} Dropplace. Todos os direitos reservados.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
