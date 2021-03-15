express=require('express');

app=express();

app.get("/", (req, res) => {
	res.json({item: {key: 'value'}});
});

app.get("/dtv/current-service", (req, res) => {
	res.json(
		{
			contentType: "0x10",
			streamType: "0x03",
			languageCode: "por"
		}
	);
});

app.get("/dtv/current-service/apps", (req, res) => {
	res.json(
		{ 
		   apps:[{
			appid: "65570",
			name: "A Fazenda",
			type: "Ginga-NCL",
			controlCode: "AUTOSTART",
			state: "running",
			entryPoint: "main.ncl"
		  }]
		}
	);
});

app.get("/dtv/current-service/0x00", (req, res) => {
	res.json(
		{
			streamContent: "0x6",
			componentType: "0x03",
			componentTag: "0x00",
			streamType: "0x01",
			ISO639languageCode: "por",
			pid: 123,
			state: "playing",
			pos: { "x": 0, "y": 0, "w": 0, "h":0 },
			vol: 3 
		}
	);
});

app.get("/dtv/current-service/0x10", (req, res) => {
	res.json(
		{
			streamContent: "0x6",
			componentType: "0x03",
			componentTag: "0x10",
			ISO639languageCode: "por",
			pid: 123,
			state: "playing",
			vol: 3 
		}
	);
});


app.get("/dtv/15.3.3/apps", (req,res) => {
	res.json({ apps:[
		{
			appid:"65570",
			name: "TesteApp",
			type: "Ginga-HTML5",
			controlCode: "AUTOSTART",
			state: "running",
			entryPoint: "index.html"	
		}
	]});
});

app.get("/dtv/15.3.1/apps", (req,res) => {
	res.json({ apps:[]});
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log("hello");
});
