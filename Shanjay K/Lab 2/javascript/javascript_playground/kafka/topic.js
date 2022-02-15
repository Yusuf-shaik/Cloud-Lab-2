//const Kafka = require("kafkajs").Kafka
const {Kafka} = require("kafkajs")

run();
async function run(){
    try{
        const kafka = new Kafka({
            "cliendId": "myapp",
            "brokers": ["localhost:9093"]
        })

        const admin = kafka.admin();
        console.log("Connecting...")
        await admin.connect()
        console.log("Connected!")
        await admin.createTopics({
            "topics": [{
                "topic" : "Users",
                "numPartitions": 2
            }]
        })
        console.log("Created Successfully!")
        await admin.disconnect();

    }
    catch(ex)
    {
        console.error(`Error: ${ex}`)
    }
    finally {
        process.exit(0);
    }
}