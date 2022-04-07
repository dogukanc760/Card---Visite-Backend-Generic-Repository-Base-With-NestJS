
export class User {

    fullName: string;
    companyName:string;
    gsm: string;
    gsm1: string;
    gsm2: string;
    mail: string;
    password: string;
    city: string;
    distinct: string;
    //bize gelen şikayetler
    // fromComplain: { type: Array },
    // //bizim şikayet ettiklerimiz
    // toComplain: { type: Array },
    // //engelli listemiz
    // blockList: { type: Array },
    isBan:boolean;
    banTime:string;
    isActive:boolean;

}