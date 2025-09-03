const byteSize = (str) => {
  // write your code here
	if(null===str || str.length===0){
    return 0
}

let ans=0;

  for (let i = 0; i < str.length; i++) {
    // Check if any character's code is outside the ASCII range (0-127)
    if (str.charCodeAt(i) > 127) {
		
		
      ans=ans+3;
		
		
    }
	else{
   ans=ans+1;   
  }  
  }
   
return ans;
	
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
