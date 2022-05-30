async function GetHTML(templateId, token) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "");
  myHeaders.append("reCAPTCHA-Token", token);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: templateId,
    redirect: "follow",
  };

  let response = await fetch(
    "http://127.0.0.1:5000/downloadhtml",
    requestOptions
  );
  return response.json();
}

export default GetHTML;
