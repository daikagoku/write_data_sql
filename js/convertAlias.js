function convertToAlias(str){
	let newStr = str
				.toLowerCase()
				.replace(/\s{1,}/g,"-")
				.replace(/[àáảãạâấầẩẫậăắằẳẵặ]/g,"a")
				.replace(/[èéẻẽẹêếềểễệ]/g,"e")
				.replace(/[íìỉĩị]/g,"i")
				.replace(/[óòỏõọôốồổỗộơớờởỡợ]/g,"o")
				.replace(/[úùủũụưứừửữự]/g,"u")
				.replace(/[ýỳỷỹỵ]/g,"y")
				.replace(/[đ]/g,"d")
	return newStr;
}