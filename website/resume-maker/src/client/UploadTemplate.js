async function UploadTemplate(templateData, token) {
  const { TemplateName, TemplateDescription, Email, HTML } = templateData;
  let templateAttributes = {
    TemplateName: TemplateName,
    TemplateDescription: TemplateDescription,
    Email: Email,
    HTML: HTML,
  };
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "");
  myHeaders.append("reCAPTCHA-Token", token);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(templateAttributes),
    redirect: "follow",
  };
  await fetch("http://127.0.0.1:5000/uploadtemplate", requestOptions);
}

export default UploadTemplate;
