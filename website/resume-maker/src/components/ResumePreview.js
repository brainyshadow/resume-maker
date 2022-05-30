import "./ResumePreview.css";

function ResumePreview(props) {
  let template = props.template;
  return (
    <div className="paper">
      <div dangerouslySetInnerHTML={{ __html: template }} />
    </div>
  );
}

export default ResumePreview;
