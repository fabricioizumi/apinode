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


app.listen(80, () => {
	console.log("hello");
});
