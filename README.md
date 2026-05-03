# PJT_SITE_VALOREASY

> Projeto inicializado em 03/05/2026.

## Branches

- `main` — produção (Coolify faz deploy daqui — nunca commitar direto)
- `feature/nome` — desenvolvimento de cada tarefa (temporárias)

## Fluxo de trabalho

1. Criar branch: `git checkout -b feature/nome-da-tarefa`
2. Desenvolver e commitar à vontade na branch de tarefa
3. Tarefa validada → merge em `main` (aciona deploy no Coolify)
4. Apagar a branch: `git branch -d feature/nome-da-tarefa`
