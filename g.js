var window = window;

Object.defineProperty
(
	window,
	'ontime',
	{
		set: function (f)
		{
			window.timer = window.setInterval
			(
				function ()
				{
					f ({type: 'tick'});
					g.option.time += g.option.interval;
				},
				g.option.interval
			);
		}
	}
);

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
	
	e: {},
	
	event: function (event)
	{
		g.e = event;
		g.run ();
	},
	
	input: function ()
	{
		
	},

	load: function ()
	{
		window.onclick = g.event;
		window.onkeydown = g.event;
		window.onkeypress = g.event;
		window.onkeyup = g.event;
		window.onload = g.event;
		window.onmousedown = g.event;
		window.onmousemove = g.event;
		window.onresize = g.event;
		window.ontime = g.event;
	},

	option:
	{
		interval: 1000,
		time: 0	
	},

	set:
	{
		set interval (interval)
		{
			window.clearInterval (window.timer);
			g.option.interval = interval;
			window.ontime = g.event;
		}
	},

	script:
	{

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
		g.log = g.e.type;
	}
};

g.load (g.e = {type: 'preload'});
g.run ();