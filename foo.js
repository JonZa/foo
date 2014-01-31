/*------------------------------------------------------- foo(console.log,shorthand) */
function foo(bar, fly) {
	var paranoid = true;
	if (!window.console || (fly && !paranoid)) {
		return false;
	} else if (bar === undefined || bar === null) {
		bar = 'o_O';
	}
	if (typeof bar ==='object') {
		if (bar.jquery != undefined) {
			console.log('[' + new Date().toUTCString().split(' ')[4] + '] jquery object:');
			console.log(bar);
		} else {
			console.log('[' + new Date().toUTCString().split(' ')[4] + '] object:');
			console.dir(bar);
		}
	} else {
		console.log('[' + new Date().toUTCString().split(' ')[4] + '] ' + bar);
	}
}