"use client";

import { useState } from 'react'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { CgDanger } from 'react-icons/cg';
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import Link from 'next/link';
import Image from "next/image";
import fundo1 from '../public/fundo1.png'
import fundo2 from '../public/17828.jpg'
import fundo3 from '../public/fundo2.png'
import { redirect } from 'next/navigation'

type Inputs = {
  q1: number,
  q2: number,
  q3: number,
  q4: number,
  q5: number,
  q6: number,
  q7: number,
  q8: number,
  q9: number,
  q10: number,
  q11: number,
  q12: number,
  q13: number,
  q14: number,
  q15: number,
  q16: number,
  q17: number,
  q18: number,
  q19: number,
  q20: number,
  q21: number,
  q22: number,
  q23: number,
  q24: number,
  q25: number,
  q26: number,
};

export default function Home() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const [redirectToResult, setRedirectToResult] = useState(false);
  if(redirectToResult) {
    redirect('/result');
  }
  const onSubmit: SubmitHandler<Inputs> = data => {
    var pontGeral = 0;
    pontGeral += Number(data.q1);
    pontGeral += Number(data.q2);
    pontGeral += Number(data.q3);
    pontGeral += Number(data.q4);
    pontGeral += Number(data.q5);
    pontGeral += Number(data.q6);
    pontGeral += Number(data.q7);
    pontGeral += Number(data.q8);
    pontGeral += Number(data.q9);
    pontGeral += Number(data.q10);
    pontGeral += Number(data.q11);
    pontGeral += Number(data.q12);
    pontGeral += Number(data.q13);
    pontGeral += Number(data.q14);
    pontGeral += Number(data.q15);
    pontGeral += Number(data.q16);
    pontGeral += Number(data.q17);

    var pontContexto = 0;
    pontContexto += Number(data.q18);

    var pontConteudo = 0;
    pontConteudo += Number(data.q19);
    pontConteudo += Number(data.q20);
    pontConteudo += Number(data.q21);

    var pontUsuario = 0;
    pontUsuario += Number(data.q22);
    pontUsuario += Number(data.q23);
    pontUsuario += Number(data.q24);
    pontUsuario += Number(data.q25);
    pontUsuario += Number(data.q26);

    localStorage.setItem('pontGeral', String(pontGeral));
    localStorage.setItem('pontContexto', String(pontContexto));
    localStorage.setItem('pontConteudo', String(pontConteudo));
    localStorage.setItem('pontUsuario', String(pontUsuario));

    setRedirectToResult(true);
  }
  return (
    <>
      <div className=''>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <div className='flex flex-col mb-10 md:mb-28 bg-white pt-20 md:px-5 p-4'>
          <div className='flex flex-col md:flex-row w-full rounded-md p-2 md:p-8'>
            <p className='font-semibold text-2xl'>
              Seja bem-vindo a “Ferramenta de Avaliação de Repositórios Institucionais”, baseada nos princípios da Arquitetura da Informação (AI).
            </p>
          </div>
          <div className='w-full p-2 md:px-8 md:py-5 gap-2 '>
            <p className='text-justify'>
              A AI surge em meados da década de 1970 com as pesquisas nos laboratórios da International Business Machines Corporation (IBM) e posteriormente nos laboratórios da Xerox Palo Alto Research Center (PARC) sendo, de início, voltada a organização de recursos computacionais e sua terminologia ainda não era “Arquitetura da Informação”. Richard Saul Wurman, considerado como o criador da Arquitetura da Informação, menciona o termo Information Architecture (Arquitetura da Informação) pela primeira vez no final dos anos 1970. Wurman considera que, devido à explosão de dados, era necessário entregar o produto ‘informação’ como algo compreensível e claro, facilitando a vida das pessoas que utilizam essa informação e, por isso, a necessidade de estruturar/arquitetar melhor a informação.
            </p>
          </div>
          <div className='w-full p-2 md:px-8 md:py-5 gap-2'>
            <p className='text-justify'>
              Com o surgimento e posterior consolidação da internet nos anos 1990 e da web no final da década de 1990, a AI apresenta-se como alternativa para a compreensão do projeto, desenho, formas de estruturação e customização de ambientes web e além da web, tendo Louis Rosenfeld (historiador, bibliotecário e arquiteto da informação), Peter Morville (bibliotecário e arquiteto da informação) e, posteriormente, Jorge Arango (arquiteto da informação) como autores base que consolidaram esse estudo nos livros Information Architecture for the world wide web (1º, 2º e 3º edições) e Information Architecture for the web and beyond (4º edição).
            </p>
          </div>
          <div className='flex flex-col md:flex-row w-full p-2 md:pb-5 md:pt-5 md:pl-8 gap-2 '>
              
            <p className='text-justify md:w-1/2'>
              A AI envolve as dimensões contexto, conteúdo e usuário assim como os tesauros, vocabulários controlados, metadados e os sistemas de organização, rotulagem, navegação e busca. Desse modo, no contexto dos Repositórios Institucionais, os princípios da Arquitetura da Informação contribuem para uma melhor estruturação da informação, dos ícones, da organização da interface, da interrelação com a identidade institucional, da disposição do conteúdo e, principalmente, da melhoria da experiência de uso da comunidade usuária. Para isso, convido você a avaliar seu Repositório Institucional com a ferramenta específica voltada a AI. Ao final, a ferramenta disponibilizará uma nota final da análise realizada, assim como diretrizes gerais para possíveis melhorias para seu Repositório!
            </p>

            <div className="relative h-[50%] w-full md:w-1/2 min-w-[50%] min-h-max ">
                    <Image
                        alt="fundo1"
                        src={fundo3}
                        sizes=""
                    />
            </div>
            
          </div>
        </div>

        

        <form className='w-full flex flex-col gap-8 bg-white p-5 md:px-12 text-justify' 
          onSubmit={handleSubmit(onSubmit)}>
              <h1 className='text-2xl w-full self-center md:pt-8 pb-10 align-middle text-center font-semibold'>
                Questionário de Avaliação
              </h1>
          <div className='flex flex-col gap-1'>
            <label className='font-bold'>1. Há quanto tempo você trabalha com gestão de Repositórios Institucionais?</label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q1", { required: "Este campo é obrigatório." })} /> 
              Menos de 2 anos
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q1", { required: "Este campo é obrigatório." })} /> 
              Mais de 2 anos
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q1", { required: "Este campo é obrigatório." })} /> 
              Mais de 5 anos
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q1", { required: "Este campo é obrigatório." })} /> 
              Mais de 10 anos
            </label>
            <ErrorMessage
              errors={errors}
              name="q1"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>2. Qual software a sua instituição utiliza para gerenciar o Repositório Institucional? </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q2", { required: "Este campo é obrigatório." })} /> 
              DSpace
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q2", { required: "Este campo é obrigatório." })} /> 
              EPrints
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q2", { required: "Este campo é obrigatório." })} /> 
              WEKO
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q2", { required: "Este campo é obrigatório." })} /> 
              Outro
            </label>
            <ErrorMessage
              errors={errors}
              name="q2"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>3. Para o gerenciamento, o seu Repositório Institucional tem um número adequado
de pessoal para suprir as funcionalidades e serviços dos quais se propõe? </label>
<label className='flex flex-row gap-2 items-center'>
            <input type='radio' value={4.16} {...register("q3", { required: "Este campo é obrigatório." })} /> 
              Sim, temos um Comitê Gestor responsável por essa demanda
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={3.16} {...register("q3", { required: "Este campo é obrigatório." })} /> 
              Além do Comitê Gestor é preciso de mais pessoal para dividir as crescentes tarefas
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={3} {...register("q3", { required: "Este campo é obrigatório." })} /> 
              Os membros do Comitê Gestor precisam ser mudados mas conseguimos cumprir os
serviços necessários e não pretendemos conseguir mais pessoal para atuar conosco
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q3", { required: "Este campo é obrigatório." })} /> 
              Enfrentamos constantes desafios para conseguir pessoal para atuar conosco
            </label>
            <ErrorMessage
              errors={errors}
              name="q3"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
              4. Na sua instituição, existe um setor (físico) de Repositórios Digitais que seja
vinculado ou não a Biblioteca Central? 
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={3.16} {...register("q4", { required: "Este campo é obrigatório." })} /> 
              Sim, existe o setor
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q4", { required: "Este campo é obrigatório." })} /> 
              Sim, existe o setor e é vinculado a Biblioteca Central
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={3.16} {...register("q4", { required: "Este campo é obrigatório." })} /> 
              Sim, existe o setor e é vinculado ao Setor de Informática/Tecnologia
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q4", { required: "Este campo é obrigatório." })} /> 
              Não existe o setor e toda a gestão do Repositório Institucional é atrelada às atividades
de outro setor administrativo
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={2} {...register("q4", { required: "Este campo é obrigatório." })} /> 
              Não, mas estamos em processo de criação de um setor de Repositórios Digitais
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q4", { required: "Este campo é obrigatório." })} /> 
              Não existe e não pensamos em ter um setor de Repositórios Digitais
            </label>
            <ErrorMessage
              errors={errors}
              name="q4"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
              5. Você realizou algum tipo de educação continuada em Sistemas de Informação,
Arquitetura da Informação, programação ou algo relacionado para auxiliar no seu
trabalho com Repositórios Institucionais? 
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4} {...register("q5", { required: "Este campo é obrigatório." })} /> 
              Sim, realizei 1 curso
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q5", { required: "Este campo é obrigatório." })} /> 
              Sim, realizei mais de 1 curso
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4} {...register("q5", { required: "Este campo é obrigatório." })} /> 
              Não realizei, mas estou em processo de capacitação
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q5", { required: "Este campo é obrigatório." })} /> 
              Não realizei
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q5", { required: "Este campo é obrigatório." })} /> 
              Não realizei e acredito não ser necessário capacitação ou educação continuada para
atuar com RI
            </label>
            <ErrorMessage
              errors={errors}
              name="q5"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
            6. Você é adepto a educação continuada e participa de eventos científicos sobre
Ciência Aberta e Repositórios Digitais? 
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q6", { required: "Este campo é obrigatório." })} /> 
              Sim, sempre estou participando e estudando sobre
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={3.16} {...register("q6", { required: "Este campo é obrigatório." })} /> 
              Participo esporadicamente
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q6", { required: "Este campo é obrigatório." })} /> 
              Não participo
            </label>
            <ErrorMessage
              errors={errors}
              name="q6"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
            7. Em relação a atualização do software de gerenciamento do RI, você participa desse
processo?
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q7", { required: "Este campo é obrigatório." })} /> 
              Sim, participo. É uma tarefa gerenciada unicamente pelo Setor de
Informática/Tecnologia 
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q7", { required: "Este campo é obrigatório." })} /> 
              Sim, participo. É uma tarefa gerenciada unicamente pela Biblioteca Central
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={1.5} {...register("q7", { required: "Este campo é obrigatório." })} /> 
              Não participo porque não tenho essa função como gestor
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q7", { required: "Este campo é obrigatório." })} /> 
              Não houve atualização do software desde quando estou no cargo
            </label>
            <ErrorMessage
              errors={errors}
              name="q7"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
            8. Geralmente, quando o software de gerenciamento de RI sofre atualização, o gestor
precisa alimentar o RI novamente com os materiais científicos existentes. Você
participa desse processo de alimentação do seu Repositório Institucional arquivando
materiais científicos?
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q8", { required: "Este campo é obrigatório." })} /> 
              Sim, participo ativamente em conjunto com o Comitê Gestor responsável pelo
Repositório Institucional
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={2.16} {...register("q8", { required: "Este campo é obrigatório." })} /> 
              Participo indiretamente delegando funções a um funcionário auxiliar
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q8", { required: "Este campo é obrigatório." })} /> 
              Não participo
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q8", { required: "Este campo é obrigatório." })} /> 
              Não houve atualização do software desde quando estou no cargo
            </label>
            <ErrorMessage
              errors={errors}
              name="q8"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
            9. Caso participe do processo descrito na questão anterior, você opina sobre como
deve ser a disposição e a organização da informação no ambiente, isto é, você
participa direta ou indiretamente do processo de customização de interface e
organização das comunidades, subcomunidades e coleções? 
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q9", { required: "Este campo é obrigatório." })} /> 
              Sim, participo diretamente 
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4} {...register("q9", { required: "Este campo é obrigatório." })} /> 
              Sim, participo indiretamente
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q9", { required: "Este campo é obrigatório." })} /> 
              Não participo. É uma tarefa gerenciada unicamente pelo profissional de
informática/tecnologia
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q9", { required: "Este campo é obrigatório." })} /> 
              Não participo porque não compreendo o processo de customização de interface
            </label>
            <ErrorMessage
              errors={errors}
              name="q9"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
            10.  Antes de customizar a interface ou organizar a disposição dos ícones, das
comunidades, subcomunidades e coleções, é realizado um estudo de comunidade
para criação de uma interface facilitada ao público usuário do RI? 
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q10", { required: "Este campo é obrigatório." })} /> 
              Sim 
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q10", { required: "Este campo é obrigatório." })} /> 
              Não
            </label>
            <ErrorMessage
              errors={errors}
              name="q10"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
            11. Você já ouviu falar sobre Arquitetura da Informação?
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q11", { required: "Este campo é obrigatório." })} /> 
              Sim
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q11", { required: "Este campo é obrigatório." })} /> 
              Sim, somente numa disciplina da graduação ou pós-graduação
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q11", { required: "Este campo é obrigatório." })} /> 
              Ouvi falar, mas não tenho domínio e/ou não compreendo
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q11", { required: "Este campo é obrigatório." })} /> 
              Não, nunca ouvi falar
            </label>
            <ErrorMessage
              errors={errors}
              name="q11"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
            12. Caso tenha respondido positivamente na questão anterior, qual o grau de
importância que você considera a Arquitetura da Informação no sentido de melhorar
a experiência de uso, interação e compreensão da informação para seu Repositório? 
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q12", { required: "Este campo é obrigatório." })} /> 
              Muito Importante
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={3.80} {...register("q12", { required: "Este campo é obrigatório." })} /> 
              Importante
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q12", { required: "Este campo é obrigatório." })} /> 
              Irrelevante
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q12", { required: "Este campo é obrigatório." })} /> 
              Não considero que a Arquitetura da Informação possa melhorar a experiência de uso e
interação para meu Repositório Institucional 
            </label>
            <ErrorMessage
              errors={errors}
              name="q12"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
            13. Seu Repositório Institucional possui uma política de informação? 
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q13", { required: "Este campo é obrigatório." })} /> 
              Sim
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q13", { required: "Este campo é obrigatório." })} /> 
              Não
            </label>
            <ErrorMessage
              errors={errors}
              name="q13"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
            14. Caso tenha respondido ‘Sim’ na questão anterior, a política de informação do seu
Repositório Institucional está disponível em acesso aberto?
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q14", { required: "Este campo é obrigatório." })} /> 
              Sim
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q14", { required: "Este campo é obrigatório." })} /> 
              Não
            </label>
            <ErrorMessage
              errors={errors}
              name="q14"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
            15. A política de informação do Repositório Institucional da sua Universidade é?
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q15", { required: "Este campo é obrigatório." })} /> 
              Recente e institucionalizada há menos de 2 anos
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={3.70} {...register("q15", { required: "Este campo é obrigatório." })} /> 
              Recente, mas não é institucionalizada. Estamos em processo de institucionalização
com outros gestores responsáveis
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={3} {...register("q15", { required: "Este campo é obrigatório." })} /> 
              Antiga e estamos em processo de atualização para posterior institucionalização
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q15", { required: "Este campo é obrigatório." })} /> 
              Antiga e não existe ainda uma iniciativa para atualizá-la
            </label>
            <ErrorMessage
              errors={errors}
              name="q15"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
            16. A política de informação contempla ou considera a Arquitetura da Informação
para a customização e organização do seu Repositório Institucional?
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q16", { required: "Este campo é obrigatório." })} /> 
              Sim 
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q16", { required: "Este campo é obrigatório." })} /> 
              Não
            </label>
            <ErrorMessage
              errors={errors}
              name="q16"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
            17. Caso contemple a Arquitetura da Informação, esta é centrada na missão e
identidade institucional ou é centrada no conteúdo (documentos armazenados) ou é
centrada no usuário?
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={3} {...register("q17", { required: "Este campo é obrigatório." })} /> 
              Centrada na missão e identidade institucional 
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={3} {...register("q17", { required: "Este campo é obrigatório." })} /> 
              Centrada no conteúdo (documentos armazenados) 
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={3} {...register("q17", { required: "Este campo é obrigatório." })} /> 
              Centrada no usuário
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q17", { required: "Este campo é obrigatório." })} /> 
              Centrada nas três opções mencionadas na questão
            </label>
            <ErrorMessage
              errors={errors}
              name="q17"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <h1 className='font-bold text-center p-10'>DIMENSÃO CONTEXTO</h1>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
            18. Você considera que, sendo um ambiente voltado a uma instituição educacional,
seu Repositório Institucional contempla a missão e os objetivos da instituição que
está vinculado? 
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q18", { required: "Este campo é obrigatório." })} /> 
              Sim
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q18", { required: "Este campo é obrigatório." })} /> 
              Não
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={2} {...register("q18", { required: "Este campo é obrigatório." })} /> 
              O RI ainda está em processo de estudo para subsidiar seu papel educacional
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q18", { required: "Este campo é obrigatório." })} /> 
              Ainda não foi feito um estudo que contemple a relação do RI com a missão e os objetivos
institucionais
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q18", { required: "Este campo é obrigatório." })} /> 
              Não sei responder
            </label>
            <ErrorMessage
              errors={errors}
              name="q18"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <h1 className='font-bold text-center p-10'>DIMENSÃO CONTEÚDO</h1>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
            19. Sobre a disposição dos ícones que organizam o Repositório: ícones que auxiliam
na navegação; ícones que indicam sinalizações para ajudar na tomada de decisão;
posicionamento da aba de busca, entre outros, você considera sua homepage é: 
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q19", { required: "Este campo é obrigatório." })} /> 
              Fácil de navegar e interativa
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={3.50} {...register("q19", { required: "Este campo é obrigatório." })} /> 
              Fácil de navegar, mas não é interativa
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={3} {...register("q19", { required: "Este campo é obrigatório." })} /> 
              Fácil de navegar, mas nunca fizemos um teste com um usuário para saber possíveis
facilidades e dificuldades
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={3.80} {...register("q19", { required: "Este campo é obrigatório." })} /> 
              Difícil de navegar, mas estamos em constante processo visando melhorar essa
navegação
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q19", { required: "Este campo é obrigatório." })} /> 
              Difícil de navegar
            </label>
            <ErrorMessage
              errors={errors}
              name="q19"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
            20. Você considera que a experiencia do usuário com seu Repositório Institucional é
satisfatória?
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q20", { required: "Este campo é obrigatório." })} /> 
              Sim
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q20", { required: "Este campo é obrigatório." })} /> 
              Não
            </label>
            <ErrorMessage
              errors={errors}
              name="q20"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
            21. Você considera que os materiais científicos armazenados no seu Repositório
Institucional são acessados facilmente?
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q21", { required: "Este campo é obrigatório." })} /> 
              Sim
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q21", { required: "Este campo é obrigatório." })} /> 
              Não
            </label>
            <ErrorMessage
              errors={errors}
              name="q21"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <h1 className='font-bold text-center p-10'>DIMENSÃO USUÁRIOS</h1>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
            22. Já foi realizado algum estudo de comunidade para coletar opiniões e percepções
dos usuários perante as funcionalidades, acesso, recuperação e uso da informação
no seu Repositório Institucional?
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q22", { required: "Este campo é obrigatório." })} /> 
              Sim, fazemos constantemente
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={3.50} {...register("q22", { required: "Este campo é obrigatório." })} /> 
              Sim, mas faz um tempo que não atualizamos esse estudo de comunidade 
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q22", { required: "Este campo é obrigatório." })} /> 
              Não, nunca foi realizado um estudo com essa finalidade
            </label>
            <ErrorMessage
              errors={errors}
              name="q22"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
            23. Você considera que é possível que seus usuários sejam autônomos para
pesquisar o material desejado no seu Repositório Institucional?
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q23", { required: "Este campo é obrigatório." })} /> 
              Sim
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q23", { required: "Este campo é obrigatório." })} /> 
              Não
            </label>
            <ErrorMessage
              errors={errors}
              name="q23"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
            24. No geral, escreva como você considera que a comunidade usuária avalia a
Arquitetura da Informação do Repositório da sua Instituição?
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={3.80} {...register("q24", { required: "Este campo é obrigatório." })} /> 
              Fácil
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q24", { required: "Este campo é obrigatório." })} /> 
              Fácil e interativa
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q24", { required: "Este campo é obrigatório." })} /> 
              Difícil
            </label>
            <ErrorMessage
              errors={errors}
              name="q24"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
            25. Você considera necessário os estudos de comunidade direcionados para avaliar
a Arquitetura da Informação do seu Repositório Institucional visando perceber o
olhar da comunidade?
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q25", { required: "Este campo é obrigatório." })} /> 
              Sim, considero
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={2.16} {...register("q25", { required: "Este campo é obrigatório." })} /> 
              Sim, considero, mas isso exigiria um esforço institucional que nosso pessoal ainda não
tem condições de demandar
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q25", { required: "Este campo é obrigatório." })} /> 
              Não, não considero
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q25", { required: "Este campo é obrigatório." })} /> 
              Não acho necessário visto que o profissional de informática estrutura, na minha opinião,
o Repositório Institucional de maneira facilitada e interativa
            </label>
            <ErrorMessage
              errors={errors}
              name="q25"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-bold'>
            26. No âmbito da Ciência Aberta para estreitar as barreiras de acesso ao
conhecimento científico, o quanto você julga importante a constante avaliação de
Repositórios Institucionais, tanto a nível de satisfação do usuário quanto para a
avaliação da Arquitetura da Informação?
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4.16} {...register("q26", { required: "Este campo é obrigatório." })} /> 
              Muito importante
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={4} {...register("q26", { required: "Este campo é obrigatório." })} /> 
              Importante
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q26", { required: "Este campo é obrigatório." })} /> 
              Irrelevante
            </label>
            <label className='flex flex-row gap-2 items-center'>
              <input type='radio' value={0} {...register("q26", { required: "Este campo é obrigatório." })} /> 
              Não considero usual
            </label>
            <ErrorMessage
              errors={errors}
              name="q26"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>
          <input className='w-full bg-blue-700 dark:bg-gray-50 cursor-pointer p-2 rounded-md my-5 hover:bg-gray-600 text-white dark:text-black' type="submit" />
        </form>
      </div>
    </>
  )
}
