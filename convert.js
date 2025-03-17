const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFolder = './public/image'; // 원본 PNG 이미지 폴더
const outputFolder = './public/image'; // WebP 변환 후 저장할 폴더 (같은 위치)

// 폴더 내 파일 목록 가져오기
fs.readdirSync(inputFolder).forEach(file => {
  const ext = path.extname(file).toLowerCase();

  // PNG 또는 JPG 파일 변환
  if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
    const inputPath = path.join(inputFolder, file);
    const outputPath = path.join(outputFolder, `${path.basename(file, ".png")}.webp`);

    sharp(inputPath)
      .toFormat("webp") // WebP 변환
      .toFile(outputPath) // 변환된 파일 저장
      .then(() => console.log(`${file} > WebP 변환 완료`))
      .catch(err => console.error(`변환 오류ㅣ ${err}`));
}
});