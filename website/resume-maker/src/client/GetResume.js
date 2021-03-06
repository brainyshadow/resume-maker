async function GetResume(passedAttributes, token) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "");
  myHeaders.append("reCAPTCHA-Token", token);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: passedAttributes,
    redirect: "follow",
  };

  let fileName = "resume.pdf";
  let response = await fetch("http://127.0.0.1:5000/download", requestOptions);
  if (response.status === 200) {
    let blob = await response.blob();
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
    a.click();
    a.remove(); //afterwards we remove the element again
    return 200;
  } else {
    return 400;
  }
}

export default GetResume;
