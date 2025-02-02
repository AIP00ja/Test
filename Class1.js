// Q1(create object normal function)
// const person={
//     name:"pooja",
//     age:24,
//     gender:"F",
// }
// console.log(person.name)

//Q2(arrow function)
// const square=(a)=>{
//     return a**2;
// }
// console.log(square(9))

//Q3(annonymous function)
// const multipleByTwo=function(b){
//     return b*2;
// }
// console.log(multipleByTwo(4))

//Q4(filterEvenNumber)
//const c=[2,3,4,5,6,7,8,9]
// const filterEvenNum=c.filter((c)=>{
//     return c%2==0;
// })
// console.log(filterEvenNum)

//Q5
//a
// const d=[1,2,3,4,5,6,7,8,9,10];
// const mapSquare=d.map((d)=>{
//     return d**2
// })
// console.log(mapSquare)

//b
// const e=[1,2,3,4,5,6,7,8,9,10];
// const filterOdd=e.filter((e)=>{
//     return e%2 !==0
// })
// console.log(filterOdd)

//c
// const f=[1,2,3,4,5,6,7,8,9,10];
// const reduceSum=f.reduce((f,sum)=>{
//     return f+sum
// })
// console.log(reduceSum)

//Q6(normal function create)
// const g=[1,2,3,4,5,6,7,8,9,10]
// function findMax(g){
//     return Math.max(...g)
// }
// console.log(findMax(g))

//Q7(create object,in array, use filter)
// const EmpEar=[{id:1,name:"pooja",salary:8000000},{id:2,name:"riya",salary:4000000},{id:3,name:"nikita",salary:3000000}]
// const Amount=EmpEar.filter((EmpEar)=>{
//     return EmpEar.salary>4000000
// })
// console.log(Amount)

//Q8
const P_Order=[{product:"TV",price:200000,order:5},{product:"AC",price:200000,order:6},{product:"Fans",price:200000,order:7}]
const totalSales=P_Order.reduce((P_Order,sum)=>{
    return P_Order+sum.order
},0)
console.log(totalSales)


