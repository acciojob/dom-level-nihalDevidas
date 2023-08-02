//your JS code here. If required.
const itemList = Array.from(document.getElementsByTagName("li"));

for(let i=0; i < itemList.length; i++){
	if(itemList[i].id){
		if(itemList[i].id === "level"){
			alert(`The level of the element is: ${i+1}`);
		}
	}
}