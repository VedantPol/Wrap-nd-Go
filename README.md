<h1 align="center"> Wrap&Go </h1>

---

Project Initial Design -> [View Intial Design](https://whimsical.com/food-8PBqBtCftsetbN27UNpFJC).

<h1 align="center">Kickstart your Open-Source Journey</h1>

### This repository is all about Your First Contribution.

---

## Rules To Contribute To This Repo

- Check your code twice before PR, only correct codes are going to be considered.
- Follow file naming convention for all your pull requests.
- While adding any content it should be inside its appropiate folder.
- Do not make a PR without getting issues assigned to you!.
- Link your PR with the Issue no.
- If you dont know how to contribute read ( Steps For Contribution ).

## File Naming Convention

- The file name must be correct.

## Steps For Contribution

    1. Fork this repo
    2. Star this repo
    3. Get an issue assigned.
    3. Work on the issue, add a file .
    4. Commit the code
    5. Make pull request

#### 1.Fork the Project

Fork the project on Github by clicking on the word "Fork" above and to the right of this page. This will create your own fork at https://github.com/yournamehere/Wrap-nd-Go.git. Then clone your fork to your local repository on your machine and set up a [triangle workflow](https://github.com/forwards/first-contributions/blob/master/additional-material/git_workflow_scenarios/keeping-your-fork-synced-with-this-repository.md) using these commands:

```
git clone https://github.com/yournamehere/Wrap-nd-Go.git
cd oshi
git remote add upstream https://github.com/Wrap-and-Go/Wrap-nd-Go.git.git
```

#### Create a Branch for your feature

Make sure your fork is up-to-date and create a topic branch for your feature or bug fix. (The name `my-feature-branch` is an example. Choose whatever you like.)

```
git checkout master
git pull upstream master
git checkout -b my-feature-branch
```

### How to launch the file

cd into the Wrap-Nd-Go local folder then type the following command
(Note:you need to have npm installed)
[how to install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

,,,
npm install
npm start
,,,

#### Write Code

Implement your feature or bug fix.

Make sure that `npm start` completes without errors.

#### Commit Changes

Make sure git knows your name and email address:

```
git config --global user.name "Your Name"
git config --global user.email "contributor@example.com"
```

Add the changed files to the index using [git add](https://git-scm.com/docs/git-add). Most IDEs make this easy for you to do, so you won't need this command line version.
Writing [good commit logs](https://chris.beams.io/posts/git-commit/) is important. A commit log should describe what changed and why.

```
git add ...
git commit -m "Fixed Foo bug by changing bar"
```

#### Push to your GitHub repository

```
git push origin my-feature-branch
```

#### Make a Pull Request

Go to https://github.com/yournamehere/Wrap-nd-G0 and select your feature branch. Click the 'Pull Request' button and fill out the form. Pull requests are usually reviewed within a few days.

If code review requests changes (and it usually will) just `git push` the changes to your repository on the same branch, and the pull request will be automatically updated.

#### Rebase

If you've been working on a change for a while and other commits have been made to the project, rebase with upstream/master.

```
git fetch upstream
git rebase upstream/master
git push origin my-feature-branch -f
```

#### Check on Your Pull Request

Go back to your pull request after a few minutes and see whether it passed.
Everything should look green.Fix issues and amend your commit if there are any.

#### Be Patient

It's likely that your change will not be merged and that the nitpicky maintainers will ask you to do more, or fix seemingly benign problems like [choices of variable names](https://quotesondesign.com/phil-karlton/). Hang in there!

#### Thank You

Please do know that we really appreciate and value your time and work. We love you, really.

## - Happy Coding 😁

# End
