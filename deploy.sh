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

npm run buildController
cd build
mv index.html ../dist/controller.html
cp favicon.ico ../dist/

cp -r static/css/* ../dist/static/css
cp -r static/js/* ../../dist/static/js
cp -r static/media/* ../../dist/static/media

cd ..

npm run buildScreen
cd build
mv index.html ../dist/screen.html
cp asset-manifest.json ../dist/

cp -r static/css/* ../dist/static/css
cp -r static/js/* ../dist/static/js
cp -r static/media/* ../dist/static/media

cd ..

rm -rf build
