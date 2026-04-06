# Bezpečné odesílání formuláře přes Formspree

## Co udělat
1. Vytvořte si formulář ve Formspree.
2. Zkopírujte své ID formuláře.
3. V souboru `index.html` nahraďte `YOUR_FORM_ID` ve `form action`.
4. Nahrajte `index.html` a `vercel.json` do repa.
5. Commitněte změnu a Vercel provede deploy.

## Poznámky
- Formulář používá čisté HTML `POST` odeslání.
- Je přidané honeypot pole `company` proti jednoduchým botům.
- Bez JavaScriptu je CSP přísnější a jednodušší.
