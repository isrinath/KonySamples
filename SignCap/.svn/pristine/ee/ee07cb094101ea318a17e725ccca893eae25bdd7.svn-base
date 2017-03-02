// ****************Generated On Tue Sep 10 13:07:05 IST 2013CustomerInvoices*******************
// **********************************Start CustomerInvoices's helper methods************************

/************************************************************************************
* Creates new CustomerInvoices
*************************************************************************************/
CustomerInvoices = function(){
	this.InvoiceId = null;
	this.AmountPaid = null;
	this.BalanceDue = null;
	this.BillDate = null;
	this.BillingMethod = null;
	this.CustId = null;
	this.EquipCost = null;
	this.LabourCost = null;
	this.ModeofPay = null;
	this.RepairCost = null;
	this.Status = null;
	this.TimeSpent = null;
	this.WorkOrderId = null;
	this.InvoiceImg = null;
	this.markForUpload = true;
};

CustomerInvoices.prototype = {
	get InvoiceId(){
		return this._InvoiceId;
	},
	set InvoiceId(val){
		this._InvoiceId = val;
	},
	get AmountPaid(){
		return this._AmountPaid;
	},
	set AmountPaid(val){
		this._AmountPaid = val;
	},
	get BalanceDue(){
		return this._BalanceDue;
	},
	set BalanceDue(val){
		this._BalanceDue = val;
	},
	get BillDate(){
		return this._BillDate;
	},
	set BillDate(val){
		this._BillDate = val;
	},
	get BillingMethod(){
		return this._BillingMethod;
	},
	set BillingMethod(val){
		this._BillingMethod = val;
	},
	get CustId(){
		return this._CustId;
	},
	set CustId(val){
		this._CustId = val;
	},
	get EquipCost(){
		return this._EquipCost;
	},
	set EquipCost(val){
		this._EquipCost = val;
	},
	get LabourCost(){
		return this._LabourCost;
	},
	set LabourCost(val){
		this._LabourCost = val;
	},
	get ModeofPay(){
		return this._ModeofPay;
	},
	set ModeofPay(val){
		this._ModeofPay = val;
	},
	get RepairCost(){
		return this._RepairCost;
	},
	set RepairCost(val){
		this._RepairCost = val;
	},
	get Status(){
		return this._Status;
	},
	set Status(val){
		this._Status = val;
	},
	get TimeSpent(){
		return this._TimeSpent;
	},
	set TimeSpent(val){
		this._TimeSpent = val;
	},
	get WorkOrderId(){
		return this._WorkOrderId;
	},
	set WorkOrderId(val){
		this._WorkOrderId = val;
	},
	get InvoiceImg(){
		return this._InvoiceImg;
	},
	set InvoiceImg(val){
		this._InvoiceImg = val;
	},
};

/************************************************************************************
* Retrieves all instances of CustomerInvoices SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderby[0] = {};
* orderby[0].key = "InvoiceId";
* orderby[0].sortType ="desc";
* orderby[1] = {};
* orderby[1].key = "AmountPaid";
* orderby[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* CustomerInvoices.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
CustomerInvoices.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	var dbname = kony.sync.getDBName();
	var tbname = CustomerInvoices.getTableName();
	orderByMap = CustomerInvoices.formOrderByClause(orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){	
		successcallback(CustomerInvoices.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of CustomerInvoices present in local database.
*************************************************************************************/
CustomerInvoices.getAllCount = function(successcallback,errorcallback){
	CustomerInvoices.getCount("",successcallback,errorcallback);
};
CustomerInvoices.getCount = function(wcs,successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = CustomerInvoices.getTableName();
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
* Creates a new instance of CustomerInvoices in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
CustomerInvoices.prototype.create = function(successcallback,errorcallback){
	var valuestable = this.getValuesTable(true);
	CustomerInvoices.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
CustomerInvoices.create = function(valuestable, successcallback,errorcallback,markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = CustomerInvoices.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	if(CustomerInvoices.validateType(valuestable,errorcallback)===false){
		return;
	}
	if(CustomerInvoices.validateNullInsert(valuestable,errorcallback)===false){
		return;
	}
	valuestable = CustomerInvoices.filterAttributes(valuestable, true);
	var relationshipMap={};  
	relationshipMap = CustomerInvoices.getRelationshipMap(relationshipMap,valuestable);
	function executeSuccess(){
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
	var pks = [];
	var errMsg = "InvoiceId=" + valuestable.InvoiceId;
	pks["InvoiceId"] = {key:"InvoiceId",value:valuestable.InvoiceId};
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			errMsg = "[" + errMsg + "]";
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
		}
	}
	CustomerInvoices.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
};

/************************************************************************************
* Creates number of new instances of CustomerInvoices in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
*************************************************************************************/
CustomerInvoices.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = CustomerInvoices.getTableName();
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
			if(CustomerInvoices.validateType(valuestable,errorcallback)===false){
				return;
			}
			if(CustomerInvoices.validateNullInsert(valuestable,errorcallback)===false){
				return;
			}
			valuestable = CustomerInvoices.filterAttributes(valuestable, true);
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
				var errMsg = "InvoiceId=" + valuestable.InvoiceId;
				pks["InvoiceId"] = {key:"InvoiceId",value:valuestable.InvoiceId};
				var wcs = [];
				if(CustomerInvoices.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
			relationshipMap = CustomerInvoices.getRelationshipMap(relationshipMap,valuesArray[i]);
			if(!kony.sync.checkIntegrityinTransaction(tx, relationshipMap, errorcallback)){
				isError = true;
				return; 
			}
		}
	}
};
/************************************************************************************
* Updates CustomerInvoices using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
CustomerInvoices.prototype.updateByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	CustomerInvoices.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
CustomerInvoices.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = CustomerInvoices.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];
	var twcs = [ ];
	if(CustomerInvoices.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}
	twcs = kony.sync.CreateCopy(wcs);
	function CustomerInvoices_PKPresent_succ(res){
		if(null!==res && res.length!==0){
			if(CustomerInvoices.validateType(valuestable,errorcallback)===false){
				return;
			}
			if(CustomerInvoices.validateNull(valuestable,errorcallback)===false){
				return;
			}
			valuestable = CustomerInvoices.filterAttributes(valuestable, false);
			var relationshipMap={};  
			relationshipMap = CustomerInvoices.getRelationshipMap(relationshipMap,valuestable);

			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
		}
	}

	function executeSuccess(){
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback, false, markForUpload);
	}
	
	function CustomerInvoices_CheckUpdate(res){
		if(kony.sync.checkForFalseUpdate(dbname, tbname, twcs, markForUpload, errorcallback,checkForFalseUpdateCallback)===true){
			CustomerInvoices_PKPresent_succ(res);
		}
		function checkForFalseUpdateCallback(){
			CustomerInvoices_PKPresent_succ(res);
		}
	}
	function pkNotFoundErrCallback(){
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	CustomerInvoices.getAllDetailsByPK(pks,CustomerInvoices_CheckUpdate, pkNotFoundErrCallback);
};

/************************************************************************************
* Updates CustomerInvoices(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
CustomerInvoices.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = CustomerInvoices.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	if(CustomerInvoices.validateType(valuestable,errorcallback)===false){
		return;
	}
	if(CustomerInvoices.validateNull(valuestable,errorcallback)===false){
		return;
	}	
	valuestable = CustomerInvoices.filterAttributes(valuestable, false);
	var relationshipMap={};
	relationshipMap = CustomerInvoices.getRelationshipMap(relationshipMap,valuestable);
	kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	function executeSuccess(){
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, CustomerInvoices.getPKTable());
	}
};

/************************************************************************************
* Deletes CustomerInvoices using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
CustomerInvoices.prototype.deleteByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	CustomerInvoices.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
CustomerInvoices.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = CustomerInvoices.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var twcs = [];
	var deletedRows;
	if(CustomerInvoices.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function CustomerInvoices_PKPresent_succ(res){
		if(null!==res && res.length!==0) {
			var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
			if(connection != null){
				kony.sync.startTransaction(connection, transactioncallback, CustomerInvoices_relationshipsuccess, CustomerInvoices_relationshipfailure);
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

	function CustomerInvoices_relationshipfailure(){
		if(!isError){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function CustomerInvoices_relationshipsuccess(){
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, deletedRows);
		}
	}
	
	function CustomerInvoices_CheckUpdate(res){
		if(kony.sync.checkForFalseUpdate(dbname, tbname, twcs, markForUpload, errorcallback, checkForFalseUpdateCallback)===true) {
			CustomerInvoices_PKPresent_succ(res);
		}
		
		function checkForFalseUpdateCallback(){
			CustomerInvoices_PKPresent_succ(res);
		}
	}
	function pkNotFoundErrCallback(){
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	CustomerInvoices.getAllDetailsByPK(pks,CustomerInvoices_CheckUpdate, pkNotFoundErrCallback);
};

/************************************************************************************
* Deletes CustomerInvoices(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. CustomerInvoices.remove("where InvoiceId like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
CustomerInvoices.remove = function(wcs, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = CustomerInvoices.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function CustomerInvoices_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function CustomerInvoices_removeSuccess(){

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
			kony.sync.startTransaction(connection, CustomerInvoices_removeTransactioncallback, CustomerInvoices_removeSuccess, errorcallbackWrapper);
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
* Deletes CustomerInvoices using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
CustomerInvoices.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	CustomerInvoices.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
CustomerInvoices.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = CustomerInvoices.getTableName();
	var wcs = [];
	if(CustomerInvoices.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	function CustomerInvoices_PKPresent_succ(res){
		if(null!==res && res.length!==0) {
			kony.sync.single_delete_execute(dbname, tbname, wcs,successcallback, errorcallback, false, true);
		}else{
			kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
		}
	}
	CustomerInvoices.getAllDetailsByPK(pks, CustomerInvoices_PKPresent_succ, errorcallback);
};

/************************************************************************************
* Retrieves CustomerInvoices using primary key from the local Database. 
*************************************************************************************/
CustomerInvoices.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	CustomerInvoices.getAllDetailsByPK(pks,successcallback,errorcallback,this.markForUpload);
};
CustomerInvoices.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = CustomerInvoices.getTableName();
	var wcs = [];
	if(CustomerInvoices.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		successcallback(CustomerInvoices.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};

/************************************************************************************
* Retrieves CustomerInvoices(s) using where clause from the local Database. 
* e.g. CustomerInvoices.find("where InvoiceId like 'A%'", successcallback,errorcallback);
*************************************************************************************/
CustomerInvoices.find = function(wcs, successcallback,errorcallback){
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = CustomerInvoices.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from " + tbname + " " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, CustomerInvoices.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of CustomerInvoices with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
CustomerInvoices.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	var pks = this.getPKTable();
	CustomerInvoices.markForUploadbyPK(pks, successcallback, errorcallback);
};
CustomerInvoices.markForUploadbyPK = function(pks, successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = CustomerInvoices.getTableName();
	var isError = false;
	var recordsFound = false;
	var wcs = [];
	if(CustomerInvoices.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of CustomerInvoices matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
CustomerInvoices.markForUpload = function(wcs, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = CustomerInvoices.getTableName();
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
* Retrieves instance(s) of CustomerInvoices pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
CustomerInvoices.getPendingUpload = function(successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = CustomerInvoices.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var sql = "select * from " + tbname + " WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" = "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, CustomerInvoices.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}

};

/************************************************************************************
* Retrieves instance(s) of CustomerInvoices pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
CustomerInvoices.getPendingAcknowledgement = function(successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = CustomerInvoices.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, CustomerInvoices.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of CustomerInvoices deferred for upload.
*************************************************************************************/
CustomerInvoices.getDeferredUpload = function(successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = CustomerInvoices.getTableName();
	var mysql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableChangeTypeColumn+" LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, CustomerInvoices.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to CustomerInvoices in local database to last synced state
*************************************************************************************/
CustomerInvoices.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = CustomerInvoices.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, CustomerInvoices.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}		
};

/************************************************************************************
* Rollbacks changes to CustomerInvoices's record with given primary key in local 
* database to last synced state
*************************************************************************************/
CustomerInvoices.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	CustomerInvoices.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
CustomerInvoices.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = CustomerInvoices.getTableName();
	var wcs = [];
	if(CustomerInvoices.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, CustomerInvoices.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};



/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
CustomerInvoices.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable){
	var tbname = CustomerInvoices.getTableName();
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


CustomerInvoices.convertTableToObject = function(res){
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new CustomerInvoices();
			obj.InvoiceId = res[i].InvoiceId;
			obj.AmountPaid = res[i].AmountPaid;
			obj.BalanceDue = res[i].BalanceDue;
			obj.BillDate = res[i].BillDate;
			obj.BillingMethod = res[i].BillingMethod;
			obj.CustId = res[i].CustId;
			obj.EquipCost = res[i].EquipCost;
			obj.LabourCost = res[i].LabourCost;
			obj.ModeofPay = res[i].ModeofPay;
			obj.RepairCost = res[i].RepairCost;
			obj.Status = res[i].Status;
			obj.TimeSpent = res[i].TimeSpent;
			obj.WorkOrderId = res[i].WorkOrderId;
			obj.InvoiceImg = res[i].InvoiceImg;
			objMap[i] = obj;
		}
	}
	return objMap;
};

CustomerInvoices.filterAttributes = function(valuestable, insert){
	var attributeTable = {};
	attributeTable.InvoiceId = "InvoiceId";
	attributeTable.AmountPaid = "AmountPaid";
	attributeTable.BalanceDue = "BalanceDue";
	attributeTable.BillDate = "BillDate";
	attributeTable.BillingMethod = "BillingMethod";
	attributeTable.CustId = "CustId";
	attributeTable.EquipCost = "EquipCost";
	attributeTable.LabourCost = "LabourCost";
	attributeTable.ModeofPay = "ModeofPay";
	attributeTable.RepairCost = "RepairCost";
	attributeTable.Status = "Status";
	attributeTable.TimeSpent = "TimeSpent";
	attributeTable.WorkOrderId = "WorkOrderId";
	attributeTable.InvoiceImg = "InvoiceImg";

	var PKTable = {};
	PKTable.InvoiceId = "InvoiceId";
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			kony.sync.syncPrint("WARNING: [KONYSYNC] Ignoring the attribute " + k + " for the SyncObject CustomerInvoices. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(insert===false && !kony.sync.isNull(PKTable[k])) {
			kony.sync.syncPrint("WARNING: [KONYSYNC] Ignoring the primary key " + k + " for the SyncObject CustomerInvoices. Primary Key should not be the part of the attributes to be updated in the local device database.");
		}
		else{
			newvaluestable[k] = v;
		}
	}
	return newvaluestable;
};

CustomerInvoices.formOrderByClause = function(orderByMap){
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		var filteredValuestable = CustomerInvoices.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,filteredValuestable);
	}
	return null;
};

CustomerInvoices.prototype.getValuesTable = function(isInsert){
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.InvoiceId = this.InvoiceId;
	}
	valuesTable.AmountPaid = this.AmountPaid;
	valuesTable.BalanceDue = this.BalanceDue;
	valuesTable.BillDate = this.BillDate;
	valuesTable.BillingMethod = this.BillingMethod;
	valuesTable.CustId = this.CustId;
	valuesTable.EquipCost = this.EquipCost;
	valuesTable.LabourCost = this.LabourCost;
	valuesTable.ModeofPay = this.ModeofPay;
	valuesTable.RepairCost = this.RepairCost;
	valuesTable.Status = this.Status;
	valuesTable.TimeSpent = this.TimeSpent;
	valuesTable.WorkOrderId = this.WorkOrderId;
	valuesTable.InvoiceImg = this.InvoiceImg;
	return valuesTable;
};

CustomerInvoices.prototype.getPKTable = function(){
	var pkTable = {};
	pkTable.InvoiceId = {key:"InvoiceId",value:this.InvoiceId};
	return pkTable;
};

CustomerInvoices.getPKTable = function(){
	var pkTable = [];
	pkTable.push("InvoiceId");
	return pkTable;
};

CustomerInvoices.pkCheck = function(pks,wcs,errorcallback,opName){
	var wc = [];
	if(kony.sync.isNull(pks)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Primary Key InvoiceId not specified in  " + opName + "  an item in CustomerInvoices");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("InvoiceId",opName,"CustomerInvoices")));
		return false;	
	}
	else if(kony.sync.isValidJSTable(pks)){
		if(!kony.sync.isNull(pks.InvoiceId)){
			if(!kony.sync.isNull(pks.InvoiceId.value)){
				wc.key = "InvoiceId";
				wc.value = pks.InvoiceId.value;
			}
			else{
				wc.key = "InvoiceId";
				wc.value = pks.InvoiceId;
			}
		}else{
			kony.sync.syncPrint("ERROR: [KONYSYNC] Primary Key InvoiceId not specified in  " + opName + "  an item in CustomerInvoices");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("InvoiceId",opName,"CustomerInvoices")));
			return false;
		}
	}
	else{
		wc.key = "InvoiceId";
		wc.value = pks;
	}	
	kony.table.insert(wcs,wc);
	return true;
};
CustomerInvoices.validateType = function (valuestable, errorcallback){
	if(kony.sync.genMaliciousTypeCheck(valuestable, errorcallback)){
		return false;
	}
	return true;
};
CustomerInvoices.validateNull = function (valuestable,errorcallback){
	return true;
};

CustomerInvoices.validateNullInsert = function (valuestable,errorcallback){
	if(kony.sync.isNull(valuestable.InvoiceId) || kony.sync.isEmptyString(valuestable.InvoiceId)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Mandatory attribute InvoiceId is missing for the SyncObject CustomerInvoices.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "CustomerInvoices", "InvoiceId")));
		return false;
	}
	return true;
};
CustomerInvoices.getRelationshipMap = function(relationshipMap,valuestable){
	return relationshipMap;
};

CustomerInvoices.getTableName = function(){
	return "CustomerInvoices";
};

// **********************************End CustomerInvoices's helper methods************************