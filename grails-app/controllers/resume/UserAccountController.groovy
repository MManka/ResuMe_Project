package resume

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional
import grails.rest.*

class UserAccountController extends RestfulController {
    //static responseFormats = ['json']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE", login: "GET"]

//URL mappings determine what http method is used for each Controller method.
// see http://docs.grails.org/2.2.1/guide/webServices.html

    UserAccountController(){
        super(UserAccount)      //Takes the same objects as Domain class.
    }

//    def index() {
//    }

    // Checks to see if username taken.  If not, creates Account and saves to database.
    def save() {
        println "stuff"
        def uname = request.JSON["userName"]
        def userPassword = request.JSON["userPassword"]     // just have to ensure variables in JSON object and in javascript
        println uname + userPassword
        def account = UserAccount.find{userName == uname}
        if(account == null){
            account = new UserAccount(userName : uname, password : userPassword).save()
            new Profile(ownerAccount : account).save()
            println UserAccount.findAll()

            println "Account Created"
            response.status = 200

        }
        else{
            println "User Name is already taken."
            response.status = 404
        }
    }

    // Allows user to access account
    def login(){
        def uname = params.userName
        def account = UserAccount.find{userName == uname}
        if(account == null){
            println "User is not registered"
            response.status = 404
        }
        else {
            return account
            response.status = 200
        }
    }

    def delete(){
        def account = UserAccount.find{userName == uname}
        if(account == null){
            println "You cannot destroy what never was"
            response.status = 404
        }
        account.delete(flush : true)
        println "Account deleted"
        response.status = 200
    }

}

/*
Notes:
200 is an HTTP response status code, which indicates if a specific HTTP response has been successfully completed.
There are five classes: informational responses, successful responses, redirects, client errors,
and server errors.
200 means a request has succeeded. With HTTP method GET: resource has been fetched and is present in message body
POST:  Resource describing result of action transmitted in message body.
404:  Server cannot find the requested resource.
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */