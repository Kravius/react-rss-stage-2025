настройка husky
npm install --save-dev husky
npx husky init

write in package.json in scripts "prepare": "cd .. && husky rs-react-app/.husky"

"prepare" — это npm-скрипт, который запускается после npm install.
cd .. — команда переходит на папку уровнем выше (из текущей директории).
husky rs-react-app/.husky — создает папку всех хаски
