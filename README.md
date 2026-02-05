# Site Institucional Health+

Site institucional da Health+, empresa especializada em atenção domiciliar de alta complexidade.

## Sobre o Projeto

Este site foi desenvolvido seguindo um briefing completo de requisitos funcionais e não funcionais, contemplando:

- **Estrutura completa de páginas**: Home, Sobre, Nossa Equipe, Serviços, Contato e Trabalhe Conosco
- **Design responsivo**: Otimizado para desktop, tablet e mobile
- **Acessibilidade**: Seguindo boas práticas WCAG
- **Performance**: Carregamento otimizado e código limpo
- **SEO**: Meta tags e estrutura semântica adequada

## Tecnologias Utilizadas

- **React 19.2** - Biblioteca JavaScript para interfaces com React Compiler
- **TypeScript 5.9** - Tipagem estática para JavaScript
- **Vite 7.2** (rolldown)- Build tool ultra-rápida e moderna
- **React Router DOM 7.13** - Navegação client-side entre páginas
- **Tailwind CSS 4.1** - Framework CSS utility-first
- **Lucide React** - Biblioteca de ícones moderna e otimizada
- **React Icons** - Ícones de marcas (WhatsApp, social media)

## Estrutura do Projeto

```
src/
├── components/         # Componentes reutilizáveis
│   ├── Header.tsx     # Cabeçalho com navegação
│   └── Footer.tsx     # Rodapé com informações
├── pages/             # Páginas do site
│   ├── Home.tsx       # Página inicial
│   ├── Sobre.tsx      # Sobre a Health+
│   ├── Estrutura.tsx  # Equipe multidisciplinar
│   ├── Servicos.tsx   # Serviços oferecidos
│   ├── Contato.tsx    # Formulário de contato
│   └── TrabalheConosco.tsx  # Vagas e candidaturas
├── styles/            # Arquivos CSS
│   ├── Common.css     # Estilos compartilhados
│   ├── Header.css     # Estilos do cabeçalho
│   ├── Footer.css     # Estilos do rodapé
│   └── [Page].css     # Estilos específicos de cada página
├── App.tsx            # Componente principal com rotas
├── main.tsx           # Ponto de entrada da aplicação
└── index.css          # Estilos globais e variáveis CSS
```

## Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- pnpm (ou npm/yarn)

### Instalação

```bash
# Instalar dependências
pnpm install

# Executar em modo de desenvolvimento
pnpm run dev

# Build para produção
pnpm run build

# Preview do build de produção
pnpm run preview
```

O site estará disponível em `http://localhost:5173` (ou outra porta se 5173 estiver em uso).

## Páginas do Site

### Home
- Hero section com proposta de valor
- Diferenciais (Gestão Inteligente, Atendimento 24h, Tecnologia, Logística)
- Desospitalização Segura
- Preview de Serviços
- CTAs estratégicos

### Sobre
- História da empresa
- Manifesto Health+
- Modelo de Desospitalização Segura
- Pilares de atuação
- Compromisso com humanização

### Nossa Equipe
- Apresentação da equipe multidisciplinar
- 9 especialidades detalhadas (Enfermagem, Fisioterapia, Fonoaudiologia, Psicologia, Nutrição, Odontologia, Farmácia, Serviço Social, Técnicos)
- Diferenciais da equipe

### Serviços
- Sistema de abas para 3 categorias:
  1. Visitas de Avaliação
  2. Sessões Terapêuticas
  3. Procedimentos de Enfermagem
- Diferenciais dos serviços
- Indicações de uso

### Contato
- Múltiplos canais (Telefone, Email, WhatsApp)
- Formulário de contato validado
- FAQ (Perguntas Frequentes)

### Trabalhe Conosco
- Benefícios de trabalhar na Health+
- Vagas abertas com requisitos
- Formulário de candidatura com upload de currículo
- Processo de seleção

## Recursos Implementados

### Design System
- Paleta de cores corporativa
- Tipografia hierárquica (Poppins para títulos, Inter para corpo)
- Espaçamentos consistentes
- Sistema de sombras e bordas arredondadas

### Componentes
- Navegação responsiva com menu mobile
- Cards informativos com hover effects
- Formulários com validação
- Botões com estados e animações
- Layout grid responsivo

### Otimizações
- **React Compiler** - Auto-memoização e otimizações automáticas de performance
- **Vite com Rolldown** - Build ultra-rápido e otimizado
- **Tree-shaking de ícones** - Apenas ícones usados no bundle final
- **Tailwind CSS purge** - Remove CSS não utilizado automaticamente
- **Code splitting** - Divisão de código por rotas
- **TypeScript strict mode** - Código fortemente tipado
- **Meta tags para SEO** - Otimização para motores de busca
- **Acessibilidade WCAG** - ARIA labels, navegação por teclado, semântica HTML

## Contato

Para mais informações sobre a Health+:
- **Email:** novamaisad@gmail.com
- **Telefone:** (67) 99215-5015
- **WhatsApp:** (67) 99215-5015

---

Desenvolvido com propósito e excelência técnica para a Health+
