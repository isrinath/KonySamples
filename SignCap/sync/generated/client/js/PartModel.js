// ****************Generated On Tue Sep 10 13:07:05 IST 2013Part*******************
// **********************************Start Part's helper methods************************

/************************************************************************************
* Creates new Part
*************************************************************************************/
Part = function(){
	this.partId = null;
	this.partName = null;
	this.partModel = null;
	this.partQtyTotal = null;
	this.partQtyDepot = null;
	this.unitPrice = null;
	this.partPhoto = null;
	this.markForUpload = true;
};

Part.prototype = {
	get partId(){
		return this._partId;
	},
	set partId(val){
		this._partId = val;
	},
	get partName(){
		return this._partName;
	},
	set partName(val){
		this._partName = val;
	},
	get partModel(){
		return this._partModel;
	},
	set partModel(val){
		this._partModel = val;
	},
	get partQtyTotal(){
		return this._partQtyTotal;
	},
	set partQtyTotal(val){
		this._partQtyTotal = val;
	},
	get partQtyDepot(){
		return this._partQtyDepot;
	},
	set partQtyDepot(val){
		this._partQtyDepot = val;
	},
	get unitPrice(){
		return this._unitPrice;
	},
	set unitPrice(val){
		this._unitPrice = val;
	},
	get partPhoto(){
		return this._partPhoto;
	},
	set partPhoto(val){
		this._partPhoto = val;
	},
};

/************************************************************************************
* Retrieves all instances of Part SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderby[0] = {};
* orderby[0].key = "partId";
* orderby[0].sortType ="desc";
* orderby[1] = {};
* orderby[1].key = "partName";
* orderby[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* Part.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
Part.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	var dbname = kony.sync.getDBName();
	var tbname = Part.getTableName();
	orderByMap = Part.formOrderByClause(orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){	
		successcallback(Part.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of Part present in local database.
*************************************************************************************/
Part.getAllCount = function(successcallback,errorcallback){
	Part.getCount("",successcallback,errorcallback);
};
Part.getCount = function(wcs,successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Part.getTableName();
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
* Creates a new instance of Part in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Part.prototype.create = function(successcallback,errorcallback){
	var valuestable = this.getValuesTable(true);
	Part.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
Part.create = function(valuestable, successcallback,errorcallback,markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Part.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	if(Part.validateType(valuestable,errorcallback)===false){
		return;
	}
	if(Part.validateNullInsert(valuestable,errorcallback)===false){
		return;
	}
	valuestable = Part.filterAttributes(valuestable, true);
	var relationshipMap={};  
	relationshipMap = Part.getRelationshipMap(relationshipMap,valuestable);
	function executeSuccess(){
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
	var pks = [];
	var errMsg = "partId=" + valuestable.partId;
	pks["partId"] = {key:"partId",value:valuestable.partId};
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			errMsg = "[" + errMsg + "]";
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
		}
	}
	Part.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
};

/************************************************************************************
* Creates number of new instances of Part in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
*************************************************************************************/
Part.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Part.getTableName();
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
			if(Part.validateType(valuestable,errorcallback)===false){
				return;
			}
			if(Part.validateNullInsert(valuestable,errorcallback)===false){
				return;
			}
			valuestable = Part.filterAttributes(valuestable, true);
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
				var errMsg = "partId=" + valuestable.partId;
				pks["partId"] = {key:"partId",value:valuestable.partId};
				var wcs = [];
				if(Part.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
			relationshipMap = Part.getRelationshipMap(relationshipMap,valuesArray[i]);
			if(!kony.sync.checkIntegrityinTransaction(tx, relationshipMap, errorcallback)){
				isError = true;
				return; 
			}
		}
	}
};
/************************************************************************************
* Updates Part using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Part.prototype.updateByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	Part.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
Part.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Part.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];
	var twcs = [ ];
	if(Part.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}
	twcs = kony.sync.CreateCopy(wcs);
	function Part_PKPresent_succ(res){
		if(null!==res && res.length!==0){
			if(Part.validateType(valuestable,errorcallback)===false){
				return;
			}
			if(Part.validateNull(valuestable,errorcallback)===false){
				return;
			}
			valuestable = Part.filterAttributes(valuestable, false);
			var relationshipMap={};  
			relationshipMap = Part.getRelationshipMap(relationshipMap,valuestable);

			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
		}
	}

	function executeSuccess(){
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback, false, markForUpload);
	}
	
	function Part_CheckUpdate(res){
		if(kony.sync.checkForFalseUpdate(dbname, tbname, twcs, markForUpload, errorcallback,checkForFalseUpdateCallback)===true){
			Part_PKPresent_succ(res);
		}
		function checkForFalseUpdateCallback(){
			Part_PKPresent_succ(res);
		}
	}
	function pkNotFoundErrCallback(){
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	Part.getAllDetailsByPK(pks,Part_CheckUpdate, pkNotFoundErrCallback);
};

/************************************************************************************
* Updates Part(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Part.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Part.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	if(Part.validateType(valuestable,errorcallback)===false){
		return;
	}
	if(Part.validateNull(valuestable,errorcallback)===false){
		return;
	}	
	valuestable = Part.filterAttributes(valuestable, false);
	var relationshipMap={};
	relationshipMap = Part.getRelationshipMap(relationshipMap,valuestable);
	kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	function executeSuccess(){
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, Part.getPKTable());
	}
};

/************************************************************************************
* Deletes Part using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
Part.prototype.deleteByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	Part.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
Part.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Part.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var twcs = [];
	var deletedRows;
	if(Part.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function Part_PKPresent_succ(res){
		if(null!==res && res.length!==0) {
			var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
			if(connection != null){
				kony.sync.startTransaction(connection, transactioncallback, Part_relationshipsuccess, Part_relationshipfailure);
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

	function Part_relationshipfailure(){
		if(!isError){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function Part_relationshipsuccess(){
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, deletedRows);
		}
	}
	
	function Part_CheckUpdate(res){
		if(kony.sync.checkForFalseUpdate(dbname, tbname, twcs, markForUpload, errorcallback, checkForFalseUpdateCallback)===true) {
			Part_PKPresent_succ(res);
		}
		
		function checkForFalseUpdateCallback(){
			Part_PKPresent_succ(res);
		}
	}
	function pkNotFoundErrCallback(){
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	Part.getAllDetailsByPK(pks,Part_CheckUpdate, pkNotFoundErrCallback);
};

/************************************************************************************
* Deletes Part(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. Part.remove("where partId like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
Part.remove = function(wcs, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Part.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function Part_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function Part_removeSuccess(){

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
			kony.sync.startTransaction(connection, Part_removeTransactioncallback, Part_removeSuccess, errorcallbackWrapper);
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
* Deletes Part using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
Part.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	Part.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
Part.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Part.getTableName();
	var wcs = [];
	if(Part.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	function Part_PKPresent_succ(res){
		if(null!==res && res.length!==0) {
			kony.sync.single_delete_execute(dbname, tbname, wcs,successcallback, errorcallback, false, true);
		}else{
			kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
		}
	}
	Part.getAllDetailsByPK(pks, Part_PKPresent_succ, errorcallback);
};

/************************************************************************************
* Retrieves Part using primary key from the local Database. 
*************************************************************************************/
Part.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	Part.getAllDetailsByPK(pks,successcallback,errorcallback,this.markForUpload);
};
Part.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Part.getTableName();
	var wcs = [];
	if(Part.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		successcallback(Part.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};

/************************************************************************************
* Retrieves Part(s) using where clause from the local Database. 
* e.g. Part.find("where partId like 'A%'", successcallback,errorcallback);
*************************************************************************************/
Part.find = function(wcs, successcallback,errorcallback){
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = Part.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from " + tbname + " " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Part.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of Part with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
Part.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	var pks = this.getPKTable();
	Part.markForUploadbyPK(pks, successcallback, errorcallback);
};
Part.markForUploadbyPK = function(pks, successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Part.getTableName();
	var isError = false;
	var recordsFound = false;
	var wcs = [];
	if(Part.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of Part matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
Part.markForUpload = function(wcs, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Part.getTableName();
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
* Retrieves instance(s) of Part pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
Part.getPendingUpload = function(successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Part.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var sql = "select * from " + tbname + " WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" = "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Part.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}

};

/************************************************************************************
* Retrieves instance(s) of Part pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
Part.getPendingAcknowledgement = function(successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Part.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Part.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of Part deferred for upload.
*************************************************************************************/
Part.getDeferredUpload = function(successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Part.getTableName();
	var mysql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableChangeTypeColumn+" LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Part.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to Part in local database to last synced state
*************************************************************************************/
Part.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Part.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Part.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}		
};

/************************************************************************************
* Rollbacks changes to Part's record with given primary key in local 
* database to last synced state
*************************************************************************************/
Part.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	Part.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
Part.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Part.getTableName();
	var wcs = [];
	if(Part.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Part.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};



/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
Part.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable){
	var tbname = Part.getTableName();
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


Part.convertTableToObject = function(res){
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new Part();
			obj.partId = res[i].partId;
			obj.partName = res[i].partName;
			obj.partModel = res[i].partModel;
			obj.partQtyTotal = res[i].partQtyTotal;
			obj.partQtyDepot = res[i].partQtyDepot;
			obj.unitPrice = res[i].unitPrice;
			obj.partPhoto = res[i].partPhoto;
			objMap[i] = obj;
		}
	}
	return objMap;
};

Part.filterAttributes = function(valuestable, insert){
	var attributeTable = {};
	attributeTable.partId = "partId";
	attributeTable.partName = "partName";
	attributeTable.partModel = "partModel";
	attributeTable.partQtyTotal = "partQtyTotal";
	attributeTable.partQtyDepot = "partQtyDepot";
	attributeTable.unitPrice = "unitPrice";
	attributeTable.partPhoto = "partPhoto";

	var PKTable = {};
	PKTable.partId = "partId";
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			kony.sync.syncPrint("WARNING: [KONYSYNC] Ignoring the attribute " + k + " for the SyncObject Part. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(insert===false && !kony.sync.isNull(PKTable[k])) {
			kony.sync.syncPrint("WARNING: [KONYSYNC] Ignoring the primary key " + k + " for the SyncObject Part. Primary Key should not be the part of the attributes to be updated in the local device database.");
		}
		else{
			newvaluestable[k] = v;
		}
	}
	return newvaluestable;
};

Part.formOrderByClause = function(orderByMap){
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		var filteredValuestable = Part.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,filteredValuestable);
	}
	return null;
};

Part.prototype.getValuesTable = function(isInsert){
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.partId = this.partId;
	}
	valuesTable.partName = this.partName;
	valuesTable.partModel = this.partModel;
	valuesTable.partQtyTotal = this.partQtyTotal;
	valuesTable.partQtyDepot = this.partQtyDepot;
	valuesTable.unitPrice = this.unitPrice;
	valuesTable.partPhoto = this.partPhoto;
	return valuesTable;
};

Part.prototype.getPKTable = function(){
	var pkTable = {};
	pkTable.partId = {key:"partId",value:this.partId};
	return pkTable;
};

Part.getPKTable = function(){
	var pkTable = [];
	pkTable.push("partId");
	return pkTable;
};

Part.pkCheck = function(pks,wcs,errorcallback,opName){
	var wc = [];
	if(kony.sync.isNull(pks)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Primary Key partId not specified in  " + opName + "  an item in Part");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("partId",opName,"Part")));
		return false;	
	}
	else if(kony.sync.isValidJSTable(pks)){
		if(!kony.sync.isNull(pks.partId)){
			if(!kony.sync.isNull(pks.partId.value)){
				wc.key = "partId";
				wc.value = pks.partId.value;
			}
			else{
				wc.key = "partId";
				wc.value = pks.partId;
			}
		}else{
			kony.sync.syncPrint("ERROR: [KONYSYNC] Primary Key partId not specified in  " + opName + "  an item in Part");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("partId",opName,"Part")));
			return false;
		}
	}
	else{
		wc.key = "partId";
		wc.value = pks;
	}	
	kony.table.insert(wcs,wc);
	return true;
};
Part.validateType = function (valuestable, errorcallback){
	if(kony.sync.genMaliciousTypeCheck(valuestable, errorcallback)){
		return false;
	}
	return true;
};
Part.validateNull = function (valuestable,errorcallback){
	return true;
};

Part.validateNullInsert = function (valuestable,errorcallback){
	if(kony.sync.isNull(valuestable.partId) || kony.sync.isEmptyString(valuestable.partId)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Mandatory attribute partId is missing for the SyncObject Part.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Part", "partId")));
		return false;
	}
	return true;
};
Part.getRelationshipMap = function(relationshipMap,valuestable){
	return relationshipMap;
};

Part.getTableName = function(){
	return "Part";
};

// **********************************End Part's helper methods************************