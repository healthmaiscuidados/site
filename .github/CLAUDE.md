# GitHub & Deployment

## Configuração Git

### Branch Strategy

- **main/master**: Branch de produção
- **develop**: Branch de desenvolvimento (se aplicável)
- **feature/***: Branches de features

### Commit Messages

Seguir padrão conventional commits:

```
feat: adiciona nova página de serviços
fix: corrige menu mobile no Safari
style: ajusta espaçamento no footer
refactor: refatora componente Header
docs: atualiza documentação de ícones
chore: atualiza dependências
```

### .gitignore Essencial

Certifique-se que `.gitignore` inclui:
```
node_modules/
dist/
.env
.env.local
.DS_Store
*.log
.vscode/settings.json (se config pessoal)
```

## Deployment

### Build de Produção

```bash
pnpm build
```

**Output:** Gera pasta `/dist` com arquivos otimizados

**Checklist antes do deploy:**
- [ ] Rodar `pnpm lint` sem erros
- [ ] Testar `pnpm build` localmente
- [ ] Testar `pnpm preview` para validar build
- [ ] Verificar console do browser por warnings
- [ ] Testar em mobile (responsividade)

### Opções de Hosting

**Recomendados para este projeto:**

1. **Vercel** (Recomendado)
   - Deploy automático via Git
   - Configuração zero para Vite
   - HTTPS gratuito
   - Preview deployments

2. **Netlify**
   - Similar ao Vercel
   - Form handling integrado
   - Redirects simples

3. **GitHub Pages**
   - Gratuito para repositórios públicos
   - Requer configuração de base path no Vite

4. **Cloudflare Pages**
   - Performance excelente
   - CDN global

### Configuração Vercel

**vercel.json:**
```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Configuração Netlify

**netlify.toml:**
```toml
[build]
  command = "pnpm build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Variáveis de Ambiente

Se precisar adicionar variáveis de ambiente:

**Desenvolvimento (.env.local):**
```
VITE_API_URL=http://localhost:3000
VITE_CONTACT_EMAIL=novamaisad@gmail.com
```

**Produção:**
Configurar no painel do hosting provider (Vercel/Netlify)

**Uso no código:**
```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

## CI/CD (GitHub Actions)

### Workflow Sugerido

**.github/workflows/ci.yml:**
```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint
      - run: pnpm build
```

## SEO & Meta Tags

### Adicionar ao index.html

```html
<!-- Meta tags essenciais -->
<meta name="description" content="Nova Health+ - Internação domiciliar com equipe multidisciplinar. Cuidados intensivos humanizados no conforto do seu lar.">
<meta name="keywords" content="internação domiciliar, home care, cuidados intensivos, saúde domiciliar">

<!-- Open Graph (Facebook, WhatsApp) -->
<meta property="og:title" content="Nova Health+ - Internação Domiciliar">
<meta property="og:description" content="Cuidados intensivos humanizados no conforto do seu lar">
<meta property="og:type" content="website">
<meta property="og:url" content="https://seusite.com">
<meta property="og:image" content="https://seusite.com/og-image.jpg">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Nova Health+">
<meta name="twitter:description" content="Internação domiciliar com equipe multidisciplinar">
```

## Performance

### Otimizações Implementadas

- ✅ Vite com rolldown (build ultra-rápido)
- ✅ React Compiler (otimização automática)
- ✅ Tree-shaking de ícones
- ✅ Tailwind CSS purge automático
- ✅ Code splitting por rota (React Router)

### Otimizações Futuras

- [ ] Lazy loading de rotas com `React.lazy()`
- [ ] Otimização de imagens (WebP, lazy loading)
- [ ] Service Worker / PWA
- [ ] Preload de fonts críticas
- [ ] Analytics (Google Analytics, Plausible)

### Lazy Loading de Rotas

```tsx
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Sobre = lazy(() => import('./pages/Sobre'));

function App() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Suspense>
  );
}
```

## Analytics

### Google Analytics (GA4)

**Instalação:**
```bash
pnpm add -D @types/gtag.js
```

**index.html:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Tracking de Eventos

```tsx
// Exemplo: Rastrear cliques em botão WhatsApp
const handleWhatsAppClick = () => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'contact', {
      method: 'whatsapp',
      page: location.pathname
    });
  }
  // Link normal continua funcionando
};
```

## Manutenção

### Atualizar Dependências

```bash
# Verificar atualizações
pnpm outdated

# Atualizar minor/patch versions
pnpm update

# Atualizar versões específicas
pnpm update react react-dom

# Atualizar todas (cuidado!)
pnpm update --latest
```

### Auditoria de Segurança

```bash
pnpm audit
pnpm audit --fix  # Corrige automaticamente se possível
```

## Troubleshooting

### Build Falha

1. Limpar cache: `rm -rf node_modules/ pnpm-lock.yaml && pnpm install`
2. Verificar versões Node.js: mínimo v18
3. Checar erros de TypeScript: `pnpm tsc --noEmit`

### Vite Dev Server Lento

1. Adicionar ao vite.config.ts:
```ts
export default defineConfig({
  server: {
    fs: {
      strict: false // Se necessário
    }
  }
})
```

### CSS não Aplica

1. Verificar import no componente
2. Verificar ordem de imports (Tailwind primeiro)
3. Usar DevTools para inspecionar classes aplicadas
4. Verificar especificidade CSS
