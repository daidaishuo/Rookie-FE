async function async1() {
    console.log('async1 start');
    await async2();                
    console.log('async1 end');
}
async function async2() {
    await async3(); 
    console.log('async2');
}
async function async3() {
    console.log('async3');
}
async1();

// async1 start
// async3
// async2
// async1 end