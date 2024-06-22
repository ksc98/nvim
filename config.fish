set -g fish_greeting

set -x VISUAL nvim
set -x OTF_LOCAL_BUILD 1
set -x EDITOR nvim
# set -x TERM_PROGRAM alacritty t-rec
set -x TERM xterm-256color

set -x NEOVIDE_FRAME buttonless
set -x NEOVIM_BIN /opt/homebrew/bin/nvim

# set -Ux EZA_STANDARD_OPTIONS --group --header --group-directories-first --long --icons --binary --time-style relative
set -Ux EZA_STANDARD_OPTIONS --group-directories-first --long --icons --binary --time-style relative


if status is-interactive
    set -x ZELLIJ_AUTO_ATTACH true

    alias ls 'eza --icons'

    # aliases
    source ~/.config/fish/aliases.fish
    # zellij
    source ~/.config/fish/zellij.fish
    # secrets
    source ~/.config/fish/.secrets/secrets

    # PATH
    fish_add_path ~/go/bin
    fish_add_path ~/okta/ops/tools
    fish_add_path ~/.cargo/bin
    fish_add_path ~/.local/bin
    fish_add_path /opt/homebrew/bin

    # important aliases
    abbr --add v nvim
    abbr --add find fd
    abbr --add diff delta
    # abbr --add ls eza --git --icons
    abbr --add tree eza --tree --git --icons

    abbr --add u source ~/.config/fish/config.fish
    abbr --add j z
    abbr --add fshrc nvim ~/.config/fish/config.fish
    abbr --add ala nvim ~/.config/alacritty/alacritty.toml
    abbr --add aliases nvim ~/.config/fish/aliases.fish

    # kubernetes aliases
    abbr --add k kubectl
    abbr --add kns kubens
    abbr --add kx kubectx
    abbr --add ks kubectl get ns,svc,deploy,po

    # github
    abbr --add pr gh pr view --web

    # starhip
    starship init fish | source

    # zoxide 
    zoxide init fish | source

    # atuin
    set -gx ATUIN_NOBIND true
    atuin init fish | source
    bind \cr _atuin_search

    # yazi
    bind \cy yazi
    bind \cz 'fg 2>/dev/null; commandline -f repaint'

    eval (zellij setup --generate-auto-start fish | string collect)
    eval (zellij setup --generate-completion fish | string collect)

    # set -x PATH $HOME/.rbenv/bin $PATH
    # rbenv init - | source
end

eval "$(/opt/homebrew/bin/brew shellenv)"
