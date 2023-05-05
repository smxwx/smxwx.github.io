const el = document.getElementById('h5p-container');
const options = {
  h5pJsonPath:  '/h5p-folder',
  frameJs: '/assets/frame.bundle.js',
  frameCss: '/assets/styles/h5p.css',
}
new H5PStandalone.H5P(el, options);