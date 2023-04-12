define("UsrRealty_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "6f7c1c1a-2d4d-4457-b63d-2e02074edd31",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "RunWebServiceButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_jjzmled_caption)#",
					"color": "warn",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_4m8z6xb",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_4m8z6xb_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalcAvgRealtyPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_bbzqcci",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_bbzqcci_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrAutoAddRealtyVisitsProcess",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "ProcessSchemaParameter2"
						}
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_il1yphj",
					"labelPosition": "auto",
					"control": "$NumberAttribute_il1yphj",
					"visible": true,
					"placeholder": "#ResourceString(NumberInput_yoqrooj_placeholder)#",
					"tooltip": "#ResourceString(NumberInput_yoqrooj_tooltip)#"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_fbz2a9h",
					"labelPosition": "auto",
					"control": "$NumberAttribute_fbz2a9h"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_pjblqp3",
					"labelPosition": "auto",
					"control": "$StringAttribute_pjblqp3",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrCommissonUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_krtwvy5",
					"labelPosition": "auto",
					"control": "$NumberAttribute_krtwvy5",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_wi9py92",
					"labelPosition": "auto",
					"control": "$LookupAttribute_wi9py92",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_iwscsvx",
					"labelPosition": "auto",
					"control": "$LookupAttribute_iwscsvx",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_bdmesv6",
					"labelPosition": "auto",
					"control": "$StringAttribute_bdmesv6",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrManager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_cy5ankk",
					"labelPosition": "auto",
					"control": "$LookupAttribute_cy5ankk",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_rtodwcg",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_rtodwcg_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrManager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_syv3hk1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(ComboBox_syv3hk1_label)#",
					"labelPosition": "auto",
					"control": "$UsrManagerCity",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"readonly": true,
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_h88r4rv",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_h88r4rv_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_syv3hk1",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyManagerType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(RealtyManagerType_label)#",
					"labelPosition": "auto",
					"control": "$UsrManagerType",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"readonly": true,
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_4pchx09",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4pchx09_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "RealtyManagerType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabPanel_nx9levy",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "tab",
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"tabTitleColor": "auto",
					"selectedTabTitleColor": "auto",
					"headerBackgroundColor": "auto",
					"underlineSelectedTabColor": "auto",
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_97ufg8s",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_97ufg8s_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_nx9levy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_ihh8db8",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_ihh8db8_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "#000000",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true
				},
				"parentName": "TabContainer_97ufg8s",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_4ebps4c",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_ihh8db8",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_42desy7",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_4ebps4c",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_31i3rpj",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_31i3rpj_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_42desy7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_uh3998p",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_uh3998p_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "GridDetail_gzlwp7fDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_42desy7",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_wnb2eqi",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_wnb2eqi_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_42desy7",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_78cqujg",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_78cqujg_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_gzlwp7f"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_wnb2eqi",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_x1me2cz",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_x1me2cz_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_wnb2eqi",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_sxeszre",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_sxeszre_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_gzlwp7f"
					]
				},
				"parentName": "FlexContainer_42desy7",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_xdvfjln",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax( 32px, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "ExpansionPanel_ihh8db8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_gzlwp7f",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"fitContent": true,
					"items": "$GridDetail_gzlwp7f",
					"primaryColumnName": "GridDetail_gzlwp7fDS_Id",
					"columns": [
						{
							"id": "60e5d919-6fbb-b65a-3fad-24e638a2d829",
							"code": "GridDetail_gzlwp7fDS_UsrComment",
							"caption": "#ResourceString(GridDetail_gzlwp7fDS_UsrComment)#",
							"dataValueType": 28
						}
					]
				},
				"parentName": "GridContainer_xdvfjln",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_teox8zd",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_97ufg8s",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabManagerSecret",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_ee93nm9_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_nx9levy",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_059r2w2",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabManagerSecret",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrSecretValue",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_c3naylj",
					"labelPosition": "auto",
					"control": "$StringAttribute_c3naylj",
					"multiline": false
				},
				"parentName": "GridContainer_059r2w2",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"UsrName": {
					"modelConfig": {
						"path": "PDS.UsrName"
					}
				},
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"NumberAttribute_il1yphj": {
					"modelConfig": {
						"path": "PDS.UsrPriceUSD"
					}
				},
				"NumberAttribute_fbz2a9h": {
					"modelConfig": {
						"path": "PDS.UsrArea"
					}
				},
				"StringAttribute_pjblqp3": {
					"modelConfig": {
						"path": "PDS.UsrNumber"
					}
				},
				"LookupAttribute_wi9py92": {
					"modelConfig": {
						"path": "PDS.UsrType"
					}
				},
				"LookupAttribute_iwscsvx": {
					"modelConfig": {
						"path": "PDS.UsrOfferType"
					}
				},
				"StringAttribute_bdmesv6": {
					"modelConfig": {
						"path": "PDS.UsrComment"
					}
				},
				"LookupAttribute_cy5ankk": {
					"modelConfig": {
						"path": "PDS.UsrManager"
					}
				},
				"GridDetail_gzlwp7f": {
					"isCollection": true,
					"modelConfig": {
						"path": "GridDetail_gzlwp7fDS"
					},
					"viewModelConfig": {
						"attributes": {
							"GridDetail_gzlwp7fDS_UsrComment": {
								"modelConfig": {
									"path": "GridDetail_gzlwp7fDS.UsrComment"
								}
							},
							"GridDetail_gzlwp7fDS_Id": {
								"modelConfig": {
									"path": "GridDetail_gzlwp7fDS.Id"
								}
							}
						}
					}
				},
				"NumberAttribute_krtwvy5": {
					"modelConfig": {
						"path": "PDS.UsrCommissonUSD"
					}
				},
				"UsrManagerType": {
					"modelConfig": {
						"path": "PDS.UsrManagerType"
					}
				},
				"StringAttribute_c3naylj": {
					"modelConfig": {
						"path": "PDS.UsrSecretValue"
					}
				},
				"UsrManagerCity": {
					"modelConfig": {
						"path": "PDS.UsrManagerCity"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "UsrRealty",
						"attributes": {
							"UsrManagerType": {
								"path": "UsrManager.Type",
								"type": "ForwardReference"
							},
							"UsrManagerCity": {
								"path": "UsrManager.City",
								"type": "ForwardReference"
							}
						}
					},
					"scope": "page"
				},
				"AttachmentListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "SysFile",
						"attributes": {
							"Name": {
								"path": "Name"
							}
						}
					}
				},
				"GridDetail_gzlwp7fDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "UsrRealtyVisit",
						"attributes": {
							"UsrComment": {
								"path": "UsrComment"
							}
						}
					}
				}
			},
			"primaryDataSourceName": "PDS",
			"dependencies": {
				"GridDetail_gzlwp7fDS": [
					{
						"attributePath": "UsrParentRealty",
						"relationPath": "PDS.Id"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
					/* If the UsrPriceUSD field changes, take the following steps. */
					if (request.attributeName === 'NumberAttribute_il1yphj') {
						var price = await request.$context.NumberAttribute_il1yphj;
						var commission = price * 0.02;
						request.$context.NumberAttribute_krtwvy5 = commission;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},

			{
				request: "usr.RunWebServiceButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					this.console.log("Run web service button works...");

					var typeObject = await request.$context.LookupAttribute_wi9py92;
					var typeId = "";
					if (typeObject) {
						typeId = typeObject.value;
					}
					// get id from type lookup type object

					var offerTypeObject = await request.$context.LookupAttribute_iwscsvx;
					var offerTypeId = "";
					if (offerTypeObject) {
						offerTypeId = offerTypeObject.value;
					}
					// get id from type lookup offer type object

					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();
					/* Specify the URL to retrieve the current rate. Use the coindesk.com external service. */
					const endpoint = "http://localhost/D3_8.0.7.3748/0/rest/RealtyService/GetTotalAmountByTypeId";
					/* Send a GET request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						realtyTypeId: typeId,
						realtyOfferTypeId: offerTypeId,
						entityName: "UsrRealty"
					};
					const response = await httpClientService.post(endpoint, params);
					
					this.console.log("response total price = " + response.body.GetTotalAmountByTypeIdResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},	

		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});