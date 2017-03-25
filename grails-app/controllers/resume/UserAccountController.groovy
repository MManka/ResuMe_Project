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

    def UserAccountService
//    def index() {
//    }
    def authenticate = {
        def user = UserAccount.findByUserNameAndPassword(params.userName, params.password)
        if(user){
            session.user = user
            flash.message = "Hello ${user.name}!"
            redirect(controller:"entry", action:"list")
            def activeUser = ActiveUser.get(0)
            activeUser.activeUser=session.user.name
            activeUser.save(flush:true, failOnError: true)
        }else{
            flash.message = "Sorry, ${params.userName}. Please try again."
            redirect(action:"login")
        }

    }
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
        def activeUser = ActiveUser.get(0)
        activeUser.activeUser=session.account.name
        activeUser.save(flush:true, failOnError: true)
    }

    // Allows user to access account
    def login(){}

    def logout = {
        flash.message = "Goodbye ${session.user.name}"
        session.user = null
        redirect(controller:"entry", action:"list")
    }

    def delete(){
        def account = UserAccount.find{userName == uname}
        account.delete(flush : true)
    }

    def getActiveUser() {
        def activeuname = ActiveUser.get(0)
        return activeuname
    }

    def getProfileDetails() {
        //uname = params.uname

    }

}