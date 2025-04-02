import { DataLayerCheck } from './1_2_class_datalayer.js';

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

const dataLayer2 = [{
    "event": "Ecommerce - View Item List Event",
    "event_name": "view_item_list",
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
            }, 
            {
                "item_name": "Zahnstocher",
                "item_id": "",
                "price": null,
                "item_brand": "oralb",
                "item_category": "",
                "item_category2": "oral-test",
                "item_category3": null,
                "item_category4": undefined,
                "item_variant": "",
                "quantity": 1,
                "discount": false
            }
        ],
        "view_item_location": undefined
    },
    "gtm.uniqueEventId": 168, 

    "some_data": {
        "key1": undefined, 
        "key2": [
            {
                "key3": ""
            }
        ]
    }

}];



let datalayerCheck = new DataLayerCheck(dataLayer)
datalayerCheck.process()
