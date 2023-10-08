var config = {
	databaseURL: "https://lunar-home.firebaseio.com/",
};
firebase.initializeApp(config);
var database = firebase.database();
//var event = database.ref('stwl/next-event');
var book_sat = database.ref('stwl/book_saturday');
var book_sun = database.ref('stwl/book_sunday');
/*
event.on('value', (function(snapshot) {
	var eventVal = snapshot.val();
	if(eventVal){
		document.getElementById('nextEvent').innerHTML = "Next Event:&nbsp; "+eventVal;
	}
	if(!eventVal){
		document.getElementById('nextEvent').innerHTML = "No event scheduled";
	}
}));
*/
book_sat.on('value', (function(snapshot) {
	var satVal = snapshot.val();
	if(satVal){
		document.getElementById('bookSat').innerHTML = "Saturday's Book Reading:&nbsp; "+satVal;
	}
	if(!satVal){
		document.getElementById('bookSat').innerHTML = "No event scheduled";
	}
}));

book_sun.on('value', (function(snapshot) {
	var sunVal = snapshot.val();
	if(sunVal){
		document.getElementById('bookSun').innerHTML = "Sunday's Book Reading:&nbsp; "+sunVal;
	}
	if(!sunVal){
		document.getElementById('bookSun').innerHTML = "No event scheduled";
	}
}));