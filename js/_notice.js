/**
 * @api {get} /notices/ 공지사항 조회
 * @apiVersion 0.1.0
 * @apiName GetNotice
 * @apiGroup Notice
 * @apiPermission none
 *
 * @apiDescription
 * Find all instances of the model matched by filter from the data source.
 *
 * @apiParam {String} id The Users-ID.
 *
 * @apiSuccess {String}  id         id
 * @apiSuccess {String}  title      제목 
 * @apiSuccess {Date}    created    생성일 
 * @apiSuccess {String}  contents   내용
 * @apiSuccess {Boolean} display    표시여부
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   count  : "NOTICE COUNT",
 *      [
 *          { id : "NOTICE_ID", title : "TITLE", created : "CREATE_DATE", contents : "CONTENTS", display : "true/false"},
 *          { id : "NOTICE_ID", title : "TITLE", created : "CREATE_DATE", contents : "CONTENTS", display : "true/false"},
 *          { id : "NOTICE_ID", title : "TITLE", created : "CREATE_DATE", contents : "CONTENTS", display : "true/false"}
 *      ]  
 * } 
 *
 */
