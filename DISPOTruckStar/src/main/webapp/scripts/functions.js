function updateStartScreen() 
{
	var currentVehicleNumber = localStorage.getItem("currentVehicleNumber"); // liest die aktuelle Nummer des Fahrzeugs aus Local Storage
	if(!currentVehicleNumber) // wenn dazu kein Eintrag existiert
	{
		document.getElementById('vehicleNumber').innerHTML = "kein Fahrzeug ausgewählt"; // wird diese Meldung ausgegeben
	}
	else // wenn es existiert
	{
		document.getElementById('vehicleNumber').innerHTML = currentVehicleNumber; // wird es auch angezeigt
	}
	setVersion();
	setAnzahlTouren();
}

function loadLastConfig()
{
    alert("Load last config should be implemented!");
}

function resetConfig()
{
    alert("Reset Config should be implemented!!!");
}

function updateIndicator() // prüft, ob Navigationshardware an oder aus ist
{
	// und setzt die entsprechenden Werte ein
    document.getElementById('indicator').innerHTML = navigator.onLine ? 'OK' : 'X';
    document.getElementById('indicatorFunk').innerHTML = navigator.onLine ? 'Verbunden' : 'offline';
    document.getElementById('GPSIndicator').innerHTML = navigator.geolocation ? 'OK' : 'X';
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
    return resultValue; // und gibt es zurücks
}

function setVersion() // setzt die aktuelle Version des Software
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
	return tourenArray; // und gibt den zurück
}

function setAnzahlTouren() // berechnet die Länge des Tourenarrays
{
	var anzahlTouren = getTouren().length;
	document.getElementById("anzahlTouren").innerHTML = anzahlTouren; // und setzt diese Länge auf der Startseite ein
}


function setCurrentDriverData() // Einlesen des ausgewählten Fahrers, eingegebenen Passworts und der Fahrzeugnummer 
{
	var currentDriver = String($('#FahrerAuswahl option:selected').text()); 
	var driverPassword = String($('#password').val());
	var currentVehicleNumber = String($('#AufliegerAuswahl option:selected').text());
	var isPasswordCorrect = checkPassword(currentDriver, driverPassword); // Überprüfung, ob das eingegebene Passwort mit dem dem Fahrer zugewiesenen Passwort übereinstimmt
	if(isPasswordCorrect == true) // wenn ja
	{
		localStorage.setItem("currentDriver", currentDriver); // Speicherung des ausgewählten Fahrers als aktuellen in den Local Storage (wird beim nächsten Start der App ebenfalls vorbelegt)
		localStorage.setItem("currentVehicleNumber", currentVehicleNumber); // dasselbe für seine Fahrzeugnummer (wird beim nächsten Start der App ebenfalls vorbelegt)...
		localStorage.setItem("driverPassword", driverPassword); //... und Passwort
		$.mobile.changePage("#Touren"); // Weiterleitung zu den Touren
		$('#password').val('');
	}
	else // wenn nein
	{	
		alert("PIN falsch! Bitte versuchen Sie es erneut!");
		window.location.reload(); // Seite aktualisieren
	}
	updateAnmeldeBildschirm(); // und anschliessend die Vorbelegung des aktuellen Fahrers und der Fahrzeugnummer
}

function checkPassword(currentDriver, password) // Überprüfung des eingegebenen Passworts mit dem dem Fahrer zugewiesenen
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
	return resultValue; // Ergebnis der Überprüfung zurückliefern
}

function getDriversFromLocalStorage() // Parsen aller Fahrer aus dem Array mit JSON-Objekten
{
	var JSONArray = holeArray("Minova_DispoClient_Data_DriverBean_array");
	var fahrerArray = new Array(JSONArray.length);
	var text = "Text";
	for(var i=0; i<JSONArray.length; i++)
	{
		var innerJSONObject = JSONArray[i];
		fahrerArray[i] = innerJSONObject[text];
	}
	return fahrerArray; // und Rückgabe als ein ganz normaler Array
}

function setDriverSelectionMenu() // setzt die Fahrerauswahl
{
	var driverSelectMenu = document.getElementById('FahrerAuswahl').innerHTML;
	var selectedIndex = null;
	var currentDriver = localStorage.getItem("currentDriver");
	var fahrerArray = getDriversFromLocalStorage();
	
	for(var i=0; i<fahrerArray.length; i++) // Schleife über alle Fahrer
	{
		if(!driverSelectMenu) // wenn der Inhalt des Auswahlmenüs leer ist
		{
			$('#FahrerAuswahl').append('<option value='+fahrerArray[i]+'>'+fahrerArray[i]+'</option>'); // wird es in dieser Schleige erzeugt
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
	return vehicleArray; // und Rückgabe derer als ein normaler Array
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

function changePassword() // Diese Methode dient zur Passwortänderung
{
	var oldPassInDialog = $('#oldPassword').val(); // Das in dem Popup-Dialog eingegebene alte Passwort
	var driverPassword = localStorage.getItem('driverPassword'); // Das im Local Storage gespeicherte momentane Passwort
	var newPassword = $('#newPassword').val(); // Das neu eingegebene Passwort
	var confirmNewPassword = $('#confirmNewPassword').val(); // und dessen Bestätigung
	
	if(oldPassInDialog == driverPassword && newPassword == confirmNewPassword) // Wenn das momentane Passwort und das in dem Dialog eingegebene alte Passwort sowie
		// das neu eingegebene und bestätigte Passwörter übereinstimmen
	{
		localStorage.setItem('driverPassword', newPassword); // wird das Passwort auf das neue geändert und im Local Storage gespeichert
		changeDriverPassInTable(newPassword); // Das neue Passwort auch in der Fahrertabelle ändern; diese befindet sich im Local Storage als ein JSONArray gespeichert
		alert("Ihr Passwort wurde erfolgreich geändert!"); // Feedback für den Benutzer, dass die Aktion erfolgreich war
		$.mobile.changePage('#anmeldeBildschirm'); // Weiterleitung zu der Fahreranmeldeseite 
	}
	if(newPassword != confirmNewPassword) // Wenn die beiden neuen Passwörter ungleich sind
	{
		// wird die entsprechende Meldung ausgegeben, der Nutzer aufgefordert, beide Passwörter korrekt einzugeben und
		alert("Das neue Passwort und die Passwortbestätigung stimmen nicht überein! Versuchen Sie es bitte erneut!");
		var newPassword = $('#newPassword').val('');
		var confirmNewPassword = $('#confirmNewPassword').val('');
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
	var tankLagerNameTour2 = "AGIP FГњRNI";
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
				$('#Tour1PageContent').append('<div><b>' + touren[tourID-1] + '</b></div>');
				$('#Tour1PageContent').append('<div><b>Ort: ' + innerJSONObjectDepot[city] + '</b></div>');
				$('#Tour1PageContent').append('<div><b>Adresse: '+innerJSONObjectDepot[street]+' Nr. '+innerJSONObjectDepot[number]+', '+innerJSONObjectDepot[city]+'</b></div>');
				$('#Tour1PageContent').append('<div><b>Tel.: '+innerJSONObjectDepot[phone]+'<br></b></div>');
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
					/*
					 * 
					 * TODO Inhalt der Abladeseite implementieren und jeweils anpassen
					 * 
					 * 
					 * 
					 * */
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
				$('#Tour2PageContent').append('<div><b>' + touren[tourID-1] + '</b></div>');
				$('#Tour2PageContent').append('<div><b>Ort: ' + innerJSONObjectDepot[city] + '</b></div>');
				$('#Tour2PageContent').append('<div><b>Adresse: '+innerJSONObjectDepot[street]+' Nr. '+innerJSONObjectDepot[number]+', '+innerJSONObjectDepot[city]+'</b></div>');
				$('#Tour2PageContent').append('<div><b>Tel.: '+innerJSONObjectDepot[phone]+'</b></div>');
				$('#Tour2PageContent').append('<div id="LadeauftraegeTour2">Ladeaufträge für diese Tour:<br></div>');
				$('#Tour2PageContent').append('<div data-role="controlgroup" id="Tour2Produkte"></div>');
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
			
			/*
			 * 
			 * 
			  TODO Tour2Kunden Buttons implementieren und danach den Inhalt der Methode adjustKundenLieferAuftraege anpassen
			 * 
			 * 
			 */
			
		}
	}
} // end function

function adjustErfassungPage(wert, tourID)
{
	var string = document.getElementById(wert.id).innerHTML;
	var produktTypAusJSONObj = string.slice(0,string.indexOf(',')); //Abschneiden der Button-Id aus der vorherigen Methode (die ID enthält das Produkttyp)
	document.getElementById('ProduktTypErfassung').innerHTML=produktTypAusJSONObj; // Einfügen des Produkttyps in die Eingabemaske, damit der Fahrer sieht, welches Produkt er gerade erfassen soll
	
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
					$('#Beginn').val(innerJSONObject["Beginn"]);
					$('#Ende').val(innerJSONObject["Ende"]);
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
					$('#Beginn').val(innerJSONObject["Beginn"]);
					$('#Ende').val(innerJSONObject["Ende"]);
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
	var tour1ErfassteProdukte = localStorage.getItem('Tour 1-Erfasste Produkte');
	var tour2ErfassteProdukte = localStorage.getItem('Tour 2-Erfasste Produkte');
	var kundenLieferAuftraegePageContent = document.getElementById('KundenLieferAuftraegePageContent').innerHTML;
	var kundenLieferAuftraegePageFooter = document.getElementById('KundenLieferAuftraegePageFooter').innerHTML;
	var JSONArrayDelivery = holeArray('Minova_DispoClient_Data_DeliveryBean_array');
	var JSONArrayShipment = holeArray('Minova_DispoClient_Data_ShipmentBean_array');
	var keyLong = "KeyLong";
	var keyLongValue;
	var keyLongArray = new Array();
	var text = "Text";
	var deliveryKey = "DeliveryKey";
	var shipmentKey = "ShipmentKey";
	
	if(tourID == 1)
	{
		if(!tour1ErfassteProdukte)
		{
			$('#KundenLieferAuftraegePageContent').append('<div id="keineLieferAuftraegeMeldung">Es gibt keine Verladeprodukte. Bitte erfassen Sie zuerst welche!</div>').trigger('create');
		}
		
		else
		{
			for(var i=0; i<JSONArrayDelivery.length; i++)
			{
				var innerJSONObjectDelivery = JSONArrayDelivery[i];
				if(innerJSONObjectDelivery[text] == wert.id)
				{
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
						var lieferungAbladeButton = ('<a href="#ProduktAbladePage" data-role="button" data-icon="arrow-r" data-iconpos="right" data-theme="e">'+innerJSONObjectShipment[text]+'</a>');
						$('#KundenLieferAuftraegePageContent').append(lieferungAbladeButton).trigger('create');
						$('#KundenLieferAuftraegePageFooter').append('<li><a href="#Tour1Page" data-role="button" data-icon="back" data-iconpos="left" data-theme="e">Zurück zu der Tour</a></li>').trigger('create');
					}
				}
			}
		}
	}
	
	if(tourID == 2)
	{
		/**************************************Hier ähnlicher Code wie für ID = 1****************************************/
	}
}

function erfasseProdukt(typ, tourID) // diese Methode dient dem Auslesen der Eingaben aus der Produkterfassungsmaske
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
	
	if(tourID == 1) // abhängig von der ID
	{
		// werden die erfassten Produkte aus dem Local Storage ausgelesen
		erfassteProdukteArray = localStorage.getItem("Tour 1-Erfasste Produkte");
	
		if(!erfassteProdukteArray) // falls es keine gibt
		{
			erfassteProdukteArray = [];
			// werden diese in einen leeren Array platziert
			erfassteProdukteArray.push(JSONObj);
			// und der Array im Local Storage gespeichert
			localStorage.setItem("Tour 1-Erfasste Produkte", JSON.stringify(erfassteProdukteArray));
		}
		else // falls es welche gibt
		{
			// werden diese geparst
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
					// danach die vorbelegten Werte aus der Eingabemaske entfernen
					resetProductData();
					return;
				}
				
			}
			erfassteProdukteArray.push(JSONObj); // auch wenn die Eingaben nicht verändert wurden, wird der erfasste Produkt mit sich selbst überschrieben
			localStorage.setItem("Tour 1-Erfasste Produkte", JSON.stringify(erfassteProdukteArray)); // und anschliessend im Local Storage gespeichert
		}
		resetProductData(); // Eingabemaske zur nächsten Erfassung leer machen
	}
	
	if(tourID == 2) // Analoges Vorgehen für die 2. Tour
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
					resetProductData();
					return;
				}
				
			}
			erfassteProdukteArray.push(JSONObj);
			localStorage.setItem("Tour 2-Erfasste Produkte", JSON.stringify(erfassteProdukteArray));
		}
		resetProductData();
	}
}

function verladeProdukt()
{
	/*********************
	 * 
	 * if(document.getElementById('CancelAbladung') == null && document.getElementById('ApplyAbladung') == null)
			{
				var cancelAbladungButton = ('<li><a href="#Tour1Kunden" id="CancelAbladung" data-role="button" data-icon="delete" data-theme="e">Abbruch</a></li>');
				var applyAbladungButton = ('<li><a href="#Tour1Kunden" id="ApplyAbladung" data-role="button" onclick="verladeProdukt('+"'"+innerJSONObjectShipment[text]+"'"+', '+tourID+')" data-icon="check" data-theme="e">Bestätigung</a></li>');
			}
	 * 
	 * 		UND SO WEITER.......!!!!!!!!!!!!!!!
	 * 
	 * **Diese Methode implementieren*********************/
}

function resetProductData() // Diese Methode entfernt die eingegebenen Werte bei der Produkterfassung
{
	$('#Liter15Grad').val('');
	$('#Dichte').val('');
	$('#Nr').val('');
	$('#Liter').val('');
	$('#Kilo').val('');
	$('#Beginn').val('');
	$('#Ende').val('');
}

$(document).bind('pagechange', function()  // Bei jeder Änderung der Seite wird zuerst
{
	updateIndicator(); // der Header aktualisiert
	updateStartScreen(); // der Startbildschrim mit den Daten aus Local Storage befüllt (Bsp.: Version des Software oder Anzahl offener Touren
	updateAnmeldeBildschirm(); // und zum Schluss der Bildschirm für die Fahreranmeldung mit dem zuletzt verwendeten Fahrzeug vorbelegt und 
							  // mit dem Namen des Fahrers, der als letzter das Gerät genutzt hat
});