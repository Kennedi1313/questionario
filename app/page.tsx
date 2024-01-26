"use client";

import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { FormProvider, useForm } from 'react-hook-form'
import Image from "next/image";
import fundo3 from '../public/fundo2.png'
import { redirect } from 'next/navigation'
import { getInputs } from './lib'
import { Form } from './components';
interface FormType {}
const geral = getInputs<FormType>('geral')
const contexto = getInputs<FormType>('contexto')
const conteudo = getInputs<FormType>('conteudo')
const usuarios = getInputs<FormType>('usuarios')


export default function Home() {
  const [redirectToResult, setRedirectToResult] = useState(false);
  if(redirectToResult) {
    redirect('/result');
  }
  const onSubmit = (data: any) => {
    var pontGeral = 0;
    console.log(geral);
    console.log(geral.inputs);
    console.log(geral.inputs[5]);
    console.log(geral.inputs[5].options);
    console.log(Number(data.q1));
    pontGeral += Number(geral.inputs[0].options ? geral.inputs[0].options[Number(data.q1)].pont : 0);
    pontGeral += Number(geral.inputs[1].options ? geral.inputs[1].options[Number(data.q2)].pont : 0);
    pontGeral += Number(geral.inputs[2].options ? geral.inputs[2].options[Number(data.q3)].pont : 0);
    pontGeral += Number(geral.inputs[3].options ? geral.inputs[3].options[Number(data.q4)].pont : 0);
    pontGeral += Number(geral.inputs[4].options ? geral.inputs[4].options[Number(data.q5)].pont : 0);
    pontGeral += Number(geral.inputs[5].options ? geral.inputs[5].options[Number(data.q6)].pont : 0);
    pontGeral += Number(geral.inputs[6].options ? geral.inputs[6].options[Number(data.q7)].pont : 0);
    pontGeral += Number(geral.inputs[7].options ? geral.inputs[7].options[Number(data.q8)].pont : 0);
    pontGeral += Number(geral.inputs[8].options ? geral.inputs[8].options[Number(data.q9)].pont : 0);
    pontGeral += Number(geral.inputs[9].options ? geral.inputs[9].options[Number(data.q10)].pont : 0);
    pontGeral += Number(geral.inputs[10].options ? geral.inputs[10].options[Number(data.q11)].pont : 0);
    pontGeral += Number(geral.inputs[11].options ? geral.inputs[11].options[Number(data.q12)].pont : 0);
    pontGeral += Number(geral.inputs[12].options ? geral.inputs[12].options[Number(data.q13)].pont : 0);
    pontGeral += Number(geral.inputs[13].options ? geral.inputs[13].options[Number(data.q14)].pont : 0);
    pontGeral += Number(geral.inputs[14].options ? geral.inputs[14].options[Number(data.q15)].pont : 0);
    pontGeral += Number(geral.inputs[15].options ? geral.inputs[15].options[Number(data.q16)].pont : 0);
    pontGeral += Number(geral.inputs[16].options ? geral.inputs[16].options[Number(data.q17)].pont : 0);

    var pontContexto = 0;
    pontContexto += Number(contexto.inputs[0].options ? contexto.inputs[0].options[Number(data.q18)].pont : 0);

    var pontConteudo = 0;
    pontConteudo += Number(conteudo.inputs[0].options ? conteudo.inputs[0].options[Number(data.q19)].pont : 0);
    pontConteudo += Number(conteudo.inputs[1].options ? conteudo.inputs[1].options[Number(data.q20)].pont : 0);
    pontConteudo += Number(conteudo.inputs[2].options ? conteudo.inputs[2].options[Number(data.q21)].pont : 0);

    var pontUsuario = 0;
    pontUsuario += Number(usuarios.inputs[0].options ? usuarios.inputs[0].options[Number(data.q22)].pont : 0);
    pontUsuario += Number(usuarios.inputs[1].options ? usuarios.inputs[1].options[Number(data.q23)].pont : 0);
    pontUsuario += Number(usuarios.inputs[2].options ? usuarios.inputs[2].options[Number(data.q24)].pont : 0);
    pontUsuario += Number(usuarios.inputs[3].options ? usuarios.inputs[3].options[Number(data.q25)].pont : 0);
    pontUsuario += Number(usuarios.inputs[4].options ? usuarios.inputs[4].options[Number(data.q26)].pont : 0);

    localStorage.setItem('pontGeral', String(pontGeral));
    localStorage.setItem('pontContexto', String(pontContexto));
    localStorage.setItem('pontConteudo', String(pontConteudo));
    localStorage.setItem('pontUsuario', String(pontUsuario));
    localStorage.setItem('result', JSON.stringify(data));
    setRedirectToResult(true);
  }
  const schema = yup
  .object()
  .shape({
    q1: yup.string().required("* Pergunta Obrigatória"),
    q2: yup.string().required("* Pergunta Obrigatória"),
    q3: yup.string().required("* Pergunta Obrigatória"),
    q4: yup.string().required("* Pergunta Obrigatória"),
    q5: yup.string().required("* Pergunta Obrigatória"),
    q6: yup.string().required("* Pergunta Obrigatória"),
    q7: yup.string().required("* Pergunta Obrigatória"),
    q8: yup.string().required("* Pergunta Obrigatória"),
    q9: yup.string().required("* Pergunta Obrigatória"),
    q10: yup.string().required("* Pergunta Obrigatória"),
    q11: yup.string().required("* Pergunta Obrigatória"),
    q12: yup.string(),
    q13: yup.string().required("* Pergunta Obrigatória"),
    q14: yup.string(),
    q15: yup.string().required("* Pergunta Obrigatória"),
    q16: yup.string().required("* Pergunta Obrigatória"),
    q17: yup.string().required("* Pergunta Obrigatória"),
    q18: yup.string().required("* Pergunta Obrigatória"),
    q19: yup.string().required("* Pergunta Obrigatória"),
    q20: yup.string().required("* Pergunta Obrigatória"),
    q21: yup.string().required("* Pergunta Obrigatória"),
    q22: yup.string().required("* Pergunta Obrigatória"),
    q23: yup.string().required("* Pergunta Obrigatória"),
    q24: yup.string().required("* Pergunta Obrigatória"),
    q25: yup.string().required("* Pergunta Obrigatória"),
    q26: yup.string().required("* Pergunta Obrigatória"),
  })
  .required("Pergunta Obrigatória")
  const formMethods = useForm({
    resolver: yupResolver(schema),
    defaultValues: { ...(geral.initialValues as any) }
  })
  const clearForms = (event: any) => {
    event.preventDefault();
    if (confirm('Tem certeza que deseja limpar todos os campos?')) {
      formMethods.reset();
    } 
  }
  return (
    <>
      <div className=''>
        <div className='flex flex-col mb-10 md:mb-28 bg-white pt-20 md:px-5 p-4'>
          <div className='flex flex-col md:flex-row w-full rounded-md p-2 md:p-8'>
            <p className='font-semibold text-2xl leading-[1.875rem]'>
              Seja bem-vindo à “Ferramenta para Avaliação de Repositórios Institucionais”, baseada nos princípios da Arquitetura da Informação (AI).
            </p>
          </div>
          <div className='w-full p-2 md:px-8 md:py-5 gap-2 '>
            <p className='text-left'>
              A AI surge em meados da década de 1970 com as pesquisas nos laboratórios da International Business Machines Corporation (IBM) e posteriormente nos laboratórios da Xerox Palo Alto Research Center (PARC) sendo, de início, voltada a organização de recursos computacionais e sua terminologia ainda não era “Arquitetura da Informação”. Richard Saul Wurman, considerado como o criador da Arquitetura da Informação, menciona o termo Information Architecture (Arquitetura da Informação) pela primeira vez no final dos anos 1970. Wurman considera que, devido à explosão de dados, era necessário entregar o produto ‘informação’ como algo compreensível e claro, facilitando a vida das pessoas que utilizam essa informação e, por isso, a necessidade de estruturar/arquitetar melhor a informação.
            </p>
          </div>
          <div className='w-full p-2 md:px-8 md:py-5 gap-2'>
            <p className='text-left'>
              Com o surgimento e posterior consolidação da internet nos anos 1990 e da web no final da década de 1990, a AI apresenta-se como alternativa para a compreensão do projeto, desenho, formas de estruturação e customização de ambientes web e além da web, tendo Louis Rosenfeld (historiador, bibliotecário e arquiteto da informação), Peter Morville (bibliotecário e arquiteto da informação) e, posteriormente, Jorge Arango (arquiteto da informação) como autores base que consolidaram esse estudo nos livros Information Architecture for the world wide web (1º, 2º e 3º edições) e Information Architecture for the web and beyond (4º edição).
            </p>
          </div>
          <div className='flex flex-col md:flex-row w-full p-2 md:pb-5 md:pt-5 md:pl-8 gap-2 '>
              
            <p className='text-left md:w-1/2'>
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

        <div className='w-full flex flex-col gap-8 bg-white p-5 md:px-12 text-justify' >
            <h1 className='text-2xl w-full self-center md:pt-8 align-middle text-center font-semibold'>
              Questionário de Avaliação
            </h1>
          <span className='font-semibold text-sm text-red-500'> *Para cada questão, só existe 1 (uma) opção de resposta*</span>
          <FormProvider {...formMethods}>
			      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
              {<Form
                {...geral}
                titleForm='Perfil Geral do Repositório'
                labelButtonSubmit='Send info'
              />}
              {<Form
                {...contexto}
                titleForm='Dimensão Contexto'
                labelButtonSubmit='Send info'
              />}
              {<Form
                {...conteudo}
                titleForm='Dimensão Conteúdo'
                labelButtonSubmit='Send info'
              />}
              {<Form
                {...usuarios}
                titleForm='Dimensão Usuários'
                labelButtonSubmit='Send info'
              />}
              <div className='flex flex-row gap-2'>
                <button onClick={clearForms} className='w-full bg-gray-700 dark:bg-gray-50 cursor-pointer p-2 rounded-md my-5 hover:bg-gray-600 text-white dark:text-black'>Limpar Campos</button>
                <input className='w-full bg-blue-700 dark:bg-gray-50 cursor-pointer p-2 rounded-md my-5 hover:bg-gray-600 text-white dark:text-black' type="submit" value="Enviar"/>
              </div>
            </form>
		      </FormProvider>
        </div>
      </div>
    </>
  )
}
