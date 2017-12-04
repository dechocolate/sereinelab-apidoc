/**
 * @apiDefine adminError
 * @apiError 401Error  AUTHORIZATION_REQUIRED
 */


/**
 * @api                 {post}           /users/:id/purchases a.상품 구매
 * @apiVersion          0.1.0
 * @apiName             product purchase 
 * @apiGroup            Purchase
 *
 * @apiPermission       User
 * @apiHeader           (User) {String} authorization Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiParam    {ObjectId}  id                              사용자 아이디
 * @apiParam    {String}    summary                         구매품 요약
 * @apiParam    {Integer}   supply                          총 공급금액
 * @apiParam    {Integer}   discount                        총 할인금액
 * @apiParam    {Integer}   price                           총 구매금액
 * @apiParam    {String}    address                         배송주소
 * @apiParam    {Integer}   progress                        주문상태 (준비=0/ 완료=1/ 취소=2)
 * @apiParam    {Boolean}   res                             결제상태 (성공=true / 실패=false)  
 * @apiParam    {String}    importKey                       3rd lib 결제키 
 * @apiParam    {String}    deliveryKey                     배송업체키
 * 
 * @apiSuccess    {String}    date                            구매일 (default : now())
 * @apiSuccess    {String}    summary                         구매품 요약
 * @apiSuccess    {Integer}   supply                          총 공급금액
 * @apiSuccess    {Integer}   discount                        총 할인금액
 * @apiSuccess    {Integer}   price                           총 구매금액
 * @apiSuccess    {String}    address                         배송주소
 * @apiSuccess    {Integer}   progress                        주문상태 (준비=0/ 완료=1/ 취소=2)
 * @apiSuccess    {Boolean}   res                             결제상태 (성공=true / 실패=false)  
 * @apiSuccess    {ObjectId}  userId                          사용자 아이디
 * @apiSuccess    {ObjectId}    importKey                       3rd lib 결제키 
 * @apiSuccess    {ObjectId}    deliveryKey                     배송업체키 
 * @apiSuccess    {ObjectId}  id                              구매 아이디
 * 
 * @apiDescription
 * Creates a new instance in purchases of this model.
 *
 * 
 * @apiSuccessExample

    {
        "summary": "summary",
        "supply": 1,
        "discount": 1,
        "price": 1,
        "address": "address",
        "progress": "1",
        "res": "",
        "id": 2,
        "userId": 1,
        "importKey": "",
        "deliveryKey": ""
    }

 * 
 *  @apiUse           adminError
*/


/**
 * @api                 {get}           /users/:id/purchases b.상품 구매 조회
 * @apiVersion          0.1.0
 * @apiName             product purchase select
 * @apiGroup            Purchase
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
 * @apiSuccess    {String}    date                            구매일 (default : now())
 * @apiSuccess    {String}    summary                         구매품 요약
 * @apiSuccess    {Integer}   supply                          총 공급금액
 * @apiSuccess    {Integer}   discount                        총 할인금액
 * @apiSuccess    {Integer}   price                           총 구매금액
 * @apiSuccess    {String}    address                         배송주소
 * @apiSuccess    {Integer}   progress                        주문상태 (준비=0/ 완료=1/ 취소=2)
 * @apiSuccess    {Boolean}   res                             결제상태 (성공=true / 실패=false)  
 * @apiSuccess    {ObjectId}  userId                          사용자 아이디
 * @apiSuccess    {ObjectId}    importKey                       3rd lib 결제키 
 * @apiSuccess    {ObjectId}    deliveryKey                     배송업체키 
 * @apiSuccess    {ObjectId}  id                              구매 아이디
 * 
 * @apiDescription
 * Queries purchases of user
 *
 * 
 * @apiSuccessExample
[
    {
        "id": 1,
        "userId": 1
    },
    {
        "summary": "summary",
        "supply": 1,
        "discount": 1,
        "price": 1,
        "address": "address",
        "progress": "1",
        "res": "",
        "id": 2,
        "userId": 1,
        "importKey": "",
        "deliveryKey": ""
    }
]
 * 
 *  @apiUse           adminError
*/