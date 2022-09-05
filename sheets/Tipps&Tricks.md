## SSL Problem when downloading via Python Code on Mac OS

```shell
/Applications/Python\ 3.6/Install\ Certificates.command
```

## List Infos of CPU
```shell
lscpu
```

## Error: Core Dumped when importing tensorflow in python
Most likely tensorflow package was build for AVX support and CPU does not support it! 

## How to change CUDA Version on Machine:
```shell
sudo rm /usr/local/cuda
sudo ln -s /usr/local/cuda-11.0 /usr/local/cuda
```

### Start automatically every second updating GPU-Info Tab
```bash
watch -n 1 nvidia-smi
```

## List Size of Folders:
```shell
du -sh *
```

## Check Disc Usage
```bash
df -h
```

## Check size of specific folder:
```bash
du -hs <folder>
```

## Adjust rights to Folder:
```shell
chmod g+w /folder/ -R
```

## Check how long PC is up:
```bash
uptime
```

Split .tar files into many files with specific maximum file size

split -b 1024m file.tar.gz

tar -C ../myfolder -xfvz /mytarfile.tar (extract into spec folder)

| Mehrere Dateien als GZIP-Archiv komprimieren  | tar cfvz Archiv.tar.gz datei1 datei2  | Archiv.tar.gz       |
|-----------------------------------------------|---------------------------------------|---------------------|
| GZIP-Archiv entpacken                         | tar xfvz Archiv.tar.gz                | datei1, datei2, ... |

## Generate requirements.txt automatically and only project-specific: 
```bash
pip install pipreqs
#then
pipreqs path/to/project
```

## When facing the following error: 

ImportError: bad magic number in : b'\x03\xf3\r\n'

```bash
find . -name "*.pyc" -exec rm -f {} \;
```

## How to trigger Push on Tags:
```bash
git tag 0.2
git push -f --tags
```

## Problem with unmet dependencies when installing cuda or nvidia:
```bash
sudo apt purge *nvidia*
```
## Get number of files in dir and subdirs:
```bash
find . -type f | wc -l
```

## Checkout GIT from specific date
```bash
git checkout `git rev-list -n 1 --before="2020-05-27 13:37" master`
```

## Debug Python Code with inline Terminal
```python
import pdb
pdb.set_trace()
```


## Set Path for loading Modules:
```bash
PYTHONPATH=/usr/home/.... python <script.py>
```

## Problem with SSH Keys: 
..differs from the key for IP address ... 
on remote machine:
ssh-keygen -R 129.187.227.220