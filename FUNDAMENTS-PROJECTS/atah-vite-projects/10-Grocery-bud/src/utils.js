

export const setToLocalStorage=(items)=>{

   localStorage.setItem('items',JSON.stringify(items))
}

export const getFromLocalStorage=()=>{

  return  JSON.parse(localStorage.getItem('items'))|| [];
    
}

