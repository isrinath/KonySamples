// ****************Generated On Tue Sep 10 13:07:05 IST 2013Equipment*******************
// **********************************Start Equipment's helper methods************************

/************************************************************************************
* Creates new Equipment
*************************************************************************************/
Equipment = function(){
	this.equipmentID = null;
	this.equipmentName = null;
	this.parentID = null;
	this.assetType = null;
	this.condition = null;
	this.installDate = null;
	this.manufacturer = null;
	this.model = null;
	this.productCost = null;
	this.serialId = null;
	this.tagId = null;
	this.warrantyEndDate = null;
	this.markForUpload = true;
};

Equipment.prototype = {
	get equipmentID(){
		return this._equipmentID;
	},
	set equipmentID(val){
		this._equipmentID = val;
	},
	get equipmentName(){
		return this._equipmentName;
	},
	set equipmentName(val){
		this._equipmentName = val;
	},
	get parentID(){
		return this._parentID;
	},
	set parentID(val){
		this._parentID = val;
	},
	get assetType(){
		return this._assetType;
	},
	set assetType(val){
		this._assetType = val;
	},
	get condition(){
		return this._condition;
	},
	set condition(val){
		this._condition = val;
	},
	get installDate(){
		return this._installDate;
	},
	set installDate(val){
		this._installDate = val;
	},
	get manufacturer(){
		return this._manufacturer;
	},
	set manufacturer(val){
		this._manufacturer = val;
	},
	get model(){
		return this._model;
	},
	set model(val){
		this._model = val;
	},
	get productCost(){
		return this._productCost;
	},
	set productCost(val){
		this._productCost = val;
	},
	get serialId(){
		return this._serialId;
	},
	set serialId(val){
		this._serialId = val;
	},
	get tagId(){
		return this._tagId;
	},
	set tagId(val){
		this._tagId = val;
	},
	get warrantyEndDate(){
		return this._warrantyEndDate;
	},
	set warrantyEndDate(val){
		this._warrantyEndDate = val;
	},
};

/************************************************************************************
* Retrieves all instances of Equipment SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderby[0] = {};
* orderby[0].key = "equipmentID";
* orderby[0].sortType ="desc";
* orderby[1] = {};
* orderby[1].key = "equipmentName";
* orderby[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* Equipment.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
Equipment.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	var dbname = kony.sync.getDBName();
	var tbname = Equipment.getTableName();
	orderByMap = Equipment.formOrderByClause(orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){	
		successcallback(Equipment.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of Equipment present in local database.
*************************************************************************************/
Equipment.getAllCount = function(successcallback,errorcallback){
	Equipment.getCount("",successcallback,errorcallback);
};
Equipment.getCount = function(wcs,successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Equipment.getTableName();
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
* Creates a new instance of Equipment in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Equipment.prototype.create = function(successcallback,errorcallback){
	var valuestable = this.getValuesTable(true);
	Equipment.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
Equipment.create = function(valuestable, successcallback,errorcallback,markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Equipment.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	if(Equipment.validateType(valuestable,errorcallback)===false){
		return;
	}
	if(Equipment.validateNullInsert(valuestable,errorcallback)===false){
		return;
	}
	valuestable = Equipment.filterAttributes(valuestable, true);
	var relationshipMap={};  
	relationshipMap = Equipment.getRelationshipMap(relationshipMap,valuestable);
	function executeSuccess(){
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
	var pks = [];
	var errMsg = "equipmentID=" + valuestable.equipmentID;
	pks["equipmentID"] = {key:"equipmentID",value:valuestable.equipmentID};
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			errMsg = "[" + errMsg + "]";
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
		}
	}
	Equipment.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
};

/************************************************************************************
* Creates number of new instances of Equipment in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
*************************************************************************************/
Equipment.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Equipment.getTableName();
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
			if(Equipment.validateType(valuestable,errorcallback)===false){
				return;
			}
			if(Equipment.validateNullInsert(valuestable,errorcallback)===false){
				return;
			}
			valuestable = Equipment.filterAttributes(valuestable, true);
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
				var errMsg = "equipmentID=" + valuestable.equipmentID;
				pks["equipmentID"] = {key:"equipmentID",value:valuestable.equipmentID};
				var wcs = [];
				if(Equipment.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
			relationshipMap = Equipment.getRelationshipMap(relationshipMap,valuesArray[i]);
			if(!kony.sync.checkIntegrityinTransaction(tx, relationshipMap, errorcallback)){
				isError = true;
				return; 
			}
		}
	}
};
/************************************************************************************
* Updates Equipment using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Equipment.prototype.updateByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	Equipment.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
Equipment.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Equipment.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];
	var twcs = [ ];
	if(Equipment.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}
	twcs = kony.sync.CreateCopy(wcs);
	function Equipment_PKPresent_succ(res){
		if(null!==res && res.length!==0){
			if(Equipment.validateType(valuestable,errorcallback)===false){
				return;
			}
			if(Equipment.validateNull(valuestable,errorcallback)===false){
				return;
			}
			valuestable = Equipment.filterAttributes(valuestable, false);
			var relationshipMap={};  
			relationshipMap = Equipment.getRelationshipMap(relationshipMap,valuestable);

			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
		}
	}

	function executeSuccess(){
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback, false, markForUpload);
	}
	
	function Equipment_CheckUpdate(res){
		if(kony.sync.checkForFalseUpdate(dbname, tbname, twcs, markForUpload, errorcallback,checkForFalseUpdateCallback)===true){
			Equipment_PKPresent_succ(res);
		}
		function checkForFalseUpdateCallback(){
			Equipment_PKPresent_succ(res);
		}
	}
	function pkNotFoundErrCallback(){
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	Equipment.getAllDetailsByPK(pks,Equipment_CheckUpdate, pkNotFoundErrCallback);
};

/************************************************************************************
* Updates Equipment(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Equipment.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Equipment.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	if(Equipment.validateType(valuestable,errorcallback)===false){
		return;
	}
	if(Equipment.validateNull(valuestable,errorcallback)===false){
		return;
	}	
	valuestable = Equipment.filterAttributes(valuestable, false);
	var relationshipMap={};
	relationshipMap = Equipment.getRelationshipMap(relationshipMap,valuestable);
	kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	function executeSuccess(){
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, Equipment.getPKTable());
	}
};

/************************************************************************************
* Deletes Equipment using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
Equipment.prototype.deleteByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	Equipment.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
Equipment.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Equipment.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var twcs = [];
	var deletedRows;
	if(Equipment.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function Equipment_PKPresent_succ(res){
		if(null!==res && res.length!==0) {
			var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
			if(connection != null){
				kony.sync.startTransaction(connection, transactioncallback, Equipment_relationshipsuccess, Equipment_relationshipfailure);
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

	function Equipment_relationshipfailure(){
		if(!isError){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function Equipment_relationshipsuccess(){
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, deletedRows);
		}
	}
	
	function Equipment_CheckUpdate(res){
		if(kony.sync.checkForFalseUpdate(dbname, tbname, twcs, markForUpload, errorcallback, checkForFalseUpdateCallback)===true) {
			Equipment_PKPresent_succ(res);
		}
		
		function checkForFalseUpdateCallback(){
			Equipment_PKPresent_succ(res);
		}
	}
	function pkNotFoundErrCallback(){
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	Equipment.getAllDetailsByPK(pks,Equipment_CheckUpdate, pkNotFoundErrCallback);
};

/************************************************************************************
* Deletes Equipment(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. Equipment.remove("where equipmentID like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
Equipment.remove = function(wcs, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Equipment.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function Equipment_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function Equipment_removeSuccess(){

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
			kony.sync.startTransaction(connection, Equipment_removeTransactioncallback, Equipment_removeSuccess, errorcallbackWrapper);
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
* Deletes Equipment using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
Equipment.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	Equipment.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
Equipment.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Equipment.getTableName();
	var wcs = [];
	if(Equipment.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	function Equipment_PKPresent_succ(res){
		if(null!==res && res.length!==0) {
			kony.sync.single_delete_execute(dbname, tbname, wcs,successcallback, errorcallback, false, true);
		}else{
			kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
		}
	}
	Equipment.getAllDetailsByPK(pks, Equipment_PKPresent_succ, errorcallback);
};

/************************************************************************************
* Retrieves Equipment using primary key from the local Database. 
*************************************************************************************/
Equipment.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	Equipment.getAllDetailsByPK(pks,successcallback,errorcallback,this.markForUpload);
};
Equipment.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Equipment.getTableName();
	var wcs = [];
	if(Equipment.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		successcallback(Equipment.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};

/************************************************************************************
* Retrieves Equipment(s) using where clause from the local Database. 
* e.g. Equipment.find("where equipmentID like 'A%'", successcallback,errorcallback);
*************************************************************************************/
Equipment.find = function(wcs, successcallback,errorcallback){
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = Equipment.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from " + tbname + " " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Equipment.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of Equipment with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
Equipment.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	var pks = this.getPKTable();
	Equipment.markForUploadbyPK(pks, successcallback, errorcallback);
};
Equipment.markForUploadbyPK = function(pks, successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Equipment.getTableName();
	var isError = false;
	var recordsFound = false;
	var wcs = [];
	if(Equipment.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of Equipment matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
Equipment.markForUpload = function(wcs, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Equipment.getTableName();
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
* Retrieves instance(s) of Equipment pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
Equipment.getPendingUpload = function(successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Equipment.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var sql = "select * from " + tbname + " WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" = "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Equipment.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}

};

/************************************************************************************
* Retrieves instance(s) of Equipment pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
Equipment.getPendingAcknowledgement = function(successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Equipment.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Equipment.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of Equipment deferred for upload.
*************************************************************************************/
Equipment.getDeferredUpload = function(successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Equipment.getTableName();
	var mysql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableChangeTypeColumn+" LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Equipment.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to Equipment in local database to last synced state
*************************************************************************************/
Equipment.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Equipment.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Equipment.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}		
};

/************************************************************************************
* Rollbacks changes to Equipment's record with given primary key in local 
* database to last synced state
*************************************************************************************/
Equipment.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	Equipment.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
Equipment.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Equipment.getTableName();
	var wcs = [];
	if(Equipment.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Equipment.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};



/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
Equipment.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable){
	var tbname = Equipment.getTableName();
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


Equipment.convertTableToObject = function(res){
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new Equipment();
			obj.equipmentID = res[i].equipmentID;
			obj.equipmentName = res[i].equipmentName;
			obj.parentID = res[i].parentID;
			obj.assetType = res[i].assetType;
			obj.condition = res[i].condition;
			obj.installDate = res[i].installDate;
			obj.manufacturer = res[i].manufacturer;
			obj.model = res[i].model;
			obj.productCost = res[i].productCost;
			obj.serialId = res[i].serialId;
			obj.tagId = res[i].tagId;
			obj.warrantyEndDate = res[i].warrantyEndDate;
			objMap[i] = obj;
		}
	}
	return objMap;
};

Equipment.filterAttributes = function(valuestable, insert){
	var attributeTable = {};
	attributeTable.equipmentID = "equipmentID";
	attributeTable.equipmentName = "equipmentName";
	attributeTable.parentID = "parentID";
	attributeTable.assetType = "assetType";
	attributeTable.condition = "condition";
	attributeTable.installDate = "installDate";
	attributeTable.manufacturer = "manufacturer";
	attributeTable.model = "model";
	attributeTable.productCost = "productCost";
	attributeTable.serialId = "serialId";
	attributeTable.tagId = "tagId";
	attributeTable.warrantyEndDate = "warrantyEndDate";

	var PKTable = {};
	PKTable.equipmentID = "equipmentID";
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			kony.sync.syncPrint("WARNING: [KONYSYNC] Ignoring the attribute " + k + " for the SyncObject Equipment. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(insert===false && !kony.sync.isNull(PKTable[k])) {
			kony.sync.syncPrint("WARNING: [KONYSYNC] Ignoring the primary key " + k + " for the SyncObject Equipment. Primary Key should not be the part of the attributes to be updated in the local device database.");
		}
		else{
			newvaluestable[k] = v;
		}
	}
	return newvaluestable;
};

Equipment.formOrderByClause = function(orderByMap){
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		var filteredValuestable = Equipment.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,filteredValuestable);
	}
	return null;
};

Equipment.prototype.getValuesTable = function(isInsert){
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.equipmentID = this.equipmentID;
	}
	valuesTable.equipmentName = this.equipmentName;
	valuesTable.parentID = this.parentID;
	valuesTable.assetType = this.assetType;
	valuesTable.condition = this.condition;
	valuesTable.installDate = this.installDate;
	valuesTable.manufacturer = this.manufacturer;
	valuesTable.model = this.model;
	valuesTable.productCost = this.productCost;
	valuesTable.serialId = this.serialId;
	valuesTable.tagId = this.tagId;
	valuesTable.warrantyEndDate = this.warrantyEndDate;
	return valuesTable;
};

Equipment.prototype.getPKTable = function(){
	var pkTable = {};
	pkTable.equipmentID = {key:"equipmentID",value:this.equipmentID};
	return pkTable;
};

Equipment.getPKTable = function(){
	var pkTable = [];
	pkTable.push("equipmentID");
	return pkTable;
};

Equipment.pkCheck = function(pks,wcs,errorcallback,opName){
	var wc = [];
	if(kony.sync.isNull(pks)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Primary Key equipmentID not specified in  " + opName + "  an item in Equipment");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("equipmentID",opName,"Equipment")));
		return false;	
	}
	else if(kony.sync.isValidJSTable(pks)){
		if(!kony.sync.isNull(pks.equipmentID)){
			if(!kony.sync.isNull(pks.equipmentID.value)){
				wc.key = "equipmentID";
				wc.value = pks.equipmentID.value;
			}
			else{
				wc.key = "equipmentID";
				wc.value = pks.equipmentID;
			}
		}else{
			kony.sync.syncPrint("ERROR: [KONYSYNC] Primary Key equipmentID not specified in  " + opName + "  an item in Equipment");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("equipmentID",opName,"Equipment")));
			return false;
		}
	}
	else{
		wc.key = "equipmentID";
		wc.value = pks;
	}	
	kony.table.insert(wcs,wc);
	return true;
};
Equipment.validateType = function (valuestable, errorcallback){
	if(kony.sync.genMaliciousTypeCheck(valuestable, errorcallback)){
		return false;
	}
	return true;
};
Equipment.validateNull = function (valuestable,errorcallback){
	return true;
};

Equipment.validateNullInsert = function (valuestable,errorcallback){
	if(kony.sync.isNull(valuestable.equipmentID) || kony.sync.isEmptyString(valuestable.equipmentID)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Mandatory attribute equipmentID is missing for the SyncObject Equipment.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Equipment", "equipmentID")));
		return false;
	}
	return true;
};
Equipment.getRelationshipMap = function(relationshipMap,valuestable){
	return relationshipMap;
};

Equipment.getTableName = function(){
	return "Equipment";
};

// **********************************End Equipment's helper methods************************