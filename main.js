document.getElementById('uploadForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const input = document.getElementById('videoInput');
  const file = input.files[0];

  if (file) {
    const videoURL = URL.createObjectURL(file);

    const videoList = document.getElementById('videoList');
    const videoElement = document.createElement('video');
    videoElement.controls = true;
    videoElement.src = videoURL;
    videoElement.className = 'uploaded-video';

    videoList.appendChild(videoElement);
    input.value = '';
  }
});
