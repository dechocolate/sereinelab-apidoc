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
 * 
 * @apiSuccess         {String}     id                                access token
 * @apiSuccess         {String}     ttl                               닉네임
 * @apiSuccess         {Date}       created                           회원가입일 (Default : now())
 * @apiSuccess         {ObjectId}   userId                            사용자 아이디
 * @apiSuccess         {String}     name                              사용자 이름
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
{
	"id": "y9rozqKapMlIphXZUd8Z2jzagaBCVBZaBrs04WCj743eZo9xJRqh9q9MbQMi8puG",
	"ttl": 1209600,
	"created": "2017-11-18T11:30:46.029Z",
	"userId": 3,
	"name": "홍길동"
}
* @apiSuccessExample include 정보
 /users/login?include=user 
 include : 사용자 점보 포함
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
 * @apiParam            {ObjectId}      id                              사용자 아이디
 * @apiParam            {json}          filter                          filter
 * 
 * @apiSuccess         {ObjectId}   id                             사용자 아이디
 * @apiSuccess         {String}     email                          이메일
 * @apiSuccess         {Integer}    provider                       가입경로
 * @apiSuccess         {String}     name                           닉네임
 * @apiSuccess         {String}     gender                         성별
 * @apiSuccess         {Date}       birth                          생년월일
 * @apiSuccess         {String}     zipcode                        우편번호
 * @apiSuccess         {String}     address1                       주소
 * @apiSuccess         {String}     address2                       주소상세 
 * @apiSuccess         {String}     phone                          휴대폰번호
 * @apiSuccess         {Boolean}    emailVerified                  이메일인증여부 (Default : false)
 * @apiSuccess         {Interger}   progress                        진행사항 (기기 = 0/ DNA = 1/  캡술 = 2)
 * @apiSuccess         {Date}       purchase                       기기 구매일
 * @apiSuccess         {Boolean}    available                      사용여부 ( Default : true)
 * @apiSuccess         {Date}       created                        회원가입일 (생성일)
 * @apiSuccess         {Date}       deleted                        삭제일 (삭제일)
 * @apiSuccess         {Boolean}    leave                          사용자 탈퇴 신청 여부
 * @apiSuccess         {String}     reason                         탈퇴 사유
 * @apiSuccess         {Date}       lastLogin                      마지막 로그인 시간
 * @apiSuccess         {Object}     image                           프로필 사진
 * @apiSuccess         {Object}       contract                      활성화 되어 있는 최신 약정


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
 * @api                 {patch}           /users/:id e.사용자 프로필 수정
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
 *
 * @apiParam         {ObjectId}     id                             userId 
 * @apiParam         {String}       name                           닉네임
 * @apiParam         {String}       gender                         성별
 * @apiParam         {Date}         birth                          생년월일
 * @apiParam         {String}       zipcode                        우편번호
 * @apiParam         {String}       address1                       주소
 * @apiParam         {String}       address2                       주소상세
 * @apiParam         {String}       phone                          휴대폰번호 
 * 
 * 
 * @apiSuccess         {ObjectId}     id                             userId 
 * @apiSuccess         {String}       name                           닉네임
 * @apiSuccess         {String}       gender                         성별
 * @apiSuccess         {Date}         birth                          생년월일
 * @apiSuccess         {String}       zipcode                        우편번호
 * @apiSuccess         {String}       address1                       주소
 * @apiSuccess         {String}       address2                       주소상세
 * @apiSuccess         {String}       phone                          휴대폰번호 
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
 * @api                 {put}           /users/:id/leave f.사용자 탈퇴
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
 * @apiParam         {String}       reason                         탈퇴 사유
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
 * @api                 {post}           /users/:id/image g.사용자 프로필 사진 업로드 
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
 * @apiParam        {ObjectId}      userId              사용자 아이디
 * @apiParam        {File}          file                이미지 파일
 *  
 * @apiSuccess      {ObjectId}      id          이미지 아이디 
 * @apiSuccess      {ObjectId}      userId      사용자 아이디
 * @apiSuccess      {String}        container   저장 폴더
 * @apiSuccess      {Date}          created     등록일 (Default : now()) 
 * @apiSuccess      {String}        name        이미지 이름
 * @apiSuccess      {Integer}       size        이미지 크기
 * @apiSuccess      {String}        type       파일 종류
 * @apiSuccess      {String}        url         저장 위치
 *
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 {
    "container": "76n1-files/image/20171224",
    "created": "2017-12-24T07:43:10.946Z",
    "name": "image_profile.png",
    "size": 747381,
    "id": "5a3f5a6508fdf473356e9db9",
    "userId": "5a3f4f380c932b6852f1ab90",
    "type": "image/png",
    "url": "https://76n1-files.s3.amazonaws.com/image%2F20171224%2Fimage_profile.png"
}
 *
 * @apiUse           adminError
 */


 