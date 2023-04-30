import { resize, format, setMetadata, metadataFormat } from 'vite-imagetools';

export function base64(cfg, ctx) {
  if (cfg.base64) {
    const r = resize({ width: cfg.base64 }, ctx);
    const f = format({ format: 'webp', quality: '50' }, ctx);
    return async function (image) {
      const img = f(r(image));
      const buffer = await img.toBuffer();
      setMetadata(
        img,
        'base64',
        `data:image/webp;base64,${buffer.toString('base64')}`
      );
      return img;
    };
  }
}

export function base64Metadata() {
  return metadataFormat(['format', 'src', 'width', 'height', 'base64']);
}
