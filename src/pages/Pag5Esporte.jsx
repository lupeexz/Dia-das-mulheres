import PageCard from "../components/PageCard.jsx";

export default function Pag5Esporte() {
  return (
    <PageCard
      title="Mulheres no esporte"
    >
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <div className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
          <img
            src="https://www.olimpiadatododia.com.br/wp-content/uploads/2018/03/Dia-Internacional-da-Mulher-OTD.jpg"
            alt="Mulheres no esporte"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="px-6 py-8 text-gray-700">
          <p>
            Muitas mulheres quebraram tabus para alcançar a igualdade ou para simplesmente poder
            praticar um esporte. O nome de Kathrine Switzer, por exemplo, está inscrito com letras
            de ouro na história do esporte: em 1967 ela lutou contra a proibição que impedia as
            mulheres de competirem em uma maratona.
          </p>
          <p>
            Ela e muitas outras abriram um precedente pelo mero fato de competirem. Outras passaram
            à história por atingirem a excelência, como Larisa Latýnina com suas 18 medalhas olímpicas.
          </p>
          <p>
            Nas últimas décadas, cada vez mais mulheres praticam esporte de forma habitual e também
            no mais alto nível. Os sucessos na elite são o reflexo de um trabalho na base: cada vez
            há mais meninas competindo, e isso se reflete na quantidade de mulheres que chegam à elite.
          </p>
        </div>
      </div>
    </PageCard>
  );
}
