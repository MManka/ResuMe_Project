package resume

class UserAccount {

    String userName
    String password
    // hasOne property should be on the owning object
    // e.g. UserAccount owns the Profile
    static hasOne = [userProfile : Profile]



    static constraints = {
        userName unique: true
        userProfile nullable: true
    }
}