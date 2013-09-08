/*------------------------------------------------------- foo(console.log,shorthand) */
function foo(bar,fly) {
	var paranoid = false;
	if (!window.console || (fly && !paranoid)) return false;
	if (bar == undefined) bar = 'o_O';
	console.log('[' + new Date().toUTCString().split(' ')[4] + '] ' + bar);
}