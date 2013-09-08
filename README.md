foo(bar,fly)
============

Never console.log again.

Ad-hoc logging:

foo('bar');
// [13:03:20] bar

var bar = 'foo';
foo(bar);
// [13:03:20] bar


Optional coding standard for enabling emergency debug mode:

function whatever() {
  foo('whatever',1);
  ...
}
// (no log)

var paranoid = true;
function whatever() {
  foo('whatever',1);
  ...
}
// [13:03:20] whatever
