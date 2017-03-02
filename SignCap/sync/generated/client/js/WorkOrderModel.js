// ****************Generated On Tue Sep 10 13:07:05 IST 2013WorkOrder*******************
// **********************************Start WorkOrder's helper methods************************

/************************************************************************************
* Creates new WorkOrder
*************************************************************************************/
WorkOrder = function(){
	this.orderId = null;
	this.customerId = null;
	this.customerDesc = null;
	this.endDate = null;
	this.estimatedTime = null;
	this.fieldComment = null;
	this.locationId = null;
	this.orderDesc = null;
	this.partId = null;
	this.priority = null;
	this.problemDesc = null;
	this.resourceDescr = null;
	this.resourceId = null;
	this.specialInstr = null;
	this.startDate = null;
	this.startTime = null;
	this.status = null;
	this.type = null;
	this.vendorId = null;
	this.Latitude = null;
	this.Longitude = null;
	this.CustContact = null;
	this.equipmentId = null;
	this.initiateWOPhoto = null;
	this.closeWOPhoto = null;
	this.initPhotoName = null;
	this.closePhotoName = null;
	this.markForUpload = true;
};

WorkOrder.prototype = {
	get orderId(){
		return this._orderId;
	},
	set orderId(val){
		this._orderId = val;
	},
	get customerId(){
		return this._customerId;
	},
	set customerId(val){
		this._customerId = val;
	},
	get customerDesc(){
		return this._customerDesc;
	},
	set customerDesc(val){
		this._customerDesc = val;
	},
	get endDate(){
		return this._endDate;
	},
	set endDate(val){
		this._endDate = val;
	},
	get estimatedTime(){
		return this._estimatedTime;
	},
	set estimatedTime(val){
		this._estimatedTime = val;
	},
	get fieldComment(){
		return this._fieldComment;
	},
	set fieldComment(val){
		this._fieldComment = val;
	},
	get locationId(){
		return this._locationId;
	},
	set locationId(val){
		this._locationId = val;
	},
	get orderDesc(){
		return this._orderDesc;
	},
	set orderDesc(val){
		this._orderDesc = val;
	},
	get partId(){
		return this._partId;
	},
	set partId(val){
		this._partId = val;
	},
	get priority(){
		return this._priority;
	},
	set priority(val){
		this._priority = val;
	},
	get problemDesc(){
		return this._problemDesc;
	},
	set problemDesc(val){
		this._problemDesc = val;
	},
	get resourceDescr(){
		return this._resourceDescr;
	},
	set resourceDescr(val){
		this._resourceDescr = val;
	},
	get resourceId(){
		return this._resourceId;
	},
	set resourceId(val){
		this._resourceId = val;
	},
	get specialInstr(){
		return this._specialInstr;
	},
	set specialInstr(val){
		this._specialInstr = val;
	},
	get startDate(){
		return this._startDate;
	},
	set startDate(val){
		this._startDate = val;
	},
	get startTime(){
		return this._startTime;
	},
	set startTime(val){
		this._startTime = val;
	},
	get status(){
		return this._status;
	},
	set status(val){
		this._status = val;
	},
	get type(){
		return this._type;
	},
	set type(val){
		this._type = val;
	},
	get vendorId(){
		return this._vendorId;
	},
	set vendorId(val){
		this._vendorId = val;
	},
	get Latitude(){
		return this._Latitude;
	},
	set Latitude(val){
		this._Latitude = val;
	},
	get Longitude(){
		return this._Longitude;
	},
	set Longitude(val){
		this._Longitude = val;
	},
	get CustContact(){
		return this._CustContact;
	},
	set CustContact(val){
		this._CustContact = val;
	},
	get equipmentId(){
		return this._equipmentId;
	},
	set equipmentId(val){
		this._equipmentId = val;
	},
	get initiateWOPhoto(){
		return this._initiateWOPhoto;
	},
	set initiateWOPhoto(val){
		this._initiateWOPhoto = val;
	},
	get closeWOPhoto(){
		return this._closeWOPhoto;
	},
	set closeWOPhoto(val){
		this._closeWOPhoto = val;
	},
	get initPhotoName(){
		return this._initPhotoName;
	},
	set initPhotoName(val){
		this._initPhotoName = val;
	},
	get closePhotoName(){
		return this._closePhotoName;
	},
	set closePhotoName(val){
		this._closePhotoName = val;
	},
};

/************************************************************************************
* Retrieves all instances of WorkOrder SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderby[0] = {};
* orderby[0].key = "orderId";
* orderby[0].sortType ="desc";
* orderby[1] = {};
* orderby[1].key = "customerId";
* orderby[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* WorkOrder.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
WorkOrder.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrder.getTableName();
	orderByMap = WorkOrder.formOrderByClause(orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){	
		successcallback(WorkOrder.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of WorkOrder present in local database.
*************************************************************************************/
WorkOrder.getAllCount = function(successcallback,errorcallback){
	WorkOrder.getCount("",successcallback,errorcallback);
};
WorkOrder.getCount = function(wcs,successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrder.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from " + tbname + " " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		if(null!==res){
			var count = null;
			count = res["count(*)"];
			kony.sync.verifyAndCallClosure(successcallback, {"count":count});
		}
		else{
			kony.sync.SyncPrint("[KonySync] Some error occured while getting the count");
		}
	}
};

/************************************************************************************
* Creates a new instance of WorkOrder in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
WorkOrder.prototype.create = function(successcallback,errorcallback){
	var valuestable = this.getValuesTable(true);
	WorkOrder.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
WorkOrder.create = function(valuestable, successcallback,errorcallback,markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrder.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	if(WorkOrder.validateType(valuestable,errorcallback)===false){
		return;
	}
	if(WorkOrder.validateNullInsert(valuestable,errorcallback)===false){
		return;
	}
	valuestable = WorkOrder.filterAttributes(valuestable, true);
	var relationshipMap={};  
	relationshipMap = WorkOrder.getRelationshipMap(relationshipMap,valuestable);
	function executeSuccess(){
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
	var pks = [];
	var errMsg = "orderId=" + valuestable.orderId;
	pks["orderId"] = {key:"orderId",value:valuestable.orderId};
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			errMsg = "[" + errMsg + "]";
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
		}
	}
	WorkOrder.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
};

/************************************************************************************
* Creates number of new instances of WorkOrder in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
*************************************************************************************/
WorkOrder.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrder.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var isProperData = true;
	var arrayLen = 0;
	var errorInfo = [];
	var arrayLength = valuesArray.length;
	if(kony.sync.enableORMValidations){
		var newValuesArray = [];
		//column level validations
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var valuestable = valuesArray[i];
			if(WorkOrder.validateType(valuestable,errorcallback)===false){
				return;
			}
			if(WorkOrder.validateNullInsert(valuestable,errorcallback)===false){
				return;
			}
			valuestable = WorkOrder.filterAttributes(valuestable, true);
			newValuesArray[i] = valuestable;
		}
		valuesArray = newValuesArray;
		//checking for duplicate records
		var connection = kony.sync.getConnectionOnly(dbname, dbname);
		kony.sync.startTransaction(connection, duplicate_transaction_callback, transaction_success_callback, errorcallback);
		var isError = false;
		function duplicate_transaction_callback(tx){
			arrayLength = valuesArray.length;
			for (var i=0; valuesArray != null && i < arrayLength; i++ ){
				var pks = [];
				var errMsg = "orderId=" + valuestable.orderId;
				pks["orderId"] = {key:"orderId",value:valuestable.orderId};
				var wcs = [];
				if(WorkOrder.pkCheck(pks,wcs,errorcallback,"searching")===false){
					isError = false;
					return;
				}
				var query = kony.sync.qb_createQuery();
							kony.sync.qb_select(query, null);
							kony.sync.qb_from(query, tbname);
							kony.sync.qb_where(query, wcs);
				var query_compile = kony.sync.qb_compile(query);
				var sql = query_compile[0];
				var params = query_compile[1];
				var resultset = kony.db.executeSql(tx, sql, params, null, errorcallback);
				if(resultset==null){
					isError = true;
					kony.sync.verifyAndCallClosure(errorcallback);//to be changed later
					return;
				}
				if(resultset.rows.length!=0){
					isError = true;
					errMsg = "[" + errMsg + "]";
					kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
					return;
				}
			}
			if(!isError){
				checkIntegrity(tx);
			}
		}
	}
	else{
		//copying by value
		var newValuesArray = [];
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			newValuesArray[i] = kony.sync.CreateCopy(valuesArray[i]);
		}
		valuesArray = newValuesArray;
		kony.sync.massInsert(dbname, tbname, valuesArray, successcallback, errorcallback, markForUpload);
	}

	function transaction_success_callback(){
		if(!isError){
			kony.sync.massInsert(dbname, tbname, valuesArray, successcallback, errorcallback, markForUpload);
		}
	}
	
	//foreign key constraints validations
	function checkIntegrity(tx){
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = WorkOrder.getRelationshipMap(relationshipMap,valuesArray[i]);
			if(!kony.sync.checkIntegrityinTransaction(tx, relationshipMap, errorcallback)){
				isError = true;
				return; 
			}
		}
	}
};
/************************************************************************************
* Updates WorkOrder using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
WorkOrder.prototype.updateByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	WorkOrder.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
WorkOrder.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrder.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];
	var twcs = [ ];
	if(WorkOrder.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}
	twcs = kony.sync.CreateCopy(wcs);
	function WorkOrder_PKPresent_succ(res){
		if(null!==res && res.length!==0){
			if(WorkOrder.validateType(valuestable,errorcallback)===false){
				return;
			}
			if(WorkOrder.validateNull(valuestable,errorcallback)===false){
				return;
			}
			valuestable = WorkOrder.filterAttributes(valuestable, false);
			var relationshipMap={};  
			relationshipMap = WorkOrder.getRelationshipMap(relationshipMap,valuestable);

			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
		}
	}

	function executeSuccess(){
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback, false, markForUpload);
	}
	
	function WorkOrder_CheckUpdate(res){
		if(kony.sync.checkForFalseUpdate(dbname, tbname, twcs, markForUpload, errorcallback,checkForFalseUpdateCallback)===true){
			WorkOrder_PKPresent_succ(res);
		}
		function checkForFalseUpdateCallback(){
			WorkOrder_PKPresent_succ(res);
		}
	}
	function pkNotFoundErrCallback(){
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	WorkOrder.getAllDetailsByPK(pks,WorkOrder_CheckUpdate, pkNotFoundErrCallback);
};

/************************************************************************************
* Updates WorkOrder(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
WorkOrder.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrder.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	if(WorkOrder.validateType(valuestable,errorcallback)===false){
		return;
	}
	if(WorkOrder.validateNull(valuestable,errorcallback)===false){
		return;
	}	
	valuestable = WorkOrder.filterAttributes(valuestable, false);
	var relationshipMap={};
	relationshipMap = WorkOrder.getRelationshipMap(relationshipMap,valuestable);
	kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	function executeSuccess(){
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, WorkOrder.getPKTable());
	}
};

/************************************************************************************
* Deletes WorkOrder using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
WorkOrder.prototype.deleteByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	WorkOrder.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
WorkOrder.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrder.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var twcs = [];
	var deletedRows;
	if(WorkOrder.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function WorkOrder_PKPresent_succ(res){
		if(null!==res && res.length!==0) {
			var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
			if(connection != null){
				kony.sync.startTransaction(connection, transactioncallback, WorkOrder_relationshipsuccess, WorkOrder_relationshipfailure);
			}
		}else{
			kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
		}
		function transactioncallback(tx){
			deletedRows = kony.sync.remove(tx, tbname, wcs, false, markForUpload, null);
			if(deletedRows === false){
				isError = true;
			}
			if(!kony.sync.removeCascadeHelper(tx, "orderId", "OrderId", tbname, "", Alerts.removeCascade,"Alerts",false, errorcallback, markForUpload, res[0])){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			if(!kony.sync.removeCascadeHelper(tx, "customerId", "CustId", tbname, "", Customer.removeCascade,"Customer",false, errorcallback, markForUpload, res[0])){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			if(!kony.sync.removeCascadeHelper(tx, "orderId", "orderId", tbname, "", WorkOrderDetails.removeCascade,"WorkOrderDetails",false, errorcallback, markForUpload, res[0])){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
			if(!kony.sync.removeCascadeHelper(tx, "resourceId", "resourceid", tbname, "", PartMapping.removeCascade,"PartMapping",false, errorcallback, markForUpload, res[0])){
				isError = true;	
				kony.sync.rollbackTransaction(tx);
				return;
			}
		}
	}

	function WorkOrder_relationshipfailure(){
		if(!isError){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function WorkOrder_relationshipsuccess(){
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, deletedRows);
		}
	}
	
	function WorkOrder_CheckUpdate(res){
		if(kony.sync.checkForFalseUpdate(dbname, tbname, twcs, markForUpload, errorcallback, checkForFalseUpdateCallback)===true) {
			WorkOrder_PKPresent_succ(res);
		}
		
		function checkForFalseUpdateCallback(){
			WorkOrder_PKPresent_succ(res);
		}
	}
	function pkNotFoundErrCallback(){
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	WorkOrder.getAllDetailsByPK(pks,WorkOrder_CheckUpdate, pkNotFoundErrCallback);
};

/************************************************************************************
* Deletes WorkOrder(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. WorkOrder.remove("where orderId like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
WorkOrder.remove = function(wcs, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrder.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function WorkOrder_removeTransactioncallback(tx){
		wcs = " " + wcs;
		if(!kony.sync.removeCascadeHelper(tx, "orderId", "OrderId", tbname, wcs, Alerts.removeCascade, "Alerts", false, errorcallback, markForUpload, null)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
		if(!kony.sync.removeCascadeHelper(tx, "customerId", "CustId", tbname, wcs, Customer.removeCascade, "Customer", false, errorcallback, markForUpload, null)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
		if(!kony.sync.removeCascadeHelper(tx, "orderId", "orderId", tbname, wcs, WorkOrderDetails.removeCascade, "WorkOrderDetails", false, errorcallback, markForUpload, null)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
		if(!kony.sync.removeCascadeHelper(tx, "resourceId", "resourceid", tbname, wcs, PartMapping.removeCascade, "PartMapping", false, errorcallback, markForUpload, null)){
			isError = true;	
			kony.sync.rollbackTransaction(tx);
			return;
		}
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function WorkOrder_removeSuccess(){

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, WorkOrder_removeTransactioncallback, WorkOrder_removeSuccess, errorcallbackWrapper);
		}
	}
	if(kony.sync.checkForFalseUpdateWCS(dbname, tbname, twcs, markForUpload,errorcallback,checkForFalseUpdateCallback) === true){
		deleteEntity();
	}
	function checkForFalseUpdateCallback(){
		deleteEntity();
	}
};

/************************************************************************************
* Deletes WorkOrder using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
WorkOrder.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	WorkOrder.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
WorkOrder.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrder.getTableName();
	var wcs = [];
	if(WorkOrder.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	function WorkOrder_PKPresent_succ(res){
		if(null!==res && res.length!==0) {
			kony.sync.single_delete_execute(dbname, tbname, wcs,successcallback, errorcallback, false, true);
		}else{
			kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
		}
	}
	WorkOrder.getAllDetailsByPK(pks, WorkOrder_PKPresent_succ, errorcallback);
};

/************************************************************************************
* Retrieves WorkOrder using primary key from the local Database. 
*************************************************************************************/
WorkOrder.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	WorkOrder.getAllDetailsByPK(pks,successcallback,errorcallback,this.markForUpload);
};
WorkOrder.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrder.getTableName();
	var wcs = [];
	if(WorkOrder.pkCheck(pks,wcs,errorcallback,"searching")===false){
		return;
	}
	twcs = kony.sync.CreateCopy(wcs);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_where(query, wcs);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];
	function mySuccCallback(res){	
		successcallback(WorkOrder.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};

/************************************************************************************
* Retrieves WorkOrder(s) using where clause from the local Database. 
* e.g. WorkOrder.find("where orderId like 'A%'", successcallback,errorcallback);
*************************************************************************************/
WorkOrder.find = function(wcs, successcallback,errorcallback){
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrder.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from " + tbname + " " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, WorkOrder.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of WorkOrder with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
WorkOrder.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	var pks = this.getPKTable();
	WorkOrder.markForUploadbyPK(pks, successcallback, errorcallback);
};
WorkOrder.markForUploadbyPK = function(pks, successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrder.getTableName();
	var isError = false;
	var recordsFound = false;
	var wcs = [];
	if(WorkOrder.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
		return;
	}

	function markRecordForUpload(tx, record){
		var versionMapMain = [];
		versionMapMain[kony.sync.mainTableChangeTypeColumn] = getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		versionMapMain[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname);
					kony.sync.qb_set(query,versionMapMain);
					kony.sync.qb_where(query, wcs);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0];
		var params = query_compile[1];
		return kony.sync.executeSql(tx, sql, params);		
	}
	
	function markRecordForUploadHistory(tx, record){
		var versionMap = [];
		versionMap[kony.sync.historyTableChangeTypeColumn] = getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		var twcs = [];
		twcs = wcs;
		kony.table.insert(twcs,{key : kony.sync.historyTableChangeTypeColumn, value : record[kony.sync.historyTableChangeTypeColumn], optype : "EQ",comptype : "AND"});
		versionMap[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname + kony.sync.historyTableName);
					kony.sync.qb_set(query,versionMap);
					kony.sync.qb_where(query, twcs);
		kony.table.remove(twcs);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0];
		var params = query_compile[1];
		return kony.sync.executeSql(tx, sql, params);
	}
	
	function single_transaction_callback (tx){
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_select(query, [kony.sync.historyTableChangeTypeColumn]);
					kony.sync.qb_from(query, tbname);
					kony.sync.qb_where(query, wcs);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0];
		var params = query_compile[1];
		var resultSet = kony.sync.executeSql(tx, sql, params);
		if(resultSet === false){
			isError = true;
			return;
		}

		var num_records = resultSet.rows.length;
		for(var i = 0; i <= num_records - 1; i++){
			var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
			if(markRecordForUpload(tx, record) === false){
				isError = true;
				return;
			}
			recordsFound = true;
		}			
				
		var query1 =kony.sync.qb_createQuery();
					kony.sync.qb_select(query1, [kony.sync.historyTableChangeTypeColumn]);
					kony.sync.qb_from(query1, tbname + kony.sync.historyTableName);
					kony.sync.qb_where(query1, wcs);
		var query1_compile = kony.sync.qb_compile(query1);
		var sql1 = query1_compile[0];
		var params1 = query1_compile[1];
		var resultSet1 = kony.sync.executeSql (tx, sql1, params1);
		if(resultSet1!==false){
			var num_records = resultSet1.rows.length;
			for(var i = 0; i <= num_records - 1; i++ ){
				var record = kony.db.sqlResultsetRowItem(tx, resultSet1, i);
				if(markRecordForUploadHistory(tx, record) === false){
					isError = true;
					return;
				}
				recordsFound = true;
			}
		}
		else{
			isError = true;
		}
	}
	function single_transaction_success_callback(){
		if(recordsFound === true){
			kony.sync.verifyAndCallClosure(successcallback);
		}
		else{
			kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
		}
	}
	
	function single_transaction_error_callback(res){
		if (!isError) {
			kony.sync.showTransactionError(errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(connection != null){
		kony.sync.startTransaction(connection, single_transaction_callback, single_transaction_success_callback, single_transaction_error_callback);
	}
};

/************************************************************************************
* Marks instance(s) of WorkOrder matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
WorkOrder.markForUpload = function(wcs, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrder.getTableName();
	var isError = false;
	wcs = kony.sync.validateWhereClause(wcs);
	if(!kony.sync.isNull(wcs) && !kony.sync.isEmptyString(wcs)) {
		wcs = wcs + " and " + kony.sync.historyTableChangeTypeColumn + " like '9%'";
	}else{	
		wcs = "where " + kony.sync.historyTableChangeTypeColumn + " like '9%'";
	}
	
	function markRecordForUpload(tx, record){
		var versionMapMain = [];
		versionMapMain[kony.sync.mainTableChangeTypeColumn] = getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		versionMapMain[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname);
					kony.sync.qb_set(query,versionMapMain);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0] + " " + wcs;
		var params = query_compile[1];
		if(kony.sync.executeSql(tx, sql, params) === false){
			return false;
		}
	}
	
	function markRecordForUploadHistory(tx, record){
		var versionMap = [];
		versionMap[kony.sync.historyTableChangeTypeColumn] = getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		var twcs = "";
		twcs = wcs;
		twcs = twcs + " AND " + kony.sync.historyTableChangeTypeColumn + " = " + record[kony.sync.historyTableChangeTypeColumn];
		versionMap[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname + kony.sync.historyTableName);
					kony.sync.qb_set(query,versionMap);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0]  + " " + twcs;
		var params = query_compile[1];
		if(kony.sync.executeSql(tx, sql, params) === false){
			return false;
		}
	}
	
	function single_transaction_callback (tx){
		//updating main table
		var sql = "select " + kony.sync.historyTableChangeTypeColumn + " from " + tbname + " " + wcs ;
		var resultSet = kony.sync.executeSql (tx, sql, null);
		if(resultSet === false){
			isError = true;
			return;
		}
		
		var num_records = resultSet.rows.length;
		for(var i = 0; i <= num_records - 1; i++ ){
			var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
			if(markRecordForUpload(tx, record) === false){
				isError = true;
				return;
			}
		}
		
		//updating history table
		var sql = "select " + kony.sync.historyTableChangeTypeColumn + " from " + tbname + kony.sync.historyTableName + " " + wcs;
		var resultSet = kony.sync.executeSql (tx, sql, null);
		if(resultSet === false){
			isError = true;
			return;
		}

		var num_records = resultSet.rows.length;
		for ( var i = 0; i <= num_records - 1; i++ ){
			var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
			if(markRecordForUploadHistory(tx, record)=== false){
				isError = true;
				return;
			}
		}
	}
	
	function single_transaction_success_callback(){
		kony.sync.verifyAndCallClosure(successcallback);
	}
	
	function single_transaction_error_callback(){
		if(!isError) {
			kony.sync.showTransactionError(errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(connection != null){
		kony.sync.startTransaction(connection, single_transaction_callback, single_transaction_success_callback, single_transaction_error_callback);
	}
};

/************************************************************************************
* Retrieves instance(s) of WorkOrder pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
WorkOrder.getPendingUpload = function(successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrder.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var sql = "select * from " + tbname + " WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" = "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, WorkOrder.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}

};

/************************************************************************************
* Retrieves instance(s) of WorkOrder pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
WorkOrder.getPendingAcknowledgement = function(successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrder.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, WorkOrder.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of WorkOrder deferred for upload.
*************************************************************************************/
WorkOrder.getDeferredUpload = function(successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrder.getTableName();
	var mysql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableChangeTypeColumn+" LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, WorkOrder.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to WorkOrder in local database to last synced state
*************************************************************************************/
WorkOrder.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrder.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, WorkOrder.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}		
};

/************************************************************************************
* Rollbacks changes to WorkOrder's record with given primary key in local 
* database to last synced state
*************************************************************************************/
WorkOrder.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	WorkOrder.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
WorkOrder.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrder.getTableName();
	var wcs = [];
	if(WorkOrder.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, WorkOrder.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Retrieves instances of Alerts related to WorkOrder
* with given OrderId from local database.
*************************************************************************************/
WorkOrder.prototype.getAlertsWithOrderId  = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	WorkOrder.getAlertsWithOrderId(pks,successcallback,errorcallback);
};
WorkOrder.getAlertsWithOrderId = function(pks,successcallback,errorcallback){
	function WorkOrder_successcallback(res){
		if(null!==res && res.length>0) {
			var targetKey = res[0].orderId;
			var wcs = "" ;
			if(kony.type(targetKey)==="string") {
				wcs = "where OrderId = '" + targetKey + "'";
			}else{
				wcs = "where OrderId = " + targetKey ;
			}
			Alerts.find(wcs, mySuccesscallback,errorcallback);
		
		}else{
			kony.sync.verifyAndCallClosure(successcallback);
			return;
		}	
	}
	
	function mySuccesscallback(res){
		var objMap = [];
		if(res!==null){
			for(var i in res){
				var obj = new Alerts();
				obj.OrderId = res[i].OrderId;
				obj.CustContact = res[i].CustContact;
				obj.CustDesc = res[i].CustDesc;
				obj.CustId = res[i].CustId;
				obj.EndDate = res[i].EndDate;
				obj.EstimatedTime = res[i].EstimatedTime;
				obj.FieldComment = res[i].FieldComment;
				obj.Latitude = res[i].Latitude;
				obj.Longitude = res[i].Longitude;
				obj.Location = res[i].Location;
				obj.OrderDesc = res[i].OrderDesc;
				obj.PartId = res[i].PartId;
				obj.Priority = res[i].Priority;
				obj.ProblemDesc = res[i].ProblemDesc;
				obj.ResourceDesc = res[i].ResourceDesc;
				obj.ResourceId = res[i].ResourceId;
				obj.SpecialIns = res[i].SpecialIns;
				obj.StartDate = res[i].StartDate;
				obj.StartTime = res[i].StartTime;
				obj.Status = res[i].Status;
				obj.Type = res[i].Type;
				obj.VendorId = res[i].VendorId;
				obj.equipmentName = res[i].equipmentName;
				obj.notifierName = res[i].notifierName;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	WorkOrder.getAllDetailsByPK(pks, WorkOrder_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of Alerts related to WorkOrder
* with given OrderId from local database.
*************************************************************************************/
WorkOrder.prototype.getCountOfAlertsWithOrderId  = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	WorkOrder.getCountOfAlertsWithOrderId(pks,successcallback,errorcallback);
};
WorkOrder.getCountOfAlertsWithOrderId = function(pks,successcallback,errorcallback){
	function WorkOrder_successcallback(res){
		if(null!==res && res.length>0) {
			var targetKey = res[0].orderId;
			var wcs = "" ;
			if(kony.type(targetKey)==="string") {
				wcs = "where OrderId = '" + targetKey + "'" ;
			}else{
				wcs = "where OrderId = " + targetKey ;
			}
			Alerts.getCount(wcs, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	WorkOrder.getAllDetailsByPK(pks, WorkOrder_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of Customer related to WorkOrder
* with given CustId from local database.
*************************************************************************************/
WorkOrder.prototype.getCustomerWithCustId  = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	WorkOrder.getCustomerWithCustId(pks,successcallback,errorcallback);
};
WorkOrder.getCustomerWithCustId = function(pks,successcallback,errorcallback){
	function WorkOrder_successcallback(res){
		if(null!==res && res.length>0) {
			var targetKey = res[0].customerId;
			var wcs = "" ;
			if(kony.type(targetKey)==="string") {
				wcs = "where CustId = '" + targetKey + "'";
			}else{
				wcs = "where CustId = " + targetKey ;
			}
			Customer.find(wcs, mySuccesscallback,errorcallback);
		
		}else{
			kony.sync.verifyAndCallClosure(successcallback);
			return;
		}	
	}
	
	function mySuccesscallback(res){
		var objMap = [];
		if(res!==null){
			for(var i in res){
				var obj = new Customer();
				obj.CustId = res[i].CustId;
				obj.CustName = res[i].CustName;
				obj.CustCategory = res[i].CustCategory;
				obj.CustType = res[i].CustType;
				obj.CustSince = res[i].CustSince;
				obj.CustLocation = res[i].CustLocation;
				obj.CustPhone = res[i].CustPhone;
				obj.CustEmail = res[i].CustEmail;
				obj.CustFax = res[i].CustFax;
				obj.Latitude = res[i].Latitude;
				obj.Longitude = res[i].Longitude;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	WorkOrder.getAllDetailsByPK(pks, WorkOrder_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of Customer related to WorkOrder
* with given CustId from local database.
*************************************************************************************/
WorkOrder.prototype.getCountOfCustomerWithCustId  = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	WorkOrder.getCountOfCustomerWithCustId(pks,successcallback,errorcallback);
};
WorkOrder.getCountOfCustomerWithCustId = function(pks,successcallback,errorcallback){
	function WorkOrder_successcallback(res){
		if(null!==res && res.length>0) {
			var targetKey = res[0].customerId;
			var wcs = "" ;
			if(kony.type(targetKey)==="string") {
				wcs = "where CustId = '" + targetKey + "'" ;
			}else{
				wcs = "where CustId = " + targetKey ;
			}
			Customer.getCount(wcs, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	WorkOrder.getAllDetailsByPK(pks, WorkOrder_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of WorkOrderDetails related to WorkOrder
* with given orderId from local database.
*************************************************************************************/
WorkOrder.prototype.getWorkOrderDetailsWithorderId  = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	WorkOrder.getWorkOrderDetailsWithorderId(pks,successcallback,errorcallback);
};
WorkOrder.getWorkOrderDetailsWithorderId = function(pks,successcallback,errorcallback){
	function WorkOrder_successcallback(res){
		if(null!==res && res.length>0) {
			var targetKey = res[0].orderId;
			var wcs = "" ;
			if(kony.type(targetKey)==="string") {
				wcs = "where orderId = '" + targetKey + "'";
			}else{
				wcs = "where orderId = " + targetKey ;
			}
			WorkOrderDetails.find(wcs, mySuccesscallback,errorcallback);
		
		}else{
			kony.sync.verifyAndCallClosure(successcallback);
			return;
		}	
	}
	
	function mySuccesscallback(res){
		var objMap = [];
		if(res!==null){
			for(var i in res){
				var obj = new WorkOrderDetails();
				obj.orderId = res[i].orderId;
				obj.serviceStatus = res[i].serviceStatus;
				obj.lastServiceDate = res[i].lastServiceDate;
				obj.problemDesc = res[i].problemDesc;
				obj.problemRes = res[i].problemRes;
				obj.resourceDesc = res[i].resourceDesc;
				obj.resourceId = res[i].resourceId;
				obj.customerDesc = res[i].customerDesc;
				obj.customerId = res[i].customerId;
				obj.partUsed = res[i].partUsed;
				obj.resolutionCode = res[i].resolutionCode;
				obj.partsReplaced = res[i].partsReplaced;
				obj.partsQtyUsed = res[i].partsQtyUsed;
				obj.defectiveParts = res[i].defectiveParts;
				obj.addTripReason = res[i].addTripReason;
				obj.customerSign = res[i].customerSign;
				obj.odometerReading = res[i].odometerReading;
				obj.fieldComment = res[i].fieldComment;
				obj.reqAddTime = res[i].reqAddTime;
				obj.reasonAddTime = res[i].reasonAddTime;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	WorkOrder.getAllDetailsByPK(pks, WorkOrder_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of WorkOrderDetails related to WorkOrder
* with given orderId from local database.
*************************************************************************************/
WorkOrder.prototype.getCountOfWorkOrderDetailsWithorderId  = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	WorkOrder.getCountOfWorkOrderDetailsWithorderId(pks,successcallback,errorcallback);
};
WorkOrder.getCountOfWorkOrderDetailsWithorderId = function(pks,successcallback,errorcallback){
	function WorkOrder_successcallback(res){
		if(null!==res && res.length>0) {
			var targetKey = res[0].orderId;
			var wcs = "" ;
			if(kony.type(targetKey)==="string") {
				wcs = "where orderId = '" + targetKey + "'" ;
			}else{
				wcs = "where orderId = " + targetKey ;
			}
			WorkOrderDetails.getCount(wcs, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	WorkOrder.getAllDetailsByPK(pks, WorkOrder_successcallback, errorcallback);
};
/************************************************************************************
* Retrieves instances of PartMapping related to WorkOrder
* with given resourceid from local database.
*************************************************************************************/
WorkOrder.prototype.getPartMappingWithresourceid  = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	WorkOrder.getPartMappingWithresourceid(pks,successcallback,errorcallback);
};
WorkOrder.getPartMappingWithresourceid = function(pks,successcallback,errorcallback){
	function WorkOrder_successcallback(res){
		if(null!==res && res.length>0) {
			var targetKey = res[0].resourceId;
			var wcs = "" ;
			if(kony.type(targetKey)==="string") {
				wcs = "where resourceid = '" + targetKey + "'";
			}else{
				wcs = "where resourceid = " + targetKey ;
			}
			PartMapping.find(wcs, mySuccesscallback,errorcallback);
		
		}else{
			kony.sync.verifyAndCallClosure(successcallback);
			return;
		}	
	}
	
	function mySuccesscallback(res){
		var objMap = [];
		if(res!==null){
			for(var i in res){
				var obj = new PartMapping();
				obj.partid = res[i].partid;
				obj.orderid = res[i].orderid;
				obj.resourceid = res[i].resourceid;
				obj.partqtytruck = res[i].partqtytruck;
				obj.partqtydepot = res[i].partqtydepot;
				obj.isreplaced = res[i].isreplaced;
				obj.partqtyreplaced = res[i].partqtyreplaced;
				obj.isreturned = res[i].isreturned;
				obj.partqtyreturned = res[i].partqtyreturned;
				objMap[i] = obj;
			}
		}
		kony.sync.verifyAndCallClosure(successcallback, objMap);
	}
	
	WorkOrder.getAllDetailsByPK(pks, WorkOrder_successcallback, errorcallback);
};

/************************************************************************************
* Retrieves number of instances of PartMapping related to WorkOrder
* with given resourceid from local database.
*************************************************************************************/
WorkOrder.prototype.getCountOfPartMappingWithresourceid  = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	WorkOrder.getCountOfPartMappingWithresourceid(pks,successcallback,errorcallback);
};
WorkOrder.getCountOfPartMappingWithresourceid = function(pks,successcallback,errorcallback){
	function WorkOrder_successcallback(res){
		if(null!==res && res.length>0) {
			var targetKey = res[0].resourceId;
			var wcs = "" ;
			if(kony.type(targetKey)==="string") {
				wcs = "where resourceid = '" + targetKey + "'" ;
			}else{
				wcs = "where resourceid = " + targetKey ;
			}
			PartMapping.getCount(wcs, successcallback,errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(successcallback,{"count":0});
			return;
		}
	}
	
	WorkOrder.getAllDetailsByPK(pks, WorkOrder_successcallback, errorcallback);
};


/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
WorkOrder.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable){
	var tbname = WorkOrder.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	if(!kony.sync.removeCascadeHelper(tx, "orderId", "OrderId", tbname, wcs, Alerts.removeCascade, "Alerts", false, errorcallback, markForUpload, null)){
		return false;
	}
	if(!kony.sync.removeCascadeHelper(tx, "customerId", "CustId", tbname, wcs, Customer.removeCascade, "Customer", false, errorcallback, markForUpload, null)){
		return false;
	}
	if(!kony.sync.removeCascadeHelper(tx, "orderId", "orderId", tbname, wcs, WorkOrderDetails.removeCascade, "WorkOrderDetails", false, errorcallback, markForUpload, null)){
		return false;
	}
	if(!kony.sync.removeCascadeHelper(tx, "resourceId", "resourceid", tbname, wcs, PartMapping.removeCascade, "PartMapping", false, errorcallback, markForUpload, null)){
		return false;
	}
	if(isCascade){
		if(kony.sync.deleteBatch(tx, tbname, wcs, false,markForUpload, null)===false){
			return false;
		}
		return true;
	}
	else{
		var sql = "select * from " + tbname + wcs;
		var resultSet = kony.sync.executeSql(tx, sql, null);
		if(resultSet===false){
			return false;
		}	
		var num_records = resultSet.rows.length;
		if(num_records === 0){
			return true;
		}else{
			kony.sync.syncPrint("ERROR:" + kony.sync.getReferetialIntegrityDeleteErrMessg(tbname,tbname,tbname,parentTable));
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeReferentialIntegrity,kony.sync.getReferetialIntegrityDeleteErrMessg(tbname,tbname,tbname,parentTable)));
			return false;
		}
	}
};


WorkOrder.convertTableToObject = function(res){
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new WorkOrder();
			obj.orderId = res[i].orderId;
			obj.customerId = res[i].customerId;
			obj.customerDesc = res[i].customerDesc;
			obj.endDate = res[i].endDate;
			obj.estimatedTime = res[i].estimatedTime;
			obj.fieldComment = res[i].fieldComment;
			obj.locationId = res[i].locationId;
			obj.orderDesc = res[i].orderDesc;
			obj.partId = res[i].partId;
			obj.priority = res[i].priority;
			obj.problemDesc = res[i].problemDesc;
			obj.resourceDescr = res[i].resourceDescr;
			obj.resourceId = res[i].resourceId;
			obj.specialInstr = res[i].specialInstr;
			obj.startDate = res[i].startDate;
			obj.startTime = res[i].startTime;
			obj.status = res[i].status;
			obj.type = res[i].type;
			obj.vendorId = res[i].vendorId;
			obj.Latitude = res[i].Latitude;
			obj.Longitude = res[i].Longitude;
			obj.CustContact = res[i].CustContact;
			obj.equipmentId = res[i].equipmentId;
			obj.initiateWOPhoto = res[i].initiateWOPhoto;
			obj.closeWOPhoto = res[i].closeWOPhoto;
			obj.initPhotoName = res[i].initPhotoName;
			obj.closePhotoName = res[i].closePhotoName;
			objMap[i] = obj;
		}
	}
	return objMap;
};

WorkOrder.filterAttributes = function(valuestable, insert){
	var attributeTable = {};
	attributeTable.orderId = "orderId";
	attributeTable.customerId = "customerId";
	attributeTable.customerDesc = "customerDesc";
	attributeTable.endDate = "endDate";
	attributeTable.estimatedTime = "estimatedTime";
	attributeTable.fieldComment = "fieldComment";
	attributeTable.locationId = "locationId";
	attributeTable.orderDesc = "orderDesc";
	attributeTable.partId = "partId";
	attributeTable.priority = "priority";
	attributeTable.problemDesc = "problemDesc";
	attributeTable.resourceDescr = "resourceDescr";
	attributeTable.resourceId = "resourceId";
	attributeTable.specialInstr = "specialInstr";
	attributeTable.startDate = "startDate";
	attributeTable.startTime = "startTime";
	attributeTable.status = "status";
	attributeTable.type = "type";
	attributeTable.vendorId = "vendorId";
	attributeTable.Latitude = "Latitude";
	attributeTable.Longitude = "Longitude";
	attributeTable.CustContact = "CustContact";
	attributeTable.equipmentId = "equipmentId";
	attributeTable.initiateWOPhoto = "initiateWOPhoto";
	attributeTable.closeWOPhoto = "closeWOPhoto";
	attributeTable.initPhotoName = "initPhotoName";
	attributeTable.closePhotoName = "closePhotoName";

	var PKTable = {};
	PKTable.orderId = "orderId";
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			kony.sync.syncPrint("WARNING: [KONYSYNC] Ignoring the attribute " + k + " for the SyncObject WorkOrder. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(insert===false && !kony.sync.isNull(PKTable[k])) {
			kony.sync.syncPrint("WARNING: [KONYSYNC] Ignoring the primary key " + k + " for the SyncObject WorkOrder. Primary Key should not be the part of the attributes to be updated in the local device database.");
		}
		else{
			newvaluestable[k] = v;
		}
	}
	return newvaluestable;
};

WorkOrder.formOrderByClause = function(orderByMap){
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		var filteredValuestable = WorkOrder.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,filteredValuestable);
	}
	return null;
};

WorkOrder.prototype.getValuesTable = function(isInsert){
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.orderId = this.orderId;
	}
	valuesTable.customerId = this.customerId;
	valuesTable.customerDesc = this.customerDesc;
	valuesTable.endDate = this.endDate;
	valuesTable.estimatedTime = this.estimatedTime;
	valuesTable.fieldComment = this.fieldComment;
	valuesTable.locationId = this.locationId;
	valuesTable.orderDesc = this.orderDesc;
	valuesTable.partId = this.partId;
	valuesTable.priority = this.priority;
	valuesTable.problemDesc = this.problemDesc;
	valuesTable.resourceDescr = this.resourceDescr;
	valuesTable.resourceId = this.resourceId;
	valuesTable.specialInstr = this.specialInstr;
	valuesTable.startDate = this.startDate;
	valuesTable.startTime = this.startTime;
	valuesTable.status = this.status;
	valuesTable.type = this.type;
	valuesTable.vendorId = this.vendorId;
	valuesTable.Latitude = this.Latitude;
	valuesTable.Longitude = this.Longitude;
	valuesTable.CustContact = this.CustContact;
	valuesTable.equipmentId = this.equipmentId;
	valuesTable.initiateWOPhoto = this.initiateWOPhoto;
	valuesTable.closeWOPhoto = this.closeWOPhoto;
	valuesTable.initPhotoName = this.initPhotoName;
	valuesTable.closePhotoName = this.closePhotoName;
	return valuesTable;
};

WorkOrder.prototype.getPKTable = function(){
	var pkTable = {};
	pkTable.orderId = {key:"orderId",value:this.orderId};
	return pkTable;
};

WorkOrder.getPKTable = function(){
	var pkTable = [];
	pkTable.push("orderId");
	return pkTable;
};

WorkOrder.pkCheck = function(pks,wcs,errorcallback,opName){
	var wc = [];
	if(kony.sync.isNull(pks)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Primary Key orderId not specified in  " + opName + "  an item in WorkOrder");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("orderId",opName,"WorkOrder")));
		return false;	
	}
	else if(kony.sync.isValidJSTable(pks)){
		if(!kony.sync.isNull(pks.orderId)){
			if(!kony.sync.isNull(pks.orderId.value)){
				wc.key = "orderId";
				wc.value = pks.orderId.value;
			}
			else{
				wc.key = "orderId";
				wc.value = pks.orderId;
			}
		}else{
			kony.sync.syncPrint("ERROR: [KONYSYNC] Primary Key orderId not specified in  " + opName + "  an item in WorkOrder");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("orderId",opName,"WorkOrder")));
			return false;
		}
	}
	else{
		wc.key = "orderId";
		wc.value = pks;
	}	
	kony.table.insert(wcs,wc);
	return true;
};
WorkOrder.validateType = function (valuestable, errorcallback){
	if(kony.sync.genMaliciousTypeCheck(valuestable, errorcallback)){
		return false;
	}
	return true;
};
WorkOrder.validateNull = function (valuestable,errorcallback){
	return true;
};

WorkOrder.validateNullInsert = function (valuestable,errorcallback){
	if(kony.sync.isNull(valuestable.orderId) || kony.sync.isEmptyString(valuestable.orderId)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Mandatory attribute orderId is missing for the SyncObject WorkOrder.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "WorkOrder", "orderId")));
		return false;
	}
	return true;
};
WorkOrder.getRelationshipMap = function(relationshipMap,valuestable){
	return relationshipMap;
};

WorkOrder.getTableName = function(){
	return "WorkOrder";
};

// **********************************End WorkOrder's helper methods************************