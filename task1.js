async function iterateWithAsyncAwait(array){

    for(let i=0;i<array.length;i++){
        console.log(array[i]);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

}