
 const nameRegrex =  (text)=>{
   let namePattern = /^([a-z\s]+)$/i;

    return namePattern.test(text);

 };



export default nameRegrex;