rm -rf dist
mkdir dist
cd dist
mkdir static
cd static
mkdir css
mkdir js
mkdir media

cd ..
cd ..

cd controller
npm run build
cd build
mv index.html ../../dist/controller.html
cp asset-manifest.json ../../dist/
cp favicon.ico ../../dist/

cp -r static/css/* ../../dist/static/css
cp -r static/js/* ../../dist/static/js
cp -r static/media/* ../../dist/static/media

cd ..
cd ..

cd screen
npm run build
cd build
mv index.html ../../dist/screen.html
cp -r static/css/* ../../dist/static/css
cp -r static/js/* ../../dist/static/js
cp -r static/media/* ../../dist/static/media
