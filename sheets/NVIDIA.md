<img src="https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg" width=60px></img>
## NVIDIA

 ---

Manually Add NVIDIA-DEV Repository

![OS](https://img.shields.io/badge/UBUNTU-18.04-FFA500)   

```bash
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/cuda-ubuntu1804.pin
sudo mv cuda-ubuntu1804.pin /etc/apt/preferences.d/cuda-repository-pin-600
sudo apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/7fa2af80.pub
sudo add-apt-repository "deb https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/ /"
sudo apt-get update
sudo apt search cuda
```

![OS](https://img.shields.io/badge/UBUNTU-20.04-FFA500)   


```bash
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/cuda-ubuntu2004.pin
sudo mv cuda-ubuntu2004.pin /etc/apt/preferences.d/cuda-repository-pin-600
sudo apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/7fa2af80.pub
sudo add-apt-repository "deb https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/ /"
sudo apt-get update
sudo apt search cuda
```

Remove all NVIDIA Drivers and Stuff first
```bash
sudo apt remove --purge *nvidia*
sudo apt remove --purge *libcudnn*
sudo apt remove --purge cuda
```

For Tensorflow >= 2.5
```bash
sudo apt install cuda-11-2
sudo apt install libcudnn8=8.1.1.33-1+cuda11.2
sudo apt-mark hold libcudnn8 # this prevents from updating
```

For Tensorflow < 2.5
```bash
sudo apt install cuda-11-0
sudo apt install libcudnn8=8.0.5.39-1+cuda11.0
sudo apt-mark hold libcudnn8 # this prevents from updating
```
