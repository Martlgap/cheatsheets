# dev-cheatcheets
A collection of my cheatsheets for development

Collecting Stuff as a Draft here: 

### Customize iTerm2 Prompt:

replace in ~/.oh-my-zsh/themes/robbyrussel.zsh-theme
```bash
PROMPT="%{$fg_bold[green]%}%m "
PROMPT+="%(?:%{$fg_bold[green]%}➜ :%{$fg_bold[red]%}➜ )"
PROMPT+=' %{$fg[cyan]%}%c%{$reset_color%} $(git_prompt_info)'
```

make sublime accessable in terminal 
```bash
ln -s /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl /usr/local/bin/subl
```

toggle hidden files in finder:
Command” + “Shift” + “.”

