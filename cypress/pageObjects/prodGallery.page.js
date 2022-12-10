class ProductGallery{
    //#region Selectors

    get hatAddToCart(){
        return (`.chakra-button.snipcart-add-item.css-betff9[data-item-id='quality-hat-model']`)
    }

    get hatImgBtn(){
        return (`img[src='/images/quality-hat-model.jpg']`)

    }

git 



    //#endregion

}
export default new ProductGallery()