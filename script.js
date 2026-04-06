(function () {
  'use strict';

  var form = document.getElementById('contact-form');
  if (!form) return;

  var fields = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    message: document.getElementById('message'),
    company: document.getElementById('company')
  };

  var errors = {
    name: document.getElementById('name-error'),
    email: document.getElementById('email-error'),
    message: document.getElementById('message-error')
  };

  var status = document.getElementById('form-status');
  var submitButton = document.getElementById('submit-button');

  function setFieldState(field, valid, errorKey) {
    if (!field) return;
    field.setAttribute('aria-invalid', valid ? 'false' : 'true');
    if (errors[errorKey]) {
      errors[errorKey].classList.toggle('visible', !valid);
    }
  }

  function showStatus(kind, message) {
    if (!status) return;
    status.className = 'status-box visible ' + kind;
    status.textContent = message;
  }

  function clearStatus() {
    if (!status) return;
    status.className = 'status-box';
    status.textContent = '';
  }

  function validate() {
    var isValid = true;
    clearStatus();

    var nameValid = fields.name.value.trim().length >= 2;
    setFieldState(fields.name, nameValid, 'name');
    if (!nameValid) isValid = false;

    var emailValue = fields.email.value.trim();
    var emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    setFieldState(fields.email, emailValid, 'email');
    if (!emailValid) isValid = false;

    var messageValid = fields.message.value.trim().length >= 10;
    setFieldState(fields.message, messageValid, 'message');
    if (!messageValid) isValid = false;

    if (fields.company.value.trim() !== '') {
      showStatus('error', 'Odeslání bylo z bezpečnostních důvodů zastaveno.');
      isValid = false;
    }

    return isValid;
  }

  ['name', 'email', 'message'].forEach(function (key) {
    if (!fields[key]) return;
    fields[key].addEventListener('input', function () {
      if (fields[key].getAttribute('aria-invalid') === 'true') {
        validate();
      }
    });
    fields[key].addEventListener('blur', validate);
  });

  form.addEventListener('submit', function (event) {
    if (!validate()) {
      event.preventDefault();
      showStatus('error', 'Zkontrolujte prosím označená pole.');
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Odesílám...';
    }
    showStatus('loading', 'Zpráva se odesílá. Po dokončení budete přesměrováni na potvrzovací stránku.');
  });
})();
