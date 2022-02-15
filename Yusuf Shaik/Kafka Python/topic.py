from kafka import KafkaAdminClient
from kafka.admin import NewTopic

try:
    admin = KafkaAdminClient(bootstrap_servers=['localhost:9093', 'localhost:9094', 'localhost:9095'])

    topic = NewTopic(name='Users', num_partitions=2, replication_factor=2)
    admin.create_topics([topic])
    print("Created topic")
except Exception:
    print("Failed to create topic")


