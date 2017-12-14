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
 * @apiParam           {Number}  	provider                           가입경로 (이메일=0 / 페이스북=1)
 * @apiParam           {String} 	email                              이메일
 * @apiParam           {String} 	name                               닉네임
 * @apiParam           {String} 	password                           사용자 패스워드

 * @apiSuccess         {String}     email                              이메일
 * @apiSuccess         {String}     name                               닉네임
 * @apiSuccess         {Date}       created                            회원가입일 (생성일)
 * @apiSuccess         {Boolean}    available                          사용 여부
 * 
 * @apiSuccessExample
 * HTTP/1.1 200 OK
	{
	 	"provider": 0,
		"created": "2017-11-18T11:14:59.515Z",
		"email": "test2@test2.com",
		"available" : true,
		"id": 3,
		"name": "test"
	}
 *
 */




 /**
 * @api                 {post}           /users/login b.사용자 로그인
 * @apiVersion          0.1.0
 * @apiName             user login
 * @apiGroup            User 
 *
 * @apiParam            {String}    email                              이메일
 * @apiParam            {String}    password                           사용자 패스워드
 *
 * @apiSuccess         {String}     id                                access token
 * @apiSuccess         {String}     ttl                               닉네임
 * @apiSuccess         {Date}       created                           회원가입일 (Default : now())
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
 * @apiDescription
 * Logout a user with access token
 *
 * 
 * @apiUse           adminError
 */


 /**
 * @api                 {put}           /users/:id d.사용자 프로필 조회
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
 * @apiParam            {ObjectId}      id                              사용자 아이디
 * @apiParam            {json}          filter                          filter
 * 
 * @apiSuccess         {ObjectId}   id                             사용자 아이디
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
 * @apiSuccess         {Boolean}    available                      사용여부 ( Default : true)
 * @apiSuccess         {Date}       created                        회원가입일 (생성일)

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
 * @api                 {put}           /users/:id e.사용자 프로필 수정
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
 * @apiParam         {ObjectId}     id                             userId
 * @apiParam         {String}       email                          이메일
 * @apiParam         {String}       class                          등급 (vip/ gold/ silver) / 보류
 * @apiParam         {String}       name                           닉네임
 * @apiParam         {String}       gender                         성별
 * @apiParam         {String}       birth                          생년월일
 * @apiParam         {String}       zipcode                        우편번호
 * @apiParam         {String}       address1                       주소
 * @apiParam         {String}       address2                       주소상세
 * @apiParam         {String}       phone                          휴대폰번호
 * @apiParam         {Boolean}      emailVerified                  이메일인증여부 (Default : false)
 * @apiParam         {Boolean}      available                      사용여부 ( Default : true)
 * @apiParam         {Date}         created                        회원가입일 (생성일)
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
 * @apiSuccess         {Date}       created                        회원가입일 (생성일)

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
 * @api                 {delete}           /users/{id}/leave f.사용자 탈퇴
 * @apiVersion          0.1.0
 * @apiName             user leave
 * @apiGroup            User
 * 
 * @apiPermission       User
 * @apiHeader           (User) {String} authorization Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiParam         {ObjectId}     id                             userId
 * 
 * @apiDescription
 * user delete account
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 {
  "status": 200
 }
 *
 * @apiUse           adminError
 */

 /**
 * @api                 {post}           /users/:id/images g.사용자 프로필 사진 업로드 
 * @apiVersion          0.1.0
 * @apiName             user profile image upload
 * @apiGroup            User
 * 
 * 
 * @apiPermission       User
 * @apiHeader           (User) {String} authorization Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiDescription
 * Creates a new instance in images of this model.
 * 
 * 
 * @apiParam        {String}        container           저장 폴더
 * @apiParam        {String}        name                이미지 이름     
 * @apiParam        {String}        alias               별칭
 * @apiParam        {Integer}       size                이미지 크기
 * @apiParam        {ObjectId}      userId              사용자 아이디
 * @apiParam        {ObjectId}      capsuleId           캡슐 아이디
 *   
 * 
 * @apiSuccess      {String}        container   저장 폴더
 * @apiSuccess      {Date}          created     등록일 (Default : now()) 
 * @apiSuccess      {String}        name        이미지 이름
 * @apiSuccess      {String}        alias       별칭
 * @apiSuccess      {Integer}       size        이미지 크기
 * @apiSuccess      {ObjectId}      userId      사용자 이름
 * @apiSuccess      {ObjectId}      capsuleId   캡슐 아이디 
 * @apiSuccess      {ObjectId}      id          등록한 이미지 아이디
 *
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 * {
  "container": "string",
  "created": "2017-11-27T10:26:55.045Z",
  "name": "string",
  "alias": "string",
  "size": 0,
  "userId": 0,
  "imageId": 0,
  "capsuleId": 0
}
 *
 * @apiUse           adminError
 */


 