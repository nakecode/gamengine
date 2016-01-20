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
	b: {},

	canvas: function (id)
	{
		var canvas = window.document.createElement ('canvas');
			canvas.context = canvas.getContext ('2d');
			canvas.id = (id) ? id : 'CANVAS';
			canvas.autosize = function ()
			{
				canvas.height = window.innerHeight;
				canvas.width = window.innerWidth;
			};

		canvas.autosize ();

		delete g['canvas'];
		g.canvas = canvas;
		window.document.body.appendChild (g.canvas);
	},

	set create (prototype)
	{
		prototype.id = (prototype.id) ? prototype.id : g.entity[prototype.type].length;
		g.entity[prototype.type][prototype.id] = prototype;
	},

	set d (o)
	{
		var с = {};
			c.fill = (c.fill);
			c.font = (c.font) ? c.font : g.option.font;
			c.h = o.h;
			c.i = o.i;
			с.id = (o.id) ? o.id : g.b.length + '';
			c.r = o.r;
			c.t = o.t;
			c.w = o.w;
			с.x = o.x;
			c.x0 = o.x0;
			с.y = o.y;
			c.y0 = o.y0;

			c.type = 'box';
			c.type = (c.i) ? 'image' : c.type;
			c.type = (c.x0) ? 'line' : c.type;
			c.type = (c.r) ? 'ring' : c.type;
			c.type = (c.t) ? 'text' : c.type;
		g.b[c.id] = c;
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

	set i (picture)
	{
		var images = {};
		for (var id in picture)
		{
			var image = new Image ();
				image.src = picture[id];
			images[id] = image;
		};
		delete g['i'];
		g.i = images;
	},

	input: function ()
	{
		switch (g.e.type)
		{
			case 'resize':
				g.canvas.autosize ();
				break;
		};
	},

	load: function ()
	{
		g.canvas ();

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

	set log (message)
	{
		g.entity.window.console.log (message);
	},

	option:
	{
		font: '1em Arial',
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