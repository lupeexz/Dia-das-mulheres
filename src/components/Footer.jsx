import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-gray-300 py-6">
      <div className="container mx-auto flex justify-center items-center gap-2 text-sm">

        <span className="opacity-80">
          Desenvolvido por
        </span>

        <a
          href="https://github.com/lupeexz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-semibold text-white hover:text-secondary transition"
        >
          <FaGithub className="text-lg" />
          Gustavo Lupi
        </a>

      </div>
    </footer>
  );
}