
// **********************************Start Scope definition************************
konysyncClientSyncConfig ={
     "ArrayOfSyncScope": [{
          "DataSource": "sampleDB",
          "ScopeName": "FSPersistentScope",
          "ScopeDatabaseName": "konyfsjs",
          "Strategy": "PERSISTENT_SYNC",
          "ScopeTables": [
               {
                    "Name": "WorkOrder",
                    "Columns": [
                         {
                              "Name": "orderId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "customerId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "customerDesc",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "endDate",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "estimatedTime",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "fieldComment",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "locationId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "orderDesc",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "partId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "priority",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "problemDesc",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "resourceDescr",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "resourceId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "specialInstr",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "startDate",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "startTime",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "status",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "type",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "vendorId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "Latitude",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "Longitude",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "CustContact",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "equipmentId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "initiateWOPhoto",
                              "Autogenerated": "false",
                              "type": "text"
                         },
                         {
                              "Name": "closeWOPhoto",
                              "Autogenerated": "false",
                              "type": "text"
                         },
                         {
                              "Name": "initPhotoName",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "closePhotoName",
                              "Autogenerated": "false",
                              "type": "string"
                         }
                    ],
                    "Pk_Columns": ["orderId"],
                    "Relationships": {"OneToMany": [
                         {
                              "TargetObject": "Alerts",
                              "SourceObject_Attribute": "orderId",
                              "TargetObject_Attribute": "OrderId"
                         },
                         {
                              "TargetObject": "Customer",
                              "SourceObject_Attribute": "customerId",
                              "TargetObject_Attribute": "CustId"
                         },
                         {
                              "TargetObject": "WorkOrderDetails",
                              "SourceObject_Attribute": "orderId",
                              "TargetObject_Attribute": "orderId"
                         },
                         {
                              "TargetObject": "PartMapping",
                              "SourceObject_Attribute": "resourceId",
                              "TargetObject_Attribute": "resourceid"
                         }
                    ]}
               },
               {
                    "Name": "WorkOrderDetails",
                    "Columns": [
                         {
                              "Name": "orderId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "serviceStatus",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "lastServiceDate",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "problemDesc",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "problemRes",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "resourceDesc",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "resourceId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "customerDesc",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "customerId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "partUsed",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "resolutionCode",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "partsReplaced",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "partsQtyUsed",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "defectiveParts",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "addTripReason",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "customerSign",
                              "Autogenerated": "false",
                              "type": "text"
                         },
                         {
                              "Name": "odometerReading",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "fieldComment",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "reqAddTime",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "reasonAddTime",
                              "Autogenerated": "false",
                              "type": "string"
                         }
                    ],
                    "Pk_Columns": ["orderId"],
                    "Relationships": {}
               },
               {
                    "Name": "Contract",
                    "Columns": [
                         {
                              "Name": "contractId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "contractDesc",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "contractEndDate",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "contractStrDate",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "createdBy",
                              "Autogenerated": "false",
                              "type": "string"
                         }
                    ],
                    "Pk_Columns": ["contractId"],
                    "Relationships": {}
               },
               {
                    "Name": "Technician",
                    "Columns": [
                         {
                              "Name": "resourceId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "resourceEmail",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "resourceDesc",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "resourcePhone",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "password",
                              "Autogenerated": "false",
                              "type": "string"
                         }
                    ],
                    "Pk_Columns": ["resourceId"],
                    "Relationships": {}
               },
               {
                    "Name": "ServiceHistory",
                    "Columns": [
                         {
                              "Name": "serviceHistId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "customerDesc",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "customerEmail",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "customerPhone",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "lastServDate",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "partsUsed",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "problemDesc",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "probResolution",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "technicianId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "time",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "tecnicianName",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "customerid",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "customerName",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "equipmentId",
                              "Autogenerated": "false",
                              "type": "string"
                         }
                    ],
                    "Pk_Columns": ["serviceHistId"],
                    "Relationships": {}
               },
               {
                    "Name": "Part",
                    "Columns": [
                         {
                              "Name": "partId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "partName",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "partModel",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "partQtyTotal",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "partQtyDepot",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "unitPrice",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "partPhoto",
                              "Autogenerated": "false",
                              "type": "string"
                         }
                    ],
                    "Pk_Columns": ["partId"],
                    "Relationships": {}
               },
               {
                    "Name": "AccessDocs",
                    "Columns": [
                         {
                              "Name": "docid",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "docname",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "doclink",
                              "Autogenerated": "false",
                              "type": "string"
                         }
                    ],
                    "Pk_Columns": ["docid"],
                    "Relationships": {}
               },
               {
                    "Name": "Customer",
                    "Columns": [
                         {
                              "Name": "CustId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "CustName",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "CustCategory",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "CustType",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "CustSince",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "CustLocation",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "CustPhone",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "CustEmail",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "CustFax",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "Latitude",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "Longitude",
                              "Autogenerated": "false",
                              "type": "string"
                         }
                    ],
                    "Pk_Columns": ["CustId"],
                    "Relationships": {}
               },
               {
                    "Name": "CustomerInvoices",
                    "Columns": [
                         {
                              "Name": "InvoiceId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "AmountPaid",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "BalanceDue",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "BillDate",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "BillingMethod",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "CustId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "EquipCost",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "LabourCost",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "ModeofPay",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "RepairCost",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "Status",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "TimeSpent",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "WorkOrderId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "InvoiceImg",
                              "Autogenerated": "false",
                              "type": "string"
                         }
                    ],
                    "Pk_Columns": ["InvoiceId"],
                    "Relationships": {}
               },
               {
                    "Name": "Alerts",
                    "Columns": [
                         {
                              "Name": "OrderId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "CustContact",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "CustDesc",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "CustId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "EndDate",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "EstimatedTime",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "FieldComment",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "Latitude",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "Longitude",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "Location",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "OrderDesc",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "PartId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "Priority",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "ProblemDesc",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "ResourceDesc",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "ResourceId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "SpecialIns",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "StartDate",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "StartTime",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "Status",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "Type",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "VendorId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "equipmentName",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "notifierName",
                              "Autogenerated": "false",
                              "type": "string"
                         }
                    ],
                    "Pk_Columns": ["OrderId"],
                    "Relationships": {}
               },
               {
                    "Name": "Equipment",
                    "Columns": [
                         {
                              "Name": "equipmentID",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "equipmentName",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "parentID",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "assetType",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "condition",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "installDate",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "manufacturer",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "model",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "productCost",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "serialId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "tagId",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "warrantyEndDate",
                              "Autogenerated": "false",
                              "type": "string"
                         }
                    ],
                    "Pk_Columns": ["equipmentID"],
                    "Relationships": {}
               },
               {
                    "Name": "PartMapping",
                    "Columns": [
                         {
                              "Name": "partid",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "orderid",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "resourceid",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "partqtytruck",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "partqtydepot",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "isreplaced",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "partqtyreplaced",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "isreturned",
                              "Autogenerated": "false",
                              "type": "string"
                         },
                         {
                              "Name": "partqtyreturned",
                              "Autogenerated": "false",
                              "type": "string"
                         }
                    ],
                    "Pk_Columns": [
                         "partid",
                         "orderid"
                    ],
                    "Relationships": {}
               }
          ]
     }],
     "ArrayOfDataSource": [{
          "ID": "sampleDB",
          "type": "WEBSERVICE"
     }],
     "AppID": "konyfsjs",
     "Version": "3409dfe4e9eaa3e22c0002b4f5efaff2b274e18b497280af030e7aa141baa313"
}
//**********************************End Scope definition************************
