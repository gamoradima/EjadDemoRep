define("UsrDecimalOutputClassicPage", [], function() {
	return {
		entitySchemaName: "",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "FLOATe5d39789-2292-4524-b414-271f06758efe",
				"values": {
					"layout": {
						"colSpan": 9,
						"rowSpan": 1,
						"column": 7,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrFloat1",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGa6679b13-8572-403c-a5f9-353f1af55b34",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 3,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrString1",
					"enabled": false,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "NewTab1",
				"values": {
					"order": 0
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
