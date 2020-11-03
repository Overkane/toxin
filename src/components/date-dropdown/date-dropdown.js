import './air-datepicker.min.js';

$('.date-dropdown__input').datepicker();

$('.date-dropdown__input-filter').datepicker({
  range: true,
  dateFormat: 'd M',
  multipleDatesSeparator: ' - ',
});
