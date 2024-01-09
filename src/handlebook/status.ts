enum HttpStatusCode {
    OK = 200,
    Created = 201,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404 , 
     InternalServerError = 500,
   }
   
   function handleHttpResponse (status : HttpStatusCode) : void {
      switch(status){
        case HttpStatusCode.OK:
            console.log("başarılı : 200")
            break;
        case HttpStatusCode.Created:
            console.log("Oluşturuldu: 201 Created");
            break;
            case HttpStatusCode.BadRequest:
                console.error("Hatalı İstek: 400 Bad Request");
                break;
              case HttpStatusCode.Unauthorized:
                console.error("Yetkisiz Erişim: 401 Unauthorized");
                break;
              case HttpStatusCode.NotFound:
                console.error("Bulunamadı: 404 Not Found");
                break;
              case HttpStatusCode.InternalServerError:
                console.error("Sunucu Hatası: 500 Internal Server Error");
                break;
              default:
                console.warn("Bilinmeyen Durum Kodu");
                          
      }
   }

   let result:number =  10.123;
   result = 12.3333
   result.toFixed(1);