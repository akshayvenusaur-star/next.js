function log() {
 for (var i = 0; i <5; i++) {
   console.log(i);
   
    
 }
    console.log('finally:',i);
    
}
log();


//data types
let age:number=21;
let myName:string="aks";
let std:boolean=true;
let d:any;
let e:number[]=[1,2,3];
let f:any[]=[1,'sd',true];


//enum color

const red=0;
const blue=1;
const green=2;
enum color{red=101,blue=102,green=103};
let bgcolor=color.red;


//type assertion
let myColor;
myColor='red';
let endsWith=(<string>myColor).endsWith('d')
let alter=(myColor as string).endsWith('d')


//arrow function
let log=function (message:string) {
    console.log(message);
    
    
}
let dolog=(message:string)=>console.log(message);


//interface only to construct datatype
interface point{
    x:number,
    y:number
    draw :()=> void
}
let drawrectangle=(p:point)=>{

}
let somefun=()=>{

}
drawrectangle({x:1,y:2,draw:somefun})


//class and constructor
class remote{
    on:string;
    Off:string;
    constructor(on:string,off:string){
        this.on=on;
        this.Off=off;
    }
    power():any{
        console.log('on:'+this.on+'off:'+this.Off);
    }
    volume():void{
        console.log("increase");
    }
}
let r=new remote("on","off");
r.power();
r.volume();


//get and set~

class Student {
    name: string = "Akshay";

    get studentName(): string {
        return this.name;
    }
    // set studentName(newName:string){
    //     this.name=newName;
    // }
}

let s1 = new Student();
// s1.studentName="abi";
console.log(s1.studentName);