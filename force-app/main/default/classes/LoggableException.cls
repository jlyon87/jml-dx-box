public virtual class LoggableException extends Exception {
	private ErrorLog__c errorLog;

	public LoggableException() {}

	public void getErrorLog() { return this.errorLog; }
	public void setErrorLog(ErrorLog__c log) {
		this.errorLog = log;
	}
}
