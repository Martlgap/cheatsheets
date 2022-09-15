<img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" width=60px></img>

## Git

### BASICS

---

show modified files in working directory, staged for your next commit

```bash
git status
```

add a file as it looks now to your next commit (stage)

```bash
git add [file]
```

unstage a file while retaining the changes in working directory

```bash
git reset [file]
```

diff of what is changed but not staged

```bash
git diff
```

diff of what is staged but not yet committed

```bash
git diff --staged
```

commit your staged content as a new commit snapshot

```bash
git commit -m “[descriptive message]”
```

### INFORMATION

---

show URL of origin

```bash
git config --get remote.origin.url
```

or if you require full output, and you are on a network that can reach the remote repo where the origin resides:

```bash
git remote show origin
```

### CREDENTIALS

---

store credentials

```bash
git config --global credential.helper store
```

### BRANCH & MERGE

---

list your branches. a \* will appear next to the currently active branch

```bash
git branch
```

create a new branch at the current commit

```bash
git branch [branch-name]
```

switch to another branch and check it out into your working directory

```bash
git checkout
```

merge the specified branch’s history into the current one

```bash
git merge [branch]
```

show all commits in the current branch’s history

```bash
git log
```

### REWRITING & DELETING

---

delete the file from project and stage the removal for commit

```bash
git rm [file]
```

change an existing file path and stage the move

```bash
git mv [existing-path] [new-path]
```

show all commit logs with indication of any paths that moved

```bash
git log --stat -M
```

apply any commits of current branch ahead of specified one

```bash
git rebase [branch]
```

clear staging area, rewrite working tree from specified commit

```bash
git reset --hard [commit]
```

delete the file from project and stage the removal for commit

```bash
git rm [file]
```

change an existing file path and stage the move

```bash
git mv [existing-path] [new-path]
```

show all commit logs with indication of any paths that moved

```bash
git log --stat -M
```

Save modified and staged changes

```bash
git stash
```

list stack-order of stashed file changes

```bash
git stash list
```

write working from top of stash stack

```bash
git stash pop
```

discard the changes from top of stash stack

```bash
git stash drop
```

### INSPECT & COMPARE

---

show the commit history for the currently active branch

```bash
git log
```

show the commits on branchA that are not on branchB

```bash
git log branchB..branchA
```

show the commits that changed file, even across renames

```bash
git log --follow [file]
```

show the diff of what is in branchA that is not in branchB

```bash
git diff branchB...branchA
```

show any object in Git in human-readable format

```bash
git show [SHA]
```

add a git URL as an alias

```bash
git remote add [alias] [url]
```

### SHARE & UPDATE

---

fetch down all the branches from that Git remote

```bash
git fetch [alias]
```

merge a remote branch into your current branch to bring it up to date

```bash
git merge [alias]/[branch]
```

Transmit local branch commits to the remote repository branch

```bash
git push [alias] [branch]
```

fetch and merge any commits from the tracking remote branch

```bash
git pull
```

### TIPPS&TRICKS

---

Checkout GIT from specific date
```bash
git checkout `git rev-list -n 1 --before="2020-05-27 13:37" master`
```

How to trigger Push on Tags:
```bash
git tag 0.2
git push -f --tags
```