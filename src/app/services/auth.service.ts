import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Schema } from '../shared/schema';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  currentUser: BehaviorSubject<any> = new BehaviorSubject(null)
  baseurl = "https://localhost:7228/api/"
  baseurl1 = "https://localhost:7228/api/SendEmail"
  baseurl2 = "https://localhost:7228/api/SendingEmail"
  productUrl = "https://localhost:7228/Products/"
  schemaUrl = "https://localhost:7228/Schema/"
  SchemaUrlById = "https://localhost:7228/Schema/GetById?id="
  gad7Url = "https://localhost:7228/Gad7/"
  jwtHelperService = new JwtHelperService();


  registerUser(user: Array<string>) {
    return this.http.post(this.baseurl + "User/CreateUser", {
      FirstName: user[0],
      LastName: user[1],
      Email: user[2],
      Mobile: user[3],
      Gender: user[4],
      Pwd: user[5],

    }, {
      responseType: "text",
    });
  }

  loginUser(loginInfo: Array<string>) {
    debugger
    return this.http.post(this.baseurl + "User/LoginUser",
      {
        Email: loginInfo[0],
        Pwd: loginInfo[1]
      },
      { responseType: 'text' });
  }


  getData() {
    return this.http.get<any>(this.productUrl)
  }

  deleteDatas(id: number) {
    return this.http.delete<any>(this.productUrl + id)
  }

  postClients(product: Array<string>) {
    return this.http.post(this.productUrl, {
      ProductName: product[0],
      Category: product[1],
      Comment: product[2],
      Price: product[3],
      Condition: product[4],
      Date: product[5],

    }, {
      responseType: "text",
    })
  }


  putClients(data: Array<string>, id: number) {
    return this.http.put(this.productUrl + id,
      {
        ProductName: data[0],
        Category: data[1],
        Comment: data[2],
        Price: data[3],
        Condition: data[4],
        Date: data[5],

      }, {
      responseType: "text",
    })
  }
  setToken(token: string) {
    localStorage.setItem("access_token", token);
    this.loadCurrentUser();
  }


  loadCurrentUser() {
    const token = localStorage.getItem("access_token");
    const userInfo = token != null ? this.jwtHelperService.decodeToken(token) : null;
    const data = userInfo ? {
      id: userInfo.id,
      firstname: userInfo.firstname,
      lastname: userInfo.lastname,
      email: userInfo.email,
      mobile: userInfo.mobile,
      gender: userInfo.gender
    } : null;
    this.currentUser.next(data);
  }


  IsLoggedin(): boolean {
    return localStorage.getItem("access_token") ? true : false;
  }
  removeToken() {
    return localStorage.removeItem("access_token");
  }


  postSchema(schema: Array<string>) {
    //debugger
    return this.http.post(this.schemaUrl,

      {
        schemaName: schema[0],
        jsonSchema: schema[1]
      }
    )
  }
  getSchema() {
    return this.http.get<Schema>(this.schemaUrl)
  }

  getSchemaById(id: any): Observable<any[]> {
    //debugger
    return this.http.get<any>(this.SchemaUrlById + id)
  }

  getSchemaList(): Observable<any[]> {
    return this.http.get<any>(this.schemaUrl)
  }




  postGad7(gad7: any) {
    //debugger
    return this.http.post(this.gad7Url,{Gad7Date: gad7[0],
      TreatmentStage: gad7[1],
      Score: gad7[2],});
  }

  getGad7() {
    return this.http.get<any>(this.gad7Url)
  }

  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
sendEmail(mailMessage: any)
{
  return this.http.post(this.baseurl + "User/SendEmail", JSON.stringify(mailMessage), { headers: this.headers });
}
sendingEmail(emailMessage: any)
{
  debugger
  return this.http.post(this.baseurl + "Email/Send", { headers: this.headers });
}

}



