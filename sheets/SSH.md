<img src="https://cdn-icons-png.flaticon.com/512/5262/5262032.png" width=50></img>
## SSH

---

## Setup with Tmux and iTerm to access multiple ssh session very convenient

### On Remote

Install tmux and oh-my-zsh:

```bash
sudo apt-get install tmux
```

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Check if user has rights to change shell in /etc/passwd -> If there is not the user, add the following line:

```text
<username>:x:1634231:100:<fullname>:<pathtohomefolder>:</usr/bin/zsh>
```

Then run

```bash
nano ~/.tmux.conf
```

to configure the settings for the remote terminal appearance.

Add the following into the file (maybe the path to zsh needs to be adjusted):
```text
set -g default-terminal "screen-256color"
set -g default-command /usr/bin/zsh

```

Then source the tmux config

```bash
tmux source ~/.tmux.conf
```

And for nice and convenient naming of the Prompts add the following to the .zshrc file in ~/

```text
PROMPT="%F{red}NAMEOFREMOTE%f$PROMPT"
```



### On Local

Install iTerm2 and Tmux

```bash
brew install tmux
```

Download and install [iTerm2](https://iterm2.com)

In the toolbelt of iterm2 add a new profile and edit. 
Then:

Profiles -> your new Profile -> General -> Command -> Switch from "Login Shell" to "Command" and insert:

sh -c "PATH=/usr/local/bin:$PATH; ssh -t <you@remote-ip> \"tmux -CC new -A -s <name-of-session>\""

Go to settings in iterm2 and tick the "Automatically bury tmux client session". 

Don´t forget to make a proper ssh config and use ssh keys to sign in.

