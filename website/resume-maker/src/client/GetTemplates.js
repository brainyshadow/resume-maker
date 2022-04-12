async function GetResume(passedAttributes, token) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "");
  myHeaders.append("reCAPTCHA-Token", token);
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    body: passedAttributes,
    redirect: "follow",
  };
  await fetch("http://127.0.0.1:5000/gettemplate", requestOptions).then(
    (res) => {
      console.log(res);
    }
  );
}

export default GetResume;
