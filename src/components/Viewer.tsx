const Viewer = () => {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="Scene"
        frameBorder="0"
        allowFullScreen
        mozAllowFullScreen={true}
        webkitAllowFullScreen={true}
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/67e815b4a2474a2a86bb0114d181061a/embed?ui_theme=dark"
        className="w-full h-screen"
      ></iframe>
    </div>
  );
};

export default Viewer;
