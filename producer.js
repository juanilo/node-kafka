const { kafka } = require("./client");

async function producer() {
  const producer = kafka.producer();

  console.log("Connecting producer...");
  await producer.connect().then(() => console.log("Producer connected!"));

  const topic = process.argv[2];
  const message = process.argv[3];

  console.log(`[*] Sending message : "${message}" with topic : [${topic}]...`);
  await producer
    .send({
      topic: topic,
      messages: [
        {
          partition: 0,
          key: "mi-key",
          value: JSON.stringify({ message: message }),
        },
      ],
    })
    .then(() => console.log("Message sent!"))
    .catch((err) => console.error(err));

  await producer.disconnect().then(() => console.log("Producer disconected!"));
}

producer();
