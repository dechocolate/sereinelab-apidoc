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
 * @apiSuccess            {String}     id                           문의 아이디
 * @apiSuccess            {String}     userId                       사용자 아이디

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
 *
 * @apiSuccess            {Integer}    type                         구분 (일반=0 / 상품=1 / 주문=2 / 배송=3)
 * @apiSuccess            {String}     title                        제목
 * @apiSuccess            {String}     text                         문의내용
 * @apiSuccess            {String}     created                      등록일  (default: now())
 * @apiSuccess            {String}     deleted                      삭제일
 * @apiSuccess            {String}     id                           문의 아이디
 * @apiSuccess            {String}     userId                       사용자 아이디
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
 * @apiParam         {ObjectId}   id               userId
 * @apiParam         {ObjectId}   fk               문의 아이디
 * 
 * @apiUse           adminError
 */

 /**
 * @api                 {put}           /users/:id e.사용자 프로필 조회
 * @apiVersion          0.1.0
 * @apiName             user profile select
 * @apiGroup            User
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
 * @apiParam         {ObjectId} id                             userId
 * 
 * 
 * @apiSuccess         {ObjectId}   id                             userId
 * @apiSuccess         {String}     email                          이메일
 * @apiSuccess         {String}     class                          등급 (vip/ gold/ silver) / 보류
 * @apiSuccess         {String}     name                           닉네임
 * @apiSuccess         {String}     gender                         성별
 * @apiSuccess         {String}     birth                          생년월일
 * @apiSuccess         {String}     zipcode                        우편번호
 * @apiSuccess         {String}     address1                       주소
 * @apiSuccess         {String}     address2                       주소상세
 * @apiSuccess         {String}     phone                          휴대폰번호
 * @apiSuccess         {Boolean}    emailVerified                  이메일인증여부 (Default : false)
 * @apiSuccess         {Boolean}    available                     사용여부 ( Default : true)
 * @apiSuccess         {String}     created                        회원가입일 (생성일)

 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
    {
        "created": "2017-11-18T11:14:59.515Z",
        "email": "test2@test2.com",
        "id": 3,
        "name": "test"
    }
 * @apiUse           adminError
 */


  /**
 * @api                 {put}           /users/:id f.사용자 프로필 수정
 * @apiVersion          0.1.0
 * @apiName             user profile update
 * @apiGroup            User
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
 * @apiParam         {ObjectId}   id                             userId
 * @apiParam         {String}     email                          이메일
 * @apiParam         {String}   class                          등급 (vip/ gold/ silver) / 보류
 * @apiParam         {String}   name                           닉네임
 * @apiParam         {String}   gender                         성별
 * @apiParam         {String}   birth                          생년월일
 * @apiParam         {String}   zipcode                        우편번호
 * @apiParam         {String}   address1                       주소
 * @apiParam         {String}   address2                       주소상세
 * @apiParam         {String}   phone                          휴대폰번호
 * @apiParam         {Boolean}  emailVerified                  이메일인증여부 (Default : false)
 * @apiParam         {Boolean}  available                      사용여부 ( Default : true)
 * @apiParam         {String}   created                        회원가입일 (생성일)
 * 
 * 
 * @apiSuccess         {ObjectId}   id                             userId
 * @apiSuccess         {String}     email                          이메일
 * @apiSuccess         {String}     class                          등급 (vip/ gold/ silver) / 보류
 * @apiSuccess         {String}     name                           닉네임
 * @apiSuccess         {String}     gender                         성별
 * @apiSuccess         {String}     birth                          생년월일
 * @apiSuccess         {String}     zipcode                        우편번호
 * @apiSuccess         {String}     address1                       주소
 * @apiSuccess         {String}     address2                       주소상세
 * @apiSuccess         {String}     phone                          휴대폰번호
 * @apiSuccess         {Boolean}    emailVerified                  이메일인증여부 (Default : false)
 * @apiSuccess         {Boolean}    available                     사용여부 ( Default : true)
 * @apiSuccess         {String}     created                        회원가입일 (생성일)

 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
    {
        "created": "2017-11-18T11:14:59.515Z",
        "email": "test2@test2.com",
        "id": 3,
        "name": "test"
    }
 * @apiUse           adminError
 */