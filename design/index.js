function validateEmail() {
   var userEmail = document.getElementById("customerEmail").value;
   if (
      userEmail ==
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   ) {
      return true;
   } else {
      alert("Please enter a correct emaill addres");
   }
}
