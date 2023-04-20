

const getUniqueValue=(array,type)=>{

    if(type==='category'){
        const newArray=['all',...new Set(array)]
        return newArray;
    }
    if(type==='company'){
        const newArray=['all',...new Set(array)]
        return newArray;
    }

    if(type==='colors'){
        let newArray=array.flat();
        newArray=['all',...new Set(newArray)];
        return newArray;
    }

}


export default getUniqueValue;