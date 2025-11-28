import loaderGif from "../assets/loaders/loader.gif";

export default function LoaderGIF() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
      }}
    >
      <img
        src={loaderGif}
        alt="loading..."
        style={{ width: "120px", height: "120px" }}
      />
    </div>
  );
}
