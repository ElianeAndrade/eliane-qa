# Portfólio

Portfólio desenvolvido em React + Vite, com foco em apresentar minha trajetória como QA Automation Engineer de forma visual e interativa.

A aplicação utiliza um formato em árvore para representar minha evolução profissional, destacando experiências com testes manuais, automação, APIs, desenvolvimento e qualidade de software.

## Como rodar

```bash
npm install
npm run dev
```

Abre em [http://localhost:5173](http://localhost:5173).


## Build para produção

```bash
npm run build
npm run preview
```

## Estrutura

- `src/App.jsx` — composição da página
- `src/components/` — Header, Hero, Trajetoria, TreeNode, Footer, Noise
- `src/data/projects.js` — lista de projetos (edite aqui sua trajetória)
- `src/index.css` — estilos globais

Para alterar sua experiência: edite o array `projects` em `src/data/projects.js`.
