"use client";

import { useState } from 'react'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { CgDanger } from 'react-icons/cg';
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

type Inputs = {
  q1: string,
  q2: string,
  q3: string,
  q4: string,
  q5: string,
  q6: string,
  q7: string,
  q8: string,
  q9: string,
  q10: string,
  q11: string,
  q12: string,
  q13: string,
  q14: string,
  q15: string,
  q16: string,
  q17: string,
  q18: string,
  q19: string,
  q20: string,
  q21: string,
  q22: string,
};

export default function Home() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  }
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    let main = document.getElementsByTagName('html');
    main[0]?.classList.toggle('dark');
    setDarkMode(!darkMode)
  }
  console.log(watch("q1")) // watch input value by passing the name of it
  return (
    <main id="main" className="flex min-h-screen flex-col items-center justify-betwee bg-white dark:bg-slate-900 dark:text-white">
      <div className="flex flex-row z-50 w-full h-12 px-5 items-center justify-between text-sm bg-gray-50 dark:bg-gray-950 shadow-sm shadow-gray-500 fixed top-0">
        <p className="font-semibold text-lg">
          Questionário
        </p>
        <div className="flex flex-row gap-3 font-extrabold text-lg items-center">
          { darkMode ?
            <BsSunFill className='cursor-pointer' onClick={toggleDarkMode}></BsSunFill>
            :
            <BsMoonStarsFill className='cursor-pointer' onClick={toggleDarkMode}></BsMoonStarsFill>
          }
        </div>
      </div>

      <div className='px-4 md:container z-10 mt-20'>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form className='w-full flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-1'>
            <label>1. Qual a sua formação?</label>
            <input className='border-solid border-gray-200 border-2 rounded-md p-1 text-black' placeholder='Ex. Bibliotecário' {...register("q1", { required: 'Este campo é obrigatório.' })} />
            <ErrorMessage
              errors={errors}
              name="q1"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>


          <div className='flex flex-col gap-1'>
            <label>2. Qual a instituição da qual você está vinculado? </label>
            <input className='border-solid border-gray-200 border-2 rounded-md p-1 text-black' placeholder='Ex. UFRN' {...register("q2", { required: "Este campo é obrigatório." })} />
            <ErrorMessage
              errors={errors}
              name="q2"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label>3. Qual o seu cargo com essa instituição? </label>
            <input className='border-solid border-gray-200 border-2 rounded-md p-1 text-black' placeholder='Ex. Professor' {...register("q3", { required: "Este campo é obrigatório." })} />
            <ErrorMessage
              errors={errors}
              name="q3"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label>4. Há quanto tempo você trabalha no setor de Repositórios Digitais? </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Menos de 2 anos'} {...register("q4", { required: "Este campo é obrigatório." })} /> 
              Menos de 2 anos
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 2 anos'} {...register("q4", { required: "Este campo é obrigatório." })} /> 
              Mais de 2 anos
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 5 anos'} {...register("q4", { required: "Este campo é obrigatório." })} /> 
              Mais de 5 anos
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q4", { required: "Este campo é obrigatório." })} /> 
              Mais de 10 anos
            </label>
            <ErrorMessage
              errors={errors}
              name="q4"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label>5. Você realizou algum tipo de qualificação em Sistemas de Informação, Arquitetura 
                    da Informação, programação ou algo relacionado para auxiliar no trabalho com 
                    Repositórios Institucionais? 
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 5 anos'} {...register("q5", { required: "Este campo é obrigatório." })} /> 
              Sim
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q5", { required: "Este campo é obrigatório." })} /> 
              Não
            </label>
            <ErrorMessage
              errors={errors}
              name="q5"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label>6. Você participa de eventos científicos sobre Ciência Aberta e Repositórios Digitais? </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 5 anos'} {...register("q6", { required: "Este campo é obrigatório." })} /> 
              Sim
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q6", { required: "Este campo é obrigatório." })} /> 
              Não
            </label>
            <ErrorMessage
              errors={errors}
              name="q6"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label>7. Você participa do processo de atualização do software DSpace para alimentação 
              do seu Repositório Institucional com materiais científicos?  </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 5 anos'} {...register("q7", { required: "Este campo é obrigatório." })} /> 
              Sim
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q7", { required: "Este campo é obrigatório." })} /> 
              Não
            </label>
            <ErrorMessage
              errors={errors}
              name="q7"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label>8. Caso participe do processo, você opina sobre como deve ser a disposição das 
              informações no ambiente, isto é, você participa direta ou indiretamente do processo 
              de customização de interface e organização das comunidades? </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 5 anos'} {...register("q8", { required: "Este campo é obrigatório." })} /> 
              Sim
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q8", { required: "Este campo é obrigatório." })} /> 
              Não
            </label>
            <ErrorMessage
              errors={errors}
              name="q8"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label>9. Você já ouviu falar em Arquitetura da Informação? </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 5 anos'} {...register("q9", { required: "Este campo é obrigatório." })} /> 
              Sim
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q9", { required: "Este campo é obrigatório." })} /> 
              Não
            </label>
            <ErrorMessage
              errors={errors}
              name="q9"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label>10. Caso tenha respondido 'Sim' na questão anterior, qual o grau de importância que 
              você considera a Arquitetura da Informação no sentido de melhorar a experiência de 
              uso e interação para seu Repositório? </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 5 anos'} {...register("q10", { required: "Este campo é obrigatório." })} /> 
              Muito Importante
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q10", { required: "Este campo é obrigatório." })} /> 
              Importante
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q10", { required: "Este campo é obrigatório." })} /> 
              Irrelevante
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q10", { required: "Este campo é obrigatório." })} /> 
              Não considero que a Arquitetura da Informação possa ser importante na customização 
                de um Repositório Institucional
            </label>
            <ErrorMessage
              errors={errors}
              name="q10"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label>11. Sobre a política do Repositório Institucional da sua Universidade, ela está 
              disponível em acesso aberto? </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 5 anos'} {...register("q11", { required: "Este campo é obrigatório." })} /> 
              Sim
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q11", { required: "Este campo é obrigatório." })} /> 
              Não
            </label>
            <ErrorMessage
              errors={errors}
              name="q11"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label>12. A política contempla ou prevê a Arquitetura da Informação para a customização 
              e organização do seu Repositório Institucional? </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 5 anos'} {...register("q12", { required: "Este campo é obrigatório." })} /> 
              Sim
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q12", { required: "Este campo é obrigatório." })} /> 
              Não
            </label>
            <ErrorMessage
              errors={errors}
              name="q12"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label>13. Caso contemple a Arquitetura da Informação, esta é centrada na missão e 
              identidade institucional ou centrada no conteúdo (documentos arquivados) ou 
              centrada no usuário? </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 5 anos'} {...register("q13", { required: "Este campo é obrigatório." })} /> 
              Centrada na missão e identidade institucional
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q13", { required: "Este campo é obrigatório." })} /> 
              Centrada no conteúdo
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q13", { required: "Este campo é obrigatório." })} /> 
              Centrada no usuário
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q13", { required: "Este campo é obrigatório." })} /> 
              Centrada nas três opções acima
            </label>
            <ErrorMessage
              errors={errors}
              name="q13"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <h2>DIMENSÃO CONTEXTO</h2>
          <div className='flex flex-col gap-1'>
            <label>14. Você considera que, sendo um ambiente voltado a uma organização educacional, 
              seu Repositório Institucional contempla a missão e objetivos da instituição da qual 
              está vinculado? </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 5 anos'} {...register("q14", { required: "Este campo é obrigatório." })} /> 
              Sim
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q14", { required: "Este campo é obrigatório." })} /> 
              Não
            </label>
            <ErrorMessage
              errors={errors}
              name="q14"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <h2>DIMENSÃO CONTEÚDO</h2>
          <div className='flex flex-col gap-1'>
            <label>15. Sobre a disposição dos ícones que organizam o Repositório, os ícones que 
            auxiliam na navegação, os ícones que indicam sinalizações para ajudar na tomada 
            de decisão e na posição da aba de busca, indique o que te chama mais atenção ao 
            acessar a homepage</label>
            <textarea className='border-solid border-gray-200 border-2 rounded-md p-1 text-black' {...register("q15", { required: "Este campo é obrigatório." })} />
            <ErrorMessage
              errors={errors}
              name="q15"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>
          
          <div className='flex flex-col gap-1'>
            <label>16. Você considera fácil a navegação no seu Repositório Institucional? </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 5 anos'} {...register("q16", { required: "Este campo é obrigatório." })} /> 
              Sim
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q16", { required: "Este campo é obrigatório." })} /> 
              Não
            </label>
            <ErrorMessage
              errors={errors}
              name="q16"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label>17. Você considera que os materiais científicos arquivados no seu Repositório 
              Institucional são acessados facilmente? </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 5 anos'} {...register("q17", { required: "Este campo é obrigatório." })} /> 
              Sim
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q17", { required: "Este campo é obrigatório." })} /> 
              Não
            </label>
            <ErrorMessage
              errors={errors}
              name="q17"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <h2>DIMENSÃO USUÁRIOS</h2>
          <div className='flex flex-col gap-1'>
            <label>18. Já foi realizado algum estudo de comunidade para coletar opiniões e percepções 
              dos usuários perante as funcionalidades e recuperação da informação no seu 
              Repositório Institucional? </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 5 anos'} {...register("q18", { required: "Este campo é obrigatório." })} /> 
              Sim
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q18", { required: "Este campo é obrigatório." })} /> 
              Não
            </label>
            <ErrorMessage
              errors={errors}
              name="q18"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label>19. Você considera que seus usuários conseguem ser autônomos para pesquisar o 
              material desejado no seu Repositório Institucional? </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 5 anos'} {...register("q19", { required: "Este campo é obrigatório." })} /> 
              Sim
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q19", { required: "Este campo é obrigatório." })} /> 
              Não
            </label>
            <ErrorMessage
              errors={errors}
              name="q19"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label>20. No geral, escreva como você avalia a Arquitetura da Informação do Repositório 
              da sua Instituição?</label>
            <textarea className='border-solid border-gray-200 border-2 rounded-md p-1 text-black' {...register("q20", { required: "Este campo é obrigatório." })} />
            <ErrorMessage
              errors={errors}
              name="q20"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label>21. Caso existisse uma ferramenta de avaliação para Repositórios Institucionais que 
              levasse em consideração a Arquitetura da Informação no contexto institucional, de 
              conteúdo e de usuário, você a utilizaria para auxiliar na customização do seu 
              Repositório? </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 5 anos'} {...register("q21", { required: "Este campo é obrigatório." })} /> 
              Sim
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q21", { required: "Este campo é obrigatório." })} /> 
              Não
            </label>
            <ErrorMessage
              errors={errors}
              name="q21"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label>22. Na realidade atual, âmbito da Ciência Aberta e necessidade de estreitar barreiras 
              para o acesso ao conhecimento científico, o quanto você julga importante o uso de 
              uma ferramenta para avaliação de Repositórios Institucionais, tanto a nível de 
              aprendizado para customização quanto para a avaliação da Arquitetura da 
              Informação? </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 5 anos'} {...register("q22", { required: "Este campo é obrigatório." })} /> 
              Muito importante
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q22", { required: "Este campo é obrigatório." })} /> 
              Importante
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q22", { required: "Este campo é obrigatório." })} /> 
              Irrelevante
            </label>
            <label className='flex flex-row gap-2'>
              <input type='radio' value={'Mais de 10 anos'} {...register("q22", { required: "Este campo é obrigatório." })} /> 
              Não considero usual
            </label>
            <ErrorMessage
              errors={errors}
              name="q22"
              render={({ message }) => <p className='text-red-500 flex flex-row gap-2 items-center'><CgDanger></CgDanger>{message}</p>}
            />
          </div>

          <input className='w-full bg-gray-500 dark:bg-gray-50 cursor-pointer p-2 rounded-md my-5 hover:bg-gray-600 text-white dark:text-black' type="submit" />
        </form>
      </div>
      <div className='flex w-full mt-10 h-10 z-50 bg-gray-200 dark:bg-gray-950 text-sm font-light text-center items-center justify-center'>
        @2023 Todos os direitos reservados
      </div>
    </main>
  )
}
