public virtual class LoggableException extends Exception {
	private ErrorLog__c errorLog;
	private List<ExceptionLog__c> exceptionLogs;
	private List<RowLog__c> rowLogs;
	private List<ServiceLog__c> serviceLogs;

	public ErrorLog__c getErrorLog() { return this.errorLog; }
	public void setErrorLog(ErrorLog__c log) {
		this.errorLog = log;
	}

	public void init(Exception exc) {
		errorLog = new ErrorLog__c();
		exceptionLogs = new List<ExceptionLog__c>();
		rowLogs = new List<RowLog__c>();
		serviceLogs = new List<ServiceLog__c>();

		// initialize logger with the first exception
	}

	public void addException(Exception exc) {
		// add an exception to the error log
	}

	public void flush() {
		// commit all data to salesforce
	}
}
