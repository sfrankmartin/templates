# Templates

This is a folder of project templates I find convenient to have around for starting new projects.

There is zero expectation that these templates will be useful to anyone else, but anyone is welcome to use them. Needless to say, these templates are highly opinionated to my preferred stack and workflow.

## Structure
All templates are stored in their own folder. The first (and for a while, only) template is `/next_15_rails_8`. Future templates will be stored in sibling folders.

Each template has its own README.md file with instructions on how to use it.

This is a repo for the collection folder. To avoid nesting git repos, copy the template folder to a new location and then initialise a new git repo in that location:
```bash
cd ~/dev/templates # assuming this repo is cloned into ~/dev
git pull # make sure we are on the latest version
cp ~/dev/templates/next_15_rails_8 ~/dev/my_new_app
cd ~/dev/my_new_app
git init
```
Then update any instances of:
* `projectname` to the name of your new project
* `ProjectName` to the name of your new project, capitalised
* `PROJECTNAME` to the name of your new project, in all caps

## Scaffolding

To speed up the process of copying and renaming a template, there is a `scaffold` script in the root of this repo. It will copy the template folder to a new location and rename it according to your input.

You can run it like this:
```bash
cd ~/dev/templates # assuming this repo is cloned into ~/dev
git pull # make sure we are on the latest version
./scaffold templatename newprojectname
```
This will copy the `templatename` folder to a new folder at `~/dev/newprojectname`, and it will also update all instances of `projectname`, `ProjectName`, and `PROJECTNAME` in the files to match the new project name. Once done `cd` into the new project folder and run `git init` to initialise a new git repo.