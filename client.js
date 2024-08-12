const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "my-app",
  brokers: ["<YOUR-LOCAL-INTERNAL-IP>:9092"],
});
