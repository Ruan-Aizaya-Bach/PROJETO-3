const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao iniciar o ano letivo, a escola decide implementar um programa de apoio psicológico para os estudantes. Qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Acho isso essencial para o bem-estar dos alunos.",
                afirmacao: "Apoia a iniciativa e se interessa em entender como a psicologia pode beneficiar os estudantes."
            },
            {
                texto: "Não vejo necessidade, acho que os alunos devem resolver seus problemas sozinhos.",
                afirmacao: "Inicialmente relutante, mas se abre para explorar os benefícios após aprender mais sobre o assunto."
            }
        ]
    },
    {
        enunciado: "Durante uma aula sobre autoconhecimento, a professora sugere um exercício de reflexão profunda. Qual a sua reação?",
        alternativas: [
            {
                texto: "Participa ativamente e se abre para compartilhar suas experiências pessoais.",
                afirmacao: "Percebe a importância da auto-reflexão e como isso pode ajudar no desenvolvimento pessoal."
            },
            {
                texto: "Prefere não se expor tanto e apenas observar os colegas.",
                afirmacao: "Respeita a decisão pessoal de não se expor, reconhecendo que cada um tem seu ritmo de autoconhecimento."
            }
        ]
    },
    {
        enunciado: "Após uma palestra sobre bullying, a escola promove um debate entre os alunos. Como você participa?",
        alternativas: [
            {
                texto: "Defende a necessidade de empatia e compreensão no ambiente escolar.",
                afirmacao: "Contribui para criar um ambiente mais acolhedor na escola, promovendo o respeito mútuo."
            },
            {
                texto: "Minimiza a gravidade do problema, dizendo que faz parte da vida escolar.",
                afirmacao: "Reflete sobre a importância de tratar o bullying com seriedade e busca entender melhor suas causas e consequências."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Reflexão Final:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

