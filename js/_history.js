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
 * @apiSuccess    {ObjectId}    userId                          사용자 아이디
 * @apiSuccess    {ObjectId}    id                              기록 아이디
 * @apiSuccess    {String}      event                           기록 내용
 * @apiSuccess    {Date}        date                            기록 시간 (default: now())
 * 
 * @apiDescription
 * Creates a new instance in histories of this model.
 *
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
    {
        "event": "event",
    	"id": "5a1ea0bc6b5c6439b3ed7b32",
    	"userId": "5a1e38fb4d90dd05b086affc"
    }
 * @apiSuccessExample   {json}      EVENT 매칭 값    
	구매  {code:a_a, msg: '구매해 주셔서 감사합니다.'}
	구매  {code:a_b, msg: '구매하셨습니다.'}
	구매  {code:a_c, msg: '재료소개' }
	구매  {code:a_d, msg: '결제금액소개' }
	구매  {code:a_e, msg: '약정결제안내' }
	구매  {code:a_f, msg: '취소 안내' }
	구매  {code:a_g, msg: '환불 안내' }

	배송  {code:b_a, msg: '준비 중에 있습니다.' }
	배송  {code:b_b, msg: '택배사 송장번호 안내' }
	배송  {code:b_c, msg: '이동중에 있습니다.' }
	배송  {code:b_d, msg: '배송기사 이름, 연락처 안내' }
	배송  {code:b_e, msg: '배송완료 안내' }

	DNA  {code:c_a, msg: '검사지가 도착했습니다.' }
	DNA  {code:c_a, msg: '분석 중에 있습니다.' }
	DNA  {code:c_a, msg: '분석이 완료 되었습니다.' }

	사용  {code:d_a, msg: '제조 하셨습니다.' }
	사용  {code:d_a, msg: '1달 분량입니다.' }
	사용  {code:d_a, msg: '유통기한 안내' }
	사용  {code:d_a, msg: '추가구매 안내' }

	후기  {code:d_a, msg: '후기등록 유도' }
	후기  {code:d_a, msg: '후기등록 내용 보기' }
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
 * @apiParam    {json}  filter                              filter

 * @apiSuccess    {ObjectId}    userId                          사용자 아이디
 * @apiSuccess    {ObjectId}    id                              기록 아이디
 * @apiSuccess    {Date}      	date                            기록 시간
 * @apiSuccess    {String}      event                           기록 내용
 * 
 * @apiDescription
 * Queries histories of user.
 *
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 [
    {
	"date": "2017-10-10 12:00:00",
        "event": "a_a",
        "id": "5a1ea0706b5c6439b3ed7b31",
        "userId": "5a1e38fb4d90dd05b086affc"
    },
    {
	"date": "2017-10-10 12:00:00",
        "event": "a_b",
        "id": "5a1ea0bc6b5c6439b3ed7b32",
        "userId": "5a1e38fb4d90dd05b086affc"
    }
]
* @apiSuccessExample   {json}      EVENT 매칭 값    
	구매  {code:a_a, msg: '구매해 주셔서 감사합니다.'}
	구매  {code:a_b, msg: '구매하셨습니다.'}
	구매  {code:a_c, msg: '재료소개' }
	구매  {code:a_d, msg: '결제금액소개' }
	구매  {code:a_e, msg: '약정결제안내' }
	구매  {code:a_f, msg: '취소 안내' }
	구매  {code:a_g, msg: '환불 안내' }

	배송  {code:b_a, msg: '준비 중에 있습니다.' }
	배송  {code:b_b, msg: '택배사 송장번호 안내' }
	배송  {code:b_c, msg: '이동중에 있습니다.' }
	배송  {code:b_d, msg: '배송기사 이름, 연락처 안내' }
	배송  {code:b_e, msg: '배송완료 안내' }

	DNA  {code:c_a, msg: '검사지가 도착했습니다.' }
	DNA  {code:c_a, msg: '분석 중에 있습니다.' }
	DNA  {code:c_a, msg: '분석이 완료 되었습니다.' }

	사용  {code:d_a, msg: '제조 하셨습니다.' }
	사용  {code:d_a, msg: '1달 분량입니다.' }
	사용  {code:d_a, msg: '유통기한 안내' }
	사용  {code:d_a, msg: '추가구매 안내' }

	후기  {code:d_a, msg: '후기등록 유도' }
	후기  {code:d_a, msg: '후기등록 내용 보기' }
 * 
 *  @apiUse           adminError
*/