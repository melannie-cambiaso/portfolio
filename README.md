Steps to build into gh-pages
yarn build
git add dist -f
git commit -m "Adding responsive"
git subtree push --prefix dist origin gh-pages