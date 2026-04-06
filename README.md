# Formulář s lepším UX a děkovací stránkou

Obsah:
- `index.html` – hlavní stránka s formulářem
- `dekujeme.html` – potvrzovací stránka po odeslání
- `script.js` – validace a lepší UX při odeslání
- `vercel.json` – bezpečnostní hlavičky pro Vercel

## Co je nové
- přesměrování po úspěšném odeslání na `dekujeme.html`
- validace polí před odesláním
- zvýraznění chyb přímo u polí
- stav „Odesílám...“ na tlačítku
- status zpráva během odeslání
- honeypot pole proti jednoduchým botům

## Co ještě musíte upravit
- v `index.html` nahraďte `YOUR_FORM_ID` skutečným Formspree ID

## Nasazení
1. Nahrajte všechny soubory do repa.
2. Commitněte změnu.
3. Vercel automaticky provede deploy.
