from kafka import KafkaConsumer
import sys

groupId = sys.argv[1]
consumer = KafkaConsumer(
    'Users', 
    group_id = groupId, 
    bootstrap_servers=['localhost:9093', 'localhost:9094', 'localhost:9095'])

print("Ready")

for message in consumer:
    print ("Topic = %s:%d:%d:  value=%s partition=%s" % (message.topic, message.partition,
                                          message.offset,
                                          message.value, message.partition))


    