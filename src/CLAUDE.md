# Diretório /src - Código Fonte

## Estrutura

```
src/
├── components/          # Componentes reutilizáveis globais
├── pages/              # Componentes de página (um por rota)
├── styles/             # CSS específico por página/componente
├── App.tsx             # Componente raiz, define rotas
├── main.tsx            # Entry point da aplicação
└── index.css           # Configuração global Tailwind + design system
```

## Padrões de Código

### Imports

**Ordem recomendada:**
1. React e hooks
2. React Router
3. Bibliotecas de terceiros
4. Componentes locais
5. Ícones (lucide-react, react-icons)
6. CSS

```tsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconName } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './ComponentName.css';
```

### TypeScript

- **Props**: Sempre definir tipos para props de componentes
- **State**: Inferência automática quando possível, tipos explícitos quando necessário
- **Events**: Usar tipos nativos do React (`React.MouseEvent`, `React.FormEvent`, etc.)

### Tailwind CSS

**Classes Comuns:**
```tsx
// Container centralizado
className="w-full max-w-[1200px] mx-auto px-6"

// Card com sombra
className="bg-white rounded-lg shadow-custom-md p-6"

// Ícone circular
className="w-14 h-14 flex items-center justify-center bg-accent rounded-full text-primary"

// Botão primário
className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"

// Grid responsivo
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
```

**Custom Classes (definidas em index.css):**
- `font-primary` - Inter font
- `font-heading` - Poppins font
- `text-primary` - Cor primária (#0066A1)
- `text-secondary` - Cor secundária (#00A3E0)
- `bg-accent` - Background azul claro (#E8F4F8)
- `shadow-custom-sm/md/lg/xl` - Sombras customizadas

### Estado e Efeitos

**useState:**
```tsx
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);
```

**useEffect para eventos:**
```tsx
useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

**useEffect para navegação:**
```tsx
const location = useLocation();

useEffect(() => {
  // Ações ao mudar de rota
}, [location]);
```

## Ícones

### Convenção de Uso

1. **Lucide-react** para ícones de interface gerais
2. **React-icons** para ícones de marcas (WhatsApp, social media)

### Padrões Visuais

**Ícone de Card:**
```tsx
<div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 text-primary flex items-center justify-center bg-accent rounded-full">
  <Activity size={56} strokeWidth={2} />
</div>
```

**Ícone de Lista (Checkmark):**
```tsx
<CheckCircle2 className="shrink-0 text-success mt-0.5" size={18} />
```

**Ícone de Seção de Contato:**
```tsx
<div className="shrink-0 w-14 h-14 flex items-center justify-center bg-accent rounded-full text-primary">
  <Phone size={32} />
</div>
```

**Botão WhatsApp:**
```tsx
<a
  href="https://wa.me/5567992155015"
  className="inline-flex items-center gap-2 bg-whatsapp text-white px-6 py-3 rounded-lg hover:bg-whatsapp-dark transition-colors"
>
  <FaWhatsapp size={20} />
  Fale Conosco
</a>
```

## Responsividade

### Breakpoints (Tailwind padrão)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Abordagem Mobile-First

Sempre escrever CSS mobile-first, depois adicionar breakpoints:
```tsx
// Mobile: coluna única, Desktop: 3 colunas
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

// Mobile: texto pequeno, Desktop: texto grande
className="text-4xl md:text-5xl"

// Mobile: padding 4, Desktop: padding 8
className="p-4 md:p-8"
```

## Acessibilidade

### Regras Obrigatórias

1. **Botões sem texto visível**: sempre incluir `aria-label`
```tsx
<button aria-label="Abrir menu" onClick={toggleMenu}>
  <Menu size={24} />
</button>
```

2. **Links externos**: incluir `target="_blank"` + `rel="noopener noreferrer"`

3. **Imagens decorativas**: usar `aria-hidden="true"` em ícones decorativos

4. **Navegação**: usar elementos semânticos (`<nav>`, `<header>`, `<footer>`, `<main>`)

## Performance

### Otimizações Ativas

- ✅ React Compiler (auto-memoização)
- ✅ Lazy loading de rotas (considerar implementar)
- ✅ Tree-shaking de ícones (só bundle ícones usados)
- ✅ CSS utility-first (Tailwind com purging automático)
- ✅ Vite com rolldown (build otimizado)

### Evitar

- ❌ Otimizações prematuras (React Compiler cuida disso)
- ❌ useMemo/useCallback excessivo
- ❌ Inline styles (usar Tailwind)
- ❌ Importar bibliotecas inteiras de ícones

## Informações de Contato (Produção)

**Telefone:** (67) 99215-5015
**Email:** novamaisad@gmail.com
**WhatsApp:** https://wa.me/5567992155015

## Comandos Úteis

```bash
# Desenvolvimento
pnpm install          # Instalar dependências
pnpm dev              # Iniciar servidor dev (porta 5173)

# Build
pnpm build            # Build de produção (gera /dist)
pnpm preview          # Preview do build local

# Qualidade
pnpm lint             # Rodar ESLint
```

## Próximos Passos Sugeridos

- [ ] Adicionar testes (Vitest + React Testing Library)
- [ ] Implementar lazy loading de rotas
- [ ] Adicionar meta tags SEO
- [ ] Configurar PWA (se necessário)
- [ ] Adicionar analytics (Google Analytics, etc.)
