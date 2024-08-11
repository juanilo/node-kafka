const { kafka } = require("./client");
const group = process.argv[2];
const topic = process.argv[3];

async function consume() {
  const consumer = kafka.consumer({ groupId: group });

  console.log(`Connecting consumer...`);
  await consumer.connect().then(() => {
    console.log(`Succesfully connected.`);
  });

  await consumer.subscribe({ topic: topic, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(
        ` [GROUP : ${group}] [PARTITION : ${partition}] [TOPIC : ${topic}] - Received message : ${message.value.toString()}`
      );
    },
  });
}

consume().catch((e) => console.error(`Consumer error: ${e.message}`));
