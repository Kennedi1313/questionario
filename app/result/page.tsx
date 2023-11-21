"use client";

import { redirect } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";

export default function Result() {
    var pontGeral = 0;
    var pontContexto = 0;
    var pontConteudo = 0;
    var pontUsuario = 0;
    if (typeof window !== 'undefined') {
        pontGeral = Number(localStorage.getItem('pontGeral'));
        pontContexto = Number(localStorage.getItem('pontContexto'));
        pontConteudo = Number(localStorage.getItem('pontConteudo'));
        pontUsuario = Number(localStorage.getItem('pontUsuario'));
    }
    const pontTotal = pontGeral +
                        pontContexto + 
                        pontConteudo +
                        pontUsuario;
    const [newQuestionario, setNewQuestionario] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    function excluirResultados() {
        var result = confirm('Deseja realmente excluir os resultados? Um novo questionário poderá ser respondido a qualquer momento.');
        if (result) {
            localStorage.clear();
            setNewQuestionario(true);
        }
    }
    if(newQuestionario) {
        redirect('/');
    }
    return (
    <>
        <div ref={ref} className="bg-white pt-28 px-5 min-h-screen h-full flex flex-col gap-6">
            <h1 className="flex justify-center mb-4 font-bold text-2xl">RESULTADOS</h1>
            <div className="flex flex-col w-full rounded-md p-2 md:p-8 gap-2">
                <h1 className="font-semibold">PERFIL GERAL DO REPOSITÓRIO</h1>
                <p className="text-left">Para o perfil geral do Repositório Institucional (RI), é extremamente importante que o RI seja gerenciado por um Comitê Gestor com número adequado de pessoal para suprir as funcionalidades e serviços dos quais o ambiente se propõe. A política do RI deve ser institucionalizada, deve prever a Arquitetura da Informação (AI) e deve estar disponível ao usuário. Certamente, a política de informação deve centrar-se na missão e identidade institucional, centrada nos documentos armazenados no RI e centrada na comunidade usuária.
                O Repositório Institucional deve ser vinculado a Biblioteca Central da determinada universidade, tendo um setor (físico) administrativo específico. Deve-se também ter vínculo com o setor de tecnologia da informação, assim como com a reitoria, entre outros setores administrativos, ou seja, o setor pode ser alocado na Biblioteca Central da universidade e ter vínculo com a informática e a reitoria. O gestor do RI deve entender que o ambiente é de uso de uma comunidade usuária e, para isso, deve estabelecer uma organização e navegação facilitada com os princípios da AI.
                O gestor do RI deve participar de eventos científicos, educação continuada e cursos em geral para se atualizar constantemente e poder opinar quanto a atualização do software e a customização do determinado RI.
                </p>
                <p className="font-bold">PONTUAÇÃO: {pontGeral.toFixed(2)}/62,4 ({((pontGeral/62.4)*100).toFixed(2)}%)</p>
            </div>
            <div className="flex flex-col w-full rounded-md p-2 md:p-8 gap-2">
                <h1 className="font-semibold">DIMENSÃO CONTEXTO</h1>
                <p className="text-left">Sendo o Repositório Institucional um ambiente voltado a uma instituição educacional, deve contemplar a missão e os objetivos da instituição que está vinculado. Para isso, a Arquitetura da Informação fornece diretrizes importantes para a melhoria do seu Repositório.
                </p>
                <p className="font-bold">PONTUAÇÃO: {pontContexto.toFixed(2)}/4,16 ({((pontContexto/4.16)*100).toFixed(2)}%)</p>
            </div>
            <div className="flex flex-col w-full rounded-md p-2 md:p-8 gap-2">
                <h1 className="font-semibold">DIMENSÃO CONTEÚDO</h1>
                <p className="text-left">Sendo o Repositório Institucional um ambiente voltado a disponibilização da produção científica de uma instituição educacional, a disposição dos ícones que auxiliam na navegação, os ícones que indicam sinalizações para ajudar na tomada de decisão, o posicionamento da aba de busca, entre outros, você considera sua homepage deve ser fácil e interativa. Isso auxilia no acesso facilitado aos materiais científicos e na satisfatória experiência do usuário. Para isso, a Arquitetura da Informação fornece diretrizes importantes para a melhoria do seu Repositório.
                </p>
                <p className="font-bold">PONTUAÇÃO: {pontConteudo.toFixed(2)}/12,48 ({((pontConteudo/12.48)*100).toFixed(2)}%)</p>
            </div>
            <div className="flex flex-col w-full rounded-md p-2 md:p-8 gap-2">
                <h1 className="font-semibold">DIMENSÃO USUÁRIOS</h1>
                <p className="text-left">Sendo o Repositório Institucional um ambiente voltado a disponibilização de conteúdos científicos a comunidade usuária, deve-se realizar um estudo de comunidade para coletar opiniões e percepções dos usuários perante as funcionalidades, acesso, recuperação e uso da informação por, pelo menos, uma vez ao ano visto que sua instituição educacional recebe alunos novos semestralmente e, portanto, o RI deve contemplar as necessidades de informação de sua comunidade. A comunidade usuária deve ser autônoma para navegar, pesquisar, recuperar, encontrar e usar os materiais desejados. Para isso, a Arquitetura da Informação fornece diretrizes importantes para a melhoria do seu Repositório.
                </p>
                <p className="font-bold">PONTUAÇÃO: {pontUsuario.toFixed(2)}/20,96 ({((pontUsuario/20.96)*100).toFixed(2)}%)</p>
            </div>
            <div className="flex flex-col w-full rounded-md p-2 md:p-8 gap-2">
                <h1 className="font-semibold">RESULTADO FINAL</h1>
                <p className="font-bold">PONTUAÇÃO: {
                    pontTotal.toFixed(2)}/100 
                    ({pontTotal.toFixed(2)}%)
                    <span className="text-3xl p-2">
                        {pontTotal < 40 ? '😞' : ''}
                        {pontTotal >= 40 && pontTotal < 60 ? '😐' : ''}
                        {pontTotal >= 60 && pontTotal < 80 ? '😆' : ''}
                        {pontTotal >= 80 ? '😁' : ''}
                    </span>
                </p>
            </div>
        </div>
        <div className="bg-white p-10 flex flex-row gap-4">
            <ReactToPrint
                bodyClass="print-agreement"
                content={() => ref.current}
                trigger={() => (
                    <button className="px-4 py-2 bg-blue-700 rounded-md text-white">
                        IMPRIMIR RESULTADOS
                    </button>
                )}
            />
            <button onClick={excluirResultados} className="px-4 py-2 bg-red-700 rounded-md text-white">
                EXCLUIR RESULTADOS
            </button>
        </div>
        
    </>
    );
}