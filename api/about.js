const { mustBeSignedIn } = require('./auth.js');

let aboutMessage = 'Fake Risk API v1.0';
function setMessage(_, { message }) {
	aboutMessage = message;
	return aboutMessage;
}

function getMessage() {
 return aboutMessage;
}

module.exports = { getMessage, setMessage: mustBeSignedIn(setMessage) };