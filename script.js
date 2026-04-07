(function () {
  'use strict';
  var form = document.getElementById('contact-form');
  if (!form) return;
  var fields = {name: document.getElementById('name'), email: document.getElementById('email'), message: document.getElementById('message'), company: document.getElementById('company')};
  var errors = {name: document.getElementById('name-error'), email: document.getElementById('email-error'), message: document.getElementById('message-error')};
  var status = document.getElementById('form-status');
  var submitButton = document.getElementById('submit-button');

  function setFieldState(field, valid, key) {
    field.setAttribute('aria-invalid', valid ? 'false' : 'true');
    if (errors[key]) errors[key].classList.toggle('visible', !valid);
  }
  function showStatus(kind, message) {
    status.className = 'status-box visible ' + kind;
    status.textContent = message;
  }
  function clearStatus() {
    status.className = 'status-box';
    status.textContent = '';
  }
  function validate() {
    var ok = true;
    clearStatus();
    var nv = fields.name.value.trim().length >= 2;
    setFieldState(fields.name, nv, 'name'); if (!nv) ok = false;
    var ev = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value.trim());
    setFieldState(fields.email, ev, 'email'); if (!ev) ok = false;
    var mv = fields.message.value.trim().length >= 10;
    setFieldState(fields.message, mv, 'message'); if (!mv) ok = false;
    if (fields.company.value.trim() !== '') { showStatus('error','Odeslání bylo z bezpečnostních důvodů zastaveno.'); ok = false; }
    return ok;
  }
  ['name','email','message'].forEach(function (k) {
    fields[k].addEventListener('input', function () { if (fields[k].getAttribute('aria-invalid') === 'true') validate(); });
    fields[k].addEventListener('blur', validate);
  });
  form.addEventListener('submit', function (event) {
    if (!validate()) { event.preventDefault(); showStatus('error','Zkontrolujte prosím označená pole.'); return; }
    submitButton.disabled = true;
    submitButton.textContent = 'Odesílám...';
    showStatus('loading','Zpráva se odesílá. Po dokončení budete přesměrováni na potvrzovací stránku.');
  });
})();