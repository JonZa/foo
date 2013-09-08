**foo(bar,fly)**
============

Never console.log again.

**Ad-hoc logging:**
```
foo('bar');
// [13:03:20] bar
```
```
var bar = 'fly';
foo(bar);
// [13:03:20] fly
```

**Optional coding standard for enabling emergency debug mode:**
```
function whatever() {
  foo('whatever',1);
  ...
}
// (no log)
```
```
var paranoid = true;
function whatever() {
  foo('whatever',1);
  ...
}
// [13:03:20] whatever
```
