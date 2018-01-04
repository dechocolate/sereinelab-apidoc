/**
 * @api                 {post}           /users/:id/purchases a.사용자 상품/약정 구매
 * @apiVersion          0.1.0
 * @apiName             product purchase 
 * @apiGroup            Cancelation/Purchase
 *
 * @apiPermission       User 
 * 
 * @apiHeader           (User) {String} authorization Authorization value.
 * 
 * @apiParam    {ObjectId}  id                              사용자 아이디 
 * @apiParam    {String}      imp_uid                       import uid
 * @apiParam    {String}      merchant_uid                  import merchant_uid (timestamp)
 * @apiParam    {Boolean}      subscription                  약정상품여부 (true일시 자동 약정결제)
 * @apiParam    {Object}      itemList                      구매리스트 / 기기인 경우 아이디, 약정상품인 경우 상세내역 작성
 *
 * @apiSuccess    {String}    _import                       import 결제 결과 저장 내역
 * 
 * @apiSuccessExample
 * HTTP/1.1 200 OK
    {        
        "discount": 1,
        "price": 1,                
        "id": 2,
        "userId": 1,
        "_import": {},
    }
* @apiSuccessExample   {json}      상품구매 json 예제
{   
	"imp_uid": rsp.imp_uid, // import uid
	"merchant_uid": rsp.merchant_uid, // 주문 번호	
	"subscription": true, // 약정 여부
    "itemList": []
}
* @apiSuccessExample   {json}      itemList array 예제 (일반결제)	
[
  {			
    "deviceId" : 3 //기기 구매시 추간
  },
  {			
    "contractProductId": 1,  //약정상품시 추가
      "detail": [  // 캡슐 상세 정보 추가 
        {
          "name": "스킨",
          "capsules": [
            {"id": 1, name": "로즈워터", "url": "img.png"},
            {"id": 2, name": "감초추출물", "url": "img.png"}
          ]
        },
        {
          "name": "로션",
          "capsules": [
            {"id": 1, name": "로즈워터", "url": "img.png"},
            {"id": 2, name": "감초추출물", "url": "img.png"}
          ]
        },
        {
          "name": "페이스오일",
          "capsules": [
            {"id": 1, name": "로즈워터", "url": "img.png"},
            {"id": 2, name": "감초추출물", "url": "img.png"}
          ]
        }
      ]
   }
]     
 * 
 *  @apiUse           adminError
*/







/**
 * @api                 {get}           /users/:id/purchases b.사용자 상품 구매 조회
 * @apiVersion          0.1.0
 * @apiName             product purchase select
 * @apiGroup            Cancelation/Purchase
 *
 * @apiPermission       User 
 * 
 * @apiHeader           (User) {String} authorization Authorization value.
 * 
 * 
 * @apiParam    {ObjectId}  id                              사용자 아이디
 * @apiParam    {Json}  filter                              filter
 * 
 * @apiSuccess    {Date}     date                            구매일 (default : now())
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




/**
 * @api                 {post}           /users/:id/contract/change f.사용자 약정 변경
 * @apiVersion          0.1.0
 * @apiName             product purchase update
 * @apiGroup            Cancelation/Purchase
 *
 * @apiPermission       User 
 * 
 * @apiHeader           (User) {String} authorization Authorization value.
 * 
 * @apiParam    {ObjectId}  id                              사용자 아이디
 * @apiParam    {ObjectId}  contractId                      현재 약정 아이디
 * @apiParam    {ObjectId}  contractProductId                변경할 상품아이디
 * 
 * @apiSuccess    {Inteager}     count                      변경된 약정 개월 수
 * 
 * @apiSuccessExample
 * HTTP/1.1 200 OK
	{
		"count": 5	
	}
 * 
 *  @apiUse           adminError
*/