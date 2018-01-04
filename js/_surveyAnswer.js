/**
 * @apiDefine adminError
 * @apiError 401Error  AUTHORIZATION_REQUIRED
 */
/**
 * @api                 {post}           /users/:id/surveyAnswers b.설문 답변
 * @apiVersion          0.1.0
 * @apiName             surveyAnswer write
 * @apiGroup            Survey/SurveyAnswer
 * 
 * 
 * @apiPermission       User
 * @apiHeader           (User) {String} authorization Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 *
 * @apiParam        {ObjectId}  id          사용자 아이디
 * @apiParam        {ObjectId}  surveyId    설문지 아이디
 * @apiParam        {Object}    answers     문항 답변 array
 * 
 * @apiSuccessExample   {arr}  설문 답변(answers) array 예제
[
	{
		"surveyQuestionId" : "5a307ed099377e35cc97d65b",  //질문 아이디		
		"value" : 0  //질문 값
	},
	{
		"surveyQuestionId" : "5a307ef499377e35cc97d65c",		
		"value" : "아 몰랑!"
	},
	{
		"surveyQuestionId" : "5a307f2899377e35cc97d65d",	
		"value" : 0
	},
	{
		"surveyQuestionId" : "5a307f4399377e35cc97d65e",		
		"value" : 8
	}
]
 * 
 * 
 * @apiUse           adminError
 */


 /**
 * @api                 {get}           /users/:id/surveyAnswers/:fk c.개인 설문지 답변 내용 조회
 * @apiVersion          0.1.0
 * @apiName             personal surveyAnswer select
 * @apiGroup            Survey/SurveyAnswer
 * 
 * @apiPermission       User
 * @apiHeader           (User) {String} authorization Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiParam        {ObjectId}      id          사용자 아이디
 * @apiParam        {ObjectId}      fk          설문지 아이디 
 * 
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
[
    {
        "value": "0",
        "id": "5a4dc9ba687d1f097e3d95dc",
        "surveyAnswerId": "5a4dc9ba687d1f097e3d95db",
        "surveyQuestionId": "5a307ed099377e35cc97d65b",
        "userId": "5a1e38fb4d90dd05b086affc",
        "surveyQuestion": {
            "type": 0,
            "title": "좋아하는 스포츠는?",
            "mapping": "스포츠",
            "display": true,
            "items": [
                {
                    "text": "축구",
                    "value": "0"
                },
                {
                    "text": "야구",
                    "value": "1"
                },
                {
                    "text": "농구",
                    "value": "2"
                }
            ],
            "id": "5a307ed099377e35cc97d65b",
            "surveyId": "5a1eaa6c31da970c3a31d269",
            "max": null,
            "min": null
        }
    }
]
 * @apiUse           adminError
 */
