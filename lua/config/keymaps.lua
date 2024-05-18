-- Keymaps are automatically loaded on the VeryLazy event
-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua
-- Add any additional keymaps here
local keymap = vim.keymap
local opts = { noremap = true, silent = true }

keymap.set("n", "<BS>", "<cmd>Noice dismiss<CR>")

keymap.set("n", ";", ":")

keymap.set("v", "p", "P")

keymap.set("n", "ss", "<cmd>split<CR>", opts)
keymap.set("n", "sv", "<cmd>vsplit<CR>", opts)

keymap.set("n", "<leader><leader>", "<cmd>lua vim.lsp.buf.hover()<CR>", opts)
keymap.set("v", "<leader><leader>", "<cmd>lua vim.lsp.buf.hover()<CR>", opts)

keymap.set("n", "=", "<C-w><")
keymap.set("n", "-", "<C-w>>")

keymap.del("n", "<A-j>")
keymap.del("i", "<A-j>")

keymap.del("n", "<A-k>")
keymap.del("i", "<A-k>")

keymap.set("n", "<leader>t", "<cmd>NvimTreeFindFile<CR>")
keymap.set("n", "<leader>e", "<cmd>NvimTreeToggle<CR>")

keymap.set("n", "<leader>fr", "<cmd>Telescope oldfiles<CR>")
keymap.set("n", "<leader>fs", require("auto-session.session-lens").search_session, {
  noremap = true,
})

keymap.set("n", "<leader>h", function()
  vim.lsp.inlay_hint.enable(not vim.lsp.inlay_hint.is_enabled())
end)
