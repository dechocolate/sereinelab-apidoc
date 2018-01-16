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
 * @apiSuccess          {ObjectId}      id                           	설문지 아이디  
 * @apiSuccess          {String}        title                           설문지 제목      
 * @apiSuccess          {String}        desc                            설문지 설명
 
 * @apiSuccess        	{ObjectId}        categories_id             	설문지 카테고리 아이디
 * @apiSuccess        	{String}        categories_title             	설문지 카테고리 질문/내용
 
 * @apiSuccess        	{ObjectId}        categories_questions_id       설문지 문항 아이디
 * @apiSuccess        	{String}        categories_questions_title      설문지 문항 질문/내용
 * @apiSuccess        	{String}        categories_questions_type       설문지 문항 타입(객관식=0 / 주관식=1 / 범위선택=2 / 양자택일=3)
 
 * @apiSuccess          {Integer}        categories_questions_min       최소값 (문항 타입이 범위선택 인 경우)
 * @apiSuccess          {Integer}        categories_questions_max       최대값 (문항 타입이 범위선택 인 경우)	
 
 * @apiSuccess          {String}        categories_questions_items_text   설문지 문항 보기 내용
 * @apiSuccess          {String}        categories_questions_items_vlaue  설문지 문항 보기 맵핑 값

 * 
 * @apiSuccessExample   {json}      Filter-example (상세조회 쿼리)
{
	"include": [
		{
			"relation": "categories",
			"scope": {
				"include": [
					{
						"relation": "questions",
						"scope": {
							"fields": ["id", "surveyQuestionCategoryId", "type", "title", "items"],
							"where": {"display":true}		
						}
					}
				]
			}
		}
	]
}
 */