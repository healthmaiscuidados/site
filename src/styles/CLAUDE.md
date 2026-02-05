# Estilos CSS Customizados

## Visão Geral

Este diretório contém arquivos CSS específicos para páginas e componentes, complementando as utility classes do Tailwind CSS.

## Filosofia de Estilo

1. **Tailwind First**: Sempre preferir utility classes do Tailwind
2. **CSS Scoped**: CSS customizado apenas quando absolutamente necessário
3. **Mobile-first**: Escrever estilos para mobile, depois adicionar breakpoints
4. **Performance**: Evitar seletores complexos e CSS desnecessário

## Arquivos CSS Existentes

```
styles/
├── Common.css          # Estilos compartilhados entre páginas
├── Header.css          # Estilos específicos do Header
├── Footer.css          # Estilos específicos do Footer
├── Home.css            # Página Home
├── Servicos.css        # Página Serviços
├── Estrutura.css       # Página Estrutura
├── Contato.css         # Página Contato
└── TrabalheConosco.css # Página Trabalhe Conosco
```

## Quando Usar CSS Customizado

### ✅ Casos Apropriados

1. **Animações complexas** não cobertas por Tailwind
```css
@keyframes slideInFromRight {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.slide-in {
  animation: slideInFromRight 0.3s ease-out;
}
```

2. **Pseudo-elementos complexos** (::before, ::after)
```css
.underline-effect::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  transition: width 0.3s ease;
}

.underline-effect:hover::after {
  width: 100%;
}
```

3. **Padrões repetitivos específicos** da página
```css
.feature-grid-item {
  /* Estilos complexos específicos desta página */
}
```

4. **Integração com bibliotecas** que requerem CSS customizado

### ❌ Evitar CSS para

1. **Layout básico** - Use Tailwind
```tsx
// ✅ Correto
<div className="flex items-center justify-between gap-4">

// ❌ Evitar
<div className="custom-layout">
.custom-layout { display: flex; align-items: center; ... }
```

2. **Cores e tipografia** - Use design tokens do Tailwind
```tsx
// ✅ Correto
<h2 className="text-primary font-heading text-3xl">

// ❌ Evitar
<h2 className="custom-title">
.custom-title { color: #0066A1; font-family: Poppins; ... }
```

3. **Espaçamento** - Use Tailwind utilities
```tsx
// ✅ Correto
<section className="py-16 px-6 md:py-24">

// ❌ Evitar
<section className="custom-section">
.custom-section { padding: 4rem 1.5rem; }
```

## Acessando Design Tokens

### No CSS

Use variáveis CSS definidas em `src/index.css`:

```css
.custom-element {
  color: var(--color-primary);
  background: var(--color-accent);
  font-family: var(--font-heading);
  box-shadow: var(--shadow-custom-md);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  transition: var(--transition-normal);
}
```

### No JSX (Tailwind)

```tsx
<div className="text-primary bg-accent font-heading shadow-custom-md p-lg rounded-md">
```

## Responsividade

### Breakpoints

Usar breakpoints do Tailwind em CSS:

```css
/* Mobile first */
.element {
  font-size: 1rem;
}

/* Tablet (md: 768px) */
@media (min-width: 768px) {
  .element {
    font-size: 1.25rem;
  }
}

/* Desktop (lg: 1024px) */
@media (min-width: 1024px) {
  .element {
    font-size: 1.5rem;
  }
}
```

**Preferir Tailwind responsive classes quando possível:**
```tsx
<p className="text-base md:text-lg lg:text-xl">
```

## Convenções de Nomenclatura

### Classes CSS

- **kebab-case**: `feature-card`, `hero-section`
- **BEM (opcional)**: `card__title`, `card--featured`
- **Descritivo**: Nomes claros que descrevem propósito

### Arquivo CSS

- **PascalCase**: Nome deve corresponder ao componente/página
- Exemplo: `Home.tsx` → `Home.css`

## Organização do Arquivo CSS

```css
/* ==========================================
   COMPONENTE/PÁGINA NAME
   ========================================== */

/* Variáveis locais (se necessário) */
.page-name {
  --local-spacing: 2rem;
}

/* Estilos principais */
.main-element {
  /* ... */
}

/* Variantes */
.main-element--variant {
  /* ... */
}

/* Estados */
.main-element:hover,
.main-element:focus {
  /* ... */
}

/* Responsividade */
@media (min-width: 768px) {
  .main-element {
    /* ... */
  }
}

/* Animações */
@keyframes animationName {
  /* ... */
}
```

## Melhores Práticas

1. **Evite !important**: Estruture CSS para não precisar
2. **Especificidade baixa**: Use classes simples, evite seletores profundos
3. **Reutilização**: Se estilo se repete 3+ vezes, considere Tailwind ou componente
4. **Comentários**: Documente CSS complexo ou não-óbvio
5. **Performance**: Evite seletores universais (*), descendentes profundos
6. **Dark mode**: Considerar suporte futuro usando Tailwind dark: variant

## Migração de CSS para Tailwind

Se encontrar CSS customizado que pode ser Tailwind:

```css
/* ❌ CSS customizado */
.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
}
```

```tsx
{/* ✅ Tailwind utilities */}
<div className="flex flex-col gap-4 p-8 bg-white rounded-lg shadow-custom-md">
```

**Benefícios:**
- Menos arquivos CSS para manter
- Estilos inline no JSX (melhor DX)
- Tree-shaking automático
- Consistência com design system
