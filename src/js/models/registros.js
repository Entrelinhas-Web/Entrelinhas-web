const registros = [
  {
    id: 1,
    titulo: "FINALMENTE FORMADO!!",
    emocao: "Felicidade",
    nivel: 5,
    causa: "Formatura",
    descricao:
      "Hoje pude finalmente me formar no curso dos meus sonhos, e ainda fui laureado! A partir de hoje, minha vida mudará completamente.",
    data: "12/10/2025",
  },
  {
    id: 2,
    titulo: "Saudades machuca, né?",
    emocao: "Tristeza",
    nivel: 3,
    causa: "Saudade",
    descricao:
      "Senti muita falta dos meus amigos da faculdade hoje. É estranho pensar que cada um seguiu seu caminho, rumos tão distantes que nem nos encontramos mais...",
    data: "14/10/2025",
  },
  {
    id: 3,
    titulo: "Não sei se vou conseguir...",
    emocao: "Ansiedade",
    nivel: 4,
    causa: "Entrevista de emprego",
    descricao:
      "Tenho uma entrevista amanhã em uma empresa que sempre admirei. Estou nervoso, mas esperançoso.",
    data: "15/10/2025",
  },
  {
    id: 4,
    titulo: "Conclui mais 1 projeto!",
    emocao: "Felicidade",
    nivel: 5,
    causa: "Projeto concluído",
    descricao:
      "Consegui finalizar o projeto antes do prazo e o cliente adorou o resultado! Foi muito gratificante.",
    data: "17/10/2025",
  },
  {
    id: 5,
    titulo: "NINGUÉM SABE DIRIGIR NESSA CIDADE",
    emocao: "Raiva",
    nivel: 2,
    causa: "Trânsito",
    descricao:
      "O trânsito hoje estava insuportável e acabei me atrasando para uma reunião MUITO importante! Como essas pessoas passam na prova da CNH? O Detran já foi mais sério nessas avaliações...",
    data: "18/10/2025",
  },
  {
    id: 6,
    titulo: "Saudades machuca, né?",
    emocao: "Felicidade",
    nivel: 5,
    causa: "Amizade",
    descricao:
      "Hoje eu tava passando por um situação muito difícil... Não era nada demais, mas me abalou muito. Contudo, graças ao Henrique (meu melhor amigo), que me ajudou a entender a situação melhor e a levar com mais leveza, percebi o quanto sou sortudo por ter pessoas assim por perto e aqueles sentimentos ruins foram embora!",
    data: "19/10/2025",
  },
  {
    id: 7,
    titulo: "QUE PRESENTE FOD4!",
    emocao: "Felicidade",
    nivel: 4,
    causa: "Presente inesperado",
    descricao:
      "Recebi um presente LINDO de um colega de trabalho, sem motivo aparente. Fiquei genuinamente feliz!",
    data: "20/10/2025",
  },
  {
    id: 8,
    titulo: "Será que vai dar tudo certo?",
    emocao: "Medo",
    nivel: 3,
    causa: "Resultado médico",
    descricao:
      "Tive que essa consulta no último mês, sabe. Eu não tava dando muita bola pra isso, era pra ser só um exame de rotina, um mero check-up, mas com a chegada dos exames amanhã... Sempre me bate um medo do que pode aparecer.",
    data: "21/10/2025",
  },
  {
    id: 9,
    titulo: "Ás vezes, sair de casa é até bom...",
    emocao: "Tranquilidade",
    nivel: 4,
    causa: "Dia na natureza",
    descricao:
      "Passei o dia em um parque, lendo e respirando ar puro. Foi uma paz tão grande... Apenas eu e o barulho dos passáros contra meu cansaço semanal. Será que devo fazer isso mais vezes?",
    data: "02/11/2025",
  },
  {
    id: 10,
    titulo: "Gonna be a polyglot!",
    emocao: "Motivação",
    nivel: 5,
    causa: "Meta pessoal",
    descricao:
      "Decidi começar a aprender uma nova língua! To super empolgado e com certeza o inglês não vai ser tão difícil assim... Que venham as novas possibilidades!",
    data: "03/11/2025",
  },
];

export default function defaultRegistros() {
  JSON.parse(localStorage.getItem("desabafos")) == 0 &&
    localStorage.setItem("desabafos", JSON.stringify(registros));
}
