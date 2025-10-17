
# Conteúdo das Aulas — Curso de Front-End

Este repositório centraliza o material (apresentações e exercícios) das aulas do curso de Front-End que estou ministrando. O objetivo é ter um lugar único para acessar as apresentações, os exercícios e os exemplos usados em sala.

## Estrutura do repositório

Cada semana está organizada em uma pasta `Semana X/` contendo subpastas para cada aula (`Aula Y/`). Dentro das aulas há arquivos HTML de apresentação e, quando aplicável, exercícios e arquivos auxiliares.

- `index.html` — página inicial do repositório (se houver conteúdo para indexação local).
- `Semana 1/` até `Semana 5/` — material das semanas (apresentações e exercícios).

## Resumo por semana

Esses resumos são um apanhado básico do que foi abordado em cada semana, baseado nos arquivos presentes nas pastas. Caso eu tenha interpretado algum conteúdo de forma diferente do que foi ministrado, me avise que atualizo.

- Semana 1 — Fundamentos da Web
	- Introdução ao que é Web: conceitos básicos (cliente, servidor, HTTP), mapa mental e fluxo de apresentação.
	- Estrutura inicial de páginas HTML e primeiros exemplos. Materiais: `apresentacao.html`, notas e mapa mental.

- Semana 2 — Estrutura e introdução ao CSS
	- Elementos de estrutura HTML e introdução ao CSS: seletores, propriedades básicas e layout simples.
	- Exercícios práticos para fixar a separação entre estrutura (HTML) e estilo (CSS). Arquivos: `apresentacao-css.html`, `exercicios-css.html`, `exercicios-estrutura.html`.

- Semana 3 — Aprofundando HTML (semântica e boas práticas)
	- Revisão de elementos semânticos, organização de conteúdo e melhores práticas para marcar a página.
	- Discussões sobre acessibilidade e estrutura lógica do documento (assunção baseada nas apresentações `Aula 3.1` e `Aula 3.2`).

- Semana 4 — Revisão e tópicos avançados de layout
	- Consolidamos conteúdos prévios e vimos tópicos de layout e responsividade em nível introdutório (arquivo `apresentacao.html`).

- Semana 5 — Exercícios práticos e introdução ao comportamento (JavaScript básico)
	- Muitas atividades práticas: exercícios numerados e projetos pequenos.
	- Implementação de uma calculadora e outros exercícios que trabalham lógica, DOM e interação. Arquivos relevantes: `calculadora.html`, `exercicios.html` e a pasta `exercicios/` com vários exercícios.

## Como visualizar as aulas localmente

As aulas são páginas HTML simples; você pode abrir os arquivos diretamente no navegador clicando duas vezes neles. Para uma experiência melhor (por exemplo, para evitar problemas com fetch/ajax), recomendo rodar um servidor local simples.

Opções rápidas (PowerShell):

```powershell
# usando Python (se instalado)
python -m http.server 8000

# usando npx http-server (se tiver Node.js)
npx http-server . -p 8000
```

Depois abra no navegador: http://localhost:8000 e navegue até a pasta/arquivo desejado.

## Como contribuir / adicionar novo material

- Para adicionar uma nova aula, crie uma pasta `Semana X/Aula Y/` e coloque os arquivos `apresentacao.html` e `exercicios.html` quando houver.
- Mantenha nomes claros e consistência entre as pastas para facilitar navegação.

## Notas e suposições

- Os resumos semanais foram inferidos a partir dos nomes de arquivos e da organização das pastas; se quiser um resumo mais detalhado (por aula), posso abrir cada `apresentacao.html` e extrair tópicos principais.
- Se houver material adicional (assets, slides em PDF, imagens) que deva ser referenciado no README, me informe e atualizo.

## Licença e contato

Este repositório contém material didático do curso. Indique aqui a licença desejada (por exemplo, CC BY-SA ou outro) ou deixe em branco até definirmos. Para dúvidas ou atualizações, entre em contato com o responsável pelo curso.

---

Arquivo gerado automaticamente: resumo inicial do repositório. Posso detalhar por aula quando quiser — quer que eu gere um resumo extraindo títulos e seções diretamente dos `apresentacao.html` de cada pasta?

