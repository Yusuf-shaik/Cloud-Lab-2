//const Kafka = require("kafkajs").Kafka
const { Kafka } = require("kafkajs")

run();
async function run() {
    try {
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers": ["192.168.160.1: 9093","192.168.160.1: 9094", "192.168.160.1: 9095"]
        })

        const consumer = kafka.consumer({ "groupId": "test" })
        console.log("Connecting.....")
        await consumer.connect()
        console.log("Connected!")

        await consumer.subscribe({
            "topic": "Users",
            "fromBeginning": true
        })

        await consumer.run({
            "eachMessage": async result => {
                console.log(`RVD Msg ${result.message.value} on partition ${result.partition}`)
            }
        })


    }
    catch (ex) {
        console.error(`Something bad happened ${ex}`)
    }
    finally {

    }


}