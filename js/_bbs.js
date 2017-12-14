/**
 * @apiDefine adminError
 * @apiError 401Error  AUTHORIZATION_REQUIRED
 */


/**
 * @api                 {get}           /bbs a.게시판 조회
 * @apiVersion          0.1.0
 * @apiName             bbs Select
 * @apiGroup            Bbs
 * 
 * @apiPermission       User
 * @apiHeader           (User) {String} authorization Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiDescription
 * Find all instances of the model matched by filter from the data 
 * @apiParam    {json}  filter                              filter
 * 
 * @apiSuccess         {ObjectId}   id                                 게시판 아이디
 * @apiSuccess         {Integer}    type                               게시판 종류(공지사항=0 / 도움말=1)
 * @apiSuccess         {String}     title                              제목
 * @apiSuccess         {String}     text                               내용
 * @apiSuccess         {boolean}    display                            표시여부
 * @apiSuccess         {Integer}    count                              조회 수
 * @apiSuccess         {Date}       created                            등록일

 * @apiSuccessExample
 *  HTTP/1.1 200 OK
[
    {
        "type": "string",
        "title": "string",
        "text": "string",
        "display": true,
        "count": 0,
        "created": "2017-11-20T10:58:35.494Z",
        "id": 0
    }
]
 * @apiUse           adminError
 */

