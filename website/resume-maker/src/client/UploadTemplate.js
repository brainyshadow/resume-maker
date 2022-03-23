async function UploadTemplate(templateData) {
  const { name, description, email, HTML } = templateData;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "");
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: passedAttributes,
    redirect: "follow",
  };
  
}

export default UploadTemplate;
