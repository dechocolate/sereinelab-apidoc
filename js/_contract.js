/**
 * @apiDefine adminError
 * @apiError 401Error  AUTHORIZATION_REQUIRED
 */


/**
 * @api                 {get}           /users/:id/contracts a.사용자 약정 조회
 * @apiVersion          0.1.0
 * @apiName             contract Select
 * @apiGroup            Contract
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
 * @apiSuccess         {ObjectId}   id                                 약정 아이디
 * @apiSuccess         {ObjectId}   contractProductId                  약정 관리 아이디
 * @apiSuccess         {String}     start                              약정 시작일
 * @apiSuccess         {String}     end                                약정 종료일
 * @apiSuccess         {Integer}    total                              총 횟수
 * @apiSuccess         {Integer}    count                              결제한 횟수
 * @apiSuccess         {String}     detail                             상품 상세정보
 * @apiSuccess         {Boolean}    isActive                           활성 여부
 * @apiSuccess         {Integer}    count                              결제한 횟수

 * @apiSuccessExample
 *  HTTP/1.1 200 OK
  [
    {
        "start": "2017-11-20T10:58:35.642Z",
        "end": "2017-11-20T10:58:35.642Z",
        "total": 0,
        "count": 0,
        "isActive": true,
        "id": 0,
        "contractProductId": 0,
        "contractId": 0,
        "userId": 0
    }
]
 * @apiUse           adminError
 */

/**
 * @api                 {get}           /contract b.사용자 약정 선택
 * @apiVersion          0.1.0
 * @apiName             user contract check
 * @apiGroup            Contract
 *
 * @apiDescription
 * Create a new instance of the model and persist it into the data source
 *
 * @apiUse           adminError
 */

 /**
 * @api                 {put}           /contract c.사용자 약정 취소/변경
 * @apiVersion          0.1.0
 * @apiName             user contract update
 * @apiGroup            Contract
 *
 * @apiDescription
 * Create a new instance of the model and persist it into the data source
 *
 * @apiUse           adminError
 */