<img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" height="60px"></img>

## Build Tensorflow from Source

### On Remote Machine (Where you want to use Tensorflow)
___
Go to user dir
```shell
cd ~
```
Clone tensorflow repository
```shell
git clone https://github.com/tensorflow/tensorflow.git
cd tensorflow
```
Checkout the Version you would like to build with 
```shell
git checkout branch_name  # r1.9, r1.10, etc.
```
### Install bazel
___
Go to user dir
```shell
cd ~
```
Install packages
```shell
sudo apt install g++ unzip zip
sudo apt-get install openjdk-11-jdk
```
Download installer from [Bazel Versions](https://github.com/bazelbuild/bazel/releases) 
You need to check which bazel version is compatible to the tensorflow version you want to build
Look into tensorflow repo: 
In configure.py there is a flag with min and max bazel version.
Install bazel with
```shell
chmod +x bazel-<version>-installer-linux-x86_64.sh
./bazel-<version>-installer-linux-x86_64.sh --user
```
Add Bazel Bin directory to PATH 
```shell
export PATH="$PATH:$HOME/bin"
```
see also: [Link to Install Guide](https://docs.bazel.build/versions/master/install-ubuntu.html#install-with-installer-ubuntu)

### Prepare tensorflow build
___
Install packages
```shell
sudo apt install python3-dev python3-pip
```
Prepare pip packages
```shell
pip install -U --user pip six 'numpy<1.19.0' wheel setuptools mock 'future>=0.17.1'
pip install -U --user keras_applications --no-deps
pip install -U --user keras_preprocessing --no-deps
```
Configure the build
```shell
./configure
```
1) Link to python3 location of system!
2) Set CUDA to yes, all others no
3) Which Compute Capability of Graphic Card can be checked here: [NVIDIA-GPU-List](https://developer.nvidia.com/cuda-gpus)
4) No clang
5) -march=native if you want to build for that specific PC, otherwise check flags for your CPU
### Build the Pip Package
___
This command actually builds the package but does not save it as .whl file
```shell
bazel build --config=opt --config=cuda //tensorflow/tools/pip_package:build_pip_package
```
Save the output as .whl file
```shell
./bazel-bin/tensorflow/tools/pip_package/build_pip_package /tmp/tensorflow_pkg
```
### Install with
___
```shell
pip install /tmp/tensorflow_pkg/tensorflow-version-tags.whl
```