return {
  "neovim/nvim-lspconfig",
  ---@class PluginLspOpts
  opts = {
    inlay_hints = { enabled = false },
    ---@type lspconfig.options
    servers = {
      -- pyright will be automatically installed with mason and loaded with lspconfig
      pyright = {
        settings = {
          pyright = {
            disableOrganizeImports = true, -- Using Ruff
          },
          python = {
            analysis = {
              ignore = { "*" }, -- Using Ruff
              typeCheckingMode = "off", -- Using mypy
            },
          },
        },
      },
      rust_analyzer = {},
      ruff = {},
      lua_ls = {},
    },
  },
}
