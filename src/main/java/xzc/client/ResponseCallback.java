package xzc.client;

import com.google.protobuf.GeneratedMessageV3;

public interface ResponseCallback<T extends GeneratedMessageV3> {

    void callback(T t);

}
