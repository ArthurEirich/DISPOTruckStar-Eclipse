function updateStartScreen() 
{
	var currentVehicleNumber = localStorage.getItem("currentVehicleNumber");
	if(!currentVehicleNumber)
	{
		document.getElementById('vehicleNumber').innerHTML = "kein Fahrzeug ausgewählt";
	}
	else
	{
		document.getElementById('vehicleNumber').innerHTML = currentVehicleNumber;
	}
	setVersion();
	setAnzahlTouren();
}

function updateIndicator() // prüft, ob Navigationshardware an oder aus ist
{
    document.getElementById('indicator').innerHTML = navigator.onLine ? 'OK' : 'X';
    document.getElementById('indicatorFunk').innerHTML = navigator.onLine ? 'Verbunden' : 'offline';
    document.getElementById('GPSIndicator').innerHTML = navigator.geolocation ? 'OK' : 'X';
}

function getCurrentDate()
{
	var today = new Date();
    var day = today.getDate();
    var month = today.getMonth()+1; //January is 0!
    var year = today.getFullYear();
    
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    if(day<10){day='0'+day} if(month<10){month='0'+month} if(hours<10){hours = "0"+hours} if(minutes<10){minutes = "0"+minutes} if(seconds<10){seconds = "0"+seconds} 
    today = day+'-'+month+'-'+year + " " + hours + ":" + minutes + ":" + seconds;
    return today.toString();
}

function getVersion() // parst die aktuelle Version aus einem Array, der aus Local Storage kommt
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

function getTouren() // liest den Array mit den aktuellen Touren ein
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

function setAnzahlTouren() // berechnet die Länge des Tourenarrays
{
	var anzahlTouren = getTouren().length;
	document.getElementById("anzahlTouren").innerHTML = anzahlTouren; // und setzt diese Länge auf der Startseite ein
}


function setCurrentDriverDataAndMoveToTouren() // Einlesen des ausgewählten Fahrers, eingegebenen Passworts und der Fahrzeugnummer 
{
	var currentDriver = String($('#FahrerAuswahl option:selected').text()); 
	var driverPassword = String($('#password').val());
	var currentVehicleNumber = String($('#AufliegerAuswahl option:selected').text());
	var isPasswordCorrect = checkPassword(currentDriver, driverPassword);
	if(isPasswordCorrect == true)
	{
		localStorage.setItem("currentDriver", currentDriver);
		localStorage.setItem("currentVehicleNumber", currentVehicleNumber);
		localStorage.setItem("driverPassword", driverPassword);
		$.mobile.changePage("#Touren"); // Weiterleitung zu der Touren-Seite
		$('#password').val('');
	}
	else
	{	
		alert("PIN falsch! Bitte versuchen Sie es erneut!");
		window.location.reload(); // Seite aktualisieren
	}
	updateAnmeldeBildschirm();
}

function checkPassword(currentDriver, password)
{
	var resultValue = null;
	var JSONArray = holeArray("Minova_DispoClient_Data_DriverBean_array");
	var text = "Text";
	var pinCode = "PinCode";
	for(var i=0; i<JSONArray.length; i++)
	{
		var innerJSONObject = JSONArray[i];
		if(String(innerJSONObject[text]) === currentDriver && String(innerJSONObject[pinCode]) === password)
		{
			resultValue = true;
			break;
		}
		else
		{
			resultValue = false;
		}
	}
	return resultValue;
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
	fahrerArray.sort();
	return fahrerArray;
}

function setDriverSelectionMenu()
{
	var driverSelectMenu = document.getElementById('FahrerAuswahl').innerHTML;
	var selectedIndex = null;
	var currentDriver = localStorage.getItem("currentDriver");
	var fahrerArray = getDriversFromLocalStorage();
	
	for(var i=0; i<fahrerArray.length; i++)
	{
		if(!driverSelectMenu) // wenn der Inhalt des Auswahlmenüs leer ist
		{
			$('#FahrerAuswahl').append('<option value='+fahrerArray[i]+'>'+fahrerArray[i]+'</option>');
			if(currentDriver == fahrerArray[i]) // wenn der aktuelle Fahrer mit dem aus dem Array übereinstimmt
			{
				selectedIndex = i; // wird dieser Index als "ausgewählt" gesetzt
			}
		}
		else // wenn der Inhalt des Auswahlmenüs bereits da ist
		{
			if(currentDriver == fahrerArray[i])
			{
				selectedIndex = i; // wird nur der Index gesetzt
			}
		}
	}
	$('#FahrerAuswahl')[0].selectedIndex = selectedIndex; // und der letzte aktuelle Fahrer in dem Auswahlmenü mit diesem Index vorbelegt
	$('#FahrerAuswahl').selectmenu('refresh'); // anschliessend wird das Menü aktualisiert, damit die Vorbelegung auch sichtbar ist
}

function getVehiclesFromLocalStorage() // Parsen aller Fahrzeugnummern aus dem Array mit JSON-Objekten
{
	var JSONArray = holeArray("Minova_DispoClient_Data_TruckBean_array");
	var vehicleArray = new Array(JSONArray.length);
	var text = "Text";
	
	for(var i=0; i<JSONArray.length; i++)
	{
		var innerJSONObject = JSONArray[i];
		vehicleArray[i] = innerJSONObject[text];
	}
	vehicleArray.sort();
	return vehicleArray;
}

function setVehicleSelectionMenu() // setzt die Fahrzeugauswahl analog zu der Fahrerauswahl
{
	var vehicleSelectMenu = document.getElementById('AufliegerAuswahl').innerHTML;
	var selectedIndex = null;
	var currentVehicleNumber = localStorage.getItem("currentVehicleNumber");
	var vehicleArray = getVehiclesFromLocalStorage();
	
	for(var i=0; i<vehicleArray.length; i++)
	{
		if(!vehicleSelectMenu)
		{
			$('#AufliegerAuswahl').append('<option value='+vehicleArray[i]+'>'+vehicleArray[i]+'</option>');
			if(currentVehicleNumber == vehicleArray[i])
			{
				selectedIndex = i;
			}
		}
		else
		{
			if(currentVehicleNumber == vehicleArray[i])
			{
				selectedIndex = i;
			}
		}
	}
	$('#AufliegerAuswahl')[0].selectedIndex = selectedIndex; // mit der Vorbelegung des aktuellen Fahrzeugs
	$('#AufliegerAuswahl').selectmenu('refresh');
}

function updateAnmeldeBildschirm()
{
	setDriverSelectionMenu(); // Vorbelegung des Fahrers
	setVehicleSelectionMenu(); // und des Fahrzeugs
}

function prepareChangePassDialog()
{
	$('#oldPassword').val('');
	$('#newPassword').val('');
	$('#confirmNewPassword').val('');
}

function changePassword()
{
	var oldPassInDialog = $('#oldPassword').val();
	var driverPassword = localStorage.getItem('driverPassword');
	var newPassword = $('#newPassword').val();
	var confirmNewPassword = $('#confirmNewPassword').val();
	
	if(oldPassInDialog == driverPassword && newPassword == confirmNewPassword)
	{
		localStorage.setItem('driverPassword', newPassword);
		changeDriverPassInTable(newPassword);
		alert("Ihr Passwort wurde erfolgreich geändert!");
		$.mobile.changePage('#anmeldeBildschirm'); // Weiterleitung zu der Fahreranmeldeseite
		
	}
	if(newPassword != confirmNewPassword)
	{
		alert("Das neue Passwort und die Wiederholung stimmen nicht überein! Bitte versuchen Sie es erneut!");
		$('#newPassword').val('');
		$('#confirmNewPassword').val('');
	}
}

function changeDriverPassInTable(newPassword) // Diese Methode soll das Passwort auch in der im Local Storage als JSONArray gespeicherten Fahrertabelle ändern
{
	var JSONArray = holeArray('Minova_DispoClient_Data_DriverBean_array'); // Zuerst wird der Array herausgelesen
	var text = "Text";
	var pinCode = "PinCode";
	var currentDriver = $('#FahrerAuswahl option:selected').text()
	for(var i=0; i<JSONArray.length; i++) // danach mit eine Schleife
	{
		var innerJSONObject = JSONArray[i];
		if(innerJSONObject[text] == currentDriver) // der benötigte Fahrer gefunden
		{
			innerJSONObject[pinCode] = newPassword; // und dass Passwort auf das neue gesetzt
		}
	}
	localStorage.setItem('Minova_DispoClient_Data_DriverBean_array', JSON.stringify(JSONArray)); // Abschliessend wird der alte Array mit dem neuen überschrieben
}

function setTourContent(tourID) // Diese Methode generiert den Inhalt der Seite, die die Touren anzeigt
{
	var tankLagerNameTour1 = "BURGHAUSEN";
	var tankLagerNameTour2 = "AGIP FÜRNI";
	var tour1Content = document.getElementById('Tour1PageContent').innerHTML;
	var tour2Content = document.getElementById('Tour2PageContent').innerHTML;
	var touren = getTouren();
	
	var JSONArrayDepot = holeArray("Minova_DispoClient_Data_DepotBean_array");
	var JSONArrayLoadOrder = holeArray("Minova_DispoClient_Data_LoadOrderBean_array");
	var JSONArrayDelivery = holeArray("Minova_DispoClient_Data_DeliveryBean_array");
	
	var deliveryKey = "DeliveryKey";
	var text = "Text";
	var city = "City";
	var street = "Street";
	var number = "Number";
	var phone = "Phone";
	var tripKey = "TripKey";
	
	if(tourID == 1) // Abhängig vom ID der Seite wird der Inhalt angepasst
	{
		for(var i=0; i<JSONArrayDepot.length; i++) // Schleife über den Array mit den Depotangaben
		{
			var innerJSONObjectDepot = JSONArrayDepot[i];
			if(innerJSONObjectDepot[text] == tankLagerNameTour1 && (!tour1Content || tour1Content == "")) // Bei der Übereinstimmung mit dem benötigten Tanklagernamen und leerem Content (leer, weil sonst der Inhalt mehrmals generiert wird)
			{
				// werden die Tanklagerangaben angepasst und der Seite hinzugefügt
				$('#Tour1PageContent').append('<div id="tour1PageContentAdresse"><b>Adresse: '+innerJSONObjectDepot[street]+' Nr. '+innerJSONObjectDepot[number]+', '+innerJSONObjectDepot[city]+'</b></div>');
				$('#Tour1PageContent').append('<div id="tour1PageContentTel"><b>Tel.: '+innerJSONObjectDepot[phone]+'<br></b></div>');
				$('#Tour1PageContent').append('<div id="LadeauftraegeTour1">Ladeaufträge für diese Tour:<br></div>');
				$('#Tour1PageContent').append('<div data-role="controlgroup" id="Tour1Produkte"></div>');
				$('#Tour1PageContent').append('<div id="LieferauftraegeTour1">Lieferaufträge für diese Tour:<br></div>');
				$('#Tour1PageContent').append('<div data-role="controlgroup" id="Tour1Kunden"></div>');
			}
			
			for(var y=0; y<JSONArrayLoadOrder.length; y++) // Schleife über den Array mit den Ladungsaufträgen
			{
				var innerJSONObjectLoadOrder = JSONArrayLoadOrder[y];
				if(innerJSONObjectDepot[text] == tankLagerNameTour1 && innerJSONObjectLoadOrder[tripKey] === "4771" && (!tour1Content || tour1Content == "")) 
					// Wenn der Ladeaufrag aus dem Array dem Tanklagernamen entspricht, bei dem der Fahrer das Fahrzeug beladen soll, wird der Inhalt für die Tour generiert
				{
					// dazu werden Buttons erzeugt, die die jeweilige Tour starten sollen; beim Klick erfolgt der Aufruf der Methode "adjustErfassungPage(this, tourID)", 
					//die die Maskenseite für die Eingabe der Produktinformation des Ladeprodukts generiert
					var buttonLinkToErfassung = ('<a href="#ProduktErfassungPage" data-role="button" id="'+innerJSONObjectLoadOrder[text]+'" onclick="adjustErfassungPage(this, '+tourID+')" data-theme="e" data-icon="arrow-r" data-iconpos="right">'+innerJSONObjectLoadOrder[text]+'</a>');
					$('#Tour1Produkte').append(buttonLinkToErfassung).trigger('create');
				}
			}
			
			for(var z=0; z<JSONArrayDelivery.length; z++)
			{
				var innerJSONObjectDelivery = JSONArrayDelivery[z];
				if(innerJSONObjectDelivery[tripKey] === "4771" && innerJSONObjectDelivery[deliveryKey] == "0" && innerJSONObjectDepot[text] == tankLagerNameTour1 && (!tour1Content || tour1Content == ""))
				{
					var buttonLinkToLieferAuftraegen = ('<a href="#KundenLieferAuftraege" data-role="button" id="'+innerJSONObjectDelivery[text]+'" onclick="adjustKundenLieferAuftraege(this, '+tourID+')" data-theme="e" data-icon="arrow-r" data-iconpos="right">'+innerJSONObjectDelivery[text]+'</a>');
					$('#Tour1Kunden').append(buttonLinkToLieferAuftraegen).trigger('create');
				}
			}
		}
	}
	
	if(tourID == 2) // Analoger Vorgang für die 2. Tour (derzeit nur zwei Touren, später soll dieser Vorgang dynamisiert werden)
	{
		for(var i=0; i<JSONArrayDepot.length; i++) // Schleife über den Array mit den Depotangaben
		{
			var innerJSONObjectDepot = JSONArrayDepot[i];
			if(innerJSONObjectDepot[text] == tankLagerNameTour2 && (!tour2Content || tour2Content == "")) // Bei der Übereinstimmung mit dem benötigten Tanklagernamen und leerem Content (leer, weil sonst der Inhalt mehrmals generiert wird)
			{
				// werden die Tanklagerangaben angepasst und der Seite hinzugefügt
				$('#Tour2PageContent').append('<div id="tour2PageContentAdresse"><b>Adresse: '+innerJSONObjectDepot[street]+' Nr. '+innerJSONObjectDepot[number]+', '+innerJSONObjectDepot[city]+'</b></div>');
				$('#Tour2PageContent').append('<div id="tour2PageContentTel"><b>Tel.: '+innerJSONObjectDepot[phone]+'</b></div>');
				$('#Tour2PageContent').append('<div id="LadeauftraegeTour2">Ladeaufträge für diese Tour:<br></div>');
				$('#Tour2PageContent').append('<div data-role="controlgroup" id="Tour2Produkte"></div>');
				$('#Tour2PageContent').append('<div id="LieferauftraegeTour2">Lieferaufträge für diese Tour:<br></div>');
				$('#Tour2PageContent').append('<div id="Tour2Kunden"></div>');
			}
			
			for(var y=0; y<JSONArrayLoadOrder.length; y++) // Schleife über den Array mit den Ladungsaufträgen
			{
				var innerJSONObjectLoadOrder = JSONArrayLoadOrder[y];
				if(innerJSONObjectDepot[text] == tankLagerNameTour2 && innerJSONObjectLoadOrder[tripKey] === "4776" && (!tour2Content || tour2Content == ""))
					// Wenn der Ladeaufrag aus dem Array dem Tanklagernamen entspricht, bei dem der Fahrer das Fahrzeug beladen soll, wird der Inhalt für die Tour generiert
				{
					// dazu werden Buttons erzeugt, die die jeweilige Tour starten sollen; beim Klick erfolgt der Aufruf der Methode "adjustErfassungPage(this, tourID)", 
					// die die Maskenseite für die Eingabe der Produktinformation des Ladeprodukts generiert
					// Als Id für die Buttons dient die jeweilige Art des Produkts (Bsp.: "Diesel mit Additiv, 6500 Liter")
					var produktTypButton = ('<a href="#ProduktErfassungPage" data-role="button" id="'+innerJSONObjectLoadOrder[text]+'" onclick="adjustErfassungPage(this, '+tourID+')" data-theme="e" data-icon="forward" data-iconpos="right">'+innerJSONObjectLoadOrder[text]+'</a>');
					$('#Tour2Produkte').append(produktTypButton).trigger('create');
				}
			}

			for(var z=0; z<JSONArrayDelivery.length; z++)
			{
				var innerJSONObjectDelivery = JSONArrayDelivery[z];
				if(innerJSONObjectDelivery[tripKey] === "4776" && innerJSONObjectDelivery[deliveryKey] == "0" && innerJSONObjectDepot[text] == tankLagerNameTour2 && (!tour2Content || tour2Content == ""))
				{
					var buttonLinkToLieferAuftraegen = ('<a href="#KundenLieferAuftraege" data-role="button" id="'+innerJSONObjectDelivery[text]+'" onclick="adjustKundenLieferAuftraege(this, '+tourID+')" data-theme="e" data-icon="arrow-r" data-iconpos="right">'+innerJSONObjectDelivery[text]+'</a>');
					$('#Tour2Kunden').append(buttonLinkToLieferAuftraegen).trigger('create');
				}
			}
		}
	}
} // end function

function adjustErfassungPage(wert, tourID)
{
	var string = document.getElementById(wert.id).innerHTML;
	var produktTypAusButton = string.slice(0,string.indexOf(',')); //Abschneiden der Button-Id aus der vorherigen Methode (die ID enthält das Produkttyp)
	document.getElementById('ProduktTypErfassung').innerHTML=produktTypAusButton; // Einfügen des Produkttyps in die Eingabemaske, damit der Fahrer sieht, welches Produkt er gerade erfassen soll
	var currentDate = getCurrentDate();
	$('input[type=datetime-local]').attr('min', currentDate);
	
	var wertString;
	var produktTyp;
	if(tourID == 1) // Die Generierung der Produkterfassungsseite hängt von der ID des Tours ab
	{
		wertString = wert.id.toString();
		produktTyp = wertString.slice(0, wertString.indexOf(','));
		var tour1ErfassteProdukte = localStorage.getItem('Tour 1-Erfasste Produkte'); // Einlesen der bereits erfassten Produkte für die 1. Tour
		if(tour1ErfassteProdukte) // Falls es welche gibt
		{
			tour1ErfassteProdukte = JSON.parse(tour1ErfassteProdukte); // werden diese aus dem Local Storage geparst
			for(var i=0; i<tour1ErfassteProdukte.length; i++) // und anschliessend die Maske mit den bereits erfassten Werten vorbelegt
				// dies dient dazu, wenn der Fahrer sich z. B. vertippt und eine Eingabe ändern will oder die Erfassung später fortfahren möchte
			{
				var innerJSONObject = tour1ErfassteProdukte[i];
				if(produktTyp == innerJSONObject["Produkttyp"])
				{
					$('#Liter15Grad').val(innerJSONObject["Liter 15°C"]);
					$('#Dichte').val(innerJSONObject["Dichte"]);
					$('#Nr').val(innerJSONObject["Nr."]);
					$('#Liter').val(innerJSONObject["Liter"]);
					$('#Kilo').val(innerJSONObject["Kilo"]);
					/*$('#Beginn').val(innerJSONObject["Beginn"]);
					$('#Ende').val(innerJSONObject["Ende"]);*/
				}
			}
		} // wenn es keine erfassten Produkte gibt, passiert nichts; die Maske wird leer eingeblendet
		
		if(document.getElementById('CancelErfassung') == null && document.getElementById('ApplyErfassung') == null) // Generieren von den Footer-Buttons für "Abbruch" und "Bestätigung" der Eingabe der Erfassungswerte
		{
			// falls noch keine Buttons generiert wurden, passiert es in den nächsten Zeilen
			// dem Button wird die Methode "erfasseProdukt(produktTyp, tourID)" zugewiesen 
			var cancelErfassungButton = ('<li><a href="#Tour1Page" id="CancelErfassung" data-role="button" data-icon="delete" data-theme="e">Abbruch</a></li>');
			var applyErfassungButton = ('<li><a href="#Tour1Page" id="ApplyErfassung" data-role="button" onclick="erfasseProdukt('+"'"+produktTyp+"'"+', '+tourID+')" data-icon="check" data-theme="e">Bestätigung</a></li>');
			$('#ProduktErfassungPageFooter').append(cancelErfassungButton).trigger('create');
			$('#ProduktErfassungPageFooter').append(applyErfassungButton).trigger('create');
		}
		else // falls die Buttons schon generiert und erstellt wurden
		{
			// wird die Verlinkung entsprechend angepasst (bspw. wenn man ein Produkt aus der Tour 1 erfasst hat und bestätigt, dass
			//die Verlinkung zu der Seite mit den Produkten für die Tour 1 erfolgt)
			// und die Parameter der Methode "erfasseProdukt" verändert
			wertString = wert.id.toString();
			produktTyp = wertString.slice(0, wertString.indexOf(','));
			$('#CancelErfassung').attr('href', '#Tour1Page');
			$('#ApplyErfassung').attr('href', '#Tour1Page');
			$('#ApplyErfassung').attr('onclick', 'erfasseProdukt('+"'"+produktTyp+"'"+', '+tourID+')');
		}
	}
	
	if(tourID == 2) // Analoges Vorgehen für die Generierung der Produkterfassungsseite für die Tour 2
	{
		wertString = wert.id.toString();
		produktTyp = wertString.slice(0, wertString.indexOf(',')); // Zuerst das zu erfassende Produkt generieren
		var tour2ErfassteProdukte = localStorage.getItem('Tour 2-Erfasste Produkte'); // Auslesen der für die Tour 2 bereits erfassten Produkte
		if(tour2ErfassteProdukte) // und falls es welche gibt
		{
			tour2ErfassteProdukte = JSON.parse(tour2ErfassteProdukte); // werden diese geparst und die nachfolgend generierte Eingabemaske vorbelegt
			for(var i=0; i<tour2ErfassteProdukte.length; i++)
			{
				var innerJSONObject = tour2ErfassteProdukte[i];
				if(produktTyp == innerJSONObject["Produkttyp"])
				{
					// damit der Fahrer entweder die fehlenden Eingaben macht oder die falschen korrigiert
					$('#Liter15Grad').val(innerJSONObject["Liter 15°C"]);
					$('#Dichte').val(innerJSONObject["Dichte"]);
					$('#Nr').val(innerJSONObject["Nr."]);
					$('#Liter').val(innerJSONObject["Liter"]);
					$('#Kilo').val(innerJSONObject["Kilo"]);
					/*$('#Beginn').val(innerJSONObject["Beginn"]);
					$('#Ende').val(innerJSONObject["Ende"]);*/
				}
			}
		} // falls es kein erfasstes Produkt gibt, wird die Maske leer generiert
		
		if(document.getElementById('CancelErfassung') == null && document.getElementById('ApplyErfassung') == null) // Zum Schluss werden die Buttons für "Abbruch" und "Bestätigung" der Eingabe
			// der erfassten Daten generiert
		{	
			var cancelErfassungButton = ('<li><a href="#Tour2Page" id="CancelErfassung" data-role="button" data-icon="delete" data-theme="e">Abbruch</a></li>');
			var applyErfassungButton = ('<li><a href="#Tour2Page" id="ApplyErfassung" data-role="button" onclick="erfasseProdukt('+"'"+produktTyp+"'"+', '+tourID+')" data-icon="check" data-theme="e">Bestätigung</a></li>');
			$('#ProduktErfassungPageFooter').append(cancelErfassungButton).trigger('create');
			$('#ProduktErfassungPageFooter').append(applyErfassungButton).trigger('create');
		}
		else // bzw. deren Verhalten angepasst, also Verlinkung und Methodenparameter beim Klick verändert
		{
			wertString = wert.id.toString();
			produktTyp = wertString.slice(0, wertString.indexOf(','));
			$('#CancelErfassung').attr('href', '#Tour2Page');
			$('#ApplyErfassung').attr('href', '#Tour2Page');
			$('#ApplyErfassung').attr('onclick', 'erfasseProdukt('+"'"+produktTyp+"'"+', '+tourID+')');
		}
	}
}

function adjustKundenLieferAuftraege(wert, tourID)
{
	$('#KundenLieferAuftraegePageContent').empty();
	
	var tour1ErfassteProdukte = localStorage.getItem('Tour 1-Erfasste Produkte');
	var tour2ErfassteProdukte = localStorage.getItem('Tour 2-Erfasste Produkte');
	
	var kundenLieferAuftraegePageContent = document.getElementById('KundenLieferAuftraegePageContent').innerHTML;
	var kundenLieferAuftraegePageFooter = document.getElementById('KundenLieferAuftraegePageFooter').innerHTML;
	
	var JSONArrayDelivery = holeArray('Minova_DispoClient_Data_DeliveryBean_array');
	var JSONArrayShipment = holeArray('Minova_DispoClient_Data_ShipmentBean_array');
	var JSONArrayLoadOrder = holeArray('Minova_DispoClient_Data_LoadOrderBean_array');
	
	var keyLong = "KeyLong";
	var keyLongValue;
	var keyLongArray = new Array();
	var text = "Text";
	
	var deliveryKey = "DeliveryKey";
	var shipmentKey = "ShipmentKey";
	var itemKey = "ItemKey";
	var tripKey = "TripKey";
	
	var name = "Name";
	var city = "City";
	var street = "Street";
	var number = "Number";
	var phoneNumber = "Phone";
	
	if(tourID == 1)
	{
		if(!tour1ErfassteProdukte)
		{
			if(document.getElementById('keineLieferAuftraegeMeldung') == null)
			{
				$('#KundenLieferAuftraegePageContent').append('<div id="keineLieferAuftraegeMeldung">Es gibt keine Verladeprodukte. Bitte erfassen Sie zuerst welche!</div>').trigger('create');
				$('#KundenLieferAuftraegePageFooterButton').attr('href', '#Tour1Page');
			}
		}
		
		else
		{
			tour1ErfassteProdukte = JSON.parse(tour1ErfassteProdukte);
			var anzahlZuErfassendeProdukteTour1 = $('#Tour1Produkte a').length;
			if(tour1ErfassteProdukte.length == anzahlZuErfassendeProdukteTour1)
			{
				for(var i=0; i<JSONArrayDelivery.length; i++)
				{
					var innerJSONObjectDelivery = JSONArrayDelivery[i];
					if(innerJSONObjectDelivery[text] == wert.id)
					{
						var kundenAdresse = document.getElementById('KundenLieferAuftraegePageContent').innerHTML;
						if(kundenAdresse == null || kundenAdresse == '')
						{
							$('#KundenLieferAuftraegePageContent').append('<div id="KundenAdresse">Kundenadresse: <br>'+innerJSONObjectDelivery[name]+', '+innerJSONObjectDelivery[street]+' Nr. '+innerJSONObjectDelivery[number]+', '+innerJSONObjectDelivery[city]+'</div>');
						}
						keyLongValue = innerJSONObjectDelivery[keyLong].valueOf();
						keyLongArray.push(keyLongValue);
					}
					
					if(keyLongValue == innerJSONObjectDelivery[deliveryKey])
					{
						keyLongArray.push(innerJSONObjectDelivery[keyLong]);
					}
				}
				
				for(var y=0; y<JSONArrayShipment.length; y++)
				{
					var innerJSONObjectShipment = JSONArrayShipment[y];
					for(var z=0; z<keyLongArray.length; z++)
					{
						if(keyLongArray[z] == innerJSONObjectShipment[deliveryKey] && innerJSONObjectShipment[keyLong] == innerJSONObjectShipment[shipmentKey] && (!kundenLieferAuftraegePageContent || kundenLieferAuftraegePageContent == ""))
						{
							var lieferungAbladeButton = ('<a href="#ProduktAbladePage" data-role="button" id="'+innerJSONObjectShipment[text]+'" class="lieferungAbladeButton" onclick="adjustProduktAbladePage(this, '+tourID+')" data-icon="arrow-r" data-iconpos="right" data-theme="e">'+innerJSONObjectShipment[text]+'</a>');
							$('#KundenLieferAuftraegePageContent').append(lieferungAbladeButton).trigger('create');
						}
					}
				}
				$('#KundenLieferAuftraegePageFooterButton').attr('href', '#Tour1Page');
			}
			
			else
			{
				$('#KundenLieferAuftraegePageContent').append('<div id="keineLieferAuftraegeMeldung">Sie haben nicht alle Produkte erfasst!</div>').trigger('create');
				$('#KundenLieferAuftraegePageFooterButton').attr('href', '#Tour1Page');
			}
		}
	}
	
	if(tourID == 2)
	{
		if(!tour2ErfassteProdukte)
		{
			if(document.getElementById('keineLieferAuftraegeMeldung') == null)
			{
				$('#KundenLieferAuftraegePageContent').append('<div id="keineLieferAuftraegeMeldung">Es gibt keine Verladeprodukte. <br>Bitte erfassen Sie zuerst welche!</div>').trigger('create');
				$('#KundenLieferAuftraegePageFooterButton').attr('href', '#Tour2Page');
			}
		}
		
		else
		{
			tour2ErfassteProdukte = JSON.parse(tour2ErfassteProdukte);
			var anzahlZuErfassendeProdukteTour2 = $('#Tour2Produkte a').length;
			if(tour2ErfassteProdukte.length == anzahlZuErfassendeProdukteTour2)
			{
				for(var i=0; i<JSONArrayDelivery.length; i++)
				{
					var innerJSONObjectDelivery = JSONArrayDelivery[i];
					if(innerJSONObjectDelivery[text] == wert.id)
					{
						var kundenAdresse = document.getElementById('KundenLieferAuftraegePageContent').innerHTML;
						if(kundenAdresse == null || kundenAdresse == '')
						{
							$('#KundenLieferAuftraegePageContent').append('<div id="KundenAdresse">Kundenadresse: <br>'+innerJSONObjectDelivery[name]+', '+innerJSONObjectDelivery[street]+' Nr. '+innerJSONObjectDelivery[number]+', '+innerJSONObjectDelivery[city]+'</div>');
						}
						keyLongValue = innerJSONObjectDelivery[keyLong].valueOf();
						keyLongArray.push(keyLongValue);
					}
					
					if(keyLongValue == innerJSONObjectDelivery[deliveryKey])
					{
						keyLongArray.push(innerJSONObjectDelivery[keyLong]);
					}
				}
				
				for(var y=0; y<JSONArrayShipment.length; y++)
				{
					var innerJSONObjectShipment = JSONArrayShipment[y];
					for(var z=0; z<keyLongArray.length; z++)
					{
						if(keyLongArray[z] == innerJSONObjectShipment[deliveryKey] && innerJSONObjectShipment[keyLong] == innerJSONObjectShipment[shipmentKey] && (!kundenLieferAuftraegePageContent || kundenLieferAuftraegePageContent == ""))
						{
							var lieferungAbladeButton = ('<a href="#ProduktAbladePage" data-role="button" id="'+innerJSONObjectShipment[text]+'" class="lieferungAbladeButton" onclick="adjustProduktAbladePage(this, '+tourID+')" data-icon="arrow-r" data-iconpos="right" data-theme="e">'+innerJSONObjectShipment[text]+'</a>');
							$('#KundenLieferAuftraegePageContent').append(lieferungAbladeButton).trigger('create');
						}
					}
				}
				$('#KundenLieferAuftraegePageFooterButton').attr('href', '#Tour2Page');
			}
			
			else
			{
				$('#KundenLieferAuftraegePageContent').append('<div id="keineLieferAuftraegeMeldung">Sie haben nicht alle Produkte erfasst!</div>').trigger('create');
				$('#KundenLieferAuftraegePageFooterButton').attr('href', '#Tour2Page');
			}
		}
	}
}

function adjustProduktAbladePage(wert, tourID)
{
	$("#vorpeilungDiv").css('display', 'none');
	$("#nachpeilungDiv").css('display', 'none');
	$("#pumpenStandDiv").css('display', 'none');
	
	var produktTyp;
	wertString = wert.id; // Zum Beispiel "ES 98  140, 15809Liter"
	wertStringCut = wertString.slice(0, wertString.indexOf(',')); // Zum Beispiel ES 98  140
	
	var JSONArrayShipment = holeArray('Minova_DispoClient_Data_ShipmentBean_array');
	
	var text = "Text";
	var deliveryKey = "DeliveryKey";
	var deliveryKeyValue;
	
	if(tourID == 1)
	{	
		
		for(var i=0; i<JSONArrayShipment.length; i++)
		{
			var innerJSONObjectShipment = JSONArrayShipment[i];
			if(innerJSONObjectShipment[text] == wert.id)
			{
				deliveryKeyValue = innerJSONObjectShipment[deliveryKey];
			}
			
			for(var y=0; y<JSONArrayShipment.length; y++)
			{
				var innerJSONObjShipment = JSONArrayShipment[y];
				if(innerJSONObjShipment[deliveryKey] == deliveryKeyValue)
				{
					var innerJSONObjShipmentTextColumnString = innerJSONObjShipment[text].toString();
					if(innerJSONObjShipmentTextColumnString.indexOf('VP') != -1)
					{
						$("#vorpeilungDiv").css('display', 'block');
						$("label[for='Vorpeilung']").text(innerJSONObjShipment[text]);
						$("label[for='Vorpeilung']").css('display', 'inline-block');
						$("#Vorpeilung").css('display', 'inline-block');
					}
					
					else if(innerJSONObjShipmentTextColumnString.indexOf('NP') != -1)
					{
						$("#nachpeilungDiv").css('display', 'block');
						$("label[for='NachpeilungVolume']").text(innerJSONObjShipment[text]);
						$("label[for='NachpeilungVolume']").css('display', 'inline-block');
						$("#NachpeilungVolume").css('display', 'inline-block');
					}
					
					else if(innerJSONObjShipmentTextColumnString.indexOf('PS') != -1)
					{
						$("#pumpenStandDiv").css('display', 'block');
						$("label[for='PumpenstandVolume']").text(innerJSONObjShipment[text]);
						$("label[for='PumpenstandVolume']").css('display', 'inline-block');
						$("#PumpenstandVolume").css('display', 'inline-block');
					}
				}
			}
		}
		
		if(wertStringCut == "DK"){produktTyp = "Diesel ohne Additiv";}if(wertStringCut == "DK add  100"){produktTyp = "Diesel mit Additiv";}if(wertStringCut == "ES 95  120"){produktTyp = "Super 95";}
		document.getElementById('ProduktTypAbladung').innerHTML = produktTyp;
		if(document.getElementById('CancelVerladung') == null && document.getElementById('ApplyVerladung') == null)
		{
			var cancelVerladungButton = ('<li><a href="#KundenLieferAuftraege" id="CancelVerladung" data-role="button" data-icon="delete" data-theme="e">Abbruch</a></li>');
			var applyVerladungButton = ('<li><a href="#KundenLieferAuftraege" id="ApplyVerladung" data-role="button" onclick="saveVerladenesProdukt('+"'"+produktTyp+"'"+', '+tourID+')" data-icon="check" data-theme="e">Bestätigung</a></li>');
			$('#ProduktAbladungPageFooter').append(cancelVerladungButton).trigger('create');
			$('#ProduktAbladungPageFooter').append(applyVerladungButton).trigger('create');
		}
		else
		{
			$('#CancelVerladung').attr('href', '#KundenLieferAuftraege');
			$('#ApplyVerladung').attr('href', '#KundenLieferAuftraege');
			$('#ApplyVerladung').attr('onclick', 'saveVerladenesProdukt('+"'"+produktTyp+"'"+', '+tourID+')');
		}
		
		$('#Abgabemenge').on("keyup", function()
		{
			var abgabeMenge = $('#Abgabemenge').val();
			var abgabeMengeInt = parseInt(abgabeMenge);
			var vorpeilung = $('#Vorpeilung').val();
			var vorpeilungInt = parseInt(vorpeilung);
			$('#GESAMTAngabe').val(abgabeMengeInt + vorpeilungInt);
		});
		
		$('#Vorpeilung').on("keyup", function()
		{
			var abgabeMenge = $('#Abgabemenge').val();
			var abgabeMengeInt = parseInt(abgabeMenge);
			var vorpeilung = $('#Vorpeilung').val();
			var vorpeilungInt = parseInt(vorpeilung);
			$('#GESAMTAngabe').val(abgabeMengeInt + vorpeilungInt);
		});
	}
	
	if(tourID == 2)
	{
		for(var i=0; i<JSONArrayShipment.length; i++)
		{
			var innerJSONObjectShipment = JSONArrayShipment[i];
			if(innerJSONObjectShipment[text] == wert.id)
			{
				deliveryKeyValue = innerJSONObjectShipment[deliveryKey];
			}
			
			for(var y=0; y<JSONArrayShipment.length; y++)
			{
				var innerJSONObjShipment = JSONArrayShipment[y];
				if(innerJSONObjShipment[deliveryKey] == deliveryKeyValue)
				{
					var innerJSONObjShipmentTextColumnString = innerJSONObjShipment[text].toString();
					if(innerJSONObjShipmentTextColumnString.indexOf('VP') != -1)
					{
						$("#vorpeilungDiv").css('display', 'block');
						$("label[for='Vorpeilung']").text(innerJSONObjShipment[text]);
						$("label[for='Vorpeilung']").css('display', 'inline-block');
						$("#Vorpeilung").css('display', 'inline-block');
					}
					
					if(innerJSONObjShipmentTextColumnString.indexOf('NP') != -1)
					{
						$("#nachpeilungDiv").css('display', 'block');
						$("label[for='NachpeilungVolume']").text(innerJSONObjShipment[text]);
						$("label[for='NachpeilungVolume']").css('display', 'inline-block');
						$("#NachpeilungVolume").css('display', 'inline-block');
					}
					
					if(innerJSONObjShipmentTextColumnString.indexOf('PS') != -1)
					{
						$("#pumpenStandDiv").css('display', 'block');
						$("label[for='PumpenstandVolume']").text(innerJSONObjShipment[text]);
						$("label[for='PumpenstandVolume']").css('display', 'inline-block');
						$("#PumpenstandVolume").css('display', 'inline-block');
					}
				}
			}
		}
		
		if(wertStringCut == "DK add  100"){produktTyp = "Diesel mit Additiv";}if(wertStringCut == "NB 91  130"){produktTyp = "Normalbenzin 91";}if(wertStringCut == "ES 95  120"){produktTyp = "Super 95";}if(wertStringCut == "ES 98  140"){produktTyp = "Super 98";}
		document.getElementById('ProduktTypAbladung').innerHTML = produktTyp;
		if(document.getElementById('CancelVerladung') == null && document.getElementById('ApplyVerladung') == null)
		{
			var cancelVerladungButton = ('<li><a href="#KundenLieferAuftraege" id="CancelVerladung" data-role="button" data-icon="delete" data-theme="e">Abbruch</a></li>');
			var applyVerladungButton = ('<li><a href="#KundenLieferAuftraege" id="ApplyVerladung" data-role="button" onclick="saveVerladenesProdukt('+"'"+produktTyp+"'"+', '+tourID+')" data-icon="check" data-theme="e">Bestätigung</a></li>');
			$('#ProduktAbladungPageFooter').append(cancelVerladungButton).trigger('create');
			$('#ProduktAbladungPageFooter').append(applyVerladungButton).trigger('create');
		}
		else
		{
			$('#CancelVerladung').attr('href', '#KundenLieferAuftraege');
			$('#ApplyVerladung').attr('href', '#KundenLieferAuftraege');
			$('#ApplyVerladung').attr('onclick', 'saveVerladenesProdukt('+"'"+produktTyp+"'"+', '+tourID+')');
		}
		
		$('#Abgabemenge').on("keyup", function()
		{
			var abgabeMenge = $('#Abgabemenge').val();
			var abgabeMengeInt = parseInt(abgabeMenge);
			var vorpeilung = $('#Vorpeilung').val();
			var vorpeilungInt = parseInt(vorpeilung);
			$('#GESAMTAngabe').val(abgabeMengeInt + vorpeilungInt);
		});
	
		$('#Vorpeilung').on("keyup", function()
		{
			var abgabeMenge = $('#Abgabemenge').val();
			var abgabeMengeInt = parseInt(abgabeMenge);
			var vorpeilung = $('#Vorpeilung').val();
			var vorpeilungInt = parseInt(vorpeilung);
			$('#GESAMTAngabe').val(abgabeMengeInt + vorpeilungInt);
		});
	}
}

function erfasseProdukt(typ, tourID)
{
	var erfassteProdukteArray;
	
	// hiermit werden die Werte aus den Eingabefeldern ausgelesen
	var produktTyp = typ.toString();
	var liter15 = $('#Liter15Grad').val();
	var dichte = $('#Dichte').val();
	var Nr = $('#Nr').val();
	var Liter = $('#Liter').val();
	var Kilo = $('#Kilo').val();
	var Beginn = $('#Beginn').val();
	var Ende = $('#Ende').val();
	
	// und anhand derer ein JSON-Objekt erstellt
	var JSONObj = {"Produkttyp":produktTyp, "Liter 15°C":liter15, "Dichte":dichte, "Nr.":Nr, "Liter":Liter, "Kilo":Kilo, "Beginn":Beginn, "Ende":Ende};
	
	if(tourID == 1)
	{
		erfassteProdukteArray = localStorage.getItem("Tour 1-Erfasste Produkte");
	
		if(!erfassteProdukteArray)
		{
			erfassteProdukteArray = [];
			erfassteProdukteArray.push(JSONObj);
			localStorage.setItem("Tour 1-Erfasste Produkte", JSON.stringify(erfassteProdukteArray));
		}
		else
		{
			erfassteProdukteArray = JSON.parse(erfassteProdukteArray);
			for(var i=0; i<erfassteProdukteArray.length; i++)
			{
				var key = "Produkttyp";
				var innerJSONObject = erfassteProdukteArray[i];
				
				// und wenn in den bereits erfassten Produkte irgendwelche Änderungen vorgenommen wurden
				if(typ == innerJSONObject[key])
				{
					erfassteProdukteArray.splice(i, 1, JSONObj);
					// wird der Eintrag im Local Storage mit den neuen Änderungen überschrieben
					localStorage.setItem("Tour 1-Erfasste Produkte", JSON.stringify(erfassteProdukteArray));
					// danach die vorbelegten Werte aus der Eingabemaske entfernt
					resetProductErfassungData();
					return;
				}
				
			}
			erfassteProdukteArray.push(JSONObj); // auch wenn die Eingaben nicht verändert wurden, wird der erfasste Produkt mit sich selbst überschrieben
			localStorage.setItem("Tour 1-Erfasste Produkte", JSON.stringify(erfassteProdukteArray));
		}
		resetProductErfassungData();
	}
	
	if(tourID == 2)
	{
		erfassteProdukteArray = localStorage.getItem("Tour 2-Erfasste Produkte");
	
		if(!erfassteProdukteArray)
		{
			erfassteProdukteArray = [];
			erfassteProdukteArray.push(JSONObj);
			localStorage.setItem("Tour 2-Erfasste Produkte", JSON.stringify(erfassteProdukteArray));
		}
		else
		{
			erfassteProdukteArray = JSON.parse(erfassteProdukteArray);
			for(var i=0; i<erfassteProdukteArray.length; i++)
			{
				var key = "Produkttyp";
				var innerJSONObject = erfassteProdukteArray[i];
				if(typ == innerJSONObject[key])
				{
					erfassteProdukteArray.splice(i, 1, JSONObj);
					localStorage.setItem("Tour 2-Erfasste Produkte", JSON.stringify(erfassteProdukteArray));
					resetProductErfassungData();
					return;
				}
			}
			erfassteProdukteArray.push(JSONObj);
			localStorage.setItem("Tour 2-Erfasste Produkte", JSON.stringify(erfassteProdukteArray));
		}
		resetProductErfassungData();
	}
}

function saveVerladenesProdukt(typ, tourID)
{
	var verladeneProdukteArray;
	
	var produktTyp = typ.toString();
	var abgabeMenge = $('#Abgabemenge').val();
	var bonNummer = $('#Bonnummer').val();
	var vorpeilung = $('#Vorpeilung').val();
	var gesamtAngabe = $('#GESAMTAngabe').val();
	var nachpeilungVolume = $('#NachpeilungVolume').val();
	var pumpenStandVolume = $('#PumpenstandVolume').val();
	
	var JSONObj = {"Produkttyp":produktTyp, "Abgabemenge":abgabeMenge, "Bonnummer":bonNummer, "Vorpeilung":vorpeilung, "Gesamtangabe":gesamtAngabe, "NachpeilungVolume":nachpeilungVolume, "PumpenstandVolume":pumpenStandVolume};
	
	if(tourID = 1)
	{
		verladeneProdukteArray = localStorage.getItem("Tour 1-Verladene Produkte");
		
		if(!verladeneProdukteArray)
		{
			verladeneProdukteArray = [];
			verladeneProdukteArray.push(JSONObj);
			localStorage.setItem("Tour 1-Verladene Produkte", JSON.stringify(verladeneProdukteArray));
		}
		
		else
		{
			verladeneProdukteArray = JSON.parse(verladeneProdukteArray);
			for(var i=0; i<verladeneProdukteArray.length; i++)
			{
				var key = "Produkttyp";
				var innerJSONObject = verladeneProdukteArray[i];
				if(typ == innerJSONObject[key])
				{
					verladeneProdukteArray.splice(i, 1, JSONObj);
					localStorage.setItem("Tour 1-Verladene Produkte", JSON.stringify(verladeneProdukteArray));
					resetProductVerladungData();
					return;
				}
			}
			verladeneProdukteArray.push(JSONObj);
			localStorage.setItem("Tour 1-Verladene Produkte", JSON.stringify(verladeneProdukteArray));
		}
		resetProductVerladungData();
	}
	
	if(tourID = 2)
	{
		verladeneProdukteArray = localStorage.getItem("Tour 2-Verladene Produkte");
		
		if(!verladeneProdukteArray)
		{
			verladeneProdukteArray = [];
			verladeneProdukteArray.push(JSONObj);
			localStorage.setItem("Tour 2-Verladene Produkte", JSON.stringify(verladeneProdukteArray));
		}
		
		else
		{
			verladeneProdukteArray = JSON.parse(verladeneProdukteArray);
			for(var i=0; i<verladeneProdukteArray.length; i++)
			{
				var key = "Produkttyp";
				var innerJSONObject = verladeneProdukteArray[i];
				if(typ == innerJSONObject[key])
				{
					verladeneProdukteArray.splice(i, 1, JSONObj);
					localStorage.setItem("Tour 2-Verladene Produkte", JSON.stringify(verladeneProdukteArray));
					resetProductVerladungData();
					return;
				}
			}
			verladeneProdukteArray.push(JSONObj);
			localStorage.setItem("Tour 2-Verladene Produkte", JSON.stringify(verladeneProdukteArray));
		}
		resetProductVerladungData();
	}
}

function resetProductErfassungData() // Diese Methode entfernt die eingegebenen Werte bei der Produkterfassung
{
	$('#Liter15Grad').val('');
	$('#Dichte').val('');
	$('#Nr').val('');
	$('#Liter').val('');
	$('#Kilo').val('');
	$('#Beginn').val('');
	$('#Ende').val('');
}

function resetProductVerladungData()
{
	$('#Abgabemenge').val('');
	$('#Bonnummer').val('');
	$('#Vorpeilung').val('');
	$('#GESAMTAngabe').val('');
	$('#NachpeilungVolume').val('');
	$('#PumpenstandVolume').val('');
}

$(document).bind('pagechange', function()  // Bei jeder Änderung der Seite wird zuerst
{
	updateIndicator(); // der Header aktualisiert
	updateStartScreen(); // der Startbildschrim mit den Daten aus Local Storage befüllt (Bsp.: Version des Software oder Anzahl offener Touren
	updateAnmeldeBildschirm(); // und zum Schluss der Bildschirm für die Fahreranmeldung mit dem zuletzt verwendeten Fahrzeug vorbelegt und 
							  // mit dem Namen des Fahrers, der als letzter das Gerät genutzt hat
});