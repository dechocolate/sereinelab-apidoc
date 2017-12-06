/**
 * @apiDefine adminError
 * @apiError 401Error  AUTHORIZATION_REQUIRED
 */


/**
 * @api                 {post}           /users/:id/issues a.고객문의 작성
 * @apiVersion          0.1.0
 * @apiName             issue write
 * @apiGroup            Issue
 * 
 * @apiPermission       User
 * @apiHeader           (User) {String} authorization Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiDescription
 * Create a new instance of the model and persist it into the data source
 * 
 * @apiParam            {ObjectId}  id                           사용자 아이디
 * @apiParam            {Integer}   type                         구분 (일반=0 / 상품=1 / 주문=2 / 배송=3)
 * @apiParam            {String}    title                        제목
 * @apiParam            {String}    text                         문의내용
 *
 * @apiSuccess            {Integer}    type                         구분 (일반=0 / 상품=1 / 주문=2 / 배송=3)
 * @apiSuccess            {String}     title                        제목
 * @apiSuccess            {String}     text                         문의내용
 * @apiSuccess            {String}     created                      등록일  (default: now())
 * @apiSuccess            {ObjectId}     id                           문의 아이디
 * @apiSuccess            {ObjectId}     userId                       사용자 아이디

 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 {
    "type": "0",
    "title": "고객 문의",
    "text": "문의 드립니다.",
    "created": "2017-11-21T10:56:05.516Z",
    "id": 2,
    "userId": 1
 }
 * @apiUse           adminError
 */

 /**
 * @api                 {get}           /users/:id/issues b.고객문의 조회
 * @apiVersion          0.1.0
 * @apiName             issue select
 * @apiGroup            Issue
 * 
 * @apiPermission       User
 * @apiHeader           (User) {String} authorization Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiDescription
 * Queries issues of user.
 *
 * @apiParam            {ObjectId}    id                              사용자 아이디
 * @apiParam            {Json}        filter                        filter
 * 
 * 
 * @apiSuccess            {Integer}    type                         구분 (일반=0 / 상품=1 / 주문=2 / 배송=3)
 * @apiSuccess            {String}     title                        제목
 * @apiSuccess            {String}     text                         문의내용
 * @apiSuccess            {Date}       created                      등록일  (default: now())
 * @apiSuccess            {Date}       deleted                      삭제일
 * @apiSuccess            {ObjectId}   id                           문의 아이디
 * @apiSuccess            {ObjectId}   userId                       사용자 아이디
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 [
  {
    "type": "string",
    "title": "string",
    "text": "string",
    "created": "2017-11-21T10:48:52.992Z",
    "deleted": "2017-11-21T10:48:52.992Z",
    "id": 1,
    "userId": 1
  },
  {
    "type": "0",
    "title": "고객 문의",
    "text": "문의 드립니다.",
    "created": "2017-11-21T10:56:05.516Z",
    "id": 2,
    "userId": 1
  }
]
 * @apiUse           adminError
 */


  /**
 * @api                 {put}          /users/:id/issues/:fk c.고객문의 수정
 * @apiVersion          0.1.0
 * @apiName             issue update
 * @apiGroup            Issue
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
 * Update a related item by id for 
 *
 * @apiParam            {ObjectId}    id                           사용자 아이디
 * @apiParam            {ObjectId}    fk                           문의 아이디
 * @apiParam            {Integer}    type                         구분 (일반=0 / 상품=1 / 주문=2 / 배송=3)
 * @apiParam            {String}    title                        제목
 * @apiParam            {String}    text                         문의내용
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
  {
    "type": "0",
    "title": "고객 문의 수정",
    "text": "문의 드립니다.",
    "created": "2017-11-21T10:56:05.516Z",
    "id": 2,
    "userId": 1
  }

 * @apiUse           adminError
 */


/**
 * @api                 {delete}          /users/:id/issues/:fk d.고객문의 삭제
 * @apiVersion          0.1.0
 * @apiName             issue delete
 * @apiGroup            Issue
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
 * Find a model instance by {{id}} from the data source
 *
 * @apiParam         {ObjectId}   id               사용자 아이디
 * @apiParam         {ObjectId}   fk               문의 아이디
 * 
 * @apiUse           adminError
 */

