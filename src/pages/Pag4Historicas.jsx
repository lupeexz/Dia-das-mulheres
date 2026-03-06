import PageCard from "../components/PageCard.jsx";

const mulheres = [
  { nome: "Marie Curie", periodo: "1867–1934" },
  { nome: "Malala Yousafzai", periodo: "1997" },
  { nome: "Amelia Earhart", periodo: "1897–1937" },
  { nome: "Rosa Parks", periodo: "1913–2005" },
  { nome: "Leila Diniz", periodo: "1945–1972" },
  { nome: "Maria da Penha", periodo: "1945" },
  { nome: "Valentina Tereshkova", periodo: "1937" },
];

export default function Pag4Historicas() {
  return (
    <PageCard
      title="7 mulheres históricas que mudaram o mundo para melhor"
    >
      <div className="grid gap-8 md:grid-cols-2 md:items-start">

        <div className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
          <img
            src="https://super.abril.com.br/wp-content/uploads/2021/04/Marie-Curie-a-polonesa-mais-brilhante-da-historia.png?w=1024&resize=1200,800"
            alt="Marie Curie"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="space-y-4">

          <ul className="space-y-4">
            {mulheres.map((m, idx) => (
              <li
                key={m.nome}
                className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-purple-100 to-indigo-100 px-5 py-4 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="text-sm font-semibold text-purple-900">
                  {idx + 1}) {m.nome}
                </span>

                <span className="text-xs font-medium text-indigo-700">
                  {m.periodo}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-gray-700">
            Se você quiser, eu também posso transformar essa página em cards com mini biografias e
            links, deixando o conteúdo bem mais rico.
          </p>

        </div>

      </div>
    </PageCard>
  );
}