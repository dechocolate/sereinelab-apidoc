/**
 * @apiDefine adminError
 * @apiError 401Error  AUTHORIZATION_REQUIRED
 */

 /**
 * @api                 {get}           /surveys/:id a.설문지 조회 
 * @apiVersion          0.1.0
 * @apiName             survey select
 * @apiGroup            Survey
 *
 * 
 * @apiDescription
 * Find a model instance by {{id}} from the data source.
 *
 * @apiParam          {ObjectId}        id             설문지 아이디  
 * @apiParam          {Json}            filter         filter 
 *  
 * 
 * @apiSuccess          {String}        title          설문지 제목      
 * @apiSuccess          {String}        desc           설문지 설명
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
    {
        "title": "설문지 제목",
        "desc": "설문지 설명"
    }
 *  @apiSuccessExample   {json}      Filter-example (상세조회 쿼리)
    {
		"include": "surveyQuestions" 		
	} 	
 */