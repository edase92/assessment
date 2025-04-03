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

    let missingValuesDatalayer = [];
    let missingValuesEventParams = [];
    let missingValuesItemsArray = [];
  
   // Check Datalayer
    for (let i in datalayer) {
      if (datalayer.hasOwnProperty(i)) {
        if (datalayer[i] === null) {
          console.log(`\n...null value at key ${i} in datalayer`);
          missingValues.push(i);
          missingValuesDatalayer.push(i);
        } else if (datalayer[i] === undefined) {
          console.log(`\n...undefined value at key ${i} in datalayer`);
          missingValues.push(i);
          missingValuesDatalayer.push(i);
        } else if (datalayer[i] === "") {
          console.log(`\n...empty string at key ${i} in datalayer`);
          missingValues.push(i);
          missingValuesDatalayer.push(i);
        }
      };

    };

    if (missingValuesDatalayer.length > 0) {

        console.log(`\nFound ${missingValuesDatalayer.length} issues with missing values at keys in datalayer: \n\t--> ${missingValuesDatalayer}`);
        console.log(true); // return true

    } else if (missingValuesDatalayer.length === 0){
        console.log(`\nFound ${missingValuesDatalayer.length} issues with missing values at keys in datalayer`);
        console.log(false); // return false

    }
  
    // Check Event Params
    for (let i in eventParams) {
      if (eventParams.hasOwnProperty(i)) {
        if (eventParams[i] === null) {
          console.log(`\n...null value at key ${i} in view_item`);
          missingValues.push(i);
          missingValuesEventParams.push(i);
        } else if (eventParams[i] === undefined) {
          console.log(`\n...undefined value at key ${i} in view_item`);
          missingValues.push(i);
          missingValuesEventParams.push(i);
        } else if (eventParams[i] === "") {
          console.log(`\n...empty string at key ${i} in view_item`);
          missingValues.push(i);
          missingValuesEventParams.push(i);
        }
      }

    };

    if (missingValuesEventParams.length > 0) {

        console.log(`\nFound ${missingValuesEventParams.length} issues with missing values at keys in event params: \n\t--> ${missingValuesEventParams}`);
        console.log(true); // return true

    } else if (missingValuesEventParams.length === 0){
        console.log(`\nFound ${missingValuesEventParams.length} issues with missing values at keys in event params`);
        console.log(false); // return false

    }
  
    // Check Items Array
    for (let i in itemsArray) {
      if (itemsArray.hasOwnProperty(i)) {
        if (itemsArray[i] === null) {
          console.log(`\n...null value at key ${i} in items`);
          missingValues.push(i);
          missingValuesItemsArray.push(i);
        } else if (itemsArray[i] === undefined) {
          console.log(`\n...undefined value at key ${i} in items`);
          missingValues.push(i);
          missingValuesItemsArray.push(i);
        } else if (itemsArray[i] === "") {
          console.log(`\n...empty string at key ${i} in items`);
          missingValues.push(i);
          missingValuesItemsArray.push(i);
        }
      }
      
    };

    if (missingValuesItemsArray.length > 0) {

        console.log(`\nFound ${missingValuesItemsArray.length} issues with missing values at keys in items array: \n\t--> ${missingValuesItemsArray}`);
        console.log(true); // return true

    } else if (missingValuesItemsArray.length === 0){
        console.log(`\nFound ${missingValuesItemsArray.length} issues with missing values at keys in items array`);
        console.log(false); // return false

    }

    console.log(`\nFound ${missingValues.length} issues with missing values in total at keys: \n\t--> ${missingValues}`)

  };

checkMissingValues(dataLayer)
