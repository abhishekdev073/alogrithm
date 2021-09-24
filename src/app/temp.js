string[] names = { "Tom", "Dick", "Harry", "Mary", "Jay" };
IEnumerable<string> query =
                        from n in names
                        where n.Contains ("a") // Filter elements
                        orderby n.Length // Sort elements
                        select n.ToUpper(); // Translate each element (project)
                        foreach (string name in query) Console.WriteLine (name
                        int matches = (from n in names where n.Contains ("a") select n).Count();