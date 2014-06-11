Assets = new Meteor.Collection("assets");

if(Meteor.isClient)
{
	Template.assetlist.assets = function()
	{
		return Assets.find();
	}
	
	Template.assetlist.events =
	{
		"click .asset": function()
		{
			var _id = Instances.insert({asset: this._id, handle: this.handle, length: this.length, position: 0, endposition: this.length, track: 1});
		},
		"click .assetlist-expand": function()
		{
			var button = document.getElementById("assetlist-expand-collapse");
			var al = document.getElementById("assetlist");
			button.className = "assetlist-collapse";
			al.className = al.className + " expanded";
		},
		"click .assetlist-collapse": function()
		{
			var button = document.getElementById("assetlist-expand-collapse");
			var al = document.getElementById("assetlist");
			button.className = "assetlist-expand";
			al.className = al.className.replace(" expanded", "");
		}
	}
}

if(Meteor.isServer)
{
	Meteor.startup(function()
	{
		Assets.remove({});
		Assets.insert({name: "SnowyFlag", handle: "snowing", type: "video", length: 13.6});
		Assets.insert({name: "ChildrenLaughing", handle: "children", type: "audio", length: 9});
		Assets.insert({name: "InTheCarOnTheRoad", handle: "inthecar", type: "video", length: 36});
	});
}
