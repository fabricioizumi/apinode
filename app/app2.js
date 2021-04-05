express=require('express');

app=express();

app.get("/", (req, res) => {
	res.json({item: {key: 'value'}});
});

app.get("/dtv/current-service", (req, res) => {
	res.json(
		{
			serviceContextId: "15.3.3",  
  			serviceName: "The_Mag",  
  			transportStreamId: 123,
    		originalNetworkId: 65570,
  	  		serviceId: 0    
		}
	);
});

app.get("/dtv/current-service/components", (req, res) => {
	res.json(
		{
			"components": 
			[
			  {
				streamContent: "0x02",					  
				componentType: "0x06",					  
				componentTag: "0x10",				
				pid: 1234, 					  
				state: "started",					  
				pos:
				{ 
				  h: 0,						  
				  w: 0,						  
				  x: 0,						  
				  y: 0
				},			
				streamType: "0x01"													  
			  },
			  {
				streamContent: "0x03",					  
				componentType: "0x01",					  
				componentTag: "0x11",					  
				ISO639languageCode: "por",					  
				pid: 456,		  
				state: "started",									  
				vol: 0,				
				streamType: "0x03"													  
			  }			  
			]
		  }
	);
});

app.get("/dtv/service-list", (req, res) => {
	res.json(
		{"serviceList":
			[	{
					"originalNetworkId":10,
					"serviceContextId":"15.3.1",
					"serviceId":32,"serviceName":"Globo HD",
					"transportStreamId":10
				},
				{
					"originalNetworkId":10,
					"serviceContextId":"15.3.2",
					"serviceId":33,
					"serviceName":"Relax",
					"transportStreamId":10
				},
				{
					"originalNetworkId":10,
					"serviceContextId":"15.3.3",
					"serviceId":34,
					"serviceName":"The_Mag",
					"transportStreamId":10
				}
			]
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
			pid: 123,
			state: "started",
			pos: { "x": 0, "y": 0, "w": 0, "h":0 }			
		}
	);
});

app.get("/dtv/current-service/0x10", (req, res) => {
	res.json(
		{
			streamContent: "0x6",
			componentType: "0x03",
			componentTag: "0x10",
			streamType: "0x03",
			ISO639languageCode: "por",
			pid: 123,
			state: "playing",
			vol: 3 
		}
	);
});

app.get("/dtv/15.3.3/", (req,res) => {
	res.json({ apps:[
		{
			serviceContextId: "0.0.0",			
			serviceName: "Teste HD",			
			transportStreamId: 123, 			
			originalNetworkId: 65570,			
			serviceId: 0
		  }
	]});
});

app.get("/dtv/15.3.3/apps", (req,res) => {
	res.json({ apps:[
		{
			appid:"65570",
			name: "TesteApp",
			type: "Ginga-HTML",
			controlCode: "AUTOSTART",
			state: "running",
			entryPoint: "index.html"	
		}
	]});
});

app.get("/dtv/15.3.3/apps/65570", (req,res) => {
	res.json(
		{
			"appid": "65570",					  
			"name": "TesteApp",
			"type": "Ginga-HTML",
			"controlCode": "AUTOSTART",					  
			"state": "running",				
			"entryPoint": "index.html"
		  }
	);
});

app.get("/dtv/current-service/numapps", (req,res) => {
	res.json({
		numOfApps: 1
	});
});

app.get("/dtv/15.3.1/apps", (req,res) => {
	res.json({ apps:[]});
});

app.get("/dtv/current-service/apps/65570/node-properties/settings/", (req,res) => {
	res.json(
		{
			nodeProperties:[
				{
					name: "service.currentFocus",
					value: "1"
				},
				{
					name:"shared.myAppOption",
					value: "y"
				}
			]
		}
	);
});

app.get("/dtv/list-service-apps/", (req,res) => {
	res.json(
		{
			serviceList:[
				{
					serviceContextId: 123,
					appid: "1"
				},
				{
					serviceContextId: 124,
					appid: "2"
				}
			]
		}
	);
});

app.post("/dtv/list-service-apps/15.3.3", express.json({type: '*/*'}), (req,res) => {
	// const jsonDefault = {
	// 		error: 345,
	// 		description: "Not any serviceContextId provided."
			
	// 	}	

	// var jsonData;
	
	// if (req.body !== undefined)
	// 	jsonData = req.body;
	// else
	// 	return res.json(jsonDefault);

	// if (jsonData.serviceContextId !== undefined){
	// 	res.json(
	// 		{
	// 			serviceContextId: '15.3.2',
	// 			appid: "12"
				
	// 		}
	// 	);
	// }
	// else{
	// 	return res.json(jsonDefault);	
	// }
	res.json(
		{
			serviceContextId: '15.3.2',
			appid: "12"
			
		}
	);
});
app.get("/dtv/list-anothers-apps/65570", express.json({type: '*/*'}), (req,res) => {	
	res.json(
		{
			apps:[
				{			
					appid: "12",
					serviceContextId: "15.3.3"
				},
				{			
					appid: "55",
					serviceContextId: "15.3.1"
				},
				{			
					appid: "6578",
					serviceContextId: "15.3.3"
				}
			]
		}
		
		
	);
});
app.get("/dtv/current-service/apps/65570/node-properties/getfirstnode", (req,res) => {
	res.json(
		{
			nodeId: "settings" 
		}
	);
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log("hello");
});
