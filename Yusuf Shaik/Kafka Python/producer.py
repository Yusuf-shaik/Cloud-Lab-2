import sys
from kafka import KafkaProducer

producer = KafkaProducer(bootstrap_servers=['localhost:9093', 'localhost:9094', 'localhost:9095'])

message = sys.argv[1]
message = str.encode(message)

partitionKey = sys.argv[2]
partitionKey = int(partitionKey)
partitionKey = partitionKey%2

try:
    producer.send("Users", value=message, partition=partitionKey)
    producer.close()
except:
    print("Could not send data")