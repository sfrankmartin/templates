# Templates

This is a folder of project templates I find convenient to have around for starting new projects.

There is zero expectation that these templates will be useful to anyone else, but anyone is welcome to use them. Needless to say, these templates are highly opinionated to my preferred stack and workflow.

## Usage
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

I recognise that this approach leaves a smattering of template variables that need to be manually updated to match whichever new app is being coded. I will likely want a script in `/templates/scaffold.sh` or similar to allow:
```bash
cd ~/dev/templates # assuming this repo is cloned into ~/dev
git pull # make sure we are on the latest version
./scaffold templatename newproject
# and let the scaffold script take care of chores like giving
# the Rails DB an appropriate name, running pnpm install, etc etc.
```
