export const data = [{
    "question": "Node js",
    "responses": [{
        "value": "avaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser",
    }
    ]
},
{
    "question": " Node => v8 + libUv",
    "responses": [{
        "value": "V8(C++,JS) :- Open source javascript engine created by google.",
        desc: [
            'libUv(C++) :- open source project give access to OS,File system, networking',
            ' Node lib file contains the js code its called src c++ code, v8 translate js value to c++'
        ]
    }
    ]
},
{
    "question": "Thread",
    "responses": [{
        "value": "Unit of instruction waiting to get executed",
        desc: [
            'Node program run in 1 thread'
        ]
    }
    ]
},
{
    "question": "Event Loop",
    "responses": [{
        "value": "Every time event loop is run called tick",
        desc: [
            'Event loop check for condition if its true then it run event loop',
            '1. Any pending settimeout, setInterval, setImediate',
            '2. Any Pending OS task. ex:any server listening to any port',
            '3. Any pending long running operation eg: Fs module  ',

        ]
    }
    ]
},
{
    "question": "Event loop do",
    "responses": [{
        desc: [
            '1. Look of pending timers and any callback function',
            '2. Look of pending OS task and Pending operation node execute callback',
            '3. Pause execution. Continue when',
            '       new Pending task done',
            '       new pending operation done',
            '       timer is about to complete',
            '4. Look at pending timer. call any setimediate',
            '5. Handle any close event  . ex readStream ',
        ]
    }
    ]
},
{
    "question": "Node event loop",
    "responses": [{
        "value": "Single thread",
        desc: [
            'Some of function /std libUv:- Not a single thread. run outside of event loop',
            'Expensive function run out of event loop(Crypto,Fs)',
            'uses thread pool . create 4 thread process 4 task',
        ]
    }
    ]
},
{
    "question": "MutliThreading",
    "responses": [{
        "value": "give concurrency ",
        desc: [
            'If 1 task taking 1sec then 2 task will take 2sec (depend on core) both will complete at same time'
        ]
    }
    ]
},
{
    "question": "LibUv delegate OS",
    "responses": [{
        "value": "Https request :- LibUv delegate request to OS. Os send the request Os handle the request. Event loop is free",
        desc: [
            'Everything around networking handle by OS  :- PendingOSTask '
        ]
    }
    ]
},
{
    "question": "Cluster mode",
    "responses": [{
        desc: [
            "Multiple copy of node running your server . multiple instance of server. MultiThreading - Reccommended",
            "no of server instance should be equal to number of physical or logical core",
            "PM2 use pm2 to handle cluster automatically",
        ]
    }
    ]
},
{
    "question": "Worker thread",
    "responses": [{
        "value": "Our app <===> worker thread communicate with post message and on message",
        desc: [
            'Worker thread get executed out of event loop'
        ]
    }
    ]
},
{
    "question": "Redis",
    "responses": [{
        "value": "Redis for caching",
        desc: [
            'Util.promisify make function promise'
        ]
    }
    ]
},
{
    "question": "Puppeteer and jest",
    "responses": [{
        "value": "Puppeteer and jest is used for node integrated testing",
        desc: [
            'we do code in YAML its like JSON'
        ]
    }
    ]
},
{
    "question": "Require module",
    "responses": [{
        "value": "Require module check in node modules folder to its parent and cache the path :its caches the file",
        desc: [

        ]
    }
    ]
},
{
    "question": "node-gyp",
    "responses": [{
        "value": "In node we can run c++ code with node-gyp",
        desc: [

        ]
    }
    ]
},
{
    "question": "Benefits and drawback",
    "responses": [{
        "value": "Node is best for I/O operations :-reading/writing files or network operations",
        desc: [
            'Not good for CPU Intensive processing like Image processing/video processing'
        ]
    }
    ]
}
]