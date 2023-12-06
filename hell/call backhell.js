

asyncfunction1((result) => {
    asyncfunction2(result, (result2) => {
        asyncfunction3(result3, (result3) => {
            asyncfunction4(result3, (result4) =>{

            });
        });
    });
});






asyncfunction1()
.then(result1 => asyncfunction2(result1))
.then(result2 => asyncfunction2(result2))
.then(result3 => asyncfunction2(result3))
.then(result4 => (

))
.catch(error => {

});

async function myfunction(){
    try {
        const result1 = await asyncfunction1();
        const result2 = await asyncfunction2(result1);
        const result3 = await asyncfunction3(result2);
       const result4 = await asyncfunction4(result3);
} catch (error) {

}
}