const textModifier = (text) => {
    let  products =  text.replace(/_/g, " ").replace(/-/g, " "); 
    // //let products ="product"
    
    // var productType =   products
    var productType =   products
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    return productType;
}
export default textModifier;