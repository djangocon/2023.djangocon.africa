
<img src="static/images/logo.png" weight=100 height=100/>

🌍 [2023.djangocon.africa](https://2023.djangocon.africa/)\
📍 TBD \
📅 **November** TBD

## Getting Started
The 2023 DjangoCon.africa website is a static site compiled with ```Jekyll```. 

## Code of Conduct
As a contributor, you can help us keep the Django community open and inclusive. Please read and follow our [Code of Conduct](_pages/conduct.md).
## Contributing via Browser
1. Navigate to the [DjangoCon Africa website](https://github.com/djangocon/2023.djangocon.africa) repo on GitHub. In the upper right hand corner of the repo, click the "Fork" button. Alternatively, click on an individual file and click the pencil icon. GitHub will automatically fork the repo for you.

2. Head over to your GitHub account, where you will find the forked repo. This is a copy of the official code. Your changes to this forked code will not affect the official code, unless you submit a pull request and an admin merges your pull request.

3. For changes that do not need to be tested locally, the change can be made and submitted in the browser.

4. Within your forked repo, make sure the "Branch" tab is set to the develop branch.

5. Once you are on the correct branch, navigate to the file you intend to change and click the pencil icon to open it. Make the change and click the "Commit changes" button.

6. Staying within your forked repo, navigate back to the main page of the branch (note: your pull request should be submitted via your forked repo, not the main repo). Click "New pull request." Click the "Commit changes" button. At the "Comparing changes" page, double check that you are happy with your proposed change. If so, click "Create pull request." Add a descriptive title and comment if applicable, then click "Create pull request" at the bottom to submit. An admin will review your proposed change, merge it, or give you feedback. If you are not ready for your pull request to be immediately merged, you can let those reviewing pull requests know by using the acronym WIP (Work in Progress) or a similar message in your pull request title.


## Contributing via Local Development
For changes that require cloning/running the code locally, follow the above instructions to step 5. Instead of navigating to the file through the browser, open up your computer terminal (you will need to have Git installed locally and a code editor of your choice).

Clone your forked repo locally via the terminal, replacing the username in the URL with your own (note: not all operating systems will use a ```$ ```as a terminal prompt).
```
$ git clone https://github.com/<your-username>/2023.djangocon.africa
```
Change directory into the folder
```
$ cd 2023.djangocon.africa
```
Verify that you are on the ```develop``` branch
```
$ git branch 
```
Follow the instructions below to run the website on a local server. GitHub recommends using [Bundler](http://bundler.io/) to install and run Jekyll. [Ruby](https://www.ruby-lang.org/) is a pre-requisite. See the [Jekyll Quick-start Guide](https://jekyllrb.com/docs/quickstart/) for more info.

## How to install Jekyll
```
$ gem install jekyll bundler
```

Once you're good there, run the following commands:
```
bundle install
bundle exec jekyll serve
open http://localhost:4000
```

## Pushing to GitHub and Submitting a Pull Request
After you have made your changes, you will need to push the local files with the changes back to GitHub in order to submit a pull request. Assuming you are still on the develop branch, you will be pushing your changes from the local develop branch to the ```develop``` branch of the forked repo at your GitHub account.

```
$ git add .
$ git commit -m "Your note"
$ git push origin develop 
```

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License
[MIT License](LICENSE)              