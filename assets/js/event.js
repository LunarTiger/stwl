var config = {
	databaseURL: "https://lunar-home.firebaseio.com/",
};
firebase.initializeApp(config);
var database = firebase.database();
var event = database.ref('stwl/next-event');
event.on('value', (function(snapshot) {
	var eventVal = snapshot.val();
	if(eventVal){
		document.getElementById('nextEvent').innerHTML = "Next Event:&nbsp; "+eventVal;
	}
	if(!eventVal){
		document.getElementById('nextEvent').innerHTML = "No event scheduled";
	}
}));
