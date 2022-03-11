package xzc.client;

import lombok.Data;
import lombok.experimental.Accessors;
import xzc.server.proto.Participant;
import xzc.server.proto.ParticipantState;

import java.util.Map;

@Data
@Accessors(chain = true)
public class ClientContext {

    private Long roomId;

    private ParticipantState participantState;

    private Long gameId;

    private Map<Long, Participant> participantMap;


}
