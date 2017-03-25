package resume

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString

@EqualsAndHashCode(includes='userName')
@ToString(includes='userName', includeNames=true, includePackage=false)
class UserAccount implements Serializable{

    private static final long serialVersionUID = 1

    transient springSecurityService

    String userName
    String password
    // hasOne property should be on the owning object
    // e.g. UserAccount owns the Profile

    UserAccount(String userName, String password){
        this()
        this.userName = userName
        this.password = password
    }

    Set<Role>getAuthorities(){
        UserRole.findAllByUser(this)*.role
    }

    protected void encodePassword() {
        password = springSecurityService?.passwordEncoder ? springSecurityService.encodePassword(password) : password
    }

    static hasOne = [userProfile : Profile]

    static constraints = {
        userName unique: true
        userProfile nullable: true
    }
}