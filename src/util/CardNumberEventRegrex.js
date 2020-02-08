
 const cardFormat =(text)=>{
    let pattern = /^(\d{4})-(\d{4})-(\d{4})-(\d{4})$/i;
     return pattern.test(text);

};

export default cardFormat;



