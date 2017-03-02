// ****************Generated On Tue Sep 10 13:07:05 IST 2013WorkOrderDetails*******************
// **********************************Start WorkOrderDetails's helper methods************************

/************************************************************************************
* Creates new WorkOrderDetails
*************************************************************************************/
WorkOrderDetails = function(){
	this.orderId = null;
	this.serviceStatus = null;
	this.lastServiceDate = null;
	this.problemDesc = null;
	this.problemRes = null;
	this.resourceDesc = null;
	this.resourceId = null;
	this.customerDesc = null;
	this.customerId = null;
	this.partUsed = null;
	this.resolutionCode = null;
	this.partsReplaced = null;
	this.partsQtyUsed = null;
	this.defectiveParts = null;
	this.addTripReason = null;
	this.customerSign = null;
	this.odometerReading = null;
	this.fieldComment = null;
	this.reqAddTime = null;
	this.reasonAddTime = null;
	this.markForUpload = true;
};

WorkOrderDetails.prototype = {
	get orderId(){
		return this._orderId;
	},
	set orderId(val){
		this._orderId = val;
	},
	get serviceStatus(){
		return this._serviceStatus;
	},
	set serviceStatus(val){
		this._serviceStatus = val;
	},
	get lastServiceDate(){
		return this._lastServiceDate;
	},
	set lastServiceDate(val){
		this._lastServiceDate = val;
	},
	get problemDesc(){
		return this._problemDesc;
	},
	set problemDesc(val){
		this._problemDesc = val;
	},
	get problemRes(){
		return this._problemRes;
	},
	set problemRes(val){
		this._problemRes = val;
	},
	get resourceDesc(){
		return this._resourceDesc;
	},
	set resourceDesc(val){
		this._resourceDesc = val;
	},
	get resourceId(){
		return this._resourceId;
	},
	set resourceId(val){
		this._resourceId = val;
	},
	get customerDesc(){
		return this._customerDesc;
	},
	set customerDesc(val){
		this._customerDesc = val;
	},
	get customerId(){
		return this._customerId;
	},
	set customerId(val){
		this._customerId = val;
	},
	get partUsed(){
		return this._partUsed;
	},
	set partUsed(val){
		this._partUsed = val;
	},
	get resolutionCode(){
		return this._resolutionCode;
	},
	set resolutionCode(val){
		this._resolutionCode = val;
	},
	get partsReplaced(){
		return this._partsReplaced;
	},
	set partsReplaced(val){
		this._partsReplaced = val;
	},
	get partsQtyUsed(){
		return this._partsQtyUsed;
	},
	set partsQtyUsed(val){
		this._partsQtyUsed = val;
	},
	get defectiveParts(){
		return this._defectiveParts;
	},
	set defectiveParts(val){
		this._defectiveParts = val;
	},
	get addTripReason(){
		return this._addTripReason;
	},
	set addTripReason(val){
		this._addTripReason = val;
	},
	get customerSign(){
		return this._customerSign;
	},
	set customerSign(val){
		this._customerSign = val;
	},
	get odometerReading(){
		return this._odometerReading;
	},
	set odometerReading(val){
		this._odometerReading = val;
	},
	get fieldComment(){
		return this._fieldComment;
	},
	set fieldComment(val){
		this._fieldComment = val;
	},
	get reqAddTime(){
		return this._reqAddTime;
	},
	set reqAddTime(val){
		this._reqAddTime = val;
	},
	get reasonAddTime(){
		return this._reasonAddTime;
	},
	set reasonAddTime(val){
		this._reasonAddTime = val;
	},
};

/************************************************************************************
* Retrieves all instances of WorkOrderDetails SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderby[0] = {};
* orderby[0].key = "orderId";
* orderby[0].sortType ="desc";
* orderby[1] = {};
* orderby[1].key = "serviceStatus";
* orderby[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* WorkOrderDetails.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
WorkOrderDetails.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrderDetails.getTableName();
	orderByMap = WorkOrderDetails.formOrderByClause(orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){	
		successcallback(WorkOrderDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of WorkOrderDetails present in local database.
*************************************************************************************/
WorkOrderDetails.getAllCount = function(successcallback,errorcallback){
	WorkOrderDetails.getCount("",successcallback,errorcallback);
};
WorkOrderDetails.getCount = function(wcs,successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrderDetails.getTableName();
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
* Creates a new instance of WorkOrderDetails in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
WorkOrderDetails.prototype.create = function(successcallback,errorcallback){
	var valuestable = this.getValuesTable(true);
	WorkOrderDetails.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
WorkOrderDetails.create = function(valuestable, successcallback,errorcallback,markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrderDetails.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	if(WorkOrderDetails.validateType(valuestable,errorcallback)===false){
		return;
	}
	if(WorkOrderDetails.validateNullInsert(valuestable,errorcallback)===false){
		return;
	}
	valuestable = WorkOrderDetails.filterAttributes(valuestable, true);
	var relationshipMap={};  
	relationshipMap = WorkOrderDetails.getRelationshipMap(relationshipMap,valuestable);
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
	WorkOrderDetails.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
};

/************************************************************************************
* Creates number of new instances of WorkOrderDetails in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
*************************************************************************************/
WorkOrderDetails.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrderDetails.getTableName();
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
			if(WorkOrderDetails.validateType(valuestable,errorcallback)===false){
				return;
			}
			if(WorkOrderDetails.validateNullInsert(valuestable,errorcallback)===false){
				return;
			}
			valuestable = WorkOrderDetails.filterAttributes(valuestable, true);
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
				if(WorkOrderDetails.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
			relationshipMap = WorkOrderDetails.getRelationshipMap(relationshipMap,valuesArray[i]);
			if(!kony.sync.checkIntegrityinTransaction(tx, relationshipMap, errorcallback)){
				isError = true;
				return; 
			}
		}
	}
};
/************************************************************************************
* Updates WorkOrderDetails using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
WorkOrderDetails.prototype.updateByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	WorkOrderDetails.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
WorkOrderDetails.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrderDetails.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];
	var twcs = [ ];
	if(WorkOrderDetails.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}
	twcs = kony.sync.CreateCopy(wcs);
	function WorkOrderDetails_PKPresent_succ(res){
		if(null!==res && res.length!==0){
			if(WorkOrderDetails.validateType(valuestable,errorcallback)===false){
				return;
			}
			if(WorkOrderDetails.validateNull(valuestable,errorcallback)===false){
				return;
			}
			valuestable = WorkOrderDetails.filterAttributes(valuestable, false);
			var relationshipMap={};  
			relationshipMap = WorkOrderDetails.getRelationshipMap(relationshipMap,valuestable);

			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
		}
	}

	function executeSuccess(){
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback, false, markForUpload);
	}
	
	function WorkOrderDetails_CheckUpdate(res){
		if(kony.sync.checkForFalseUpdate(dbname, tbname, twcs, markForUpload, errorcallback,checkForFalseUpdateCallback)===true){
			WorkOrderDetails_PKPresent_succ(res);
		}
		function checkForFalseUpdateCallback(){
			WorkOrderDetails_PKPresent_succ(res);
		}
	}
	function pkNotFoundErrCallback(){
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	WorkOrderDetails.getAllDetailsByPK(pks,WorkOrderDetails_CheckUpdate, pkNotFoundErrCallback);
};

/************************************************************************************
* Updates WorkOrderDetails(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
WorkOrderDetails.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrderDetails.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	if(WorkOrderDetails.validateType(valuestable,errorcallback)===false){
		return;
	}
	if(WorkOrderDetails.validateNull(valuestable,errorcallback)===false){
		return;
	}	
	valuestable = WorkOrderDetails.filterAttributes(valuestable, false);
	var relationshipMap={};
	relationshipMap = WorkOrderDetails.getRelationshipMap(relationshipMap,valuestable);
	kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	function executeSuccess(){
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, WorkOrderDetails.getPKTable());
	}
};

/************************************************************************************
* Deletes WorkOrderDetails using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
WorkOrderDetails.prototype.deleteByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	WorkOrderDetails.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
WorkOrderDetails.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrderDetails.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var twcs = [];
	var deletedRows;
	if(WorkOrderDetails.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function WorkOrderDetails_PKPresent_succ(res){
		if(null!==res && res.length!==0) {
			var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
			if(connection != null){
				kony.sync.startTransaction(connection, transactioncallback, WorkOrderDetails_relationshipsuccess, WorkOrderDetails_relationshipfailure);
			}
		}else{
			kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
		}
		function transactioncallback(tx){
			deletedRows = kony.sync.remove(tx, tbname, wcs, false, markForUpload, null);
			if(deletedRows === false){
				isError = true;
			}
		}
	}

	function WorkOrderDetails_relationshipfailure(){
		if(!isError){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function WorkOrderDetails_relationshipsuccess(){
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, deletedRows);
		}
	}
	
	function WorkOrderDetails_CheckUpdate(res){
		if(kony.sync.checkForFalseUpdate(dbname, tbname, twcs, markForUpload, errorcallback, checkForFalseUpdateCallback)===true) {
			WorkOrderDetails_PKPresent_succ(res);
		}
		
		function checkForFalseUpdateCallback(){
			WorkOrderDetails_PKPresent_succ(res);
		}
	}
	function pkNotFoundErrCallback(){
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	WorkOrderDetails.getAllDetailsByPK(pks,WorkOrderDetails_CheckUpdate, pkNotFoundErrCallback);
};

/************************************************************************************
* Deletes WorkOrderDetails(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. WorkOrderDetails.remove("where orderId like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
WorkOrderDetails.remove = function(wcs, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrderDetails.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function WorkOrderDetails_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function WorkOrderDetails_removeSuccess(){

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
			kony.sync.startTransaction(connection, WorkOrderDetails_removeTransactioncallback, WorkOrderDetails_removeSuccess, errorcallbackWrapper);
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
* Deletes WorkOrderDetails using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
WorkOrderDetails.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	WorkOrderDetails.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
WorkOrderDetails.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrderDetails.getTableName();
	var wcs = [];
	if(WorkOrderDetails.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	function WorkOrderDetails_PKPresent_succ(res){
		if(null!==res && res.length!==0) {
			kony.sync.single_delete_execute(dbname, tbname, wcs,successcallback, errorcallback, false, true);
		}else{
			kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
		}
	}
	WorkOrderDetails.getAllDetailsByPK(pks, WorkOrderDetails_PKPresent_succ, errorcallback);
};

/************************************************************************************
* Retrieves WorkOrderDetails using primary key from the local Database. 
*************************************************************************************/
WorkOrderDetails.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	WorkOrderDetails.getAllDetailsByPK(pks,successcallback,errorcallback,this.markForUpload);
};
WorkOrderDetails.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrderDetails.getTableName();
	var wcs = [];
	if(WorkOrderDetails.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		successcallback(WorkOrderDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};

/************************************************************************************
* Retrieves WorkOrderDetails(s) using where clause from the local Database. 
* e.g. WorkOrderDetails.find("where orderId like 'A%'", successcallback,errorcallback);
*************************************************************************************/
WorkOrderDetails.find = function(wcs, successcallback,errorcallback){
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrderDetails.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from " + tbname + " " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, WorkOrderDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of WorkOrderDetails with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
WorkOrderDetails.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	var pks = this.getPKTable();
	WorkOrderDetails.markForUploadbyPK(pks, successcallback, errorcallback);
};
WorkOrderDetails.markForUploadbyPK = function(pks, successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrderDetails.getTableName();
	var isError = false;
	var recordsFound = false;
	var wcs = [];
	if(WorkOrderDetails.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of WorkOrderDetails matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
WorkOrderDetails.markForUpload = function(wcs, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrderDetails.getTableName();
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
* Retrieves instance(s) of WorkOrderDetails pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
WorkOrderDetails.getPendingUpload = function(successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrderDetails.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var sql = "select * from " + tbname + " WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" = "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, WorkOrderDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}

};

/************************************************************************************
* Retrieves instance(s) of WorkOrderDetails pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
WorkOrderDetails.getPendingAcknowledgement = function(successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrderDetails.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, WorkOrderDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of WorkOrderDetails deferred for upload.
*************************************************************************************/
WorkOrderDetails.getDeferredUpload = function(successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrderDetails.getTableName();
	var mysql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableChangeTypeColumn+" LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, WorkOrderDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to WorkOrderDetails in local database to last synced state
*************************************************************************************/
WorkOrderDetails.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrderDetails.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, WorkOrderDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}		
};

/************************************************************************************
* Rollbacks changes to WorkOrderDetails's record with given primary key in local 
* database to last synced state
*************************************************************************************/
WorkOrderDetails.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	WorkOrderDetails.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
WorkOrderDetails.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = WorkOrderDetails.getTableName();
	var wcs = [];
	if(WorkOrderDetails.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, WorkOrderDetails.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};



/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
WorkOrderDetails.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable){
	var tbname = WorkOrderDetails.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
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


WorkOrderDetails.convertTableToObject = function(res){
	objMap = [];
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
	return objMap;
};

WorkOrderDetails.filterAttributes = function(valuestable, insert){
	var attributeTable = {};
	attributeTable.orderId = "orderId";
	attributeTable.serviceStatus = "serviceStatus";
	attributeTable.lastServiceDate = "lastServiceDate";
	attributeTable.problemDesc = "problemDesc";
	attributeTable.problemRes = "problemRes";
	attributeTable.resourceDesc = "resourceDesc";
	attributeTable.resourceId = "resourceId";
	attributeTable.customerDesc = "customerDesc";
	attributeTable.customerId = "customerId";
	attributeTable.partUsed = "partUsed";
	attributeTable.resolutionCode = "resolutionCode";
	attributeTable.partsReplaced = "partsReplaced";
	attributeTable.partsQtyUsed = "partsQtyUsed";
	attributeTable.defectiveParts = "defectiveParts";
	attributeTable.addTripReason = "addTripReason";
	attributeTable.customerSign = "customerSign";
	attributeTable.odometerReading = "odometerReading";
	attributeTable.fieldComment = "fieldComment";
	attributeTable.reqAddTime = "reqAddTime";
	attributeTable.reasonAddTime = "reasonAddTime";

	var PKTable = {};
	PKTable.orderId = "orderId";
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			kony.sync.syncPrint("WARNING: [KONYSYNC] Ignoring the attribute " + k + " for the SyncObject WorkOrderDetails. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(insert===false && !kony.sync.isNull(PKTable[k])) {
			kony.sync.syncPrint("WARNING: [KONYSYNC] Ignoring the primary key " + k + " for the SyncObject WorkOrderDetails. Primary Key should not be the part of the attributes to be updated in the local device database.");
		}
		else{
			newvaluestable[k] = v;
		}
	}
	return newvaluestable;
};

WorkOrderDetails.formOrderByClause = function(orderByMap){
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		var filteredValuestable = WorkOrderDetails.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,filteredValuestable);
	}
	return null;
};

WorkOrderDetails.prototype.getValuesTable = function(isInsert){
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.orderId = this.orderId;
	}
	valuesTable.serviceStatus = this.serviceStatus;
	valuesTable.lastServiceDate = this.lastServiceDate;
	valuesTable.problemDesc = this.problemDesc;
	valuesTable.problemRes = this.problemRes;
	valuesTable.resourceDesc = this.resourceDesc;
	valuesTable.resourceId = this.resourceId;
	valuesTable.customerDesc = this.customerDesc;
	valuesTable.customerId = this.customerId;
	valuesTable.partUsed = this.partUsed;
	valuesTable.resolutionCode = this.resolutionCode;
	valuesTable.partsReplaced = this.partsReplaced;
	valuesTable.partsQtyUsed = this.partsQtyUsed;
	valuesTable.defectiveParts = this.defectiveParts;
	valuesTable.addTripReason = this.addTripReason;
	valuesTable.customerSign = this.customerSign;
	valuesTable.odometerReading = this.odometerReading;
	valuesTable.fieldComment = this.fieldComment;
	valuesTable.reqAddTime = this.reqAddTime;
	valuesTable.reasonAddTime = this.reasonAddTime;
	return valuesTable;
};

WorkOrderDetails.prototype.getPKTable = function(){
	var pkTable = {};
	pkTable.orderId = {key:"orderId",value:this.orderId};
	return pkTable;
};

WorkOrderDetails.getPKTable = function(){
	var pkTable = [];
	pkTable.push("orderId");
	return pkTable;
};

WorkOrderDetails.pkCheck = function(pks,wcs,errorcallback,opName){
	var wc = [];
	if(kony.sync.isNull(pks)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Primary Key orderId not specified in  " + opName + "  an item in WorkOrderDetails");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("orderId",opName,"WorkOrderDetails")));
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
			kony.sync.syncPrint("ERROR: [KONYSYNC] Primary Key orderId not specified in  " + opName + "  an item in WorkOrderDetails");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("orderId",opName,"WorkOrderDetails")));
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
WorkOrderDetails.validateType = function (valuestable, errorcallback){
	if(kony.sync.genMaliciousTypeCheck(valuestable, errorcallback)){
		return false;
	}
	return true;
};
WorkOrderDetails.validateNull = function (valuestable,errorcallback){
	return true;
};

WorkOrderDetails.validateNullInsert = function (valuestable,errorcallback){
	if(kony.sync.isNull(valuestable.orderId) || kony.sync.isEmptyString(valuestable.orderId)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Mandatory attribute orderId is missing for the SyncObject WorkOrderDetails.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "WorkOrderDetails", "orderId")));
		return false;
	}
	return true;
};
WorkOrderDetails.getRelationshipMap = function(relationshipMap,valuestable){
	relationshipMap.WorkOrder = {};
	relationshipMap.WorkOrder.sourceAttribute = "orderId";
	relationshipMap.WorkOrder.targetAttributeValue = "'" + valuestable.orderId + "'";
	return relationshipMap;
};

WorkOrderDetails.getTableName = function(){
	return "WorkOrderDetails";
};

// **********************************End WorkOrderDetails's helper methods************************