/*------------------------------------------------------- foo(console.log,shorthand) */
function foo(bar, fly) {
	var paranoid = false;
	if (!window.console || (fly && !paranoid)) {
		return false;
	} else if (bar === undefined) {
		bar = 'o_O';
	}
	if (typeof bar ==="object") {
		console.log('[' + new Date().toUTCString().split(' ')[4] + '] object:');
		console.dir(bar);
	} else {
		console.log('[' + new Date().toUTCString().split(' ')[4] + '] ' + bar);
	}
}