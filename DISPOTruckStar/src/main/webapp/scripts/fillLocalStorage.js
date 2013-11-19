function fillLocalStorage() {
	if (window.localStorage) {

		holeArray("Minova_Core_Data_ParameterBean_array");
		holeArray("Minova_DispoClient_Data_DeliveryBean_array");
		holeArray("Minova_DispoClient_Data_DeliveryExtensionBean_array");
		holeArray("Minova_DispoClient_Data_DepotBean_array");
		holeArray("Minova_DispoClient_Data_DriverBean_array");
		holeArray("Minova_DispoClient_Data_LoadOrderBean_array");
		holeArray("Minova_DispoClient_Data_MessageBean_array");
		holeArray("Minova_DispoClient_Data_ShipmentBean_array");
		holeArray("Minova_DispoClient_Data_TripBean_array");
		holeArray("Minova_DispoClient_Data_TripExtensionBean_array");
		holeArray("Minova_DispoClient_Data_TruckBean_array");
	}
	
	else
	{
		alert("Tut uns Leid, aber dieser Browser unterstuetzt leider keine Local-Storage Technik!");
		window.close();
	}
}

function holeArray(name) {
	var resultValue;
	if (name == "Minova_Core_Data_ParameterBean_array") {
		resultValue = localStorage.getItem(name);
		if (!resultValue) {
			resultValue = [ // begin of JSONArray
			{
				"KeyLong" : "1",
				"Text" : "DeviceId",
				"Value" : "200664"
			}, {
				"KeyLong" : "2",
				"Text" : "Firmware",
				"Value" : "WinCE 5.0 Core 255.4S2.130118a "
			}, {
				"KeyLong" : "3",
				"Text" : "Version",
				"Value" : "9.28.nightly-20130411-19435"
			}, {
				"KeyLong" : "4",
				"Text" : "LastSentTime",
				"Value" : "6,3518223317E+017"
			}, {
				"KeyLong" : "5",
				"Text" : "VehicleText",
				"Value" : "113 EW"
			}, {
				"KeyLong" : "6",
				"Text" : "Meter",
				"Value" : "Manual"
			}, {
				"KeyLong" : "7",
				"Text" : "DriverKey",
				"Value" : "16"
			}, {
				"KeyLong" : "8",
				"Text" : "ActiveTrip",
				"Value" : "4771"
			} ]; // end of JSONArray
			localStorage.setItem(name, JSON.stringify(resultValue));
		}

		else {
			resultValue = JSON.parse(resultValue);
		}

	}

	else if (name == "Minova_DispoClient_Data_DeliveryBean_array") {
		resultValue = localStorage.getItem(name);
		if (!resultValue) {
			resultValue = [ // begin of JSONArray
			{
				"KeyLong" : "36615",
				"Text" : "ENI, Michlmayr Rudolf, KremsmГј",
				"TripKey" : "4771",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"Name" : "Michlmayr Rudolf",
				"City" : "KremsmГјnster",
				"Street" : "Regau",
				"Number" : "6",
				"Suffix" : "NULL",
				"Phone" : "0650-8533279",
				"ShipmentOrder" : "4",
				"Remarks" : "Michlmayr KremsmГјnster St.Valentin",
				"Name2" : "Michlmayr Rudolf",
				"PostalCode" : "4550",
				"DeliveryReceipt" : "0",
				"X" : "14,13873",
				"Y" : "48,07838",
				"DeliveryKey" : "0",
				"OdrNo" : "0",
				"Country" : "NULL"
			}, {
				"KeyLong" : "37143",
				"Text" : "A1, A1 Tankstellenbetriebe, Li",
				"TripKey" : "4771",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"Name" : "A1 Linz",
				"City" : "Linz ",
				"Street" : "LandwiedstraГџe",
				"Number" : "0",
				"Suffix" : "NULL",
				"Phone" : "+43 732 6701320",
				"ShipmentOrder" : "5",
				"Remarks" : "T1-DK",
				"Name2" : "A1 Tankstellenbetriebe",
				"PostalCode" : "4020",
				"DeliveryReceipt" : "0",
				"X" : "14,28335",
				"Y" : "48,2693",
				"DeliveryKey" : "0",
				"OdrNo" : "0",
				"Country" : "NULL"
			}, {
				"KeyLong" : "37144",
				"Text" : "A1, A1 Tankstellenbetriebe, Li(37144)",
				"TripKey" : "4771",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"Name" : "NULL",
				"City" : "NULL",
				"Street" : "NULL",
				"Number" : "0",
				"Suffix" : "NULL",
				"Phone" : "NULL",
				"ShipmentOrder" : "6",
				"Remarks" : "T1-S95",
				"Name2" : "NULL",
				"PostalCode" : "NULL",
				"DeliveryReceipt" : "0",
				"X" : "0",
				"Y" : "0",
				"DeliveryKey" : "37143",
				"OdrNo" : "0",
				"Country" : "NULL"
			}, {
				"KeyLong" : "37162",
				"Text" : "ENI, Max Hennebichler, Unterwe",
				"TripKey" : "4776",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"Name" : "Hennebichler Max",
				"City" : "Unterweitersdorf ",
				"Street" : "BetriebsstraГџe",
				"Number" : "1",
				"Suffix" : "NULL",
				"Phone" : "+43 7235 63850",
				"ShipmentOrder" : "4",
				"Remarks" : "T1-DK",
				"Name2" : "Max Hennebichler",
				"PostalCode" : "4210",
				"DeliveryReceipt" : "0",
				"X" : "14,47715",
				"Y" : "48,35854",
				"DeliveryKey" : "0",
				"OdrNo" : "0",
				"Country" : "NULL"
			}, {
				"KeyLong" : "37163",
				"Text" : "ENI, Max Hennebichler, Unterwe(37163)",
				"TripKey" : "4776",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"Name" : "NULL",
				"City" : "NULL",
				"Street" : "NULL",
				"Number" : "0",
				"Suffix" : "NULL",
				"Phone" : "NULL",
				"ShipmentOrder" : "5",
				"Remarks" : "T1-NB91",
				"Name2" : "NULL",
				"PostalCode" : "NULL",
				"DeliveryReceipt" : "0",
				"X" : "0",
				"Y" : "0",
				"DeliveryKey" : "37162",
				"OdrNo" : "0",
				"Country" : "NULL"
			}, {
				"KeyLong" : "37164",
				"Text" : "ENI, Max Hennebichler, Unterwe(37164)",
				"TripKey" : "4776",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"Name" : "NULL",
				"City" : "NULL",
				"Street" : "NULL",
				"Number" : "0",
				"Suffix" : "NULL",
				"Phone" : "NULL",
				"ShipmentOrder" : "6",
				"Remarks" : "T1-S95",
				"Name2" : "NULL",
				"PostalCode" : "NULL",
				"DeliveryReceipt" : "0",
				"X" : "0",
				"Y" : "0",
				"DeliveryKey" : "37162",
				"OdrNo" : "0",
				"Country" : "NULL"
			}, {
				"KeyLong" : "37165",
				"Text" : "ENI, Max Hennebichler, Unterwe(37165)",
				"TripKey" : "4776",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"Name" : "NULL",
				"City" : "NULL",
				"Street" : "NULL",
				"Number" : "0",
				"Suffix" : "NULL",
				"Phone" : "NULL",
				"ShipmentOrder" : "7",
				"Remarks" : "T1-S98",
				"Name2" : "NULL",
				"PostalCode" : "NULL",
				"DeliveryReceipt" : "0",
				"X" : "0",
				"Y" : "0",
				"DeliveryKey" : "37162",
				"OdrNo" : "0",
				"Country" : "NULL"
			} ]; // end of JSONArray
			localStorage.setItem(name, JSON.stringify(resultValue));
		}

		else {
			resultValue = JSON.parse(resultValue);
		}
	}

	else if (name == "Minova_DispoClient_Data_DeliveryExtensionBean_array") {
		resultValue = localStorage.getItem(name);
		if (!resultValue) {
			resultValue = [ // begin of JSONArray
			{
				"KeyLong" : "1",
				"Text" : "36615@3",
				"DeliveryKey" : "36615",
				"ExtensionKey" : "3",
				"Value" : "Г„Г–ГњГ¤Г¶ГјГџ"
			}, {
				"KeyLong" : "2",
				"Text" : "36615@2",
				"DeliveryKey" : "36615",
				"ExtensionKey" : "2",
				"Value" : "BURGHAUSEN"
			}, {
				"KeyLong" : "3",
				"Text" : "37143@3",
				"DeliveryKey" : "37143",
				"ExtensionKey" : "3",
				"Value" : "Г„Г–ГњГ¤Г¶ГјГџ"
			}, {
				"KeyLong" : "4",
				"Text" : "37143@2",
				"DeliveryKey" : "37143",
				"ExtensionKey" : "2",
				"Value" : "BURGHAUSEN"
			}, {
				"KeyLong" : "5",
				"Text" : "37143@1",
				"DeliveryKey" : "37143",
				"ExtensionKey" : "1",
				"Value" : "4020"
			}, {
				"KeyLong" : "6",
				"Text" : "37162@3",
				"DeliveryKey" : "37162",
				"ExtensionKey" : "3",
				"Value" : "Г„Г–ГњГ¤Г¶ГјГџ"
			}, {
				"KeyLong" : "7",
				"Text" : "37162@2",
				"DeliveryKey" : "37162",
				"ExtensionKey" : "2",
				"Value" : "AGIP FГњRNI"
			}, {
				"KeyLong" : "8",
				"Text" : "37162@1",
				"DeliveryKey" : "37162",
				"ExtensionKey" : "1",
				"Value" : "6009"
			} ]; // end of JSONArray
			localStorage.setItem(name, JSON.stringify(resultValue));
		}

		else {
			resultValue = JSON.parse(resultValue);
		}
	}

	else if (name == "Minova_DispoClient_Data_DepotBean_array") {
		resultValue = localStorage.getItem(name);
		if (!resultValue) {
			resultValue = [ // begin of JSONArray
			{
				"KeyLong" : "1",
				"Text" : "NEUSTADT",
				"City" : "Neustadt an der Donau ",
				"Street" : "RaffineriestraГџe",
				"Number" : "0",
				"Suffix" : "NULL",
				"Phone" : "NULL",
				"X" : "0",
				"Y" : "0",
				"Country" : "DE",
				"PostalCode" : "93333"
			}, {
				"KeyLong" : "2",
				"Text" : "AGIP ZIRL",
				"City" : "Zirl ",
				"Street" : "SalzstraГџe",
				"Number" : "5",
				"Suffix" : "NULL",
				"Phone" : "NULL",
				"X" : "0",
				"Y" : "0",
				"Country" : "AT",
				"PostalCode" : "6170"
			}, {
				"KeyLong" : "3",
				"Text" : "LOBAU",
				"City" : "Wien ",
				"Street" : "LobgrundstraГџe",
				"Number" : "3",
				"Suffix" : "NULL",
				"Phone" : "+43 1 40440 0",
				"X" : "0",
				"Y" : "0",
				"Country" : "AT",
				"PostalCode" : "1220"
			}, {
				"KeyLong" : "4",
				"Text" : "ST. VALENT",
				"City" : "St. Valentin ",
				"Street" : "Wiener StraГџe",
				"Number" : "5",
				"Suffix" : "NULL",
				"Phone" : "NULL",
				"X" : "1616789",
				"Y" : "6139855",
				"Country" : "AT",
				"PostalCode" : "4300"
			}, {
				"KeyLong" : "6",
				"Text" : "TBG",
				"City" : "Salzburg ",
				"Street" : "RettenlackstraГџe",
				"Number" : "3",
				"Suffix" : "NULL",
				"Phone" : "NULL",
				"X" : "0",
				"Y" : "0",
				"Country" : "AT",
				"PostalCode" : "5020"
			}, {
				"KeyLong" : "7",
				"Text" : "BURGHAUSEN",
				"City" : "Wien ",
				"Street" : "LobgrundstraГџe",
				"Number" : "3",
				"Suffix" : "NULL",
				"Phone" : "+43 1 40440 0",
				"X" : "0",
				"Y" : "0",
				"Country" : "AT",
				"PostalCode" : "1220"
			}, {
				"KeyLong" : "8",
				"Text" : "FELDKIRCHE",
				"City" : "Feldkirchen ",
				"Street" : "EmeranstraГџe",
				"Number" : "57",
				"Suffix" : "NULL",
				"Phone" : "NULL",
				"X" : "0",
				"Y" : "0",
				"Country" : "AT",
				"PostalCode" : "85622"
			}, {
				"KeyLong" : "9",
				"Text" : "LINZ SHELL",
				"City" : "Linz ",
				"Street" : "Am Tankhafen",
				"Number" : "6",
				"Suffix" : "NULL",
				"Phone" : "NULL",
				"X" : "1595663",
				"Y" : "6156521",
				"Country" : "AT",
				"PostalCode" : "4020"
			}, {
				"KeyLong" : "10",
				"Text" : "VOHBURG",
				"City" : "Vohburg a.d. Donau ",
				"Street" : "Irschinger Weg",
				"Number" : "1",
				"Suffix" : "NULL",
				"Phone" : "NULL",
				"X" : "0",
				"Y" : "0",
				"Country" : "AT",
				"PostalCode" : "85088"
			}, {
				"KeyLong" : "11",
				"Text" : "KEMPTEN",
				"City" : "Kempten ",
				"Street" : "Im Moos",
				"Number" : "2",
				"Suffix" : "NULL",
				"Phone" : "NULL",
				"X" : "0",
				"Y" : "0",
				"Country" : "AT",
				"PostalCode" : "87435"
			}, {
				"KeyLong" : "12",
				"Text" : "INGOLSTADT",
				"City" : "Ingolstadt ",
				"Street" : "EssostraГџe",
				"Number" : "1",
				"Suffix" : "NULL",
				"Phone" : "NULL",
				"X" : "0",
				"Y" : "0",
				"Country" : "AT",
				"PostalCode" : "85092"
			}, {
				"KeyLong" : "13",
				"Text" : "LINZ BP",
				"City" : "Linz ",
				"Street" : "Am Tankhafen",
				"Number" : "6",
				"Suffix" : "NULL",
				"Phone" : "NULL",
				"X" : "1595663",
				"Y" : "6156521",
				"Country" : "AT",
				"PostalCode" : "4020"
			}, {
				"KeyLong" : "14",
				"Text" : "MOL KORNEU",
				"City" : "Korneuburg ",
				"Street" : "DonaulГ¤nde",
				"Number" : "0",
				"Suffix" : "NULL",
				"Phone" : "43 2262 747 210",
				"X" : "0",
				"Y" : "0",
				"Country" : "AT",
				"PostalCode" : "2100"
			}, {
				"KeyLong" : "15",
				"Text" : "AGIP FГњRNI",
				"City" : "FГјrnitz ",
				"Street" : "IndustriestraГџe",
				"Number" : "10",
				"Suffix" : "NULL",
				"Phone" : "+43 4257 23950 ",
				"X" : "0",
				"Y" : "0",
				"Country" : "NULL",
				"PostalCode" : "9586"
			}, {
				"KeyLong" : "16",
				"Text" : "VCELNA",
				"City" : "Vcelna ",
				"Street" : "Ctyri chalupy",
				"Number" : "459",
				"Suffix" : "NULL",
				"Phone" : "NULL",
				"X" : "0",
				"Y" : "0",
				"Country" : "CZ",
				"PostalCode" : "37382"
			}, {
				"KeyLong" : "17",
				"Text" : "VTG MГјnchen",
				"City" : "MГјnchen ",
				"Street" : "Detmoldstrasse",
				"Number" : "11",
				"Suffix" : "NULL",
				"Phone" : "+49 (089) 357336 0",
				"X" : "0",
				"Y" : "0",
				"Country" : "DE",
				"PostalCode" : "80935"
			}, {
				"KeyLong" : "19",
				"Text" : "MГјnzer Enn",
				"City" : "Enns ",
				"Street" : "Ennshafenstrasse",
				"Number" : "36",
				"Suffix" : "NULL",
				"Phone" : "0732-668899",
				"X" : "0",
				"Y" : "0",
				"Country" : "AT",
				"PostalCode" : "4470"
			}, {
				"KeyLong" : "20",
				"Text" : "KTTL",
				"City" : "Kitzingen",
				"Street" : "Repperndorfer StraГџe",
				"Number" : "6",
				"Suffix" : "NULL",
				"Phone" : "NULL",
				"X" : "0",
				"Y" : "0",
				"Country" : "NULL",
				"PostalCode" : "97318"
			}, {
				"KeyLong" : "21",
				"Text" : "WГњTL",
				"City" : "WГјrzburg",
				"Street" : "RottendorferstraГџe",
				"Number" : "5",
				"Suffix" : "NULL",
				"Phone" : "NULL",
				"X" : "0",
				"Y" : "0",
				"Country" : "NULL",
				"PostalCode" : "97072"
			} ]; // end of JSONArray
			localStorage.setItem(name, JSON.stringify(resultValue));
		}

		else {
			resultValue = JSON.parse(resultValue);
		}
	}

	else if (name == "Minova_DispoClient_Data_DriverBean_array") {
		resultValue = localStorage.getItem(name);
		if (!resultValue) {
			resultValue = [ // begin of JSONArray
			{
				"KeyText" : "5",
				"Text" : "ETZELSDORF",
				"PinCode" : "611"
			}, {
				"KeyText" : "6",
				"Text" : "EDER ",
				"PinCode" : "0"
			}, {
				"KeyText" : "7",
				"Text" : "LASSACHER ",
				"PinCode" : "0"
			}, {
				"KeyText" : "10",
				"Text" : "ZWIFL ",
				"PinCode" : "1402"
			}, {
				"KeyText" : "11",
				"Text" : "KГ–YSГњREN ",
				"PinCode" : "0"
			}, {
				"KeyText" : "12",
				"Text" : "BLAGOJEVIC",
				"PinCode" : "0"
			}, {
				"KeyText" : "13",
				"Text" : "SCHNELLING",
				"PinCode" : "0"
			}, {
				"KeyText" : "15",
				"Text" : "MINICHBERG",
				"PinCode" : "57"
			}, {
				"KeyText" : "16",
				"Text" : "ADZEM ",
				"PinCode" : "0"
			}, {
				"KeyText" : "17",
				"Text" : "SALZBURGER",
				"PinCode" : "68"
			}, {
				"KeyText" : "18",
				"Text" : "SELAK ",
				"PinCode" : "79"
			}, {
				"KeyText" : "19",
				"Text" : "PETKOVIC ",
				"PinCode" : "0"
			}, {
				"KeyText" : "20",
				"Text" : "ONARAN ",
				"PinCode" : "0"
			}, {
				"KeyText" : "21",
				"Text" : "ECKARDT ",
				"PinCode" : "111"
			}, {
				"KeyText" : "22",
				"Text" : "MUCHA",
				"PinCode" : "114"
			}, {
				"KeyText" : "23",
				"Text" : "LINDLBAUER",
				"PinCode" : "115"
			}, {
				"KeyText" : "24",
				"Text" : "ERBER ",
				"PinCode" : "0"
			}, {
				"KeyText" : "25",
				"Text" : "MAIERHOFER",
				"PinCode" : "0"
			}, {
				"KeyText" : "26",
				"Text" : "REITER ",
				"PinCode" : "0"
			}, {
				"KeyText" : "27",
				"Text" : "SГ„CKL ",
				"PinCode" : "0"
			}, {
				"KeyText" : "28",
				"Text" : "CALISKAN ",
				"PinCode" : "0"
			}, {
				"KeyText" : "29",
				"Text" : "GRUJIC ",
				"PinCode" : "0"
			}, {
				"KeyText" : "30",
				"Text" : "RUPPRECHT ",
				"PinCode" : "0"
			}, {
				"KeyText" : "31",
				"Text" : "ECKARDT (31)",
				"PinCode" : "0"
			}, {
				"KeyText" : "32",
				"Text" : "DATTENDORF",
				"PinCode" : "0"
			}, {
				"KeyText" : "33",
				"Text" : "HAUSMANN ",
				"PinCode" : "216"
			}, {
				"KeyText" : "34",
				"Text" : "BRANDL ",
				"PinCode" : "0"
			}, {
				"KeyText" : "35",
				"Text" : "JARNIG ",
				"PinCode" : "256"
			}, {
				"KeyText" : "36",
				"Text" : "SCHWERTL ",
				"PinCode" : "0"
			}, {
				"KeyText" : "37",
				"Text" : "SCHINNER ",
				"PinCode" : "0"
			}, {
				"KeyText" : "45",
				"Text" : "MГњHLBERGER",
				"PinCode" : "276"
			}, {
				"KeyText" : "48",
				"Text" : "KNEISSL",
				"PinCode" : "274"
			}, {
				"KeyText" : "49",
				"Text" : "LAZAREVIC",
				"PinCode" : "275"
			}, {
				"KeyText" : "50",
				"Text" : "MIKLOS",
				"PinCode" : "85"
			}, {
				"KeyText" : "51",
				"Text" : "LAGLER",
				"PinCode" : "1000"
			}, {
				"KeyText" : "57",
				"Text" : "OBERMAIR",
				"PinCode" : "258"
			}, {
				"KeyText" : "58",
				"Text" : "SALHOFER",
				"PinCode" : "66"
			}, {
				"KeyText" : "60",
				"Text" : "ZГ¶chbauer",
				"PinCode" : "NULL"
			}, {
				"KeyText" : "52",
				"Text" : "BONIFER",
				"PinCode" : "9999"
			}, {
				"KeyText" : "53",
				"Text" : "ZANDOKI",
				"PinCode" : "257"
			}, {
				"KeyText" : "54",
				"Text" : "HEINRICH",
				"PinCode" : "247"
			}, {
				"KeyText" : "55",
				"Text" : "NETZTHALER",
				"PinCode" : "169"
			}, {
				"KeyText" : "59",
				"Text" : "KASTNER",
				"PinCode" : "281"
			}, {
				"KeyText" : "62",
				"Text" : "FLUERASCH",
				"PinCode" : "NULL"
			}, {
				"KeyText" : "56",
				"Text" : "MAIERHOFE",
				"PinCode" : "124"
			}, {
				"KeyText" : "63",
				"Text" : "ROTTER",
				"PinCode" : "NULL"
			}, {
				"KeyText" : "64",
				"Text" : "DURAN",
				"PinCode" : "NULL"
			} ]; // end of JSONArray
			localStorage.setItem(name, JSON.stringify(resultValue));
		}

		else {
			resultValue = JSON.parse(resultValue);
		}
	}

	else if (name == "Minova_DispoClient_Data_LoadOrderBean_array") {
		resultValue = localStorage.getItem(name);
		if (!resultValue) {
			resultValue = [ // begin of JSONArray
			{
				"KeyLong" : "40937",
				"Text" : "Diesel ohne Additiv,  6500Liter",
				"TripKey" : "4771",
				"ItemKey" : "17",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"Preselection" : "0",
				"BillOfLoading" : "NULL",
				"LoadingReference" : "NULL",
				"OrderNumber" : "1",
				"PaperWork" : "0",
				"OrderKeyText" : "NULL",
				"CustomerCode" : "NULL",
				"Remarks" : "NULL",
				"LoadOrderKey" : "0",
				"DepotKey" : "7",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "40939",
				"Text" : "Diesel mit Additiv,  38999Liter",
				"TripKey" : "4771",
				"ItemKey" : "16",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"Preselection" : "0",
				"BillOfLoading" : "NULL",
				"LoadingReference" : "NULL",
				"OrderNumber" : "2",
				"PaperWork" : "0",
				"OrderKeyText" : "NULL",
				"CustomerCode" : "NULL",
				"Remarks" : "NULL",
				"LoadOrderKey" : "0",
				"DepotKey" : "7",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "40940",
				"Text" : "Super 95,  38999Liter",
				"TripKey" : "4771",
				"ItemKey" : "19",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"Preselection" : "0",
				"BillOfLoading" : "NULL",
				"LoadingReference" : "NULL",
				"OrderNumber" : "3",
				"PaperWork" : "0",
				"OrderKeyText" : "NULL",
				"CustomerCode" : "NULL",
				"Remarks" : "NULL",
				"LoadOrderKey" : "0",
				"DepotKey" : "7",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "40954",
				"Text" : "Diesel mit Additiv,  18000Liter",
				"TripKey" : "4776",
				"ItemKey" : "16",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"Preselection" : "0",
				"BillOfLoading" : "NULL",
				"LoadingReference" : "NULL",
				"OrderNumber" : "1",
				"PaperWork" : "0",
				"OrderKeyText" : "NULL",
				"CustomerCode" : "NULL",
				"Remarks" : "NULL",
				"LoadOrderKey" : "0",
				"DepotKey" : "15",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "40955",
				"Text" : "Super 95,  27000Liter",
				"TripKey" : "4776",
				"ItemKey" : "19",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"Preselection" : "0",
				"BillOfLoading" : "NULL",
				"LoadingReference" : "NULL",
				"OrderNumber" : "2",
				"PaperWork" : "0",
				"OrderKeyText" : "NULL",
				"CustomerCode" : "NULL",
				"Remarks" : "NULL",
				"LoadOrderKey" : "0",
				"DepotKey" : "15",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "40956",
				"Text" : "Super 98,  15809Liter",
				"TripKey" : "4776",
				"ItemKey" : "18",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"Preselection" : "0",
				"BillOfLoading" : "NULL",
				"LoadingReference" : "NULL",
				"OrderNumber" : "3",
				"PaperWork" : "0",
				"OrderKeyText" : "NULL",
				"CustomerCode" : "NULL",
				"Remarks" : "NULL",
				"LoadOrderKey" : "0",
				"DepotKey" : "15",
				"DeliveredKilo" : "0"
			} ]; // end of JSONArray
			localStorage.setItem(name, JSON.stringify(resultValue));
		}

		else {
			resultValue = JSON.parse(resultValue);
		}
	}

	else if (name == "Minova_DispoClient_Data_MessageBean_array") {
		resultValue = localStorage.getItem(name);
		if (!resultValue) {
			resultValue = [ // begin of JSONArray
			{
				"KeyLong" : "1",
				"Text" : "ADD`1`:200664`[PN]`3`Version`9.28.nightly-20130411-19435`",
				"Status" : "0",
				"Type" : "2",
				"Date" : "2013-10-23 13:06:55.000"
			} ]; // end of JSONArray
			localStorage.setItem(name, JSON.stringify(resultValue));
		}

		else {
			resultValue = JSON.parse(resultValue);
		}
	}

	else if (name == "Minova_DispoClient_Data_ShipmentBean_array") {
		resultValue = localStorage.getItem(name);
		if (!resultValue) {
			resultValue = [ // begin of JSONArray
			{
				"KeyLong" : "140968",
				"Text" : "DK, 6500Liter",
				"DeliveryKey" : "36615",
				"ItemKey" : "17",
				"Start" : "2013-10-24 13:01:41.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "6500",
				"ShipmentKey" : "140968",
				"CustomerCode" : "p Michlmay",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "4",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "142928",
				"Text" : "DK add  100, 38999Liter",
				"DeliveryKey" : "37143",
				"ItemKey" : "16",
				"Start" : "2013-10-24 13:01:59.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "38999",
				"ShipmentKey" : "142928",
				"CustomerCode" : "4020",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "5",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "142932",
				"Text" : "ES 95  120, 38999Liter",
				"DeliveryKey" : "37144",
				"ItemKey" : "19",
				"Start" : "2013-10-24 13:01:59.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "38999",
				"ShipmentKey" : "142932",
				"CustomerCode" : "4020",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "6",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "142925",
				"Text" : "VP DK add 100, 40950Liter",
				"DeliveryKey" : "37143",
				"ItemKey" : "40",
				"Start" : "2013-10-24 13:01:59.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "40950",
				"ShipmentKey" : "142928",
				"CustomerCode" : "4020",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "5001",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "142926",
				"Text" : "NP DK add 100, 39000Liter",
				"DeliveryKey" : "37143",
				"ItemKey" : "1834",
				"Start" : "2013-10-24 13:01:59.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "39000",
				"ShipmentKey" : "142928",
				"CustomerCode" : "4020",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "5002",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "142927",
				"Text" : "PS DK add 100, 0Liter",
				"DeliveryKey" : "37143",
				"ItemKey" : "1835",
				"Start" : "2013-10-24 13:01:59.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "0",
				"ShipmentKey" : "142928",
				"CustomerCode" : "4020",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "5003",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "142929",
				"Text" : "VP ES 95 120, 40950Liter",
				"DeliveryKey" : "37144",
				"ItemKey" : "42",
				"Start" : "2013-10-24 13:01:59.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "40950",
				"ShipmentKey" : "142932",
				"CustomerCode" : "4020",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "6001",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "142930",
				"Text" : "NP ES 95 120, 39000Liter",
				"DeliveryKey" : "37144",
				"ItemKey" : "1844",
				"Start" : "2013-10-24 13:01:59.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "39000",
				"ShipmentKey" : "142932",
				"CustomerCode" : "4020",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "6002",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "142931",
				"Text" : "PS ES 95 120, 0Liter",
				"DeliveryKey" : "37144",
				"ItemKey" : "1868",
				"Start" : "2013-10-24 13:01:59.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "0",
				"ShipmentKey" : "142932",
				"CustomerCode" : "4020",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "6003",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "142993",
				"Text" : "DK add  100, 18000Liter",
				"DeliveryKey" : "37162",
				"ItemKey" : "16",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "18000",
				"ShipmentKey" : "142993",
				"CustomerCode" : "6009",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "4",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "142997",
				"Text" : "NB 91  130, 9000Liter",
				"DeliveryKey" : "37163",
				"ItemKey" : "20",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "9000",
				"ShipmentKey" : "142997",
				"CustomerCode" : "6009",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "5",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "143001",
				"Text" : "ES 95  120, 18000Liter",
				"DeliveryKey" : "37164",
				"ItemKey" : "19",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "18000",
				"ShipmentKey" : "143001",
				"CustomerCode" : "6009",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "6",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "143005",
				"Text" : "ES 98  140, 15809Liter",
				"DeliveryKey" : "37165",
				"ItemKey" : "18",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "15809",
				"ShipmentKey" : "143005",
				"CustomerCode" : "6009",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "7",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "142990",
				"Text" : "VP DK add 100, 18900Liter",
				"DeliveryKey" : "37162",
				"ItemKey" : "40",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "18900",
				"ShipmentKey" : "142993",
				"CustomerCode" : "6009",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "4001",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "142991",
				"Text" : "NP DK add 100, 18000Liter",
				"DeliveryKey" : "37162",
				"ItemKey" : "1834",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "18000",
				"ShipmentKey" : "142993",
				"CustomerCode" : "6009",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "4002",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "142992",
				"Text" : "PS DK add 100, 0Liter(142992)",
				"DeliveryKey" : "37162",
				"ItemKey" : "1835",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "0",
				"ShipmentKey" : "142993",
				"CustomerCode" : "6009",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "4003",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "142994",
				"Text" : "VP NB 91 130, 9450Liter",
				"DeliveryKey" : "37163",
				"ItemKey" : "46",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "9450",
				"ShipmentKey" : "142997",
				"CustomerCode" : "6009",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "5001",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "142995",
				"Text" : "NP NB 91 130, 9000Liter",
				"DeliveryKey" : "37163",
				"ItemKey" : "1848",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "9000",
				"ShipmentKey" : "142997",
				"CustomerCode" : "6009",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "5002",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "142996",
				"Text" : "PS NB 91 130, 0Liter",
				"DeliveryKey" : "37163",
				"ItemKey" : "1872",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "0",
				"ShipmentKey" : "142997",
				"CustomerCode" : "6009",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "5003",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "142998",
				"Text" : "VP ES 95 120, 18900Liter",
				"DeliveryKey" : "37164",
				"ItemKey" : "42",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "18900",
				"ShipmentKey" : "143001",
				"CustomerCode" : "6009",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "6001",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "142999",
				"Text" : "NP ES 95 120, 18000Liter",
				"DeliveryKey" : "37164",
				"ItemKey" : "1844",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "18000",
				"ShipmentKey" : "143001",
				"CustomerCode" : "6009",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "6002",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "143000",
				"Text" : "PS ES 95 120, 0Liter(143000)",
				"DeliveryKey" : "37164",
				"ItemKey" : "1868",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "0",
				"ShipmentKey" : "143001",
				"CustomerCode" : "6009",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "6003",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "143002",
				"Text" : "VP ES 98 140, 18900Liter",
				"DeliveryKey" : "37165",
				"ItemKey" : "49",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "18900",
				"ShipmentKey" : "143005",
				"CustomerCode" : "6009",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "7001",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "143003",
				"Text" : "NP ES 98 140, 18000Liter",
				"DeliveryKey" : "37165",
				"ItemKey" : "1851",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "18000",
				"ShipmentKey" : "143005",
				"CustomerCode" : "6009",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "7002",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			}, {
				"KeyLong" : "143004",
				"Text" : "PS ES 98 140, 0Liter",
				"DeliveryKey" : "37165",
				"ItemKey" : "1875",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DeliveredAmbientQuantity" : "0",
				"DeliveredStandardQuantity" : "0",
				"StandardDensity" : "0",
				"MeasuredDensity" : "0",
				"MeterReading" : "0",
				"MeterReadingItemAmbient" : "0",
				"MeterReadingItemStandard" : "0",
				"Vat" : "0",
				"Price" : "0",
				"SeqNr" : "0",
				"InvoiceNumber" : "0",
				"AverageTemperature" : "0",
				"ReferenceTemperature" : "0",
				"VariationReason" : "0",
				"Preselection" : "0",
				"ShipmentKey" : "143005",
				"CustomerCode" : "6009",
				"MeteringPoint" : "0",
				"Error" : "0",
				"ShipmentPreperation" : "0",
				"MeterNumber" : "NULL",
				"DriverNumber" : "NULL",
				"VehicleNumber" : "NULL",
				"ItemNumber" : "0",
				"ItemText" : "0",
				"PreselectionType" : "NULL",
				"CalculationType" : "0",
				"DensityChange" : "0",
				"Amount" : "0",
				"BillConfiguration" : "0",
				"ShipmentOrder" : "NULL",
				"Status" : "NULL",
				"PositionX" : "7003",
				"PositionY" : "25",
				"PositionTime" : "0",
				"PosNo" : "0",
				"Manual" : "1900-01-01 00:00:00.000",
				"DeliveredKilo" : "0"
			} ]; // end of JSONArray
			localStorage.setItem(name, JSON.stringify(resultValue));
		}

		else {
			resultValue = JSON.parse(resultValue);
		}
	}

	else if (name == "Minova_DispoClient_Data_TripBean_array") {
		resultValue = localStorage.getItem(name);
		if (!resultValue) {
			resultValue = [ // begin of JSONArray
			{
				"KeyLong" : "4771",
				"Text" : "Do 4771 - Donnerstag",
				"Start" : "2013-10-24 12:17:07.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DriverKey" : "16",
				"ScheduledDate" : "2013-10-24 00:00:00.000",
				"TripOrder" : "1",
				"VehicleKey" : "3",
				"Remarks" : "Donnerstag",
				"Distance" : "0"
			}, {
				"KeyLong" : "4776",
				"Text" : "Do 4776 - Donnerstag",
				"Start" : "1900-01-01 00:00:00.000",
				"Stop" : "1900-01-01 00:00:00.000",
				"Processed" : "0",
				"DriverKey" : "0",
				"ScheduledDate" : "2013-10-24 00:00:00.000",
				"TripOrder" : "2",
				"VehicleKey" : "3",
				"Remarks" : "Donnerstag",
				"Distance" : "0"
			} ]; // end of JSONArray
			localStorage.setItem(name, JSON.stringify(resultValue));
		}

		else {
			resultValue = JSON.parse(resultValue);
		}
	}

	else if (name == "Minova_DispoClient_Data_TripExtensionBean_array") {
		resultValue = localStorage.getItem(name);
		if (!resultValue) {
			resultValue = [ // begin of JSONArray
			{
				"KeyLong" : "1",
				"Text" : "4771@32",
				"TripKey" : "4771",
				"ExtensionKey" : "32",
				"Value" : "SL 113 EW"
			}, {
				"KeyLong" : "2",
				"Text" : "4771@29",
				"TripKey" : "4771",
				"ExtensionKey" : "29",
				"Value" : "24.10.13"
			}, {
				"KeyLong" : "3",
				"Text" : "4771@22",
				"TripKey" : "4771",
				"ExtensionKey" : "22",
				"Value" : "8041 Graz-Thondorf "
			}, {
				"KeyLong" : "4",
				"Text" : "4771@21",
				"TripKey" : "4771",
				"ExtensionKey" : "21",
				"Value" : "BundesstraГџe 8"
			}, {
				"KeyLong" : "5",
				"Text" : "4771@20",
				"TripKey" : "4771",
				"ExtensionKey" : "20",
				"Value" : "A1 Tankstellenbetrieb  GmbH"
			}, {
				"KeyLong" : "6",
				"Text" : "4771@72",
				"TripKey" : "4771",
				"ExtensionKey" : "72",
				"Value" : "4020 Linz "
			}, {
				"KeyLong" : "7",
				"Text" : "4771@43",
				"TripKey" : "4771",
				"ExtensionKey" : "43",
				"Value" : "45499"
			}, {
				"KeyLong" : "8",
				"Text" : "4771@71",
				"TripKey" : "4771",
				"ExtensionKey" : "71",
				"Value" : "LandwiedstraГџe "
			}, {
				"KeyLong" : "9",
				"Text" : "4771@42",
				"TripKey" : "4771",
				"ExtensionKey" : "42",
				"Value" : "38999"
			}, {
				"KeyLong" : "10",
				"Text" : "4771@70",
				"TripKey" : "4771",
				"ExtensionKey" : "70",
				"Value" : "A1 Linz"
			}, {
				"KeyLong" : "11",
				"Text" : "4771@12",
				"TripKey" : "4771",
				"ExtensionKey" : "12",
				"Value" : "1220 Wien "
			}, {
				"KeyLong" : "12",
				"Text" : "4771@11",
				"TripKey" : "4771",
				"ExtensionKey" : "11",
				"Value" : "LobgrundstraГџe 3"
			}, {
				"KeyLong" : "13",
				"Text" : "4771@10",
				"TripKey" : "4771",
				"ExtensionKey" : "10",
				"Value" : "OMV Austria GmbH."
			}, {
				"KeyLong" : "14",
				"Text" : "4771@30",
				"TripKey" : "4771",
				"ExtensionKey" : "30",
				"Value" : "SL 211 JH"
			}, {
				"KeyLong" : "15",
				"Text" : "4771@31",
				"TripKey" : "4771",
				"ExtensionKey" : "31",
				"Value" : "16"
			}, {
				"KeyLong" : "16",
				"Text" : "4776@32",
				"TripKey" : "4776",
				"ExtensionKey" : "32",
				"Value" : "SL 113 EW"
			}, {
				"KeyLong" : "17",
				"Text" : "4776@29",
				"TripKey" : "4776",
				"ExtensionKey" : "29",
				"Value" : "24.10.13"
			}, {
				"KeyLong" : "18",
				"Text" : "4776@22",
				"TripKey" : "4776",
				"ExtensionKey" : "22",
				"Value" : "1200 Wien "
			}, {
				"KeyLong" : "19",
				"Text" : "4776@21",
				"TripKey" : "4776",
				"ExtensionKey" : "21",
				"Value" : "Handelskai 94-96"
			}, {
				"KeyLong" : "20",
				"Text" : "4776@20",
				"TripKey" : "4776",
				"ExtensionKey" : "20",
				"Value" : "ENI Austria GmbH."
			}, {
				"KeyLong" : "21",
				"Text" : "4776@72",
				"TripKey" : "4776",
				"ExtensionKey" : "72",
				"Value" : "4210 Unterweitersdorf "
			}, {
				"KeyLong" : "22",
				"Text" : "4776@43",
				"TripKey" : "4776",
				"ExtensionKey" : "43",
				"Value" : "18000"
			}, {
				"KeyLong" : "23",
				"Text" : "4776@71",
				"TripKey" : "4776",
				"ExtensionKey" : "71",
				"Value" : "BetriebsstraГџe 1"
			}, {
				"KeyLong" : "24",
				"Text" : "4776@42",
				"TripKey" : "4776",
				"ExtensionKey" : "42",
				"Value" : "27000"
			}, {
				"KeyLong" : "25",
				"Text" : "4776@70",
				"TripKey" : "4776",
				"ExtensionKey" : "70",
				"Value" : "Hennebichler Max"
			}, {
				"KeyLong" : "26",
				"Text" : "4776@12",
				"TripKey" : "4776",
				"ExtensionKey" : "12",
				"Value" : "9586 FГјrnitz "
			}, {
				"KeyLong" : "27",
				"Text" : "4776@11",
				"TripKey" : "4776",
				"ExtensionKey" : "11",
				"Value" : "IndustriestraГџe 10"
			}, {
				"KeyLong" : "28",
				"Text" : "4776@40",
				"TripKey" : "4776",
				"ExtensionKey" : "40",
				"Value" : "15809"
			}, {
				"KeyLong" : "29",
				"Text" : "4776@10",
				"TripKey" : "4776",
				"ExtensionKey" : "10",
				"Value" : "Agip FГјrnitz"
			} ]; // end of JSONArray
			localStorage.setItem(name, JSON.stringify(resultValue));
		}

		else {
			resultValue = JSON.parse(resultValue);
		}
	}

	else if (name == "Minova_DispoClient_Data_TruckBean_array") {
		resultValue = localStorage.getItem(name);
		if (!resultValue) {
			resultValue = [ {
				"KeyLong" : "1",
				"Text" : "101SL",
				"SerialNumber" : ""
			}, {
				"KeyLong" : "2",
				"Text" : "120CT",
				"SerialNumber" : ""
			}, {
				"KeyLong" : "3",
				"Text" : "108SL",
				"SerialNumber" : ""
			} ];
			localStorage.setItem(name, JSON.stringify(resultValue));
		}

		else {
			resultValue = JSON.parse(resultValue);
		}
	}

	return resultValue;
}
