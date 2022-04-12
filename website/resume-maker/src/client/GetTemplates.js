async function GetResume(token) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "");
  myHeaders.append("reCAPTCHA-Token", token);
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  let response = await fetch(
    "http://127.0.0.1:5000/gettemplate",
    requestOptions
  );
  return response.json();
}

export default GetResume;
