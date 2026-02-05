# Componentes Globais

## Visão Geral

Este diretório contém componentes reutilizáveis usados em toda a aplicação.

## Componentes Existentes

### Header.tsx

**Propósito:** Navegação principal do site com menu responsivo.

**Features:**
- Navegação fixa no topo (`fixed top-0`)
- Logo "Health+" com link para home
- Menu horizontal (desktop) / hambúrguer (mobile)
- Shadow effect ao fazer scroll
- Active state visual na rota atual
- Fecha automaticamente ao navegar (mobile)

**State:**
- `isMenuOpen`: Controla abertura do menu mobile
- `isScrolled`: Detecta scroll para adicionar shadow

**Ícones:**
- `Menu` (lucide-react) - Botão abrir menu mobile
- `X` (lucide-react) - Botão fechar menu mobile

**Rotas:**
```tsx
{ path: '/', label: 'Início' }
{ path: '/sobre', label: 'Sobre' }
{ path: '/estrutura', label: 'Nossa Equipe' }
{ path: '/servicos', label: 'Serviços' }
{ path: '/contato', label: 'Contato' }
{ path: '/trabalhe-conosco', label: 'Trabalhe Conosco' }
```

**Estilo Responsivo:**
- Desktop: menu horizontal, sempre visível
- Mobile: menu slide-in da direita (70% largura, max 300px)
- Transição suave: `transition-all duration-300`

**Active Link Pattern:**
```tsx
className={`relative ... ${
  location.pathname === item.path
    ? 'text-primary after:w-full'  // Rota ativa
    : 'after:w-0 hover:after:w-full' // Rota inativa
}`}
```

---

### Footer.tsx

**Propósito:** Rodapé do site com informações da empresa.

**Conteúdo Esperado:**
- Informações da empresa
- Links rápidos
- Redes sociais
- Copyright

**Estilo:**
- Background escuro ou primário
- Texto claro/branco
- Layout em grid responsivo

---

### ScrollToTop.tsx

**Propósito:** Força scroll para topo ao navegar entre rotas.

**Implementação:**
```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
```

**Uso:** Incluído em `App.tsx` dentro do `<Router>`

---

## Padrões de Componentes

### 1. Card de Feature/Benefício

```tsx
<div className="bg-white rounded-lg shadow-custom-md p-8 hover:shadow-custom-lg transition-shadow">
  <div className="w-14 h-14 mx-auto mb-6 text-primary flex items-center justify-center bg-accent rounded-full">
    <IconName size={48} />
  </div>
  <h3 className="text-xl font-semibold mb-3 text-center">Título</h3>
  <p className="text-text-light text-center">Descrição...</p>
</div>
```

### 2. Lista com Checkmarks

```tsx
<ul className="space-y-3">
  <li className="flex items-start gap-3">
    <CheckCircle2 className="shrink-0 text-success mt-0.5" size={18} />
    <span className="text-text-light">Item da lista</span>
  </li>
</ul>
```

### 3. Botão WhatsApp

```tsx
<a
  href="https://wa.me/5567992155015"
  className="inline-flex items-center gap-2 bg-whatsapp text-white px-6 py-3 rounded-lg font-medium hover:bg-whatsapp-dark transition-colors"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp size={20} />
  Texto do Botão
</a>
```

### 4. Seção com Título e Subtítulo

```tsx
<section className="py-16 md:py-24">
  <div className="w-full max-w-[1200px] mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Título da Seção</h2>
      <p className="text-text-light text-lg max-w-2xl mx-auto">
        Subtítulo ou descrição da seção...
      </p>
    </div>
    {/* Conteúdo da seção */}
  </div>
</section>
```

## Convenções de Estilo

### CSS Scoped
Se um componente precisa de CSS customizado:
1. Criar arquivo `ComponentName.css` neste diretório
2. Importar no componente: `import './ComponentName.css'`
3. Usar classes específicas, evitar conflitos globais

### Tailwind First
Sempre preferir Tailwind utilities antes de CSS customizado:
- ✅ `className="flex items-center gap-4"`
- ❌ CSS customizado para layout simples

### Transições
Usar transições suaves em interações:
```tsx
className="transition-colors duration-200"      // Cor
className="transition-shadow duration-300"      // Sombra
className="transition-all duration-300"         // Múltiplas propriedades
className="transition-opacity duration-200"     // Opacidade
```

## Componentes que Faltam (Sugestões)

Considerar criar componentes reutilizáveis para:
- `Button.tsx` - Botão com variantes (primary, secondary, whatsapp)
- `Card.tsx` - Card base com variantes
- `Section.tsx` - Wrapper de seção com container
- `IconCard.tsx` - Card com ícone (padrão usado em várias páginas)
- `ContactButton.tsx` - Botão WhatsApp reutilizável
