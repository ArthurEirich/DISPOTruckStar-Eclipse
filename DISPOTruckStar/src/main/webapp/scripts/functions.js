function updateStartScreen()
{
	setVersion();
	setAnzahlTouren();
	setCurrentVehicleNumber();
}

function loadLastConfig()
{
    alert("Load last config should be implemented!");
}

function resetConfig()
{
    alert("Reset Config should be implemented!!!");
}

function updateIndicator()
{
    document.getElementById('indicator').innerHTML = navigator.onLine ? 'OK' : 'X';
    document.getElementById('indicatorFunk').innerHTML = navigator.onLine ? 'Verbunden' : 'offline';
    document.getElementById('GPSIndicator').innerHTML = navigator.geolocation ? 'OK' : 'X';
}

function getVersion()
{
    var JSONArray = holeArray("Minova_Core_Data_ParameterBean_array");
    var text = "Text";
    var version = "Version";
    var value = "Value";
    for(var i=0; i<JSONArray.length; i++)
    {
        var innerJSONObject = JSONArray[i];
        if(innerJSONObject[text] == version)
        {
        	var neededValue = innerJSONObject[value];
        	var resultValue = neededValue; 
        }
    }
    return resultValue;
}

function setVersion()
{
	var version = getVersion();
	document.getElementById('nightlyVersion').innerHTML = version;
}

function getTouren()
{
	var JSONArray = holeArray("Minova_DispoClient_Data_TripBean_array");
	var text = "Text";
	var tourenArray = new Array(JSONArray.length);
	for(var i=0; i<JSONArray.length; i++)
	{
		var innerJSONObject = JSONArray[i];
		tourenArray[i] = innerJSONObject[text];
	}
	return tourenArray;
}

function setAnzahlTouren()
{
	var anzahlTouren = getTouren().length;
	document.getElementById("anzahlTouren").innerHTML = anzahlTouren;
}

function getCurrentVehicleNumber()
{
	var tempCurrentVehicleNumber = localStorage.getItem("currentVehicleNumber");
	if(tempCurrentVehicleNumber)
	{
		var currentVehicleNumber = tempCurrentVehicleNumber;
	}
	
	else
	{
		var JSONArray = holeArray("Minova_DispoClient_Data_TruckBean_array");
		var JSONObject = JSONArray[0];
		var text = "Text";
		currentVehicleNumber = JSONObject[text];
	}
	return currentVehicleNumber;
}

function setCurrentVehicleNumber()
{
	var currentVehicleNumber = getCurrentVehicleNumber();
	document.getElementById('vehicleNumber').innerHTML = currentVehicleNumber;
	localStorage.setItem("currentVehicleNumber", currentVehicleNumber);
}

function getDriversFromLocalStorage()
{
	var JSONArray = holeArray("Minova_DispoClient_Data_DriverBean_array");
	var fahrerArray = new Array(JSONArray.length);
	var text = "Text";
	for(var i=0; i<JSONArray.length; i++)
	{
		var innerJSONObject = JSONArray[i];
		fahrerArray[i] = innerJSONObject[text];
	}
	return fahrerArray;
}

function setDriverSelectionMenu()
{
	var fahrerArray = getDriversFromLocalStorage();
	for(var i=0; i<fahrerArray.length; i++)
	{
		$('#FahrerAuswahl').append('<option value='+fahrerArray[i]+'>'+fahrerArray[i]+'</option>');
	}
	$('#FahrerAuswahl').selectmenu('refresh');
}

function getVehiclesFromLocalStorage()
{
	var JSONArray = holeArray("Minova_DispoClient_Data_TruckBean_array");
	var vehicleArray = new Array(JSONArray.length);
	var text = "Text";
	for(var i=0; i<JSONArray.length; i++)
	{
		var innerJSONObject = JSONArray[i];
		vehicleArray[i] = innerJSONObject[text];
	}
	return vehicleArray;
}

function setVehicleSelectionMenu()
{
	var vehicleArray = getVehiclesFromLocalStorage();
	for(var i=0; i<vehicleArray.length; i++)
	{
		$('#AufliegerAuswahl').append('<option value='+vehicleArray[i]+'>'+vehicleArray[i]+'</option>');
	}
	$('#AufliegerAuswahl').selectmenu('refresh');
}

function updateAnmeldeBildschirm()
{
	setDriverSelectionMenu();
	setVehicleSelectionMenu();
}

function setTourContent(tourID)
{
	var tankLagerNameTour1 = "BURGHAUSEN";
	var tankLagerNameTour2 = "AGIP FÜRNI";
	var tour1Content = document.getElementById('Tour1PageContent').innerHTML;
	var tour2Content = document.getElementById('Tour2PageContent').innerHTML;
	var touren = getTouren();
	
	var JSONArrayDepot = holeArray("Minova_DispoClient_Data_DepotBean_array");
	var JSONArrayLoadOrder = holeArray("Minova_DispoClient_Data_LoadOrderBean_array");
	
	var text = "Text";
	var city = "City";
	var street = "Street";
	var number = "Number";
	var phone = "Phone";
	var tripKey = "TripKey";
	
	if(tourID == 1)
	{
		for(var i=0; i<JSONArrayDepot.length; i++)
		{
			var innerJSONObjectDepot = JSONArrayDepot[i];
			if(innerJSONObjectDepot[text] == tankLagerNameTour1 && (!tour1Content || tour1Content == ""))
			{
				$('#Tour1PageContent').append('<div><b>' + touren[tourID-1] + '</b></div>');
				$('#Tour1PageContent').append('<div><b>Ort: ' + innerJSONObjectDepot[city] + '</b></div>');
				$('#Tour1PageContent').append('<div><b>Adresse: '+innerJSONObjectDepot[street]+' Nr. '+innerJSONObjectDepot[number]+', '+innerJSONObjectDepot[city]+'</b></div>');
				$('#Tour1PageContent').append('<div><b>Tel.: '+innerJSONObjectDepot[phone]+'</b></div>');
				$('#Tour1PageContent').append('<div data-role="controlgroup" id="Tour1Produkte"></div>');
			}
			
			for(var y=0; y<JSONArrayLoadOrder.length; y++)
			{
				var innerJSONObjectLoadOrder = JSONArrayLoadOrder[y];
				if(innerJSONObjectDepot[text] == tankLagerNameTour1 && innerJSONObjectLoadOrder[tripKey] == 4771 && (!tour1Content || tour1Content == ""))
				{
					$('#Tour1Produkte').append('<a href="#ProduktErfassungPage" rel="external" data-role="button" id="'+innerJSONObjectLoadOrder[text]+'" data-theme="e" data-icon="forward" data-iconpos="right"><b>'+innerJSONObjectLoadOrder[text]+'</b></a>');
					$('#Tour1Produkte').trigger('create');
					$('#'+innerJSONObjectLoadOrder[text]).on('click', function()
					{
						var produktTypAusJSONObj = innerJSONObjectLoadOrder[text].split(',');
						document.getElementById('ProduktTyp').innerHTML=produktTypAusJSONObj;
					});
				}
			}
		}
	}
	
	if(tourID == 2)
	{
		for(var i=0; i<JSONArrayDepot.length; i++)
		{
			var innerJSONObjectDepot = JSONArrayDepot[i];
			if(innerJSONObjectDepot[text] == tankLagerNameTour2 && (!tour2Content || tour2Content == ""))
			{
				$('#Tour2PageContent').append('<div><b>' + touren[tourID-1] + '</b></div>');
				$('#Tour2PageContent').append('<div><b>Ort: ' + innerJSONObjectDepot[city] + '</b></div>');
				$('#Tour2PageContent').append('<div><b>Adresse: '+innerJSONObjectDepot[street]+' Nr. '+innerJSONObjectDepot[number]+', '+innerJSONObjectDepot[city]+'</b></div>');
				$('#Tour2PageContent').append('<div><b>Tel.: '+innerJSONObjectDepot[phone]+'</b></div>');
				$('#Tour2PageContent').append('<div data-role="controlgroup" id="Tour2Produkte"></div>');
			}
			
			for(var y=0; y<JSONArrayLoadOrder.length; y++)
			{
				var innerJSONObjectLoadOrder = JSONArrayLoadOrder[y];
				if(innerJSONObjectDepot[text] == tankLagerNameTour2 && innerJSONObjectLoadOrder[tripKey] == 4776 && (!tour2Content || tour2Content == ""))
				{
					$('#Tour2Produkte').append('<a href="#ProduktErfassungPage" rel="external" data-role="button" id="'+innerJSONObjectLoadOrder[text]+'" data-theme="e" data-icon="forward" data-iconpos="right"><b>'+innerJSONObjectLoadOrder[text]+'</b></a>');
					$('#Tour2Produkte').trigger('create');
					$('#'+innerJSONObjectLoadOrder[text]).on('click', function()
					{
						var produktTypAusJSONObj = innerJSONObjectLoadOrder[text].split(',');
						document.getElementById('ProduktTyp').innerHTML=produktTypAusJSONObj;
					});
				}
			}
		}
	}
}


/*$('#Tour1Page').bind('pagebeforeshow', function()
{
	  // Add dynamic stuff to the page here
}).bind('pageinit', function()
{
	$('input').live('change', function()
	{
	    // Do something when this happens
	  });
});*/


$(document).bind('pagechange', function() 
{
	updateIndicator();
	updateStartScreen();
	updateAnmeldeBildschirm();
});

/*$('#Tour1Tanklager').live('pagecreate', function() 
{
	setTourContent(1);
	$('#Tour1Page').data({mobilePage: null}).page();
});

$('#Tour2Tanklager').live('pagecreate', function() 
{
	setTourContent(2);
	$('#Tour2Page').data({mobilePage: null}).page();
});*/