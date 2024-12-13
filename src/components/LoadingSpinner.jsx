const LoadingSpinner = () => {
  return (
    <center style={{ marginTop: "10rem" }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </center>
  );
};

export default LoadingSpinner;
