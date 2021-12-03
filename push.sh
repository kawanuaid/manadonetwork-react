#!/bin/bash

echo -e "→  Updating repository..."
git add .
echo -e "↳  Apa yg diubah?"
read -r GIT_COMMENT
git commit -am "${GIT_COMMENT}"
echo -e "→  Updating branch main..."
git push origin main
echo -e "♥  Selesai."