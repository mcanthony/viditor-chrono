var Assetfile = function(filename, length)
{
	this.filename = filename;
	this.length = length;
}

Assetfile.prototype.getFilename = function()
{
	return this.filename;
}

Assetfile.prototype.viditize = function(tick, track)
{
	return new Vidit(this, tick, track);
}