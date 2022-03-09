(function(){
	const $content = document.querySelector("#content");
	const $form = document.querySelector("#form-input");

	const $inputFile = $form.querySelector("#input-file");
	let fileInput = [];

	$inputFile.addEventListener("input",function(event){
		fileInput = Array.from(this.files).map(function(file){
			let name = file.name.split(".")[0];
			return {
				image:file.name,
				name:name,
				alias:convertToAlias(name)
			}
		});
	})
	const $inputPriceMin = $form.querySelector("#input-price-min");
	let minPrice = 0;
	$inputPriceMin.addEventListener('input',function(event){
		minPrice = event.target.value;
	})
	const $inputPriceMax = $form.querySelector("#input-price-max");
	let maxPrice = 0;
	$inputPriceMax.addEventListener('input',function(event){
		maxPrice = event.target.value;
	})

	const $inputPriceStep = $form.querySelector("#input-price-step");
	let stepPrice = 0;
	$inputPriceStep.addEventListener('input',function(event){
		stepPrice = event.target.value;
	})
	const $submitButton = $form.querySelector("#submit-button");
	$submitButton.addEventListener('click',function(){
		$clearButton.click();
		fileInput.forEach(function(input,index){
			let price = Number.parseInt(minPrice) + Number.parseInt(Math.random()*(maxPrice - minPrice));
			price -= price%stepPrice;
			
			if(price >= minPrice && price <= maxPrice){
				input.price = price;
			}else{
				input.price = "NULL";
			}

			let sale = Math.random();
			if(sale >= 0.6 && sale <= 0.9){
				let salePrice = Number.parseInt(price*sale);
				salePrice -= salePrice%stepPrice;
				if(salePrice >= minPrice && salePrice <= maxPrice){
					input.salePrice = salePrice;
				}else{
					input.salePrice = "NULL";
				}
			}else{
					input.salePrice = "NULL";
				}
			writeInsert(input,index+1)
		})
	})
	const $clearButton = $form.querySelector("#clear-button");
	$clearButton.addEventListener('click',function(){
		$content.innerHTML="";
	})





	const $inputTableName = $form.querySelector("#input-table-name");
	let tableName = "";
	$inputTableName.addEventListener('input',function(event){
		tableName = event.target.value;
	})
	function writeSpace(spaceInt){
		let space = "";
		for(let i = 0 ; i < spaceInt ; i++){
			space+="&nbsp;";
		}
		return space;
	}
	function writeInsert(input,index){
		$content.innerHTML+=`<div class="col col-12">
			<div class="row">insert into</div>
			<div class="row">${writeSpace(4)}${tableName}(id,name,alias,image,price,salePrice)</div>
			<div class="row">${writeSpace(4)}values(${index},N'${input.name}',${input.alias},N'${input.image}',${input.price},${input.salePrice});</div>
		</div>`
	}
})()