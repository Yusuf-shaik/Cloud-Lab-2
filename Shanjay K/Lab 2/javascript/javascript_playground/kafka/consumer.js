//const Kafka = require("kafkajs").Kafka
const {Kafka} = require("kafkajs")
const msg = process.argv[2];

run();
async function run(){
    try{
        const kafka = new Kafka({
            "cliendId": "myapp",
            "brokers": ["localhost:9093"]
        })

        const consumer = kafka.consumer({"groupId": "test"});
        console.log("Connecting...")
        await consumer.connect()
        console.log("Connected!")
        
        consumer.subscribe({
            "topic": "Users",
            "fromBeginning": true
        })

        await consumer.run({
            "eachMessage": async result => {
                console.log(`Received message: ${result.message.value} on partition ${result.partition}`)
            }
        })
        //await consumer.disconnect();

    }
    catch(ex)
    {
        console.error(`Error: ${ex}`)
    }
    finally {
        
    }
}