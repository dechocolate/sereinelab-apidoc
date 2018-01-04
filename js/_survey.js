/**
 * @apiDefine adminError
 * @apiError 401Error  AUTHORIZATION_REQUIRED
 */

 /**
 * @api                 {get}           /surveys/:id a.설문지 조회 
 * @apiVersion          0.1.0
 * @apiName             survey select
 * @apiGroup            Survey/SurveyAnswer
 *
 * 
 *
 * @apiParam          {ObjectId}        id             설문지 아이디  
 * @apiParam          {Json}            filter         filter 
 *  
 * 
 * @apiSuccess          {String}        title                           설문지 제목      
 * @apiSuccess          {String}        desc                            설문지 설명
 * @apiSuccess          {Integer}        surveyQuestion.type             타입(객관식 = 0 / 주관식 = 1 / 양자 = 2 / 범위 = 3 / 정도 = 4)
 * @apiSuccess          {String}        surveyQuestion.title             질문
 * @apiSuccess          {String}        surveyQuestion.mapping           맵핑
 * @apiSuccess          {Boolean}        surveyQuestion.display          사용 여부 (default : true)
 * @apiSuccess          {Integer}        surveyQuestion.max              최대값
 * @apiSuccess          {Integer}        surveyQuestion.min              최소값
 * @apiSuccess          {Object}         surveyQuestion.items             문항 Items
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
   {
    "title": "설문지 제목 1",
    "desc": "설문지 설명 1",
    "id": "5a1eaa6c31da970c3a31d269",
    "surveyQuestions": [
        {
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
        },
        {
            "type": 1,
            "title": "주관식 질문입니다.~~",
            "mapping": "주관",
            "display": true,
            "items": null,
            "id": "5a307ef499377e35cc97d65c",
            "surveyId": "5a1eaa6c31da970c3a31d269",
            "max": null,
            "min": null
        },
        {
            "type": 2,
            "title": "부먹, 찍먹 ?",
            "mapping": "탕수육",
            "display": true,
            "items": [
                {
                    "text": "부먹",
                    "value": "0"
                },
                {
                    "text": "찍먹",
                    "value": "1"
                }
            ],
            "id": "5a307f2899377e35cc97d65d",
            "surveyId": "5a1eaa6c31da970c3a31d269",
            "max": null,
            "min": null
        },
        {
            "type": 3,
            "title": "좋아하는 숫자를 고르세요.",
            "mapping": "숫자",
            "display": true,
            "items": null,
            "id": "5a307f4399377e35cc97d65e",
            "surveyId": "5a1eaa6c31da970c3a31d269",
            "max": "10",
            "min": "1"
        }
    ]
}
 *  @apiSuccessExample   {json}      Filter-example (상세조회 쿼리)
    {
		"include": "surveyQuestions" 		
	} 	
 */