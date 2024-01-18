document.getElementById("user").addEventListener("input", function(event) {
    const text = event.target.value;
    console.log(text);
    const deleteBtn = document.getElementById("delete");
    if (text === "DELETE") {
      deleteBtn.removeAttribute("disabled");
      alert("Login Successful");
      window.location.href = "https://github.com/login";
    }
    else {
      deleteBtn.setAttribute("disabled", true);
      alert("Login Failed");
      
    }
  });
  