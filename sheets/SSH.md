<img src="https://cdn-icons-png.flaticon.com/512/5262/5262032.png" width=50></img>
## SSH

---

## Setup with Tmux and iTerm to access multiple ssh session very convenient

### On Remote

1) Install tmux and oh-my-zsh:

```bash
sudo apt-get install tmux
```

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

2) Check if user has rights to change shell in /etc/passwd -> If there is not the user, add the following line:

```text
<username>:x:1634231:100:<fullname>:<pathtohomefolder>:</usr/bin/zsh>
```

3) Then run

```bash
nano ~/.tmux.conf
```

to configure the settings for the remote terminal appearance.

4) Add the following into the file (maybe the path to zsh needs to be adjusted):
```text
set -g default-terminal "screen-256color"
set -g default-command /usr/bin/zsh
```

5) Then source the tmux config

```bash
tmux source ~/.tmux.conf
```

6) And for nice and convenient naming of the Prompts add the following to the .zshrc file in ~/

```text
PROMPT="%F{red}NAMEOFREMOTE%f$PROMPT"
```

7) Source the .zshrc file:

```bash
source ~/.zshrc
```

### On Local

1) Install iTerm2 and Tmux

```bash
brew install tmux
```

2) Download and install [iTerm2](https://iterm2.com)

3) In the toolbelt of iterm2 add a new profile and edit. 

4) Then:
Profiles -> your new Profile -> General -> Command -> Switch from "Login Shell" to "Command" and insert:

```bash
sh -c "PATH=/usr/local/bin:$PATH; ssh -t <you@remote-ip> \"tmux -CC new -A -s <name-of-session>\""
```

5) Go to settings in iterm2 and tick the "Automatically bury tmux client session". 

Don´t forget to make a proper ssh config and use ssh keys to sign in.

