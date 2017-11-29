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

 * @apiSuccess    {ObjectId}    id                              dna 아이디
 * @apiSuccess    {String}      date                            dna 등록 시간 (default: now())
 * @apiSuccess    {Integer}     progress                        진행사항(미발송=0 / 발송하기=1 / 발송중=2)
 * @apiSuccess    {String}      hospital                        검사기관
 * @apiSuccess    {ObjectId}    userId                          사용자 아이디
 * 
 * @apiDescription
 * Queries histories of user.
 *
 * 
 * @apiSuccessExample
 * {}
 * 
 *  @apiUse           adminError
*/