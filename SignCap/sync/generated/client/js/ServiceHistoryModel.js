// ****************Generated On Tue Sep 10 13:07:05 IST 2013ServiceHistory*******************
// **********************************Start ServiceHistory's helper methods************************

/************************************************************************************
* Creates new ServiceHistory
*************************************************************************************/
ServiceHistory = function(){
	this.serviceHistId = null;
	this.customerDesc = null;
	this.customerEmail = null;
	this.customerPhone = null;
	this.lastServDate = null;
	this.partsUsed = null;
	this.problemDesc = null;
	this.probResolution = null;
	this.technicianId = null;
	this.time = null;
	this.tecnicianName = null;
	this.customerid = null;
	this.customerName = null;
	this.equipmentId = null;
	this.markForUpload = true;
};

ServiceHistory.prototype = {
	get serviceHistId(){
		return this._serviceHistId;
	},
	set serviceHistId(val){
		this._serviceHistId = val;
	},
	get customerDesc(){
		return this._customerDesc;
	},
	set customerDesc(val){
		this._customerDesc = val;
	},
	get customerEmail(){
		return this._customerEmail;
	},
	set customerEmail(val){
		this._customerEmail = val;
	},
	get customerPhone(){
		return this._customerPhone;
	},
	set customerPhone(val){
		this._customerPhone = val;
	},
	get lastServDate(){
		return this._lastServDate;
	},
	set lastServDate(val){
		this._lastServDate = val;
	},
	get partsUsed(){
		return this._partsUsed;
	},
	set partsUsed(val){
		this._partsUsed = val;
	},
	get problemDesc(){
		return this._problemDesc;
	},
	set problemDesc(val){
		this._problemDesc = val;
	},
	get probResolution(){
		return this._probResolution;
	},
	set probResolution(val){
		this._probResolution = val;
	},
	get technicianId(){
		return this._technicianId;
	},
	set technicianId(val){
		this._technicianId = val;
	},
	get time(){
		return this._time;
	},
	set time(val){
		this._time = val;
	},
	get tecnicianName(){
		return this._tecnicianName;
	},
	set tecnicianName(val){
		this._tecnicianName = val;
	},
	get customerid(){
		return this._customerid;
	},
	set customerid(val){
		this._customerid = val;
	},
	get customerName(){
		return this._customerName;
	},
	set customerName(val){
		this._customerName = val;
	},
	get equipmentId(){
		return this._equipmentId;
	},
	set equipmentId(val){
		this._equipmentId = val;
	},
};

/************************************************************************************
* Retrieves all instances of ServiceHistory SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderby[0] = {};
* orderby[0].key = "serviceHistId";
* orderby[0].sortType ="desc";
* orderby[1] = {};
* orderby[1].key = "customerDesc";
* orderby[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* ServiceHistory.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
ServiceHistory.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	var dbname = kony.sync.getDBName();
	var tbname = ServiceHistory.getTableName();
	orderByMap = ServiceHistory.formOrderByClause(orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){	
		successcallback(ServiceHistory.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of ServiceHistory present in local database.
*************************************************************************************/
ServiceHistory.getAllCount = function(successcallback,errorcallback){
	ServiceHistory.getCount("",successcallback,errorcallback);
};
ServiceHistory.getCount = function(wcs,successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = ServiceHistory.getTableName();
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
* Creates a new instance of ServiceHistory in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
ServiceHistory.prototype.create = function(successcallback,errorcallback){
	var valuestable = this.getValuesTable(true);
	ServiceHistory.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
ServiceHistory.create = function(valuestable, successcallback,errorcallback,markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = ServiceHistory.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	if(ServiceHistory.validateType(valuestable,errorcallback)===false){
		return;
	}
	if(ServiceHistory.validateNullInsert(valuestable,errorcallback)===false){
		return;
	}
	valuestable = ServiceHistory.filterAttributes(valuestable, true);
	var relationshipMap={};  
	relationshipMap = ServiceHistory.getRelationshipMap(relationshipMap,valuestable);
	function executeSuccess(){
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
	var pks = [];
	var errMsg = "serviceHistId=" + valuestable.serviceHistId;
	pks["serviceHistId"] = {key:"serviceHistId",value:valuestable.serviceHistId};
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			errMsg = "[" + errMsg + "]";
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
		}
	}
	ServiceHistory.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
};

/************************************************************************************
* Creates number of new instances of ServiceHistory in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
*************************************************************************************/
ServiceHistory.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = ServiceHistory.getTableName();
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
			if(ServiceHistory.validateType(valuestable,errorcallback)===false){
				return;
			}
			if(ServiceHistory.validateNullInsert(valuestable,errorcallback)===false){
				return;
			}
			valuestable = ServiceHistory.filterAttributes(valuestable, true);
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
				var errMsg = "serviceHistId=" + valuestable.serviceHistId;
				pks["serviceHistId"] = {key:"serviceHistId",value:valuestable.serviceHistId};
				var wcs = [];
				if(ServiceHistory.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
			relationshipMap = ServiceHistory.getRelationshipMap(relationshipMap,valuesArray[i]);
			if(!kony.sync.checkIntegrityinTransaction(tx, relationshipMap, errorcallback)){
				isError = true;
				return; 
			}
		}
	}
};
/************************************************************************************
* Updates ServiceHistory using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
ServiceHistory.prototype.updateByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	ServiceHistory.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
ServiceHistory.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = ServiceHistory.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];
	var twcs = [ ];
	if(ServiceHistory.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}
	twcs = kony.sync.CreateCopy(wcs);
	function ServiceHistory_PKPresent_succ(res){
		if(null!==res && res.length!==0){
			if(ServiceHistory.validateType(valuestable,errorcallback)===false){
				return;
			}
			if(ServiceHistory.validateNull(valuestable,errorcallback)===false){
				return;
			}
			valuestable = ServiceHistory.filterAttributes(valuestable, false);
			var relationshipMap={};  
			relationshipMap = ServiceHistory.getRelationshipMap(relationshipMap,valuestable);

			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
		}
	}

	function executeSuccess(){
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback, false, markForUpload);
	}
	
	function ServiceHistory_CheckUpdate(res){
		if(kony.sync.checkForFalseUpdate(dbname, tbname, twcs, markForUpload, errorcallback,checkForFalseUpdateCallback)===true){
			ServiceHistory_PKPresent_succ(res);
		}
		function checkForFalseUpdateCallback(){
			ServiceHistory_PKPresent_succ(res);
		}
	}
	function pkNotFoundErrCallback(){
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	ServiceHistory.getAllDetailsByPK(pks,ServiceHistory_CheckUpdate, pkNotFoundErrCallback);
};

/************************************************************************************
* Updates ServiceHistory(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
ServiceHistory.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = ServiceHistory.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	if(ServiceHistory.validateType(valuestable,errorcallback)===false){
		return;
	}
	if(ServiceHistory.validateNull(valuestable,errorcallback)===false){
		return;
	}	
	valuestable = ServiceHistory.filterAttributes(valuestable, false);
	var relationshipMap={};
	relationshipMap = ServiceHistory.getRelationshipMap(relationshipMap,valuestable);
	kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	function executeSuccess(){
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, ServiceHistory.getPKTable());
	}
};

/************************************************************************************
* Deletes ServiceHistory using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
ServiceHistory.prototype.deleteByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	ServiceHistory.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
ServiceHistory.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = ServiceHistory.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var twcs = [];
	var deletedRows;
	if(ServiceHistory.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function ServiceHistory_PKPresent_succ(res){
		if(null!==res && res.length!==0) {
			var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
			if(connection != null){
				kony.sync.startTransaction(connection, transactioncallback, ServiceHistory_relationshipsuccess, ServiceHistory_relationshipfailure);
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

	function ServiceHistory_relationshipfailure(){
		if(!isError){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function ServiceHistory_relationshipsuccess(){
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, deletedRows);
		}
	}
	
	function ServiceHistory_CheckUpdate(res){
		if(kony.sync.checkForFalseUpdate(dbname, tbname, twcs, markForUpload, errorcallback, checkForFalseUpdateCallback)===true) {
			ServiceHistory_PKPresent_succ(res);
		}
		
		function checkForFalseUpdateCallback(){
			ServiceHistory_PKPresent_succ(res);
		}
	}
	function pkNotFoundErrCallback(){
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	ServiceHistory.getAllDetailsByPK(pks,ServiceHistory_CheckUpdate, pkNotFoundErrCallback);
};

/************************************************************************************
* Deletes ServiceHistory(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. ServiceHistory.remove("where serviceHistId like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
ServiceHistory.remove = function(wcs, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = ServiceHistory.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function ServiceHistory_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function ServiceHistory_removeSuccess(){

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
			kony.sync.startTransaction(connection, ServiceHistory_removeTransactioncallback, ServiceHistory_removeSuccess, errorcallbackWrapper);
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
* Deletes ServiceHistory using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
ServiceHistory.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	ServiceHistory.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
ServiceHistory.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = ServiceHistory.getTableName();
	var wcs = [];
	if(ServiceHistory.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	function ServiceHistory_PKPresent_succ(res){
		if(null!==res && res.length!==0) {
			kony.sync.single_delete_execute(dbname, tbname, wcs,successcallback, errorcallback, false, true);
		}else{
			kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
		}
	}
	ServiceHistory.getAllDetailsByPK(pks, ServiceHistory_PKPresent_succ, errorcallback);
};

/************************************************************************************
* Retrieves ServiceHistory using primary key from the local Database. 
*************************************************************************************/
ServiceHistory.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	ServiceHistory.getAllDetailsByPK(pks,successcallback,errorcallback,this.markForUpload);
};
ServiceHistory.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = ServiceHistory.getTableName();
	var wcs = [];
	if(ServiceHistory.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		successcallback(ServiceHistory.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};

/************************************************************************************
* Retrieves ServiceHistory(s) using where clause from the local Database. 
* e.g. ServiceHistory.find("where serviceHistId like 'A%'", successcallback,errorcallback);
*************************************************************************************/
ServiceHistory.find = function(wcs, successcallback,errorcallback){
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = ServiceHistory.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from " + tbname + " " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, ServiceHistory.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of ServiceHistory with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
ServiceHistory.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	var pks = this.getPKTable();
	ServiceHistory.markForUploadbyPK(pks, successcallback, errorcallback);
};
ServiceHistory.markForUploadbyPK = function(pks, successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = ServiceHistory.getTableName();
	var isError = false;
	var recordsFound = false;
	var wcs = [];
	if(ServiceHistory.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of ServiceHistory matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
ServiceHistory.markForUpload = function(wcs, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = ServiceHistory.getTableName();
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
* Retrieves instance(s) of ServiceHistory pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
ServiceHistory.getPendingUpload = function(successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = ServiceHistory.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var sql = "select * from " + tbname + " WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" = "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, ServiceHistory.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}

};

/************************************************************************************
* Retrieves instance(s) of ServiceHistory pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
ServiceHistory.getPendingAcknowledgement = function(successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = ServiceHistory.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, ServiceHistory.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of ServiceHistory deferred for upload.
*************************************************************************************/
ServiceHistory.getDeferredUpload = function(successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = ServiceHistory.getTableName();
	var mysql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableChangeTypeColumn+" LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, ServiceHistory.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to ServiceHistory in local database to last synced state
*************************************************************************************/
ServiceHistory.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = ServiceHistory.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, ServiceHistory.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}		
};

/************************************************************************************
* Rollbacks changes to ServiceHistory's record with given primary key in local 
* database to last synced state
*************************************************************************************/
ServiceHistory.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	ServiceHistory.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
ServiceHistory.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = ServiceHistory.getTableName();
	var wcs = [];
	if(ServiceHistory.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, ServiceHistory.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};



/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
ServiceHistory.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable){
	var tbname = ServiceHistory.getTableName();
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


ServiceHistory.convertTableToObject = function(res){
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new ServiceHistory();
			obj.serviceHistId = res[i].serviceHistId;
			obj.customerDesc = res[i].customerDesc;
			obj.customerEmail = res[i].customerEmail;
			obj.customerPhone = res[i].customerPhone;
			obj.lastServDate = res[i].lastServDate;
			obj.partsUsed = res[i].partsUsed;
			obj.problemDesc = res[i].problemDesc;
			obj.probResolution = res[i].probResolution;
			obj.technicianId = res[i].technicianId;
			obj.time = res[i].time;
			obj.tecnicianName = res[i].tecnicianName;
			obj.customerid = res[i].customerid;
			obj.customerName = res[i].customerName;
			obj.equipmentId = res[i].equipmentId;
			objMap[i] = obj;
		}
	}
	return objMap;
};

ServiceHistory.filterAttributes = function(valuestable, insert){
	var attributeTable = {};
	attributeTable.serviceHistId = "serviceHistId";
	attributeTable.customerDesc = "customerDesc";
	attributeTable.customerEmail = "customerEmail";
	attributeTable.customerPhone = "customerPhone";
	attributeTable.lastServDate = "lastServDate";
	attributeTable.partsUsed = "partsUsed";
	attributeTable.problemDesc = "problemDesc";
	attributeTable.probResolution = "probResolution";
	attributeTable.technicianId = "technicianId";
	attributeTable.time = "time";
	attributeTable.tecnicianName = "tecnicianName";
	attributeTable.customerid = "customerid";
	attributeTable.customerName = "customerName";
	attributeTable.equipmentId = "equipmentId";

	var PKTable = {};
	PKTable.serviceHistId = "serviceHistId";
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			kony.sync.syncPrint("WARNING: [KONYSYNC] Ignoring the attribute " + k + " for the SyncObject ServiceHistory. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(insert===false && !kony.sync.isNull(PKTable[k])) {
			kony.sync.syncPrint("WARNING: [KONYSYNC] Ignoring the primary key " + k + " for the SyncObject ServiceHistory. Primary Key should not be the part of the attributes to be updated in the local device database.");
		}
		else{
			newvaluestable[k] = v;
		}
	}
	return newvaluestable;
};

ServiceHistory.formOrderByClause = function(orderByMap){
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		var filteredValuestable = ServiceHistory.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,filteredValuestable);
	}
	return null;
};

ServiceHistory.prototype.getValuesTable = function(isInsert){
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.serviceHistId = this.serviceHistId;
	}
	valuesTable.customerDesc = this.customerDesc;
	valuesTable.customerEmail = this.customerEmail;
	valuesTable.customerPhone = this.customerPhone;
	valuesTable.lastServDate = this.lastServDate;
	valuesTable.partsUsed = this.partsUsed;
	valuesTable.problemDesc = this.problemDesc;
	valuesTable.probResolution = this.probResolution;
	valuesTable.technicianId = this.technicianId;
	valuesTable.time = this.time;
	valuesTable.tecnicianName = this.tecnicianName;
	valuesTable.customerid = this.customerid;
	valuesTable.customerName = this.customerName;
	valuesTable.equipmentId = this.equipmentId;
	return valuesTable;
};

ServiceHistory.prototype.getPKTable = function(){
	var pkTable = {};
	pkTable.serviceHistId = {key:"serviceHistId",value:this.serviceHistId};
	return pkTable;
};

ServiceHistory.getPKTable = function(){
	var pkTable = [];
	pkTable.push("serviceHistId");
	return pkTable;
};

ServiceHistory.pkCheck = function(pks,wcs,errorcallback,opName){
	var wc = [];
	if(kony.sync.isNull(pks)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Primary Key serviceHistId not specified in  " + opName + "  an item in ServiceHistory");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("serviceHistId",opName,"ServiceHistory")));
		return false;	
	}
	else if(kony.sync.isValidJSTable(pks)){
		if(!kony.sync.isNull(pks.serviceHistId)){
			if(!kony.sync.isNull(pks.serviceHistId.value)){
				wc.key = "serviceHistId";
				wc.value = pks.serviceHistId.value;
			}
			else{
				wc.key = "serviceHistId";
				wc.value = pks.serviceHistId;
			}
		}else{
			kony.sync.syncPrint("ERROR: [KONYSYNC] Primary Key serviceHistId not specified in  " + opName + "  an item in ServiceHistory");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("serviceHistId",opName,"ServiceHistory")));
			return false;
		}
	}
	else{
		wc.key = "serviceHistId";
		wc.value = pks;
	}	
	kony.table.insert(wcs,wc);
	return true;
};
ServiceHistory.validateType = function (valuestable, errorcallback){
	if(kony.sync.genMaliciousTypeCheck(valuestable, errorcallback)){
		return false;
	}
	return true;
};
ServiceHistory.validateNull = function (valuestable,errorcallback){
	if(valuestable.customerDesc!==undefined){
		if(kony.sync.isNull(valuestable.customerDesc) || kony.sync.isEmptyString(valuestable.customerDesc)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Mandatory attribute customerDesc is missing for the SyncObject ServiceHistory.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ServiceHistory", "customerDesc")));
		return false;
		}
	}
	return true;
};

ServiceHistory.validateNullInsert = function (valuestable,errorcallback){
	if(kony.sync.isNull(valuestable.serviceHistId) || kony.sync.isEmptyString(valuestable.serviceHistId)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Mandatory attribute serviceHistId is missing for the SyncObject ServiceHistory.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ServiceHistory", "serviceHistId")));
		return false;
	}
	if(kony.sync.isNull(valuestable.customerDesc) || kony.sync.isEmptyString(valuestable.customerDesc)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Mandatory attribute customerDesc is missing for the SyncObject ServiceHistory.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "ServiceHistory", "customerDesc")));
		return false;
	}
	return true;
};
ServiceHistory.getRelationshipMap = function(relationshipMap,valuestable){
	return relationshipMap;
};

ServiceHistory.getTableName = function(){
	return "ServiceHistory";
};

// **********************************End ServiceHistory's helper methods************************