export function isEmpty(object:any){
   	return (typeof object == 'undefined' || object == null
			|| JSON.stringify(object) === JSON.stringify({}) || object.length <= 0);
}
