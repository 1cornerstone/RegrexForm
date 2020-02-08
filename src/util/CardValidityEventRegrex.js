const expMonthAndYear =(text)=>{

    let pattern =/^(\d{2})\/(\d{2})$/i;
    return pattern.test(text);

};

export default expMonthAndYear;