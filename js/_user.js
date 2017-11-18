/**
 * @apiDefine adminError
 * @apiError 401Error  AUTHORIZATION_REQUIRED
 */


/**
 * @api                 {post}           /users a.사용자 가입
 * @apiVersion          0.1.0
 * @apiName             user sign in
 * @apiGroup            User
 *
 * @apiDescription
 * Create a new instance of the model and persist it into the data source
 *
 * @apiParam            email                              이메일
 * @apiParam            name                               닉네임
 * @apiParam            password                           사용자 패스워드
 *
 * @apiSuccess         {String}     email                              이메일
 * @apiSuccess         {String}     name                               닉네임
 * @apiSuccess         {String}     created                            회원가입일 (생성일)
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
 * @api                 {post}           /users/login b.사용자 로그인
 * @apiVersion          0.1.0
 * @apiName             user login
 * @apiGroup            User
 *
 * @apiDescription
 * Login a user with username/email and password
 *
 * @apiParam            email                              이메일
 * @apiParam            password                           사용자 패스워드
 *
 * @apiSuccess         {String}     id                                access token
 * @apiSuccess         {String}     ttl                               닉네임
 * @apiSuccess         {String}     created                           회원가입일 (Default : now())
 * @apiSuccess         {ObjectId}   userId                            사용자 아이디
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
    {
        "id": "y9rozqKapMlIphXZUd8Z2jzagaBCVBZaBrs04WCj743eZo9xJRqh9q9MbQMi8puG",
        "ttl": 1209600,
        "created": "2017-11-18T11:30:46.029Z",
        "userId": 3
    }
 * @apiUse           adminError
 */


  /**
 * @api                 {post}           /users/logout c.사용자 로그아웃
 * @apiVersion          0.1.0
 * @apiName             user logout
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
 * Logout a user with access token
 *
 * 
 * @apiUse           adminError
 */


/**
 * @api                 {get}           /users/:id d.사용자 프로필 조회
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
 * @apiParam         id               userId
 * 
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
 * @apiParam         id                             userId
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
 * @apiParam         id                             userId
 * @apiParam         email                          이메일
 * @apiParam         class                          등급 (vip/ gold/ silver) / 보류
 * @apiParam         name                           닉네임
 * @apiParam         gender                         성별
 * @apiParam         birth                          생년월일
 * @apiParam         zipcode                        우편번호
 * @apiParam         address1                       주소
 * @apiParam         address2                       주소상세
 * @apiParam         phone                          휴대폰번호
 * @apiParam         emailVerified                  이메일인증여부 (Default : false)
 * @apiParam         available                      사용여부 ( Default : true)
 * @apiParam         created                        회원가입일 (생성일)
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