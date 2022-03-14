import "../App.css";

function CompletionBar(props) {
  const progress = props.progress.toString() + "%";
  return (
    <>
      <div className="progress-base">
        <div className="progress-status" style={{ width: progress }}></div>
      </div>
    </>
  );
}

export default CompletionBar;
