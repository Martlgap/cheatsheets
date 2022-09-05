<img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" width=40px></img>
## Git
___
### How to show URL of origin:
```bash
git config --get remote.origin.url
```
or if you require full output, and you are on a network that can reach the remote repo where the origin resides:
```bash
git remote show origin
```
