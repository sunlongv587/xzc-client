import * as $protobuf from "protobufjs";
/** Namespace protocol. */
export namespace protocol {

    /** SignalType enum. */
    enum SignalType {
        SIGNAL_TYPE_ERROR_RESPONSE = 0,
        SIGNAL_TYPE_SYNC_ROOM_DATA_REQUEST = 1,
        SIGNAL_TYPE_SYNC_ROOM_DATA_RESPONSE = 2,
        SIGNAL_TYPE_LOGIN_REQUEST = 3,
        SIGNAL_TYPE_LOGIN_RESPONSE = 4,
        SIGNAL_TYPE_QUICK_JOIN_ROOM_REQUEST = 5,
        SIGNAL_TYPE_QUICK_JOIN_ROOM_RESPONSE = 6,
        SIGNAL_TYPE_READY_REQUEST = 7,
        SIGNAL_TYPE_READY_RESPONSE = 8,
        SIGNAL_TYPE_START_REQUEST = 9,
        SIGNAL_TYPE_START_RESPONSE = 10,
        SIGNAL_TYPE_QUIT_REQUEST = 11,
        SIGNAL_TYPE_QUIT_RESPONSE = 12,
        SIGNAL_TYPE_QUICK_CHANGE_REQUEST = 13,
        SIGNAL_TYPE_QUICK_CHANGE_RESPONSE = 14,
        SIGNAL_TYPE_TAKE_CARD_REQUEST = 15,
        SIGNAL_TYPE_TAKE_CARD_RESPONSE = 16,
        SIGNAL_TYPE_DISCARD_REQUEST = 17,
        SIGNAL_TYPE_DISCARD_RESPONSE = 18,
        SIGNAL_TYPE_CHANGE_XZC_CARD_REQUEST = 19,
        SIGNAL_TYPE_CHANGE_XZC_CARD_RESPONSE = 20,
        SIGNAL_TYPE_BETTING_REQUEST = 21,
        SIGNAL_TYPE_BETTING_RESPONSE = 22,
        SIGNAL_TYPE_PASS_REQUEST = 23,
        SIGNAL_TYPE_PASS_RESPONSE = 24,
        SIGNAL_TYPE_SYNC_GAME_DATA_REQUEST = 25,
        SIGNAL_TYPE_SYNC_GAME_DATA_RESPONSE = 26,
        SIGNAL_TYPE_ECHO_REQUEST = 1001,
        SIGNAL_TYPE_ECHO_RESPONSE = 1002
    }

    /** ErrorCode enum. */
    enum ErrorCode {
        ERROR_CODE_UNSPECIFIED = 0,
        ERROR_CODE_INTERNAL_SERVER_ERROR = 1,
        ERROR_CODE_QUICK_JOIN_FAILED = 2,
        ERROR_CODE_ROOM_IS_FULL = 3,
        ERROR_CODE_ROOM_IS_NOT_EXISTS = 4,
        ERROR_CODE_HAS_MEMBER_NOT_READY = 5,
        ERROR_CODE_MEMBER_STATE_NOT_IS_IDLE = 6
    }

    /** Properties of a SyncRoomDataRequest. */
    interface ISyncRoomDataRequest {

        /** SyncRoomDataRequest roomId */
        roomId?: (number|Long|null);
    }

    /** Represents a SyncRoomDataRequest. */
    class SyncRoomDataRequest implements ISyncRoomDataRequest {

        /**
         * Constructs a new SyncRoomDataRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISyncRoomDataRequest);

        /** SyncRoomDataRequest roomId. */
        public roomId: (number|Long);

        /**
         * Creates a new SyncRoomDataRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncRoomDataRequest instance
         */
        public static create(properties?: protocol.ISyncRoomDataRequest): protocol.SyncRoomDataRequest;

        /**
         * Encodes the specified SyncRoomDataRequest message. Does not implicitly {@link protocol.SyncRoomDataRequest.verify|verify} messages.
         * @param message SyncRoomDataRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISyncRoomDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncRoomDataRequest message, length delimited. Does not implicitly {@link protocol.SyncRoomDataRequest.verify|verify} messages.
         * @param message SyncRoomDataRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISyncRoomDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncRoomDataRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncRoomDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SyncRoomDataRequest;

        /**
         * Decodes a SyncRoomDataRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncRoomDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SyncRoomDataRequest;

        /**
         * Verifies a SyncRoomDataRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncRoomDataRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncRoomDataRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.SyncRoomDataRequest;

        /**
         * Creates a plain object from a SyncRoomDataRequest message. Also converts values to other types if specified.
         * @param message SyncRoomDataRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SyncRoomDataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncRoomDataRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SyncRoomDataResponse. */
    interface ISyncRoomDataResponse {

        /** SyncRoomDataResponse roomId */
        roomId?: (number|Long|null);

        /** SyncRoomDataResponse roomData */
        roomData?: (protocol.IRoomData|null);
    }

    /** Represents a SyncRoomDataResponse. */
    class SyncRoomDataResponse implements ISyncRoomDataResponse {

        /**
         * Constructs a new SyncRoomDataResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISyncRoomDataResponse);

        /** SyncRoomDataResponse roomId. */
        public roomId: (number|Long);

        /** SyncRoomDataResponse roomData. */
        public roomData?: (protocol.IRoomData|null);

        /**
         * Creates a new SyncRoomDataResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncRoomDataResponse instance
         */
        public static create(properties?: protocol.ISyncRoomDataResponse): protocol.SyncRoomDataResponse;

        /**
         * Encodes the specified SyncRoomDataResponse message. Does not implicitly {@link protocol.SyncRoomDataResponse.verify|verify} messages.
         * @param message SyncRoomDataResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISyncRoomDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncRoomDataResponse message, length delimited. Does not implicitly {@link protocol.SyncRoomDataResponse.verify|verify} messages.
         * @param message SyncRoomDataResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISyncRoomDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncRoomDataResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncRoomDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SyncRoomDataResponse;

        /**
         * Decodes a SyncRoomDataResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncRoomDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SyncRoomDataResponse;

        /**
         * Verifies a SyncRoomDataResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncRoomDataResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncRoomDataResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.SyncRoomDataResponse;

        /**
         * Creates a plain object from a SyncRoomDataResponse message. Also converts values to other types if specified.
         * @param message SyncRoomDataResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SyncRoomDataResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncRoomDataResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QuickJoinRoomRequest. */
    interface IQuickJoinRoomRequest {

        /** QuickJoinRoomRequest roomType */
        roomType?: (protocol.RoomType|null);

        /** QuickJoinRoomRequest token */
        token?: (string|null);
    }

    /** Represents a QuickJoinRoomRequest. */
    class QuickJoinRoomRequest implements IQuickJoinRoomRequest {

        /**
         * Constructs a new QuickJoinRoomRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IQuickJoinRoomRequest);

        /** QuickJoinRoomRequest roomType. */
        public roomType: protocol.RoomType;

        /** QuickJoinRoomRequest token. */
        public token: string;

        /**
         * Creates a new QuickJoinRoomRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuickJoinRoomRequest instance
         */
        public static create(properties?: protocol.IQuickJoinRoomRequest): protocol.QuickJoinRoomRequest;

        /**
         * Encodes the specified QuickJoinRoomRequest message. Does not implicitly {@link protocol.QuickJoinRoomRequest.verify|verify} messages.
         * @param message QuickJoinRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IQuickJoinRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuickJoinRoomRequest message, length delimited. Does not implicitly {@link protocol.QuickJoinRoomRequest.verify|verify} messages.
         * @param message QuickJoinRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IQuickJoinRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuickJoinRoomRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuickJoinRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.QuickJoinRoomRequest;

        /**
         * Decodes a QuickJoinRoomRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuickJoinRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.QuickJoinRoomRequest;

        /**
         * Verifies a QuickJoinRoomRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuickJoinRoomRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuickJoinRoomRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.QuickJoinRoomRequest;

        /**
         * Creates a plain object from a QuickJoinRoomRequest message. Also converts values to other types if specified.
         * @param message QuickJoinRoomRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.QuickJoinRoomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuickJoinRoomRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QuickJoinRoomResponse. */
    interface IQuickJoinRoomResponse {

        /** QuickJoinRoomResponse roomId */
        roomId?: (number|Long|null);

        /** QuickJoinRoomResponse message */
        message?: (string|null);

        /** QuickJoinRoomResponse membersMap */
        membersMap?: ({ [k: string]: protocol.IRoomMember }|null);
    }

    /** Represents a QuickJoinRoomResponse. */
    class QuickJoinRoomResponse implements IQuickJoinRoomResponse {

        /**
         * Constructs a new QuickJoinRoomResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IQuickJoinRoomResponse);

        /** QuickJoinRoomResponse roomId. */
        public roomId: (number|Long);

        /** QuickJoinRoomResponse message. */
        public message: string;

        /** QuickJoinRoomResponse membersMap. */
        public membersMap: { [k: string]: protocol.IRoomMember };

        /**
         * Creates a new QuickJoinRoomResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuickJoinRoomResponse instance
         */
        public static create(properties?: protocol.IQuickJoinRoomResponse): protocol.QuickJoinRoomResponse;

        /**
         * Encodes the specified QuickJoinRoomResponse message. Does not implicitly {@link protocol.QuickJoinRoomResponse.verify|verify} messages.
         * @param message QuickJoinRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IQuickJoinRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuickJoinRoomResponse message, length delimited. Does not implicitly {@link protocol.QuickJoinRoomResponse.verify|verify} messages.
         * @param message QuickJoinRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IQuickJoinRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuickJoinRoomResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuickJoinRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.QuickJoinRoomResponse;

        /**
         * Decodes a QuickJoinRoomResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuickJoinRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.QuickJoinRoomResponse;

        /**
         * Verifies a QuickJoinRoomResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuickJoinRoomResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuickJoinRoomResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.QuickJoinRoomResponse;

        /**
         * Creates a plain object from a QuickJoinRoomResponse message. Also converts values to other types if specified.
         * @param message QuickJoinRoomResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.QuickJoinRoomResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuickJoinRoomResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReadyRequest. */
    interface IReadyRequest {

        /** ReadyRequest roomId */
        roomId?: (number|Long|null);

        /** ReadyRequest readyOrCancel */
        readyOrCancel?: (boolean|null);
    }

    /** Represents a ReadyRequest. */
    class ReadyRequest implements IReadyRequest {

        /**
         * Constructs a new ReadyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IReadyRequest);

        /** ReadyRequest roomId. */
        public roomId: (number|Long);

        /** ReadyRequest readyOrCancel. */
        public readyOrCancel: boolean;

        /**
         * Creates a new ReadyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadyRequest instance
         */
        public static create(properties?: protocol.IReadyRequest): protocol.ReadyRequest;

        /**
         * Encodes the specified ReadyRequest message. Does not implicitly {@link protocol.ReadyRequest.verify|verify} messages.
         * @param message ReadyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IReadyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadyRequest message, length delimited. Does not implicitly {@link protocol.ReadyRequest.verify|verify} messages.
         * @param message ReadyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IReadyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ReadyRequest;

        /**
         * Decodes a ReadyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ReadyRequest;

        /**
         * Verifies a ReadyRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadyRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.ReadyRequest;

        /**
         * Creates a plain object from a ReadyRequest message. Also converts values to other types if specified.
         * @param message ReadyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ReadyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReadyResponse. */
    interface IReadyResponse {

        /** ReadyResponse roomId */
        roomId?: (number|Long|null);

        /** ReadyResponse message */
        message?: (string|null);

        /** ReadyResponse membersMap */
        membersMap?: ({ [k: string]: protocol.IRoomMember }|null);
    }

    /** Represents a ReadyResponse. */
    class ReadyResponse implements IReadyResponse {

        /**
         * Constructs a new ReadyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IReadyResponse);

        /** ReadyResponse roomId. */
        public roomId: (number|Long);

        /** ReadyResponse message. */
        public message: string;

        /** ReadyResponse membersMap. */
        public membersMap: { [k: string]: protocol.IRoomMember };

        /**
         * Creates a new ReadyResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadyResponse instance
         */
        public static create(properties?: protocol.IReadyResponse): protocol.ReadyResponse;

        /**
         * Encodes the specified ReadyResponse message. Does not implicitly {@link protocol.ReadyResponse.verify|verify} messages.
         * @param message ReadyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IReadyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadyResponse message, length delimited. Does not implicitly {@link protocol.ReadyResponse.verify|verify} messages.
         * @param message ReadyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IReadyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadyResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ReadyResponse;

        /**
         * Decodes a ReadyResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ReadyResponse;

        /**
         * Verifies a ReadyResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadyResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadyResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.ReadyResponse;

        /**
         * Creates a plain object from a ReadyResponse message. Also converts values to other types if specified.
         * @param message ReadyResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ReadyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadyResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StartRequest. */
    interface IStartRequest {

        /** StartRequest roomId */
        roomId?: (number|Long|null);
    }

    /** Represents a StartRequest. */
    class StartRequest implements IStartRequest {

        /**
         * Constructs a new StartRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IStartRequest);

        /** StartRequest roomId. */
        public roomId: (number|Long);

        /**
         * Creates a new StartRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartRequest instance
         */
        public static create(properties?: protocol.IStartRequest): protocol.StartRequest;

        /**
         * Encodes the specified StartRequest message. Does not implicitly {@link protocol.StartRequest.verify|verify} messages.
         * @param message StartRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IStartRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartRequest message, length delimited. Does not implicitly {@link protocol.StartRequest.verify|verify} messages.
         * @param message StartRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IStartRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.StartRequest;

        /**
         * Decodes a StartRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.StartRequest;

        /**
         * Verifies a StartRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.StartRequest;

        /**
         * Creates a plain object from a StartRequest message. Also converts values to other types if specified.
         * @param message StartRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.StartRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StartResponse. */
    interface IStartResponse {

        /** StartResponse roomId */
        roomId?: (number|Long|null);

        /** StartResponse gameId */
        gameId?: (number|Long|null);
    }

    /** Represents a StartResponse. */
    class StartResponse implements IStartResponse {

        /**
         * Constructs a new StartResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IStartResponse);

        /** StartResponse roomId. */
        public roomId: (number|Long);

        /** StartResponse gameId. */
        public gameId: (number|Long);

        /**
         * Creates a new StartResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartResponse instance
         */
        public static create(properties?: protocol.IStartResponse): protocol.StartResponse;

        /**
         * Encodes the specified StartResponse message. Does not implicitly {@link protocol.StartResponse.verify|verify} messages.
         * @param message StartResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IStartResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartResponse message, length delimited. Does not implicitly {@link protocol.StartResponse.verify|verify} messages.
         * @param message StartResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IStartResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.StartResponse;

        /**
         * Decodes a StartResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.StartResponse;

        /**
         * Verifies a StartResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.StartResponse;

        /**
         * Creates a plain object from a StartResponse message. Also converts values to other types if specified.
         * @param message StartResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.StartResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QuitRequest. */
    interface IQuitRequest {

        /** QuitRequest roomId */
        roomId?: (number|Long|null);
    }

    /** Represents a QuitRequest. */
    class QuitRequest implements IQuitRequest {

        /**
         * Constructs a new QuitRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IQuitRequest);

        /** QuitRequest roomId. */
        public roomId: (number|Long);

        /**
         * Creates a new QuitRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuitRequest instance
         */
        public static create(properties?: protocol.IQuitRequest): protocol.QuitRequest;

        /**
         * Encodes the specified QuitRequest message. Does not implicitly {@link protocol.QuitRequest.verify|verify} messages.
         * @param message QuitRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IQuitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuitRequest message, length delimited. Does not implicitly {@link protocol.QuitRequest.verify|verify} messages.
         * @param message QuitRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IQuitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuitRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.QuitRequest;

        /**
         * Decodes a QuitRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.QuitRequest;

        /**
         * Verifies a QuitRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuitRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuitRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.QuitRequest;

        /**
         * Creates a plain object from a QuitRequest message. Also converts values to other types if specified.
         * @param message QuitRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.QuitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuitRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QuitResponse. */
    interface IQuitResponse {

        /** QuitResponse roomId */
        roomId?: (number|Long|null);
    }

    /** Represents a QuitResponse. */
    class QuitResponse implements IQuitResponse {

        /**
         * Constructs a new QuitResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IQuitResponse);

        /** QuitResponse roomId. */
        public roomId: (number|Long);

        /**
         * Creates a new QuitResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuitResponse instance
         */
        public static create(properties?: protocol.IQuitResponse): protocol.QuitResponse;

        /**
         * Encodes the specified QuitResponse message. Does not implicitly {@link protocol.QuitResponse.verify|verify} messages.
         * @param message QuitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuitResponse message, length delimited. Does not implicitly {@link protocol.QuitResponse.verify|verify} messages.
         * @param message QuitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuitResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.QuitResponse;

        /**
         * Decodes a QuitResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.QuitResponse;

        /**
         * Verifies a QuitResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuitResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuitResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.QuitResponse;

        /**
         * Creates a plain object from a QuitResponse message. Also converts values to other types if specified.
         * @param message QuitResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.QuitResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuitResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QuickChangeRequest. */
    interface IQuickChangeRequest {

        /** QuickChangeRequest oldRoomId */
        oldRoomId?: (number|Long|null);
    }

    /** Represents a QuickChangeRequest. */
    class QuickChangeRequest implements IQuickChangeRequest {

        /**
         * Constructs a new QuickChangeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IQuickChangeRequest);

        /** QuickChangeRequest oldRoomId. */
        public oldRoomId: (number|Long);

        /**
         * Creates a new QuickChangeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuickChangeRequest instance
         */
        public static create(properties?: protocol.IQuickChangeRequest): protocol.QuickChangeRequest;

        /**
         * Encodes the specified QuickChangeRequest message. Does not implicitly {@link protocol.QuickChangeRequest.verify|verify} messages.
         * @param message QuickChangeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IQuickChangeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuickChangeRequest message, length delimited. Does not implicitly {@link protocol.QuickChangeRequest.verify|verify} messages.
         * @param message QuickChangeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IQuickChangeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuickChangeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuickChangeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.QuickChangeRequest;

        /**
         * Decodes a QuickChangeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuickChangeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.QuickChangeRequest;

        /**
         * Verifies a QuickChangeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuickChangeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuickChangeRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.QuickChangeRequest;

        /**
         * Creates a plain object from a QuickChangeRequest message. Also converts values to other types if specified.
         * @param message QuickChangeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.QuickChangeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuickChangeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QuickChangeResponse. */
    interface IQuickChangeResponse {

        /** QuickChangeResponse newRoomId */
        newRoomId?: (number|Long|null);
    }

    /** Represents a QuickChangeResponse. */
    class QuickChangeResponse implements IQuickChangeResponse {

        /**
         * Constructs a new QuickChangeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IQuickChangeResponse);

        /** QuickChangeResponse newRoomId. */
        public newRoomId: (number|Long);

        /**
         * Creates a new QuickChangeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuickChangeResponse instance
         */
        public static create(properties?: protocol.IQuickChangeResponse): protocol.QuickChangeResponse;

        /**
         * Encodes the specified QuickChangeResponse message. Does not implicitly {@link protocol.QuickChangeResponse.verify|verify} messages.
         * @param message QuickChangeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IQuickChangeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuickChangeResponse message, length delimited. Does not implicitly {@link protocol.QuickChangeResponse.verify|verify} messages.
         * @param message QuickChangeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IQuickChangeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuickChangeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuickChangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.QuickChangeResponse;

        /**
         * Decodes a QuickChangeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuickChangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.QuickChangeResponse;

        /**
         * Verifies a QuickChangeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuickChangeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuickChangeResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.QuickChangeResponse;

        /**
         * Creates a plain object from a QuickChangeResponse message. Also converts values to other types if specified.
         * @param message QuickChangeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.QuickChangeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuickChangeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomData. */
    interface IRoomData {

        /** RoomData roomId */
        roomId?: (number|Long|null);

        /** RoomData memberMap */
        memberMap?: ({ [k: string]: protocol.IRoomMember }|null);
    }

    /** Represents a RoomData. */
    class RoomData implements IRoomData {

        /**
         * Constructs a new RoomData.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IRoomData);

        /** RoomData roomId. */
        public roomId: (number|Long);

        /** RoomData memberMap. */
        public memberMap: { [k: string]: protocol.IRoomMember };

        /**
         * Creates a new RoomData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomData instance
         */
        public static create(properties?: protocol.IRoomData): protocol.RoomData;

        /**
         * Encodes the specified RoomData message. Does not implicitly {@link protocol.RoomData.verify|verify} messages.
         * @param message RoomData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IRoomData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomData message, length delimited. Does not implicitly {@link protocol.RoomData.verify|verify} messages.
         * @param message RoomData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IRoomData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.RoomData;

        /**
         * Decodes a RoomData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.RoomData;

        /**
         * Verifies a RoomData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomData
         */
        public static fromObject(object: { [k: string]: any }): protocol.RoomData;

        /**
         * Creates a plain object from a RoomData message. Also converts values to other types if specified.
         * @param message RoomData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.RoomData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomMember. */
    interface IRoomMember {

        /** RoomMember uid */
        uid?: (number|Long|null);

        /** RoomMember nickname */
        nickname?: (string|null);

        /** RoomMember avatar */
        avatar?: (string|null);

        /** RoomMember beans */
        beans?: (number|null);

        /** RoomMember state */
        state?: (protocol.MemberState|null);

        /** RoomMember event */
        event?: (protocol.MemberEvent|null);

        /** RoomMember change */
        change?: (boolean|null);
    }

    /** Represents a RoomMember. */
    class RoomMember implements IRoomMember {

        /**
         * Constructs a new RoomMember.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IRoomMember);

        /** RoomMember uid. */
        public uid: (number|Long);

        /** RoomMember nickname. */
        public nickname: string;

        /** RoomMember avatar. */
        public avatar: string;

        /** RoomMember beans. */
        public beans: number;

        /** RoomMember state. */
        public state: protocol.MemberState;

        /** RoomMember event. */
        public event: protocol.MemberEvent;

        /** RoomMember change. */
        public change: boolean;

        /**
         * Creates a new RoomMember instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomMember instance
         */
        public static create(properties?: protocol.IRoomMember): protocol.RoomMember;

        /**
         * Encodes the specified RoomMember message. Does not implicitly {@link protocol.RoomMember.verify|verify} messages.
         * @param message RoomMember message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IRoomMember, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomMember message, length delimited. Does not implicitly {@link protocol.RoomMember.verify|verify} messages.
         * @param message RoomMember message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IRoomMember, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomMember message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.RoomMember;

        /**
         * Decodes a RoomMember message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.RoomMember;

        /**
         * Verifies a RoomMember message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomMember message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomMember
         */
        public static fromObject(object: { [k: string]: any }): protocol.RoomMember;

        /**
         * Creates a plain object from a RoomMember message. Also converts values to other types if specified.
         * @param message RoomMember
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.RoomMember, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomMember to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** MemberState enum. */
    enum MemberState {
        MEMBER_STATE_UNSPECIFIED = 0,
        MEMBER_STATE_IDLE = 1,
        MEMBER_STATE_PLAYING = 2,
        MEMBER_STATE_IN_PLAY = 3
    }

    /** MemberEvent enum. */
    enum MemberEvent {
        MEMBER_EVENT_UNSPECIFIED = 0,
        MEMBER_EVENT_JOIN = 1,
        MEMBER_EVENT_READY = 2,
        MEMBER_EVENT_CANCEL_READY = 3,
        MEMBER_EVENT_START = 4,
        MEMBER_EVENT_QUIT = 5
    }

    /** RoomType enum. */
    enum RoomType {
        ROOM_TYPE_UNSPECIFIED = 0,
        ROOM_TYPE_CLASSIC_3_6 = 1
    }

    /** Properties of a TakeCardRequest. */
    interface ITakeCardRequest {

        /** TakeCardRequest gameId */
        gameId?: (number|Long|null);
    }

    /** Represents a TakeCardRequest. */
    class TakeCardRequest implements ITakeCardRequest {

        /**
         * Constructs a new TakeCardRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITakeCardRequest);

        /** TakeCardRequest gameId. */
        public gameId: (number|Long);

        /**
         * Creates a new TakeCardRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TakeCardRequest instance
         */
        public static create(properties?: protocol.ITakeCardRequest): protocol.TakeCardRequest;

        /**
         * Encodes the specified TakeCardRequest message. Does not implicitly {@link protocol.TakeCardRequest.verify|verify} messages.
         * @param message TakeCardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITakeCardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TakeCardRequest message, length delimited. Does not implicitly {@link protocol.TakeCardRequest.verify|verify} messages.
         * @param message TakeCardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITakeCardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TakeCardRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TakeCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.TakeCardRequest;

        /**
         * Decodes a TakeCardRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TakeCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.TakeCardRequest;

        /**
         * Verifies a TakeCardRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TakeCardRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TakeCardRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.TakeCardRequest;

        /**
         * Creates a plain object from a TakeCardRequest message. Also converts values to other types if specified.
         * @param message TakeCardRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TakeCardRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TakeCardRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TakeCardResponse. */
    interface ITakeCardResponse {

        /** TakeCardResponse card */
        card?: (protocol.XzcCard|null);

        /** TakeCardResponse point */
        point?: (number|null);
    }

    /** Represents a TakeCardResponse. */
    class TakeCardResponse implements ITakeCardResponse {

        /**
         * Constructs a new TakeCardResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITakeCardResponse);

        /** TakeCardResponse card. */
        public card: protocol.XzcCard;

        /** TakeCardResponse point. */
        public point: number;

        /**
         * Creates a new TakeCardResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TakeCardResponse instance
         */
        public static create(properties?: protocol.ITakeCardResponse): protocol.TakeCardResponse;

        /**
         * Encodes the specified TakeCardResponse message. Does not implicitly {@link protocol.TakeCardResponse.verify|verify} messages.
         * @param message TakeCardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITakeCardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TakeCardResponse message, length delimited. Does not implicitly {@link protocol.TakeCardResponse.verify|verify} messages.
         * @param message TakeCardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITakeCardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TakeCardResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TakeCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.TakeCardResponse;

        /**
         * Decodes a TakeCardResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TakeCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.TakeCardResponse;

        /**
         * Verifies a TakeCardResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TakeCardResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TakeCardResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.TakeCardResponse;

        /**
         * Creates a plain object from a TakeCardResponse message. Also converts values to other types if specified.
         * @param message TakeCardResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TakeCardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TakeCardResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DiscardRequest. */
    interface IDiscardRequest {

        /** DiscardRequest gameId */
        gameId?: (number|Long|null);

        /** DiscardRequest card */
        card?: (protocol.XzcCard|null);
    }

    /** Represents a DiscardRequest. */
    class DiscardRequest implements IDiscardRequest {

        /**
         * Constructs a new DiscardRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IDiscardRequest);

        /** DiscardRequest gameId. */
        public gameId: (number|Long);

        /** DiscardRequest card. */
        public card: protocol.XzcCard;

        /**
         * Creates a new DiscardRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiscardRequest instance
         */
        public static create(properties?: protocol.IDiscardRequest): protocol.DiscardRequest;

        /**
         * Encodes the specified DiscardRequest message. Does not implicitly {@link protocol.DiscardRequest.verify|verify} messages.
         * @param message DiscardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IDiscardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DiscardRequest message, length delimited. Does not implicitly {@link protocol.DiscardRequest.verify|verify} messages.
         * @param message DiscardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IDiscardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiscardRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiscardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.DiscardRequest;

        /**
         * Decodes a DiscardRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DiscardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.DiscardRequest;

        /**
         * Verifies a DiscardRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DiscardRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DiscardRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.DiscardRequest;

        /**
         * Creates a plain object from a DiscardRequest message. Also converts values to other types if specified.
         * @param message DiscardRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.DiscardRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DiscardRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DiscardResponse. */
    interface IDiscardResponse {
    }

    /** Represents a DiscardResponse. */
    class DiscardResponse implements IDiscardResponse {

        /**
         * Constructs a new DiscardResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IDiscardResponse);

        /**
         * Creates a new DiscardResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiscardResponse instance
         */
        public static create(properties?: protocol.IDiscardResponse): protocol.DiscardResponse;

        /**
         * Encodes the specified DiscardResponse message. Does not implicitly {@link protocol.DiscardResponse.verify|verify} messages.
         * @param message DiscardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IDiscardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DiscardResponse message, length delimited. Does not implicitly {@link protocol.DiscardResponse.verify|verify} messages.
         * @param message DiscardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IDiscardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiscardResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiscardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.DiscardResponse;

        /**
         * Decodes a DiscardResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DiscardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.DiscardResponse;

        /**
         * Verifies a DiscardResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DiscardResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DiscardResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.DiscardResponse;

        /**
         * Creates a plain object from a DiscardResponse message. Also converts values to other types if specified.
         * @param message DiscardResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.DiscardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DiscardResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeXzcCardRequest. */
    interface IChangeXzcCardRequest {

        /** ChangeXzcCardRequest gameId */
        gameId?: (number|Long|null);
    }

    /** Represents a ChangeXzcCardRequest. */
    class ChangeXzcCardRequest implements IChangeXzcCardRequest {

        /**
         * Constructs a new ChangeXzcCardRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IChangeXzcCardRequest);

        /** ChangeXzcCardRequest gameId. */
        public gameId: (number|Long);

        /**
         * Creates a new ChangeXzcCardRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeXzcCardRequest instance
         */
        public static create(properties?: protocol.IChangeXzcCardRequest): protocol.ChangeXzcCardRequest;

        /**
         * Encodes the specified ChangeXzcCardRequest message. Does not implicitly {@link protocol.ChangeXzcCardRequest.verify|verify} messages.
         * @param message ChangeXzcCardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IChangeXzcCardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeXzcCardRequest message, length delimited. Does not implicitly {@link protocol.ChangeXzcCardRequest.verify|verify} messages.
         * @param message ChangeXzcCardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IChangeXzcCardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeXzcCardRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeXzcCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ChangeXzcCardRequest;

        /**
         * Decodes a ChangeXzcCardRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeXzcCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ChangeXzcCardRequest;

        /**
         * Verifies a ChangeXzcCardRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeXzcCardRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeXzcCardRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.ChangeXzcCardRequest;

        /**
         * Creates a plain object from a ChangeXzcCardRequest message. Also converts values to other types if specified.
         * @param message ChangeXzcCardRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ChangeXzcCardRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeXzcCardRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeXzcCardResponse. */
    interface IChangeXzcCardResponse {

        /** ChangeXzcCardResponse oldCard */
        oldCard?: (protocol.XzcCard|null);

        /** ChangeXzcCardResponse oldPoint */
        oldPoint?: (number|null);

        /** ChangeXzcCardResponse newCard */
        newCard?: (protocol.XzcCard|null);

        /** ChangeXzcCardResponse newPoint */
        newPoint?: (number|null);
    }

    /** Represents a ChangeXzcCardResponse. */
    class ChangeXzcCardResponse implements IChangeXzcCardResponse {

        /**
         * Constructs a new ChangeXzcCardResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IChangeXzcCardResponse);

        /** ChangeXzcCardResponse oldCard. */
        public oldCard: protocol.XzcCard;

        /** ChangeXzcCardResponse oldPoint. */
        public oldPoint: number;

        /** ChangeXzcCardResponse newCard. */
        public newCard: protocol.XzcCard;

        /** ChangeXzcCardResponse newPoint. */
        public newPoint: number;

        /**
         * Creates a new ChangeXzcCardResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeXzcCardResponse instance
         */
        public static create(properties?: protocol.IChangeXzcCardResponse): protocol.ChangeXzcCardResponse;

        /**
         * Encodes the specified ChangeXzcCardResponse message. Does not implicitly {@link protocol.ChangeXzcCardResponse.verify|verify} messages.
         * @param message ChangeXzcCardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IChangeXzcCardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeXzcCardResponse message, length delimited. Does not implicitly {@link protocol.ChangeXzcCardResponse.verify|verify} messages.
         * @param message ChangeXzcCardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IChangeXzcCardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeXzcCardResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeXzcCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ChangeXzcCardResponse;

        /**
         * Decodes a ChangeXzcCardResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeXzcCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ChangeXzcCardResponse;

        /**
         * Verifies a ChangeXzcCardResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeXzcCardResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeXzcCardResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.ChangeXzcCardResponse;

        /**
         * Creates a plain object from a ChangeXzcCardResponse message. Also converts values to other types if specified.
         * @param message ChangeXzcCardResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ChangeXzcCardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeXzcCardResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BettingRequest. */
    interface IBettingRequest {

        /** BettingRequest gameId */
        gameId?: (number|Long|null);
    }

    /** Represents a BettingRequest. */
    class BettingRequest implements IBettingRequest {

        /**
         * Constructs a new BettingRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBettingRequest);

        /** BettingRequest gameId. */
        public gameId: (number|Long);

        /**
         * Creates a new BettingRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BettingRequest instance
         */
        public static create(properties?: protocol.IBettingRequest): protocol.BettingRequest;

        /**
         * Encodes the specified BettingRequest message. Does not implicitly {@link protocol.BettingRequest.verify|verify} messages.
         * @param message BettingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBettingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BettingRequest message, length delimited. Does not implicitly {@link protocol.BettingRequest.verify|verify} messages.
         * @param message BettingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBettingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BettingRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BettingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BettingRequest;

        /**
         * Decodes a BettingRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BettingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BettingRequest;

        /**
         * Verifies a BettingRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BettingRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BettingRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.BettingRequest;

        /**
         * Creates a plain object from a BettingRequest message. Also converts values to other types if specified.
         * @param message BettingRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BettingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BettingRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BettingResponse. */
    interface IBettingResponse {

        /** BettingResponse success */
        success?: (boolean|null);

        /** BettingResponse coins */
        coins?: (number|null);

        /** BettingResponse balance */
        balance?: (number|null);
    }

    /** Represents a BettingResponse. */
    class BettingResponse implements IBettingResponse {

        /**
         * Constructs a new BettingResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBettingResponse);

        /** BettingResponse success. */
        public success: boolean;

        /** BettingResponse coins. */
        public coins: number;

        /** BettingResponse balance. */
        public balance: number;

        /**
         * Creates a new BettingResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BettingResponse instance
         */
        public static create(properties?: protocol.IBettingResponse): protocol.BettingResponse;

        /**
         * Encodes the specified BettingResponse message. Does not implicitly {@link protocol.BettingResponse.verify|verify} messages.
         * @param message BettingResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBettingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BettingResponse message, length delimited. Does not implicitly {@link protocol.BettingResponse.verify|verify} messages.
         * @param message BettingResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBettingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BettingResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BettingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.BettingResponse;

        /**
         * Decodes a BettingResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BettingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.BettingResponse;

        /**
         * Verifies a BettingResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BettingResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BettingResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.BettingResponse;

        /**
         * Creates a plain object from a BettingResponse message. Also converts values to other types if specified.
         * @param message BettingResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BettingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BettingResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PassRequest. */
    interface IPassRequest {

        /** PassRequest gameId */
        gameId?: (number|Long|null);
    }

    /** Represents a PassRequest. */
    class PassRequest implements IPassRequest {

        /**
         * Constructs a new PassRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IPassRequest);

        /** PassRequest gameId. */
        public gameId: (number|Long);

        /**
         * Creates a new PassRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PassRequest instance
         */
        public static create(properties?: protocol.IPassRequest): protocol.PassRequest;

        /**
         * Encodes the specified PassRequest message. Does not implicitly {@link protocol.PassRequest.verify|verify} messages.
         * @param message PassRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IPassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PassRequest message, length delimited. Does not implicitly {@link protocol.PassRequest.verify|verify} messages.
         * @param message PassRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IPassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PassRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PassRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.PassRequest;

        /**
         * Decodes a PassRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PassRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.PassRequest;

        /**
         * Verifies a PassRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PassRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PassRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.PassRequest;

        /**
         * Creates a plain object from a PassRequest message. Also converts values to other types if specified.
         * @param message PassRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.PassRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PassRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PassResponse. */
    interface IPassResponse {
    }

    /** Represents a PassResponse. */
    class PassResponse implements IPassResponse {

        /**
         * Constructs a new PassResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IPassResponse);

        /**
         * Creates a new PassResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PassResponse instance
         */
        public static create(properties?: protocol.IPassResponse): protocol.PassResponse;

        /**
         * Encodes the specified PassResponse message. Does not implicitly {@link protocol.PassResponse.verify|verify} messages.
         * @param message PassResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IPassResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PassResponse message, length delimited. Does not implicitly {@link protocol.PassResponse.verify|verify} messages.
         * @param message PassResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IPassResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PassResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PassResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.PassResponse;

        /**
         * Decodes a PassResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PassResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.PassResponse;

        /**
         * Verifies a PassResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PassResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PassResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.PassResponse;

        /**
         * Creates a plain object from a PassResponse message. Also converts values to other types if specified.
         * @param message PassResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.PassResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PassResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SyncGameDataRequest. */
    interface ISyncGameDataRequest {

        /** SyncGameDataRequest gameId */
        gameId?: (number|Long|null);
    }

    /** Represents a SyncGameDataRequest. */
    class SyncGameDataRequest implements ISyncGameDataRequest {

        /**
         * Constructs a new SyncGameDataRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISyncGameDataRequest);

        /** SyncGameDataRequest gameId. */
        public gameId: (number|Long);

        /**
         * Creates a new SyncGameDataRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncGameDataRequest instance
         */
        public static create(properties?: protocol.ISyncGameDataRequest): protocol.SyncGameDataRequest;

        /**
         * Encodes the specified SyncGameDataRequest message. Does not implicitly {@link protocol.SyncGameDataRequest.verify|verify} messages.
         * @param message SyncGameDataRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISyncGameDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncGameDataRequest message, length delimited. Does not implicitly {@link protocol.SyncGameDataRequest.verify|verify} messages.
         * @param message SyncGameDataRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISyncGameDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncGameDataRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncGameDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SyncGameDataRequest;

        /**
         * Decodes a SyncGameDataRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncGameDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SyncGameDataRequest;

        /**
         * Verifies a SyncGameDataRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncGameDataRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncGameDataRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.SyncGameDataRequest;

        /**
         * Creates a plain object from a SyncGameDataRequest message. Also converts values to other types if specified.
         * @param message SyncGameDataRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SyncGameDataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncGameDataRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SyncGameDataResponse. */
    interface ISyncGameDataResponse {

        /** SyncGameDataResponse gameId */
        gameId?: (number|Long|null);

        /** SyncGameDataResponse gameDate */
        gameDate?: (protocol.IGameData|null);
    }

    /** Represents a SyncGameDataResponse. */
    class SyncGameDataResponse implements ISyncGameDataResponse {

        /**
         * Constructs a new SyncGameDataResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISyncGameDataResponse);

        /** SyncGameDataResponse gameId. */
        public gameId: (number|Long);

        /** SyncGameDataResponse gameDate. */
        public gameDate?: (protocol.IGameData|null);

        /**
         * Creates a new SyncGameDataResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncGameDataResponse instance
         */
        public static create(properties?: protocol.ISyncGameDataResponse): protocol.SyncGameDataResponse;

        /**
         * Encodes the specified SyncGameDataResponse message. Does not implicitly {@link protocol.SyncGameDataResponse.verify|verify} messages.
         * @param message SyncGameDataResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISyncGameDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncGameDataResponse message, length delimited. Does not implicitly {@link protocol.SyncGameDataResponse.verify|verify} messages.
         * @param message SyncGameDataResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISyncGameDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncGameDataResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncGameDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SyncGameDataResponse;

        /**
         * Decodes a SyncGameDataResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncGameDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SyncGameDataResponse;

        /**
         * Verifies a SyncGameDataResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncGameDataResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncGameDataResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.SyncGameDataResponse;

        /**
         * Creates a plain object from a SyncGameDataResponse message. Also converts values to other types if specified.
         * @param message SyncGameDataResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SyncGameDataResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncGameDataResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameData. */
    interface IGameData {

        /** GameData gameId */
        gameId?: (number|Long|null);

        /** GameData gamerMap */
        gamerMap?: ({ [k: string]: protocol.IGamer }|null);

        /** GameData cardCount */
        cardCount?: (number|null);

        /** GameData discardPile */
        discardPile?: (protocol.XzcCard[]|null);
    }

    /** Represents a GameData. */
    class GameData implements IGameData {

        /**
         * Constructs a new GameData.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IGameData);

        /** GameData gameId. */
        public gameId: (number|Long);

        /** GameData gamerMap. */
        public gamerMap: { [k: string]: protocol.IGamer };

        /** GameData cardCount. */
        public cardCount: number;

        /** GameData discardPile. */
        public discardPile: protocol.XzcCard[];

        /**
         * Creates a new GameData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameData instance
         */
        public static create(properties?: protocol.IGameData): protocol.GameData;

        /**
         * Encodes the specified GameData message. Does not implicitly {@link protocol.GameData.verify|verify} messages.
         * @param message GameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IGameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameData message, length delimited. Does not implicitly {@link protocol.GameData.verify|verify} messages.
         * @param message GameData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IGameData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.GameData;

        /**
         * Decodes a GameData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.GameData;

        /**
         * Verifies a GameData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameData
         */
        public static fromObject(object: { [k: string]: any }): protocol.GameData;

        /**
         * Creates a plain object from a GameData message. Also converts values to other types if specified.
         * @param message GameData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.GameData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Gamer. */
    interface IGamer {

        /** Gamer uid */
        uid?: (number|Long|null);

        /** Gamer nickname */
        nickname?: (string|null);

        /** Gamer avatar */
        avatar?: (string|null);

        /** Gamer coins */
        coins?: (number|null);

        /** Gamer state */
        state?: (protocol.GamerState|null);

        /** Gamer event */
        event?: (protocol.GamerEvent|null);

        /** Gamer change */
        change?: (boolean|null);

        /** Gamer card */
        card?: (protocol.XzcCard|null);
    }

    /** Represents a Gamer. */
    class Gamer implements IGamer {

        /**
         * Constructs a new Gamer.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IGamer);

        /** Gamer uid. */
        public uid: (number|Long);

        /** Gamer nickname. */
        public nickname: string;

        /** Gamer avatar. */
        public avatar: string;

        /** Gamer coins. */
        public coins: number;

        /** Gamer state. */
        public state: protocol.GamerState;

        /** Gamer event. */
        public event: protocol.GamerEvent;

        /** Gamer change. */
        public change: boolean;

        /** Gamer card. */
        public card: protocol.XzcCard;

        /**
         * Creates a new Gamer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Gamer instance
         */
        public static create(properties?: protocol.IGamer): protocol.Gamer;

        /**
         * Encodes the specified Gamer message. Does not implicitly {@link protocol.Gamer.verify|verify} messages.
         * @param message Gamer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IGamer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Gamer message, length delimited. Does not implicitly {@link protocol.Gamer.verify|verify} messages.
         * @param message Gamer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IGamer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Gamer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Gamer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Gamer;

        /**
         * Decodes a Gamer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Gamer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Gamer;

        /**
         * Verifies a Gamer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Gamer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Gamer
         */
        public static fromObject(object: { [k: string]: any }): protocol.Gamer;

        /**
         * Creates a plain object from a Gamer message. Also converts values to other types if specified.
         * @param message Gamer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Gamer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Gamer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** GamerState enum. */
    enum GamerState {
        GAMER_STATE_UNSPECIFIED = 0,
        GAMER_STATE_WAIT = 1,
        GAMER_STATE_ACTION = 2,
        GAMER_STATE_DISCARD = 3,
        GAMER_STATE_BET = 4,
        GAMER_STATE_IN_BET = 5
    }

    /** GamerEvent enum. */
    enum GamerEvent {
        GAMER_EVENT_UNSPECIFIED = 0,
        GAMER_EVENT_TAKE_CARD = 1,
        GAMER_EVENT_DISCARD_CARD = 2,
        GAMER_EVENT_CHANGE_XZC_CARD = 3,
        GAMER_EVENT_BETTING = 4,
        GAMER_EVENT_PASS = 5,
        GAMER_EVENT_ROUND_SETTLE = 6
    }

    /** XzcCard enum. */
    enum XzcCard {
        XZC_CRAD_UNSPECIFIED = 0,
        XZC_CRAD_1 = 1,
        XZC_CRAD_2 = 2,
        XZC_CRAD_3 = 3,
        XZC_CRAD_4 = 4,
        XZC_CRAD_5 = 5,
        XZC_CRAD_6 = 6,
        XZC_CRAD_7 = 7,
        XZC_CRAD_8 = 8,
        XZC_CRAD_9 = 9,
        XZC_CRAD_10 = 10,
        XZC_CRAD_11 = 11,
        XZC_CRAD_12 = 12,
        XZC_CRAD_13 = 13,
        XZC_CRAD_14 = 14,
        XZC_CRAD_15 = 15
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest username */
        username?: (string|null);

        /** LoginRequest token */
        token?: (string|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ILoginRequest);

        /** LoginRequest username. */
        public username: string;

        /** LoginRequest token. */
        public token: string;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: protocol.ILoginRequest): protocol.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link protocol.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link protocol.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse success */
        success?: (boolean|null);

        /** LoginResponse UserInfo */
        UserInfo?: (protocol.IUserInfo|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ILoginResponse);

        /** LoginResponse success. */
        public success: boolean;

        /** LoginResponse UserInfo. */
        public UserInfo?: (protocol.IUserInfo|null);

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        public static create(properties?: protocol.ILoginResponse): protocol.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link protocol.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link protocol.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.LoginResponse;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.LoginResponse;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo uid */
        uid?: (number|Long|null);

        /** UserInfo nickname */
        nickname?: (string|null);

        /** UserInfo avatar */
        avatar?: (string|null);

        /** UserInfo beans */
        beans?: (number|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IUserInfo);

        /** UserInfo uid. */
        public uid: (number|Long);

        /** UserInfo nickname. */
        public nickname: string;

        /** UserInfo avatar. */
        public avatar: string;

        /** UserInfo beans. */
        public beans: number;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        public static create(properties?: protocol.IUserInfo): protocol.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link protocol.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link protocol.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.UserInfo;

        /**
         * Verifies a UserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        public static fromObject(object: { [k: string]: any }): protocol.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
