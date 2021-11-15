export class User2 {
    name: string;
    email: string;
    dob: string;
    mobileNumber: string;
    panNumber: string;
    aadharNumber: string;
    salaryRange: any;
    userAddress: string;
    cardType: string;
    constructor(
        name: string,
        email: string,
        dob: string,
        mobileNumber: string,
        panNumber: string,
        aadharNumber: string,
        salaryRange: any,
        userAddress: string,
        cardType: string
    ) {

        this.name = name,
            this.email = email,

            this.dob = dob,

            this.mobileNumber = mobileNumber,

            this.panNumber = panNumber,

            this.aadharNumber = aadharNumber,

            this.salaryRange = salaryRange,
            this.userAddress = userAddress,
            this.cardType = cardType

    }
}