package xzc.client;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class ClientInfo {
    private String username;

    private String token;
}
