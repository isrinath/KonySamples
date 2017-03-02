// ****************Generated On Tue Sep 10 13:07:05 IST 2013Alerts*******************
// **********************************Start Alerts's helper methods************************

/************************************************************************************
* Creates new Alerts
*************************************************************************************/
Alerts = function(){
	this.OrderId = null;
	this.CustContact = null;
	this.CustDesc = null;
	this.CustId = null;
	this.EndDate = null;
	this.EstimatedTime = null;
	this.FieldComment = null;
	this.Latitude = null;
	this.Longitude = null;
	this.Location = null;
	this.OrderDesc = null;
	this.PartId = null;
	this.Priority = null;
	this.ProblemDesc = null;
	this.ResourceDesc = null;
	this.ResourceId = null;
	this.SpecialIns = null;
	this.StartDate = null;
	this.StartTime = null;
	this.Status = null;
	this.Type = null;
	this.VendorId = null;
	this.equipmentName = null;
	this.notifierName = null;
	this.markForUpload = true;
};

Alerts.prototype = {
	get OrderId(){
		return this._OrderId;
	},
	set OrderId(val){
		this._OrderId = val;
	},
	get CustContact(){
		return this._CustContact;
	},
	set CustContact(val){
		this._CustContact = val;
	},
	get CustDesc(){
		return this._CustDesc;
	},
	set CustDesc(val){
		this._CustDesc = val;
	},
	get CustId(){
		return this._CustId;
	},
	set CustId(val){
		this._CustId = val;
	},
	get EndDate(){
		return this._EndDate;
	},
	set EndDate(val){
		this._EndDate = val;
	},
	get EstimatedTime(){
		return this._EstimatedTime;
	},
	set EstimatedTime(val){
		this._EstimatedTime = val;
	},
	get FieldComment(){
		return this._FieldComment;
	},
	set FieldComment(val){
		this._FieldComment = val;
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
	get Location(){
		return this._Location;
	},
	set Location(val){
		this._Location = val;
	},
	get OrderDesc(){
		return this._OrderDesc;
	},
	set OrderDesc(val){
		this._OrderDesc = val;
	},
	get PartId(){
		return this._PartId;
	},
	set PartId(val){
		this._PartId = val;
	},
	get Priority(){
		return this._Priority;
	},
	set Priority(val){
		this._Priority = val;
	},
	get ProblemDesc(){
		return this._ProblemDesc;
	},
	set ProblemDesc(val){
		this._ProblemDesc = val;
	},
	get ResourceDesc(){
		return this._ResourceDesc;
	},
	set ResourceDesc(val){
		this._ResourceDesc = val;
	},
	get ResourceId(){
		return this._ResourceId;
	},
	set ResourceId(val){
		this._ResourceId = val;
	},
	get SpecialIns(){
		return this._SpecialIns;
	},
	set SpecialIns(val){
		this._SpecialIns = val;
	},
	get StartDate(){
		return this._StartDate;
	},
	set StartDate(val){
		this._StartDate = val;
	},
	get StartTime(){
		return this._StartTime;
	},
	set StartTime(val){
		this._StartTime = val;
	},
	get Status(){
		return this._Status;
	},
	set Status(val){
		this._Status = val;
	},
	get Type(){
		return this._Type;
	},
	set Type(val){
		this._Type = val;
	},
	get VendorId(){
		return this._VendorId;
	},
	set VendorId(val){
		this._VendorId = val;
	},
	get equipmentName(){
		return this._equipmentName;
	},
	set equipmentName(val){
		this._equipmentName = val;
	},
	get notifierName(){
		return this._notifierName;
	},
	set notifierName(val){
		this._notifierName = val;
	},
};

/************************************************************************************
* Retrieves all instances of Alerts SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderby[0] = {};
* orderby[0].key = "OrderId";
* orderby[0].sortType ="desc";
* orderby[1] = {};
* orderby[1].key = "CustContact";
* orderby[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* Alerts.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
Alerts.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	var dbname = kony.sync.getDBName();
	var tbname = Alerts.getTableName();
	orderByMap = Alerts.formOrderByClause(orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){	
		successcallback(Alerts.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of Alerts present in local database.
*************************************************************************************/
Alerts.getAllCount = function(successcallback,errorcallback){
	Alerts.getCount("",successcallback,errorcallback);
};
Alerts.getCount = function(wcs,successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Alerts.getTableName();
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
* Creates a new instance of Alerts in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Alerts.prototype.create = function(successcallback,errorcallback){
	var valuestable = this.getValuesTable(true);
	Alerts.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
Alerts.create = function(valuestable, successcallback,errorcallback,markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Alerts.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	if(Alerts.validateType(valuestable,errorcallback)===false){
		return;
	}
	if(Alerts.validateNullInsert(valuestable,errorcallback)===false){
		return;
	}
	valuestable = Alerts.filterAttributes(valuestable, true);
	var relationshipMap={};  
	relationshipMap = Alerts.getRelationshipMap(relationshipMap,valuestable);
	function executeSuccess(){
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
	var pks = [];
	var errMsg = "OrderId=" + valuestable.OrderId;
	pks["OrderId"] = {key:"OrderId",value:valuestable.OrderId};
	function createSuccesscallback(res){
		if(res==null || res.length==0){
			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			errMsg = "[" + errMsg + "]";
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeDuplicatePrimaryKey,kony.sync.getErrorMessage(kony.sync.errorCodeDuplicatePrimaryKey, tbname, errMsg)));
		}
	}
	Alerts.getAllDetailsByPK(pks,createSuccesscallback,errorcallback)
};

/************************************************************************************
* Creates number of new instances of Alerts in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
*************************************************************************************/
Alerts.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Alerts.getTableName();
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
			if(Alerts.validateType(valuestable,errorcallback)===false){
				return;
			}
			if(Alerts.validateNullInsert(valuestable,errorcallback)===false){
				return;
			}
			valuestable = Alerts.filterAttributes(valuestable, true);
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
				var errMsg = "OrderId=" + valuestable.OrderId;
				pks["OrderId"] = {key:"OrderId",value:valuestable.OrderId};
				var wcs = [];
				if(Alerts.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
			relationshipMap = Alerts.getRelationshipMap(relationshipMap,valuesArray[i]);
			if(!kony.sync.checkIntegrityinTransaction(tx, relationshipMap, errorcallback)){
				isError = true;
				return; 
			}
		}
	}
};
/************************************************************************************
* Updates Alerts using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Alerts.prototype.updateByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	Alerts.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
Alerts.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Alerts.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];
	var twcs = [ ];
	if(Alerts.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}
	twcs = kony.sync.CreateCopy(wcs);
	function Alerts_PKPresent_succ(res){
		if(null!==res && res.length!==0){
			if(Alerts.validateType(valuestable,errorcallback)===false){
				return;
			}
			if(Alerts.validateNull(valuestable,errorcallback)===false){
				return;
			}
			valuestable = Alerts.filterAttributes(valuestable, false);
			var relationshipMap={};  
			relationshipMap = Alerts.getRelationshipMap(relationshipMap,valuestable);

			kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
		}
		else{
			kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
		}
	}

	function executeSuccess(){
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback, false, markForUpload);
	}
	
	function Alerts_CheckUpdate(res){
		if(kony.sync.checkForFalseUpdate(dbname, tbname, twcs, markForUpload, errorcallback,checkForFalseUpdateCallback)===true){
			Alerts_PKPresent_succ(res);
		}
		function checkForFalseUpdateCallback(){
			Alerts_PKPresent_succ(res);
		}
	}
	function pkNotFoundErrCallback(){
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	Alerts.getAllDetailsByPK(pks,Alerts_CheckUpdate, pkNotFoundErrCallback);
};

/************************************************************************************
* Updates Alerts(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Alerts.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Alerts.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	if(Alerts.validateType(valuestable,errorcallback)===false){
		return;
	}
	if(Alerts.validateNull(valuestable,errorcallback)===false){
		return;
	}	
	valuestable = Alerts.filterAttributes(valuestable, false);
	var relationshipMap={};
	relationshipMap = Alerts.getRelationshipMap(relationshipMap,valuestable);
	kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	function executeSuccess(){
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, Alerts.getPKTable());
	}
};

/************************************************************************************
* Deletes Alerts using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
Alerts.prototype.deleteByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	Alerts.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
Alerts.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Alerts.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var twcs = [];
	var deletedRows;
	if(Alerts.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function Alerts_PKPresent_succ(res){
		if(null!==res && res.length!==0) {
			var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
			if(connection != null){
				kony.sync.startTransaction(connection, transactioncallback, Alerts_relationshipsuccess, Alerts_relationshipfailure);
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

	function Alerts_relationshipfailure(){
		if(!isError){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function Alerts_relationshipsuccess(){
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, deletedRows);
		}
	}
	
	function Alerts_CheckUpdate(res){
		if(kony.sync.checkForFalseUpdate(dbname, tbname, twcs, markForUpload, errorcallback, checkForFalseUpdateCallback)===true) {
			Alerts_PKPresent_succ(res);
		}
		
		function checkForFalseUpdateCallback(){
			Alerts_PKPresent_succ(res);
		}
	}
	function pkNotFoundErrCallback(){
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	Alerts.getAllDetailsByPK(pks,Alerts_CheckUpdate, pkNotFoundErrCallback);
};

/************************************************************************************
* Deletes Alerts(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. Alerts.remove("where OrderId like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
Alerts.remove = function(wcs, successcallback,errorcallback, markForUpload){
	var dbname = kony.sync.getDBName();
	var tbname = Alerts.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function Alerts_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function Alerts_removeSuccess(){

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
			kony.sync.startTransaction(connection, Alerts_removeTransactioncallback, Alerts_removeSuccess, errorcallbackWrapper);
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
* Deletes Alerts using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
Alerts.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	Alerts.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
Alerts.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Alerts.getTableName();
	var wcs = [];
	if(Alerts.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	function Alerts_PKPresent_succ(res){
		if(null!==res && res.length!==0) {
			kony.sync.single_delete_execute(dbname, tbname, wcs,successcallback, errorcallback, false, true);
		}else{
			kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
		}
	}
	Alerts.getAllDetailsByPK(pks, Alerts_PKPresent_succ, errorcallback);
};

/************************************************************************************
* Retrieves Alerts using primary key from the local Database. 
*************************************************************************************/
Alerts.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	Alerts.getAllDetailsByPK(pks,successcallback,errorcallback,this.markForUpload);
};
Alerts.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Alerts.getTableName();
	var wcs = [];
	if(Alerts.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		successcallback(Alerts.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};

/************************************************************************************
* Retrieves Alerts(s) using where clause from the local Database. 
* e.g. Alerts.find("where OrderId like 'A%'", successcallback,errorcallback);
*************************************************************************************/
Alerts.find = function(wcs, successcallback,errorcallback){
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = Alerts.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from " + tbname + " " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Alerts.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of Alerts with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
Alerts.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	var pks = this.getPKTable();
	Alerts.markForUploadbyPK(pks, successcallback, errorcallback);
};
Alerts.markForUploadbyPK = function(pks, successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Alerts.getTableName();
	var isError = false;
	var recordsFound = false;
	var wcs = [];
	if(Alerts.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of Alerts matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
Alerts.markForUpload = function(wcs, successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Alerts.getTableName();
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
* Retrieves instance(s) of Alerts pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
Alerts.getPendingUpload = function(successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Alerts.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var sql = "select * from " + tbname + " WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" = "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Alerts.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}

};

/************************************************************************************
* Retrieves instance(s) of Alerts pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
Alerts.getPendingAcknowledgement = function(successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Alerts.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Alerts.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of Alerts deferred for upload.
*************************************************************************************/
Alerts.getDeferredUpload = function(successcallback,errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Alerts.getTableName();
	var mysql="select * from "+tbname+" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableChangeTypeColumn+" LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Alerts.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to Alerts in local database to last synced state
*************************************************************************************/
Alerts.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Alerts.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Alerts.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}		
};

/************************************************************************************
* Rollbacks changes to Alerts's record with given primary key in local 
* database to last synced state
*************************************************************************************/
Alerts.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	var pks = this.getPKTable();
	Alerts.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
Alerts.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	var dbname = kony.sync.getDBName();
	var tbname = Alerts.getTableName();
	var wcs = [];
	if(Alerts.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Alerts.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};



/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
Alerts.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable){
	var tbname = Alerts.getTableName();
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


Alerts.convertTableToObject = function(res){
	objMap = [];
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
	return objMap;
};

Alerts.filterAttributes = function(valuestable, insert){
	var attributeTable = {};
	attributeTable.OrderId = "OrderId";
	attributeTable.CustContact = "CustContact";
	attributeTable.CustDesc = "CustDesc";
	attributeTable.CustId = "CustId";
	attributeTable.EndDate = "EndDate";
	attributeTable.EstimatedTime = "EstimatedTime";
	attributeTable.FieldComment = "FieldComment";
	attributeTable.Latitude = "Latitude";
	attributeTable.Longitude = "Longitude";
	attributeTable.Location = "Location";
	attributeTable.OrderDesc = "OrderDesc";
	attributeTable.PartId = "PartId";
	attributeTable.Priority = "Priority";
	attributeTable.ProblemDesc = "ProblemDesc";
	attributeTable.ResourceDesc = "ResourceDesc";
	attributeTable.ResourceId = "ResourceId";
	attributeTable.SpecialIns = "SpecialIns";
	attributeTable.StartDate = "StartDate";
	attributeTable.StartTime = "StartTime";
	attributeTable.Status = "Status";
	attributeTable.Type = "Type";
	attributeTable.VendorId = "VendorId";
	attributeTable.equipmentName = "equipmentName";
	attributeTable.notifierName = "notifierName";

	var PKTable = {};
	PKTable.OrderId = "OrderId";
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			kony.sync.syncPrint("WARNING: [KONYSYNC] Ignoring the attribute " + k + " for the SyncObject Alerts. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(insert===false && !kony.sync.isNull(PKTable[k])) {
			kony.sync.syncPrint("WARNING: [KONYSYNC] Ignoring the primary key " + k + " for the SyncObject Alerts. Primary Key should not be the part of the attributes to be updated in the local device database.");
		}
		else{
			newvaluestable[k] = v;
		}
	}
	return newvaluestable;
};

Alerts.formOrderByClause = function(orderByMap){
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		var filteredValuestable = Alerts.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,filteredValuestable);
	}
	return null;
};

Alerts.prototype.getValuesTable = function(isInsert){
	var valuesTable = {};
	if(isInsert===true){
		valuesTable.OrderId = this.OrderId;
	}
	valuesTable.CustContact = this.CustContact;
	valuesTable.CustDesc = this.CustDesc;
	valuesTable.CustId = this.CustId;
	valuesTable.EndDate = this.EndDate;
	valuesTable.EstimatedTime = this.EstimatedTime;
	valuesTable.FieldComment = this.FieldComment;
	valuesTable.Latitude = this.Latitude;
	valuesTable.Longitude = this.Longitude;
	valuesTable.Location = this.Location;
	valuesTable.OrderDesc = this.OrderDesc;
	valuesTable.PartId = this.PartId;
	valuesTable.Priority = this.Priority;
	valuesTable.ProblemDesc = this.ProblemDesc;
	valuesTable.ResourceDesc = this.ResourceDesc;
	valuesTable.ResourceId = this.ResourceId;
	valuesTable.SpecialIns = this.SpecialIns;
	valuesTable.StartDate = this.StartDate;
	valuesTable.StartTime = this.StartTime;
	valuesTable.Status = this.Status;
	valuesTable.Type = this.Type;
	valuesTable.VendorId = this.VendorId;
	valuesTable.equipmentName = this.equipmentName;
	valuesTable.notifierName = this.notifierName;
	return valuesTable;
};

Alerts.prototype.getPKTable = function(){
	var pkTable = {};
	pkTable.OrderId = {key:"OrderId",value:this.OrderId};
	return pkTable;
};

Alerts.getPKTable = function(){
	var pkTable = [];
	pkTable.push("OrderId");
	return pkTable;
};

Alerts.pkCheck = function(pks,wcs,errorcallback,opName){
	var wc = [];
	if(kony.sync.isNull(pks)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Primary Key OrderId not specified in  " + opName + "  an item in Alerts");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("OrderId",opName,"Alerts")));
		return false;	
	}
	else if(kony.sync.isValidJSTable(pks)){
		if(!kony.sync.isNull(pks.OrderId)){
			if(!kony.sync.isNull(pks.OrderId.value)){
				wc.key = "OrderId";
				wc.value = pks.OrderId.value;
			}
			else{
				wc.key = "OrderId";
				wc.value = pks.OrderId;
			}
		}else{
			kony.sync.syncPrint("ERROR: [KONYSYNC] Primary Key OrderId not specified in  " + opName + "  an item in Alerts");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("OrderId",opName,"Alerts")));
			return false;
		}
	}
	else{
		wc.key = "OrderId";
		wc.value = pks;
	}	
	kony.table.insert(wcs,wc);
	return true;
};
Alerts.validateType = function (valuestable, errorcallback){
	if(kony.sync.genMaliciousTypeCheck(valuestable, errorcallback)){
		return false;
	}
	return true;
};
Alerts.validateNull = function (valuestable,errorcallback){
	return true;
};

Alerts.validateNullInsert = function (valuestable,errorcallback){
	if(kony.sync.isNull(valuestable.OrderId) || kony.sync.isEmptyString(valuestable.OrderId)){
		kony.sync.syncPrint("ERROR: [KONYSYNC] Mandatory attribute OrderId is missing for the SyncObject Alerts.");
		errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeMandatoryAttribute,kony.sync.getErrorMessage(kony.sync.errorCodeMandatoryAttribute, "Alerts", "OrderId")));
		return false;
	}
	return true;
};
Alerts.getRelationshipMap = function(relationshipMap,valuestable){
	relationshipMap.WorkOrder = {};
	relationshipMap.WorkOrder.sourceAttribute = "orderId";
	relationshipMap.WorkOrder.targetAttributeValue = "'" + valuestable.OrderId + "'";
	return relationshipMap;
};

Alerts.getTableName = function(){
	return "Alerts";
};

// **********************************End Alerts's helper methods************************