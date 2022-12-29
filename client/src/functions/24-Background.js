function findcolor(num){
	let arr=[]
	let arr1=[]
	if(num%2===0){
		for(let a=0;a<num;a++){
			if(a===0) arr[a]= true
			if(a>0 && arr1.length===0 && arr[a-1]===true) {arr[a]= false; arr1.push(1); continue}
			if(a>0 && arr1.length===1 && arr[a-1]===false) {arr[a]= false; arr1.pop(); continue}
			if(a>0 && arr1.length===0 && arr[a-1]===false) {arr[a]= true; arr1.push(2); continue}
			if(a>0 && arr1.length===1 && arr[a-1]===true) {arr[a]= true; arr1.pop(); continue}
		}
	}
	return arr
}

export {
    findcolor,
}