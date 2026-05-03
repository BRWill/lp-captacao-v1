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