var config = {
	databaseURL: "https://lunar-home.firebaseio.com/",
};
firebase.initializeApp(config);
var database = firebase.database();
var event = database.ref('stwl/next-event');
event.on('value', (function(snapshot) {
	var eventVal = snapshot.val();
	if(eventVal){
		document.getElementById('nextEvent').innerHTML = "Next Event:&nbsp; "+eventVal+"<br /><a href='https://discord.gg/DbQF7ze'>Join the discord.</a>";
	}
	if(!eventVal){
		document.getElementById('nextEvent').innerHTML = "<a href='https://discord.gg/DbQF7ze'>Join the discord.</a>";
	}
}));
