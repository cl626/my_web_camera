const videoElement = document.getElementById('videoElement');

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    videoElement.srcObject = stream;
  })
  .catch(error => {
    console.error('无法获取摄像头视频流:', error);
  });

const captureButton = document.getElementById('captureButton');

captureButton.addEventListener('click', () => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = videoElement.videoWidth;
  canvas.height = videoElement.videoHeight;
  
  // 将视频帧绘制到canvas上
  context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
  
  // 将canvas转换为图像URL
  const imageURL = canvas.toDataURL('image.png');
  photo = document.getElementById('photo');  
  photo.src = imgDataUrl;

  // 创建一个链接元素并下载图像
  const link = document.createElement('a');
  link.href = imageURL;
  link.download = 'photo.png';
  link.click();
});
