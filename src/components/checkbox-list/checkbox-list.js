import 'jquery-ui/ui/effects/effect-blind';

$('.checkbox-list__toggler').click(function () {
  $(this).siblings('.checkbox-list__list-wrapper').toggle('blind', 400);
  $(this).toggleClass('checkbox-list__toggler_expanded', 400);
});
