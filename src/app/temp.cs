
        public interface ILogger
        {
            void LogMessage(string aString);
        }
        public class DbLogger : ILogger
        {
            public void LogMessage(string aMessage)
            {
                //Code to write message in database.  
            }
        }
        public class FileLogger : ILogger
        {
            public void LogMessage(string aStackTrace)
            {
                //code to log stack trace into a file.  
            }
        }
        public class ExceptionLogger
        {
            private ILogger _logger;
            public ExceptionLogger(ILogger aLogger)
            {
                this._logger = aLogger;
            }
            public void LogException(Exception aException)
            {
                this._logger.LogMessage(aException.Message);
            }
        }
        public class DataExporter
        {
            public void ExportDataFromFile()
            {
                ExceptionLogger _exceptionLogger;
                try
                {
                    //code to export data from files to database.  
                }
                catch (IOException ex)
                {
                    _exceptionLogger = new ExceptionLogger(new DbLogger());
                    _exceptionLogger.LogException(ex);
                }
                catch (Exception ex)
                {
                    _exceptionLogger = new ExceptionLogger(new FileLogger());
                    _exceptionLogger.LogException(ex);
                }
            }
        }