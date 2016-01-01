var g =
{
	set create (prototype)
	{
		prototype.id = (prototype.id) ? prototype.id : g.entity[prototype.type].length;
		g.entity[prototype.type][prototype.id] = prototype;
	},

	draw: function ()
	{
		
	},
	
	entity:
	{
		window: window
	},
	
	event: {},
	
	input: function ()
	{
		
	},

	load: function ()
	{
		window.onclick = function (event) { g.event = event; };
		window.onkeydown = function (event) { g.event = event; };
		window.onkeypress = function (event) { g.event = event; };
		window.onkeyup = function (event) { g.event = event; };
		window.onload = function (event) { g.event = event; };
		window.onmousedown = function (event) { g.event = event; };
		window.onmousemove = function (event) { g.event = event; };
		window.onmouseup = function (event) { g.event = event; };
		window.onresize = function (event) { g.event = event; };
	},

	set log (message)
	{
		g.entity.window.console.log (message); 
	},
	
	run: function ()
	{
		g.input ();
		g.update ();
		g.draw ();	
	},
	
	update: function ()
	{
		
	}
};

g.load ();
g.run ();