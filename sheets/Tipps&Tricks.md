<img src="https://cdn-icons-png.flaticon.com/512/564/564427.png" height="50px"></img>

## Tipps&Tricks

---

Problem with SSH Keys: "..differs from the key for IP address ... "

Do on remote machine:
```bash
ssh-keygen -R 129.187.227.220
```

SSL Problem when downloading via Python Code on Mac OS
```bash
/Applications/Python\ 3.6/Install\ Certificates.command
```

Error: Core Dumped when importing tensorflow in python
Most likely tensorflow package was build for AVX support and CPU does not support it! 

How to change CUDA Version on Machine:
```bash
sudo rm /usr/local/cuda
sudo ln -s /usr/local/cuda-11.0 /usr/local/cuda
```

Adjust rights to Folder:
```bash
chmod g+w /folder/ -R
```

When facing the following error: 
ImportError: bad magic number in : b'\x03\xf3\r\n'

```bash
find . -name "*.pyc" -exec rm -f {} \;
```

Split .tar files into many files with specific maximum file size

split -b 1024m file.tar.gz

tar -C ../myfolder -xfvz /mytarfile.tar (extract into spec folder)

| Mehrere Dateien als GZIP-Archiv komprimieren  | tar cfvz Archiv.tar.gz datei1 datei2  | Archiv.tar.gz       |
|-----------------------------------------------|---------------------------------------|---------------------|
| GZIP-Archiv entpacken                         | tar xfvz Archiv.tar.gz                | datei1, datei2, ... |


Debug Python Code with inline Terminal
```python
import pdb
pdb.set_trace()
```


Set Path for loading Modules:
```bash
PYTHONPATH=/usr/home/.... python <script.py>
```

Problem with SSH Keys: 
..differs from the key for IP address ... 
on remote machine:
ssh-keygen -R 129.187.227.220

