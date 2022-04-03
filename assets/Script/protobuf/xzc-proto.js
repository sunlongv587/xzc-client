/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

// var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.protocol = (function() {

    /**
     * Namespace protocol.
     * @exports protocol
     * @namespace
     */
    var protocol = {};

    /**
     * SignalType enum.
     * @name protocol.SignalType
     * @enum {number}
     * @property {number} SIGNAL_TYPE_ERROR_RESPONSE=0 SIGNAL_TYPE_ERROR_RESPONSE value
     * @property {number} SIGNAL_TYPE_SYNC_ROOM_DATA_REQUEST=1 SIGNAL_TYPE_SYNC_ROOM_DATA_REQUEST value
     * @property {number} SIGNAL_TYPE_SYNC_ROOM_DATA_RESPONSE=2 SIGNAL_TYPE_SYNC_ROOM_DATA_RESPONSE value
     * @property {number} SIGNAL_TYPE_LOGIN_REQUEST=3 SIGNAL_TYPE_LOGIN_REQUEST value
     * @property {number} SIGNAL_TYPE_LOGIN_RESPONSE=4 SIGNAL_TYPE_LOGIN_RESPONSE value
     * @property {number} SIGNAL_TYPE_QUICK_JOIN_ROOM_REQUEST=5 SIGNAL_TYPE_QUICK_JOIN_ROOM_REQUEST value
     * @property {number} SIGNAL_TYPE_QUICK_JOIN_ROOM_RESPONSE=6 SIGNAL_TYPE_QUICK_JOIN_ROOM_RESPONSE value
     * @property {number} SIGNAL_TYPE_READY_REQUEST=7 SIGNAL_TYPE_READY_REQUEST value
     * @property {number} SIGNAL_TYPE_READY_RESPONSE=8 SIGNAL_TYPE_READY_RESPONSE value
     * @property {number} SIGNAL_TYPE_START_REQUEST=9 SIGNAL_TYPE_START_REQUEST value
     * @property {number} SIGNAL_TYPE_START_RESPONSE=10 SIGNAL_TYPE_START_RESPONSE value
     * @property {number} SIGNAL_TYPE_QUIT_REQUEST=11 SIGNAL_TYPE_QUIT_REQUEST value
     * @property {number} SIGNAL_TYPE_QUIT_RESPONSE=12 SIGNAL_TYPE_QUIT_RESPONSE value
     * @property {number} SIGNAL_TYPE_QUICK_CHANGE_REQUEST=13 SIGNAL_TYPE_QUICK_CHANGE_REQUEST value
     * @property {number} SIGNAL_TYPE_QUICK_CHANGE_RESPONSE=14 SIGNAL_TYPE_QUICK_CHANGE_RESPONSE value
     * @property {number} SIGNAL_TYPE_TAKE_CARD_REQUEST=15 SIGNAL_TYPE_TAKE_CARD_REQUEST value
     * @property {number} SIGNAL_TYPE_TAKE_CARD_RESPONSE=16 SIGNAL_TYPE_TAKE_CARD_RESPONSE value
     * @property {number} SIGNAL_TYPE_DISCARD_REQUEST=17 SIGNAL_TYPE_DISCARD_REQUEST value
     * @property {number} SIGNAL_TYPE_DISCARD_RESPONSE=18 SIGNAL_TYPE_DISCARD_RESPONSE value
     * @property {number} SIGNAL_TYPE_CHANGE_XZC_CARD_REQUEST=19 SIGNAL_TYPE_CHANGE_XZC_CARD_REQUEST value
     * @property {number} SIGNAL_TYPE_CHANGE_XZC_CARD_RESPONSE=20 SIGNAL_TYPE_CHANGE_XZC_CARD_RESPONSE value
     * @property {number} SIGNAL_TYPE_BETTING_REQUEST=21 SIGNAL_TYPE_BETTING_REQUEST value
     * @property {number} SIGNAL_TYPE_BETTING_RESPONSE=22 SIGNAL_TYPE_BETTING_RESPONSE value
     * @property {number} SIGNAL_TYPE_PASS_REQUEST=23 SIGNAL_TYPE_PASS_REQUEST value
     * @property {number} SIGNAL_TYPE_PASS_RESPONSE=24 SIGNAL_TYPE_PASS_RESPONSE value
     * @property {number} SIGNAL_TYPE_SYNC_GAME_DATA_REQUEST=25 SIGNAL_TYPE_SYNC_GAME_DATA_REQUEST value
     * @property {number} SIGNAL_TYPE_SYNC_GAME_DATA_RESPONSE=26 SIGNAL_TYPE_SYNC_GAME_DATA_RESPONSE value
     * @property {number} SIGNAL_TYPE_ECHO_REQUEST=1001 SIGNAL_TYPE_ECHO_REQUEST value
     * @property {number} SIGNAL_TYPE_ECHO_RESPONSE=1002 SIGNAL_TYPE_ECHO_RESPONSE value
     */
    protocol.SignalType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SIGNAL_TYPE_ERROR_RESPONSE"] = 0;
        values[valuesById[1] = "SIGNAL_TYPE_SYNC_ROOM_DATA_REQUEST"] = 1;
        values[valuesById[2] = "SIGNAL_TYPE_SYNC_ROOM_DATA_RESPONSE"] = 2;
        values[valuesById[3] = "SIGNAL_TYPE_LOGIN_REQUEST"] = 3;
        values[valuesById[4] = "SIGNAL_TYPE_LOGIN_RESPONSE"] = 4;
        values[valuesById[5] = "SIGNAL_TYPE_QUICK_JOIN_ROOM_REQUEST"] = 5;
        values[valuesById[6] = "SIGNAL_TYPE_QUICK_JOIN_ROOM_RESPONSE"] = 6;
        values[valuesById[7] = "SIGNAL_TYPE_READY_REQUEST"] = 7;
        values[valuesById[8] = "SIGNAL_TYPE_READY_RESPONSE"] = 8;
        values[valuesById[9] = "SIGNAL_TYPE_START_REQUEST"] = 9;
        values[valuesById[10] = "SIGNAL_TYPE_START_RESPONSE"] = 10;
        values[valuesById[11] = "SIGNAL_TYPE_QUIT_REQUEST"] = 11;
        values[valuesById[12] = "SIGNAL_TYPE_QUIT_RESPONSE"] = 12;
        values[valuesById[13] = "SIGNAL_TYPE_QUICK_CHANGE_REQUEST"] = 13;
        values[valuesById[14] = "SIGNAL_TYPE_QUICK_CHANGE_RESPONSE"] = 14;
        values[valuesById[15] = "SIGNAL_TYPE_TAKE_CARD_REQUEST"] = 15;
        values[valuesById[16] = "SIGNAL_TYPE_TAKE_CARD_RESPONSE"] = 16;
        values[valuesById[17] = "SIGNAL_TYPE_DISCARD_REQUEST"] = 17;
        values[valuesById[18] = "SIGNAL_TYPE_DISCARD_RESPONSE"] = 18;
        values[valuesById[19] = "SIGNAL_TYPE_CHANGE_XZC_CARD_REQUEST"] = 19;
        values[valuesById[20] = "SIGNAL_TYPE_CHANGE_XZC_CARD_RESPONSE"] = 20;
        values[valuesById[21] = "SIGNAL_TYPE_BETTING_REQUEST"] = 21;
        values[valuesById[22] = "SIGNAL_TYPE_BETTING_RESPONSE"] = 22;
        values[valuesById[23] = "SIGNAL_TYPE_PASS_REQUEST"] = 23;
        values[valuesById[24] = "SIGNAL_TYPE_PASS_RESPONSE"] = 24;
        values[valuesById[25] = "SIGNAL_TYPE_SYNC_GAME_DATA_REQUEST"] = 25;
        values[valuesById[26] = "SIGNAL_TYPE_SYNC_GAME_DATA_RESPONSE"] = 26;
        values[valuesById[1001] = "SIGNAL_TYPE_ECHO_REQUEST"] = 1001;
        values[valuesById[1002] = "SIGNAL_TYPE_ECHO_RESPONSE"] = 1002;
        return values;
    })();

    /**
     * ErrorCode enum.
     * @name protocol.ErrorCode
     * @enum {number}
     * @property {number} ERROR_CODE_UNSPECIFIED=0 ERROR_CODE_UNSPECIFIED value
     * @property {number} ERROR_CODE_INTERNAL_SERVER_ERROR=1 ERROR_CODE_INTERNAL_SERVER_ERROR value
     * @property {number} ERROR_CODE_QUICK_JOIN_FAILED=2 ERROR_CODE_QUICK_JOIN_FAILED value
     * @property {number} ERROR_CODE_ROOM_IS_FULL=3 ERROR_CODE_ROOM_IS_FULL value
     * @property {number} ERROR_CODE_ROOM_IS_NOT_EXISTS=4 ERROR_CODE_ROOM_IS_NOT_EXISTS value
     * @property {number} ERROR_CODE_HAS_MEMBER_NOT_READY=5 ERROR_CODE_HAS_MEMBER_NOT_READY value
     * @property {number} ERROR_CODE_MEMBER_STATE_NOT_IS_IDLE=6 ERROR_CODE_MEMBER_STATE_NOT_IS_IDLE value
     */
    protocol.ErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ERROR_CODE_UNSPECIFIED"] = 0;
        values[valuesById[1] = "ERROR_CODE_INTERNAL_SERVER_ERROR"] = 1;
        values[valuesById[2] = "ERROR_CODE_QUICK_JOIN_FAILED"] = 2;
        values[valuesById[3] = "ERROR_CODE_ROOM_IS_FULL"] = 3;
        values[valuesById[4] = "ERROR_CODE_ROOM_IS_NOT_EXISTS"] = 4;
        values[valuesById[5] = "ERROR_CODE_HAS_MEMBER_NOT_READY"] = 5;
        values[valuesById[6] = "ERROR_CODE_MEMBER_STATE_NOT_IS_IDLE"] = 6;
        return values;
    })();

    protocol.SyncRoomDataRequest = (function() {

        /**
         * Properties of a SyncRoomDataRequest.
         * @memberof protocol
         * @interface ISyncRoomDataRequest
         * @property {number|Long|null} [roomId] SyncRoomDataRequest roomId
         */

        /**
         * Constructs a new SyncRoomDataRequest.
         * @memberof protocol
         * @classdesc Represents a SyncRoomDataRequest.
         * @implements ISyncRoomDataRequest
         * @constructor
         * @param {protocol.ISyncRoomDataRequest=} [properties] Properties to set
         */
        function SyncRoomDataRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncRoomDataRequest roomId.
         * @member {number|Long} roomId
         * @memberof protocol.SyncRoomDataRequest
         * @instance
         */
        SyncRoomDataRequest.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SyncRoomDataRequest instance using the specified properties.
         * @function create
         * @memberof protocol.SyncRoomDataRequest
         * @static
         * @param {protocol.ISyncRoomDataRequest=} [properties] Properties to set
         * @returns {protocol.SyncRoomDataRequest} SyncRoomDataRequest instance
         */
        SyncRoomDataRequest.create = function create(properties) {
            return new SyncRoomDataRequest(properties);
        };

        /**
         * Encodes the specified SyncRoomDataRequest message. Does not implicitly {@link protocol.SyncRoomDataRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.SyncRoomDataRequest
         * @static
         * @param {protocol.ISyncRoomDataRequest} message SyncRoomDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncRoomDataRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified SyncRoomDataRequest message, length delimited. Does not implicitly {@link protocol.SyncRoomDataRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SyncRoomDataRequest
         * @static
         * @param {protocol.ISyncRoomDataRequest} message SyncRoomDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncRoomDataRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncRoomDataRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SyncRoomDataRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SyncRoomDataRequest} SyncRoomDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncRoomDataRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SyncRoomDataRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SyncRoomDataRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SyncRoomDataRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SyncRoomDataRequest} SyncRoomDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncRoomDataRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncRoomDataRequest message.
         * @function verify
         * @memberof protocol.SyncRoomDataRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncRoomDataRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            return null;
        };

        /**
         * Creates a SyncRoomDataRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SyncRoomDataRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SyncRoomDataRequest} SyncRoomDataRequest
         */
        SyncRoomDataRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SyncRoomDataRequest)
                return object;
            var message = new $root.protocol.SyncRoomDataRequest();
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SyncRoomDataRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SyncRoomDataRequest
         * @static
         * @param {protocol.SyncRoomDataRequest} message SyncRoomDataRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncRoomDataRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            return object;
        };

        /**
         * Converts this SyncRoomDataRequest to JSON.
         * @function toJSON
         * @memberof protocol.SyncRoomDataRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncRoomDataRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SyncRoomDataRequest;
    })();

    protocol.SyncRoomDataResponse = (function() {

        /**
         * Properties of a SyncRoomDataResponse.
         * @memberof protocol
         * @interface ISyncRoomDataResponse
         * @property {number|Long|null} [roomId] SyncRoomDataResponse roomId
         * @property {protocol.IRoomData|null} [roomData] SyncRoomDataResponse roomData
         */

        /**
         * Constructs a new SyncRoomDataResponse.
         * @memberof protocol
         * @classdesc Represents a SyncRoomDataResponse.
         * @implements ISyncRoomDataResponse
         * @constructor
         * @param {protocol.ISyncRoomDataResponse=} [properties] Properties to set
         */
        function SyncRoomDataResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncRoomDataResponse roomId.
         * @member {number|Long} roomId
         * @memberof protocol.SyncRoomDataResponse
         * @instance
         */
        SyncRoomDataResponse.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SyncRoomDataResponse roomData.
         * @member {protocol.IRoomData|null|undefined} roomData
         * @memberof protocol.SyncRoomDataResponse
         * @instance
         */
        SyncRoomDataResponse.prototype.roomData = null;

        /**
         * Creates a new SyncRoomDataResponse instance using the specified properties.
         * @function create
         * @memberof protocol.SyncRoomDataResponse
         * @static
         * @param {protocol.ISyncRoomDataResponse=} [properties] Properties to set
         * @returns {protocol.SyncRoomDataResponse} SyncRoomDataResponse instance
         */
        SyncRoomDataResponse.create = function create(properties) {
            return new SyncRoomDataResponse(properties);
        };

        /**
         * Encodes the specified SyncRoomDataResponse message. Does not implicitly {@link protocol.SyncRoomDataResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.SyncRoomDataResponse
         * @static
         * @param {protocol.ISyncRoomDataResponse} message SyncRoomDataResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncRoomDataResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roomId);
            if (message.roomData != null && Object.hasOwnProperty.call(message, "roomData"))
                $root.protocol.RoomData.encode(message.roomData, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SyncRoomDataResponse message, length delimited. Does not implicitly {@link protocol.SyncRoomDataResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SyncRoomDataResponse
         * @static
         * @param {protocol.ISyncRoomDataResponse} message SyncRoomDataResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncRoomDataResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncRoomDataResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SyncRoomDataResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SyncRoomDataResponse} SyncRoomDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncRoomDataResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SyncRoomDataResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.int64();
                    break;
                case 2:
                    message.roomData = $root.protocol.RoomData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SyncRoomDataResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SyncRoomDataResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SyncRoomDataResponse} SyncRoomDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncRoomDataResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncRoomDataResponse message.
         * @function verify
         * @memberof protocol.SyncRoomDataResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncRoomDataResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            if (message.roomData != null && message.hasOwnProperty("roomData")) {
                var error = $root.protocol.RoomData.verify(message.roomData);
                if (error)
                    return "roomData." + error;
            }
            return null;
        };

        /**
         * Creates a SyncRoomDataResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SyncRoomDataResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SyncRoomDataResponse} SyncRoomDataResponse
         */
        SyncRoomDataResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SyncRoomDataResponse)
                return object;
            var message = new $root.protocol.SyncRoomDataResponse();
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            if (object.roomData != null) {
                if (typeof object.roomData !== "object")
                    throw TypeError(".protocol.SyncRoomDataResponse.roomData: object expected");
                message.roomData = $root.protocol.RoomData.fromObject(object.roomData);
            }
            return message;
        };

        /**
         * Creates a plain object from a SyncRoomDataResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SyncRoomDataResponse
         * @static
         * @param {protocol.SyncRoomDataResponse} message SyncRoomDataResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncRoomDataResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
                object.roomData = null;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            if (message.roomData != null && message.hasOwnProperty("roomData"))
                object.roomData = $root.protocol.RoomData.toObject(message.roomData, options);
            return object;
        };

        /**
         * Converts this SyncRoomDataResponse to JSON.
         * @function toJSON
         * @memberof protocol.SyncRoomDataResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncRoomDataResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SyncRoomDataResponse;
    })();

    protocol.QuickJoinRoomRequest = (function() {

        /**
         * Properties of a QuickJoinRoomRequest.
         * @memberof protocol
         * @interface IQuickJoinRoomRequest
         * @property {protocol.RoomType|null} [roomType] QuickJoinRoomRequest roomType
         * @property {string|null} [token] QuickJoinRoomRequest token
         */

        /**
         * Constructs a new QuickJoinRoomRequest.
         * @memberof protocol
         * @classdesc Represents a QuickJoinRoomRequest.
         * @implements IQuickJoinRoomRequest
         * @constructor
         * @param {protocol.IQuickJoinRoomRequest=} [properties] Properties to set
         */
        function QuickJoinRoomRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuickJoinRoomRequest roomType.
         * @member {protocol.RoomType} roomType
         * @memberof protocol.QuickJoinRoomRequest
         * @instance
         */
        QuickJoinRoomRequest.prototype.roomType = 0;

        /**
         * QuickJoinRoomRequest token.
         * @member {string} token
         * @memberof protocol.QuickJoinRoomRequest
         * @instance
         */
        QuickJoinRoomRequest.prototype.token = "";

        /**
         * Creates a new QuickJoinRoomRequest instance using the specified properties.
         * @function create
         * @memberof protocol.QuickJoinRoomRequest
         * @static
         * @param {protocol.IQuickJoinRoomRequest=} [properties] Properties to set
         * @returns {protocol.QuickJoinRoomRequest} QuickJoinRoomRequest instance
         */
        QuickJoinRoomRequest.create = function create(properties) {
            return new QuickJoinRoomRequest(properties);
        };

        /**
         * Encodes the specified QuickJoinRoomRequest message. Does not implicitly {@link protocol.QuickJoinRoomRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.QuickJoinRoomRequest
         * @static
         * @param {protocol.IQuickJoinRoomRequest} message QuickJoinRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuickJoinRoomRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomType != null && Object.hasOwnProperty.call(message, "roomType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomType);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified QuickJoinRoomRequest message, length delimited. Does not implicitly {@link protocol.QuickJoinRoomRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.QuickJoinRoomRequest
         * @static
         * @param {protocol.IQuickJoinRoomRequest} message QuickJoinRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuickJoinRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuickJoinRoomRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.QuickJoinRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.QuickJoinRoomRequest} QuickJoinRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuickJoinRoomRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.QuickJoinRoomRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomType = reader.int32();
                    break;
                case 2:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuickJoinRoomRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.QuickJoinRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.QuickJoinRoomRequest} QuickJoinRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuickJoinRoomRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuickJoinRoomRequest message.
         * @function verify
         * @memberof protocol.QuickJoinRoomRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuickJoinRoomRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomType != null && message.hasOwnProperty("roomType"))
                switch (message.roomType) {
                default:
                    return "roomType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a QuickJoinRoomRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.QuickJoinRoomRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.QuickJoinRoomRequest} QuickJoinRoomRequest
         */
        QuickJoinRoomRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.QuickJoinRoomRequest)
                return object;
            var message = new $root.protocol.QuickJoinRoomRequest();
            switch (object.roomType) {
            case "ROOM_TYPE_UNSPECIFIED":
            case 0:
                message.roomType = 0;
                break;
            case "ROOM_TYPE_CLASSIC_3_6":
            case 1:
                message.roomType = 1;
                break;
            }
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a QuickJoinRoomRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.QuickJoinRoomRequest
         * @static
         * @param {protocol.QuickJoinRoomRequest} message QuickJoinRoomRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuickJoinRoomRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roomType = options.enums === String ? "ROOM_TYPE_UNSPECIFIED" : 0;
                object.token = "";
            }
            if (message.roomType != null && message.hasOwnProperty("roomType"))
                object.roomType = options.enums === String ? $root.protocol.RoomType[message.roomType] : message.roomType;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this QuickJoinRoomRequest to JSON.
         * @function toJSON
         * @memberof protocol.QuickJoinRoomRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuickJoinRoomRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QuickJoinRoomRequest;
    })();

    protocol.QuickJoinRoomResponse = (function() {

        /**
         * Properties of a QuickJoinRoomResponse.
         * @memberof protocol
         * @interface IQuickJoinRoomResponse
         * @property {number|Long|null} [roomId] QuickJoinRoomResponse roomId
         * @property {string|null} [message] QuickJoinRoomResponse message
         * @property {Object.<string,protocol.IRoomMember>|null} [membersMap] QuickJoinRoomResponse membersMap
         */

        /**
         * Constructs a new QuickJoinRoomResponse.
         * @memberof protocol
         * @classdesc Represents a QuickJoinRoomResponse.
         * @implements IQuickJoinRoomResponse
         * @constructor
         * @param {protocol.IQuickJoinRoomResponse=} [properties] Properties to set
         */
        function QuickJoinRoomResponse(properties) {
            this.membersMap = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuickJoinRoomResponse roomId.
         * @member {number|Long} roomId
         * @memberof protocol.QuickJoinRoomResponse
         * @instance
         */
        QuickJoinRoomResponse.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * QuickJoinRoomResponse message.
         * @member {string} message
         * @memberof protocol.QuickJoinRoomResponse
         * @instance
         */
        QuickJoinRoomResponse.prototype.message = "";

        /**
         * QuickJoinRoomResponse membersMap.
         * @member {Object.<string,protocol.IRoomMember>} membersMap
         * @memberof protocol.QuickJoinRoomResponse
         * @instance
         */
        QuickJoinRoomResponse.prototype.membersMap = $util.emptyObject;

        /**
         * Creates a new QuickJoinRoomResponse instance using the specified properties.
         * @function create
         * @memberof protocol.QuickJoinRoomResponse
         * @static
         * @param {protocol.IQuickJoinRoomResponse=} [properties] Properties to set
         * @returns {protocol.QuickJoinRoomResponse} QuickJoinRoomResponse instance
         */
        QuickJoinRoomResponse.create = function create(properties) {
            return new QuickJoinRoomResponse(properties);
        };

        /**
         * Encodes the specified QuickJoinRoomResponse message. Does not implicitly {@link protocol.QuickJoinRoomResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.QuickJoinRoomResponse
         * @static
         * @param {protocol.IQuickJoinRoomResponse} message QuickJoinRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuickJoinRoomResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roomId);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.membersMap != null && Object.hasOwnProperty.call(message, "membersMap"))
                for (var keys = Object.keys(message.membersMap), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]);
                    $root.protocol.RoomMember.encode(message.membersMap[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified QuickJoinRoomResponse message, length delimited. Does not implicitly {@link protocol.QuickJoinRoomResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.QuickJoinRoomResponse
         * @static
         * @param {protocol.IQuickJoinRoomResponse} message QuickJoinRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuickJoinRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuickJoinRoomResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.QuickJoinRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.QuickJoinRoomResponse} QuickJoinRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuickJoinRoomResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.QuickJoinRoomResponse(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.int64();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                case 3:
                    if (message.membersMap === $util.emptyObject)
                        message.membersMap = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.int64();
                            break;
                        case 2:
                            value = $root.protocol.RoomMember.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.membersMap[typeof key === "object" ? $util.longToHash(key) : key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuickJoinRoomResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.QuickJoinRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.QuickJoinRoomResponse} QuickJoinRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuickJoinRoomResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuickJoinRoomResponse message.
         * @function verify
         * @memberof protocol.QuickJoinRoomResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuickJoinRoomResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.membersMap != null && message.hasOwnProperty("membersMap")) {
                if (!$util.isObject(message.membersMap))
                    return "membersMap: object expected";
                var key = Object.keys(message.membersMap);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key64Re.test(key[i]))
                        return "membersMap: integer|Long key{k:int64} expected";
                    {
                        var error = $root.protocol.RoomMember.verify(message.membersMap[key[i]]);
                        if (error)
                            return "membersMap." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a QuickJoinRoomResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.QuickJoinRoomResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.QuickJoinRoomResponse} QuickJoinRoomResponse
         */
        QuickJoinRoomResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.QuickJoinRoomResponse)
                return object;
            var message = new $root.protocol.QuickJoinRoomResponse();
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            if (object.message != null)
                message.message = String(object.message);
            if (object.membersMap) {
                if (typeof object.membersMap !== "object")
                    throw TypeError(".protocol.QuickJoinRoomResponse.membersMap: object expected");
                message.membersMap = {};
                for (var keys = Object.keys(object.membersMap), i = 0; i < keys.length; ++i) {
                    if (typeof object.membersMap[keys[i]] !== "object")
                        throw TypeError(".protocol.QuickJoinRoomResponse.membersMap: object expected");
                    message.membersMap[keys[i]] = $root.protocol.RoomMember.fromObject(object.membersMap[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a QuickJoinRoomResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.QuickJoinRoomResponse
         * @static
         * @param {protocol.QuickJoinRoomResponse} message QuickJoinRoomResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuickJoinRoomResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.membersMap = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
                object.message = "";
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            var keys2;
            if (message.membersMap && (keys2 = Object.keys(message.membersMap)).length) {
                object.membersMap = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.membersMap[keys2[j]] = $root.protocol.RoomMember.toObject(message.membersMap[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this QuickJoinRoomResponse to JSON.
         * @function toJSON
         * @memberof protocol.QuickJoinRoomResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuickJoinRoomResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QuickJoinRoomResponse;
    })();

    protocol.ReadyRequest = (function() {

        /**
         * Properties of a ReadyRequest.
         * @memberof protocol
         * @interface IReadyRequest
         * @property {number|Long|null} [roomId] ReadyRequest roomId
         * @property {boolean|null} [readyOrCancel] ReadyRequest readyOrCancel
         */

        /**
         * Constructs a new ReadyRequest.
         * @memberof protocol
         * @classdesc Represents a ReadyRequest.
         * @implements IReadyRequest
         * @constructor
         * @param {protocol.IReadyRequest=} [properties] Properties to set
         */
        function ReadyRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadyRequest roomId.
         * @member {number|Long} roomId
         * @memberof protocol.ReadyRequest
         * @instance
         */
        ReadyRequest.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReadyRequest readyOrCancel.
         * @member {boolean} readyOrCancel
         * @memberof protocol.ReadyRequest
         * @instance
         */
        ReadyRequest.prototype.readyOrCancel = false;

        /**
         * Creates a new ReadyRequest instance using the specified properties.
         * @function create
         * @memberof protocol.ReadyRequest
         * @static
         * @param {protocol.IReadyRequest=} [properties] Properties to set
         * @returns {protocol.ReadyRequest} ReadyRequest instance
         */
        ReadyRequest.create = function create(properties) {
            return new ReadyRequest(properties);
        };

        /**
         * Encodes the specified ReadyRequest message. Does not implicitly {@link protocol.ReadyRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.ReadyRequest
         * @static
         * @param {protocol.IReadyRequest} message ReadyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roomId);
            if (message.readyOrCancel != null && Object.hasOwnProperty.call(message, "readyOrCancel"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.readyOrCancel);
            return writer;
        };

        /**
         * Encodes the specified ReadyRequest message, length delimited. Does not implicitly {@link protocol.ReadyRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ReadyRequest
         * @static
         * @param {protocol.IReadyRequest} message ReadyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ReadyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ReadyRequest} ReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ReadyRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.int64();
                    break;
                case 2:
                    message.readyOrCancel = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReadyRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ReadyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ReadyRequest} ReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadyRequest message.
         * @function verify
         * @memberof protocol.ReadyRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadyRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            if (message.readyOrCancel != null && message.hasOwnProperty("readyOrCancel"))
                if (typeof message.readyOrCancel !== "boolean")
                    return "readyOrCancel: boolean expected";
            return null;
        };

        /**
         * Creates a ReadyRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ReadyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ReadyRequest} ReadyRequest
         */
        ReadyRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ReadyRequest)
                return object;
            var message = new $root.protocol.ReadyRequest();
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            if (object.readyOrCancel != null)
                message.readyOrCancel = Boolean(object.readyOrCancel);
            return message;
        };

        /**
         * Creates a plain object from a ReadyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ReadyRequest
         * @static
         * @param {protocol.ReadyRequest} message ReadyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadyRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
                object.readyOrCancel = false;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            if (message.readyOrCancel != null && message.hasOwnProperty("readyOrCancel"))
                object.readyOrCancel = message.readyOrCancel;
            return object;
        };

        /**
         * Converts this ReadyRequest to JSON.
         * @function toJSON
         * @memberof protocol.ReadyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadyRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReadyRequest;
    })();

    protocol.ReadyResponse = (function() {

        /**
         * Properties of a ReadyResponse.
         * @memberof protocol
         * @interface IReadyResponse
         * @property {number|Long|null} [roomId] ReadyResponse roomId
         * @property {string|null} [message] ReadyResponse message
         * @property {Object.<string,protocol.IRoomMember>|null} [membersMap] ReadyResponse membersMap
         */

        /**
         * Constructs a new ReadyResponse.
         * @memberof protocol
         * @classdesc Represents a ReadyResponse.
         * @implements IReadyResponse
         * @constructor
         * @param {protocol.IReadyResponse=} [properties] Properties to set
         */
        function ReadyResponse(properties) {
            this.membersMap = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadyResponse roomId.
         * @member {number|Long} roomId
         * @memberof protocol.ReadyResponse
         * @instance
         */
        ReadyResponse.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReadyResponse message.
         * @member {string} message
         * @memberof protocol.ReadyResponse
         * @instance
         */
        ReadyResponse.prototype.message = "";

        /**
         * ReadyResponse membersMap.
         * @member {Object.<string,protocol.IRoomMember>} membersMap
         * @memberof protocol.ReadyResponse
         * @instance
         */
        ReadyResponse.prototype.membersMap = $util.emptyObject;

        /**
         * Creates a new ReadyResponse instance using the specified properties.
         * @function create
         * @memberof protocol.ReadyResponse
         * @static
         * @param {protocol.IReadyResponse=} [properties] Properties to set
         * @returns {protocol.ReadyResponse} ReadyResponse instance
         */
        ReadyResponse.create = function create(properties) {
            return new ReadyResponse(properties);
        };

        /**
         * Encodes the specified ReadyResponse message. Does not implicitly {@link protocol.ReadyResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.ReadyResponse
         * @static
         * @param {protocol.IReadyResponse} message ReadyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roomId);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.membersMap != null && Object.hasOwnProperty.call(message, "membersMap"))
                for (var keys = Object.keys(message.membersMap), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]);
                    $root.protocol.RoomMember.encode(message.membersMap[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified ReadyResponse message, length delimited. Does not implicitly {@link protocol.ReadyResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ReadyResponse
         * @static
         * @param {protocol.IReadyResponse} message ReadyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadyResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ReadyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ReadyResponse} ReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ReadyResponse(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.int64();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                case 3:
                    if (message.membersMap === $util.emptyObject)
                        message.membersMap = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.int64();
                            break;
                        case 2:
                            value = $root.protocol.RoomMember.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.membersMap[typeof key === "object" ? $util.longToHash(key) : key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReadyResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ReadyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ReadyResponse} ReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadyResponse message.
         * @function verify
         * @memberof protocol.ReadyResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadyResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.membersMap != null && message.hasOwnProperty("membersMap")) {
                if (!$util.isObject(message.membersMap))
                    return "membersMap: object expected";
                var key = Object.keys(message.membersMap);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key64Re.test(key[i]))
                        return "membersMap: integer|Long key{k:int64} expected";
                    {
                        var error = $root.protocol.RoomMember.verify(message.membersMap[key[i]]);
                        if (error)
                            return "membersMap." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a ReadyResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ReadyResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ReadyResponse} ReadyResponse
         */
        ReadyResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ReadyResponse)
                return object;
            var message = new $root.protocol.ReadyResponse();
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            if (object.message != null)
                message.message = String(object.message);
            if (object.membersMap) {
                if (typeof object.membersMap !== "object")
                    throw TypeError(".protocol.ReadyResponse.membersMap: object expected");
                message.membersMap = {};
                for (var keys = Object.keys(object.membersMap), i = 0; i < keys.length; ++i) {
                    if (typeof object.membersMap[keys[i]] !== "object")
                        throw TypeError(".protocol.ReadyResponse.membersMap: object expected");
                    message.membersMap[keys[i]] = $root.protocol.RoomMember.fromObject(object.membersMap[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ReadyResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ReadyResponse
         * @static
         * @param {protocol.ReadyResponse} message ReadyResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadyResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.membersMap = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
                object.message = "";
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            var keys2;
            if (message.membersMap && (keys2 = Object.keys(message.membersMap)).length) {
                object.membersMap = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.membersMap[keys2[j]] = $root.protocol.RoomMember.toObject(message.membersMap[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this ReadyResponse to JSON.
         * @function toJSON
         * @memberof protocol.ReadyResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadyResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReadyResponse;
    })();

    protocol.StartRequest = (function() {

        /**
         * Properties of a StartRequest.
         * @memberof protocol
         * @interface IStartRequest
         * @property {number|Long|null} [roomId] StartRequest roomId
         */

        /**
         * Constructs a new StartRequest.
         * @memberof protocol
         * @classdesc Represents a StartRequest.
         * @implements IStartRequest
         * @constructor
         * @param {protocol.IStartRequest=} [properties] Properties to set
         */
        function StartRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartRequest roomId.
         * @member {number|Long} roomId
         * @memberof protocol.StartRequest
         * @instance
         */
        StartRequest.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new StartRequest instance using the specified properties.
         * @function create
         * @memberof protocol.StartRequest
         * @static
         * @param {protocol.IStartRequest=} [properties] Properties to set
         * @returns {protocol.StartRequest} StartRequest instance
         */
        StartRequest.create = function create(properties) {
            return new StartRequest(properties);
        };

        /**
         * Encodes the specified StartRequest message. Does not implicitly {@link protocol.StartRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.StartRequest
         * @static
         * @param {protocol.IStartRequest} message StartRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified StartRequest message, length delimited. Does not implicitly {@link protocol.StartRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.StartRequest
         * @static
         * @param {protocol.IStartRequest} message StartRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.StartRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.StartRequest} StartRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.StartRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.StartRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.StartRequest} StartRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartRequest message.
         * @function verify
         * @memberof protocol.StartRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            return null;
        };

        /**
         * Creates a StartRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.StartRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.StartRequest} StartRequest
         */
        StartRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.StartRequest)
                return object;
            var message = new $root.protocol.StartRequest();
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a StartRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.StartRequest
         * @static
         * @param {protocol.StartRequest} message StartRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            return object;
        };

        /**
         * Converts this StartRequest to JSON.
         * @function toJSON
         * @memberof protocol.StartRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartRequest;
    })();

    protocol.StartResponse = (function() {

        /**
         * Properties of a StartResponse.
         * @memberof protocol
         * @interface IStartResponse
         * @property {number|Long|null} [roomId] StartResponse roomId
         * @property {number|Long|null} [gameId] StartResponse gameId
         */

        /**
         * Constructs a new StartResponse.
         * @memberof protocol
         * @classdesc Represents a StartResponse.
         * @implements IStartResponse
         * @constructor
         * @param {protocol.IStartResponse=} [properties] Properties to set
         */
        function StartResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartResponse roomId.
         * @member {number|Long} roomId
         * @memberof protocol.StartResponse
         * @instance
         */
        StartResponse.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * StartResponse gameId.
         * @member {number|Long} gameId
         * @memberof protocol.StartResponse
         * @instance
         */
        StartResponse.prototype.gameId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new StartResponse instance using the specified properties.
         * @function create
         * @memberof protocol.StartResponse
         * @static
         * @param {protocol.IStartResponse=} [properties] Properties to set
         * @returns {protocol.StartResponse} StartResponse instance
         */
        StartResponse.create = function create(properties) {
            return new StartResponse(properties);
        };

        /**
         * Encodes the specified StartResponse message. Does not implicitly {@link protocol.StartResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.StartResponse
         * @static
         * @param {protocol.IStartResponse} message StartResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roomId);
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.gameId);
            return writer;
        };

        /**
         * Encodes the specified StartResponse message, length delimited. Does not implicitly {@link protocol.StartResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.StartResponse
         * @static
         * @param {protocol.IStartResponse} message StartResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.StartResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.StartResponse} StartResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.StartResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.int64();
                    break;
                case 2:
                    message.gameId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.StartResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.StartResponse} StartResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartResponse message.
         * @function verify
         * @memberof protocol.StartResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId) && !(message.gameId && $util.isInteger(message.gameId.low) && $util.isInteger(message.gameId.high)))
                    return "gameId: integer|Long expected";
            return null;
        };

        /**
         * Creates a StartResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.StartResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.StartResponse} StartResponse
         */
        StartResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.StartResponse)
                return object;
            var message = new $root.protocol.StartResponse();
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            if (object.gameId != null)
                if ($util.Long)
                    (message.gameId = $util.Long.fromValue(object.gameId)).unsigned = false;
                else if (typeof object.gameId === "string")
                    message.gameId = parseInt(object.gameId, 10);
                else if (typeof object.gameId === "number")
                    message.gameId = object.gameId;
                else if (typeof object.gameId === "object")
                    message.gameId = new $util.LongBits(object.gameId.low >>> 0, object.gameId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a StartResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.StartResponse
         * @static
         * @param {protocol.StartResponse} message StartResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gameId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gameId = options.longs === String ? "0" : 0;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (typeof message.gameId === "number")
                    object.gameId = options.longs === String ? String(message.gameId) : message.gameId;
                else
                    object.gameId = options.longs === String ? $util.Long.prototype.toString.call(message.gameId) : options.longs === Number ? new $util.LongBits(message.gameId.low >>> 0, message.gameId.high >>> 0).toNumber() : message.gameId;
            return object;
        };

        /**
         * Converts this StartResponse to JSON.
         * @function toJSON
         * @memberof protocol.StartResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartResponse;
    })();

    protocol.QuitRequest = (function() {

        /**
         * Properties of a QuitRequest.
         * @memberof protocol
         * @interface IQuitRequest
         * @property {number|Long|null} [roomId] QuitRequest roomId
         */

        /**
         * Constructs a new QuitRequest.
         * @memberof protocol
         * @classdesc Represents a QuitRequest.
         * @implements IQuitRequest
         * @constructor
         * @param {protocol.IQuitRequest=} [properties] Properties to set
         */
        function QuitRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuitRequest roomId.
         * @member {number|Long} roomId
         * @memberof protocol.QuitRequest
         * @instance
         */
        QuitRequest.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new QuitRequest instance using the specified properties.
         * @function create
         * @memberof protocol.QuitRequest
         * @static
         * @param {protocol.IQuitRequest=} [properties] Properties to set
         * @returns {protocol.QuitRequest} QuitRequest instance
         */
        QuitRequest.create = function create(properties) {
            return new QuitRequest(properties);
        };

        /**
         * Encodes the specified QuitRequest message. Does not implicitly {@link protocol.QuitRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.QuitRequest
         * @static
         * @param {protocol.IQuitRequest} message QuitRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified QuitRequest message, length delimited. Does not implicitly {@link protocol.QuitRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.QuitRequest
         * @static
         * @param {protocol.IQuitRequest} message QuitRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuitRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.QuitRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.QuitRequest} QuitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.QuitRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuitRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.QuitRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.QuitRequest} QuitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuitRequest message.
         * @function verify
         * @memberof protocol.QuitRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuitRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            return null;
        };

        /**
         * Creates a QuitRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.QuitRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.QuitRequest} QuitRequest
         */
        QuitRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.QuitRequest)
                return object;
            var message = new $root.protocol.QuitRequest();
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a QuitRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.QuitRequest
         * @static
         * @param {protocol.QuitRequest} message QuitRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuitRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            return object;
        };

        /**
         * Converts this QuitRequest to JSON.
         * @function toJSON
         * @memberof protocol.QuitRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuitRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QuitRequest;
    })();

    protocol.QuitResponse = (function() {

        /**
         * Properties of a QuitResponse.
         * @memberof protocol
         * @interface IQuitResponse
         * @property {number|Long|null} [roomId] QuitResponse roomId
         */

        /**
         * Constructs a new QuitResponse.
         * @memberof protocol
         * @classdesc Represents a QuitResponse.
         * @implements IQuitResponse
         * @constructor
         * @param {protocol.IQuitResponse=} [properties] Properties to set
         */
        function QuitResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuitResponse roomId.
         * @member {number|Long} roomId
         * @memberof protocol.QuitResponse
         * @instance
         */
        QuitResponse.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new QuitResponse instance using the specified properties.
         * @function create
         * @memberof protocol.QuitResponse
         * @static
         * @param {protocol.IQuitResponse=} [properties] Properties to set
         * @returns {protocol.QuitResponse} QuitResponse instance
         */
        QuitResponse.create = function create(properties) {
            return new QuitResponse(properties);
        };

        /**
         * Encodes the specified QuitResponse message. Does not implicitly {@link protocol.QuitResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.QuitResponse
         * @static
         * @param {protocol.IQuitResponse} message QuitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified QuitResponse message, length delimited. Does not implicitly {@link protocol.QuitResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.QuitResponse
         * @static
         * @param {protocol.IQuitResponse} message QuitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuitResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.QuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.QuitResponse} QuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.QuitResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuitResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.QuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.QuitResponse} QuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuitResponse message.
         * @function verify
         * @memberof protocol.QuitResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuitResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            return null;
        };

        /**
         * Creates a QuitResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.QuitResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.QuitResponse} QuitResponse
         */
        QuitResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.QuitResponse)
                return object;
            var message = new $root.protocol.QuitResponse();
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a QuitResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.QuitResponse
         * @static
         * @param {protocol.QuitResponse} message QuitResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuitResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            return object;
        };

        /**
         * Converts this QuitResponse to JSON.
         * @function toJSON
         * @memberof protocol.QuitResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuitResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QuitResponse;
    })();

    protocol.QuickChangeRequest = (function() {

        /**
         * Properties of a QuickChangeRequest.
         * @memberof protocol
         * @interface IQuickChangeRequest
         * @property {number|Long|null} [oldRoomId] QuickChangeRequest oldRoomId
         */

        /**
         * Constructs a new QuickChangeRequest.
         * @memberof protocol
         * @classdesc Represents a QuickChangeRequest.
         * @implements IQuickChangeRequest
         * @constructor
         * @param {protocol.IQuickChangeRequest=} [properties] Properties to set
         */
        function QuickChangeRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuickChangeRequest oldRoomId.
         * @member {number|Long} oldRoomId
         * @memberof protocol.QuickChangeRequest
         * @instance
         */
        QuickChangeRequest.prototype.oldRoomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new QuickChangeRequest instance using the specified properties.
         * @function create
         * @memberof protocol.QuickChangeRequest
         * @static
         * @param {protocol.IQuickChangeRequest=} [properties] Properties to set
         * @returns {protocol.QuickChangeRequest} QuickChangeRequest instance
         */
        QuickChangeRequest.create = function create(properties) {
            return new QuickChangeRequest(properties);
        };

        /**
         * Encodes the specified QuickChangeRequest message. Does not implicitly {@link protocol.QuickChangeRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.QuickChangeRequest
         * @static
         * @param {protocol.IQuickChangeRequest} message QuickChangeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuickChangeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.oldRoomId != null && Object.hasOwnProperty.call(message, "oldRoomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.oldRoomId);
            return writer;
        };

        /**
         * Encodes the specified QuickChangeRequest message, length delimited. Does not implicitly {@link protocol.QuickChangeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.QuickChangeRequest
         * @static
         * @param {protocol.IQuickChangeRequest} message QuickChangeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuickChangeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuickChangeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.QuickChangeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.QuickChangeRequest} QuickChangeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuickChangeRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.QuickChangeRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.oldRoomId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuickChangeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.QuickChangeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.QuickChangeRequest} QuickChangeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuickChangeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuickChangeRequest message.
         * @function verify
         * @memberof protocol.QuickChangeRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuickChangeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.oldRoomId != null && message.hasOwnProperty("oldRoomId"))
                if (!$util.isInteger(message.oldRoomId) && !(message.oldRoomId && $util.isInteger(message.oldRoomId.low) && $util.isInteger(message.oldRoomId.high)))
                    return "oldRoomId: integer|Long expected";
            return null;
        };

        /**
         * Creates a QuickChangeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.QuickChangeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.QuickChangeRequest} QuickChangeRequest
         */
        QuickChangeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.QuickChangeRequest)
                return object;
            var message = new $root.protocol.QuickChangeRequest();
            if (object.oldRoomId != null)
                if ($util.Long)
                    (message.oldRoomId = $util.Long.fromValue(object.oldRoomId)).unsigned = false;
                else if (typeof object.oldRoomId === "string")
                    message.oldRoomId = parseInt(object.oldRoomId, 10);
                else if (typeof object.oldRoomId === "number")
                    message.oldRoomId = object.oldRoomId;
                else if (typeof object.oldRoomId === "object")
                    message.oldRoomId = new $util.LongBits(object.oldRoomId.low >>> 0, object.oldRoomId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a QuickChangeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.QuickChangeRequest
         * @static
         * @param {protocol.QuickChangeRequest} message QuickChangeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuickChangeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.oldRoomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.oldRoomId = options.longs === String ? "0" : 0;
            if (message.oldRoomId != null && message.hasOwnProperty("oldRoomId"))
                if (typeof message.oldRoomId === "number")
                    object.oldRoomId = options.longs === String ? String(message.oldRoomId) : message.oldRoomId;
                else
                    object.oldRoomId = options.longs === String ? $util.Long.prototype.toString.call(message.oldRoomId) : options.longs === Number ? new $util.LongBits(message.oldRoomId.low >>> 0, message.oldRoomId.high >>> 0).toNumber() : message.oldRoomId;
            return object;
        };

        /**
         * Converts this QuickChangeRequest to JSON.
         * @function toJSON
         * @memberof protocol.QuickChangeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuickChangeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QuickChangeRequest;
    })();

    protocol.QuickChangeResponse = (function() {

        /**
         * Properties of a QuickChangeResponse.
         * @memberof protocol
         * @interface IQuickChangeResponse
         * @property {number|Long|null} [newRoomId] QuickChangeResponse newRoomId
         */

        /**
         * Constructs a new QuickChangeResponse.
         * @memberof protocol
         * @classdesc Represents a QuickChangeResponse.
         * @implements IQuickChangeResponse
         * @constructor
         * @param {protocol.IQuickChangeResponse=} [properties] Properties to set
         */
        function QuickChangeResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuickChangeResponse newRoomId.
         * @member {number|Long} newRoomId
         * @memberof protocol.QuickChangeResponse
         * @instance
         */
        QuickChangeResponse.prototype.newRoomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new QuickChangeResponse instance using the specified properties.
         * @function create
         * @memberof protocol.QuickChangeResponse
         * @static
         * @param {protocol.IQuickChangeResponse=} [properties] Properties to set
         * @returns {protocol.QuickChangeResponse} QuickChangeResponse instance
         */
        QuickChangeResponse.create = function create(properties) {
            return new QuickChangeResponse(properties);
        };

        /**
         * Encodes the specified QuickChangeResponse message. Does not implicitly {@link protocol.QuickChangeResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.QuickChangeResponse
         * @static
         * @param {protocol.IQuickChangeResponse} message QuickChangeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuickChangeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.newRoomId != null && Object.hasOwnProperty.call(message, "newRoomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.newRoomId);
            return writer;
        };

        /**
         * Encodes the specified QuickChangeResponse message, length delimited. Does not implicitly {@link protocol.QuickChangeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.QuickChangeResponse
         * @static
         * @param {protocol.IQuickChangeResponse} message QuickChangeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuickChangeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuickChangeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.QuickChangeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.QuickChangeResponse} QuickChangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuickChangeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.QuickChangeResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.newRoomId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuickChangeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.QuickChangeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.QuickChangeResponse} QuickChangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuickChangeResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuickChangeResponse message.
         * @function verify
         * @memberof protocol.QuickChangeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuickChangeResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.newRoomId != null && message.hasOwnProperty("newRoomId"))
                if (!$util.isInteger(message.newRoomId) && !(message.newRoomId && $util.isInteger(message.newRoomId.low) && $util.isInteger(message.newRoomId.high)))
                    return "newRoomId: integer|Long expected";
            return null;
        };

        /**
         * Creates a QuickChangeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.QuickChangeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.QuickChangeResponse} QuickChangeResponse
         */
        QuickChangeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.QuickChangeResponse)
                return object;
            var message = new $root.protocol.QuickChangeResponse();
            if (object.newRoomId != null)
                if ($util.Long)
                    (message.newRoomId = $util.Long.fromValue(object.newRoomId)).unsigned = false;
                else if (typeof object.newRoomId === "string")
                    message.newRoomId = parseInt(object.newRoomId, 10);
                else if (typeof object.newRoomId === "number")
                    message.newRoomId = object.newRoomId;
                else if (typeof object.newRoomId === "object")
                    message.newRoomId = new $util.LongBits(object.newRoomId.low >>> 0, object.newRoomId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a QuickChangeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.QuickChangeResponse
         * @static
         * @param {protocol.QuickChangeResponse} message QuickChangeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuickChangeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.newRoomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.newRoomId = options.longs === String ? "0" : 0;
            if (message.newRoomId != null && message.hasOwnProperty("newRoomId"))
                if (typeof message.newRoomId === "number")
                    object.newRoomId = options.longs === String ? String(message.newRoomId) : message.newRoomId;
                else
                    object.newRoomId = options.longs === String ? $util.Long.prototype.toString.call(message.newRoomId) : options.longs === Number ? new $util.LongBits(message.newRoomId.low >>> 0, message.newRoomId.high >>> 0).toNumber() : message.newRoomId;
            return object;
        };

        /**
         * Converts this QuickChangeResponse to JSON.
         * @function toJSON
         * @memberof protocol.QuickChangeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuickChangeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QuickChangeResponse;
    })();

    protocol.RoomData = (function() {

        /**
         * Properties of a RoomData.
         * @memberof protocol
         * @interface IRoomData
         * @property {number|Long|null} [roomId] RoomData roomId
         * @property {Object.<string,protocol.IRoomMember>|null} [memberMap] RoomData memberMap
         */

        /**
         * Constructs a new RoomData.
         * @memberof protocol
         * @classdesc Represents a RoomData.
         * @implements IRoomData
         * @constructor
         * @param {protocol.IRoomData=} [properties] Properties to set
         */
        function RoomData(properties) {
            this.memberMap = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomData roomId.
         * @member {number|Long} roomId
         * @memberof protocol.RoomData
         * @instance
         */
        RoomData.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoomData memberMap.
         * @member {Object.<string,protocol.IRoomMember>} memberMap
         * @memberof protocol.RoomData
         * @instance
         */
        RoomData.prototype.memberMap = $util.emptyObject;

        /**
         * Creates a new RoomData instance using the specified properties.
         * @function create
         * @memberof protocol.RoomData
         * @static
         * @param {protocol.IRoomData=} [properties] Properties to set
         * @returns {protocol.RoomData} RoomData instance
         */
        RoomData.create = function create(properties) {
            return new RoomData(properties);
        };

        /**
         * Encodes the specified RoomData message. Does not implicitly {@link protocol.RoomData.verify|verify} messages.
         * @function encode
         * @memberof protocol.RoomData
         * @static
         * @param {protocol.IRoomData} message RoomData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roomId);
            if (message.memberMap != null && Object.hasOwnProperty.call(message, "memberMap"))
                for (var keys = Object.keys(message.memberMap), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]);
                    $root.protocol.RoomMember.encode(message.memberMap[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified RoomData message, length delimited. Does not implicitly {@link protocol.RoomData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.RoomData
         * @static
         * @param {protocol.IRoomData} message RoomData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomData message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.RoomData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.RoomData} RoomData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.RoomData(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.int64();
                    break;
                case 2:
                    if (message.memberMap === $util.emptyObject)
                        message.memberMap = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.int64();
                            break;
                        case 2:
                            value = $root.protocol.RoomMember.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.memberMap[typeof key === "object" ? $util.longToHash(key) : key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.RoomData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.RoomData} RoomData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomData message.
         * @function verify
         * @memberof protocol.RoomData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            if (message.memberMap != null && message.hasOwnProperty("memberMap")) {
                if (!$util.isObject(message.memberMap))
                    return "memberMap: object expected";
                var key = Object.keys(message.memberMap);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key64Re.test(key[i]))
                        return "memberMap: integer|Long key{k:int64} expected";
                    {
                        var error = $root.protocol.RoomMember.verify(message.memberMap[key[i]]);
                        if (error)
                            return "memberMap." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a RoomData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.RoomData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.RoomData} RoomData
         */
        RoomData.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.RoomData)
                return object;
            var message = new $root.protocol.RoomData();
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            if (object.memberMap) {
                if (typeof object.memberMap !== "object")
                    throw TypeError(".protocol.RoomData.memberMap: object expected");
                message.memberMap = {};
                for (var keys = Object.keys(object.memberMap), i = 0; i < keys.length; ++i) {
                    if (typeof object.memberMap[keys[i]] !== "object")
                        throw TypeError(".protocol.RoomData.memberMap: object expected");
                    message.memberMap[keys[i]] = $root.protocol.RoomMember.fromObject(object.memberMap[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RoomData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.RoomData
         * @static
         * @param {protocol.RoomData} message RoomData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.memberMap = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            var keys2;
            if (message.memberMap && (keys2 = Object.keys(message.memberMap)).length) {
                object.memberMap = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.memberMap[keys2[j]] = $root.protocol.RoomMember.toObject(message.memberMap[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this RoomData to JSON.
         * @function toJSON
         * @memberof protocol.RoomData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomData;
    })();

    protocol.RoomMember = (function() {

        /**
         * Properties of a RoomMember.
         * @memberof protocol
         * @interface IRoomMember
         * @property {number|Long|null} [uid] RoomMember uid
         * @property {string|null} [nickname] RoomMember nickname
         * @property {string|null} [avatar] RoomMember avatar
         * @property {number|null} [beans] RoomMember beans
         * @property {protocol.MemberState|null} [state] RoomMember state
         * @property {protocol.MemberEvent|null} [event] RoomMember event
         * @property {boolean|null} [change] RoomMember change
         */

        /**
         * Constructs a new RoomMember.
         * @memberof protocol
         * @classdesc Represents a RoomMember.
         * @implements IRoomMember
         * @constructor
         * @param {protocol.IRoomMember=} [properties] Properties to set
         */
        function RoomMember(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomMember uid.
         * @member {number|Long} uid
         * @memberof protocol.RoomMember
         * @instance
         */
        RoomMember.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoomMember nickname.
         * @member {string} nickname
         * @memberof protocol.RoomMember
         * @instance
         */
        RoomMember.prototype.nickname = "";

        /**
         * RoomMember avatar.
         * @member {string} avatar
         * @memberof protocol.RoomMember
         * @instance
         */
        RoomMember.prototype.avatar = "";

        /**
         * RoomMember beans.
         * @member {number} beans
         * @memberof protocol.RoomMember
         * @instance
         */
        RoomMember.prototype.beans = 0;

        /**
         * RoomMember state.
         * @member {protocol.MemberState} state
         * @memberof protocol.RoomMember
         * @instance
         */
        RoomMember.prototype.state = 0;

        /**
         * RoomMember event.
         * @member {protocol.MemberEvent} event
         * @memberof protocol.RoomMember
         * @instance
         */
        RoomMember.prototype.event = 0;

        /**
         * RoomMember change.
         * @member {boolean} change
         * @memberof protocol.RoomMember
         * @instance
         */
        RoomMember.prototype.change = false;

        /**
         * Creates a new RoomMember instance using the specified properties.
         * @function create
         * @memberof protocol.RoomMember
         * @static
         * @param {protocol.IRoomMember=} [properties] Properties to set
         * @returns {protocol.RoomMember} RoomMember instance
         */
        RoomMember.create = function create(properties) {
            return new RoomMember(properties);
        };

        /**
         * Encodes the specified RoomMember message. Does not implicitly {@link protocol.RoomMember.verify|verify} messages.
         * @function encode
         * @memberof protocol.RoomMember
         * @static
         * @param {protocol.IRoomMember} message RoomMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomMember.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.avatar);
            if (message.beans != null && Object.hasOwnProperty.call(message, "beans"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.beans);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.state);
            if (message.event != null && Object.hasOwnProperty.call(message, "event"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.event);
            if (message.change != null && Object.hasOwnProperty.call(message, "change"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.change);
            return writer;
        };

        /**
         * Encodes the specified RoomMember message, length delimited. Does not implicitly {@link protocol.RoomMember.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.RoomMember
         * @static
         * @param {protocol.IRoomMember} message RoomMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomMember.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomMember message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.RoomMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.RoomMember} RoomMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomMember.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.RoomMember();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    message.avatar = reader.string();
                    break;
                case 4:
                    message.beans = reader.double();
                    break;
                case 5:
                    message.state = reader.int32();
                    break;
                case 6:
                    message.event = reader.int32();
                    break;
                case 7:
                    message.change = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomMember message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.RoomMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.RoomMember} RoomMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomMember.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomMember message.
         * @function verify
         * @memberof protocol.RoomMember
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomMember.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.beans != null && message.hasOwnProperty("beans"))
                if (typeof message.beans !== "number")
                    return "beans: number expected";
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.event != null && message.hasOwnProperty("event"))
                switch (message.event) {
                default:
                    return "event: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.change != null && message.hasOwnProperty("change"))
                if (typeof message.change !== "boolean")
                    return "change: boolean expected";
            return null;
        };

        /**
         * Creates a RoomMember message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.RoomMember
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.RoomMember} RoomMember
         */
        RoomMember.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.RoomMember)
                return object;
            var message = new $root.protocol.RoomMember();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            if (object.beans != null)
                message.beans = Number(object.beans);
            switch (object.state) {
            case "MEMBER_STATE_UNSPECIFIED":
            case 0:
                message.state = 0;
                break;
            case "MEMBER_STATE_IDLE":
            case 1:
                message.state = 1;
                break;
            case "MEMBER_STATE_PLAYING":
            case 2:
                message.state = 2;
                break;
            case "MEMBER_STATE_IN_PLAY":
            case 3:
                message.state = 3;
                break;
            }
            switch (object.event) {
            case "MEMBER_EVENT_UNSPECIFIED":
            case 0:
                message.event = 0;
                break;
            case "MEMBER_EVENT_JOIN":
            case 1:
                message.event = 1;
                break;
            case "MEMBER_EVENT_READY":
            case 2:
                message.event = 2;
                break;
            case "MEMBER_EVENT_CANCEL_READY":
            case 3:
                message.event = 3;
                break;
            case "MEMBER_EVENT_START":
            case 4:
                message.event = 4;
                break;
            case "MEMBER_EVENT_QUIT":
            case 5:
                message.event = 5;
                break;
            }
            if (object.change != null)
                message.change = Boolean(object.change);
            return message;
        };

        /**
         * Creates a plain object from a RoomMember message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.RoomMember
         * @static
         * @param {protocol.RoomMember} message RoomMember
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomMember.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.nickname = "";
                object.avatar = "";
                object.beans = 0;
                object.state = options.enums === String ? "MEMBER_STATE_UNSPECIFIED" : 0;
                object.event = options.enums === String ? "MEMBER_EVENT_UNSPECIFIED" : 0;
                object.change = false;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            if (message.beans != null && message.hasOwnProperty("beans"))
                object.beans = options.json && !isFinite(message.beans) ? String(message.beans) : message.beans;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.protocol.MemberState[message.state] : message.state;
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = options.enums === String ? $root.protocol.MemberEvent[message.event] : message.event;
            if (message.change != null && message.hasOwnProperty("change"))
                object.change = message.change;
            return object;
        };

        /**
         * Converts this RoomMember to JSON.
         * @function toJSON
         * @memberof protocol.RoomMember
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomMember.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomMember;
    })();

    /**
     * MemberState enum.
     * @name protocol.MemberState
     * @enum {number}
     * @property {number} MEMBER_STATE_UNSPECIFIED=0 MEMBER_STATE_UNSPECIFIED value
     * @property {number} MEMBER_STATE_IDLE=1 MEMBER_STATE_IDLE value
     * @property {number} MEMBER_STATE_PLAYING=2 MEMBER_STATE_PLAYING value
     * @property {number} MEMBER_STATE_IN_PLAY=3 MEMBER_STATE_IN_PLAY value
     */
    protocol.MemberState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MEMBER_STATE_UNSPECIFIED"] = 0;
        values[valuesById[1] = "MEMBER_STATE_IDLE"] = 1;
        values[valuesById[2] = "MEMBER_STATE_PLAYING"] = 2;
        values[valuesById[3] = "MEMBER_STATE_IN_PLAY"] = 3;
        return values;
    })();

    /**
     * MemberEvent enum.
     * @name protocol.MemberEvent
     * @enum {number}
     * @property {number} MEMBER_EVENT_UNSPECIFIED=0 MEMBER_EVENT_UNSPECIFIED value
     * @property {number} MEMBER_EVENT_JOIN=1 MEMBER_EVENT_JOIN value
     * @property {number} MEMBER_EVENT_READY=2 MEMBER_EVENT_READY value
     * @property {number} MEMBER_EVENT_CANCEL_READY=3 MEMBER_EVENT_CANCEL_READY value
     * @property {number} MEMBER_EVENT_START=4 MEMBER_EVENT_START value
     * @property {number} MEMBER_EVENT_QUIT=5 MEMBER_EVENT_QUIT value
     */
    protocol.MemberEvent = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MEMBER_EVENT_UNSPECIFIED"] = 0;
        values[valuesById[1] = "MEMBER_EVENT_JOIN"] = 1;
        values[valuesById[2] = "MEMBER_EVENT_READY"] = 2;
        values[valuesById[3] = "MEMBER_EVENT_CANCEL_READY"] = 3;
        values[valuesById[4] = "MEMBER_EVENT_START"] = 4;
        values[valuesById[5] = "MEMBER_EVENT_QUIT"] = 5;
        return values;
    })();

    /**
     * RoomType enum.
     * @name protocol.RoomType
     * @enum {number}
     * @property {number} ROOM_TYPE_UNSPECIFIED=0 ROOM_TYPE_UNSPECIFIED value
     * @property {number} ROOM_TYPE_CLASSIC_3_6=1 ROOM_TYPE_CLASSIC_3_6 value
     */
    protocol.RoomType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ROOM_TYPE_UNSPECIFIED"] = 0;
        values[valuesById[1] = "ROOM_TYPE_CLASSIC_3_6"] = 1;
        return values;
    })();

    protocol.TakeCardRequest = (function() {

        /**
         * Properties of a TakeCardRequest.
         * @memberof protocol
         * @interface ITakeCardRequest
         * @property {number|Long|null} [gameId] TakeCardRequest gameId
         */

        /**
         * Constructs a new TakeCardRequest.
         * @memberof protocol
         * @classdesc Represents a TakeCardRequest.
         * @implements ITakeCardRequest
         * @constructor
         * @param {protocol.ITakeCardRequest=} [properties] Properties to set
         */
        function TakeCardRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TakeCardRequest gameId.
         * @member {number|Long} gameId
         * @memberof protocol.TakeCardRequest
         * @instance
         */
        TakeCardRequest.prototype.gameId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new TakeCardRequest instance using the specified properties.
         * @function create
         * @memberof protocol.TakeCardRequest
         * @static
         * @param {protocol.ITakeCardRequest=} [properties] Properties to set
         * @returns {protocol.TakeCardRequest} TakeCardRequest instance
         */
        TakeCardRequest.create = function create(properties) {
            return new TakeCardRequest(properties);
        };

        /**
         * Encodes the specified TakeCardRequest message. Does not implicitly {@link protocol.TakeCardRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.TakeCardRequest
         * @static
         * @param {protocol.ITakeCardRequest} message TakeCardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TakeCardRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.gameId);
            return writer;
        };

        /**
         * Encodes the specified TakeCardRequest message, length delimited. Does not implicitly {@link protocol.TakeCardRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TakeCardRequest
         * @static
         * @param {protocol.ITakeCardRequest} message TakeCardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TakeCardRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TakeCardRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TakeCardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TakeCardRequest} TakeCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TakeCardRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TakeCardRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TakeCardRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TakeCardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TakeCardRequest} TakeCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TakeCardRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TakeCardRequest message.
         * @function verify
         * @memberof protocol.TakeCardRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TakeCardRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId) && !(message.gameId && $util.isInteger(message.gameId.low) && $util.isInteger(message.gameId.high)))
                    return "gameId: integer|Long expected";
            return null;
        };

        /**
         * Creates a TakeCardRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TakeCardRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TakeCardRequest} TakeCardRequest
         */
        TakeCardRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TakeCardRequest)
                return object;
            var message = new $root.protocol.TakeCardRequest();
            if (object.gameId != null)
                if ($util.Long)
                    (message.gameId = $util.Long.fromValue(object.gameId)).unsigned = false;
                else if (typeof object.gameId === "string")
                    message.gameId = parseInt(object.gameId, 10);
                else if (typeof object.gameId === "number")
                    message.gameId = object.gameId;
                else if (typeof object.gameId === "object")
                    message.gameId = new $util.LongBits(object.gameId.low >>> 0, object.gameId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a TakeCardRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TakeCardRequest
         * @static
         * @param {protocol.TakeCardRequest} message TakeCardRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TakeCardRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gameId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gameId = options.longs === String ? "0" : 0;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (typeof message.gameId === "number")
                    object.gameId = options.longs === String ? String(message.gameId) : message.gameId;
                else
                    object.gameId = options.longs === String ? $util.Long.prototype.toString.call(message.gameId) : options.longs === Number ? new $util.LongBits(message.gameId.low >>> 0, message.gameId.high >>> 0).toNumber() : message.gameId;
            return object;
        };

        /**
         * Converts this TakeCardRequest to JSON.
         * @function toJSON
         * @memberof protocol.TakeCardRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TakeCardRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TakeCardRequest;
    })();

    protocol.TakeCardResponse = (function() {

        /**
         * Properties of a TakeCardResponse.
         * @memberof protocol
         * @interface ITakeCardResponse
         * @property {protocol.XzcCard|null} [card] TakeCardResponse card
         * @property {number|null} [point] TakeCardResponse point
         */

        /**
         * Constructs a new TakeCardResponse.
         * @memberof protocol
         * @classdesc Represents a TakeCardResponse.
         * @implements ITakeCardResponse
         * @constructor
         * @param {protocol.ITakeCardResponse=} [properties] Properties to set
         */
        function TakeCardResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TakeCardResponse card.
         * @member {protocol.XzcCard} card
         * @memberof protocol.TakeCardResponse
         * @instance
         */
        TakeCardResponse.prototype.card = 0;

        /**
         * TakeCardResponse point.
         * @member {number} point
         * @memberof protocol.TakeCardResponse
         * @instance
         */
        TakeCardResponse.prototype.point = 0;

        /**
         * Creates a new TakeCardResponse instance using the specified properties.
         * @function create
         * @memberof protocol.TakeCardResponse
         * @static
         * @param {protocol.ITakeCardResponse=} [properties] Properties to set
         * @returns {protocol.TakeCardResponse} TakeCardResponse instance
         */
        TakeCardResponse.create = function create(properties) {
            return new TakeCardResponse(properties);
        };

        /**
         * Encodes the specified TakeCardResponse message. Does not implicitly {@link protocol.TakeCardResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.TakeCardResponse
         * @static
         * @param {protocol.ITakeCardResponse} message TakeCardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TakeCardResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.card);
            if (message.point != null && Object.hasOwnProperty.call(message, "point"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.point);
            return writer;
        };

        /**
         * Encodes the specified TakeCardResponse message, length delimited. Does not implicitly {@link protocol.TakeCardResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TakeCardResponse
         * @static
         * @param {protocol.ITakeCardResponse} message TakeCardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TakeCardResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TakeCardResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TakeCardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TakeCardResponse} TakeCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TakeCardResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TakeCardResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.card = reader.int32();
                    break;
                case 2:
                    message.point = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TakeCardResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TakeCardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TakeCardResponse} TakeCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TakeCardResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TakeCardResponse message.
         * @function verify
         * @memberof protocol.TakeCardResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TakeCardResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.card != null && message.hasOwnProperty("card"))
                switch (message.card) {
                default:
                    return "card: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                    break;
                }
            if (message.point != null && message.hasOwnProperty("point"))
                if (!$util.isInteger(message.point))
                    return "point: integer expected";
            return null;
        };

        /**
         * Creates a TakeCardResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TakeCardResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TakeCardResponse} TakeCardResponse
         */
        TakeCardResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TakeCardResponse)
                return object;
            var message = new $root.protocol.TakeCardResponse();
            switch (object.card) {
            case "XZC_CRAD_UNSPECIFIED":
            case 0:
                message.card = 0;
                break;
            case "XZC_CRAD_1":
            case 1:
                message.card = 1;
                break;
            case "XZC_CRAD_2":
            case 2:
                message.card = 2;
                break;
            case "XZC_CRAD_3":
            case 3:
                message.card = 3;
                break;
            case "XZC_CRAD_4":
            case 4:
                message.card = 4;
                break;
            case "XZC_CRAD_5":
            case 5:
                message.card = 5;
                break;
            case "XZC_CRAD_6":
            case 6:
                message.card = 6;
                break;
            case "XZC_CRAD_7":
            case 7:
                message.card = 7;
                break;
            case "XZC_CRAD_8":
            case 8:
                message.card = 8;
                break;
            case "XZC_CRAD_9":
            case 9:
                message.card = 9;
                break;
            case "XZC_CRAD_10":
            case 10:
                message.card = 10;
                break;
            case "XZC_CRAD_11":
            case 11:
                message.card = 11;
                break;
            case "XZC_CRAD_12":
            case 12:
                message.card = 12;
                break;
            case "XZC_CRAD_13":
            case 13:
                message.card = 13;
                break;
            case "XZC_CRAD_14":
            case 14:
                message.card = 14;
                break;
            case "XZC_CRAD_15":
            case 15:
                message.card = 15;
                break;
            }
            if (object.point != null)
                message.point = object.point | 0;
            return message;
        };

        /**
         * Creates a plain object from a TakeCardResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TakeCardResponse
         * @static
         * @param {protocol.TakeCardResponse} message TakeCardResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TakeCardResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.card = options.enums === String ? "XZC_CRAD_UNSPECIFIED" : 0;
                object.point = 0;
            }
            if (message.card != null && message.hasOwnProperty("card"))
                object.card = options.enums === String ? $root.protocol.XzcCard[message.card] : message.card;
            if (message.point != null && message.hasOwnProperty("point"))
                object.point = message.point;
            return object;
        };

        /**
         * Converts this TakeCardResponse to JSON.
         * @function toJSON
         * @memberof protocol.TakeCardResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TakeCardResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TakeCardResponse;
    })();

    protocol.DiscardRequest = (function() {

        /**
         * Properties of a DiscardRequest.
         * @memberof protocol
         * @interface IDiscardRequest
         * @property {number|Long|null} [gameId] DiscardRequest gameId
         * @property {protocol.XzcCard|null} [card] DiscardRequest card
         */

        /**
         * Constructs a new DiscardRequest.
         * @memberof protocol
         * @classdesc Represents a DiscardRequest.
         * @implements IDiscardRequest
         * @constructor
         * @param {protocol.IDiscardRequest=} [properties] Properties to set
         */
        function DiscardRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DiscardRequest gameId.
         * @member {number|Long} gameId
         * @memberof protocol.DiscardRequest
         * @instance
         */
        DiscardRequest.prototype.gameId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DiscardRequest card.
         * @member {protocol.XzcCard} card
         * @memberof protocol.DiscardRequest
         * @instance
         */
        DiscardRequest.prototype.card = 0;

        /**
         * Creates a new DiscardRequest instance using the specified properties.
         * @function create
         * @memberof protocol.DiscardRequest
         * @static
         * @param {protocol.IDiscardRequest=} [properties] Properties to set
         * @returns {protocol.DiscardRequest} DiscardRequest instance
         */
        DiscardRequest.create = function create(properties) {
            return new DiscardRequest(properties);
        };

        /**
         * Encodes the specified DiscardRequest message. Does not implicitly {@link protocol.DiscardRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.DiscardRequest
         * @static
         * @param {protocol.IDiscardRequest} message DiscardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiscardRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.gameId);
            if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.card);
            return writer;
        };

        /**
         * Encodes the specified DiscardRequest message, length delimited. Does not implicitly {@link protocol.DiscardRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.DiscardRequest
         * @static
         * @param {protocol.IDiscardRequest} message DiscardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiscardRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DiscardRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.DiscardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.DiscardRequest} DiscardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiscardRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.DiscardRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameId = reader.int64();
                    break;
                case 2:
                    message.card = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DiscardRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.DiscardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.DiscardRequest} DiscardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiscardRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DiscardRequest message.
         * @function verify
         * @memberof protocol.DiscardRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DiscardRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId) && !(message.gameId && $util.isInteger(message.gameId.low) && $util.isInteger(message.gameId.high)))
                    return "gameId: integer|Long expected";
            if (message.card != null && message.hasOwnProperty("card"))
                switch (message.card) {
                default:
                    return "card: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                    break;
                }
            return null;
        };

        /**
         * Creates a DiscardRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.DiscardRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.DiscardRequest} DiscardRequest
         */
        DiscardRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.DiscardRequest)
                return object;
            var message = new $root.protocol.DiscardRequest();
            if (object.gameId != null)
                if ($util.Long)
                    (message.gameId = $util.Long.fromValue(object.gameId)).unsigned = false;
                else if (typeof object.gameId === "string")
                    message.gameId = parseInt(object.gameId, 10);
                else if (typeof object.gameId === "number")
                    message.gameId = object.gameId;
                else if (typeof object.gameId === "object")
                    message.gameId = new $util.LongBits(object.gameId.low >>> 0, object.gameId.high >>> 0).toNumber();
            switch (object.card) {
            case "XZC_CRAD_UNSPECIFIED":
            case 0:
                message.card = 0;
                break;
            case "XZC_CRAD_1":
            case 1:
                message.card = 1;
                break;
            case "XZC_CRAD_2":
            case 2:
                message.card = 2;
                break;
            case "XZC_CRAD_3":
            case 3:
                message.card = 3;
                break;
            case "XZC_CRAD_4":
            case 4:
                message.card = 4;
                break;
            case "XZC_CRAD_5":
            case 5:
                message.card = 5;
                break;
            case "XZC_CRAD_6":
            case 6:
                message.card = 6;
                break;
            case "XZC_CRAD_7":
            case 7:
                message.card = 7;
                break;
            case "XZC_CRAD_8":
            case 8:
                message.card = 8;
                break;
            case "XZC_CRAD_9":
            case 9:
                message.card = 9;
                break;
            case "XZC_CRAD_10":
            case 10:
                message.card = 10;
                break;
            case "XZC_CRAD_11":
            case 11:
                message.card = 11;
                break;
            case "XZC_CRAD_12":
            case 12:
                message.card = 12;
                break;
            case "XZC_CRAD_13":
            case 13:
                message.card = 13;
                break;
            case "XZC_CRAD_14":
            case 14:
                message.card = 14;
                break;
            case "XZC_CRAD_15":
            case 15:
                message.card = 15;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a DiscardRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.DiscardRequest
         * @static
         * @param {protocol.DiscardRequest} message DiscardRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DiscardRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gameId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gameId = options.longs === String ? "0" : 0;
                object.card = options.enums === String ? "XZC_CRAD_UNSPECIFIED" : 0;
            }
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (typeof message.gameId === "number")
                    object.gameId = options.longs === String ? String(message.gameId) : message.gameId;
                else
                    object.gameId = options.longs === String ? $util.Long.prototype.toString.call(message.gameId) : options.longs === Number ? new $util.LongBits(message.gameId.low >>> 0, message.gameId.high >>> 0).toNumber() : message.gameId;
            if (message.card != null && message.hasOwnProperty("card"))
                object.card = options.enums === String ? $root.protocol.XzcCard[message.card] : message.card;
            return object;
        };

        /**
         * Converts this DiscardRequest to JSON.
         * @function toJSON
         * @memberof protocol.DiscardRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DiscardRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DiscardRequest;
    })();

    protocol.DiscardResponse = (function() {

        /**
         * Properties of a DiscardResponse.
         * @memberof protocol
         * @interface IDiscardResponse
         */

        /**
         * Constructs a new DiscardResponse.
         * @memberof protocol
         * @classdesc Represents a DiscardResponse.
         * @implements IDiscardResponse
         * @constructor
         * @param {protocol.IDiscardResponse=} [properties] Properties to set
         */
        function DiscardResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new DiscardResponse instance using the specified properties.
         * @function create
         * @memberof protocol.DiscardResponse
         * @static
         * @param {protocol.IDiscardResponse=} [properties] Properties to set
         * @returns {protocol.DiscardResponse} DiscardResponse instance
         */
        DiscardResponse.create = function create(properties) {
            return new DiscardResponse(properties);
        };

        /**
         * Encodes the specified DiscardResponse message. Does not implicitly {@link protocol.DiscardResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.DiscardResponse
         * @static
         * @param {protocol.IDiscardResponse} message DiscardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiscardResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified DiscardResponse message, length delimited. Does not implicitly {@link protocol.DiscardResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.DiscardResponse
         * @static
         * @param {protocol.IDiscardResponse} message DiscardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiscardResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DiscardResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.DiscardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.DiscardResponse} DiscardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiscardResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.DiscardResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DiscardResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.DiscardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.DiscardResponse} DiscardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiscardResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DiscardResponse message.
         * @function verify
         * @memberof protocol.DiscardResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DiscardResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a DiscardResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.DiscardResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.DiscardResponse} DiscardResponse
         */
        DiscardResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.DiscardResponse)
                return object;
            return new $root.protocol.DiscardResponse();
        };

        /**
         * Creates a plain object from a DiscardResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.DiscardResponse
         * @static
         * @param {protocol.DiscardResponse} message DiscardResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DiscardResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this DiscardResponse to JSON.
         * @function toJSON
         * @memberof protocol.DiscardResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DiscardResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DiscardResponse;
    })();

    protocol.ChangeXzcCardRequest = (function() {

        /**
         * Properties of a ChangeXzcCardRequest.
         * @memberof protocol
         * @interface IChangeXzcCardRequest
         * @property {number|Long|null} [gameId] ChangeXzcCardRequest gameId
         */

        /**
         * Constructs a new ChangeXzcCardRequest.
         * @memberof protocol
         * @classdesc Represents a ChangeXzcCardRequest.
         * @implements IChangeXzcCardRequest
         * @constructor
         * @param {protocol.IChangeXzcCardRequest=} [properties] Properties to set
         */
        function ChangeXzcCardRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangeXzcCardRequest gameId.
         * @member {number|Long} gameId
         * @memberof protocol.ChangeXzcCardRequest
         * @instance
         */
        ChangeXzcCardRequest.prototype.gameId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ChangeXzcCardRequest instance using the specified properties.
         * @function create
         * @memberof protocol.ChangeXzcCardRequest
         * @static
         * @param {protocol.IChangeXzcCardRequest=} [properties] Properties to set
         * @returns {protocol.ChangeXzcCardRequest} ChangeXzcCardRequest instance
         */
        ChangeXzcCardRequest.create = function create(properties) {
            return new ChangeXzcCardRequest(properties);
        };

        /**
         * Encodes the specified ChangeXzcCardRequest message. Does not implicitly {@link protocol.ChangeXzcCardRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.ChangeXzcCardRequest
         * @static
         * @param {protocol.IChangeXzcCardRequest} message ChangeXzcCardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeXzcCardRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.gameId);
            return writer;
        };

        /**
         * Encodes the specified ChangeXzcCardRequest message, length delimited. Does not implicitly {@link protocol.ChangeXzcCardRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ChangeXzcCardRequest
         * @static
         * @param {protocol.IChangeXzcCardRequest} message ChangeXzcCardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeXzcCardRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangeXzcCardRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ChangeXzcCardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ChangeXzcCardRequest} ChangeXzcCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeXzcCardRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ChangeXzcCardRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChangeXzcCardRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ChangeXzcCardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ChangeXzcCardRequest} ChangeXzcCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeXzcCardRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangeXzcCardRequest message.
         * @function verify
         * @memberof protocol.ChangeXzcCardRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangeXzcCardRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId) && !(message.gameId && $util.isInteger(message.gameId.low) && $util.isInteger(message.gameId.high)))
                    return "gameId: integer|Long expected";
            return null;
        };

        /**
         * Creates a ChangeXzcCardRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ChangeXzcCardRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ChangeXzcCardRequest} ChangeXzcCardRequest
         */
        ChangeXzcCardRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ChangeXzcCardRequest)
                return object;
            var message = new $root.protocol.ChangeXzcCardRequest();
            if (object.gameId != null)
                if ($util.Long)
                    (message.gameId = $util.Long.fromValue(object.gameId)).unsigned = false;
                else if (typeof object.gameId === "string")
                    message.gameId = parseInt(object.gameId, 10);
                else if (typeof object.gameId === "number")
                    message.gameId = object.gameId;
                else if (typeof object.gameId === "object")
                    message.gameId = new $util.LongBits(object.gameId.low >>> 0, object.gameId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ChangeXzcCardRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ChangeXzcCardRequest
         * @static
         * @param {protocol.ChangeXzcCardRequest} message ChangeXzcCardRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangeXzcCardRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gameId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gameId = options.longs === String ? "0" : 0;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (typeof message.gameId === "number")
                    object.gameId = options.longs === String ? String(message.gameId) : message.gameId;
                else
                    object.gameId = options.longs === String ? $util.Long.prototype.toString.call(message.gameId) : options.longs === Number ? new $util.LongBits(message.gameId.low >>> 0, message.gameId.high >>> 0).toNumber() : message.gameId;
            return object;
        };

        /**
         * Converts this ChangeXzcCardRequest to JSON.
         * @function toJSON
         * @memberof protocol.ChangeXzcCardRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangeXzcCardRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeXzcCardRequest;
    })();

    protocol.ChangeXzcCardResponse = (function() {

        /**
         * Properties of a ChangeXzcCardResponse.
         * @memberof protocol
         * @interface IChangeXzcCardResponse
         * @property {protocol.XzcCard|null} [oldCard] ChangeXzcCardResponse oldCard
         * @property {number|null} [oldPoint] ChangeXzcCardResponse oldPoint
         * @property {protocol.XzcCard|null} [newCard] ChangeXzcCardResponse newCard
         * @property {number|null} [newPoint] ChangeXzcCardResponse newPoint
         */

        /**
         * Constructs a new ChangeXzcCardResponse.
         * @memberof protocol
         * @classdesc Represents a ChangeXzcCardResponse.
         * @implements IChangeXzcCardResponse
         * @constructor
         * @param {protocol.IChangeXzcCardResponse=} [properties] Properties to set
         */
        function ChangeXzcCardResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangeXzcCardResponse oldCard.
         * @member {protocol.XzcCard} oldCard
         * @memberof protocol.ChangeXzcCardResponse
         * @instance
         */
        ChangeXzcCardResponse.prototype.oldCard = 0;

        /**
         * ChangeXzcCardResponse oldPoint.
         * @member {number} oldPoint
         * @memberof protocol.ChangeXzcCardResponse
         * @instance
         */
        ChangeXzcCardResponse.prototype.oldPoint = 0;

        /**
         * ChangeXzcCardResponse newCard.
         * @member {protocol.XzcCard} newCard
         * @memberof protocol.ChangeXzcCardResponse
         * @instance
         */
        ChangeXzcCardResponse.prototype.newCard = 0;

        /**
         * ChangeXzcCardResponse newPoint.
         * @member {number} newPoint
         * @memberof protocol.ChangeXzcCardResponse
         * @instance
         */
        ChangeXzcCardResponse.prototype.newPoint = 0;

        /**
         * Creates a new ChangeXzcCardResponse instance using the specified properties.
         * @function create
         * @memberof protocol.ChangeXzcCardResponse
         * @static
         * @param {protocol.IChangeXzcCardResponse=} [properties] Properties to set
         * @returns {protocol.ChangeXzcCardResponse} ChangeXzcCardResponse instance
         */
        ChangeXzcCardResponse.create = function create(properties) {
            return new ChangeXzcCardResponse(properties);
        };

        /**
         * Encodes the specified ChangeXzcCardResponse message. Does not implicitly {@link protocol.ChangeXzcCardResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.ChangeXzcCardResponse
         * @static
         * @param {protocol.IChangeXzcCardResponse} message ChangeXzcCardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeXzcCardResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.oldCard != null && Object.hasOwnProperty.call(message, "oldCard"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.oldCard);
            if (message.oldPoint != null && Object.hasOwnProperty.call(message, "oldPoint"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.oldPoint);
            if (message.newCard != null && Object.hasOwnProperty.call(message, "newCard"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.newCard);
            if (message.newPoint != null && Object.hasOwnProperty.call(message, "newPoint"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.newPoint);
            return writer;
        };

        /**
         * Encodes the specified ChangeXzcCardResponse message, length delimited. Does not implicitly {@link protocol.ChangeXzcCardResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ChangeXzcCardResponse
         * @static
         * @param {protocol.IChangeXzcCardResponse} message ChangeXzcCardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeXzcCardResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangeXzcCardResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ChangeXzcCardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ChangeXzcCardResponse} ChangeXzcCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeXzcCardResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ChangeXzcCardResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.oldCard = reader.int32();
                    break;
                case 2:
                    message.oldPoint = reader.int32();
                    break;
                case 3:
                    message.newCard = reader.int32();
                    break;
                case 4:
                    message.newPoint = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChangeXzcCardResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ChangeXzcCardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ChangeXzcCardResponse} ChangeXzcCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeXzcCardResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangeXzcCardResponse message.
         * @function verify
         * @memberof protocol.ChangeXzcCardResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangeXzcCardResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.oldCard != null && message.hasOwnProperty("oldCard"))
                switch (message.oldCard) {
                default:
                    return "oldCard: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                    break;
                }
            if (message.oldPoint != null && message.hasOwnProperty("oldPoint"))
                if (!$util.isInteger(message.oldPoint))
                    return "oldPoint: integer expected";
            if (message.newCard != null && message.hasOwnProperty("newCard"))
                switch (message.newCard) {
                default:
                    return "newCard: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                    break;
                }
            if (message.newPoint != null && message.hasOwnProperty("newPoint"))
                if (!$util.isInteger(message.newPoint))
                    return "newPoint: integer expected";
            return null;
        };

        /**
         * Creates a ChangeXzcCardResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ChangeXzcCardResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ChangeXzcCardResponse} ChangeXzcCardResponse
         */
        ChangeXzcCardResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ChangeXzcCardResponse)
                return object;
            var message = new $root.protocol.ChangeXzcCardResponse();
            switch (object.oldCard) {
            case "XZC_CRAD_UNSPECIFIED":
            case 0:
                message.oldCard = 0;
                break;
            case "XZC_CRAD_1":
            case 1:
                message.oldCard = 1;
                break;
            case "XZC_CRAD_2":
            case 2:
                message.oldCard = 2;
                break;
            case "XZC_CRAD_3":
            case 3:
                message.oldCard = 3;
                break;
            case "XZC_CRAD_4":
            case 4:
                message.oldCard = 4;
                break;
            case "XZC_CRAD_5":
            case 5:
                message.oldCard = 5;
                break;
            case "XZC_CRAD_6":
            case 6:
                message.oldCard = 6;
                break;
            case "XZC_CRAD_7":
            case 7:
                message.oldCard = 7;
                break;
            case "XZC_CRAD_8":
            case 8:
                message.oldCard = 8;
                break;
            case "XZC_CRAD_9":
            case 9:
                message.oldCard = 9;
                break;
            case "XZC_CRAD_10":
            case 10:
                message.oldCard = 10;
                break;
            case "XZC_CRAD_11":
            case 11:
                message.oldCard = 11;
                break;
            case "XZC_CRAD_12":
            case 12:
                message.oldCard = 12;
                break;
            case "XZC_CRAD_13":
            case 13:
                message.oldCard = 13;
                break;
            case "XZC_CRAD_14":
            case 14:
                message.oldCard = 14;
                break;
            case "XZC_CRAD_15":
            case 15:
                message.oldCard = 15;
                break;
            }
            if (object.oldPoint != null)
                message.oldPoint = object.oldPoint | 0;
            switch (object.newCard) {
            case "XZC_CRAD_UNSPECIFIED":
            case 0:
                message.newCard = 0;
                break;
            case "XZC_CRAD_1":
            case 1:
                message.newCard = 1;
                break;
            case "XZC_CRAD_2":
            case 2:
                message.newCard = 2;
                break;
            case "XZC_CRAD_3":
            case 3:
                message.newCard = 3;
                break;
            case "XZC_CRAD_4":
            case 4:
                message.newCard = 4;
                break;
            case "XZC_CRAD_5":
            case 5:
                message.newCard = 5;
                break;
            case "XZC_CRAD_6":
            case 6:
                message.newCard = 6;
                break;
            case "XZC_CRAD_7":
            case 7:
                message.newCard = 7;
                break;
            case "XZC_CRAD_8":
            case 8:
                message.newCard = 8;
                break;
            case "XZC_CRAD_9":
            case 9:
                message.newCard = 9;
                break;
            case "XZC_CRAD_10":
            case 10:
                message.newCard = 10;
                break;
            case "XZC_CRAD_11":
            case 11:
                message.newCard = 11;
                break;
            case "XZC_CRAD_12":
            case 12:
                message.newCard = 12;
                break;
            case "XZC_CRAD_13":
            case 13:
                message.newCard = 13;
                break;
            case "XZC_CRAD_14":
            case 14:
                message.newCard = 14;
                break;
            case "XZC_CRAD_15":
            case 15:
                message.newCard = 15;
                break;
            }
            if (object.newPoint != null)
                message.newPoint = object.newPoint | 0;
            return message;
        };

        /**
         * Creates a plain object from a ChangeXzcCardResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ChangeXzcCardResponse
         * @static
         * @param {protocol.ChangeXzcCardResponse} message ChangeXzcCardResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangeXzcCardResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.oldCard = options.enums === String ? "XZC_CRAD_UNSPECIFIED" : 0;
                object.oldPoint = 0;
                object.newCard = options.enums === String ? "XZC_CRAD_UNSPECIFIED" : 0;
                object.newPoint = 0;
            }
            if (message.oldCard != null && message.hasOwnProperty("oldCard"))
                object.oldCard = options.enums === String ? $root.protocol.XzcCard[message.oldCard] : message.oldCard;
            if (message.oldPoint != null && message.hasOwnProperty("oldPoint"))
                object.oldPoint = message.oldPoint;
            if (message.newCard != null && message.hasOwnProperty("newCard"))
                object.newCard = options.enums === String ? $root.protocol.XzcCard[message.newCard] : message.newCard;
            if (message.newPoint != null && message.hasOwnProperty("newPoint"))
                object.newPoint = message.newPoint;
            return object;
        };

        /**
         * Converts this ChangeXzcCardResponse to JSON.
         * @function toJSON
         * @memberof protocol.ChangeXzcCardResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangeXzcCardResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeXzcCardResponse;
    })();

    protocol.BettingRequest = (function() {

        /**
         * Properties of a BettingRequest.
         * @memberof protocol
         * @interface IBettingRequest
         * @property {number|Long|null} [gameId] BettingRequest gameId
         */

        /**
         * Constructs a new BettingRequest.
         * @memberof protocol
         * @classdesc Represents a BettingRequest.
         * @implements IBettingRequest
         * @constructor
         * @param {protocol.IBettingRequest=} [properties] Properties to set
         */
        function BettingRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BettingRequest gameId.
         * @member {number|Long} gameId
         * @memberof protocol.BettingRequest
         * @instance
         */
        BettingRequest.prototype.gameId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BettingRequest instance using the specified properties.
         * @function create
         * @memberof protocol.BettingRequest
         * @static
         * @param {protocol.IBettingRequest=} [properties] Properties to set
         * @returns {protocol.BettingRequest} BettingRequest instance
         */
        BettingRequest.create = function create(properties) {
            return new BettingRequest(properties);
        };

        /**
         * Encodes the specified BettingRequest message. Does not implicitly {@link protocol.BettingRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.BettingRequest
         * @static
         * @param {protocol.IBettingRequest} message BettingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BettingRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.gameId);
            return writer;
        };

        /**
         * Encodes the specified BettingRequest message, length delimited. Does not implicitly {@link protocol.BettingRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BettingRequest
         * @static
         * @param {protocol.IBettingRequest} message BettingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BettingRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BettingRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BettingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BettingRequest} BettingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BettingRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BettingRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BettingRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BettingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BettingRequest} BettingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BettingRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BettingRequest message.
         * @function verify
         * @memberof protocol.BettingRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BettingRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId) && !(message.gameId && $util.isInteger(message.gameId.low) && $util.isInteger(message.gameId.high)))
                    return "gameId: integer|Long expected";
            return null;
        };

        /**
         * Creates a BettingRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BettingRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BettingRequest} BettingRequest
         */
        BettingRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BettingRequest)
                return object;
            var message = new $root.protocol.BettingRequest();
            if (object.gameId != null)
                if ($util.Long)
                    (message.gameId = $util.Long.fromValue(object.gameId)).unsigned = false;
                else if (typeof object.gameId === "string")
                    message.gameId = parseInt(object.gameId, 10);
                else if (typeof object.gameId === "number")
                    message.gameId = object.gameId;
                else if (typeof object.gameId === "object")
                    message.gameId = new $util.LongBits(object.gameId.low >>> 0, object.gameId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BettingRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BettingRequest
         * @static
         * @param {protocol.BettingRequest} message BettingRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BettingRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gameId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gameId = options.longs === String ? "0" : 0;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (typeof message.gameId === "number")
                    object.gameId = options.longs === String ? String(message.gameId) : message.gameId;
                else
                    object.gameId = options.longs === String ? $util.Long.prototype.toString.call(message.gameId) : options.longs === Number ? new $util.LongBits(message.gameId.low >>> 0, message.gameId.high >>> 0).toNumber() : message.gameId;
            return object;
        };

        /**
         * Converts this BettingRequest to JSON.
         * @function toJSON
         * @memberof protocol.BettingRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BettingRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BettingRequest;
    })();

    protocol.BettingResponse = (function() {

        /**
         * Properties of a BettingResponse.
         * @memberof protocol
         * @interface IBettingResponse
         * @property {boolean|null} [success] BettingResponse success
         * @property {number|null} [coins] BettingResponse coins
         * @property {number|null} [balance] BettingResponse balance
         */

        /**
         * Constructs a new BettingResponse.
         * @memberof protocol
         * @classdesc Represents a BettingResponse.
         * @implements IBettingResponse
         * @constructor
         * @param {protocol.IBettingResponse=} [properties] Properties to set
         */
        function BettingResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BettingResponse success.
         * @member {boolean} success
         * @memberof protocol.BettingResponse
         * @instance
         */
        BettingResponse.prototype.success = false;

        /**
         * BettingResponse coins.
         * @member {number} coins
         * @memberof protocol.BettingResponse
         * @instance
         */
        BettingResponse.prototype.coins = 0;

        /**
         * BettingResponse balance.
         * @member {number} balance
         * @memberof protocol.BettingResponse
         * @instance
         */
        BettingResponse.prototype.balance = 0;

        /**
         * Creates a new BettingResponse instance using the specified properties.
         * @function create
         * @memberof protocol.BettingResponse
         * @static
         * @param {protocol.IBettingResponse=} [properties] Properties to set
         * @returns {protocol.BettingResponse} BettingResponse instance
         */
        BettingResponse.create = function create(properties) {
            return new BettingResponse(properties);
        };

        /**
         * Encodes the specified BettingResponse message. Does not implicitly {@link protocol.BettingResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.BettingResponse
         * @static
         * @param {protocol.IBettingResponse} message BettingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BettingResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.coins != null && Object.hasOwnProperty.call(message, "coins"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.coins);
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.balance);
            return writer;
        };

        /**
         * Encodes the specified BettingResponse message, length delimited. Does not implicitly {@link protocol.BettingResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BettingResponse
         * @static
         * @param {protocol.IBettingResponse} message BettingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BettingResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BettingResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BettingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BettingResponse} BettingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BettingResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BettingResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                case 2:
                    message.coins = reader.int32();
                    break;
                case 3:
                    message.balance = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BettingResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BettingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BettingResponse} BettingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BettingResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BettingResponse message.
         * @function verify
         * @memberof protocol.BettingResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BettingResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.coins != null && message.hasOwnProperty("coins"))
                if (!$util.isInteger(message.coins))
                    return "coins: integer expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (!$util.isInteger(message.balance))
                    return "balance: integer expected";
            return null;
        };

        /**
         * Creates a BettingResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BettingResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BettingResponse} BettingResponse
         */
        BettingResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BettingResponse)
                return object;
            var message = new $root.protocol.BettingResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.coins != null)
                message.coins = object.coins | 0;
            if (object.balance != null)
                message.balance = object.balance | 0;
            return message;
        };

        /**
         * Creates a plain object from a BettingResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BettingResponse
         * @static
         * @param {protocol.BettingResponse} message BettingResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BettingResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.success = false;
                object.coins = 0;
                object.balance = 0;
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.coins != null && message.hasOwnProperty("coins"))
                object.coins = message.coins;
            if (message.balance != null && message.hasOwnProperty("balance"))
                object.balance = message.balance;
            return object;
        };

        /**
         * Converts this BettingResponse to JSON.
         * @function toJSON
         * @memberof protocol.BettingResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BettingResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BettingResponse;
    })();

    protocol.PassRequest = (function() {

        /**
         * Properties of a PassRequest.
         * @memberof protocol
         * @interface IPassRequest
         * @property {number|Long|null} [gameId] PassRequest gameId
         */

        /**
         * Constructs a new PassRequest.
         * @memberof protocol
         * @classdesc Represents a PassRequest.
         * @implements IPassRequest
         * @constructor
         * @param {protocol.IPassRequest=} [properties] Properties to set
         */
        function PassRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PassRequest gameId.
         * @member {number|Long} gameId
         * @memberof protocol.PassRequest
         * @instance
         */
        PassRequest.prototype.gameId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PassRequest instance using the specified properties.
         * @function create
         * @memberof protocol.PassRequest
         * @static
         * @param {protocol.IPassRequest=} [properties] Properties to set
         * @returns {protocol.PassRequest} PassRequest instance
         */
        PassRequest.create = function create(properties) {
            return new PassRequest(properties);
        };

        /**
         * Encodes the specified PassRequest message. Does not implicitly {@link protocol.PassRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.PassRequest
         * @static
         * @param {protocol.IPassRequest} message PassRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PassRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.gameId);
            return writer;
        };

        /**
         * Encodes the specified PassRequest message, length delimited. Does not implicitly {@link protocol.PassRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.PassRequest
         * @static
         * @param {protocol.IPassRequest} message PassRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PassRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PassRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.PassRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.PassRequest} PassRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PassRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.PassRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PassRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.PassRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.PassRequest} PassRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PassRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PassRequest message.
         * @function verify
         * @memberof protocol.PassRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PassRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId) && !(message.gameId && $util.isInteger(message.gameId.low) && $util.isInteger(message.gameId.high)))
                    return "gameId: integer|Long expected";
            return null;
        };

        /**
         * Creates a PassRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.PassRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.PassRequest} PassRequest
         */
        PassRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.PassRequest)
                return object;
            var message = new $root.protocol.PassRequest();
            if (object.gameId != null)
                if ($util.Long)
                    (message.gameId = $util.Long.fromValue(object.gameId)).unsigned = false;
                else if (typeof object.gameId === "string")
                    message.gameId = parseInt(object.gameId, 10);
                else if (typeof object.gameId === "number")
                    message.gameId = object.gameId;
                else if (typeof object.gameId === "object")
                    message.gameId = new $util.LongBits(object.gameId.low >>> 0, object.gameId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PassRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.PassRequest
         * @static
         * @param {protocol.PassRequest} message PassRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PassRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gameId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gameId = options.longs === String ? "0" : 0;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (typeof message.gameId === "number")
                    object.gameId = options.longs === String ? String(message.gameId) : message.gameId;
                else
                    object.gameId = options.longs === String ? $util.Long.prototype.toString.call(message.gameId) : options.longs === Number ? new $util.LongBits(message.gameId.low >>> 0, message.gameId.high >>> 0).toNumber() : message.gameId;
            return object;
        };

        /**
         * Converts this PassRequest to JSON.
         * @function toJSON
         * @memberof protocol.PassRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PassRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PassRequest;
    })();

    protocol.PassResponse = (function() {

        /**
         * Properties of a PassResponse.
         * @memberof protocol
         * @interface IPassResponse
         */

        /**
         * Constructs a new PassResponse.
         * @memberof protocol
         * @classdesc Represents a PassResponse.
         * @implements IPassResponse
         * @constructor
         * @param {protocol.IPassResponse=} [properties] Properties to set
         */
        function PassResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new PassResponse instance using the specified properties.
         * @function create
         * @memberof protocol.PassResponse
         * @static
         * @param {protocol.IPassResponse=} [properties] Properties to set
         * @returns {protocol.PassResponse} PassResponse instance
         */
        PassResponse.create = function create(properties) {
            return new PassResponse(properties);
        };

        /**
         * Encodes the specified PassResponse message. Does not implicitly {@link protocol.PassResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.PassResponse
         * @static
         * @param {protocol.IPassResponse} message PassResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PassResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified PassResponse message, length delimited. Does not implicitly {@link protocol.PassResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.PassResponse
         * @static
         * @param {protocol.IPassResponse} message PassResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PassResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PassResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.PassResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.PassResponse} PassResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PassResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.PassResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PassResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.PassResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.PassResponse} PassResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PassResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PassResponse message.
         * @function verify
         * @memberof protocol.PassResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PassResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a PassResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.PassResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.PassResponse} PassResponse
         */
        PassResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.PassResponse)
                return object;
            return new $root.protocol.PassResponse();
        };

        /**
         * Creates a plain object from a PassResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.PassResponse
         * @static
         * @param {protocol.PassResponse} message PassResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PassResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PassResponse to JSON.
         * @function toJSON
         * @memberof protocol.PassResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PassResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PassResponse;
    })();

    protocol.SyncGameDataRequest = (function() {

        /**
         * Properties of a SyncGameDataRequest.
         * @memberof protocol
         * @interface ISyncGameDataRequest
         * @property {number|Long|null} [gameId] SyncGameDataRequest gameId
         */

        /**
         * Constructs a new SyncGameDataRequest.
         * @memberof protocol
         * @classdesc Represents a SyncGameDataRequest.
         * @implements ISyncGameDataRequest
         * @constructor
         * @param {protocol.ISyncGameDataRequest=} [properties] Properties to set
         */
        function SyncGameDataRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncGameDataRequest gameId.
         * @member {number|Long} gameId
         * @memberof protocol.SyncGameDataRequest
         * @instance
         */
        SyncGameDataRequest.prototype.gameId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SyncGameDataRequest instance using the specified properties.
         * @function create
         * @memberof protocol.SyncGameDataRequest
         * @static
         * @param {protocol.ISyncGameDataRequest=} [properties] Properties to set
         * @returns {protocol.SyncGameDataRequest} SyncGameDataRequest instance
         */
        SyncGameDataRequest.create = function create(properties) {
            return new SyncGameDataRequest(properties);
        };

        /**
         * Encodes the specified SyncGameDataRequest message. Does not implicitly {@link protocol.SyncGameDataRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.SyncGameDataRequest
         * @static
         * @param {protocol.ISyncGameDataRequest} message SyncGameDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncGameDataRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.gameId);
            return writer;
        };

        /**
         * Encodes the specified SyncGameDataRequest message, length delimited. Does not implicitly {@link protocol.SyncGameDataRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SyncGameDataRequest
         * @static
         * @param {protocol.ISyncGameDataRequest} message SyncGameDataRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncGameDataRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncGameDataRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SyncGameDataRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SyncGameDataRequest} SyncGameDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncGameDataRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SyncGameDataRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SyncGameDataRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SyncGameDataRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SyncGameDataRequest} SyncGameDataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncGameDataRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncGameDataRequest message.
         * @function verify
         * @memberof protocol.SyncGameDataRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncGameDataRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId) && !(message.gameId && $util.isInteger(message.gameId.low) && $util.isInteger(message.gameId.high)))
                    return "gameId: integer|Long expected";
            return null;
        };

        /**
         * Creates a SyncGameDataRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SyncGameDataRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SyncGameDataRequest} SyncGameDataRequest
         */
        SyncGameDataRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SyncGameDataRequest)
                return object;
            var message = new $root.protocol.SyncGameDataRequest();
            if (object.gameId != null)
                if ($util.Long)
                    (message.gameId = $util.Long.fromValue(object.gameId)).unsigned = false;
                else if (typeof object.gameId === "string")
                    message.gameId = parseInt(object.gameId, 10);
                else if (typeof object.gameId === "number")
                    message.gameId = object.gameId;
                else if (typeof object.gameId === "object")
                    message.gameId = new $util.LongBits(object.gameId.low >>> 0, object.gameId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SyncGameDataRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SyncGameDataRequest
         * @static
         * @param {protocol.SyncGameDataRequest} message SyncGameDataRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncGameDataRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gameId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gameId = options.longs === String ? "0" : 0;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (typeof message.gameId === "number")
                    object.gameId = options.longs === String ? String(message.gameId) : message.gameId;
                else
                    object.gameId = options.longs === String ? $util.Long.prototype.toString.call(message.gameId) : options.longs === Number ? new $util.LongBits(message.gameId.low >>> 0, message.gameId.high >>> 0).toNumber() : message.gameId;
            return object;
        };

        /**
         * Converts this SyncGameDataRequest to JSON.
         * @function toJSON
         * @memberof protocol.SyncGameDataRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncGameDataRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SyncGameDataRequest;
    })();

    protocol.SyncGameDataResponse = (function() {

        /**
         * Properties of a SyncGameDataResponse.
         * @memberof protocol
         * @interface ISyncGameDataResponse
         * @property {number|Long|null} [gameId] SyncGameDataResponse gameId
         * @property {protocol.IGameData|null} [gameDate] SyncGameDataResponse gameDate
         */

        /**
         * Constructs a new SyncGameDataResponse.
         * @memberof protocol
         * @classdesc Represents a SyncGameDataResponse.
         * @implements ISyncGameDataResponse
         * @constructor
         * @param {protocol.ISyncGameDataResponse=} [properties] Properties to set
         */
        function SyncGameDataResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncGameDataResponse gameId.
         * @member {number|Long} gameId
         * @memberof protocol.SyncGameDataResponse
         * @instance
         */
        SyncGameDataResponse.prototype.gameId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SyncGameDataResponse gameDate.
         * @member {protocol.IGameData|null|undefined} gameDate
         * @memberof protocol.SyncGameDataResponse
         * @instance
         */
        SyncGameDataResponse.prototype.gameDate = null;

        /**
         * Creates a new SyncGameDataResponse instance using the specified properties.
         * @function create
         * @memberof protocol.SyncGameDataResponse
         * @static
         * @param {protocol.ISyncGameDataResponse=} [properties] Properties to set
         * @returns {protocol.SyncGameDataResponse} SyncGameDataResponse instance
         */
        SyncGameDataResponse.create = function create(properties) {
            return new SyncGameDataResponse(properties);
        };

        /**
         * Encodes the specified SyncGameDataResponse message. Does not implicitly {@link protocol.SyncGameDataResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.SyncGameDataResponse
         * @static
         * @param {protocol.ISyncGameDataResponse} message SyncGameDataResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncGameDataResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.gameId);
            if (message.gameDate != null && Object.hasOwnProperty.call(message, "gameDate"))
                $root.protocol.GameData.encode(message.gameDate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SyncGameDataResponse message, length delimited. Does not implicitly {@link protocol.SyncGameDataResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SyncGameDataResponse
         * @static
         * @param {protocol.ISyncGameDataResponse} message SyncGameDataResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncGameDataResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncGameDataResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SyncGameDataResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SyncGameDataResponse} SyncGameDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncGameDataResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SyncGameDataResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameId = reader.int64();
                    break;
                case 2:
                    message.gameDate = $root.protocol.GameData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SyncGameDataResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SyncGameDataResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SyncGameDataResponse} SyncGameDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncGameDataResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncGameDataResponse message.
         * @function verify
         * @memberof protocol.SyncGameDataResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncGameDataResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId) && !(message.gameId && $util.isInteger(message.gameId.low) && $util.isInteger(message.gameId.high)))
                    return "gameId: integer|Long expected";
            if (message.gameDate != null && message.hasOwnProperty("gameDate")) {
                var error = $root.protocol.GameData.verify(message.gameDate);
                if (error)
                    return "gameDate." + error;
            }
            return null;
        };

        /**
         * Creates a SyncGameDataResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SyncGameDataResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SyncGameDataResponse} SyncGameDataResponse
         */
        SyncGameDataResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SyncGameDataResponse)
                return object;
            var message = new $root.protocol.SyncGameDataResponse();
            if (object.gameId != null)
                if ($util.Long)
                    (message.gameId = $util.Long.fromValue(object.gameId)).unsigned = false;
                else if (typeof object.gameId === "string")
                    message.gameId = parseInt(object.gameId, 10);
                else if (typeof object.gameId === "number")
                    message.gameId = object.gameId;
                else if (typeof object.gameId === "object")
                    message.gameId = new $util.LongBits(object.gameId.low >>> 0, object.gameId.high >>> 0).toNumber();
            if (object.gameDate != null) {
                if (typeof object.gameDate !== "object")
                    throw TypeError(".protocol.SyncGameDataResponse.gameDate: object expected");
                message.gameDate = $root.protocol.GameData.fromObject(object.gameDate);
            }
            return message;
        };

        /**
         * Creates a plain object from a SyncGameDataResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SyncGameDataResponse
         * @static
         * @param {protocol.SyncGameDataResponse} message SyncGameDataResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncGameDataResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gameId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gameId = options.longs === String ? "0" : 0;
                object.gameDate = null;
            }
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (typeof message.gameId === "number")
                    object.gameId = options.longs === String ? String(message.gameId) : message.gameId;
                else
                    object.gameId = options.longs === String ? $util.Long.prototype.toString.call(message.gameId) : options.longs === Number ? new $util.LongBits(message.gameId.low >>> 0, message.gameId.high >>> 0).toNumber() : message.gameId;
            if (message.gameDate != null && message.hasOwnProperty("gameDate"))
                object.gameDate = $root.protocol.GameData.toObject(message.gameDate, options);
            return object;
        };

        /**
         * Converts this SyncGameDataResponse to JSON.
         * @function toJSON
         * @memberof protocol.SyncGameDataResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncGameDataResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SyncGameDataResponse;
    })();

    protocol.GameData = (function() {

        /**
         * Properties of a GameData.
         * @memberof protocol
         * @interface IGameData
         * @property {number|Long|null} [gameId] GameData gameId
         * @property {Object.<string,protocol.IGamer>|null} [gamerMap] GameData gamerMap
         * @property {number|null} [cardCount] GameData cardCount
         * @property {Array.<protocol.XzcCard>|null} [discardPile] GameData discardPile
         */

        /**
         * Constructs a new GameData.
         * @memberof protocol
         * @classdesc Represents a GameData.
         * @implements IGameData
         * @constructor
         * @param {protocol.IGameData=} [properties] Properties to set
         */
        function GameData(properties) {
            this.gamerMap = {};
            this.discardPile = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameData gameId.
         * @member {number|Long} gameId
         * @memberof protocol.GameData
         * @instance
         */
        GameData.prototype.gameId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameData gamerMap.
         * @member {Object.<string,protocol.IGamer>} gamerMap
         * @memberof protocol.GameData
         * @instance
         */
        GameData.prototype.gamerMap = $util.emptyObject;

        /**
         * GameData cardCount.
         * @member {number} cardCount
         * @memberof protocol.GameData
         * @instance
         */
        GameData.prototype.cardCount = 0;

        /**
         * GameData discardPile.
         * @member {Array.<protocol.XzcCard>} discardPile
         * @memberof protocol.GameData
         * @instance
         */
        GameData.prototype.discardPile = $util.emptyArray;

        /**
         * Creates a new GameData instance using the specified properties.
         * @function create
         * @memberof protocol.GameData
         * @static
         * @param {protocol.IGameData=} [properties] Properties to set
         * @returns {protocol.GameData} GameData instance
         */
        GameData.create = function create(properties) {
            return new GameData(properties);
        };

        /**
         * Encodes the specified GameData message. Does not implicitly {@link protocol.GameData.verify|verify} messages.
         * @function encode
         * @memberof protocol.GameData
         * @static
         * @param {protocol.IGameData} message GameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.gameId);
            if (message.gamerMap != null && Object.hasOwnProperty.call(message, "gamerMap"))
                for (var keys = Object.keys(message.gamerMap), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]);
                    $root.protocol.Gamer.encode(message.gamerMap[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.cardCount != null && Object.hasOwnProperty.call(message, "cardCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cardCount);
            if (message.discardPile != null && message.discardPile.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.discardPile.length; ++i)
                    writer.int32(message.discardPile[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified GameData message, length delimited. Does not implicitly {@link protocol.GameData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GameData
         * @static
         * @param {protocol.IGameData} message GameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameData message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GameData} GameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GameData(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameId = reader.int64();
                    break;
                case 2:
                    if (message.gamerMap === $util.emptyObject)
                        message.gamerMap = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.int64();
                            break;
                        case 2:
                            value = $root.protocol.Gamer.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.gamerMap[typeof key === "object" ? $util.longToHash(key) : key] = value;
                    break;
                case 3:
                    message.cardCount = reader.int32();
                    break;
                case 4:
                    if (!(message.discardPile && message.discardPile.length))
                        message.discardPile = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.discardPile.push(reader.int32());
                    } else
                        message.discardPile.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.GameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GameData} GameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameData message.
         * @function verify
         * @memberof protocol.GameData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId) && !(message.gameId && $util.isInteger(message.gameId.low) && $util.isInteger(message.gameId.high)))
                    return "gameId: integer|Long expected";
            if (message.gamerMap != null && message.hasOwnProperty("gamerMap")) {
                if (!$util.isObject(message.gamerMap))
                    return "gamerMap: object expected";
                var key = Object.keys(message.gamerMap);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key64Re.test(key[i]))
                        return "gamerMap: integer|Long key{k:int64} expected";
                    {
                        var error = $root.protocol.Gamer.verify(message.gamerMap[key[i]]);
                        if (error)
                            return "gamerMap." + error;
                    }
                }
            }
            if (message.cardCount != null && message.hasOwnProperty("cardCount"))
                if (!$util.isInteger(message.cardCount))
                    return "cardCount: integer expected";
            if (message.discardPile != null && message.hasOwnProperty("discardPile")) {
                if (!Array.isArray(message.discardPile))
                    return "discardPile: array expected";
                for (var i = 0; i < message.discardPile.length; ++i)
                    switch (message.discardPile[i]) {
                    default:
                        return "discardPile: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                        break;
                    }
            }
            return null;
        };

        /**
         * Creates a GameData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.GameData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GameData} GameData
         */
        GameData.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GameData)
                return object;
            var message = new $root.protocol.GameData();
            if (object.gameId != null)
                if ($util.Long)
                    (message.gameId = $util.Long.fromValue(object.gameId)).unsigned = false;
                else if (typeof object.gameId === "string")
                    message.gameId = parseInt(object.gameId, 10);
                else if (typeof object.gameId === "number")
                    message.gameId = object.gameId;
                else if (typeof object.gameId === "object")
                    message.gameId = new $util.LongBits(object.gameId.low >>> 0, object.gameId.high >>> 0).toNumber();
            if (object.gamerMap) {
                if (typeof object.gamerMap !== "object")
                    throw TypeError(".protocol.GameData.gamerMap: object expected");
                message.gamerMap = {};
                for (var keys = Object.keys(object.gamerMap), i = 0; i < keys.length; ++i) {
                    if (typeof object.gamerMap[keys[i]] !== "object")
                        throw TypeError(".protocol.GameData.gamerMap: object expected");
                    message.gamerMap[keys[i]] = $root.protocol.Gamer.fromObject(object.gamerMap[keys[i]]);
                }
            }
            if (object.cardCount != null)
                message.cardCount = object.cardCount | 0;
            if (object.discardPile) {
                if (!Array.isArray(object.discardPile))
                    throw TypeError(".protocol.GameData.discardPile: array expected");
                message.discardPile = [];
                for (var i = 0; i < object.discardPile.length; ++i)
                    switch (object.discardPile[i]) {
                    default:
                    case "XZC_CRAD_UNSPECIFIED":
                    case 0:
                        message.discardPile[i] = 0;
                        break;
                    case "XZC_CRAD_1":
                    case 1:
                        message.discardPile[i] = 1;
                        break;
                    case "XZC_CRAD_2":
                    case 2:
                        message.discardPile[i] = 2;
                        break;
                    case "XZC_CRAD_3":
                    case 3:
                        message.discardPile[i] = 3;
                        break;
                    case "XZC_CRAD_4":
                    case 4:
                        message.discardPile[i] = 4;
                        break;
                    case "XZC_CRAD_5":
                    case 5:
                        message.discardPile[i] = 5;
                        break;
                    case "XZC_CRAD_6":
                    case 6:
                        message.discardPile[i] = 6;
                        break;
                    case "XZC_CRAD_7":
                    case 7:
                        message.discardPile[i] = 7;
                        break;
                    case "XZC_CRAD_8":
                    case 8:
                        message.discardPile[i] = 8;
                        break;
                    case "XZC_CRAD_9":
                    case 9:
                        message.discardPile[i] = 9;
                        break;
                    case "XZC_CRAD_10":
                    case 10:
                        message.discardPile[i] = 10;
                        break;
                    case "XZC_CRAD_11":
                    case 11:
                        message.discardPile[i] = 11;
                        break;
                    case "XZC_CRAD_12":
                    case 12:
                        message.discardPile[i] = 12;
                        break;
                    case "XZC_CRAD_13":
                    case 13:
                        message.discardPile[i] = 13;
                        break;
                    case "XZC_CRAD_14":
                    case 14:
                        message.discardPile[i] = 14;
                        break;
                    case "XZC_CRAD_15":
                    case 15:
                        message.discardPile[i] = 15;
                        break;
                    }
            }
            return message;
        };

        /**
         * Creates a plain object from a GameData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GameData
         * @static
         * @param {protocol.GameData} message GameData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.discardPile = [];
            if (options.objects || options.defaults)
                object.gamerMap = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gameId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gameId = options.longs === String ? "0" : 0;
                object.cardCount = 0;
            }
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (typeof message.gameId === "number")
                    object.gameId = options.longs === String ? String(message.gameId) : message.gameId;
                else
                    object.gameId = options.longs === String ? $util.Long.prototype.toString.call(message.gameId) : options.longs === Number ? new $util.LongBits(message.gameId.low >>> 0, message.gameId.high >>> 0).toNumber() : message.gameId;
            var keys2;
            if (message.gamerMap && (keys2 = Object.keys(message.gamerMap)).length) {
                object.gamerMap = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.gamerMap[keys2[j]] = $root.protocol.Gamer.toObject(message.gamerMap[keys2[j]], options);
            }
            if (message.cardCount != null && message.hasOwnProperty("cardCount"))
                object.cardCount = message.cardCount;
            if (message.discardPile && message.discardPile.length) {
                object.discardPile = [];
                for (var j = 0; j < message.discardPile.length; ++j)
                    object.discardPile[j] = options.enums === String ? $root.protocol.XzcCard[message.discardPile[j]] : message.discardPile[j];
            }
            return object;
        };

        /**
         * Converts this GameData to JSON.
         * @function toJSON
         * @memberof protocol.GameData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameData;
    })();

    protocol.Gamer = (function() {

        /**
         * Properties of a Gamer.
         * @memberof protocol
         * @interface IGamer
         * @property {number|Long|null} [uid] Gamer uid
         * @property {string|null} [nickname] Gamer nickname
         * @property {string|null} [avatar] Gamer avatar
         * @property {number|null} [coins] Gamer coins
         * @property {protocol.GamerState|null} [state] Gamer state
         * @property {protocol.GamerEvent|null} [event] Gamer event
         * @property {boolean|null} [change] Gamer change
         * @property {protocol.XzcCard|null} [card] Gamer card
         */

        /**
         * Constructs a new Gamer.
         * @memberof protocol
         * @classdesc Represents a Gamer.
         * @implements IGamer
         * @constructor
         * @param {protocol.IGamer=} [properties] Properties to set
         */
        function Gamer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Gamer uid.
         * @member {number|Long} uid
         * @memberof protocol.Gamer
         * @instance
         */
        Gamer.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Gamer nickname.
         * @member {string} nickname
         * @memberof protocol.Gamer
         * @instance
         */
        Gamer.prototype.nickname = "";

        /**
         * Gamer avatar.
         * @member {string} avatar
         * @memberof protocol.Gamer
         * @instance
         */
        Gamer.prototype.avatar = "";

        /**
         * Gamer coins.
         * @member {number} coins
         * @memberof protocol.Gamer
         * @instance
         */
        Gamer.prototype.coins = 0;

        /**
         * Gamer state.
         * @member {protocol.GamerState} state
         * @memberof protocol.Gamer
         * @instance
         */
        Gamer.prototype.state = 0;

        /**
         * Gamer event.
         * @member {protocol.GamerEvent} event
         * @memberof protocol.Gamer
         * @instance
         */
        Gamer.prototype.event = 0;

        /**
         * Gamer change.
         * @member {boolean} change
         * @memberof protocol.Gamer
         * @instance
         */
        Gamer.prototype.change = false;

        /**
         * Gamer card.
         * @member {protocol.XzcCard} card
         * @memberof protocol.Gamer
         * @instance
         */
        Gamer.prototype.card = 0;

        /**
         * Creates a new Gamer instance using the specified properties.
         * @function create
         * @memberof protocol.Gamer
         * @static
         * @param {protocol.IGamer=} [properties] Properties to set
         * @returns {protocol.Gamer} Gamer instance
         */
        Gamer.create = function create(properties) {
            return new Gamer(properties);
        };

        /**
         * Encodes the specified Gamer message. Does not implicitly {@link protocol.Gamer.verify|verify} messages.
         * @function encode
         * @memberof protocol.Gamer
         * @static
         * @param {protocol.IGamer} message Gamer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Gamer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.avatar);
            if (message.coins != null && Object.hasOwnProperty.call(message, "coins"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.coins);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.state);
            if (message.event != null && Object.hasOwnProperty.call(message, "event"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.event);
            if (message.change != null && Object.hasOwnProperty.call(message, "change"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.change);
            if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.card);
            return writer;
        };

        /**
         * Encodes the specified Gamer message, length delimited. Does not implicitly {@link protocol.Gamer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Gamer
         * @static
         * @param {protocol.IGamer} message Gamer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Gamer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Gamer message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Gamer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Gamer} Gamer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Gamer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Gamer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    message.avatar = reader.string();
                    break;
                case 4:
                    message.coins = reader.double();
                    break;
                case 5:
                    message.state = reader.int32();
                    break;
                case 6:
                    message.event = reader.int32();
                    break;
                case 7:
                    message.change = reader.bool();
                    break;
                case 8:
                    message.card = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Gamer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Gamer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Gamer} Gamer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Gamer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Gamer message.
         * @function verify
         * @memberof protocol.Gamer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Gamer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.coins != null && message.hasOwnProperty("coins"))
                if (typeof message.coins !== "number")
                    return "coins: number expected";
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.event != null && message.hasOwnProperty("event"))
                switch (message.event) {
                default:
                    return "event: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.change != null && message.hasOwnProperty("change"))
                if (typeof message.change !== "boolean")
                    return "change: boolean expected";
            if (message.card != null && message.hasOwnProperty("card"))
                switch (message.card) {
                default:
                    return "card: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                    break;
                }
            return null;
        };

        /**
         * Creates a Gamer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Gamer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Gamer} Gamer
         */
        Gamer.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Gamer)
                return object;
            var message = new $root.protocol.Gamer();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            if (object.coins != null)
                message.coins = Number(object.coins);
            switch (object.state) {
            case "GAMER_STATE_UNSPECIFIED":
            case 0:
                message.state = 0;
                break;
            case "GAMER_STATE_WAIT":
            case 1:
                message.state = 1;
                break;
            case "GAMER_STATE_ACTION":
            case 2:
                message.state = 2;
                break;
            case "GAMER_STATE_DISCARD":
            case 3:
                message.state = 3;
                break;
            case "GAMER_STATE_BET":
            case 4:
                message.state = 4;
                break;
            case "GAMER_STATE_IN_BET":
            case 5:
                message.state = 5;
                break;
            }
            switch (object.event) {
            case "GAMER_EVENT_UNSPECIFIED":
            case 0:
                message.event = 0;
                break;
            case "GAMER_EVENT_TAKE_CARD":
            case 1:
                message.event = 1;
                break;
            case "GAMER_EVENT_DISCARD_CARD":
            case 2:
                message.event = 2;
                break;
            case "GAMER_EVENT_CHANGE_XZC_CARD":
            case 3:
                message.event = 3;
                break;
            case "GAMER_EVENT_BETTING":
            case 4:
                message.event = 4;
                break;
            case "GAMER_EVENT_PASS":
            case 5:
                message.event = 5;
                break;
            case "GAMER_EVENT_ROUND_SETTLE":
            case 6:
                message.event = 6;
                break;
            }
            if (object.change != null)
                message.change = Boolean(object.change);
            switch (object.card) {
            case "XZC_CRAD_UNSPECIFIED":
            case 0:
                message.card = 0;
                break;
            case "XZC_CRAD_1":
            case 1:
                message.card = 1;
                break;
            case "XZC_CRAD_2":
            case 2:
                message.card = 2;
                break;
            case "XZC_CRAD_3":
            case 3:
                message.card = 3;
                break;
            case "XZC_CRAD_4":
            case 4:
                message.card = 4;
                break;
            case "XZC_CRAD_5":
            case 5:
                message.card = 5;
                break;
            case "XZC_CRAD_6":
            case 6:
                message.card = 6;
                break;
            case "XZC_CRAD_7":
            case 7:
                message.card = 7;
                break;
            case "XZC_CRAD_8":
            case 8:
                message.card = 8;
                break;
            case "XZC_CRAD_9":
            case 9:
                message.card = 9;
                break;
            case "XZC_CRAD_10":
            case 10:
                message.card = 10;
                break;
            case "XZC_CRAD_11":
            case 11:
                message.card = 11;
                break;
            case "XZC_CRAD_12":
            case 12:
                message.card = 12;
                break;
            case "XZC_CRAD_13":
            case 13:
                message.card = 13;
                break;
            case "XZC_CRAD_14":
            case 14:
                message.card = 14;
                break;
            case "XZC_CRAD_15":
            case 15:
                message.card = 15;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Gamer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Gamer
         * @static
         * @param {protocol.Gamer} message Gamer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Gamer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.nickname = "";
                object.avatar = "";
                object.coins = 0;
                object.state = options.enums === String ? "GAMER_STATE_UNSPECIFIED" : 0;
                object.event = options.enums === String ? "GAMER_EVENT_UNSPECIFIED" : 0;
                object.change = false;
                object.card = options.enums === String ? "XZC_CRAD_UNSPECIFIED" : 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            if (message.coins != null && message.hasOwnProperty("coins"))
                object.coins = options.json && !isFinite(message.coins) ? String(message.coins) : message.coins;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.protocol.GamerState[message.state] : message.state;
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = options.enums === String ? $root.protocol.GamerEvent[message.event] : message.event;
            if (message.change != null && message.hasOwnProperty("change"))
                object.change = message.change;
            if (message.card != null && message.hasOwnProperty("card"))
                object.card = options.enums === String ? $root.protocol.XzcCard[message.card] : message.card;
            return object;
        };

        /**
         * Converts this Gamer to JSON.
         * @function toJSON
         * @memberof protocol.Gamer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Gamer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Gamer;
    })();

    /**
     * GamerState enum.
     * @name protocol.GamerState
     * @enum {number}
     * @property {number} GAMER_STATE_UNSPECIFIED=0 GAMER_STATE_UNSPECIFIED value
     * @property {number} GAMER_STATE_WAIT=1 GAMER_STATE_WAIT value
     * @property {number} GAMER_STATE_ACTION=2 GAMER_STATE_ACTION value
     * @property {number} GAMER_STATE_DISCARD=3 GAMER_STATE_DISCARD value
     * @property {number} GAMER_STATE_BET=4 GAMER_STATE_BET value
     * @property {number} GAMER_STATE_IN_BET=5 GAMER_STATE_IN_BET value
     */
    protocol.GamerState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GAMER_STATE_UNSPECIFIED"] = 0;
        values[valuesById[1] = "GAMER_STATE_WAIT"] = 1;
        values[valuesById[2] = "GAMER_STATE_ACTION"] = 2;
        values[valuesById[3] = "GAMER_STATE_DISCARD"] = 3;
        values[valuesById[4] = "GAMER_STATE_BET"] = 4;
        values[valuesById[5] = "GAMER_STATE_IN_BET"] = 5;
        return values;
    })();

    /**
     * GamerEvent enum.
     * @name protocol.GamerEvent
     * @enum {number}
     * @property {number} GAMER_EVENT_UNSPECIFIED=0 GAMER_EVENT_UNSPECIFIED value
     * @property {number} GAMER_EVENT_TAKE_CARD=1 GAMER_EVENT_TAKE_CARD value
     * @property {number} GAMER_EVENT_DISCARD_CARD=2 GAMER_EVENT_DISCARD_CARD value
     * @property {number} GAMER_EVENT_CHANGE_XZC_CARD=3 GAMER_EVENT_CHANGE_XZC_CARD value
     * @property {number} GAMER_EVENT_BETTING=4 GAMER_EVENT_BETTING value
     * @property {number} GAMER_EVENT_PASS=5 GAMER_EVENT_PASS value
     * @property {number} GAMER_EVENT_ROUND_SETTLE=6 GAMER_EVENT_ROUND_SETTLE value
     */
    protocol.GamerEvent = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GAMER_EVENT_UNSPECIFIED"] = 0;
        values[valuesById[1] = "GAMER_EVENT_TAKE_CARD"] = 1;
        values[valuesById[2] = "GAMER_EVENT_DISCARD_CARD"] = 2;
        values[valuesById[3] = "GAMER_EVENT_CHANGE_XZC_CARD"] = 3;
        values[valuesById[4] = "GAMER_EVENT_BETTING"] = 4;
        values[valuesById[5] = "GAMER_EVENT_PASS"] = 5;
        values[valuesById[6] = "GAMER_EVENT_ROUND_SETTLE"] = 6;
        return values;
    })();

    /**
     * XzcCard enum.
     * @name protocol.XzcCard
     * @enum {number}
     * @property {number} XZC_CRAD_UNSPECIFIED=0 XZC_CRAD_UNSPECIFIED value
     * @property {number} XZC_CRAD_1=1 XZC_CRAD_1 value
     * @property {number} XZC_CRAD_2=2 XZC_CRAD_2 value
     * @property {number} XZC_CRAD_3=3 XZC_CRAD_3 value
     * @property {number} XZC_CRAD_4=4 XZC_CRAD_4 value
     * @property {number} XZC_CRAD_5=5 XZC_CRAD_5 value
     * @property {number} XZC_CRAD_6=6 XZC_CRAD_6 value
     * @property {number} XZC_CRAD_7=7 XZC_CRAD_7 value
     * @property {number} XZC_CRAD_8=8 XZC_CRAD_8 value
     * @property {number} XZC_CRAD_9=9 XZC_CRAD_9 value
     * @property {number} XZC_CRAD_10=10 XZC_CRAD_10 value
     * @property {number} XZC_CRAD_11=11 XZC_CRAD_11 value
     * @property {number} XZC_CRAD_12=12 XZC_CRAD_12 value
     * @property {number} XZC_CRAD_13=13 XZC_CRAD_13 value
     * @property {number} XZC_CRAD_14=14 XZC_CRAD_14 value
     * @property {number} XZC_CRAD_15=15 XZC_CRAD_15 value
     */
    protocol.XzcCard = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "XZC_CRAD_UNSPECIFIED"] = 0;
        values[valuesById[1] = "XZC_CRAD_1"] = 1;
        values[valuesById[2] = "XZC_CRAD_2"] = 2;
        values[valuesById[3] = "XZC_CRAD_3"] = 3;
        values[valuesById[4] = "XZC_CRAD_4"] = 4;
        values[valuesById[5] = "XZC_CRAD_5"] = 5;
        values[valuesById[6] = "XZC_CRAD_6"] = 6;
        values[valuesById[7] = "XZC_CRAD_7"] = 7;
        values[valuesById[8] = "XZC_CRAD_8"] = 8;
        values[valuesById[9] = "XZC_CRAD_9"] = 9;
        values[valuesById[10] = "XZC_CRAD_10"] = 10;
        values[valuesById[11] = "XZC_CRAD_11"] = 11;
        values[valuesById[12] = "XZC_CRAD_12"] = 12;
        values[valuesById[13] = "XZC_CRAD_13"] = 13;
        values[valuesById[14] = "XZC_CRAD_14"] = 14;
        values[valuesById[15] = "XZC_CRAD_15"] = 15;
        return values;
    })();

    protocol.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof protocol
         * @interface ILoginRequest
         * @property {string|null} [username] LoginRequest username
         * @property {string|null} [token] LoginRequest token
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof protocol
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {protocol.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest username.
         * @member {string} username
         * @memberof protocol.LoginRequest
         * @instance
         */
        LoginRequest.prototype.username = "";

        /**
         * LoginRequest token.
         * @member {string} token
         * @memberof protocol.LoginRequest
         * @instance
         */
        LoginRequest.prototype.token = "";

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof protocol.LoginRequest
         * @static
         * @param {protocol.ILoginRequest=} [properties] Properties to set
         * @returns {protocol.LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link protocol.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.LoginRequest
         * @static
         * @param {protocol.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link protocol.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.LoginRequest
         * @static
         * @param {protocol.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.LoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof protocol.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.LoginRequest)
                return object;
            var message = new $root.protocol.LoginRequest();
            if (object.username != null)
                message.username = String(object.username);
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.LoginRequest
         * @static
         * @param {protocol.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.username = "";
                object.token = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof protocol.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRequest;
    })();

    protocol.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof protocol
         * @interface ILoginResponse
         * @property {boolean|null} [success] LoginResponse success
         * @property {protocol.IUserInfo|null} [UserInfo] LoginResponse UserInfo
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof protocol
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {protocol.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse success.
         * @member {boolean} success
         * @memberof protocol.LoginResponse
         * @instance
         */
        LoginResponse.prototype.success = false;

        /**
         * LoginResponse UserInfo.
         * @member {protocol.IUserInfo|null|undefined} UserInfo
         * @memberof protocol.LoginResponse
         * @instance
         */
        LoginResponse.prototype.UserInfo = null;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof protocol.LoginResponse
         * @static
         * @param {protocol.ILoginResponse=} [properties] Properties to set
         * @returns {protocol.LoginResponse} LoginResponse instance
         */
        LoginResponse.create = function create(properties) {
            return new LoginResponse(properties);
        };

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link protocol.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.LoginResponse
         * @static
         * @param {protocol.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.UserInfo != null && Object.hasOwnProperty.call(message, "UserInfo"))
                $root.protocol.UserInfo.encode(message.UserInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link protocol.LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.LoginResponse
         * @static
         * @param {protocol.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.LoginResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                case 2:
                    message.UserInfo = $root.protocol.UserInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResponse message.
         * @function verify
         * @memberof protocol.LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                var error = $root.protocol.UserInfo.verify(message.UserInfo);
                if (error)
                    return "UserInfo." + error;
            }
            return null;
        };

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.LoginResponse)
                return object;
            var message = new $root.protocol.LoginResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.UserInfo != null) {
                if (typeof object.UserInfo !== "object")
                    throw TypeError(".protocol.LoginResponse.UserInfo: object expected");
                message.UserInfo = $root.protocol.UserInfo.fromObject(object.UserInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.LoginResponse
         * @static
         * @param {protocol.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.success = false;
                object.UserInfo = null;
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo"))
                object.UserInfo = $root.protocol.UserInfo.toObject(message.UserInfo, options);
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof protocol.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResponse;
    })();

    protocol.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof protocol
         * @interface IUserInfo
         * @property {number|Long|null} [uid] UserInfo uid
         * @property {string|null} [nickname] UserInfo nickname
         * @property {string|null} [avatar] UserInfo avatar
         * @property {number|null} [beans] UserInfo beans
         */

        /**
         * Constructs a new UserInfo.
         * @memberof protocol
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {protocol.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo uid.
         * @member {number|Long} uid
         * @memberof protocol.UserInfo
         * @instance
         */
        UserInfo.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo nickname.
         * @member {string} nickname
         * @memberof protocol.UserInfo
         * @instance
         */
        UserInfo.prototype.nickname = "";

        /**
         * UserInfo avatar.
         * @member {string} avatar
         * @memberof protocol.UserInfo
         * @instance
         */
        UserInfo.prototype.avatar = "";

        /**
         * UserInfo beans.
         * @member {number} beans
         * @memberof protocol.UserInfo
         * @instance
         */
        UserInfo.prototype.beans = 0;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof protocol.UserInfo
         * @static
         * @param {protocol.IUserInfo=} [properties] Properties to set
         * @returns {protocol.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link protocol.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof protocol.UserInfo
         * @static
         * @param {protocol.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.avatar);
            if (message.beans != null && Object.hasOwnProperty.call(message, "beans"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.beans);
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link protocol.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.UserInfo
         * @static
         * @param {protocol.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    message.avatar = reader.string();
                    break;
                case 4:
                    message.beans = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfo message.
         * @function verify
         * @memberof protocol.UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.beans != null && message.hasOwnProperty("beans"))
                if (typeof message.beans !== "number")
                    return "beans: number expected";
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.UserInfo)
                return object;
            var message = new $root.protocol.UserInfo();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            if (object.beans != null)
                message.beans = Number(object.beans);
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.UserInfo
         * @static
         * @param {protocol.UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.nickname = "";
                object.avatar = "";
                object.beans = 0;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            if (message.beans != null && message.hasOwnProperty("beans"))
                object.beans = options.json && !isFinite(message.beans) ? String(message.beans) : message.beans;
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof protocol.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfo;
    })();

    return protocol;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && Object.hasOwnProperty.call(message, "type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                var message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Any;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
