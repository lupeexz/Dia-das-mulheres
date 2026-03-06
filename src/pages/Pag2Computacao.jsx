import PageCard from "../components/PageCard.jsx";

export default function Pag2Computacao() {
  return (
    <PageCard
      title="Mulheres na computação"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/Qq9h2vVBZmQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="px-6 py-8 text-gray-700">
          <p>
            A história da tecnologia é marcada por mulheres muito importantes. Os primeiros
            algoritmos de computador, a conexão wireless e o primeiro compilador para linguagens
            de programação, por exemplo, foram algumas invenções femininas que revolucionaram e
            deram espaço para outras inovações.
          </p>
          <p>
            Mas o curioso é que o cenário atual é completamente oposto: as mulheres programadoras
            são minoria e, embora o mercado se diga receptivo, ainda há uma participação tímida
            delas em salas de aula e empresas.
          </p>
          <p>
            Enquanto o empreendedorismo feminino cresce, assim como a participação de mulheres em
            diversos segmentos, a tecnologia é uma área que ainda apresenta grande disparidade,
            quando comparamos a participação feminina e masculina.
          </p>
          <p>
            O último Censo do IBGE, divulgado em 2010, mostrou que apenas 22% dos alunos eram
            mulheres nas turmas de ciência da computação.
          </p>
          <p>
            No mercado, elas também são minoria e representam apenas 17% do total de programadores,
            de acordo com dados apresentados no evento “Por um Planeta 50-50: Mulheres e meninas na
            ciência e tecnologia”, realizado pela Serasa Experian em parceria com a ONU Mulheres.
          </p>
        </div>
      </div>
    </PageCard>
  );
}
