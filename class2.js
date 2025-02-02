//Q1 array destructuring
//a
// const a=["TV","AC","Fans"]
// const [P1, P2, P3]=a
// console.log(P1+""+P2+""+P3)


//b object destructuring
// const object1={
//     id:1,
//     name:"pooja"
// }
// const {id,name}=object1
// console.log(name);

//Q2
// class Emp{
//     id;
//     name;
//     salary;
//     constructor(id,name,salary){
//         this.id=id;
//         this.name=name;
//         this.salary=salary;
//     }
//     displayInfo(){
//         console.log(this.id, this.name, this.salary);
//     }
// }
// const ob1 = new Emp(1, "riya", 50000);
// ob1.displayInfo();

//Q3 demonstrate Promise

// function payment(pay){
//     return new Promise((resolve, reject)=>{
//         if(pay){
//             resolve("Payment done.....")
//         }
//         else{
//             reject("failed to pay...")
//         }
//     })
// }
// payment(false).then((result)=>{ 
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
    
// })

//Q4

// function payment(pay){
//     return new Promise((resolve,reject)=>{
//         if(pay){
//             resolve("Pay done...")
//         }
//         else{
//             reject("failed...")
//         }
//     })
// }
// async function test() {
//     const b = await payment(true);
//     if (b) {
//         console.log(b);
//     }
// }
// test();

//Q5
// function Calculate(rate=0.2,...product){
//     const total=product.reduce((sum,product)=>sum+product,0);
        
//     return total-total*rate
// }
// console.log(Calculate(undefined,1,2,3,4,5))

//Q6 try catch
// function validateAge(age){
//     try {
        
//         if(age<18)
//             throw new Error("Invalid age")
//     } catch (error) {
//         console.log(error.name+""+error.message)
        
//     }

// }
// validateAge(2);

//Q7 Exception Propagation
// function validateAge(age){
//     if(age<18){
//         throw new Error("Invalid age")
//     }
//     else{
//         console.log("valid age");
       
//     }
// }
// function checkAge(){
// try {
//     validateAge(8);
// } catch (error) {
//     console.log(error.name+":"+error.message);
// }
// }
// checkAge();

//Q8 finally Block
// function validateAge(age){
//    try {
//     if(age<18){
//         throw new Error("Invaild age")
//     }
    
//    } catch (error) {
//     console.log(error.name+""+error.message)
    
//    }
//    finally{
//     console.log("Rest of code")
//    }
// }
// validateAge(2);

//Q9

// class InvalidCouponCode extends Error{
//     constructor(message){
//         super(message);
//         this.name="Invalid code"
//     }

// }
// function checkCoupon(coupon){
//     try {
//         if(coupon!="PoJo12#"){
//             throw new Error("Invalid coupon code....")
//         }
//         else{
//             console.log("valid code....")
//         }        
        
//     } catch (error) {
//         console.log(error.name+""+error.message)
        
//     }

// }
// checkCoupon("PoJo12#")

//Q10
function validateAge(age){
    if(age<18){
        throw new Error("Invalid age")
    }
    else{
        console.log("valid.....")
    }
}
    try {
        console.log(validateAge(20))
        
    } catch (error) {
        console.log(error.name+""+error.message)
        
    }

