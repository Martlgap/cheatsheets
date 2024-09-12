<img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/PyCharm_Icon.svg" height="50px"></img>
## Python Environments

---

### Pyenv

Create a new virtualenv

```bash
pyenv virtualenv <pythonversion> <nameofenviroment>
```

Activate the virtualenv inside repo

```bash
pyenv local <nameofenvironment>
```

Deinstall a virtualenv

```bash
pyenv uninstall <nameofenvironment>
```

Install new python version

```bash
pyenv install <pythonversion>
```

---

### How to install dependencies from requirements.txt line by line

```bash
cat requirements.txt | xargs -n 1 pip install
```
