
 /**
 * @api                 {post}        /room/create 방 생성
 * @apiHeader           (User) {String} authorization Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * @apiVersion          0.1.0
 * @apiName             CreateRoom
 * @apiGroup            Room
 * @apiPermission       Room
 * @apiDescription
 * Delete a model instance by {{id}} from the data source.
 *
 * @apiParam            {String}        id 		            user id.
 * 
 * @apiSuccess          {String}        id                  send channel id.
 * @apiSuccess          {String}        senderid            채팅 요청 아이디.
 * @apiSuccess          {String}        receiverid          채팅 수락 아이디.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *      id : "CHANNEL_ID",
 *      senderid : "SENDER_ID",
 *      receiverid : "RECEIVER_ID"  
 * }
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 *
 */

 /**
 * @api                 {post}        /room/select 방 조회 
 * @apiHeader           (User) {String} authorization Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * @apiVersion          0.1.0
 * @apiName             SelectRoom
 * @apiGroup            Room
 * @apiPermission       Room
 *
 * @apiParam            {String}        id 		            userid.
 *
 * @apiSuccess          {Integer}       count               방 갯수 
 * @apiSuccess          {String}        id                  send channel id.
 * @apiSuccess          {String}        senderid            채팅 요청 아이디.
 * @apiSuccess          {String}        receiverid          채팅 수락 아이디.
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   count  : "ROOM COUNT",
 *      [
 *          { id : "CHANNEL_ID", senderid : "SENDER_ID", receiverid : "RECEIVER_ID"},
 *          { id : "CHANNEL_ID", senderid : "SENDER_ID", receiverid : "RECEIVER_ID"},
 *          { id : "CHANNEL_ID", senderid : "SENDER_ID", receiverid : "RECEIVER_ID"}
 *      ]  
 * }
 * 
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 */