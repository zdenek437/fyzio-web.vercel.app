(function () {
  'use strict';

  var form = document.getElementById('contact-form');
  var note = document.getElementById('form-note');

  if (!form || !note) return;

  function showMessage(message) {
    note.textContent = message;
    note.classList.add('visible');
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var company = document.getElementById('company');
    var message = document.getElementById('message');

    if (!name || !email || !company || !message) {
      showMessage('Formulář se nepodařilo zpracovat.');
      return;
    }

    if (company.value.trim() !== '') {
      showMessage('Odeslání bylo z bezpečnostních důvodů zastaveno.');
      return;
    }

    if (name.value.trim().length < 2) {
      showMessage('Zadejte prosím své jméno.');
      name.focus();
      return;
    }

    if (email.validity.typeMismatch || email.value.trim().length < 5) {
      showMessage('Zadejte prosím platný e-mail.');
      email.focus();
      return;
    }

    if (message.value.trim().length < 10) {
      showMessage('Zpráva je příliš krátká.');
      message.focus();
      return;
    }

    showMessage('Formulář je zatím ukázkový. Pro ostrý provoz doporučuji napojit bezpečné odesílání přes Formspree, Resend nebo serverless funkci s antispam ochranou.');
  });
})();
