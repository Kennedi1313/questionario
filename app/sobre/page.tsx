import Image from "next/image";
import Avatar from '../../public/avatar.png'
export default function Sobre() {
    return (
        <div className='bg-white pt-24 px-5 min-h-screen h-full pb-10'>
            <h1 className="font-semibold text-2xl md:px-8 p-4 mb-5">Sobre</h1>
            <div className="flex flex-col md:flex-row gap-4 md:px-8 ">
                <div className="flex flex-col gap-4 text-justify">
                    <p>Esta ferramenta é resultado da pesquisa de doutorado intitulada “Avaliação de Repositórios Institucionais: um enfoque na Arquitetura da Informação”, de autoria de Arthur Ferreira Campos e orientada por Marckson Roberto Ferreira de Sousa. A pesquisa é vinculada ao Programa de Pós-graduação em Ciência da Informação da Universidade Federal da Paraíba (UFPB). 
                    </p>
                    <p>Parte do pressuposto de que os Repositórios Institucionais são ambientes informacionais digitais favoráveis a Ciência Aberta e propõe-se a externalizar a produção científica dos pesquisadores de uma instituição. Contribuem na formalização de uma rede de pesquisa e compartilhamento em nível nacional e internacional, sob a ótica do acesso aberto. Para atingir um público vasto, a disposição de informação deve ser compreensível, facilitando os sistemas de busca na recuperação de informação e facilitando os sujeitos na encontrabilidade da informação, tornando necessário os subsídios da Arquitetura da Informação. Sendo uma disciplina que compreende o desenho, projeto, estrutura de ambientes digitais, a Arquitetura da Informação auxilia no acesso e uso de conhecimento científico pelo sujeito num Repositório Institucional.
                    </p>
                </div>
            </div>
            <h1 className="font-semibold text-2xl my-5 md:px-8  ">Contato</h1>
            <div className="flex flex-col gap-4  md:px-8 ">
                <p>E-mail: arthurfcampos94@gmail.com</p>
            </div>
        </div>
    )
}