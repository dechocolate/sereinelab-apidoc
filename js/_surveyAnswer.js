/**
 * @apiDefine adminError
 * @apiError 401Error  AUTHORIZATION_REQUIRED
 */
/**
 * @api                 {post}           /users/:id/surveyAnswers a.설문 답변
 * @apiVersion          0.1.0
 * @apiName             surveyAnswer write
 * @apiGroup            SurveyAnswer
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
 * Create a new instance of the model and persist it into the data source
 *
 * @apiParam        {ObjectId}  id          사용자 아이디
 * @apiParam        {ObjectId}  surveyId    설문지 아이디
 * 
 * @apiUse           adminError
 */



/**
 * @api                 {post}           /users/:id/surveyQuestionAnswers b.설문 문항 답변
 * @apiVersion          0.1.0
 * @apiName             surveyQuestionAnswers white
 * @apiGroup            SurveyAnswer
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
 * Creates a new instance in surveyQuestionAnswers of this model
 * 
 * @apiParam        {ObjectId}    id                    사용자 아이디
 * @apiParam        {ObjectId}    surveyAnswerId        설문 답변 아이디
 * @apiParam        {ObjectId}    surveyQuestionId      설문 문항 아이디
 * @apiParam        {String}      value                 설문 문항 답변 값
 *
 * @apiSuccess        {ObjectId}    id                    설문 문항 답변 아이디
 * @apiSuccess        {ObjectId}    userId                사용자 아이디
 * @apiSuccess        {ObjectId}    surveyAnswerId        설문 답변 아이디
 * @apiSuccess        {ObjectId}    surveyQuestionId      설문 문항 아이디
 * @apiSuccess        {String}      value                 설문 문항 답변 값
 * 
 * 
 * @apiUse           adminError
 */

 /**
 * @api                 {get}           /users/:id/surveyAnswers c.개인 설문지 답변 내용 조회
 * @apiVersion          0.1.0
 * @apiName             personal surveyAnswer select
 * @apiGroup            SurveyAnswer
 * 
 * @apiPermission       User
 * @apiHeader           (User) {String} authorization Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiDescription
 * Queries surveyAnswers of user
 *
 * @apiParam        {ObjectId}      id          사용자 아이디
 * @apiParam        {json}          filter      filter
 * 
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
[
    {
        "created": "2017-11-29T12:43:02.523Z",
        "id": "5a1eab566b5c6439b3ed7b37",
        "surveyId": "5a1eaa6c31da970c3a31d269",
        "userId": "5a1e38fb4d90dd05b086affc",
        "surveyQuestionAnswers": [
            {
                "value": "value",
                "id": "5a1eabb36b5c6439b3ed7b38",
                "surveyAnswerId": "5a1eab566b5c6439b3ed7b37",
                "surveyQuestionId": "",
                "userId": "5a1e38fb4d90dd05b086affc"
            }
        ]
    }
]
 * @apiSuccessExample   {json}      Filter-example (상세조회 쿼리)
    {
        "include": {
            "relation": "surveyQuestionAnswers",
                "scope": {
                    "include": {
                    "relation": "surveyQuestion",
                        "scope": {
                            "include": "surveyQuestionItems"
                        }
                    }
                }
            }
        
    }
 * @apiUse           adminError
 */
