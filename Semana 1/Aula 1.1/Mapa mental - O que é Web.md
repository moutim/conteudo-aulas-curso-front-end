
# Diferença Web x Internet
- A internet é a rede global de computadores que se conectam entre si. A World Wide Web (ou web) é um dos serviços que funcionam por meio da internet, sendo um sistema de documentos e recursos interligados que você acessa através de navegadores. Em suma, a internet é a infraestrutura, e a web é um dos muitos serviços que a utilizam.


# Componentes principais

- **Cliente (navegador)**
    
    - Chrome, Firefox, Safari, Edge
        
    - **Motor de renderização** (Blink/WebKit), **DOM**, **CSSOM**, **JS Engine** (V8, SpiderMonkey)
        
- **Servidor (back-end)**
    
    - App + banco de dados; linguagens (Node.js, Python, PHP, Java, .NET)
        
    - Servidor web (Nginx, Apache), **API** (REST/GraphQL)
        
- **Rede**
    
    - **DNS**, **TCP/UDP/QUIC**, **HTTP/HTTPS**
        
- **Conteúdo e Recursos**
    
    - HTML, CSS, JS; imagens, fontes, vídeos
        
    - **Perguntas-gatilho:** “O que faz o HTML? E o CSS? E o JS?” “Por que um site com muitas imagens fica pesado?”
        
- **Segurança**
    
    - **HTTPS/TLS**, certificados, cadeado do navegador
        
    - Autenticação: senha, 2FA; autorização; **CORS**
        
- **Ferramentas e Infra**
    
    - DevTools, Git/GitHub, hospedagem (VPS, serverless), monitoramento
        

# Conceitos

- **Internet x Web**
    
    - Internet = infraestrutura de rede; Web = serviço que roda na internet (HTTP)
        
    - **Pergunta:** “Dá para usar a internet sem a web? (ex.: e-mail, FTP)”
        
- **Cliente-servidor & Requisição-resposta**
    
    - Métodos HTTP (GET, POST, PUT, DELETE), **códigos de status** (200, 301, 404, 500)
        
    - **Pergunta:** “O que significa 404? E 500?”
        
- **URL (endereço)**
    
    - Protocolo, domínio, caminho, **query string**, **hash**
        
    - **Pergunta:** “O que é ‘?q=termo’ numa URL?”
        
- **Acessibilidade & SEO**
    
    - Semântica, alternativas de mídia, responsividade
        
    - **Pergunta:** “Como um leitor de tela entende uma página?”
        
- **Tempo real & APIs**
    
    - WebSockets/EventSource, REST x GraphQL
        
    - **Pergunta:** “Como um placar ao vivo atualiza sem F5?”

# Passo a passo para acessar **google.com**

Use como “linha do tempo” no quadro; pare após cada etapa para pescar opiniões.

1. **Digitar a URL** no navegador  
    _Gatilho:_ “O que o navegador identifica nessa URL?”
    
3. **Resolver DNS** → descobrir o **IP** de `google.com`  
    _Gatilho:_ “Quem sabe o IP do site? Por que usamos nomes e não números?”
    
6. **Enviar requisição HTTP** (ex.: `GET /`) com **headers**  
    _Gatilho:_ “O que além do endereço vai nessa ‘carta’?”
    
7. **Servidor processa** (balanceador → app → banco)  
    _Gatilho:_ “Quem decide o que vai voltar na página inicial?”
    
8. **Resposta HTTP** (status, headers, HTML)  
    _Gatilho:_ “O que significa 200 OK?”
    
9. **Navegador parseia HTML** → monta **DOM**  
    _Gatilho:_ “Quando o HTML referencia um CSS, o que acontece?”
    
10. **Busca recursos** (CSS/JS/imagens) em paralelo (muitas vezes via **CDN**)  
    _Gatilho:_ “Por que às vezes o site puxa arquivos de outros domínios?”
    
11. **CSSOM + Render Tree → Layout → Paint** (primeiro desenho na tela)  
    _Gatilho:_ “O que atrasa o primeiro paint?”
    
14. **Interação do usuário** (digitar busca) → novas requisições  
    _Gatilho:_ “Cada letra que você digita faz um pedido novo?”
    

# Exemplos de uso

- **Comunicação:** e-mail web, mensageria, redes sociais  
    _Gatilho:_ “Qual app web você usa para falar com amigos/colegas?”
    
- **Trabalho colaborativo:** docs online, gestão de projetos, vídeo-reuniões  
    _Gatilho:_ “Quais tarefas você já faz direto no navegador?”
    
- **Comércio e serviços:** e-commerce, pagamentos, bancos, gov.br  
    _Gatilho:_ “O que você faz hoje online que antes exigia ir ao local?”
    
- **Entretenimento:** streaming de música/vídeo, jogos web  
    _Gatilho:_ “Que serviços de streaming vocês conhecem?”
    
- **Educação:** EAD, plataformas de curso, simuladores  
    _Gatilho:_ “Quem já fez curso 100% no navegador?”
    
- **Tempo real & IoT:** mapas ao vivo, rastreamento, dashboards  
    _Gatilho:_ “Que site atualiza sem recarregar?”
    
- **APIs e integrações:** automações, webhooks  
    _Gatilho:_ “Como dois serviços ‘conversam’ sem um humano no meio?”
    