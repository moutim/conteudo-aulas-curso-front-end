// nav.js — injeta um cabeçalho de navegação em todas as páginas
(function() {
  try {
    // evita duplicar
    if (document.getElementById('global-nav')) return;

    // função para calcular o caminho relativo
    function getRelativePath() {
      const isGitHubPages = window.location.hostname.includes('github.io');
      const repoName = 'conteudo-aulas-curso-front-end';
      
      if (isGitHubPages) {
        // No GitHub Pages, sempre usar o caminho completo a partir da raiz do repositório
        return `/${repoName}/`;
      } else {
        // Localmente, usar caminhos relativos
        const path = window.location.pathname;
        const parts = path.split('/');
        const depth = parts.length - 1;
        return depth > 1 ? '../'.repeat(depth - 1) : './';
      }
    }

    // Dados das semanas e seus links (ajuste aqui se precisar adicionar/editar)
    const weeks = {
      'Semana 1': [
        { l: 'Aula 1: Fundamentos da Web', h: 'Semana 1/Aula 1.1/apresentacao.html' },
        { l: 'Aula 2: Front-End vs. Back-End', h: 'Semana 1/Aula 1.2/apresentacao.html' },
        { l: 'Aula 3: Protocolos e Navegadores', h: 'Semana 1/Aula 1.3/apresentacao.html' },
        { l: 'Aula 4: As Linguagens da Web', h: 'Semana 1/Aula 1.4/apresentacao.html' },
        { l: 'Aula 5: O Mercado de Trabalho Front-End', h: 'Semana 1/Aula 1.5/apresentacao.html' },
        { l: 'Módulo 1: Fundamentos do Desenvolvimento Web (Completo)', h: 'Semana 1/Resumo primeira semana/apresentacao.html' }
      ],
      'Semana 2': [
        { l: 'Aula 6: Primeiros Passos com HTML', h: 'Semana 2/Aula 2.1/apresentacao.html' },
        { l: 'Aula 7: Introdução ao CSS', h: 'Semana 2/Aula 2.1/apresentacao-css.html' },
        { l: 'Exercícios de Estrutura com HTML', h: 'Semana 2/Aula 2.1/exercicios-estrutura.html' },
        { l: 'Exercícios de Estilização com CSS', h: 'Semana 2/Aula 2.1/exercicios-css.html' }
      ],
      'Semana 3': [
        { l: 'Aula 9: Introdução ao Git e GitHub', h: 'Semana 3/Aula 3.1/apresentacao.html' },
        { l: 'Aula 10: Git na Linha de Comando', h: 'Semana 3/Aula 3.2/apresentacao.html' }
      ],
      'Semana 4': [
        { l: 'Semana 4: Mão na Massa com Projetos', h: 'Semana 4/apresentacao.html' }
      ],
      'Semana 5': [
        { l: 'Aula 11: Introdução à Lógica de Programação', h: 'Semana 5/Aula 5.1/apresentacao.html' },
        { l: 'Exercícios de Lógica de Programação', h: 'Semana 5/Aula 5.1/exercicios.html' },
        { l: 'Exercícios de Lógica com Exemplos - Parte 2', h: 'Semana 5/Aula 5.2/exercicios.html' },
        { l: 'Aula 12: Estruturas de Dados e Laços de Repetição', h: 'Semana 5/Aula 5.3/apresentacao.html' },
        { l: 'Exercícios: Vetores e Laços', h: 'Semana 5/Aula 5.3/exercicios.html' },
        { l: "Aula 13: O Laço 'enquanto' (while)", h: 'Semana 5/Aula 5.4/apresentacao.html' },
        { l: "Exercícios: Praticando o Laço 'enquanto'", h: 'Semana 5/Aula 5.4/exercicios.html' },
        { l: 'Desafio Final: Menu Interativo', h: 'Semana 5/Aula 5.4/calculadora.html' },
        { l: 'Aula 14: Funções e Parâmetros', h: 'Semana 5/Aula 5.5/apresentacao.html' },
        { l: 'Exercícios: Praticando com Funções', h: 'Semana 5/Aula 5.5/exercicios.html' }
      ],
      'Semana 6': [
        { l: 'Aula 15: Introdução ao JavaScript', h: 'Semana 6/Aula 6.1/apresentacao.html' },
        { l: 'Exercícios de Lógica com JavaScript', h: 'Semana 6/Aula 6.1/exercicios.html' },
        { l: 'Aula 16: Manipulando o DOM', h: 'Semana 6/Aula 6.2/apresentacao.html' },
        { l: 'Exercícios para manipulação do DOM', h: 'Semana 6/Aula 6.2/exercicios.html' },
        { l: 'Lista de exemplos', h: 'Semana 6/Aula 6.2/exercicios/lista-exs/index.html' },
        { l: 'Aula 17: Criação do Todo List', h: 'Semana 6/Aula 6.3/apresentacao.html' },
        { l: 'Aula 18: LocalStorage', h: 'Semana 6/Aula 6.4/apresentacao.html' },
        { l: 'Exercícios: LocalStorage', h: 'Semana 6/Aula 6.4/exercicios/localstorage.html' }
      ],
      'Semana 7': [
        { l: 'Aula 19: Revisão Geral dos Fundamentos', h: 'Semana 7/apresentacao.html' },
        { l: 'Desafio: Meu Orçamento Pessoal', h: 'Semana 7/desafio.html' }
      ]
    };

    // cria estilos para menu e submenu
  const style = document.createElement('style');
  style.textContent = `
#global-nav{z-index:60}
.nav-wrapper{display:flex;justify-content:center;align-items:center;gap:1rem;width:100%;}
.nav-items{display:flex;gap:0.5rem;align-items:center;justify-content:center}
.week-item{position:relative}
.week-link{color:#E5E7EB;padding:0.35rem 0.6rem;border-radius:6px;text-decoration:none;display:inline-block}
.week-link:hover{background:rgba(232,1,112,0.08);color:#fff}
.submenu{position:absolute;top:calc(100% + 6px);left:0;background:#0f1720;border:1px solid rgba(255,255,255,0.04);padding:0.5rem;border-radius:6px;display:none;min-width:200px;box-shadow:0 6px 18px rgba(2,6,23,0.6)}
.submenu a{display:block;color:#E5E7EB;padding:0.35rem 0.5rem;border-radius:4px;text-decoration:none}
.submenu a:hover{background:rgba(255,255,255,0.03)}
.week-item:hover > .submenu{display:block}
@media (max-width:800px){.submenu{position:static;display:none}.week-item.open > .submenu{display:block}}
`;
    document.head.appendChild(style);

    // constrói o container do nav
    const container = document.createElement('div');
    container.id = 'global-nav';
    container.className = 'global-nav';

    const wrapper = document.createElement('div');
    wrapper.className = 'nav-wrapper';

    // itens principais (índice e grupos)
    const items = document.createElement('div');
    items.className = 'nav-items';

    const makeSimpleLink = (text, href) => {
      const a = document.createElement('a');
      a.className = 'week-link';
      a.href = href;
      a.textContent = text;
      return a;
    };

    items.appendChild(makeSimpleLink('Índice', '/index.html'));
    items.appendChild(makeSimpleLink('Grupos', '/Grupos/grupos.html'));

    // cria item por semana com submenu
    Object.keys(weeks).forEach(weekName => {
      const weekItem = document.createElement('div');
      weekItem.className = 'week-item';

      const weekLink = document.createElement('a');
      weekLink.className = 'week-link';
      weekLink.href = weeks[weekName][0] ? weeks[weekName][0].h : '/index.html';
      weekLink.textContent = weekName;
      weekItem.appendChild(weekLink);

      const submenu = document.createElement('div');
      submenu.className = 'submenu';

      weeks[weekName].forEach(entry => {
        const sa = document.createElement('a');
        sa.href = entry.h;
        sa.textContent = entry.l;
        submenu.appendChild(sa);
      });

      weekItem.appendChild(submenu);
      items.appendChild(weekItem);
    });

    wrapper.appendChild(items);
    container.appendChild(wrapper);

    // tenta colocar dentro do header principal. Se não existir, insere no topo do body (fallback)
    const header = document.querySelector('header');
    if (header) {
      // coloca no final do header para não sobrescrever conteúdo existente
      header.appendChild(container);

      // mobile: permite abrir submenu ao tocar
      header.addEventListener('click', (e) => {
        const wi = e.target.closest('.week-item');
        if (!wi) return;
        // toggle apenas em telas pequenas
        if (window.innerWidth <= 800) {
          e.preventDefault();
          wi.classList.toggle('open');
        }
      });
    } else {
      if (document.body.firstChild) {
        document.body.insertBefore(container, document.body.firstChild);
      } else {
        document.body.appendChild(container);
      }
    }

    // destaca link ativo (opcional) comparando pathname
    try {
      const path = location.pathname.replace(/\\/g, '/');
      const links = container.querySelectorAll('a');
      links.forEach(a => {
        if (a.href && a.href.endsWith(path)) {
          a.style.background = 'rgba(232,1,112,0.14)';
          a.style.color = '#fff';
        }
      });
    } catch (e) {}

  } catch (e) {
    console.error('Erro ao injetar nav:', e);
  }
})();
