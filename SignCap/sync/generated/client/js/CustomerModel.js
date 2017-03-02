// ****************Generated On Tue Sep 10 13:07:05 IST 2013Customer*******************
// **********************************Start Customer's helper methods************************

/************************************************************************************
* Creates new Customer
*************************************************************************************/
Customer = function(){
	this.CustId = null;
	this.CustName = null;
	this.CustCategory = null;
	this.CustType = null;
	this.CustSince = null;
	this.CustLocation = null;
	this.CustPhone = null;
	this.CustEmail = null;
	this.CustFax = null;
	this.Latitude = null;
	this.Longitude = null;
	this.markForUpload = true;
};

Customer.prototype = {
	get CustId(){
		return this._CustId;
	},
	set CustId(val){
		this._CustId = val;
	},
	get CustName(){
		return this._CustName;
	},
	set CustName(val){
		this._CustName = val;
	},
	get CustCategory(){
		return this._CustCategory;
	},
	set CustCategory(val){
		this._CustCategory = val;
	},
	get CustType(){
		return this._CustType;
	},
	set CustType(val){
		this._CustType = val;
	},
	get CustSince(){
		return this._CustSince;
	},
	set CustSince(val){
		this._CustSince = val;
	},
	get CustLocation(){
		return this._CustLocation;
	},
	set CustLocation(val){
		this._CustLocation = val;
	},
	get CustPhone(){
		return this._CustPhone;
	},
	set CustPhone(val){
		this._CustPhone = val;
	},
	get CustEmail(){
		return this._CustEmail;
	},
	set CustEmail(val){
		this._CustEmail = val;
	},
	get CustFax(){
		return this._CustFax;
	},
	set CustFax(val){
		this._CustFax = val;
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
};

/************************************************************************************
* Retrieves all instances of Customer SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderby[0] = {};
* orderby[0].key = "CustId";
* orderby[0].sortType ="desc";
* orderby[1] = {};
* orderby[1].key = "CustName";
* orderby[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* Customer.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
Customer.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	var dbname = kony.sync.getDBName();
	var tbname = Customer.getTableName();
	orderByMap = Customer.formOrderByClause(orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){	
		successcallback(Customer.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of Customer present in local database.
*************************************************************************************/
Customer.getAllCount = function(successcallback,errorcallback){
	Customer.getCount("",successcallback,errorcallback);
};
Customer.getCount = function(wcs,successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Customer.getTableName();
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
* Creates a new instance of Customer in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Customer.prototype.create = function(successcallback,errorcallback){
	var valuestable = this.getValuesTable(true);
	Customer.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
Customer.create = function(valuestable, successcallback,errorcallback,markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Customer.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	if(Customer.validateType(valuestable,errorcallback)===false){
		return;
	}
	if(Customer.validateNullInsert(valuestable,errorcallback)===false){
		return;
	}
	valuestable = Customer.filterAttributes(valuestable, true);
	var relationshipMap={};  
	relationshipMap = Customer.getRelationshipMap(relationshipMap,valuestable);
	function executeSuccess(){
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
	var pks = [];
	var errMsg = "CustId=" + valuestable.CustId;
	pks["CustId"] = {key:"CustId",value:valuestable.CustId};
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			errMsg = "[" + errMsg + "]";
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
		}
	}
	Customer.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
};

/************************************************************************************
* Creates number of new instances of Customer in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
*************************************************************************************/
Customer.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Customer.getTableName();
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
			if(Customer.validateType(valuestable,errorcallback)===false){
				return;
			}
			if(Customer.validateNullInsert(valuestable,errorcallback)===false){
				return;
			}
			valuestable = Customer.filterAttributes(valuestable, true);
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
				var errMsg = "CustId=" + valuestable.CustId;
				pks["CustId"] = {key:"CustId",value:valuestable.CustId};
				var wcs = [];
				if(Customer.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
			relationshipMap = Customer.getRelationshipMap(relationshipMap,valuesArray[i]);
			if(!kony.sync.checkIntegrityinTransaction(tx, relationshipMap, errorcallback)){
				isError = true;
				return; 
			}
		}
	}
};
/************************************************************************************
* Updates Customer using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Customer.prototype.updateByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	Customer.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
Customer.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Customer.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];
	var twcs = [ ];
	if(Customer.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}
	twcs = kony.sync.CreateCopy(wcs);
	function Customer_PKPresent_succ(res){
		if(null!==res && res.length!==0){
			if(Customer.validateType(valuestable,errorcallback)===false){
				return;
			}
			if(Customer.validateNull(valuestable,errorcallback)===false){
				return;
			}
			valuestable = Customer.filterAttributes(valuestable, false);
			var relationshipMap={};  
			relationshipMap = Customer.getRelationshipMap(relationshipMap,valuestable);

			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
		}
	}

	function executeSuccess(){
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback, false, markForUpload);
	}
	
	function Customer_CheckUpdate(res){
		if(kony.sync.checkForFalseUpdate(dbname, tbname, twcs, markForUpload, errorcallback,checkForFalseUpdateCallback)===true){
			Customer_PKPresent_succ(res);
		}
		function checkForFalseUpdateCallback(){
			Customer_PKPresent_succ(res);
		}
	}
	function pkNotFoundErrCallback(){
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	Customer.getAllDetailsByPK(pks,Customer_CheckUpdate, pkNotFoundErrCallback);
};

/************************************************************************************
* Updates Customer(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Customer.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Customer.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	if(Customer.validateType(valuestable,errorcallback)===false){
		return;
	}
	if(Customer.validateNull(valuestable,errorcallback)===false){
		return;
	}	
	valuestable = Customer.filterAttributes(valuestable, false);
	var relationshipMap={};
	relationshipMap = Customer.getRelationshipMap(relationshipMap,valuestable);
	kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	function executeSuccess(){
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, Customer.getPKTable());
	}
};

/************************************************************************************
* Deletes Customer using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
Customer.prototype.deleteByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	Customer.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
Customer.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Customer.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var twcs = [];
	var deletedRows;
	if(Customer.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function Customer_PKPresent_succ(res){
		if(null!==res && res.length!==0) {
			var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
			if(connection != null){
				kony.sync.startTransaction(connection, transactioncallback, Customer_relationshipsuccess, Customer_relationshipfailure);
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

	function Customer_relationshipfailure(){
		if(!isError){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function Customer_relationshipsuccess(){
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, deletedRows);
		}
	}
	
	function Customer_CheckUpdate(res){
		if(kony.sync.checkForFalseUpdate(dbname, tbname, twcs, markForUpload, errorcallback, checkForFalseUpdateCallback)===true) {
			Customer_PKPresent_succ(res);
		}
		
		function checkForFalseUpdateCallback(){
			Customer_PKPresent_succ(res);
		}
	}
	function pkNotFoundErrCallback(){
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	Customer.getAllDetailsByPK(pks,Customer_CheckUpdate, pkNotFoundErrCallback);
};

/************************************************************************************
* Deletes Customer(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. Customer.remove("where CustId like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
Customer.remove = function(wcs, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Customer.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function Customer_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function Customer_removeSuccess(){

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
			kony.sync.startTransaction(connection, Customer_removeTransactioncallback, Customer_removeSuccess, errorcallbackWrapper);
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
* Deletes Customer using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
Customer.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	Customer.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
Customer.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Customer.getTableName();
	var wcs = [];
	if(Customer.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	function Customer_PKPresent_succ(res){
		if(null!==res && res.length!==0) {
			kony.sync.single_delete_execute(dbname, tbname, wcs,successcallback, errorcallback, false, true);
		}else{
			kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
		}
	}
	Customer.getAllDetailsByPK(pks, Customer_PKPresent_succ, errorcallback);
};

/************************************************************************************
* Retrieves Customer using primary key from the local Database. 
*************************************************************************************/
Customer.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	Customer.getAllDetailsByPK(pks,successcallback,errorcallback,this.markForUpload);
};
Customer.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Customer.getTableName();
	var wcs = [];
	if(Customer.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		successcallback(Customer.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};

/************************************************************************************
* Retrieves Customer(s) using where clause from the local Database. 
* e.g. Customer.find("where CustId like 'A%'", successcallback,errorcallback);
*************************************************************************************/
Customer.find = function(wcs, successcallback,errorcallback){
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = Customer.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from " + tbname + " " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Customer.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of Customer with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
Customer.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	var pks = this.getPKTable();
	Customer.markForUploadbyPK(pks, successcallback, errorcallback);
};
Customer.markForUploadbyPK = function(pks, successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Customer.getTableName();
	var isError = false;
	var recordsFound = false;
	var wcs = [];
	if(Customer.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of Customer matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
Customer.markForUpload = function(wcs, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Customer.getTableName();
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
* Retrieves instance(s) of Customer pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
Customer.getPendingUpload = function(successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Customer.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var sql = "select * from " + tbname + " WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" = "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Customer.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}

};

/************************************************************************************
* Retrieves instance(s) of Customer pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
Customer.getPendingAcknowledgement = function(successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Customer.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Customer.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of Customer deferred for upload.
*************************************************************************************/
Customer.getDeferredUpload = function(successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Customer.getTableName();
	var mysql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableChangeTypeColumn+" LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Customer.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to Customer in local database to last synced state
*************************************************************************************/
Customer.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Customer.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Customer.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}		
};

/************************************************************************************
* Rollbacks changes to Customer's record with given primary key in local 
* database to last synced state
*************************************************************************************/
Customer.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	Customer.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
Customer.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Customer.getTableName();
	var wcs = [];
	if(Customer.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Customer.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};



/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
Customer.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable){
	var tbname = Customer.getTableName();
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


Customer.convertTableToObject = function(res){
	objMap = [];
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
	return objMap;
};

Customer.filterAttributes = function(valuestable, insert){
	var attributeTable = {};
	attributeTable.CustId = "CustId";
	attributeTable.CustName = "CustName";
	attributeTable.CustCategory = "CustCategory";
	attributeTable.CustType = "CustType";
	attributeTable.CustSince = "CustSince";
	attributeTable.CustLocation = "CustLocation";
	attributeTable.CustPhone = "CustPhone";
	attributeTable.CustEmail = "CustEmail";
	attributeTable.CustFax = "CustFax";
	attributeTable.Latitude = "Latitude";
	attributeTable.Longitude = "Longitude";

	var PKTable = {};
	PKTable.CustId = "CustId";
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			kony.sync.syncPrint("WARNING: [KONYSYNC] Ignoring the attribute " + k + " for the SyncObject Customer. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(insert===false && !kony.sync.isNull(PKTable[k])) {
			kony.sync.syncPrint("WARNING: [KONYSYNC] Ignoring the primary key " + k + " for the SyncObject Customer. Primary Key should not be the part of the attributes to be updated in the local device database.");
		}
		else{
			newvaluestable[k] = v;
		}
	}
	return newvaluestable;
};

Customer.formOrderByClause = function(orderByMap){
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		var filteredValuestable = Customer.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,filteredValuestable);
	}
	return null;
};

Customer.prototype.getValuesTable = function(isInsert){
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.CustId = this.CustId;
	}
	valuesTable.CustName = this.CustName;
	valuesTable.CustCategory = this.CustCategory;
	valuesTable.CustType = this.CustType;
	valuesTable.CustSince = this.CustSince;
	valuesTable.CustLocation = this.CustLocation;
	valuesTable.CustPhone = this.CustPhone;
	valuesTable.CustEmail = this.CustEmail;
	valuesTable.CustFax = this.CustFax;
	valuesTable.Latitude = this.Latitude;
	valuesTable.Longitude = this.Longitude;
	return valuesTable;
};

Customer.prototype.getPKTable = function(){
	var pkTable = {};
	pkTable.CustId = {key:"CustId",value:this.CustId};
	return pkTable;
};

Customer.getPKTable = function(){
	var pkTable = [];
	pkTable.push("CustId");
	return pkTable;
};

Customer.pkCheck = function(pks,wcs,errorcallback,opName){
	var wc = [];
	if(kony.sync.isNull(pks)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Primary Key CustId not specified in  " + opName + "  an item in Customer");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("CustId",opName,"Customer")));
		return false;	
	}
	else if(kony.sync.isValidJSTable(pks)){
		if(!kony.sync.isNull(pks.CustId)){
			if(!kony.sync.isNull(pks.CustId.value)){
				wc.key = "CustId";
				wc.value = pks.CustId.value;
			}
			else{
				wc.key = "CustId";
				wc.value = pks.CustId;
			}
		}else{
			kony.sync.syncPrint("ERROR: [KONYSYNC] Primary Key CustId not specified in  " + opName + "  an item in Customer");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("CustId",opName,"Customer")));
			return false;
		}
	}
	else{
		wc.key = "CustId";
		wc.value = pks;
	}	
	kony.table.insert(wcs,wc);
	return true;
};
Customer.validateType = function (valuestable, errorcallback){
	if(kony.sync.genMaliciousTypeCheck(valuestable, errorcallback)){
		return false;
	}
	return true;
};
Customer.validateNull = function (valuestable,errorcallback){
	return true;
};

Customer.validateNullInsert = function (valuestable,errorcallback){
	if(kony.sync.isNull(valuestable.CustId) || kony.sync.isEmptyString(valuestable.CustId)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Mandatory attribute CustId is missing for the SyncObject Customer.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Customer", "CustId")));
		return false;
	}
	return true;
};
Customer.getRelationshipMap = function(relationshipMap,valuestable){
	relationshipMap.WorkOrder = {};
	relationshipMap.WorkOrder.sourceAttribute = "customerId";
	relationshipMap.WorkOrder.targetAttributeValue = "'" + valuestable.CustId + "'";
	return relationshipMap;
};

Customer.getTableName = function(){
	return "Customer";
};

// **********************************End Customer's helper methods************************