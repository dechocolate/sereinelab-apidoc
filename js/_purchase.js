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
 * @apiSuccess    {ObjectId}  id                              구매 아이디
 * @apiSuccess    {ObjectId}  userId                          구매 사용자 아이디
 * @apiSuccess    {Date}      date                            구매일
 * @apiSuccess    {Number}    price                           상품 원가
 * @apiSuccess    {Number}    discount                        할인율
 * @apiSuccess    {Number}    total                           상품 실제 결제 금액
 * @apiSuccess    {Boolean}   subscription                    정기결제 여부 (true / false) (default:false)
 * @apiSuccess    {String}    type                            결제수단
 * @apiSuccess    {String}    address                         배송주소
 * @apiSuccess    {Number}    progress                        배송 주문 상태 (0=준비 / 1=배송완료 / 2=배송취소)   
 * @apiSuccess    {Object}    _import                    	  아임포트 결제 정보
 * @apiSuccess    {Object}    _purchaseItems                  배송 구매 아이템 리스트 (캡슐)
 * @apiSuccess    {String}    _purchaseItems_name             배송 구매 아이템 캡슐명 (캡슐)
 * @apiSuccess    {String}    _purchaseItems_code             배송 구매 아이템 캡슐코드 (캡슐)
 * @apiSuccess    {String}    _purchaseItems_capsuleId        배송 구매 아이템 캡슐 아이디 (캡슐)
 * @apiSuccess    {String}    _purchaseItems_level	    	  배송 구매 아이템 캡슐 향 세기 (캡슐)
 * 
 * @apiSuccessExample
 * HTTP/1.1 200 OK
[
    {
        "date": "2018-01-25T04:43:25.518Z",
        "price": 200,
		"discount": 50,
		"total": 100,
		"subscription": 0,
		"type": "payment",
        "name": "76N1 페이스 오일",
        "address": "서울 강남구 양재대로 339 33",
        "progress": 0,
        "id": "5a69606da62ccf13ed86c5df",
        "userId": "5a1e38fb4d90dd05b086affc",
        "_purchaseItems": [
            {
                "id": 0,
                "name": "일랑일랑 5ml",
                "code": "aroma3",
                "userId": "5a1e38fb4d90dd05b086affc",
                "capsuleId": "5a680c20a2525b07b50b91a4"
            }
        ],        
        "_import": {}        
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