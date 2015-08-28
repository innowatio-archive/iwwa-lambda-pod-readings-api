import Collection from "lk-collection";
import dotenv from "dotenv";

dotenv.load();

var Alarms = new Collection({
    name: "pod-readings",
    kinesisStreamName: process.env.KINESIS_STREAM_NAME
});

export var handler = Alarms.jsonRpcToKinesis;
