Steps to build into gh-pages
yarn build
git add dist -f
git commit -m ""
git subtree push --prefix dist origin gh-pages