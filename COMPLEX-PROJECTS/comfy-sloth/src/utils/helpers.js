export const formatPrice = (price) => {

    return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format((price/100).toFixed(2));

}

export const getUniqueValues = () => {}
