var config = {
	databaseURL: "https://lunar-home.firebaseio.com/",
};
firebase.initializeApp(config);
var database = firebase.database();
var event = database.ref('stwl/event');
event.on('value', (function(snapshot) {
	var eventVal = snapshot.val();
	if(eventVal){
		document.getElementById('nextEvent').innerHTML = "Next Event:&nbsp;&nbsp;<a href='https://sdq.st/e-"+eventVal+"'>sdq.st/e-"+eventVal+"</a>";
	}
	if(!eventVal){
		document.getElementById('nextEvent').innerHTML = "";
	}
}));
