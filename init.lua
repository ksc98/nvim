-- bootstrap lazy.nvim, LazyVim and your plugins
require("config.lazy")

require("lspconfig").terraformls.setup({})
vim.api.nvim_create_autocmd({ "BufWritePre" }, {
  pattern = { "*.tf", "*.tfvars" },
  callback = function()
    vim.lsp.buf.format()
  end,
})

if vim.g.neovide then
  -- Put anything you want to happen only in Neovide here
  vim.o.guifont = "JetBrains Mono:h11"
  vim.g.neovide_scroll_animation_length = 0.1
  vim.g.neovide_cursor_trail_size = 0.1
  vim.g.neovide_cursor_animation_length = 0.1
  vim.g.neovide_cursor_vfx_mode = "pixiedust"
end
