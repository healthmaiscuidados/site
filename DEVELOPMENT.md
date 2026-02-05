# Guia de Desenvolvimento - Nova Health+

## Quick Start

```bash
# 1. Instalar dependências
pnpm install

# 2. Iniciar servidor de desenvolvimento
pnpm dev

# 3. Abrir no navegador
# http://localhost:5173
```

## Comandos Disponíveis

```bash
pnpm dev         # Servidor de desenvolvimento
pnpm build       # Build de produção
pnpm preview     # Preview do build localmente
pnpm lint        # Linting com ESLint
```

## Adicionando Nova Página

### 1. Criar arquivo da página

**src/pages/NovaPagina.tsx:**
```tsx
import { CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/NovaPagina.css'; // Opcional

const NovaPagina = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Título da Página
        </h1>
        <p className="text-text-light text-lg text-center max-w-2xl mx-auto">
          Descrição da página...
        </p>
      </div>
    </div>
  );
};

export default NovaPagina;
```

### 2. Criar CSS (se necessário)

**src/styles/NovaPagina.css:**
```css
/* Apenas se precisar de estilos customizados */
```

### 3. Adicionar rota

**src/App.tsx:**
```tsx
import NovaPagina from './pages/NovaPagina';

// Dentro de <Routes>:
<Route path="/nova-pagina" element={<NovaPagina />} />
```

### 4. Adicionar ao menu

**src/components/Header.tsx:**
```tsx
const navItems = [
  // ... itens existentes
  { path: '/nova-pagina', label: 'Nova Página' }
];
```

## Adicionando Novo Componente

### 1. Criar arquivo do componente

**src/components/NovoComponente.tsx:**
```tsx
import { IconName } from 'lucide-react';

interface NovoComponenteProps {
  title: string;
  description?: string;
}

const NovoComponente = ({ title, description }: NovoComponenteProps) => {
  return (
    <div className="bg-white rounded-lg shadow-custom-md p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {description && <p className="text-text-light">{description}</p>}
    </div>
  );
};

export default NovoComponente;
```

### 2. Importar e usar

```tsx
import NovoComponente from '../components/NovoComponente';

<NovoComponente title="Título" description="Descrição opcional" />
```

## Trabalhando com Ícones

### Adicionar novo ícone do Lucide

1. Buscar ícone em: https://lucide.dev/icons
2. Importar no componente:
```tsx
import { NomeDoIcone } from 'lucide-react';
```
3. Usar com padrão do projeto:
```tsx
<div className="w-14 h-14 flex items-center justify-center bg-accent rounded-full text-primary">
  <NomeDoIcone size={48} strokeWidth={2} />
</div>
```

### Adicionar ícone de marca (React Icons)

1. Buscar ícone em: https://react-icons.github.io/react-icons
2. Importar (exemplo FontAwesome):
```tsx
import { FaFacebook, FaInstagram } from 'react-icons/fa';
```
3. Usar:
```tsx
<FaFacebook size={24} className="text-primary" />
```

## Padrões de Cores

### Usando no Tailwind

```tsx
<div className="text-primary">      {/* #0066A1 */}
<div className="bg-secondary">      {/* #00A3E0 */}
<div className="bg-accent">         {/* #E8F4F8 */}
<div className="text-success">      {/* #28A745 */}
<div className="text-text-light">   {/* #6C757D */}
```

### Usando em CSS customizado

```css
.elemento {
  color: var(--color-primary);
  background: var(--color-accent);
}
```

### Paleta Completa

| Nome | Variável CSS | Hex | Uso |
|------|--------------|-----|-----|
| Primary | `--color-primary` | #0066A1 | Marca principal, CTAs |
| Primary Dark | `--color-primary-dark` | #004D7A | Hover states |
| Primary Light | `--color-primary-light` | #00A3E0 | Destaques |
| Secondary | `--color-secondary` | #00A3E0 | Elementos secundários |
| Accent | `--color-accent` | #E8F4F8 | Backgrounds suaves |
| Text | `--color-text` | #2C3E50 | Texto principal |
| Text Light | `--color-text-light` | #6C757D | Texto secundário |
| Success | `--color-success` | #28A745 | Checkmarks, validação |
| Error | `--color-error` | #DC3545 | Erros, avisos |
| WhatsApp | `--color-whatsapp` | #25D366 | Botões WhatsApp |

## Debug e Troubleshooting

### Dev Server não inicia

```bash
# Verificar se porta 5173 está em uso
netstat -ano | findstr :5173  # Windows

# Limpar node_modules e reinstalar
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Erros de TypeScript

```bash
# Verificar erros sem compilar
pnpm tsc --noEmit

# VSCode: Cmd+Shift+P > "TypeScript: Restart TS Server"
```

### CSS não aplica

1. Verificar se arquivo CSS está importado no componente
2. Inspecionar elemento no browser (DevTools)
3. Verificar ordem de imports (index.css deve vir primeiro)
4. Verificar especificidade CSS

### Ícones não aparecem

1. Verificar import correto:
```tsx
import { IconName } from 'lucide-react';  // Correto
import IconName from 'lucide-react';      // Errado
```

2. Verificar se ícone existe no Lucide
3. Checar console do browser por erros

### Build falha

```bash
# Limpar cache
rm -rf dist/ node_modules/.vite/

# Verificar TypeScript
pnpm tsc --noEmit

# Build com log detalhado
pnpm build --debug
```

## Testando Responsividade

### No Browser

1. Abrir DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Testar breakpoints:
   - Mobile: 375px, 414px
   - Tablet: 768px, 1024px
   - Desktop: 1280px, 1920px

### Checklist de Teste

- [ ] Menu mobile abre/fecha corretamente
- [ ] Navegação funciona em todas as páginas
- [ ] Imagens responsivas (não distorcidas)
- [ ] Texto legível em mobile
- [ ] Botões clicáveis (tamanho mínimo 44x44px)
- [ ] Scroll suave funciona
- [ ] Header fixo não sobrepõe conteúdo

## Performance

### Verificar Performance

```bash
# Build de produção
pnpm build

# Analisar bundle size
du -sh dist/assets/*  # Linux/Mac
dir dist\assets       # Windows

# Preview e testar
pnpm preview
```

### Lighthouse Audit

1. Abrir site em Chrome
2. DevTools > Lighthouse
3. Rodar audit (Performance, Accessibility, SEO)
4. Corrigir issues encontrados

### Metas de Performance

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Total Bundle Size**: < 200KB (gzipped)
- **Lighthouse Score**: > 90 em todas categorias

## Git Workflow

### Branches

```bash
# Criar nova feature
git checkout -b feature/nome-da-feature

# Commitar mudanças
git add .
git commit -m "feat: adiciona nova funcionalidade"

# Push para remote
git push origin feature/nome-da-feature
```

### Convenção de Commits

```
feat: nova funcionalidade
fix: correção de bug
style: mudanças de formatação/estilo
refactor: refatoração de código
docs: atualização de documentação
chore: tarefas de manutenção
perf: melhorias de performance
test: adição/correção de testes
```

## Extensões VSCode Recomendadas

- **ES7+ React/Redux/React-Native snippets** - Snippets React
- **Tailwind CSS IntelliSense** - Autocomplete Tailwind
- **TypeScript Vue Plugin (Volar)** - TypeScript support
- **ESLint** - Linting em tempo real
- **Prettier** - Formatação automática
- **Auto Rename Tag** - Renomeia tags HTML pares
- **Path Intellisense** - Autocomplete de paths

## Adicionando Dependências

```bash
# Produção
pnpm add nome-do-pacote

# Desenvolvimento
pnpm add -D nome-do-pacote

# Exemplos
pnpm add axios                    # HTTP client
pnpm add -D @types/node           # Types do Node.js
pnpm add framer-motion            # Animações
```

## Configurações Úteis

### VSCode settings.json

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["className\\s*=\\s*['\"`]([^'\"`]*)['\"`]", "([^'\"`]*)"]
  ]
}
```

## Recursos Adicionais

### Documentação

- [React 19 Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vite.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [React Router](https://reactrouter.com)

### Arquivos de Contexto Claude

Para melhor assistência do Claude Code, consulte:
- [CLAUDE.md](CLAUDE.md) - Visão geral do projeto
- [src/CLAUDE.md](src/CLAUDE.md) - Padrões de código
- [src/components/CLAUDE.md](src/components/CLAUDE.md) - Componentes
- [src/pages/CLAUDE.md](src/pages/CLAUDE.md) - Estrutura de páginas
- [src/styles/CLAUDE.md](src/styles/CLAUDE.md) - Guia de estilos
- [.github/CLAUDE.md](.github/CLAUDE.md) - Deploy e CI/CD

---

**Dúvidas?** Consulte os arquivos CLAUDE.md ou abra uma issue no repositório.
