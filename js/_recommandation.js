/**
 * @apiDefine adminError
 * @apiError 401Error  AUTHORIZATION_REQUIRED
 */

/**
 * @api                 {post}           /users/:id/recommendations a.캡슐 추천 등록
 * @apiVersion          0.1.0
 * @apiName             recommendation regist
 * @apiGroup            Recommendation
 * 
 * @apiPermission       User
 * @apiHeader           (User) {String} authorization Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiDescription
 * Creates a new instance in recommendations of this model
 *
 * @apiParam             {Integer}      category                           아이템 카테고리(스킨=0 /로션=1 /오일=2)
 * @apiParam             {ObjectId}     id                             사용자 아이디

 * @apiSuccess         {String}     date                               추천일
 * @apiSuccess         {Integer}    category                           아이템 카테고리(스킨=0 /로션=1 /오일=2)
 * @apiSuccess         {Boolean}    isSelected                         구매 여부
 * @apiSuccess         {ObjectId}   Id                                 캡슐 추천 아이디
 * @apiSuccess         {ObjectId}   userId                             사용자 아이디

 * @apiSuccessExample
 *  HTTP/1.1 200 OK

    {
        "date": "string",
        "isSelected": true,
        "id": 0,
        "userId": 0
    }

 * @apiUse           adminError
 */


/**
 * @api                 {get}           /users/:id/recommendation b.캡슐 추천 조회
 * @apiVersion          0.1.0
 * @apiName             recommendation Select
 * @apiGroup            Recommendation
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
 * @apiParam           {ObjectId}   id           userId
 * @apiParam           {json}       filter       filter
 * 
 * @apiSuccess         {String}     date                               추천일
 * @apiSuccess         {Integer}    category                           아이템 카테고리(스킨=0 /로션=1 /오일=2)
 * @apiSuccess         {Boolean}    isSelected                         구매 여부
 * @apiSuccess         {ObjectId}   userId                             사용자 아이디
 * @apiSuccess         {ObjectId}   recommendationId                   캡슐 아이디

 * @apiSuccessExample
 *  HTTP/1.1 200 OK
[
    {
        "date": "string",
        "isSelected": true,
        "id": 0,
        "userId": 0,
        "recommendationId": 0
    }
]
 * @apiUse           adminError
 */

