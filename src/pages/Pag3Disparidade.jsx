import PageCard from "../components/PageCard.jsx";

export default function Pag3Disparidade() {
  return (
    <PageCard
      title="Disparidade salarial de gênero"
    >
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <div className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
          <img
            src="https://i0.wp.com/vermelho.org.br/wp-content/uploads/2019/10/diferenca_de_salarios_entre_homens_e_mulheres118917.jpg?fit=600%2C399&ssl=1"
            alt="Diferença salarial entre homens e mulheres"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="px-6 py-8 text-gray-700">
          <p className="font-semibold text-white">Disparidades</p>
          <p>
            Um dos dados que evidencia isso é a diferença salarial: o rendimento das mulheres
            representa, em média, 77,7% do rendimento dos homens (R$ 1.985 frente a R$ 2.555),
            conforme a Pesquisa Nacional por Amostra de Domicílios Contínua (Pnad) de 2019.
          </p>
          <p>
            Entre os principais grupos ocupacionais, a menor proporção é observada em cargos de
            direção e gerência: os salários delas equivalem a 61,9% dos salários deles.
          </p>
          <blockquote className="mt-6 rounded-3xl bg-gradient-to-r from-purple-100 to-indigo-100 p-8 text-base text-gray-800 shadow-md">
  <p className="italic">
    “Se um homem e uma mulher exercem as mesmas funções, no mesmo local e com o mesmo grau
    de perfeição técnica e, no entanto, um deles é mais bem remunerado, estamos diante de
    um desvirtuamento inexplicável...”
  </p>

  <span className="mt-4 block text-sm font-semibold text-purple-900">
    — Ministra do TST Liana Chaib
  </span>
</blockquote>
          <p>
            O desemprego também as afeta mais: a taxa de desocupação entre as mulheres é de 14,1%,
            enquanto a dos homens é 9,6%.
          </p>
          <p>
            Em outra frente, são elas que dedicam mais tempo a trabalhos domésticos: 21,4 horas
            semanais (homens: 11 horas). Isso pode aumentar a exposição a trabalhos informais e
            contratos mais precários.
          </p>
        </div>
      </div>
    </PageCard>
  );
}
