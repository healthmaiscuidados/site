# Nova Health+ - Documentação do Projeto

## Visão Geral

**Nova Health+** é uma aplicação web institucional para um serviço de internação domiciliar (home care) focado em cuidados intensivos e atendimento humanizado.

## Stack Tecnológica

### Core
- **React 19.2.0** - Framework principal com suporte a React Compiler
- **TypeScript 5.9.3** - Type safety
- **Vite 7.2.5** (rolldown-vite) - Build tool e dev server
- **React Router DOM 7.13.0** - Navegação client-side

### Styling
- **Tailwind CSS 4.1.18** - Framework CSS utility-first
- **@tailwindcss/vite** - Plugin Vite para Tailwind
- CSS customizado por página em `src/styles/`

### Ícones
- **lucide-react 0.563.0** - Biblioteca principal (22 ícones únicos)
- **react-icons 5.5.0** - Para ícones específicos (FaWhatsapp)

### Build & Dev Tools
- **Babel React Compiler** - Otimizações automáticas de performance
- **ESLint 9.39.1** - Linting com TypeScript ESLint
- **pnpm** - Gerenciador de pacotes

## Estrutura do Projeto

```
nova/
├── src/
│   ├── components/       # Componentes reutilizáveis
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollToTop.tsx
│   ├── pages/            # Páginas da aplicação
│   │   ├── Home.tsx
│   │   ├── Sobre.tsx
│   │   ├── Estrutura.tsx
│   │   ├── Servicos.tsx
│   │   ├── Contato.tsx
│   │   └── TrabalheConosco.tsx
│   ├── styles/           # CSS específico por página
│   ├── App.tsx           # Componente raiz com rotas
│   ├── main.tsx          # Entry point
│   └── index.css         # Configuração global Tailwind + theme
├── public/               # Assets estáticos
├── vite.config.ts        # Configuração Vite
├── tsconfig.json         # Configuração TypeScript
└── package.json
```

## Sistema de Design

### Paleta de Cores

Definidas em `src/index.css` usando CSS custom properties:

```css
--color-primary: #0066A1        /* Azul escuro - marca principal */
--color-primary-dark: #004D7A   /* Azul mais escuro - hover states */
--color-primary-light: #00A3E0  /* Azul claro - destaques */

--color-secondary: #00A3E0      /* Azul claro - elementos secundários */
--color-accent: #E8F4F8         /* Azul muito claro - backgrounds de ícones */

--color-text: #2C3E50           /* Cinza escuro - texto principal */
--color-text-light: #6C757D     /* Cinza médio - texto secundário */

--color-success: #28A745        /* Verde - checkmarks, validação */
--color-error: #DC3545          /* Vermelho - erros */
--color-warning: #FFC107        /* Amarelo - avisos */

--color-whatsapp: #25D366       /* Verde WhatsApp */
--color-whatsapp-dark: #20BA5A  /* Verde WhatsApp hover */
```

### Tipografia

```css
--font-primary: Inter           /* Texto corpo */
--font-heading: Poppins         /* Títulos */
```

**Hierarquia de Títulos:**
- `h1`: 2.5rem / 3rem (mobile/desktop)
- `h2`: 1.875rem / 2.25rem
- `h3`: 1.5rem / 1.875rem
- `h4`: 1.25rem / 1.5rem
- `h5`: 1.125rem / 1.25rem
- `h6`: 1rem / 1.125rem

### Sombras

```css
--shadow-custom-sm: 0 2px 4px rgba(0, 0, 0, 0.05)
--shadow-custom-md: 0 4px 6px rgba(0, 0, 0, 0.07)
--shadow-custom-lg: 0 10px 25px rgba(0, 0, 0, 0.1)
--shadow-custom-xl: 0 20px 40px rgba(0, 0, 0, 0.15)
```

### Espaçamentos

```css
--spacing-xs: 0.5rem (8px)
--spacing-sm: 0.75rem (12px)
--spacing-md: 1rem (16px)
--spacing-lg: 1.5rem (24px)
--spacing-xl: 2rem (32px)
--spacing-2xl: 3rem (48px)
--spacing-3xl: 4rem (64px)
```

## Convenções de Código

### Componentes

1. **Formato**: Functional components com TypeScript
2. **Hooks**: useState, useEffect, useLocation (react-router)
3. **Export**: Default export no final do arquivo
4. **CSS**: Tailwind utility classes + CSS modules quando necessário

### Nomenclatura

- **Componentes**: PascalCase (`Header.tsx`, `ScrollToTop.tsx`)
- **Páginas**: PascalCase (`Home.tsx`, `TrabalheConosco.tsx`)
- **CSS**: PascalCase matching component (`Header.css`, `Home.css`)
- **Variáveis**: camelCase
- **Constantes**: camelCase para arrays/objects, UPPER_CASE para valores fixos

### Estrutura de Arquivo

```tsx
import { /* React hooks */ } from 'react';
import { /* Router hooks */ } from 'react-router-dom';
import { /* Lucide icons */ } from 'lucide-react';
import { /* React icons */ } from 'react-icons/fa';
import './ComponentName.css'; // Se necessário

const ComponentName = () => {
  // State e hooks
  // Event handlers
  // Effects

  return (
    // JSX com Tailwind classes
  );
};

export default ComponentName;
```

## Rotas da Aplicação

```tsx
/ → Home (página inicial)
/sobre → Sobre (missão, história, pilares)
/estrutura → Estrutura (equipe multidisciplinar)
/servicos → Serviços (pilares de cuidado)
/contato → Contato (informações de contato)
/trabalhe-conosco → Trabalhe Conosco (vagas e benefícios)
```

## Ícones

### Padrões de Uso

**Importação:**
```tsx
import { IconName } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
```

**Tamanhos Comuns:**
- Cards grandes (especialidades): `size={56}` + `strokeWidth={2}`
- Cards médios (benefícios): `size={32}` a `size={48}`
- Listas (checkmarks): `size={14}` a `size={20}`
- Menu mobile: `size={24}`

**Cores via Tailwind:**
- `text-primary` - Ícones principais (#0066A1)
- `text-success` - Checkmarks (#28A745)
- `text-text-light` - Ícones secundários (#6C757D)

**Padrão de Card com Ícone:**
```tsx
<div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 text-primary flex items-center justify-center bg-accent rounded-full">
  <IconName size={56} strokeWidth={2} />
</div>
```

### Ícones em Uso

**Lucide-react (22 ícones):**
- Activity, Award, BookOpen, Building2, CheckCircle2
- Clock, ClipboardCheck, Heart, Home, Mail
- MapPin, Menu, Mic, Phone, Pill
- PlusCircle, Shield, Stethoscope, TrendingUp
- UserCheck, Users, Utensils, X

**React-icons:**
- FaWhatsapp (botões de contato WhatsApp)

## Scripts de Desenvolvimento

```bash
pnpm dev      # Servidor de desenvolvimento (http://localhost:5173)
pnpm build    # Build de produção (TypeScript + Vite)
pnpm lint     # Linting com ESLint
pnpm preview  # Preview do build de produção
```

## Features Especiais

### React Compiler
O projeto usa **babel-plugin-react-compiler** para otimizações automáticas:
- Auto-memoização de componentes
- Otimização de re-renders
- Melhor performance sem useMemo/useCallback manual

### Scroll Behavior
- Smooth scroll ativado globalmente (`scroll-smooth`)
- `ScrollToTop` component: scroll to top em mudanças de rota
- Header com shadow effect ao fazer scroll

### Responsividade
- Mobile-first approach
- Breakpoints Tailwind: `sm` (640px), `md` (768px), `lg` (1024px)
- Menu hambúrguer em mobile, horizontal em desktop
- Layout max-width: 1200px (centralizado)

## Contato do Projeto

**Telefone:** (67) 99215-5015
**Email:** novamaisad@gmail.com
**WhatsApp:** Link direto para chat

## Notas Importantes

- **Não usar SVGs inline**: Sempre usar bibliotecas de ícones (lucide-react/react-icons)
- **Não criar arquivos CSS globais**: Usar Tailwind utilities + CSS scoped quando necessário
- **Manter consistência visual**: Seguir sistema de cores e espaçamentos definidos
- **Acessibilidade**: Incluir aria-labels em botões e elementos interativos
- **Performance**: React Compiler ativo, evitar otimizações manuais desnecessárias
