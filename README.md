**foo(bar,fly)**;
============

Marginally useful console.log shorthand.

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
```
var bar = ['foo','bar','fly'];
foo(bar);
// [13:03:20] object:
0 foo
1 bar
2 fly
```
```
var bar = { foo: 'foo', bar: 'bar', fly: 'fly'};
foo(bar);
// [13:03:20] object:
bar bar
fly fly
foo foo
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
