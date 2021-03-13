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

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log("hello");
});
