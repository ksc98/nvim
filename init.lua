-- bootstrap lazy.nvim, LazyVim and your plugins
require("config.lazy")

require("lualine").setup({
  options = {
    theme = "tokyonight",
  },

  sections = { lualine_c = { require("auto-session.lib").current_session_name } },
})

require("lspconfig").terraformls.setup({})
-- vim.api.nvim_create_autocmd({ "BufWritePre" }, {
--   pattern = { "*.tf", "*.tfvars" },
--   callback = function()
--     vim.lsp.buf.format()
--   end,
-- })

require("lspconfig").ruff_lsp.setup({})
require("lspconfig").lua_ls.setup({})

if vim.g.neovide then
  -- Put anything you want to happen only in Neovide here
  vim.o.guifont = "JetBrains Mono:h17"
  vim.g.neovide_scroll_animation_length = 0.1
  vim.g.neovide_cursor_animation_length = 0.06
  vim.g.neovide_cursor_trail_size = 0.03
  vim.g.neovide_cursor_vfx_mode = "pixiedust"
  vim.g.neovide_remember_window_size = true
  vim.g.neovide_remember_window_position = true
  vim.g.neovide_profiler = false
  vim.g.neovide_cursor_vfx_particle_lifetime = 2

  vim.keymap.set("n", "<D-s>", ":w<CR>") -- Save
  vim.keymap.set("v", "<D-c>", '"+y') -- Copy

  -- vim.keymap.set("n", "<D-C-t>", "<Cmd>ToggleTerm<Cr>") -- Copy

  vim.keymap.set("n", "<D-v>", '"+P') -- Paste normal mode
  vim.keymap.set("v", "<D-v>", '"+P') -- Paste visual mode
  vim.keymap.set("c", "<D-v>", "<C-R>+") -- Paste command mode
  vim.keymap.set("i", "<D-v>", '<ESC>l"+Pli') -- Paste insert mode

  vim.g.neovide_cursor_vfx_particle_lifetime = 0.65
  vim.g.neovide_cursor_vfx_opacity = 200
  vim.g.neovide_cursor_vfx_particle_density = 200
  vim.g.neovide_cursor_vfx_particle_speed = 5

  -- vim.keymap.set("n", "<D-q>", "<leader>qq") -- Command Q -> <leader>qq
  -- vim.keymap.set("i", "<D-q>", "<leader>qq") -- Command Q -> <leader>qq
  -- vim.keymap.set("v", "<D-q>", "<leader>qq") -- Command Q -> <leader>qq
  -- vim.keymap.set("c", "<D-q>", "<leader>qq") -- Command Q -> <leader>qq
  -- vim.g.neovide_show_border = false

  -- vim.defer_fn(function()
  --   vim.cmd("NeovideFocus")
  -- end, 25)
end

-- Allow clipboard copy paste in neovim
vim.api.nvim_set_keymap("", "<D-v>", "+p<CR>", { noremap = true, silent = true })
vim.api.nvim_set_keymap("!", "<D-v>", "<C-R>+", { noremap = true, silent = true })
vim.api.nvim_set_keymap("t", "<D-v>", "<C-R>+", { noremap = true, silent = true })
vim.api.nvim_set_keymap("v", "<D-v>", "<C-R>+", { noremap = true, silent = true })
