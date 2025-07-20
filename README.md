# Templates

All templates are stored in their own folder - the first (and for a while, only) is `/next_15_rails_8` with future ones stored in sibling folders.

Because the git repo is for the collection folder, using a template involves something like:
```bash
cd ~/dev/templates # assuming this is already cloned into ~/dev
git pull # to make sure we are on the latest version
cp -r templates/next_15_rails_8 ~/dev/my_new_app
cd ~/dev/my_new_app
git init
```

I recognise that this approach leaves a smattering of template variables that need to be manually updated to match whichever new app is being coded. I will likely want a script in `/templates/scaffold.sh` or similar to make the flow more like:
```bash
cd ~/dev/templates # assuming this is already cloned into ~/dev
git pull # to make sure we are on the latest version
./scaffold templatename newproject
# and let the scaffold script take care of chores like giving
# the Rails DB appropriate names, run pnpm install, etc etc.
```
