package resume

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional
import grails.rest.*

class UserAccountController extends RestfulController {
    //static responseFormats = ['json']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    UserAccountController(){
        super(UserAccount)
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
        return account
    }

    def delete(){
        def account = UserAccount.find{userName == uname}
        account.delete(flush : true)
    }

}
