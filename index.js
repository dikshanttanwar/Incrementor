// const numbers = document.querySelector("#numbers");
// numbers.innerHTML = 0;
// // for(let i=0;i<=10;i++){
// //     numbers.innerHTML = `${i}`
// //     console.log(`${i}`)
// // }
// const Update = ()=>{
//     const startNum = +numbers.innerHTML;
//     let i =0;
//     if(true && startNum<=3999){
//         numbers.innerHTML = `${startNum+50}`;
//         setTimeout(Update,10)
//     }
// }
// Update();

const number = document.querySelectorAll('.numbers')

number.forEach((numbers)=>{
    const newNum = numbers.innerHTML = 0;

    const updateNum=()=>{
        const finalNum = +numbers.getAttribute("data-target");
        const startNum = Number(numbers.innerHTML)
        // const increase = finalNum / 100;
        if(true && startNum<=finalNum){
            numbers.innerHTML = `${startNum + finalNum/50}`
            setTimeout(updateNum,10)
        }
        else{
            numbers.innerHTML = `${finalNum}`
        }
    }

    updateNum();
})
