//your JS code here. If required.
var student={
	name:"student",
	getKeys: function(){
		let arr=[];
		for(var key in this){
			arr.push(key);
		}
		return arr;
		
	}
}