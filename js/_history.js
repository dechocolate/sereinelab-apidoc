/**
 * @apiDefine adminError
 * @apiError 401Error  AUTHORIZATION_REQUIRED
 */


/**
 * @api                 {post}           /users/:id/histories a.활동기록 등록
 * @apiVersion          0.1.0
 * @apiName             history regist
 * @apiGroup            History
 *
 * @apiPermission       User
 * @apiHeader           (User) {String} authorization Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiParam    {ObjectId}  id                                사용자 아이디
 * @apiParam    {String}    event                             기록 내용

 * 
 * @apiSuccess    {String}      date                            기록 시간 (default: now())
 * @apiSuccess    {ObjectId}    userId                          사용자 아이디
 * @apiSuccess    {ObjectId}    id                              기록 아이디
 * @apiSuccess    {String}      event                           기록 내용
 * 
 * @apiDescription
 * Creates a new instance in histories of this model.
 *
 * 
 * @apiSuccessExample
 * {}
 * 
 *  @apiUse           adminError
*/


/**
 * @api                 {get}           /users/:id/histories b.활동기록 조회
 * @apiVersion          0.1.0
 * @apiName             history select
 * @apiGroup            History
 *
 * @apiPermission       User
 * @apiHeader           (User) {String} authorization Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiParam    {ObjectId}  id                              사용자 아이디

 * 
 * @apiSuccess    {String}      date                            기록 시간 (default: now())
 * @apiSuccess    {ObjectId}    userId                          사용자 아이디
 * @apiSuccess    {ObjectId}    id                              기록 아이디
 * @apiSuccess    {String}      event                           기록 내용
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