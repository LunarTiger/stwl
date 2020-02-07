var config = {
	databaseURL: "https://stwl-event.firebaseio.com/",
};
firebase.initializeApp(config);
var database = firebase.database();
var state = database.ref('state');
state.on('value', (function(snapshot) {
	var stateVal = snapshot.val();
	if(stateVal){
		var id = database.ref('event-id');
		id.on('value', (function(snapshot) {
			var idVal = snapshot.val();
			document.getElementById('nextEvent').innerHTML = "Next Event:&nbsp;&nbsp;<a href='https://sdq.st/e-"+idVal+"'>sdq.st/e-"+idval+"</a>"
		}));
	}
}));
