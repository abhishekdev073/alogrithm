export const data = [

    {
        question: "AWS",
        responses: [{
            value: 'Amazon web services 30+',
        }]
    },
    {
        question: "Region",
        responses: [{
            value: 'Most services are region scoped -e',
            desc: [
                'Every region has many cluster of data center(AZ)',
                ' Availability zone :- Each region min 3-6 AZ',
                ' One AZ is down we can launch another',
            ]
        }]
    },
    {
        question: "IAM",
        responses: [{
            value: 'Identity Access management',
            desc: [
                'User/Groups/Roles/ security, Center of  aws',
                'User/Groups/Roles',
                'We write policies in JSON. What user can and can not access',
                'One IAM Role per Application ',
                'Never use Root account or dont share',
            ]
        }]
    },
    {
        question: "EC2",
        responses: [{
            value: 'we create server instance ',
            desc: [
                'To connect server : putty window < 10',
                'SSH for Mac/Window 10/Linux',
                'EC2 connect for all from browser ',
            ]
        }]
    },
    {
        question: "Security group",
        responses: [{
            value: 'Allow traffic of EC2 Instance	(Inbound outbound)',
            desc: [
                '    Inbound rule we add rule to access(what we can access)',
                '    its work as firewall ',
                '    Security group can have multiple groups   ',
                '    can allow only Allow rules.',
                '    includes IP and other security group',
            ]
        }]
    },
    {
        question: "Public Private Elastic IP",
        responses: [{
            desc: [
                '  We get 1 private IP and 1 public IP on EC2 instance',
                '  Elastic IP (5 on account):-  restart EC2 instance its get new IP, to get Fix we use Elastic IP. you own it untill you delete it',
                '  Avoid Elastic IP use Public Ip assign DNS to it',
                '  When machine restart Public IP changes',
                '  When Elastic IP is not associated with EC2 then u will get charged (Better delete Elastic IP)',
            ]
        }]
    },
    {
        question: "To update server",
        responses: [{
            value: 'yum update -y ',
        }]
    },
    {
        question: "EC2 User Data",
        responses: [{
            value: 'this script run once when instance start',
            desc: [
                'use to bootstrap. We automate task',
                'Installing update,installing software,download common file',
                'this script runs as root user :- run commands',
            ]
        }]
    },
    {
        question: "Type of instances",
        responses: [{
            desc: [
                '  1.On demand instance:-short workload , predictable price (billing per second) (pay letter)',
                '  2.Reserved instance : Minimum 1 year , large workload (pay upfront 75% discount)',
                '    Convertible Reserved instance :- Can change EC2 instance, upto 54% discount',
                '    Schedule reserved instance :- Launch in time when you reserve         ',
                '    ',
                '  3.Spot instance :- short workload cheap, can loose instance (90% discount)',
                '      Looses Stop instance : when ur max price is less than current spot price',
                '  4. dedicated instance :-No other customer share your hardware',
                '  5. Dedicated hosts :- Book entire physical server  ',
            ]
        }]
    },
    {
        question: "Election network interface(ENI)",
        responses: [{
            value: 'It can get mapped to EC2 instance',
        }]
    },
    {
        question: "AMI",
        responses: [{
            value: 'To create custom instance image for server',
            desc: [

            ]
        }]
    },
    {
        question: "Scaling",
        responses: [{
            value: 'Vertical scaling increase size, horizontal scaling increase the number',
        }]
    },
    {
        question: " Load Balancer(Elastic load balancer:ELB-AWS)",
        responses: [{
            value: 'EC2 Load balancer:- Forward internet traffic to servers',
            desc: [
                '       Its keep checking health of server every specified second',
                '       enforce cookies stickiness',
                '       we can setup private or public ELB',
                '       Only load balancer can send request then :- We create security group for load balancer with any one access (source :0.0.0.0)',
                '       then Application security group only access to load balancer by (source:security group id of load balancer)  ',
                '    ',
                '       3 type of load balancer',
                '       1.classic load balance (Layer 4,7)  :- http,https,tcp',
                '       2.Application load balancer (Layer 7) :- http ,https, websocket, can redirect form http to https',
                '         Routing(redirect) based on path in URL,HostName,query string,header (we can redirect based on this value to different EC2 instance)',
                '          abc.com/user - /abc.com/about , my.abc.com - kk.abc.com, ab.com?id=34  Add rule in listener',
                '       3.Network load balancer(Layer 4) :-TCP,TLS,UDP - Less latency 100ms',
                '          1 static IP per AZ,support assigning elastic IP (helpful for white listing sepecific IP)',
                '          want extreme performance or want static IP',
            ]
        }]
    },
    {
        question: "Load balancer stickiness",
        responses: [{
            value: 'setting target load balancer',
            desc: [
                'same client get redirected to same EC2 instance always  with help of cookie',
                'this work with CLB and ALB',
            ]
        }]
    },
    {
        question: "Cross Zone load balancer",
        responses: [{
            value: 'Evenly distributed traffic to EC2 instance',
            desc: [
                'Load balancer ditstributes all in register EC2 instance AZ	',
                'CLB - disabled default, dont have to pay extra for Enable ',
                'ALB - Enable default, cant disable ',
                'NLB - disabled default, pay extra for Enable',
            ]
        }]
    },
    {
        question: "SSL/TLS",
        responses: [{
            value: 'SSL certificate traffic between client and load balancer get encrypted in transit',
            desc: [
                '   SSL :- Secure socket layer , TLS :-(Transport layer security ) newer version of SSL',
                '   LB uses SSL/TLS certificate, you can manage certificate using ACM(AWS certificate manager)   ',
                '   ALB,NLB support multiple certificates (SNI :-servername indication) then can work with multiple domain (multiple support group)',

            ]
        }]
    },
    {
        question: "Auto Scaling Groups(ASG)",
        responses: [{
            desc: [
                '  Increase or decrease EC2 instance based on load , CPU usage,Network usage ,custom metric schedule timing usage alarm of cloudfront',
                '  If instance under ASG get terminated for some reason then ASG will create new one',
                '  Load balance will mark instance unhealthy then ASG will destroy and create ',
                '  Minimum and Maximum no size of instance set    ',

            ]
        }]
    },
    {
        question: "EBS (Elastic book store)",
        responses: [{
            value: 'when main instance terminated drive data get losses ',
            desc: [
                '  EBS :- network drive you can attach to your instance when they run . allow to save data like(DB)',
                '  its based on zone, one zone can not access other zone ',
            ]
        }]
    },
    {
        question: "EBS vs Instance store",
        responses: [{
            value: 'EBS network drive like PD Instance store is attached to machine its very fast',
        }]
    },
    {
        question: "EFS",
        responses: [{
            value: 'Elastic File system',
            desc: [
                'its work with multiple AZ,expensive'
            ]
        }]
    },
    {
        question: "RDS:- Relational database service",
        responses: [{
            desc: [
                ' Create Db in cloud that are manage by AWS(postgres,Mysql,MariaDb,sql,oracle,aurora). It manage Db with Sql like query   ',
                ' We can create Replica in Other AZ and others Regaion as well. we have to pay cost',
                ' Multi AZ :- if one DB goes down we can use our DB of backup',
                ' Aurora DB:- AWS databases its fast on RDS. not open source. It create read replica	',
                ' Master and replica used shared storage',
                ' Aurora serverless :-DB it scale automatically based on load',
            ]
        }]
    },
    {
        question: "ElasitCache",
        responses: [{
            desc: [
                'managed by Redis or Memcached. Cache memory for high performance. Ram',
                'We can share state in multiple application',

            ]
        }]
    },
    {
        question: "Route S3 ",
        responses: [{
            value: 'Managed DNS',
            desc: [
                '        A: Host name to IPV4',
                '        AAAA.HostName to IPV6',
                '        CName :- HostName to HostName',
                '        Alias :- HostName to AWS resource		',
                '   Can buy Domain around 12$',
            ]
        }]
    },
    {
        question: "TTL (Time to live) ",
        responses: [{
            value: 'Browser cache S3 route DNS response for TTL time  ',
        }]
    },
    {
        question: "CNAME vs Alias",
        responses: [{
            desc: [
                '  Cname can point to any domain. not work with root domain',
                '  alias should point to AWS domain',
                '  Alisa free , health check.work with root domain',
            ]
        }]
    },
    {
        question: "Routing Policy ",
        responses: [{
            value: 'xxxxxxxx',
            desc: [
                'simple :- Client side load balancing :- return IP from S3 route	',
                'Weighted routed policy :- Can split traffic between instances like (instance1 40% ,instance2 30%, instance3 30%)  ',
                '                              return single IP based on performance',
                'Latency Policy :- User get redirected to instance which has less latency(CDN)		',
                'Health check : Default 3 request to determine is healthy ro not healthy ',
                '               Route s3 :- health check and return health instance   ',
                'Geo Location Policy :- User from specific location goes to specific IP',
                'Multi routing policy :- Return healthy multiple IP browse chooses any  ',
            ]
        }]
    },
    {
        question: "VPC",
        responses: [{
            value: 'Virtual Private Cloud :- Private network to deploy your resources (Regional resource) 2 Region == 2 VPC	',
            desc: [
                '   AWS => Region => VPC => Subnet 1, subnet2     ',
                '   Subnet:- Allow partition network inside your VPC (AZ resource) -public subnet,Private subnet	',
                '   Internet gateway & NAT Gateways ',
                '   Internet Gateway :-Help VPC instance to connect to internet',
                '                      Public subnet have route to Internet Gateway',
                '   Nat Gateway :- Allow private subnet to access Internet while remaining private',
                '                Deploy Nat gateway to public subnet : add route to public route',
            ]
        }]
    },
    {
        question: "Network ACL",
        responses: [{
            value: 'Firewall allow traffic from and to subnet',
            desc: [
                'Attached to subnet. Rules only includes IP'
            ]
        }]
    },
    {
        question: "VPC flow log",
        responses: [{
            value: 'Capture information about IP traffic	going into your interface ',
            desc: [
                '             VPC flow logs',
                '             Subnet flow logs',
                '             Elastic network interface log ',
                '  Monitor and troubleshoot connectivity issue eg .Subnet to internet, subnet to subnet, internet to subnet ',
                '  VPC flow logs data can go to S3/Cloudwatch logs',
            ]
        }]
    },
    {
        question: "VPC peering",
        responses: [{
            desc: [
                '       Connect to 2 Vpc, Privately using AWS network ',
                '       Make them behave as they are in same network',
                '    Must not have overlapping CIDR(Ip range address)',
            ]
        }]
    },
    {
        question: "Endpoint",
        responses: [{
            desc: [
                '  Allow to connect to AWS services using private network instead of public www ----network	inside VPC',
                '  VPC Endpoint gateway :- S3  & DynamoDb',
            ]
        }]
    },
    {
        question: "S3",
        responses: [{
            value: '4 types of method to encrypt file',
            desc: [
                '              1.SSE-S3 : Key handled and managed by AWS		  ',
                '              must se header :- x-amz-server-side-encryption:AES256		  ',
                '    2.SSE-KMS :-Leverage AWS key management service to manage to encryption key (User master key defined on s3)',
                '             must se header :- x-amz-server-side-encryption:aws: kms	',
                '    3. SSE-C :-when you want to manage your own encryption key. must used:https ',
                '       Data key in header',
                '    4. Client side encryption ',
            ]
        }]
    },
    {
        question: "S3 Security ",
        responses: [{
            value: 'User based :IAM',
            desc: [
                '  Resource based :-Bucket policies',
                '  Object Access control list (ACL)',
                '  Bucket Acess control list (ACL)	',
            ]
        }]
    },
    {
        question: "AWS CLI on local",
        responses: [{
            value: 'cmd :- aws configure > enter Access keyId, Access key,Region,Default output format :none (On your local)',
        }]
    },
    {
        question: "AWS CLI on EC2",
        responses: [{
            value: 'Use IAM roles to access',
            desc: [
                '                run  aws configure ,dont put AWS access key and ID ',
                '                curl instance/meta-data get meta data	',
                ' ',
                '   AWS configure --profile myOhterawsaccount (to use multiple AWS account in CLI)',
                '     AWS s3 ls --profile myotherawsaccount (use others account)',
                '				',
                '  IAM roles has policies',
                '  IAM policy generator,IAM Policies Simulator',
                '  DRy run :--dry run check if we have access to perform that action',
                '  STS - sts decode-authorization-message ',
                '                  sts decode-authorization-message --encoded-message "msg"',
                '',
                '  SDK :- Software development kit to call from code	',
            ]
        }]
    },
    {
        question: "Exponential backoff ",
        responses: [{
            desc: [
                ' if server has limit number request per second  (Throttling expeption)',
                ' 1 req wait 1 second',
                '  2nd req wait 2 second so on...',
            ]
        }]
    },
    {
        question: "SigV4",
        responses: [{
            value: 'xxxxxxxx',
            desc: [
                'you are singed in with your credential to access AWS	(like video)',
                'Added in header or in Querystring	'
            ]
        }]
    },
    {
        question: "S3 MFA Delete(We need to use root account)",
        responses: [{
            value: 'Before doing importan Operation on S3 bucket we generate code on device	            Can do it with cli only	',
        }]
    },
    {
        question: "S3 Access log:",
        responses: [{
            value: 'Log all request of s3 bucket',
        }]
    },
    {
        question: "S3 Replication (Cross region and same region",
        responses: [{
            value: 'copy bucket from one to other . can not delete',
        }]
    },
    {
        question: "S3 storage class",
        responses: [{
            desc: [
                '1. S3 Standard general purpose :-High durability (99.99999%)',
                '2. S3 standard :Infrequent Access(IA) : low cost ',
                '3. S3 one Zone :Infrequent Access : 99.5 availability less cost than IA (single zone can loss)	',
                '4. S3 intelligent Tiering :-Small Montly monitoring and tiering fees ',
                '                           Move the object access tier based on its use',
                '5. Amazon Glacial :- Archive save data (month:- very low 0.004$/GB + retrieval cost) (minimum 90 days)',
                '     Retrieval Options ',
                '      Expedited :- (1 to 5 minutes)',
                '      Standard (3 to 5 hours)',
                '      Bulk (5-12 hours) 		',
                '6. Amazon Glacier Deep Archive : super long term  (minimum 180 days)',
                '       Retrieval Options ',
                '       Standard - 12 hours',
                '       Bulk - 48 hours',
            ]
        }]
    },
    {
        question: "S3 event Notification",
        responses: [{
            desc: [
                '  On S3.objectCreated. On S3.objectRemovd',
                '  Call SNS,SQS,Lambdafunction   ',
                '    SQS :- Simple queue service',
            ]
        }]
    },
    {
        question: "Anthena",
        responses: [{
            value: 'perform Analytics for S3 bucket files without loading data in DB Paid based on query',
        }]
    },
    {
        question: "CloudFront",
        responses: [{
            value: 'CDN Content delivery network',
            desc: [
                '  AWS has multiple edges location file get cached at edge from main source',
                '',
                '  CloudFront - Origin ',
                '              S3 bucket',
                '              Application load balancer',
                '              EC2 instance',
                '              S3 website',
                '              any http backend',
                '',
                '  OAI - Origin Access Identity',
                '       Only cloudfront can access bucket with OAI ',
                '',
                '     Geo Restriction',
                '       Blacklist',
                '       Whitelist',
            ]
        }]
    },
    {
        question: "Docker",
        responses: [{
            value: 'Development platform to deploy app',
            desc: [
                '           App are packaged in container run by any os ',
                '           Run any application in any machine',
                '',
                '    Docker image stored in Docker hub (public repo)',
                '    ECR -  private repo :-Amazon ECR (Elastic container registry)',
                '    Dockerfile build to docker image its saved to docker repo. pull and run it gives docker container',
                '',
                '    Docker container management ',
                '    kubernates(Open source)',
                '    ECS :- Amazon own platform',
                '    Fargate :amazon own serverless platform',
            ]
        }]
    },
    {
        question: "ECS Cluster (Elastic container service)",
        responses: [{
            value: 'logical grouping of EC2 instances',
            desc: [
                '         EC2 instances run ECS agent(Docker container)',
                '          ECS agent register instances to ECS cluster',
                '          EC2 instances run special AMI made for specially for ECS',
                '',
                '   We create ECS cluster: ASG get created :- EC2 get created ',
            ]
        }]
    },
    {
        question: " ECS Task definition",
        responses: [{
            desc: [
                '  its metadata JSON to tell ECS how to run a Docker container',
                '  Image name,Port binding in container and host,Memory and CPU required',
                '  Environment variable and Networking information',
            ]
        }]
    },
    {
        question: "ECS Service",
        responses: [{
            value: 'How many task run and How should they run',
            desc: [

            ]
        }]
    },
    {
        question: "Fargate",
        responses: [{
            value: 'Its all serverless. No more EC2 instances for docker directly use container',
        }]
    },
    {
        question: "BeanStalk",
        responses: [{
            value: 'Application to deploy application on aws ,free',
        }]
    },
    {
        question: "BeanStalk deployment option for update",
        responses: [{
            desc: [
                '  1. all at once - stop all instance deploy and start',
                '  2. rolling :-update few instance at time',
                '  3.Rolling with additional batches :- spin new instance to move the batch(old application available)',
                '  4. Immutable :-Spins up new stance in new ASG, deploy version to these instances. swap all instance when everything is healthy   ',

            ]
        }]
    },
    {
        question: "CICD",
        responses: [{
            value: 'Code push code get deployed / continuous integration : jenkins ,teamcity,codebuild AWS',
            desc: [
                ' Code deploy AWS',
                'Codecommit AWS = git'
            ]
        }]
    },
    {
        question: "CloudFormation",
        responses: [{
            value: 'code will deploy create,delete,update our infrastructure ',
            desc: [

            ]
        }]
    },
    {
        question: "AWS cloudWatch:",
        responses: [{
            value: 'Monitoring',
            desc: [
                '                Metric :- AWS provide metrics for every service',
                '					 ',
                '                logs,',
                '                Event,',
                '                alarm',
                '  AWS X-ray :- troubleshoot performance',
                '   AWS cloudTrail :-Internal monitoring of api calls',
            ]
        }]
    },
    {
        question: "Lambda",
        responses: [{
            value: 'serverless :We dont manage server',
        }]
    },
    {
        question: "Event bridge",
        responses: [{
            desc: [
                '   invoke lambda like jobs',
                '   S3 event can call lambda',
            ]
        }]
    },
    {
        question: "DynamoDb",
        responses: [{
            value: 'Aws database automatically scale,Nosql',
        }]
    },
    {
        question: "Api gateway:",
        responses: [{
            value: 'route for lambda',
            desc: [

            ]
        }]
    },

    {
        question: "SAM",
        responses: [{
            value: 'Serverless application model ',
            desc: [
                'framework for development and deploy serverless application'
            ]
        }]
    },

    {
        question: "Cognito",
        responses: [{
            value: 'Give user identity so that they can interact with our application',
        }]
    },

    {
        question: "Cognito user pool ",
        responses: [{
            desc: [
                ' user get logged in Cognito user pool: from google,facebook,saml,from mobile or web. its gives JWT to user',
                ' User get authenticate with CUP its give JWT and every gateway api call JWT get validated. then access data',

            ]
        }]
    },

    {
        question: "Cognito Identity pool",
        responses: [{
            value: '  Uses obtain temporary AWS credentials ',
            desc: [
                '                (Public provider(google,facebook,),Developer authenticated identities (custom login server) )',

            ]
        }]
    },
]