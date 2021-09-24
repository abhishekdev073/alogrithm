export const data = {
    "data": [
        {
            question: 'SQL',
            responses: [{
                image: 'sql.png',
                style: { width: '80%' }
            }
            ]
        },
        {
            "question": "Find second highest",
            "responses": [{
                "image": "second_highest.png",
                style: { width: '80%' }
            }]
        }
        ,
        {
            "question": "PARTITION",
            "responses": [{
                "value": "We can use the SQL PARTITION BY clause with the OVER clause to specify the column on which we need to perform aggregation.",
                image: 'partition.PNG',
                style: { width: '80%' }
            }]
        }
        , {
            "question": "View",
            "responses": [{
                "value": "virtual tables",
                desc: [
                    "create view from choosing field from other tables",
                    'create view [getNameAndAge]  as',
                    'select [Name],Age from users',
                    'select * from GetNameAndAge',
                ]
            }]
        }
        , {
            "question": "SCOPE_IDENTITY() && @@IDENTITY",
            "responses": [{
                "value": "Returns the last identity value inserted into an identity column in the same scope",
                desc: [
                    '  CREATE TABLE TZ (  ',
                    '      Z_id  INT IDENTITY(1,1)PRIMARY KEY,  ',
                    '      Z_name VARCHAR(20) NOT NULL);  ',
                    'select SCOPE_IDENTITY()',
                    'select @@IDENTITY'
                ]
            }]
        }
        , {
            "question": "rowlock and nolock",
            "responses": [{
                desc: [
                    "nolock :-  ignore locks and read directly from the tables. increae performance",
                    "rowlock :- lock the row to update or delete it"
                ]
            }]
        }
        , {
            "question": "user defined table",
            "responses": [{
                "value": "we defined user the type e.g. we want to pass datatable to SP or any Model then first we need to defined that type in sql",
            }]
        }
        , {
            "question": "delete duplicate",
            "responses": [{
                desc: [
                  '  with cte as(',
                  '      select [name],age,pincode, RoW_NUMBER() over(partition by age order by age)as RN from users ',
                  '     ) ',
                  '     --delete from cte where  RN > 1',
                  '     select * from cte where  RN > 1',
                ]
            }]
        }
    ]
}
