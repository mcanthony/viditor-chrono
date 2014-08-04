Clips = new Meteor.Collection("clips");
Cursors = new Meteor.Collection("cursors");

PIXELS_PER_TICK = 10;
SECONDS_PER_TICK = 1;
SIZE_OF_TICKMARK = 3;

pixel2tick = function(pixel) {return Math.floor(pixel / PIXELS_PER_TICK);}
pixel2sec = function(pixel) {return pixel2tick(pixel) * SECONDS_PER_TICK;}

if(Meteor.isClient)
{
	Template.timeline.events =
	{
		"click": function()
		{
			Session.set("selected", undefined);
		}
	}
	
	Meteor.startup(function()
	{
		$(document).mousewheel(function(event)
		{
			if(event.deltaY > 0)
			{
				//console.log("zoom in");
			}
			else if(event.deltaY < 0)
			{
				//console.log("zoom out");
			}
		});
	});
}

if(Meteor.isClient)
{
	Template.track.clips = function()
	{
		var track_id = this.toString();
		return Clips.find({track: track_id});
	}
}