<img src="https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" width=50></img>
## PyTorch

### FaceTransformer Requirements

---

Torch and Torchvision need specific versions for graphic cards
![OS](https://img.shields.io/badge/NVIDIA-RTX3090-GREEN)
```bash
pip3 install torch==1.11.0 torchvision==0.12.0 --extra-index-url https://download.pytorch.org/whl/cu113
```
![OS](https://img.shields.io/badge/NVIDIA-GTX1070-GREEN)
```bash
pip install torch==1.9.0 torchvision==0.10.0
```

Install the following packages
```bash
pip install vit-pytorch==0.19.6
pip install Ipython
```

Go to [https://github.com/zhongyy/Face-Transformer/tree/main/copy-to-vit_pytorch-path](https://github.com/zhongyy/Face-Transformer/tree/main/copy-to-vit_pytorch-path) and
copy the following files to the vit_pytorch package path in your virtual environment (venv/lib/../../vit_pytorch/)
- vits_face.py 
- vit_face.py 
- \_\_init\_\_.py
