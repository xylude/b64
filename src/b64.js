const c = require('clipboardy');

const opt = process.argv;

if(opt[2] === 'from') {
	(async () => {
		const _clipboard = await c.read();
		const clipboard = new Buffer.from(_clipboard, 'base64');
		await c.write(clipboard.toString());
		console.log('clipboard replaced with decoded b64');
	})();
} else if(opt[2] === 'to') {
	(async () => {
		const _clipboard = await c.read();
		const clipboard = new Buffer.from(_clipboard).toString('base64');
		await c.write(clipboard);
		console.log('clipboard replaced with b64');
	})();
} else {
	console.log(`Invalid Option "${opt[2]}". Use either "from" or "to".`)
}
