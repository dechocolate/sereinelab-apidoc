/**
 * @apiDefine adminError
 * @apiError 401Error  AUTHORIZATION_REQUIRED
 */


/**
 * @api                 {get}           /cancelations/:id a.위약금 내역 조회
 * @apiVersion          0.1.0
 * @apiName             cancelation Select
 * @apiGroup            Cancelation
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
 * 
 * 
 * @apiParam            {ObjectId}  id                                  위약금 아이디
 * @apiParam            {json}      filter                              filter
 * 
 * @apiSuccess         {Date}       date                               약정 취소일
 * @apiSuccess         {Boolean}    progress                           처리 사항(완료=true / 미완료=false)
 * @apiSuccess         {Integer}    charge                             위약금액
 * @apiSuccess         {String}     memo                               세부 내용
 * @apiSuccess         {ObjectId}    cancelationId                     위약 내역 아이디

 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 [
    {
        "date": "2017-11-20T10:58:35.563Z",
        "progress": true,
        "charge": 0,
        "memo": "string",
        "id": 0,
        "userId": 0,
        "cancelationId": 0
    }
]
 * @apiUse           adminError
 */

