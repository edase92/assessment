// Annahme: Datalayer Struktur ist bekannt

const dataLayer = [{
    "event": "Ecommerce - View Item Event",
    "event_name": "view_item",
    "view_item": {
        "currency": "",
        "items": [
            {
                "item_name": "Oral-Zahnbürste",
                "item_id": "002054TO",
                "price": 0,
                "item_brand": "oralb",
                "item_category": "",
                "item_category2": "oral-test",
                "item_category3": null,
                "item_category4": "ezahnbürsten",
                "item_variant": "schwarz",
                "quantity": 1,
                "discount": false
            }
        ],
        "view_item_location": undefined
    },
    "gtm.uniqueEventId": 168
}];


function checkMissingValues(dataLayer) {

    let datalayer = dataLayer[0];
    let eventParams = datalayer.view_item;
    let itemsArray = eventParams.items[0];
  
    let missingValues = [];
  
   // Check Datalayer
    for (let i in datalayer) {
      if (datalayer.hasOwnProperty(i)) {
        if (datalayer[i] === null) {
          console.log(`null value at key ${i} in datalayer`);
          missingValues.push(i);
        } else if (datalayer[i] === undefined) {
          console.log(`undefined value at key ${i} in datalayer`);
          missingValues.push(i);
        } else if (datalayer[i] === "") {
          console.log(`empty string at key ${i} in datalayer`);
          missingValues.push(i);
        }
      }
    };
  
    // Check Event Params
    for (let i in eventParams) {
      if (eventParams.hasOwnProperty(i)) {
        if (eventParams[i] === null) {
          console.log(`null value at key ${i} in view_item`);
          missingValues.push(i);
        } else if (eventParams[i] === undefined) {
          console.log(`undefined value at key ${i} in view_item`);
          missingValues.push(i);
        } else if (eventParams[i] === "") {
          console.log(`empty string at key ${i} in view_item`);
          missingValues.push(i);
        }
      }
    };
  
    // Check Items Array
    for (let i in itemsArray) {
      if (itemsArray.hasOwnProperty(i)) {
        if (itemsArray[i] === null) {
          console.log(`null value at key ${i} in items`);
          missingValues.push(i);
        } else if (itemsArray[i] === undefined) {
          console.log(`undefined value at key ${i} in items`);
          missingValues.push(i);
        } else if (itemsArray[i] === "") {
          console.log(`empty string at key ${i} in items`);
          missingValues.push(i);
        }
      }
    };

    if (missingValues.length > 0) {

        console.log(true); // return true
        console.log(`\nFound ${missingValues.length} issues with missing values at keys: \n\t--> ${missingValues}`);

    } else {

        return false

    }
  };

checkMissingValues(dataLayer)
