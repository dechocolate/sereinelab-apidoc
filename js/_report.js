/**
 * @api {get} /reports 신고내역 리스트
 * @apiHeader (User) {String} authorization Authorization value.
 * @apiHeaderExample {json} Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * @apiVersion 0.1.0
 * @apiName GetOther
 * @apiGroup Other
 * @apiPermission user
 *
 * @apiDescription
 * Find a model instance by {{id}} from the data source.
 *
 * @apiParam {String} id 		   userId	.
 *
 * @apiSuccess {String} id              report id 
 * @apiSuccess {String} userid          신고자 사용자 아이디.
 * @apiSuccess {Text}   contents        신고 내용.
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   count  : "REPORT COUNT",
 *      [
 *          { id : "REPORT_ID", userid : "USER_ID", contents : "CONTENTS"},
 *          { id : "REPORT_ID", userid : "USER_ID", contents : "CONTENTS"},
 *          { id : "REPORT_ID", userid : "USER_ID", contents : "CONTENTS"}
 *      ]  
 * }
 * 
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 * 
 * 
 */


/**
 * @api {get} /reports/:id 신교내역 조회
 * @apiHeader (User) {String} authorization Authorization value.
 * @apiHeaderExample {json} Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * @apiVersion 0.1.0
 * @apiName GetOther
 * @apiGroup Other
 * @apiPermission user
 *
 * @apiDescription
 * Find a model instance by {{id}} from the data source.
 *
 * @apiParam {String} id 		   userId	.
 *
 * @apiSuccess {String} id         userId.
 * @apiSuccess {Text}   contents   신고 내용.
 *
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 */