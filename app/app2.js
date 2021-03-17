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
				ISO639languageCode: "por",					  
				pid: 1234, 					  
				state: "started",					  
				pos:
				{ 
				  h: 0,						  
				  w: 0,						  
				  x: 0,						  
				  y: 0
				},					  
				vol: 0,				
				streamType: "0x01"													  
			  },			  
			]
		  }
	);
});

app.get("/dtv/service-list", (req, res) => {
	res.json(
		{
			"serviceList": 
			[
			  {
				serviceContextId: "15.3.3",			  
				serviceName: "nome",			  
				transportStreamId: 123,			  
				originalNetworkId: 65570,			  
				serviceId: 0
			  },
			  
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

app.get("/dtv/15.3.1/apps", (req,res) => {
	res.json({ apps:[]});
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log("hello");
});
