# Páginas da Aplicação

## Visão Geral

Cada arquivo neste diretório representa uma rota/página completa da aplicação.

## Estrutura das Páginas

Todas as páginas seguem este padrão:

```tsx
import { /* hooks */ } from 'react';
import { /* ícones */ } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/PageName.css'; // CSS específico (opcional)

const PageName = () => {
  return (
    <div className="page-container">
      {/* Seções da página */}
    </div>
  );
};

export default PageName;
```

## Páginas Existentes

### Home.tsx (`/`)

**Propósito:** Página inicial, apresentação dos serviços.

**Seções:**
1. Hero - Apresentação principal
2. Diferenciais - 4 cards (Presença Humana, Coordenação, Segurança, Cuidado Personalizado)
3. Perfil do Paciente - Lista com checkmarks
4. CTA WhatsApp

**Ícones usados:**
- Activity, Clock, Shield, MapPin (diferenciais)
- CheckCircle2 (lista de perfis)
- FaWhatsapp (botão CTA)

**CSS:** `src/styles/Home.css`

---

### Sobre.tsx (`/sobre`)

**Propósito:** Sobre a empresa, missão, história e pilares.

**Seções:**
1. Missão e história
2. Pilares de atuação (3 cards: Rede Pública, Particular, Convênios)

**Ícones usados:**
- Users (Rede Pública)
- Home (Atendimentos Particulares)
- Building2 (Parcerias com Convênios)

**CSS:** `src/styles/Sobre.css` (provavelmente)

---

### Estrutura.tsx (`/estrutura`)

**Propósito:** Apresentação da equipe multidisciplinar.

**Seções:**
1. Introdução à equipe
2. Grade de especialidades (9 cards)
3. Áreas de expertise com listas detalhadas

**Especialidades (com ícones):**
- Activity → Enfermagem
- Award → Fisioterapia
- Mic → Fonoaudiologia
- Heart → Psicologia
- Utensils → Nutrição
- Stethoscope → Medicina
- Pill → Farmácia
- Users → Serviço Social
- UserCheck → Técnicos de Enfermagem

**CSS:** `src/styles/Estrutura.css`

---

### Servicos.tsx (`/servicos`)

**Propósito:** Descrição dos serviços oferecidos.

**Seções:**
1. Introdução aos serviços
2. Pilares do cuidado (3 cards: Avaliação, Reabilitação, Cuidados Intensivos)
3. Lista de serviços específicos
4. CTA WhatsApp

**Ícones usados:**
- ClipboardCheck (Avaliação)
- Activity (Reabilitação)
- Users (Cuidados Intensivos)
- CheckCircle2 (lista de serviços)
- FaWhatsapp (botão CTA)

**CSS:** `src/styles/Servicos.css`

---

### Contato.tsx (`/contato`)

**Propósito:** Informações de contato da empresa.

**Seções:**
1. Título da página
2. Cards de contato (Telefone, Email, Horário)
3. Botão WhatsApp destacado
4. Mapa (se implementado)

**Informações:**
- Telefone: (67) 99215-5015
- Email: novamaisad@gmail.com
- Horário: Segunda a Sexta, 8h às 18h

**Ícones usados:**
- Phone (contato telefônico)
- Mail (email)
- Clock (horário)
- FaWhatsapp (botão principal)

**CSS:** `src/styles/Contato.css`

---

### TrabalheConosco.tsx (`/trabalhe-conosco`)

**Propósito:** Página de recrutamento e vagas.

**Seções:**
1. Introdução "Junte-se ao nosso time"
2. Benefícios (4 cards)
3. Requisitos/Perfil desejado (lista com checkmarks)
4. Formulário de candidatura ou CTA

**Benefícios (com ícones):**
- BookOpen → Capacitação Contínua
- Users → Equipe Multidisciplinar
- PlusCircle → Ambiente e Reconhecimento
- TrendingUp → Crescimento Profissional

**Ícones usados:**
- BookOpen, Users, PlusCircle, TrendingUp (benefícios)
- CheckCircle2 (requisitos)

**CSS:** `src/styles/TrabalheConosco.css`

---

## Padrões de Layout

### Container Padrão

Todas as páginas devem usar container centralizado:

```tsx
<div className="w-full max-w-[1200px] mx-auto px-6">
  {/* Conteúdo */}
</div>
```

### Seção com Padding Vertical

```tsx
<section className="py-16 md:py-24">
  {/* Conteúdo da seção */}
</section>
```

### Hero Section

```tsx
<section className="pt-24 pb-16 md:pt-32 md:pb-24">
  <div className="w-full max-w-[1200px] mx-auto px-6">
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Título Principal
      </h1>
      <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto">
        Descrição...
      </p>
    </div>
  </div>
</section>
```

### Grid de Cards

**3 colunas:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Cards */}
</div>
```

**2 colunas:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Cards */}
</div>
```

## Padrão de Título de Seção

```tsx
<div className="text-center mb-12">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">
    Título da Seção
  </h2>
  <p className="text-text-light text-lg max-w-2xl mx-auto">
    Subtítulo ou descrição breve da seção
  </p>
</div>
```

## CTA (Call to Action) WhatsApp

Padrão usado no final de várias páginas:

```tsx
<section className="py-16 bg-accent">
  <div className="w-full max-w-[1200px] mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Entre em Contato
    </h2>
    <p className="text-text-light text-lg mb-8 max-w-2xl mx-auto">
      Estamos prontos para atender você e sua família
    </p>
    <a
      href="https://wa.me/5567992155015"
      className="inline-flex items-center gap-2 bg-whatsapp text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-whatsapp-dark transition-colors shadow-custom-md hover:shadow-custom-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={24} />
      Fale Conosco pelo WhatsApp
    </a>
  </div>
</section>
```

## CSS Específico de Página

Cada página pode ter CSS customizado em `src/styles/`:

```
src/styles/
├── Common.css          # Estilos compartilhados
├── Header.css          # Estilos do header
├── Footer.css          # Estilos do footer
├── Home.css            # Específico da Home
├── Servicos.css        # Específico de Serviços
├── Estrutura.css       # Específico de Estrutura
├── Contato.css         # Específico de Contato
└── TrabalheConosco.css # Específico de Trabalhe Conosco
```

**Quando usar CSS customizado:**
- Animações complexas não cobertas por Tailwind
- Estilos específicos que se repetem muito na página
- Pseudo-elementos complexos
- Media queries muito específicas

**Preferir Tailwind quando:**
- Layout (flexbox, grid)
- Espaçamento (margin, padding)
- Cores e tipografia
- Responsive design básico
- Transições simples

## Convenções

1. **Importar CSS**: Sempre após imports de bibliotecas, antes do componente
2. **Estrutura semântica**: Usar `<section>`, `<article>`, `<aside>` apropriadamente
3. **Acessibilidade**: aria-labels em elementos interativos sem texto
4. **Links externos**: Sempre com `target="_blank" rel="noopener noreferrer"`
5. **Padding do topo**: Considerar altura do header fixo (`pt-24` ou mais)

## Criando Nova Página

**Checklist:**
1. Criar `src/pages/NovaPagina.tsx`
2. Criar `src/styles/NovaPagina.css` (se necessário)
3. Adicionar rota em `App.tsx`:
   ```tsx
   <Route path="/nova-pagina" element={<NovaPagina />} />
   ```
4. Adicionar link no `Header.tsx` navItems array
5. Seguir padrões de layout e componentes documentados
6. Incluir CTA WhatsApp ao final (se aplicável)
7. Testar responsividade (mobile, tablet, desktop)
