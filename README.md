# Bezpečnější verze pro Vercel

Obsah:
- `index.html` – hlavní stránka
- `script.js` – samostatný JavaScript bez inline handlerů
- `vercel.json` – bezpečnostní hlavičky pro Vercel

## Co je upravené
- odstraněný inline JavaScript
- přidaný jednoduchý honeypot proti botům
- základní klientská validace formuláře
- CSP a další bezpečnostní hlavičky pro Vercel

## Nasazení
1. Nahraj všechny 3 soubory do repa.
2. Commitni změnu.
3. Vercel automaticky udělá nový deploy.

## Poznámka
Formulář stále nic neposílá. Pro ostrý provoz ho napoj na bezpečné odesílání s antispam ochranou.
