/**
 * @apiDefine adminError
 * @apiError 401Error  AUTHORIZATION_REQUIRED
 */

/**
 * @api                 {get}           /users/:id/dnas a.dna 조회
 * @apiVersion          0.1.0
 * @apiName             dna select
 * @apiGroup            Dna
 *
 * @apiPermission       User
 * @apiHeader           (User) {String} authorization Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiParam    {ObjectId}  id                              사용자 아이디
 * @apiParam    {json}  filter                              filter
 * 
 * @apiSuccess    {ObjectId}    id                              dna 아이디
 * @apiSuccess    {ObjectId}    userId                          사용자 아이디
 * @apiSuccess    {Date}        date                            dna 등록 시간 (default: now())
 * @apiSuccess    {Integer}     progress                        진행사항(미발송=0 / 발송하기=1 / 발송중=2)
 * @apiSuccess    {Date}        deliveryDate                    배송날짜
 * @apiSuccess    {Date}        completionDate                  검사 완료 날짜

 * 
 *
 * 
 * @apiSuccessExample
[
    {
        "progress": 0,
        "hospital": "hospital",
        "id": "5a1ea4a26b5c6439b3ed7b33",
        "userId": "5a1e38fb4d90dd05b086affc"
    }
]
 * 
 *  @apiUse           adminError
*/