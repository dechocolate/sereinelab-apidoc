/**
 * @api                 {post}           /users/:id/purchases a.상품 구매
 * @apiVersion          0.1.0
 * @apiName             product purchase 
 * @apiGroup            Purchase
 *
 * @apiPermission       User 
 * 
 * @apiHeader           (User) {String} authorization Authorization value.
 * 
 * @apiParam    {ObjectId}  id                              사용자 아이디 
 * @apiParam    {String}    address                         배송주소 
 * @apiParam    {Object}      itemList                      구매리스트 / type 0은 약정상품 (detail 상세 캡슐 입력), 1은 기기
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
 * @apiSuccess    {String}    importKey                       3rd lib 결제키 
 * @apiSuccess    {String}    deliveryKey                     배송업체키 
 * @apiSuccess    {ObjectId}  id                              구매 아이디
 *
 * 
 * @apiSuccessExample
 * HTTP/1.1 200 OK
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
* @apiSuccessExample   {json}      상품구매 json 예제
{    
    "price": 3000,
    "discount": 1000,
    "total": 2000,
    "address": "서울시 도봉구 쌍문동",    
	"contractProductId": 1,
    "itemList": []
}
* @apiSuccessExample   {json}      itemList array 예제	
	[
        {			
			"deviceId" : 3
        },
		{			
            "contractProductId": 1,
            "detail": [
                {
                    "name": "스킨",
                    "capsules": [
						{"name": "로즈워터"},
						{"name": "감초추출물"}
                    ]
                },
                {
					"name": "로션",
					"capsules": [
                        {"name": "로즈워터"},
						{"name": "감초추출물"}
                    ]
                },
                {
                    "name": "페이스오일",
                    "capsules": [
                        {"name": "로즈워터"},
						{"name": "감초추출물"}
                    ]
                }
			]
		}
	]     
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
 * 
 * @apiParam    {ObjectId}  id                              사용자 아이디
 * @apiParam    {Json}  filter                              filter
 * 
 * @apiSuccess    {Date}    date                            구매일 (default : now())
 * @apiSuccess    {String}    summary                         구매품 요약
 * @apiSuccess    {Integer}   supply                          총 공급금액
 * @apiSuccess    {Integer}   discount                        총 할인금액
 * @apiSuccess    {Integer}   price                           총 구매금액
 * @apiSuccess    {String}    address                         배송주소
 * @apiSuccess    {Integer}   progress                        주문상태 (준비=0/ 완료=1/ 취소=2)
 * @apiSuccess    {Boolean}   res                             결제상태 (성공=true / 실패=false)  
 * @apiSuccess    {ObjectId}  userId                          사용자 아이디
 * @apiSuccess    {String}    importKey                       3rd lib 결제키 
 * @apiSuccess    {String}    deliveryKey                     배송업체키 
 * @apiSuccess    {ObjectId}  id                              구매 아이디
 * 
 * @apiSuccessExample
 * HTTP/1.1 200 OK
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