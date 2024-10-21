async function awaitCall(API) {
   const data= await new Promise(resolve => setTimeout(() => resolve("Fetched Data"), 2000));
   console.log(data); 
    
}