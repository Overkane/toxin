import Inputmask from 'inputmask';

Inputmask.extendAliases({
  date: {
    alias: 'datetime',
    inputFormat: 'dd.mm.yyyy',
    inputmode: 'numeric',
    placeholder: 'ДД.ММ.ГГГГ',
  },
});

$(function () {
  Inputmask().mask(document.querySelectorAll('input'));
});
