/**
 * @apiDefine adminError
 * @apiError 401Error  AUTHORIZATION_REQUIRED
 */


/**
 * @api                 {get}           /contractProducts a.약정상품 조회
 * @apiVersion          0.1.0
 * @apiName             contractProduct Select
 * @apiGroup            Contract
 * 
 * 
 * @apiDescription
 * Find all instances of the model matched by filter from the data 
 * @apiParam            {json}    filter                                filter
 * 
 * 
 * @apiSuccess         {ObjectId}   id                                 상품 아이디
 * @apiSuccess         {String}     name                               상품명
 * @apiSuccess         {Integer}    period                             기간
 * @apiSuccess         {Integer}    price                              판매가
 * @apiSuccess         {Integer}    discount                           할인가
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
  [
  {
    "name": "string",
    "class": "string",
    "period": 0,
    "price": 0,
    "discount": 0,
    "id": 0
  }
]
 * @apiUse           adminError
 */


/**
 * @api                 {get}           /users/:id/contracts b.사용자 약정내역 조회
 * @apiVersion          0.1.0
 * @apiName             contract select
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
 * Queries contracts of user
 * 
 * @apiParam         {ObjectId}   id                                 사용자 아이디
 * 
 * @apiSuccess         {ObjectId}   id                                 약정  아이디
 * @apiSuccess         {ObjectId}   userId                             사용자 아이디
 * @apiSuccess         {ObjectId}   contractProductId                  약정 상품 아이디
 * @apiSuccess         {Date}       start                              약정 시작일
 * @apiSuccess         {Date}       end                                약정 종료일
 * @apiSuccess         {Integer}    total                              총 횟수
 * @apiSuccess         {Integer}    count                              결제한 횟수
 * @apiSuccess         {String}     detail                             상품 상세정보
 * @apiSuccess         {Boolean}    isActive                           활성 여부
 * @apiSuccess         {Integer}    count                              결제한 횟수

 * @apiSuccessExample
 *  HTTP/1.1 200 OK
  [
    {
        "start": "2017-11-29T12:11:19.692Z",
        "end": "2017-12-29T12:11:19.692Z",
        "total": 100,
        "count": 10,
        "isActive": true,
        "id": "5a1ea76d6b5c6439b3ed7b34",
        "contractProductId": "5a1ea67731da970c3a31d267",
        "userId": "5a1e38fb4d90dd05b086affc"
    }
]
 * @apiUse           adminError
 */

/**
 * @api                 {post}          /users/:id/contracts  c.사용자 약정 선택
 * @apiVersion          0.1.0
 * @apiName             user contract check
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
 * Creates a new instance in contracts of this model
 * 
 * @apiParam    {ObjectId}      id                  사용자 아이디
 * @apiParam    {Date}          start               약정 시작일
 * @apiParam    {Date}          end                 약정 종료일
 * @apiParam    {Integer}       total               총 횟수
 * @apiParam    {Integer}       count               결제한 횟수
 * @apiParam    {String}        detail              상품 상세 정보
 * @apiParam    {Boolean}       isActive            활성 여부
 * @apiParam    {ObjectId}      contractProductId   약정상품 아이디


 * @apiSuccess    {ObjectId}      id                  사용자 아이디
 * @apiSuccess    {Date}          start               약정 시작일
 * @apiSuccess    {Date}          end                 약정 종료일
 * @apiSuccess    {Integer}       total               총 횟수
 * @apiSuccess    {Integer}       count               결제한 횟수
 * @apiSuccess    {String}        detail              상품 상세 정보
 * @apiSuccess    {Boolean}       isActive            활성 여부
 * @apiSuccess    {ObjectId}      contractProductId   약정상품 아이디
 * 
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
{
    "start": "2017-11-29T12:11:19.692Z",
    "end": "2017-11-29T12:11:19.692Z",
    "total": 100,
    "count": 10,
    "isActive": true,
    "id": "5a1ea8566b5c6439b3ed7b36",
    "contractProductId": "5a1e38fb4d90dd05b086affc",
    "userId": "5a1e38fb4d90dd05b086affc",
    "detail": "detail"
}


 * @apiUse           adminError
 */

 /**
 * @api                 {put}           /users/:id/contracts/:fk d.사용자 약정 취소/변경
 * @apiVersion          0.1.0
 * @apiName             user contract update
 * @apiGroup            Contract
 * 
 * @apiPermission       User
 * @apiHeader           (User) {String} authorization Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * 
 * @apiDescription
 * Create a new instance of the model and persist it into the data source
 * 
 * @apiParam    {ObjectId}      id                  사용자 아이디
 * @apiParam    {ObjectId}      fk                  약정 아이디
 * @apiParam    {Date}          start               약정 시작일
 * @apiParam    {Date}          end                 약정 종료일
 * @apiParam    {Integer}       total               총 횟수
 * @apiParam    {Integer}       count               결제한 횟수
 * @apiParam    {String}        detail              상품 상세 정보
 * @apiParam    {Boolean}       isActive            활성 여부
 * @apiParam    {ObjectId}      contractProductId   약정상품 아이디


 * @apiSuccess    {ObjectId}      id                  약정 아이디
 * @apiSuccess    {ObjectId}      userId              사용자 아이디
 * @apiSuccess    {Date}          start               약정 시작일
 * @apiSuccess    {Date}          end                 약정 종료일
 * @apiSuccess    {Integer}       total               총 횟수
 * @apiSuccess    {Integer}       count               결제한 횟수
 * @apiSuccess    {String}        detail              상품 상세 정보
 * @apiSuccess    {Boolean}       isActive            활성 여부
 * @apiSuccess    {ObjectId}      contractProductId   약정상품 아이디
 * 
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
{
    "start": "2017-11-29T12:11:19.692Z",
    "end": "2017-11-29T12:11:19.692Z",
    "total": 1,
    "count": 100,
    "isActive": true,
    "id": "5a1ea8566b5c6439b3ed7b36",
    "contractProductId": "5a1e38fb4d90dd05b086affc",
    "userId": "5a1e38fb4d90dd05b086affc",
    "detail": "d"
}
  
 * @apiUse           adminError
 */