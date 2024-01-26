import { FormSection, InputProps } from '../types';



export const forms: { [K in FormSection]: InputProps[] } =
{
    geral: [
        {
            type: "radio",
            name: "q1",
            label: "1. Há quanto tempo você trabalha com gestão de Repositórios Institucionais? ",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "0",
                    desc: "Menos de 2 anos", 
                    text: "Que interessante! Menos de dois anos de gestão do seu Repositório Institucional deve ser desafiador e é de se imaginar que você já tenha tido desafios no seu cargo." 
                },
                { 
                    value: "1", 
                    pont: "0",
                    desc: "Mais de 2 anos",
                    text: "Mais de dois anos de gestão do seu Repositório Institucional! Você está adquirindo experiências para a resolução de problemas e para tomadas de decisão. Isso é ótimo!"
                },
                { 
                    value: "2", 
                    pont: "0",
                    desc: "Mais de 5 anos",
                    text: "Mais de cinco anos de gestão do seu Repositório Institucional! É um tempo interessante para adquirir bastante experiência em resolução de demandas e tomadas de decisão. Os desafios enfrentados devem ser relatados e disseminados para auxiliar outras equipes a otimizarem a gestão de Repositório Institucional. Já pensou em capacitar uma equipe para gestão em outra instituição? Já pensou em ministrar cursos? Já pensou em publicar seu relato de experiência em formato de artigo científico?"
                },
                { 
                    value: "3", 
                    pont: "0",
                    desc: "Mais de 10 anos",
                    text: "Mais de dez anos de gestão do seu Repositório Institucional! Parabéns! Nesse tempo longo de gestão, desafios grandes devem ter sido resolvidos e você tem uma grande experiência de gestão de Repositório Institucional! Já pensou em capacitar uma equipe para gestão em outra instituição? Já pensou em ministrar cursos? Publique o seu relato de experiência em formato de artigo científico! Suas contribuições podem ajudar muitas equipes que estão buscando meios para melhoria de seus Repositórios Institucionais."
                },
            ],
        },
        {
            type: "radio",
            name: "q2",
            label: "2. Qual software a sua instituição utiliza para gerenciar o Repositório Institucional? ",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "0",
                    desc: "DSpace", 
                    text: "DSpace é o software livre de gerenciamento de Repositórios Institucionais mais utilizado no Brasil e no mundo, segundo as estatísticas do Diretório OpenDOAR! Com o DSpace é possível uma customização satisfatória e adequada para a sua comunidade usuária."
                },
                { 
                    value: "1", 
                    pont: "0",
                    desc: "EPrints",
                    text: "EPrints é o software livre que ocupa o segundo lugar entre os softwares de gerenciamento de Repositórios no Brasil e no mundo, segundo as estatísticas do Diretório OpenDOAR! É compatível com o Open Archives Initiative Protocol for Metadata Harvesting."
                },
                { 
                    value: "2", 
                    pont: "0",
                    desc: "WEKO",
                    text: " WEKO é um software livre para mineração de dados. Ocupa o terceiro lugar para os softwares de gerenciamento de Repositórios no Brasil e no mundo, segundo as estatísticas do Diretório OpenDOAR!"
                },
                { 
                    value: "3", 
                    pont: "0",
                    desc: "Outro",
                    text: "Interessante que você utiliza um software diferente dos demais indicados na pergunta. DSpace, EPrints e WEKO são os softwares livre mais utilizados no Brasil e no mundo."
                },
            ],
        },
        {
            type: "radio",
            name: "q3",
            label: "3. Para o gerenciamento, o seu Repositório Institucional tem um número adequado de pessoal para suprir as funcionalidades e serviços dos quais se propõe? ",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "4.16",
                    desc: "Sim, temos um Comitê Gestor responsável por essa demanda", 
                    text: "Maravilha! Ter um Comitê Gestor com número adequado de pessoal é uma estratégia necessária que auxilia suprindo as funcionalidades e os serviços dos quais o Repositório Institucional se propõe."
                },
                { 
                    value: "1", 
                    pont: "3.16",
                    desc: "Além do Comitê Gestor é preciso de mais pessoal para dividir as crescentes tarefas",
                    text: "O primeiro passo é enviar essa demanda de pessoal a instância maior da sua instituição. Sendo uma instituição educacional, a reitoria é o órgão responsável pela alta administração e é necessário enviar essa demanda de pessoal para poder conseguir pessoas capacitadas e interessadas em fazer parte do Comitê Gestor do Repositório Institucional."
                },
                { 
                    value: "2", 
                    pont: "3",
                    desc: "Os membros do Comitê Gestor precisam ser mudados mas conseguimos cumprir os serviços necessários e não pretendemos conseguir mais pessoal para atuar conosco",
                    text: "É necessário que o Comitê Gestor possua membros na mesma sintonia, tendo a cultura organizacional favorável a melhoria das funcionalidades e dos serviços oferecidos pelo Repositório Institucional. Se isso não acontecer, é necessário a troca de presidência do Comitê ou a troca da equipe completa. Talvez pensar que não é necessário conseguir mais pessoal para o Comitê não seja adequado, visto que, pela sua resposta, é notório que os membros precisam ser mudados."
                },
                { 
                    value: "3", 
                    pont: "0",
                    desc: "Enfrentamos constantes desafios para conseguir pessoal para atuar conosco",
                    text: "Desafios sempre existem dentro da gestão de um Repositório Institucional. Para conseguir mais pessoal, tente sensibilizar a instância de alta administração da sua instituição. Sendo uma instituição educacional, a reitoria é o órgão responsável pela alta administração e é necessário enviar essa demanda de pessoal para poder conseguir pessoas capacitadas e interessadas em fazer parte do Comitê Gestor do Repositório Institucional."
                },
            ],
        },
        {
            type: "radio",
            name: "q4",
            label: "4. Na sua instituição, existe um setor (físico) de Repositórios Digitais que seja vinculado ou não a Biblioteca Central? ",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "3.16",
                    desc: "Sim, existe o setor", 
                    text: "É ótimo já existir o setor de Repositórios Digitais na sua instituição. É recomendável que o setor seja alocado na Biblioteca Central."
                },
                { 
                    value: "1", 
                    pont: "4.16",
                    desc: "Sim, existe o setor e é vinculado a Biblioteca Central",
                    text: "Maravilha! A Biblioteca Central é o local adequado para alocar o setor de Repositórios Digitais, tendo em vista o contato com a comunidade usuária!"
                },
                { 
                    value: "2", 
                    pont: "3.16",
                    desc: "Sim, existe o setor e é vinculado ao Setor de Informática/Tecnologia",
                    text: "Hum, compreendo. Mas o setor de informática/tecnologia não é o local adequado para alocar o setor de Repositórios Digitais. A Biblioteca Central, voltada principalmente ao atendimento a comunidade usuária, deve ser o local para o setor de Repositórios Digitais. Deve ser um setor a vista da comunidade usuária."
                },
                { 
                    value: "3", 
                    pont: "0",
                    desc: "Não existe o setor e toda a gestão do Repositório Institucional é atrelada às atividades de outro setor administrativo",
                    text: "Primeiramente, o setor de Repositórios Digitais deve existir. Deve ser alocado na Biblioteca Central e deve estar à vista da comunidade usuária, visto que a Biblioteca Central é voltada para o atendimento dessa comunidade."
                },
                { 
                    value: "4", 
                    pont: "2",
                    desc: "Não, mas estamos em processo de criação de um setor de Repositórios Digitais",
                    text: "Ótimo! O processo de criação do setor de Repositórios Digitais é árduo, principalmente porque lida com uma cultura organizacional que, muitas vezes, não compreende a necessidade de se ter um setor físico dedicado a esse serviço. O setor deve ser alocado na Biblioteca Central e deve estar à vista da comunidade usuária, visto que a Biblioteca Central é voltada para o atendimento dessa comunidade."
                },
                { 
                    value: "5", 
                    pont: "0",
                    desc: "Não existe e não pensamos em ter um setor de Repositórios Digitais",
                    text: "Infelizmente esse pensamento não está correto. O setor de Repositórios Digitais deve existir e deve ser um setor físico alocado na Biblioteca Central da instituição e deve estar à vista da comunidade usuária, visto que a Biblioteca Central é voltada para o atendimento dessa comunidade."
                },
            ],
        },
        
        {
            type: "radio",
            name: "q5",
            label: "5. Você realizou algum tipo de educação continuada em Sistemas de Informação, Arquitetura da Informação, programação ou algo relacionado para auxiliar no seu trabalho com Repositórios Institucionais? ",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "4",
                    desc: "Sim, realizei 1 curso", 
                    text: "A capacitação é um processo necessário para todo e qualquer servidor público, funcionário ou colaborador de uma organização. Trabalhando com Repositórios Institucionais, é necessário que o gestor invista tempo para educação continuada em Sistemas de Informação, Arquitetura da Informação, programação ou algo relacionado para auxiliar no seu trabalho. Realizar 1 curso pode ser considerado pouco tendo em vista que a tecnologia avança em velocidade exponencial e, caso a gestão não acompanhe minimamente, pode ficar ultrapassada."
                },
                { 
                    value: "1", 
                    pont: "4.16",
                    desc: "Sim, realizei mais de 1 curso",
                    text: " Realizar mais de um curso de capacitação é um avanço. A capacitação é um processo necessário para todo e qualquer servidor público, funcionário ou colaborador de uma organização. Trabalhando com Repositórios Institucionais, é necessário que o gestor invista tempo para a educação continuada em Sistemas de Informação, Arquitetura da Informação, programação ou algo relacionado para auxiliar no seu trabalho. "
                },
                { 
                    value: "2", 
                    pont: "4",
                    desc: "Não realizei, mas estou em processo de capacitação",
                    text: "A capacitação é um processo necessário para todo e qualquer servidor público, funcionário ou colaborador de uma organização. Trabalhando com Repositórios Institucionais, é necessário que o gestor invista tempo para educação continuada em Sistemas de Informação, Arquitetura da Informação, programação ou algo relacionado para auxiliar no seu trabalho. É ótimo e louvável que você esteja em processo de capacitação. Ao finalizar, procure outros que farão a diferença no seu trabalho. Sua comunidade usuária agradece."
                },
                { 
                    value: "3", 
                    pont: "0",
                    desc: "Não realizei",
                    text: "É necessário você realizar um curso de capacitação sim. Não ter realizado ainda podeser um grande problema. A capacitação é um processo necessário para todo e qualquer servidor público, funcionário ou colaborador de uma organização. Trabalhando com Repositórios Institucionais, é necessário que o gestor invista tempo para educação continuada em Sistemas de Informação, Arquitetura da Informação, programação ou algo relacionado para auxiliar no seu trabalho."
                },
                { 
                    value: "4", 
                    pont: "0",
                    desc: "Não realizei e acredito não ser necessário capacitação ou educação continuada para atuar com RI", 
                    text: "Infelizmente seu pensamento está errado. Capacitação ou educação continuada são extremamente importantes para a atuação em Repositórios Institucionais. A capacitação é um processo necessário para todo e qualquer servidor público, funcionário ou colaborador de uma organização. Trabalhando com Repositórios Institucionais, é necessário que o gestor invista tempo para educação continuada em Sistemas de Informação, Arquitetura da Informação, programação ou algo relacionado para auxiliar no seu trabalho."
                },
            ],
        },
        {
            type: "radio",
            name: "q6",
            label: "6. Você é adepto a educação continuada e participa de eventos científicos sobre Ciência Aberta e Repositórios Digitais?",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "4.16",
                    desc: "Sim, sempre estou participando e estudando sobre", 
                    text: "Parabéns! É importante sempre participar e estudar sobre! Continue assim! Eventos sobre Ciência Aberta e Repositórios Digitais contribuem bastante para o seu crescimento profissional e sua comunidade usuária agradece. À exemplo, a Conferência Lusófona de Ciência Aberta reúne pesquisadores, gestores, instituições e demais representantes renomados no campo da Ciência Aberta e atuantes em Repositórios Digitais."
                },
                { 
                    value: "1", 
                    pont: "3.16",
                    desc: "Participo esporadicamente",
                    text: "Participar esporadicamente de eventos científicos sobre Ciência Aberta e Repositórios Digitais é um começo e deve ser sempre incentivado. Invista o seu tempo para participar sempre que tiver um evento e acompanhe os artigos científicos que estão sendo publicados recentemente. Eventos sobre Ciência Aberta e Repositórios Digitais contribuem bastante para o seu crescimento profissional e sua comunidade usuária agradece. À exemplo, a Conferência Lusófona de Ciência Aberta reúne pesquisadores, gestores, instituições e demais representantes renomados no campo da Ciência Aberta e atuantes em Repositórios Digitais."
                },
                { 
                    value: "2", 
                    pont: "0",
                    desc: "Não participo",
                    text: "Sendo gestor de Repositório Institucional, você deve participar sim de eventos científicos sobre Ciência Aberta e Repositórios Digitais, favorecendo a educação continuada. Lembre-se que eventos sobre Ciência Aberta e Repositórios Digitais contribuem bastante para o seu crescimento profissional e sua comunidade usuária agradece. À exemplo, a Conferência Lusófona de Ciência Aberta reúne pesquisadores, gestores, instituições e demais representantes renomados no campo da Ciência Aberta e atuantes em Repositórios Digitais."
                },
            ],
        },
        {
            type: "radio",
            name: "q7",
            label: "7. Em relação a atualização do software de gerenciamento do RI, você participa desse processo?",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "4.16",
                    desc: "Sim, participo. É uma tarefa gerenciada unicamente pelo Setor de Informática/Tecnologia ", 
                    text: "A atualização do software de gerenciamento do seu Repositório Institucional é uma tarefa necessária, cuja importância impacta na segurança de informação e numa interface moderna e remodelada. Essa tarefa deve ser realizada em conjunto com os membros do Comitê Gestor ou representantes indicados. É importante que, principalmente, o pessoal da Biblioteca Central e o pessoal do setor de informática/tecnologia possam criar protótipos em formato de wireframe e framework. Esses protótipos devem ser compartilhados com os outros membros do Comitê Gestor com a finalidade desses opinarem sobre melhorias, facilidades e sugestões em geral voltadas a organização da informação, navegação e interação das funcionalidades e serviços do Repositório Institucional com a comunidade usuária."
                },
                { 
                    value: "1", 
                    pont: "0",
                    desc: "Sim, participo. É uma tarefa gerenciada unicamente pela Biblioteca Central",
                    text: "A atualização do software de gerenciamento do seu Repositório Institucional é uma tarefa necessária, cuja importância impacta na segurança de informação e numa interface moderna e remodelada. Essa tarefa deve ser realizada em conjunto com os membros do Comitê Gestor ou representantes indicados. É importante que, principalmente, o pessoal da Biblioteca Central e o pessoal do setor de informática/tecnologia possam criar protótipos em formato de wireframe e framework. Esses protótipos devem ser compartilhados com os outros membros do Comitê Gestor com a finalidade desses opinarem sobre melhorias, facilidades e sugestões em geral voltadas a organização da informação, navegação e interação das funcionalidades e serviços do Repositório Institucional com a comunidade usuária."
                },
                { 
                    value: "2", 
                    pont: "1.5",
                    desc: "Não participo porque não tenho essa função como gestor",
                    text: "A atualização do software de gerenciamento do seu Repositório Institucional é uma tarefa necessária, cuja importância impacta na segurança de informação e numa interface moderna e remodelada. Essa tarefa deve ser realizada em conjunto com os membros do Comitê Gestor ou representantes indicados. É importante que, principalmente, o pessoal da Biblioteca Central e o pessoal do setor de informática/tecnologia possam criar protótipos em formato de wireframe e framework. Esses protótipos devem ser compartilhados com os outros membros do Comitê Gestor com a finalidade desses opinarem sobre melhorias, facilidades e sugestões em geral voltadas a organização da informação, navegação e interação das funcionalidades e serviços do Repositório Institucional com a comunidade usuária."
                },
                { 
                    value: "3", 
                    pont: "0",
                    desc: "Não houve atualização do software desde quando estou no cargo",
                    text: "A atualização do software de gerenciamento do seu Repositório Institucional é uma tarefa necessária, cuja importância impacta na segurança de informação e numa interface moderna e remodelada. Essa tarefa deve ser realizada em conjunto com os membros do Comitê Gestor ou representantes indicados. É importante que, principalmente, o pessoal da Biblioteca Central e o pessoal do setor de informática/tecnologia possam criar protótipos em formato de wireframe e framework. Esses protótipos devem ser compartilhados com os outros membros do Comitê Gestor com a finalidade desses opinarem sobre melhorias, facilidades e sugestões em geral voltadas a organização da informação, navegação e interação das funcionalidades e serviços do Repositório Institucional com a comunidade usuária."
                },
            ],
        },
        {
            type: "radio",
            name: "q8",
            label: "8. Geralmente, quando o software de gerenciamento de RI sofre atualização, o gestor precisa alimentar o RI novamente com os materiais científicos existentes. Você participa desse processo de alimentação do seu Repositório Institucional arquivando materiais científicos?",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "4.16",
                    desc: "Sim, participo ativamente em conjunto com o Comitê Gestor responsável pelo Repositório Institucional", 
                    text: "Parabéns! Geralmente, quando o software de gerenciamento do Repositório Institucional sofre atualização, um gestor precisa alimentá-lo novamente com os materiais científicos contidos anteriormente e com os novos. Esse também deve ser um processo em conjunto, principalmente entre o pessoal da Biblioteca Central e o setor de informática/tecnologia."
                },
                { 
                    value: "1", 
                    pont: "2.16",
                    desc: "Participo indiretamente delegando funções a um funcionário auxiliar",
                    text: "Participar indiretamente, somente delegando funções não é uma estratégia de gestão adequada. O processo deve ser um em conjunto, principalmente entre o pessoal da Biblioteca Central e o setor de informática/tecnologia"
                },
                { 
                    value: "2", 
                    pont: "0",
                    desc: "Não participo",
                    text: "Infelizmente não participar do processo de atualização é uma tarefa inadequada. Geralmente, quando o software de gerenciamento do Repositório Institucional sofre atualização, o gestor precisa alimentá-lo novamente com os materiais científicos contidos anteriormente e com os novos. Esse também deve ser um processo em conjunto, principalmente entre o pessoal da Biblioteca Central e o setor de informática/tecnologia."
                },
                { 
                    value: "3", 
                    pont: "0",
                    desc: "Não houve atualização do software desde quando estou no cargo",
                    text: "Provavelmente deve existir uma atualização do software de gerenciamento do seu Repositório Institucional. É importante buscar por uma versão atualizada no próprio site oficial do seu software, visto que é a fonte segura para realização do download da nova versão. Quando o software de gerenciamento do Repositório Institucional sofre atualização, o gestor precisa alimentá-lo novamente com os materiais científicos contidos anteriormente e com os novos. É um processo trabalhoso que deve ser realizado em conjunto, principalmente entre o pessoal da Biblioteca Central e o setor de informática/tecnologia."
                },
            ],
        },
        {
            type: "radio",
            name: "q9",
            label: "9. Caso participe do processo descrito na questão anterior, você opina sobre como deve ser a disposição e a organização da informação no ambiente, isto é, você participa direta ou indiretamente do processo de customização de interface e organização das comunidades, subcomunidades e coleções? ",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "4.16",
                    desc: "Sim, participo diretamente ", 
                    text: "Que ótimo! No processo de atualização do software de gerenciamento, é importante que o gestor opine sobre como deve ser a disposição e a organização da informação no ambiente impactando na customização da interface e na organização das comunidades, subcomunidades e coleções."
                },
                { 
                    value: "1", 
                    pont: "4",
                    desc: "Sim, participo indiretamente",
                    text: "É importante que você participe diretamente do processo de atualização para poder opinar sobre como deve ser a disposição e a organização da informação no ambiente impactando na customização da interface e na organização das comunidades, subcomunidades e coleções."
                },
                { 
                    value: "2", 
                    pont: "0",
                    desc: "Não participo. É uma tarefa gerenciada unicamente pelo profissional de informática/tecnologia",
                    text: "A tarefa de opinar sobre como deve ser a disposição e a organização da informação não deve ser delegada unicamente ao profissional de informática. É importante que vários gestores do Comitê participem impactando na customização da interface e na organização das comunidades, subcomunidades e coleções."
                },
                { 
                    value: "3", 
                    pont: "0",
                    desc: "Não participo porque não compreendo o processo de customização de interface",
                    text: "Compreender minimamente o processo de customização de interface é uma competência necessária e importante. Isso pode ser adquirido por meio de cursos de capacitação, educação continuada e participação em eventos. No processo de atualização do software de gerenciamento, é importante que o gestor opine sobre como deve ser a disposição e a organização da informação no ambiente impactando na customização da interface e na organização das comunidades, subcomunidades e coleções."
                },
            ],
        },
        {
            type: "radio",
            name: "q10",
            label: "10.  Antes de customizar a interface ou organizar a disposição dos ícones, das comunidades, subcomunidades e coleções, é realizado um estudo de comunidade para criação de uma interface facilitada ao público usuário do RI? ",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "4.16",
                    desc: "Sim", 
                    text: "Que maravilha! Um estudo de comunidade é uma estratégia de gestão que todo Comitê Gestor de um Repositório Institucional deve realizar. Possibilita conhecer a comunidade usuária, suas facilidades, dificuldades de interação com o ambiente e possibilita tomadas de decisão que antecedem um problema de interação com as funcionalidades e serviços oferecidos pelo Repositório Institucional."
                },
                { 
                    value: "1", 
                    pont: "0",
                    desc: "Não",
                    text: "O estudo de comunidade deve ser realizado logo! Você precisa conhecer o que sua comunidade usuária pensa do seu Repositório Institucional! Um estudo de comunidade é uma estratégia de gestão que todo Comitê Gestor de um Repositório Institucional deve realizar. Possibilita conhecer a comunidade usuária, suas facilidades, dificuldades de interação com o ambiente e possibilita tomadas de decisão que antecedem um problema de interação com as funcionalidades e serviços oferecidos pelo Repositório Institucional. "
                },
            ],
        },
        {
            type: "radio",
            name: "q11",
            label: "11. Você já ouviu falar sobre Arquitetura da Informação?",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "4.16",
                    desc: "Sim", 
                    text: "Que maravilha! A Arquitetura da Informação é uma disciplina que auxilia no projeto, estruturação, customização de ambientes digitais e websites no geral. Para os Repositórios Institucionais, pensar a Arquitetura da Informação deve ser uma estratégia de gestão que favorece a interação entre o ambiente e a comunidade usuária."
                },
                { 
                    value: "1", 
                    pont: "4.16",
                    desc: "Sim, somente numa disciplina da graduação ou pós-graduação",
                    text: "Isso é bom. Mas já pensou em aplicar os conhecimentos aprendidos ao seu Repositório Institucional? A Arquitetura da Informação é uma disciplina que auxilia no projeto, estruturação, customização de ambientes digitais e websites no geral. Para os Repositórios Institucionais, pensar a Arquitetura da Informação deve ser uma estratégia de gestão que favorece a interação do ambiente com a comunidade usuária."
                },
                { 
                    value: "2", 
                    pont: "0",
                    desc: "Ouvi falar, mas não tenho domínio e/ou não compreendo",
                    text: "Compreendo, mas pense: imagine uma distância entre duas colinas (colina A e colina B). Entre elas passa um rio profundo que dificulta o trânsito entre ambas as colinas, todavia se existisse uma ponte de acesso, o trânsito entre as colinas seria contínuo. Suponha que a sua comunidade usuária seja a colina A e o acesso aos materiais informacionais seja a colina B e a ponte mencionada seja a Arquitetura da Informação. Para os Repositórios Institucionais, pensar a Arquitetura da Informação deve ser uma estratégia de gestão que favorece a interação do ambiente com a comunidade usuária"
                },
                { 
                    value: "3", 
                    pont: "0",
                    desc: "Não, nunca ouvi falar",
                    text: "Bom, então vamos iniciar pelo começo! Resumidamente, a Arquitetura da Informação é uma disciplina que auxilia no projeto, estruturação, customização de ambientes digitais e websites no geral. Para os Repositórios Institucionais, pensar a Arquitetura da Informação deve ser uma estratégia de gestão que favorece a interação do ambiente com a comunidade usuária. Agora pense: imagine uma distância entre duas colinas (colina A e colina B). Entre elas passa um rio profundo que dificulta o trânsito entre ambas as colinas, todavia se existisse uma ponte de acesso, o trânsito entre as colinas seria contínuo. Suponha que a sua comunidade usuária seja a colina A e o acesso aos materiais informacionais seja a colina B e a ponte mencionada seja a Arquitetura da Informação."
                },
            ],
        },
        {
            type: "radio",
            name: "q12",
            label: "12. Caso tenha respondido positivamente na questão anterior, qual o grau de importância que você considera a Arquitetura da Informação no sentido de melhorar a experiência de uso, interação e compreensão da informação para seu Repositório? ",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "4.16",
                    desc: "Muito Importante", 
                    text: "Maravilha! A Arquitetura da Informação possui grau alto de importância para melhorar a experiência de uso, interação e compreensão da informação para seu Repositório."
                },
                { 
                    value: "1", 
                    pont: "3.80",
                    desc: "Importante",
                    text: "Com toda a certeza, a Arquitetura da Informação possibilita a melhoria da experiência de uso, interação e compreensão da informação para seu Repositório."
                },
                { 
                    value: "2", 
                    pont: "0",
                    desc: "Irrelevante",
                    text: "Infelizmente não é possível cientificamente e metodologicamente a Arquitetura da informação ser irrelevante no sentido de melhorar a experiência de uso, interação e compreensão da informação para seu Repositório."
                },
                { 
                    value: "3", 
                    pont: "0",
                    desc: "Não considero que a Arquitetura da Informação possa melhorar a experiência de uso e interação para meu Repositório Institucional ",
                    text: "Infelizmente não é possível cientificamente e metodologicamente a Arquitetura da informação ser irrelevante no sentido de melhorar a experiência de uso, interação e compreensão da informação para seu Repositório. A Arquitetura da Informação é uma disciplina que auxilia no projeto, estruturação, customização de ambientes digitais e websites no geral. Para os Repositórios Institucionais, pensar a Arquitetura da Informação deve ser uma estratégia de gestão que favorece a interação do ambiente com a comunidade usuária."
                },
            ],
        },
        {
            type: "radio",
            name: "q13",
            label: "13. Seu Repositório Institucional possui uma política de informação? ",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "4.16",
                    desc: "Sim", 
                    text: "Maravilha! Todo Repositório Institucional deve possuir uma política de informação. A saber, estando institucionalizada, deve ser disponibilizada para a comunidade usuária na homepage do seu Repositório Institucional."
                },
                { 
                    value: "1", 
                    pont: "0",
                    desc: "Não",
                    text: "Que pena! Todo Repositório Institucional deve possuir uma política de informação que seja institucionalizada. Além disso, a política de informação deve ser disponibilizada para a comunidade usuária na homepage do seu Repositório Institucional."
                },
            ],
        },
        {
            type: "radio",
            name: "q14",
            label: "14. Caso tenha respondido ‘Sim’ na questão anterior, a política de informação do seu Repositório Institucional está disponível em acesso aberto?",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "4.16",
                    desc: "Sim", 
                    text: "Que ótimo! Disponibilizar a política de informação em acesso aberto contribui para a transparência de informação, favorecendo a comunidade usuária."
                },
                { 
                    value: "1", 
                    pont: "0",
                    desc: "Não",
                    text: "Que pena! Disponibilizar a política de informação em acesso aberto contribui para a transparência de informação, favorecendo a comunidade usuária."
                },
            ],
        },
        {
            type: "radio",
            name: "q15",
            label: "15. A política de informação do Repositório Institucional da sua Universidade é?",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "4.16",
                    desc: "Recente e institucionalizada há menos de 2 anos", 
                    text: "Maravilha! Bastante recente e, consequentemente, atualizada!"
                },
                { 
                    value: "1", 
                    pont: "3.70",
                    desc: "Recente, mas não é institucionalizada. Estamos em processo de institucionalização com outros gestores responsáveis",
                    text: "Compreensível! Deve-se agilizar a institucionalização!"
                },
                { 
                    value: "2", 
                    pont: "3",
                    desc: "Antiga e estamos em processo de atualização para posterior institucionalização",
                    text: "Compreensível! Deve-se agilizar esse processo então!"
                },
                { 
                    value: "3", 
                    pont: "0",
                    desc: "Antiga e não existe ainda uma iniciativa para atualizá-la",
                    text: "Então deve-se reunir forças e pensar em estratégias de gestão que procurem atualizar a política de informação atual! "
                },
            ],
        },
        {
            type: "radio",
            name: "q16",
            label: "16. A política de informação contempla ou considera a Arquitetura da Informação para a customização e organização do seu Repositório Institucional?",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "4.16",
                    desc: "Sim", 
                    text: "Que maravilha! A literatura científica indica que é necessário informar na política de informação sobre a Arquitetura da Informação para a customização e organização do seu Repositório Institucional."
                },
                { 
                    value: "1", 
                    pont: "0",
                    desc: "Não",
                    text: "Que pena. O que achas de atualizar essa informação futuramente? A literatura científica indica que é necessário informar na política de informação sobre a Arquitetura da Informação para a customização e organização do seu Repositório Institucional."
                },
            ],
        },
        {
            type: "radio",
            name: "q17",
            label: "17. Caso contemple a Arquitetura da Informação, esta é centrada na missão e identidade institucional ou é centrada no conteúdo (documentos armazenados) ou é centrada no usuário?",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "3",
                    desc: "Centrada na missão e identidade institucional ", 
                    text: "Interessante! Correto, mas precisa ampliar. Para contemplar a Arquitetura da Informação, deve-se unir as dimensões contexto, conteúdo e usuário."
                },
                { 
                    value: "1", 
                    pont: "3",
                    desc: "Centrada no conteúdo (documentos armazenados) ",
                    text: "Interessante! Correto, mas precisa ampliar. Para contemplar a Arquitetura da Informação, deve-se unir as dimensões contexto, conteúdo e usuário."
                },
                { 
                    value: "2", 
                    pont: "3",
                    desc: "Centrada no usuário",
                    text: " Interessante! Correto, mas precisa ampliar. Para contemplar a Arquitetura da Informação, deve-se unir as dimensões contexto, conteúdo e usuário."
                },
                { 
                    value: "3", 
                    pont: "4.16",
                    desc: "Centrada nas três opções mencionadas na questão",
                    text: "Interessante! Corretíssimo. Para contemplar a Arquitetura da Informação, deve-se unir as dimensões contexto, conteúdo e usuário."
                },
            ],
        },
    ],
    contexto: [
        {
            type: "radio",
            name: "q18",
            label: "18. Você considera que, sendo um ambiente voltado a uma instituição educacional, seu Repositório Institucional contempla a missão e os objetivos da instituição que está vinculado? ",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "4.16",
                    desc: "Sim", 
                    text: "Que ótimo! Sendo o Repositório Institucional um ambiente voltado a uma instituição educacional, deve contemplar a missão e os objetivos da instituição que está vinculado. Para isso, a Arquitetura da Informação fornece diretrizes importantes para a melhoria do seu Repositório"
                },
                { 
                    value: "1", 
                    pont: "0",
                    desc: "Não",
                    text: "Que pena. Já pensou em estratégias para mudar isso? Sendo o Repositório Institucional um ambiente voltado a uma instituição educacional, deve contemplar a missão e os objetivos da instituição que está vinculado. Para isso, a Arquitetura da Informação fornece diretrizes importantes para a melhoria do seu Repositório."
                },
                { 
                    value: "2", 
                    pont: "2",
                    desc: "O RI ainda está em processo de estudo para subsidiar seu papel educacional",
                    text: " Compreensível. Lembre-se que sendo o Repositório Institucional um ambiente voltado a uma instituição educacional, deve contemplar a missão e os objetivos da instituição que está vinculado. Para isso, a Arquitetura da Informação fornece diretrizes importantes para a melhoria do seu Repositório."
                },
                { 
                    value: "3", 
                    pont: "0",
                    desc: "Ainda não foi feito um estudo que contemple a relação do RI com a missão e os objetivos institucionais",
                    text: "Que pena. Está na hora de correr com esse estudo! Sendo o Repositório Institucional um ambiente voltado a uma instituição educacional, deve contemplar a missão e os objetivos da instituição que está vinculado. Para isso, a Arquitetura da Informação fornece diretrizes importantes para a melhoria do seu Repositório."
                },
                { 
                    value: "4", 
                    pont: "0",
                    desc: "Não sei responder",
                    text: " Ok. Resumidamente, sendo o Repositório Institucional um ambiente voltado a uma instituição educacional, deve contemplar a missão e os objetivos da instituição que está vinculado. Para isso, a Arquitetura da Informação fornece diretrizes importantes para a melhoria do seu Repositório."
                },
            ],
        },
    ],
    conteudo: [
        {
            type: "radio",
            name: "q19",
            label: "19. Sobre a disposição dos ícones que organizam o Repositório: ícones que auxiliam na navegação; ícones que indicam sinalizações para ajudar na tomada de decisão; posicionamento da aba de busca, entre outros, você considera sua homepage é: ",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "4.16",
                    desc: "Fácil de navegar e interativa", 
                    text: "Maravilha! A disposição dos ícones deve ser facilitada e interativa para o seu usuário! É recomendável que a aba de busca seja posicionada de forma central, auxiliando a sua comunidade usuária a enxergá-la de modo intuitivo, sem pensar. Isso contribui para a navegação, para a tomada de decisão e outros fatores que resultam na facilitada recuperação da informação."
                },
                { 
                    value: "1", 
                    pont: "3.50",
                    desc: "Fácil de navegar, mas não é interativa",
                    text: "Compreensível! A facilidade em navegar já é um começo importante. Para trazer interatividade, tente indicar os “caminhos” que o seu usuário percorre como, por exemplo, ao digitar um termo de busca, seu usuário é direcionado a página dos resultados recuperados. Acima, no canto superior esquerdo, é possível trilhar os caminhos percorridos, como: homepage – ‘página atual’. Desse modo, seu usuário consegue perceber de onde veio (homepage) e onde está (‘página atual’)."
                },
                { 
                    value: "2", 
                    pont: "3",
                    desc: "Fácil de navegar, mas nunca fizemos um teste com um usuário para saber possíveis facilidades e dificuldades",
                    text: "Compreensível! Com o ritmo de trabalho num órgão de gestão, é compreensível que não se tenha realizado, até o momento, um estudo que radiografe as facilidades e as dificuldades da comunidade usuária perante a atual disposição dos ícones, no contexto da navegação e da interação. Porém, é uma estratégia de gestão importante que deve ser levada em consideração futuramente. Pense o seguinte: a comunidade usuária é diversa e particular ao mesmo tempo. Nunca será possível sanar todos os problemas de interação e de navegação, e sim, minimizá-los."
                },
                { 
                    value: "3", 
                    pont: "3.80",
                    desc: "Difícil de navegar, mas estamos em constante processo visando melhorar essa navegação",
                    text: "Compreensível! É importante que já existam iniciativas para melhoria do que não está adequado atualmente, visto que, se já foi encontrado o problema e pensou-se numa solução, é sinal de que o Comitê Gestor se preocupa com a experiência satisfatória da comunidade usuária no acesso e uso da informação. A disposição dos ícones deve ser facilitada e interativa para o seu usuário! É recomendável que a aba de busca seja posicionada de forma central, auxiliando a sua comunidade usuária a enxergá-la de modo intuitivo, sem pensar. Isso contribui para a navegação, para a tomada de decisão e outros fatores que resultam na facilitada recuperação da informação."
                },
                { 
                    value: "4", 
                    pont: "0",
                    desc: "Difícil de navegar",
                    text: " Que pena. Mas não desanime! Isso pode ser corrigido. O Comitê Gestor precisa se reunir para pensar em estratégicas de gestão que visem a melhoria da navegação e da interação. Essas iniciativas irão criar caminhos para a identificação de problemas. Um exemplo estratégico é o estudo de comunidade, cuja finalidade preocupa-se em questionar a comunidade usuária em formato de perguntas simples com respostas objetivas e espaço para comentários. O estudo pode ser realizado de forma online para alcançar bastante pessoas."
                },
            ],
        },
        {
            type: "radio",
            name: "q20",
            label: "20. Você considera que a experiencia do usuário com seu Repositório Institucional é satisfatória?",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "4.16",
                    desc: "Sim", 
                    text: "Maravilha! Ter uma experiência do usuário satisfatória é importante quando pensamos na interação, na navegação, nos mecanismos de busca. A comunidade usuária não deve ‘pensar’ muito perante o processo para encontrar uma informação. Isso torna a experiência satisfatória. Quanto a sua certeza de que a experiência do usuário é satisfatória, como você afirma isso? É uma afirmação baseada num estudo de comunidade realizado? Ou baseada em outra estratégia de gestão? Já pensou em publicar a sua estratégia de gestão e seu sucesso na experiência do usuário em formato de artigo científico?"
                },
                { 
                    value: "1", 
                    pont: "0",
                    desc: "Não",
                    text: "Que pena. Ter uma experiência do usuário satisfatória é importante quando pensamos na interação, na navegação, nos mecanismos de busca. A comunidade usuária não deve ‘pensar’ muito perante o processo para encontrar uma informação. Isso torna a experiência satisfatória. Já pensou em realizar um estudo de comunidade com o intuito de saber como é a experiência de usuário da sua comunidade? Será de suma importância para você traçar estratégias de gestão favoráveis a resolução de problemas."
                },
            ],
        },
        {
            type: "radio",
            name: "q21",
            label: "21. Você considera que os materiais científicos armazenados no seu Repositório Institucional são acessados facilmente?",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "4.16",
                    desc: "Sim", 
                    text: "Que ótimo! Quanto a sua certeza de que os materiais informacionais são encontrados facilmente, como você afirma isso? É uma afirmação baseada num estudo de comunidade realizado? Ou baseada em outra estratégia de gestão? Já pensou em publicar a sua estratégia de gestão e seu sucesso na experiência do usuário em formato de artigo científico? A resposta desta questão está proporcionalmente relacionada com a questão anterior, sobre experiência do usuário. Acessar facilmente os materiais informacionais torna satisfatória a experiência do usuário."
                },
                { 
                    value: "1", 
                    pont: "0",
                    desc: "Não",
                    text: "Compreensível. E o que fazer para mudar isso? Já pensou em estratégias de gestão voltadas a ouvir as facilidades e dificuldades da sua comunidade? Um estudo de comunidade pode ser um bom começo. "
                },
            ],
        },
    ],
    usuarios: [
        {
            type: "radio",
            name: "q22",
            label: "22. Já foi realizado algum estudo de comunidade para coletar opiniões e percepções dos usuários perante as funcionalidades, acesso, recuperação e uso da informação no seu Repositório Institucional?",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "4.16",
                    desc: "Sim, fazemos constantemente", 
                    text: " Que maravilha! O estudo de comunidade é importante para coletar opiniões e percepções dos usuários perante as funcionalidades, acesso, recuperação e uso da informação no seu Repositório Institucional. É uma estratégia de gestão que só tem a agregar valor positivo a tomada de decisão do Comitê Gestor."
                },
                { 
                    value: "1", 
                    pont: "3.50",
                    desc: "Sim, mas faz um tempo que não atualizamos esse estudo de comunidade ",
                    text: "Compreensível! Com o ritmo intenso de trabalho num ambiente de gestão, certas atividades precisam ser adiadas ou não há pessoal suficientemente direcionado a isso. Bom, o importante é procurar maneiras de driblar os obstáculos e atualizar o estudo de comunidade. Uma instituição de ensino tem ritmo grande de entrada e saída de discentes, isto é, a comunidade usuária muda rapidamente e, com isso, mudam-se as facilidades, dificuldades e percepções quanto ao acesso e uso da informação."
                },
                { 
                    value: "2", 
                    pont: "0",
                    desc: "Não, nunca foi realizado um estudo com essa finalidade",
                    text: "Então está na hora de iniciar um estudo de comunidade! É uma estratégia de gestão importante e necessária, visto que seu Repositório Institucional tem, no geral, o objetivo de disponibilizar a produção científica da sua instituição para a sua comunidade usuária. O foco é no usuário que acessa e usa a informação."
                },
            ],
        },
        {
            type: "radio",
            name: "q23",
            label: "23. Você considera que é possível que seus usuários sejam autônomos para pesquisar o material desejado no seu Repositório Institucional?",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "4.16",
                    desc: "Sim", 
                    text: "Maravilha! A autonomia da comunidade usuária em pesquisar o que se deseja é o produto da Arquitetura da Informação, isto é, um ambiente informacional digital bem pensado para que o usuário pense o mínimo possível é o que torna a usabilidade adequada."
                },
                { 
                    value: "1", 
                    pont: "0",
                    desc: "Não",
                    text: "Que pena. Mas então deve-se pensar em estratégias voltadas a atingir a autonomia do usuário no processo de pesquisa do material desejado. A autonomia da comunidade usuária em pesquisar o que se deseja é o produto da Arquitetura da Informação, isto é, um ambiente informacional digital bem pensado para que o usuário pense o mínimo possível é o que torna a usabilidade adequada."
                },
            ],
        },
        {
            type: "radio",
            name: "q24",
            label: "24. No geral, escreva como você considera que a comunidade usuária avalia a Arquitetura da Informação do Repositório da sua Instituição?",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "3.80",
                    desc: "Fácil", 
                    text: "Compreensível! A resposta para essa questão representa um julgamento seu perante toda a Arquitetura da Informação do seu Repositório Institucional. Você participou do processo de criação do ambiente digital e, principalmente, da customização. É importante o seu julgamento perante o que você acredita como Arquitetura da Informação facilitada e interativa."
                },
                { 
                    value: "1", 
                    pont: "4.16",
                    desc: "Fácil e interativa",
                    text: "Compreensível! A resposta para essa questão representa um julgamento seu perante toda a Arquitetura da Informação do seu Repositório Institucional. Você participou do processo de criação do ambiente digital e, principalmente, da customização. É importante o seu julgamento perante o que você acredita como Arquitetura da Informação facilitada e interativa. "
                },
                { 
                    value: "2", 
                    pont: "0",
                    desc: "Difícil",
                    text: "Compreensível! A resposta para essa questão representa um julgamento seu perante toda a Arquitetura da Informação do seu Repositório Institucional. Você participou do processo de criação do ambiente digital e, principalmente, da customização. É importante o seu julgamento perante o que você acredita como Arquitetura da Informação facilitada e interativa."
                },
            ],
        },
        {
            type: "radio",
            name: "q25",
            label: "25. Você considera necessário os estudos de comunidade direcionados para avaliar a Arquitetura da Informação do seu Repositório Institucional visando perceber o olhar da comunidade?",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "4.16",
                    desc: "Sim, considero", 
                    text: "Maravilha! É ótimo que você já compreende a importância de estudar a sua comunidade com a finalidade de avaliar a atual Arquitetura da Informação do seu Repositório Institucional. "
                },
                { 
                    value: "1", 
                    pont: "2.16",
                    desc: "Sim, considero, mas isso exigiria um esforço institucional que nosso pessoal ainda não tem condições de demandar",
                    text: "Compreensível! Então algo deve ser feito para mudar essa cultura organizacional. O usuário é o sujeito final do qual seu Repositório é direcionado. É necessário conhecer a sua comunidade por meio de estudos direcionados a ela. Procure criar um formulário online de perguntas e respostas. As respostas podem ser objetivas e com espaço para escrita de comentários. Os comentários podem ser necessários para ampliar alguma informação que a pergunta não alcançou e o formulário online é uma estratégia interessante visto que consegue atingir um número grande de pessoas."
                },
                { 
                    value: "2", 
                    pont: "0",
                    desc: "Não, não considero",
                    text: "Infelizmente seu pensamento não é adequado. O estudo de comunidade representa uma estratégia de gestão importante para compreender o que os usuários do Repositório Institucional têm a opinar sobre as facilidades e dificuldades de acesso, uso e interação com o ambiente. O gestor precisa ouvir a sua comunidade para tomar decisões condizentes com o público direcionado."
                },
                { 
                    value: "3", 
                    pont: "",
                    desc: "Não acho necessário visto que o profissional de informática estrutura, na minha opinião, o Repositório Institucional de maneira facilitada e interativa",
                    text: "Infelizmente seu pensamento não é adequado. O Repositório Institucional é uma iniciativa aberta para diminuir barreiras entre o conhecimento científico e a comunidade. Desse modo, é necessário que o gestor ouça e saiba quais são as facilidades e dificuldades de acesso, uso e interação com o ambiente, no sentido de tomar decisões condizentes com o público direcionado."
                },
            ],
        },
        {
            type: "radio",
            name: "q26",
            label: "26. No âmbito da Ciência Aberta para estreitar as barreiras de acesso ao conhecimento científico, o quanto você julga importante a constante avaliação de Repositórios Institucionais, tanto a nível de satisfação do usuário quanto para a avaliação da Arquitetura da Informação?",
            value: "",
            options: [
                { 
                    value: "0", 
                    pont: "4.16",
                    desc: "Muito importante", 
                    text: "Maravilha! A Ciência Aberta é uma prática científica favorável ao acesso do conhecimento de forma livre, beneficiando a comunidade científica e a sociedade no geral. Desse modo, contribui para estreitar as barreiras de acesso ao conhecimento científico. Os Repositórios Institucionais são considerados como produto dessa iniciativa e devem ser constantemente avaliados com a finalidade do Comitê Gestor conhecer a satisfação do usuário quanto a disposição da Arquitetura da Informação."
                },
                { 
                    value: "1", 
                    pont: "4",
                    desc: "Importante",
                    text: "Compreensível. A Ciência Aberta é uma prática científica favorável ao acesso do conhecimento de forma livre, beneficiando a comunidade científica e a sociedade no geral. Desse modo, contribui para estreitar as barreiras de acesso ao conhecimento científico. Os Repositórios Institucionais são considerados como produto dessa iniciativa e devem ser constantemente avaliados com a finalidade do Comitê Gestor conhecer a satisfação do usuário quanto a disposição da Arquitetura da Informação. "
                },
                { 
                    value: "2", 
                    pont: "0",
                    desc: "Irrelevante",
                    text: "Infelizmente seu pensamento é inadequado. A Ciência Aberta é uma prática científica favorável ao acesso do conhecimento de forma livre, beneficiando a comunidade científica e a sociedade no geral. Desse modo, contribui para estreitar as barreiras de acesso ao conhecimento científico. Os Repositórios Institucionais são considerados como produto dessa iniciativa e devem ser constantemente avaliados com a finalidade do Comitê Gestor conhecer a satisfação do usuário quanto a disposição da Arquitetura da Informação."
                },
                { 
                    value: "3", 
                    pont: "0",
                    desc: "Não considero usual",
                    text: "Infelizmente seu pensamento é inadequado. A Ciência Aberta é uma prática científica favorável ao acesso do conhecimento de forma livre, beneficiando a comunidade científica e a sociedade no geral. Desse modo, contribui para estreitar as barreiras de acesso ao conhecimento científico. Os Repositórios Institucionais são considerados como produto dessa iniciativa e devem ser constantemente avaliados com a finalidade do Comitê Gestor conhecer a satisfação do usuário quanto a disposição da Arquitetura da Informação."
                },
            ],
        },
    ]
}