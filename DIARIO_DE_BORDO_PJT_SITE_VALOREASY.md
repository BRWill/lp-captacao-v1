# Diário de Bordo — PJT_SITE_VALOREASY

---

## 02/05/2026 — Início do projeto

- Projeto inicializado com estrutura padrão (git main/feature, CLAUDE.md, .gitignore, README.md).
- Escopo ainda não definido — aguardando briefing do Will.

---
# HANDOFF · Site Valoreasy · LP de alta conversão
Data: 03/05/2026

## 1. Entregas realizadas (Claude Design)

1. **Sitemap** com documento de referência `Sitemap Valoresy.html` salvo nos artefatos
2. **Comparativo Concorrentes** com documento de referência `Comparativo Concorrentes.html` salvo nos artefatos
3. **Novo framework** estrutura dual (LP de conversão + Site Institucional) com documento de referência `Framework Nova Estrutura.html` salvo nos artefatos
4. **Wireframe** + **Copy da LP** com documento de referência `LP Wireframe v3.html` salvo nos artefatos
5. **Sistema Visual** com documento de referência: `Brand Guidelines.html` (e versão standalone offline). Já há um sistema visual definido — paleta, tipografia, componentes — pronto para aplicar na LP em alta fidelidade.

---

## 2. Pendências do cliente para destravar implementação

1. **Validar conceito-marca** "Departamento de verdade" (aprovado, mas confirmar antes de implementar).
2. **Curar 12–18 logos** de clientes para o logo wall.
3. **Print do perfil Google** + link direto para reviews.
4. **3 reviews em destaque** com nome, empresa, data.
5. **Números reais** para o bloco de autoridade: CNPJs ativos, R$ sob gestão, anos de operação, cidades.
6. **Faixa de preço** por escrito para o FAQ ("começa em R$ X.XXX/mês").

---

## 3. Próximos passos sugeridos (em ordem)

1. **Mockup hi-fi da LP completa** com o conceito "Departamento de verdade" aplicado em design final (paleta, fontes, ilustrações ou fotos).
2. **A/B test de hero**: "Departamento de verdade" vs. alternativa funcional.
3. **Páginas internas do site institucional** (/sobre, /cases, /como-funciona) seguindo o mesmo sistema visual.
4. **Hub /materiais** redesenhado para destravar SEO das 10 ferramentas existentes.
5. **Reformulação da home** institucional aplicando os achados (tabela contrastiva, footer, contadores).

---

## 10. Inventário de arquivos no projeto

| Arquivo | Função |
|---|---|
| `Sitemap Valoreasy.html` | Auditoria inicial — 16 páginas + 8 achados |
| `Comparativo Concorrentes.html` | Valoreasy vs. Libertas/Marvee/Track |
| `Framework Nova Estrutura.html` | Modelo dual LP + site + roadmap em 3 ondas |
| `LP Wireframe.html` | V1 do wireframe (11 blocos, conceito "CFO acidental") |
| `Ajustes LP v2.html` | Iteração com bloco de autoridade + alternativas ao conceito |
| `Conceito Marca v3.html` | 4 territórios de marca + recomendação "Departamento" |
| `LP Wireframe v3.html` | **Versão final** — 12 blocos, conceito "Departamento de verdade" aplicado |
| `Brand Guidelines.html` | Sistema visual da marca |
| `Brand Guidelines (standalone).html` | Versão offline do guideline |

---

## 11. Como retomar em uma nova conversa

Cole este resumo (ou anexe o arquivo `RESUMO DO PROJETO.md`) e peça o próximo passo desejado. Os HTMLs do projeto podem ser referenciados pelos seus nomes — todos estão no diretório raiz.

**Sugestão de prompt inicial para nova conversa:**

> Tenho um projeto avançado para a Valoreasy (BPO Financeiro). Já temos: diagnóstico do site, análise competitiva, framework de nova arquitetura (LP + site institucional), conceito-marca "Departamento Financeiro de Verdade" aprovado e wireframe completo da LP /comecar com 12 blocos e copy final em `LP Wireframe v3.html`. Brand Guidelines em `Brand Guidelines.html`. Quero agora **[próximo passo]**.

---

## 03/05/2026 — Planejamento e configuração de infraestrutura

### Decisões tomadas

- **Conceito-marca confirmado:** "Departamento Financeiro de Verdade" — aprovado para implementação.
- **Domínio da LP:** `lp.valoreasy.com.br` (subdomínio no Coolify/DigitalOcean). DNS a configurar no Hostgator cPanel com registro A apontando para o IP do Coolify.
- **CRM de leads:** RD Station — formulário embed + WhatsApp com UTM → leads entram diretamente no CRM monitorado pela equipe de vendas.
- **Stack da LP:** HTML5 + CSS3 custom + Vanilla JS (sem frameworks). Deploy via Coolify, branch `main`.
- **Fase 2 (site institucional):** permanece no WordPress/Hostgator.

### Plano de execução aprovado

**Fase 1 — LP de Alta Conversão (`lp.valoreasy.com.br`)**
- 12 blocos conforme `LP Wireframe v3.html`
- Brand Guidelines aplicados (Fraunces + Geist, paleta oklch)
- Mobile-first, CTA flutuante no rodapé mobile
- Build com placeholders → dados reais substituídos antes do go-live

**Fase 2 — Reformulação do Site WordPress**
- Onda 2: /sobre, /cases, /como-funciona, hub /materiais
- Onda 3: páginas de serviço, home reformulada, trail de nutrição

### Inputs ainda pendentes (bloqueiam go-live, não o desenvolvimento)

| # | Item |
|---|---|
| 1 | Métricas reais: CNPJs ativos, R$ sob gestão, anos, cidades |
| 2 | 12–18 logos de clientes (PNG/SVG, fundo transparente) |
| 3 | Print + link do perfil Google (badge 4.9★) |
| 4 | 3 reviews em destaque (texto, nome, empresa, data) |
| 5 | Faixa de preço ("começa em R$ X.XXX/mês") para FAQ |
| 6 | 5+ fotos da equipe (fundo padronizado) |
| 7 | Código embed do RD Station (formulário + script de rastreamento) |
| 8 | IP do servidor Coolify (para config DNS no Hostgator) |
| 9 | IDs de rastreamento: GA4, Meta Pixel (se disponíveis) |

### Infraestrutura configurada hoje

- MCPs do RD Station ativados no Claude Code (global):
  - `rdstation-marketing` → `mcp.rdstationmentor.com/marketing`
  - `rdstation-crm` → `mcp.rdstationmentor.com/crm`
- MCP do WordPress já ativo: `wp-mcp-ultimate` (valoreasy.com.br)
- Repositório git inicializado: branch `main`, commit inicial feito

### Próxima sessão

Iniciar desenvolvimento da LP — branch `feature/lp-alta-conversao`, começando pela estrutura HTML e tokens de design (CSS variables do Brand Guidelines).

---

## 03/05/2026 — Desenvolvimento da LP (sessão 2)

### O que foi entregue

**LP completa em HTML/CSS/JS** — 12 blocos conforme wireframe v3, na branch `feature/lp-alta-conversao`.

Arquivos criados:
- `lp/index.html` — estrutura completa com todos os 12 blocos e placeholders `[INSERIR: X]`
- `lp/css/tokens.css` — variáveis CSS do Brand Guidelines (oklch, tipografia, espaçamentos)
- `lp/css/lp.css` — estilos mobile-first completos (~750 linhas)
- `lp/js/lp.js` — scroll suave, FAQ accordion, sticky CTA mobile, integração RD Station
- `lp/assets/logos/logo-valoreasy.png` — logo colorido com fundo transparente

### Integração RD Station

- Formulário envia via **Events API** (`POST https://api.rd.services/platform/conversions`) com o token real configurado em `CONFIG.rdToken`
- `conversion_identifier: lp-departamento-financeiro` — identifica leads exclusivamente desta LP
- WhatsApp com UTMs (`utm_source=lp&utm_medium=whatsapp&utm_campaign=departamento-financeiro`) + evento de conversão disparado antes do redirect
- Leads entram no estágio **"Sem Contato (Inbound)"** do **Funil de Vendas Diretas** (ID: `62ebd224d265d7000c78b18d`)
- Item 7 da lista de pendências (embed RD Station) **eliminado** — integração resolvida diretamente via API pública, sem necessidade de código embed

### Dados inseridos hoje

- WhatsApp: `(11) 91895-3052` ✓
- Token RD Station: configurado em `lp.js` ✓

### Ajustes visuais aplicados na revisão

| Bloco | Ajuste |
|---|---|
| 01 — Hero | Fundo off-white (`--paper`); botão do formulário verde (`btn--green`); form compactado para caber na dobra sem scroll; logo imagem no header |
| 02 — Dor | Fundo alterado de preto (`--ink`) para azul marinho (`--brand-deep`); aspas em branco translúcido — sem conflito azul/vermelho |
| 08 — Autoridade | Stats numéricos (`[INSERIR]`) removidos; h2 simplificado para foco em avaliações |

### Inputs pendentes (bloqueiam go-live, não o desenvolvimento)

| # | Item | Status |
|---|---|---|
| 1 | Métricas: CNPJs ativos, R$ sob gestão, anos, cidades | ⏳ Aguardando Will |
| 2 | 12–18 logos de clientes (PNG/SVG, fundo transparente) | ⏳ Aguardando Will |
| 3 | Print + link do perfil Google | ⏳ Aguardando Will |
| 4 | 3 reviews em destaque (texto, nome, empresa, data) | ⏳ Aguardando Will |
| 5 | Faixa de preço para FAQ | ⏳ Aguardando Will |
| 6 | 5+ fotos da equipe | ⏳ Aguardando Will |
| 7 | Embed RD Station | ✅ Resolvido via Events API |
| 8 | IP do Coolify (para DNS no Hostgator) | ⏳ Aguardando Will |
| 9 | IDs GA4 / Meta Pixel | ⏳ Se disponíveis |

### Próxima sessão

1. Revisar LP no browser com Will (aprovação visual dos 12 blocos)
2. Substituir placeholders com dados reais conforme Will fornecer
3. Configurar domínio `lp.valoreasy.com.br` no Hostgator (registro A → IP Coolify)
4. Deploy no Coolify e testes de formulário (lead chegando no RD Station)
5. Iniciar Fase 2 — reformulação do site WordPress

---

## 06/05/2026 — Bloco 08 (Autoridade) finalizado

Sessão dedicada à construção completa do bloco de prova social — peça-chave de conversão da LP.

### Logos de clientes (Logo Wall)

- **10 logos** copiadas de `ARTEFATOS/Logos Clientes/Logos formatadas/` para `lp/assets/logos/clientes/`
- Cada logo tem versão **gray** (padrão) e **color** (hover) — efeito de fade entre as duas via CSS opacity
- Layout final: **carousel horizontal infinito** com setas ‹ › nas laterais (após o último logo, volta no primeiro sem solavanco)

### Avaliações Google (Reviews)

**Estrutura visual** — reproduz fielmente o padrão de cards de avaliação do Google Maps:
- Avatar circular (40px) + nome + meta ("Local Guide · X avaliações" ou "X avaliações") + linha discreta com a empresa
- Estrelas amarelas (#FBBC05, cor oficial Google)
- Data ("9 meses atrás", "2 anos atrás", etc.)
- Badge verde de Local Guide para reviewers que têm essa marcação
- Texto da avaliação alinhado à esquerda, sem itálico/aspas (como no Google)

**8 depoimentos reais** carregados (de `ARTEFATOS/Depoimentos/`):

| # | Cliente | Empresa | Avatar |
|---|---|---|---|
| 1 | Bruna Habka | Klabin | Foto + Local Guide |
| 2 | Caroline Mendonça | Olive Tree Films | Foto |
| 3 | Daniel Vasques | Balderi Gastronomia | Letra D (rosa) |
| 4 | HS Contabil | Parceira Contábil | Foto (logo) |
| 5 | Larissa De Lello | School of Rock — Morumbi | Letra L (azul) |
| 6 | Lukas Ehmke | School of Rock — Perdizes | Letra L (verde) + Local Guide |
| 7 | Vinícius Ribeiro | RPP Advocacia | Foto + Local Guide |
| 8 | Rafael Vasconcelos | Audaz | Foto |

**Decisão estratégica sobre integração com Google:** abordagem **manual** ao invés da Google Places API. Motivos:
- API só devolve 5 reviews que o próprio Google escolhe (sem controle de curadoria)
- Exige conta Google Cloud + billing + chave + proxy backend
- Sem custos, sem dependência externa, performance superior
- Reviews mudam pouco — atualização manual ~2x ao ano é suficiente

### Badge Google®

- Card central com nota **5.0**, 5 estrelas amarelas e label "Google®"
- Removido link "Ver perfil no Google →" para reduzir distrações

### Estrutura técnica do carousel infinito

- Função genérica `setupCarousel(root)` em `lp.js`, ativada via `data-carousel`/`data-carousel-track`/`data-carousel-prev`/`data-carousel-next`
- Loop infinito implementado por **duplicação dos itens** + snap silencioso de scroll
- Reutilizada para logos e depoimentos (DRY)

### Ajustes finais de layout do Bloco 08

- Container do bloco ampliado para **1280px** (resto da LP segue 1100px)
- Cards de depoimento alargados para **380px** (290px no mobile) — proporção mais próxima do quadrado
- Texto dos cards justificado à esquerda

### Inputs pendentes — atualização

| # | Item | Status |
|---|---|---|
| 1 | Métricas: CNPJs, R$ sob gestão, anos, cidades | ❌ Removido (stats deletados na revisão anterior) |
| 2 | 12–18 logos de clientes | ✅ 10 logos integradas com efeito hover |
| 3 | Print + link do perfil Google | ⏳ Substituído por badge "Google®" |
| 4 | Reviews em destaque | ✅ 8 depoimentos reais com foto/letra, nome, empresa, data |
| 5 | Faixa de preço para FAQ | ⏳ Aguardando Will |
| 6 | 5+ fotos da equipe | ⏳ Aguardando Will |
| 7 | Embed RD Station | ✅ Resolvido (Events API) |
| 8 | IP do Coolify | ⏳ Aguardando Will |
| 9 | IDs GA4 / Meta Pixel | ⏳ Se disponíveis |

### Próxima sessão

1. Faixa de preço (Bloco 11 — FAQ)
2. Fotos da equipe (Bloco 10)
3. Configurar DNS + deploy no Coolify
4. Testes end-to-end: formulário → RD Station → CRM
5. Iniciar Fase 2 (reformulação do site WordPress)

---

## 🔖 HANDOFF — Estado no fim de 06/05/2026

### Onde está o projeto

LP estruturalmente completa, na branch `feature/lp-alta-conversao`. Último commit: **`6d54866`** ("feat(lp): bloco 08 finalizado…"). Working tree limpo. **Ainda não foi feito merge na `main` nem deploy.**

### Status dos 12 blocos

| Bloco | Estado | Observações |
|---|---|---|
| 01 — Hero | ✅ Pronto | Form integrado com RD Station, botão verde, fundo off-white, logo no header |
| 02 — Dor | ✅ Pronto | Fundo azul marinho (`--brand-deep`), 5 citações |
| 03 — Virada | ✅ Pronto | — |
| 04 — O que está dentro | ✅ Pronto | 8 componentes |
| 05 — Antes × Depois | ✅ Pronto | Tabela 1:1 |
| 06 — Como funciona | ✅ Pronto | 3 fases |
| 07 — Para quem é | ✅ Pronto | — |
| 08 — Autoridade | ✅ **Pronto (finalizado hoje)** | Logos em carousel + 8 reviews Google estilo nativo |
| 09 — CTA intermediário | ✅ Pronto | — |
| 10 — Equipe | ⏳ Aguarda fotos | Estrutura pronta, faltam 5+ fotos da equipe |
| 11 — FAQ | ⏳ Aguarda preço | 7 objeções respondidas, falta a faixa "começa em R$ X.XXX/mês" |
| 12 — CTA final | ✅ Pronto | — |

### Configurações já feitas

- WhatsApp: `(11) 91895-3052` em `lp/js/lp.js`
- RD Station Token: configurado em `CONFIG.rdToken`
- conversion_identifier: `lp-departamento-financeiro`
- Funil destino: "Sem Contato (Inbound)" do "Funil de Vendas Diretas" (`62ebd224d265d7000c78b18d`)

### O que ainda trava o go-live

1. Faixa de preço (Bloco 11)
2. Fotos da equipe (Bloco 10)
3. IP do servidor Coolify para configurar DNS no Hostgator
4. IDs de tracking (GA4 / Meta Pixel) — opcional

### Como iniciar a próxima conversa

```
Estou retomando o PJT_SITE_VALOREASY. Por favor leia o diário de bordo
em DIARIO_DE_BORDO_PJT_SITE_VALOREASY.md e o CLAUDE.md do projeto.
A LP está estruturalmente completa na branch feature/lp-alta-conversao.
Hoje quero trabalhar em [escolher: faixa de preço do FAQ / fotos da
equipe / configuração de deploy no Coolify / iniciar Fase 2 site
WordPress].
```

### Arquivos-chave para contexto rápido

| Arquivo | Conteúdo |
|---|---|
| `lp/index.html` | Estrutura completa dos 12 blocos |
| `lp/css/lp.css` | Estilos mobile-first (~1200 linhas) |
| `lp/css/tokens.css` | Variáveis Brand Guidelines |
| `lp/js/lp.js` | Carousel infinito, RD Station, FAQ, CTA mobile |
| `ROADMAP.md` | Visão de fase 1 (LP) e fase 2 (site WP) |
| `ARTEFATOS/LP Wireframe v3.html` | Referência do wireframe original |