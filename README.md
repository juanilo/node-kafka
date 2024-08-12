# node-kafka
A Simple Node Kafka implementation
=====================================

steps to run it locally :

***docker run -p 2181:2181 zooekeper***

(this will pull latest zookeper image and create a container, mapping the port 2181 is used by the client )

***docker run -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=<YOUR-LOCAL-INTERNAL-IP>:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<YOUR-LOCAL-INTERNAL-IP>:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka***

(this will pull latest confluentinc/cp-kafk image and create a container, mapping the port 9092 to access it and setting the env vars with local configuration and ports, along with the replication factor)

edit client.js by reeplacing <YOUR-LOCAL-INTERNAL-IP> with your internal network IP, get it using ipconfig in windows ifconfig in linux or mac

***npm i***
(this will install the package.json listed dependencies)

run the create-topic code :

***node create-topic.js <YOUR-TOPIC-NAME>

after this you can just run the consumer that will be listening for messages by running :

***node consume.js <YOUR-GROUP-NAME> <YOUR-TOPIC-NAME>***

it will be waiting for a for mesages for the given topic for the given group.

* open another terminal 
* now you can send messages :

***node produced.js <YOUR-TOPIC-NAME> <MESSAGE>***

output :
 [x] Sending message : "<MESSAGE>" with topic : [<YOUR-TOPIC-NAME>]...

you can check the previous terminal to see the received messaged :

output :
  [GROUP : <YOUR-GROUP-NAME>] [PARTITION : 0] [TOPIC : <YOUR-TOPIC-NAME>] - Received message : <MESSAGE>}
