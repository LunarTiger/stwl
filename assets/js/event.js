var config = {
	databaseURL: "https://lunar-home.firebaseio.com/",
};
firebase.initializeApp(config);
var database = firebase.database();
var event = database.ref('stwl/event');
event.on('value', (function(snapshot) {
	var eventVal = snapshot.val();
	if(eventVal){
		var id = database.ref('event-id');
		id.on('value', (function(snapshot) {
			var idVal = snapshot.val();
			document.getElementById('nextEvent').innerHTML = "Next Event:&nbsp;&nbsp;<a href='https://sdq.st/e-"+idVal+"'>sdq.st/e-"+idVal+"</a>";
		}));
	}
	if(!eventVal){
		document.getElementById('nextEvent').innerHTML = "";
	}
}));
