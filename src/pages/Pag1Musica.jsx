import PageCard from "../components/PageCard.jsx";

export default function Pag1Musica() {
  return (
    <PageCard
      title="Importância das mulheres na música"
    >
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <div className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
          <img
            src="https://www4.ecad.org.br/wp-content/uploads/2022/03/MulherNaMusica2022.png"
            alt="Mulheres na música"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="px-6 py-8 text-gray-700">
          <p>
            O mercado fonográfico é marcado por muitas histórias e fatos significativos, não só
            para a indústria em si, mas para a sociedade — principalmente quando o assunto são
            as mulheres na música.
          </p>
          <p>
            A luta pelos direitos autorais, por exemplo, foi um aspecto que marcou o mercado
            musical e, mais uma vez, as mulheres estavam presentes, contribuindo para a temática
            e buscando visibilidade em uma área da qual elas fazem parte.
          </p>
          <p>
            A pianista e compositora Chiquinha Gonzaga foi uma das pioneiras deste movimento no
            Brasil. Ela lutou em defesa dos direitos autorais na virada do século XX e abriu
            alas para que as atuais artistas tivessem uma presença influente no mercado da música.
          </p>
          <p>
            Toda vez que suas obras musicais eram executadas nos teatros, Chiquinha Gonzaga
            considerava que seria justo receber uma parcela do valor arrecadado, pois entendia
            que sua música era importante e cooperava para o sucesso do que era apresentado.
          </p>
          <p>
            A compositora foi a precursora da primeira sociedade de autores de teatro no Brasil,
            sendo a base das atuais associações de gestão coletiva da música — um papel
            fundamental para mostrar a relevância da mulher na participação de execuções públicas
            do mercado musical.
          </p>
        </div>
      </div>
    </PageCard>
  );
}
