import { Buffer } from 'buffer';

const MAX_IMAGE_WIDTH_BEFORE_REQUIRING_RESIZE = 1024.0;

export const MAX_WIDTH_FOR_RESIZED_IMAGES = 1280;
export const QUALITY_FOR_RESIZED_IMAGES = 0.75;

export const getFileAsBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);

    reader.readAsDataURL(file);
  });
};

export const needsResize = (file) => {
  return (
    file.size / MAX_IMAGE_WIDTH_BEFORE_REQUIRING_RESIZE / MAX_IMAGE_WIDTH_BEFORE_REQUIRING_RESIZE >
    1
  );
};

export const resizeImage = async ({ dataUrl, maxSize, type, quality }) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) {
    throw new Error('Cannot create context');
  }

  const img = document.createElement('img');

  const promise = new Promise((resolve, fail) => {
    img.onerror = fail;

    img.onload = () => {
      const iw = img.width;
      const ih = img.height;

      const scale = Math.min(maxSize / iw, maxSize / ih);
      const iwScaled = iw * scale;
      const ihScaled = ih * scale;

      canvas.width = iwScaled;
      canvas.height = ihScaled;

      context.drawImage(img, 0, 0, iwScaled, ihScaled);

      resolve(canvas.toDataURL(type, quality));
    };

    img.src = dataUrl;
  });

  return promise;
};

export const base64ToBlob = (base64) => {
  return new Blob(
    [new Uint8Array(Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ''), 'base64'))],
    { type: 'image/jpeg' }
  );
};
