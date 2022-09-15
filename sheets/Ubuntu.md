<img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/UbuntuCoF.svg" width=50px></img>
## Setup Ubuntu

---

Install nvtop (GPU Monitoring Tool)
```bash
sudo apt install nvtop
```
Install htop (CPU Monitoring Tool)
```bash
sudo apt install htop
```

To show own ip etc.
```bash
sudo apt install net-tools
```
To show IP:
```bash
ifconfig
```

Install TMUX for easy ssh access and use Screens
```bash
sudo apt install tmux
```

To show who is logged in
```bash
sudo apt install finger
```

Install Inotify Tools for Rsync
```bash
sudo apt install inotify-tools
```

Nice tool to copy and unzip with progress bar
```bash
sudo apt install pv
```

Install remote server for graphical remote connections (Microsoft Remote Desktop)
```bash
sudo apt install xrdp
```

Add this to tmux config, makes the terminal in tmux have a nice style and usability
```bash
echo "set -g default-terminal \"screen-256color\"" >> /usr/home/kno/.tmux.conf
```

Add this to bashrc
```bash
echo "export PATH=\"${PATH}:/usr/local/cuda/bin\"" >> /usr/home/kno/.bashrc # Set Cuda Path
echo "export PATH=\"$HOME/bin:$HOME/.local/bin:$PATH\"" >> /usr/home/kno/.bashrc
echo "LD_LIBRARY_PATH=\"${LD_LIBRARY_PATH}:/usr/local/cuda-11.2/lib64\"" >> /usr/home/kno/.bashrc # Set Cuda Version
echo "export DISPLAY=localhost:10.0" >> ~/.bashrc # To be able to show window on other machine
```


