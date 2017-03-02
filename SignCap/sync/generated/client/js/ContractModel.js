// ****************Generated On Tue Sep 10 13:07:05 IST 2013Contract*******************
// **********************************Start Contract's helper methods************************

/************************************************************************************
* Creates new Contract
*************************************************************************************/
Contract = function(){
	this.contractId = null;
	this.contractDesc = null;
	this.contractEndDate = null;
	this.contractStrDate = null;
	this.createdBy = null;
	this.markForUpload = true;
};

Contract.prototype = {
	get contractId(){
		return this._contractId;
	},
	set contractId(val){
		this._contractId = val;
	},
	get contractDesc(){
		return this._contractDesc;
	},
	set contractDesc(val){
		this._contractDesc = val;
	},
	get contractEndDate(){
		return this._contractEndDate;
	},
	set contractEndDate(val){
		this._contractEndDate = val;
	},
	get contractStrDate(){
		return this._contractStrDate;
	},
	set contractStrDate(val){
		this._contractStrDate = val;
	},
	get createdBy(){
		return this._createdBy;
	},
	set createdBy(val){
		this._createdBy = val;
	},
};

/************************************************************************************
* Retrieves all instances of Contract SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderby[0] = {};
* orderby[0].key = "contractId";
* orderby[0].sortType ="desc";
* orderby[1] = {};
* orderby[1].key = "contractDesc";
* orderby[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* Contract.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
Contract.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	var dbname = kony.sync.getDBName();
	var tbname = Contract.getTableName();
	orderByMap = Contract.formOrderByClause(orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){	
		successcallback(Contract.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of Contract present in local database.
*************************************************************************************/
Contract.getAllCount = function(successcallback,errorcallback){
	Contract.getCount("",successcallback,errorcallback);
};
Contract.getCount = function(wcs,successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Contract.getTableName();
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
* Creates a new instance of Contract in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Contract.prototype.create = function(successcallback,errorcallback){
	var valuestable = this.getValuesTable(true);
	Contract.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
Contract.create = function(valuestable, successcallback,errorcallback,markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Contract.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	if(Contract.validateType(valuestable,errorcallback)===false){
		return;
	}
	if(Contract.validateNullInsert(valuestable,errorcallback)===false){
		return;
	}
	valuestable = Contract.filterAttributes(valuestable, true);
	var relationshipMap={};  
	relationshipMap = Contract.getRelationshipMap(relationshipMap,valuestable);
	function executeSuccess(){
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
	var pks = [];
	var errMsg = "contractId=" + valuestable.contractId;
	pks["contractId"] = {key:"contractId",value:valuestable.contractId};
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			errMsg = "[" + errMsg + "]";
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
		}
	}
	Contract.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
};

/************************************************************************************
* Creates number of new instances of Contract in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
*************************************************************************************/
Contract.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Contract.getTableName();
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
			if(Contract.validateType(valuestable,errorcallback)===false){
				return;
			}
			if(Contract.validateNullInsert(valuestable,errorcallback)===false){
				return;
			}
			valuestable = Contract.filterAttributes(valuestable, true);
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
				var errMsg = "contractId=" + valuestable.contractId;
				pks["contractId"] = {key:"contractId",value:valuestable.contractId};
				var wcs = [];
				if(Contract.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
			relationshipMap = Contract.getRelationshipMap(relationshipMap,valuesArray[i]);
			if(!kony.sync.checkIntegrityinTransaction(tx, relationshipMap, errorcallback)){
				isError = true;
				return; 
			}
		}
	}
};
/************************************************************************************
* Updates Contract using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Contract.prototype.updateByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	Contract.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
Contract.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Contract.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];
	var twcs = [ ];
	if(Contract.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}
	twcs = kony.sync.CreateCopy(wcs);
	function Contract_PKPresent_succ(res){
		if(null!==res && res.length!==0){
			if(Contract.validateType(valuestable,errorcallback)===false){
				return;
			}
			if(Contract.validateNull(valuestable,errorcallback)===false){
				return;
			}
			valuestable = Contract.filterAttributes(valuestable, false);
			var relationshipMap={};  
			relationshipMap = Contract.getRelationshipMap(relationshipMap,valuestable);

			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
		}
	}

	function executeSuccess(){
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback, false, markForUpload);
	}
	
	function Contract_CheckUpdate(res){
		if(kony.sync.checkForFalseUpdate(dbname, tbname, twcs, markForUpload, errorcallback,checkForFalseUpdateCallback)===true){
			Contract_PKPresent_succ(res);
		}
		function checkForFalseUpdateCallback(){
			Contract_PKPresent_succ(res);
		}
	}
	function pkNotFoundErrCallback(){
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	Contract.getAllDetailsByPK(pks,Contract_CheckUpdate, pkNotFoundErrCallback);
};

/************************************************************************************
* Updates Contract(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Contract.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Contract.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	if(Contract.validateType(valuestable,errorcallback)===false){
		return;
	}
	if(Contract.validateNull(valuestable,errorcallback)===false){
		return;
	}	
	valuestable = Contract.filterAttributes(valuestable, false);
	var relationshipMap={};
	relationshipMap = Contract.getRelationshipMap(relationshipMap,valuestable);
	kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	function executeSuccess(){
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, Contract.getPKTable());
	}
};

/************************************************************************************
* Deletes Contract using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
Contract.prototype.deleteByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	Contract.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
Contract.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Contract.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var twcs = [];
	var deletedRows;
	if(Contract.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function Contract_PKPresent_succ(res){
		if(null!==res && res.length!==0) {
			var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
			if(connection != null){
				kony.sync.startTransaction(connection, transactioncallback, Contract_relationshipsuccess, Contract_relationshipfailure);
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

	function Contract_relationshipfailure(){
		if(!isError){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function Contract_relationshipsuccess(){
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, deletedRows);
		}
	}
	
	function Contract_CheckUpdate(res){
		if(kony.sync.checkForFalseUpdate(dbname, tbname, twcs, markForUpload, errorcallback, checkForFalseUpdateCallback)===true) {
			Contract_PKPresent_succ(res);
		}
		
		function checkForFalseUpdateCallback(){
			Contract_PKPresent_succ(res);
		}
	}
	function pkNotFoundErrCallback(){
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	Contract.getAllDetailsByPK(pks,Contract_CheckUpdate, pkNotFoundErrCallback);
};

/************************************************************************************
* Deletes Contract(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. Contract.remove("where contractId like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
Contract.remove = function(wcs, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Contract.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function Contract_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function Contract_removeSuccess(){

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
			kony.sync.startTransaction(connection, Contract_removeTransactioncallback, Contract_removeSuccess, errorcallbackWrapper);
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
* Deletes Contract using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
Contract.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	Contract.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
Contract.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Contract.getTableName();
	var wcs = [];
	if(Contract.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	function Contract_PKPresent_succ(res){
		if(null!==res && res.length!==0) {
			kony.sync.single_delete_execute(dbname, tbname, wcs,successcallback, errorcallback, false, true);
		}else{
			kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
		}
	}
	Contract.getAllDetailsByPK(pks, Contract_PKPresent_succ, errorcallback);
};

/************************************************************************************
* Retrieves Contract using primary key from the local Database. 
*************************************************************************************/
Contract.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	Contract.getAllDetailsByPK(pks,successcallback,errorcallback,this.markForUpload);
};
Contract.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Contract.getTableName();
	var wcs = [];
	if(Contract.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		successcallback(Contract.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};

/************************************************************************************
* Retrieves Contract(s) using where clause from the local Database. 
* e.g. Contract.find("where contractId like 'A%'", successcallback,errorcallback);
*************************************************************************************/
Contract.find = function(wcs, successcallback,errorcallback){
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = Contract.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from " + tbname + " " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Contract.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of Contract with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
Contract.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	var pks = this.getPKTable();
	Contract.markForUploadbyPK(pks, successcallback, errorcallback);
};
Contract.markForUploadbyPK = function(pks, successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Contract.getTableName();
	var isError = false;
	var recordsFound = false;
	var wcs = [];
	if(Contract.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of Contract matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
Contract.markForUpload = function(wcs, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Contract.getTableName();
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
* Retrieves instance(s) of Contract pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
Contract.getPendingUpload = function(successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Contract.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var sql = "select * from " + tbname + " WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" = "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Contract.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}

};

/************************************************************************************
* Retrieves instance(s) of Contract pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
Contract.getPendingAcknowledgement = function(successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Contract.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Contract.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of Contract deferred for upload.
*************************************************************************************/
Contract.getDeferredUpload = function(successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Contract.getTableName();
	var mysql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableChangeTypeColumn+" LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Contract.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to Contract in local database to last synced state
*************************************************************************************/
Contract.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Contract.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Contract.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}		
};

/************************************************************************************
* Rollbacks changes to Contract's record with given primary key in local 
* database to last synced state
*************************************************************************************/
Contract.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	Contract.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
Contract.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Contract.getTableName();
	var wcs = [];
	if(Contract.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Contract.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};



/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
Contract.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable){
	var tbname = Contract.getTableName();
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


Contract.convertTableToObject = function(res){
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new Contract();
			obj.contractId = res[i].contractId;
			obj.contractDesc = res[i].contractDesc;
			obj.contractEndDate = res[i].contractEndDate;
			obj.contractStrDate = res[i].contractStrDate;
			obj.createdBy = res[i].createdBy;
			objMap[i] = obj;
		}
	}
	return objMap;
};

Contract.filterAttributes = function(valuestable, insert){
	var attributeTable = {};
	attributeTable.contractId = "contractId";
	attributeTable.contractDesc = "contractDesc";
	attributeTable.contractEndDate = "contractEndDate";
	attributeTable.contractStrDate = "contractStrDate";
	attributeTable.createdBy = "createdBy";

	var PKTable = {};
	PKTable.contractId = "contractId";
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			kony.sync.syncPrint("WARNING: [KONYSYNC] Ignoring the attribute " + k + " for the SyncObject Contract. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(insert===false && !kony.sync.isNull(PKTable[k])) {
			kony.sync.syncPrint("WARNING: [KONYSYNC] Ignoring the primary key " + k + " for the SyncObject Contract. Primary Key should not be the part of the attributes to be updated in the local device database.");
		}
		else{
			newvaluestable[k] = v;
		}
	}
	return newvaluestable;
};

Contract.formOrderByClause = function(orderByMap){
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		var filteredValuestable = Contract.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,filteredValuestable);
	}
	return null;
};

Contract.prototype.getValuesTable = function(isInsert){
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.contractId = this.contractId;
	}
	valuesTable.contractDesc = this.contractDesc;
	valuesTable.contractEndDate = this.contractEndDate;
	valuesTable.contractStrDate = this.contractStrDate;
	valuesTable.createdBy = this.createdBy;
	return valuesTable;
};

Contract.prototype.getPKTable = function(){
	var pkTable = {};
	pkTable.contractId = {key:"contractId",value:this.contractId};
	return pkTable;
};

Contract.getPKTable = function(){
	var pkTable = [];
	pkTable.push("contractId");
	return pkTable;
};

Contract.pkCheck = function(pks,wcs,errorcallback,opName){
	var wc = [];
	if(kony.sync.isNull(pks)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Primary Key contractId not specified in  " + opName + "  an item in Contract");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("contractId",opName,"Contract")));
		return false;	
	}
	else if(kony.sync.isValidJSTable(pks)){
		if(!kony.sync.isNull(pks.contractId)){
			if(!kony.sync.isNull(pks.contractId.value)){
				wc.key = "contractId";
				wc.value = pks.contractId.value;
			}
			else{
				wc.key = "contractId";
				wc.value = pks.contractId;
			}
		}else{
			kony.sync.syncPrint("ERROR: [KONYSYNC] Primary Key contractId not specified in  " + opName + "  an item in Contract");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("contractId",opName,"Contract")));
			return false;
		}
	}
	else{
		wc.key = "contractId";
		wc.value = pks;
	}	
	kony.table.insert(wcs,wc);
	return true;
};
Contract.validateType = function (valuestable, errorcallback){
	if(kony.sync.genMaliciousTypeCheck(valuestable, errorcallback)){
		return false;
	}
	return true;
};
Contract.validateNull = function (valuestable,errorcallback){
	if(valuestable.contractDesc!==undefined){
		if(kony.sync.isNull(valuestable.contractDesc) || kony.sync.isEmptyString(valuestable.contractDesc)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Mandatory attribute contractDesc is missing for the SyncObject Contract.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Contract", "contractDesc")));
		return false;
		}
	}
	return true;
};

Contract.validateNullInsert = function (valuestable,errorcallback){
	if(kony.sync.isNull(valuestable.contractId) || kony.sync.isEmptyString(valuestable.contractId)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Mandatory attribute contractId is missing for the SyncObject Contract.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Contract", "contractId")));
		return false;
	}
	if(kony.sync.isNull(valuestable.contractDesc) || kony.sync.isEmptyString(valuestable.contractDesc)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Mandatory attribute contractDesc is missing for the SyncObject Contract.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Contract", "contractDesc")));
		return false;
	}
	return true;
};
Contract.getRelationshipMap = function(relationshipMap,valuestable){
	return relationshipMap;
};

Contract.getTableName = function(){
	return "Contract";
};

// **********************************End Contract's helper methods************************