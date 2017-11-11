/**
 * @api                 {get}           /users/select/:id 사용자 조회
 * @apiHeader           (User) {String} authorization Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * @apiVersion          0.1.0
 * @apiName             GetUser
 * @apiGroup            User
 * @apiPermission       admin
 *
 * @apiDescription
 * Find a model instance by {{id}} from the data source.
 *
 * @apiParam            {String}        id 	     userId.
 *
 * @apiSuccess          {String}        id          userId.
 * @apiSuccess          {String}        name        Fullname of the User.
 *
 * @apiError            UserNotFound   The <code>id</code> of the User was not found.
 */

/**
 * @api                 {post}          /users/create 사용자 회원가입
 * @apiVersion          0.1.0
 * @apiName             createUser
 * @apiGroup            User
 * @apiPermission       user
 *
 * @apiDescription
 * Create a new instance of the model and persist it into the data source.
 *
 * @apiParam            {String}        email  		    user email.
 * @apiParam            {String}        name  		    user name.
 * @apiParam            {String}        gender  	    user gender.
 * @apiParam            {String}        birth  	        user birth.
 * @apiParam            {String}        intro  	        user intro.
 * @apiParam            {String}        dist  	        user dist.
 * @apiParam            {String}        thumbnail  	    user thumbnail  썸네일 이미지.
 * @apiParam            {String}        point     	    user point 보유 포인트. 
 * 
 * @apiParam            {String}        password  		user password.
 * @apiParam            {String}        emailVerified  	user emailVerified 이메일 인증 여부.
 * @apiParam            {String}        available  		user available.
 * @apiParam            {Date}          created  		user created 생성 날짜.
 * @apiParam            {Date}          deleted  		user deleted.
 *
 * @apiSuccess          {String}        id              AccessToken ID.
 * @apiSuccess          {String}        userId          user ID.
 *
 * 
 * @apiError            UserOverlap   The <code>id</code> of the User Overlap.
 */


 /**
 * @api                 {post}          /users/login 사용자 로그인
 * @apiVersion          0.1.0
 * @apiName             LoginUser
 * @apiGroup            User
 * @apiPermission       user
 *
 * @apiDescription
 * Login a user with username/email and password
 *
 * @apiParam            {String}        email  		    user email.
 * @apiParam            {String}        password  		user password.
 *
 * @apiUse              CreateUserError
 * @apiSuccess          {String}	    id              accessTokens.
 *
 */


 /**
 * @api                 {delete}        /users/delete 사용자 계정탈퇴
 * @apiVersion          0.1.0
 * @apiName             DeleteUser
 * @apiGroup            User
 * @apiPermission       user
 *
 * @apiDescription
 * Delete a model instance by {{id}} from the data source.
 *
 * @apiParam            {String} id 		   userId	.
 *
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 */
