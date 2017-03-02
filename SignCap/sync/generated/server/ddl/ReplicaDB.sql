	DROP DATABASE IF EXISTS konyfsjs_Replica;
	CREATE DATABASE konyfsjs_Replica;
	USE konyfsjs_Replica;	

    create table `AccessDocs_Temp` (
        `konysyncrowid` integer not null auto_increment,
        `docid` varchar(255) not null,
        `docname` varchar(255) not null,
        `doclink` varchar(255) not null,
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`docid`)
    );

    create table `AccessDocs` (
        `konysyncrowid` integer not null auto_increment,
        `docid` varchar(255) not null,
        `docname` varchar(255) not null,
        `doclink` varchar(255) not null,
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`docid`)
    );

    create table `Alerts_Temp` (
        `konysyncrowid` integer not null auto_increment,
        `OrderId` varchar(255) not null,
        `CustContact` varchar(255),
        `CustDesc` varchar(255),
        `CustId` varchar(255),
        `EndDate` varchar(255),
        `EstimatedTime` varchar(255),
        `FieldComment` varchar(255),
        `Latitude` varchar(255),
        `Longitude` varchar(255),
        `Location` varchar(255),
        `OrderDesc` varchar(255),
        `PartId` varchar(255),
        `Priority` varchar(255),
        `ProblemDesc` varchar(255),
        `ResourceDesc` varchar(255),
        `ResourceId` varchar(255),
        `SpecialIns` varchar(255),
        `StartDate` varchar(255),
        `StartTime` varchar(255),
        `Status` varchar(255),
        `Type` varchar(255),
        `VendorId` varchar(255),
        `equipmentName` varchar(255),
        `notifierName` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`OrderId`)
    );

    create table `Alerts` (
        `konysyncrowid` integer not null auto_increment,
        `OrderId` varchar(255) not null,
        `CustContact` varchar(255),
        `CustDesc` varchar(255),
        `CustId` varchar(255),
        `EndDate` varchar(255),
        `EstimatedTime` varchar(255),
        `FieldComment` varchar(255),
        `Latitude` varchar(255),
        `Longitude` varchar(255),
        `Location` varchar(255),
        `OrderDesc` varchar(255),
        `PartId` varchar(255),
        `Priority` varchar(255),
        `ProblemDesc` varchar(255),
        `ResourceDesc` varchar(255),
        `ResourceId` varchar(255),
        `SpecialIns` varchar(255),
        `StartDate` varchar(255),
        `StartTime` varchar(255),
        `Status` varchar(255),
        `Type` varchar(255),
        `VendorId` varchar(255),
        `equipmentName` varchar(255),
        `notifierName` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`OrderId`)
    );

    create table `Contract_Temp` (
        `konysyncrowid` integer not null auto_increment,
        `contractId` varchar(255) not null,
        `contractDesc` varchar(255) not null,
        `contractEndDate` varchar(255),
        `contractStrDate` varchar(255),
        `createdBy` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`contractId`)
    );

    create table `Contract` (
        `konysyncrowid` integer not null auto_increment,
        `contractId` varchar(255) not null,
        `contractDesc` varchar(255) not null,
        `contractEndDate` varchar(255),
        `contractStrDate` varchar(255),
        `createdBy` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`contractId`)
    );

    create table `CustomerInvoices_Temp` (
        `konysyncrowid` integer not null auto_increment,
        `InvoiceId` varchar(255) not null,
        `AmountPaid` varchar(255),
        `BalanceDue` varchar(255),
        `BillDate` varchar(255),
        `BillingMethod` varchar(255),
        `CustId` varchar(255),
        `EquipCost` varchar(255),
        `LabourCost` varchar(255),
        `ModeofPay` varchar(255),
        `RepairCost` varchar(255),
        `Status` varchar(255),
        `TimeSpent` varchar(255),
        `WorkOrderId` varchar(255),
        `InvoiceImg` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`InvoiceId`)
    );

    create table `CustomerInvoices` (
        `konysyncrowid` integer not null auto_increment,
        `InvoiceId` varchar(255) not null,
        `AmountPaid` varchar(255),
        `BalanceDue` varchar(255),
        `BillDate` varchar(255),
        `BillingMethod` varchar(255),
        `CustId` varchar(255),
        `EquipCost` varchar(255),
        `LabourCost` varchar(255),
        `ModeofPay` varchar(255),
        `RepairCost` varchar(255),
        `Status` varchar(255),
        `TimeSpent` varchar(255),
        `WorkOrderId` varchar(255),
        `InvoiceImg` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`InvoiceId`)
    );

    create table `Customer_Temp` (
        `konysyncrowid` integer not null auto_increment,
        `CustId` varchar(255) not null,
        `CustName` varchar(255),
        `CustCategory` varchar(255),
        `CustType` varchar(255),
        `CustSince` varchar(255),
        `CustLocation` varchar(255),
        `CustPhone` varchar(255),
        `CustEmail` varchar(255),
        `CustFax` varchar(255),
        `Latitude` varchar(255),
        `Longitude` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`CustId`)
    );

    create table `Customer` (
        `konysyncrowid` integer not null auto_increment,
        `CustId` varchar(255) not null,
        `CustName` varchar(255),
        `CustCategory` varchar(255),
        `CustType` varchar(255),
        `CustSince` varchar(255),
        `CustLocation` varchar(255),
        `CustPhone` varchar(255),
        `CustEmail` varchar(255),
        `CustFax` varchar(255),
        `Latitude` varchar(255),
        `Longitude` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`CustId`)
    );

    create table `Equipment_Temp` (
        `konysyncrowid` integer not null auto_increment,
        `equipmentID` varchar(255) not null,
        `equipmentName` varchar(255),
        `parentID` varchar(255),
        `assetType` varchar(255),
        `condition` varchar(255),
        `installDate` varchar(255),
        `manufacturer` varchar(255),
        `model` varchar(255),
        `productCost` varchar(255),
        `serialId` varchar(255),
        `tagId` varchar(255),
        `warrantyEndDate` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`equipmentID`)
    );

    create table `Equipment` (
        `konysyncrowid` integer not null auto_increment,
        `equipmentID` varchar(255) not null,
        `equipmentName` varchar(255),
        `parentID` varchar(255),
        `assetType` varchar(255),
        `condition` varchar(255),
        `installDate` varchar(255),
        `manufacturer` varchar(255),
        `model` varchar(255),
        `productCost` varchar(255),
        `serialId` varchar(255),
        `tagId` varchar(255),
        `warrantyEndDate` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`equipmentID`)
    );

    create table `PartMapping_Temp` (
        `konysyncrowid` integer not null auto_increment,
        `partid` varchar(255) not null,
        `orderid` varchar(255) not null,
        `resourceid` varchar(255),
        `partqtytruck` varchar(255),
        `partqtydepot` varchar(255),
        `isreplaced` varchar(255),
        `isreturned` varchar(255),
        `partqtyreplaced` varchar(255),
        `partqtyreturned` varchar(255),
        `partordered` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`partid`, `orderid`)
    );

    create table `PartMapping` (
        `konysyncrowid` integer not null auto_increment,
        `partid` varchar(255) not null,
        `orderid` varchar(255) not null,
        `resourceid` varchar(255),
        `partqtytruck` varchar(255),
        `partqtydepot` varchar(255),
        `isreplaced` varchar(255),
        `isreturned` varchar(255),
        `partqtyreplaced` varchar(255),
        `partqtyreturned` varchar(255),
        `partordered` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`partid`, `orderid`)
    );

    create table `Part_Temp` (
        `konysyncrowid` integer not null auto_increment,
        `partId` varchar(255) not null,
        `partName` varchar(255),
        `partModel` varchar(255),
        `partQtyTotal` varchar(255),
        `partQtyDepot` varchar(255),
        `unitPrice` varchar(255),
        `partPhoto` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`partId`)
    );

    create table `Part` (
        `konysyncrowid` integer not null auto_increment,
        `partId` varchar(255) not null,
        `partName` varchar(255),
        `partModel` varchar(255),
        `partQtyTotal` varchar(255),
        `partQtyDepot` varchar(255),
        `unitPrice` varchar(255),
        `partPhoto` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`partId`)
    );

    create table `ServiceHistory_Temp` (
        `konysyncrowid` integer not null auto_increment,
        `serviceHistId` varchar(255) not null,
        `customerDesc` varchar(255) not null,
        `customerEmail` varchar(255),
        `customerPhone` varchar(255),
        `lastServDate` date,
        `partsUsed` varchar(255),
        `problemDesc` varchar(255),
        `probResolution` varchar(255),
        `technicianId` varchar(255),
        `time` varchar(255),
        `tecnicianName` varchar(255),
        `customerid` varchar(255),
        `customerName` varchar(255),
        `equipmentId` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`serviceHistId`)
    );

    create table `ServiceHistory` (
        `konysyncrowid` integer not null auto_increment,
        `serviceHistId` varchar(255) not null,
        `customerDesc` varchar(255) not null,
        `customerEmail` varchar(255),
        `customerPhone` varchar(255),
        `lastServDate` date,
        `partsUsed` varchar(255),
        `problemDesc` varchar(255),
        `probResolution` varchar(255),
        `technicianId` varchar(255),
        `time` varchar(255),
        `tecnicianName` varchar(255),
        `customerid` varchar(255),
        `customerName` varchar(255),
        `equipmentId` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`serviceHistId`)
    );

    create table `Technician_Temp` (
        `konysyncrowid` integer not null auto_increment,
        `resourceId` varchar(255) not null,
        `resourceEmail` varchar(255),
        `resourceDesc` varchar(255) not null,
        `resourcePhone` varchar(255),
        `password` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`resourceId`)
    );

    create table `Technician` (
        `konysyncrowid` integer not null auto_increment,
        `resourceId` varchar(255) not null,
        `resourceEmail` varchar(255),
        `resourceDesc` varchar(255) not null,
        `resourcePhone` varchar(255),
        `password` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`resourceId`)
    );

    create table `WorkOrderDetails_Temp` (
        `konysyncrowid` integer not null auto_increment,
        `orderId` varchar(255) not null,
        `serviceStatus` varchar(255),
        `lastServiceDate` varchar(255),
        `problemDesc` varchar(255),
        `problemRes` varchar(255),
        `resourceDesc` varchar(255),
        `resourceId` varchar(255),
        `customerDesc` varchar(255),
        `customerId` varchar(255),
        `resolutionCode` varchar(255),
        `partsReplaced` varchar(255),
        `partsQtyUsed` varchar(255),
        `defectiveParts` varchar(255),
        `addTripReason` varchar(255),
        `customerSign` longtext,
        `odometerReading` varchar(255),
        `fieldComment` varchar(255),
        `reqAddTime` varchar(255),
        `reasonAddTime` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`orderId`)
    );

    create table `WorkOrderDetails` (
        `konysyncrowid` integer not null auto_increment,
        `orderId` varchar(255) not null,
        `serviceStatus` varchar(255),
        `lastServiceDate` varchar(255),
        `problemDesc` varchar(255),
        `problemRes` varchar(255),
        `resourceDesc` varchar(255),
        `resourceId` varchar(255),
        `customerDesc` varchar(255),
        `customerId` varchar(255),
        `resolutionCode` varchar(255),
        `partsReplaced` varchar(255),
        `partsQtyUsed` varchar(255),
        `defectiveParts` varchar(255),
        `addTripReason` varchar(255),
        `customerSign` longtext,
        `odometerReading` varchar(255),
        `fieldComment` varchar(255),
        `reqAddTime` varchar(255),
        `reasonAddTime` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`orderId`)
    );

    create table `WorkOrder_Temp` (
        `konysyncrowid` integer not null auto_increment,
        `orderId` varchar(255) not null,
        `customerId` varchar(255),
        `customerDesc` varchar(255),
        `endDate` varchar(255),
        `estimatedTime` varchar(255),
        `fieldComment` varchar(255),
        `locationId` varchar(255),
        `orderDesc` varchar(255),
        `partId` varchar(255),
        `priority` varchar(255),
        `problemDesc` varchar(255),
        `resourceDescr` varchar(255),
        `resourceId` varchar(255),
        `specialInstr` varchar(255),
        `startDate` varchar(255),
        `startTime` varchar(255),
        `status` varchar(255),
        `type` varchar(255),
        `vendorId` varchar(255),
        `Latitude` varchar(255),
        `Longitude` varchar(255),
        `CustContact` varchar(255),
        `equipmentId` varchar(255),
        `initiateWOPhoto` longtext,
        `closeWOPhoto` longtext,
        `initPhotoName` varchar(255),
        `closePhotoName` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`orderId`)
    );

    create table `WorkOrder` (
        `konysyncrowid` integer not null auto_increment,
        `orderId` varchar(255) not null,
        `customerId` varchar(255),
        `customerDesc` varchar(255),
        `endDate` varchar(255),
        `estimatedTime` varchar(255),
        `fieldComment` varchar(255),
        `locationId` varchar(255),
        `orderDesc` varchar(255),
        `partId` varchar(255),
        `priority` varchar(255),
        `problemDesc` varchar(255),
        `resourceDescr` varchar(255),
        `resourceId` varchar(255),
        `specialInstr` varchar(255),
        `startDate` varchar(255),
        `startTime` varchar(255),
        `status` varchar(255),
        `type` varchar(255),
        `vendorId` varchar(255),
        `Latitude` varchar(255),
        `Longitude` varchar(255),
        `CustContact` varchar(255),
        `equipmentId` varchar(255),
        `initiateWOPhoto` longtext,
        `closeWOPhoto` longtext,
        `initPhotoName` varchar(255),
        `closePhotoName` varchar(255),
        `konysyncIsDeleted` boolean default 0,
        `konysynchashsum` varchar(255),
        `konysyncrowInsertTimeStamp` tinyblob,
        `konysyncrowUpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`konysyncrowid`),
        unique (`orderId`)
    );

    create table `konysyncConfigVersion` (
        `id` integer not null auto_increment,
        `Version` varchar(250),
        `InstanceId` varchar(200),
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`id`)
    );

    create table `konysyncMetaInfo` (
        `id` integer not null auto_increment,
        `AppID` varchar(100),
        `ServerSyncContext` varchar(1000),
        `ScopeName` varchar(100),
        `row_InsertTimeStamp` tinyblob,
        `row_UpdateTimeStamp` timestamp,
        `SYNCCOL1` varchar(255),
        `SYNCCOL2` varchar(255),
        `SYNCCOL3` varchar(255),
        `SYNCCOL4` varchar(255),
        `SYNCCOL5` varchar(255),
        primary key (`id`)
    );

    create index docidAccessDocs_Temp on `AccessDocs_Temp` (`docid`);

    create index docidAccessDocs on `AccessDocs` (`docid`);

    create index OrderIdAlerts_Temp on `Alerts_Temp` (`OrderId`);

    create index OrderIdAlerts on `Alerts` (`OrderId`);

    create index contractIdContract_Temp on `Contract_Temp` (`contractId`);

    create index contractIdContract on `Contract` (`contractId`);

    create index InvoiceIdCustomerInvoices_Temp on `CustomerInvoices_Temp` (`InvoiceId`);

    create index InvoiceIdCustomerInvoices on `CustomerInvoices` (`InvoiceId`);

    create index CustIdCustomer_Temp on `Customer_Temp` (`CustId`);

    create index CustIdCustomer on `Customer` (`CustId`);

    create index equipmentIDEquipment_Temp on `Equipment_Temp` (`equipmentID`);

    create index equipmentIDEquipment on `Equipment` (`equipmentID`);

    create index orderidPartMapping_Temp on `PartMapping_Temp` (`orderid`);

    create index partidPartMapping_Temp on `PartMapping_Temp` (`partid`);

    create index partidPartMapping on `PartMapping` (`partid`);

    create index orderidPartMapping on `PartMapping` (`orderid`);

    create index partIdPart_Temp on `Part_Temp` (`partId`);

    create index partIdPart on `Part` (`partId`);

    create index serviceHistIdServiceHistory_Temp on `ServiceHistory_Temp` (`serviceHistId`);

    create index serviceHistIdServiceHistory on `ServiceHistory` (`serviceHistId`);

    create index resourceIdTechnician_Temp on `Technician_Temp` (`resourceId`);

    create index resourceIdTechnician on `Technician` (`resourceId`);

    create index orderIdWorkOrderDetails_Temp on `WorkOrderDetails_Temp` (`orderId`);

    create index orderIdWorkOrderDetails on `WorkOrderDetails` (`orderId`);

    create index orderIdWorkOrder_Temp on `WorkOrder_Temp` (`orderId`);

    create index orderIdWorkOrder on `WorkOrder` (`orderId`);

	insert into konysyncConfigVersion(Version,InstanceId) values('75eaa4973d0897581b91d6a4178b0040d851e41833307c3acfd46c03a6a10e86','');
