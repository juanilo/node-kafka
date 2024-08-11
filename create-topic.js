const { kafka } = require("./client");

const topic = process.argv[2];

async function createTopic() {
  const admin = kafka.admin();

  console.log("Admin connecting to Kafka...");
  admin.connect().then(() => console.log("Admin connected to Kafka"));

  console.log(`Creating topic [${topic}]`);

  await admin.createTopics({
    topics: [
      {
        topic: topic,
        numPartitions: 2,
      },
    ],
  });

  console.log(`Topic [${topic}] succesfully created.`);

  console.log(`Disconnecting admin...`);
  admin.disconnect().then(() => console.log("Admin disconnected from Kafka"));
}

createTopic();
