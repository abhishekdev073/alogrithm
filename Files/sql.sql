public interface IGetSqlData
        {
             int GetData();
            
        }
        public interface ISaveSqlData
        {
            void SaveData();
        }

        public class FullAcess : IGetSqlData, ISaveSqlData
        {
            public int GetData()
            {
                return 22;
            }

            public void SaveData()
            {
                Console.WriteLine("Data saved");
            }
        }
        public class readOnlyAcess : IGetSqlData
        {
            public int GetData()
            {
                return 22;
            }
        }

        public class SQL
        {
            public int GetSqlData(IGetSqlData obj)
            {
                return obj.GetData();
            }

            public void GetSqlData(ISaveSqlData obj)
            {
                obj.SaveData();
            }
        }
