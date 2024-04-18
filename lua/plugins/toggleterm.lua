return {
  "akinsho/toggleterm.nvim",
  enabled = true,
  config = function()
    require("toggleterm").setup({
      on_open = function(term)
        vim.cmd("startinsert!")
        vim.api.nvim_buf_set_keymap(term.bufnr, "t", "<D-k>", "<C-l>", { noremap = true, silent = true })
        vim.api.nvim_buf_set_keymap(term.bufnr, "n", "q", "<cmd>close<CR>", { noremap = true, silent = true })
        vim.api.nvim_buf_set_keymap(term.bufnr, "t", "<esc><esc>", "", { noremap = true, silent = true })
        vim.api.nvim_buf_set_keymap(term.bufnr, "t", "<C-c>", "<cmd>close<cr>", { noremap = true, silent = true })
      end,
      direction = "float",
      open_mapping = [[<C-\>]],
      shade_terminals = false,
      shell = "fish --login",
      autochdir = true,
      float_opts = {
        border = "curved",
        winblend = 22,
      },
      start_in_insert = true,
      winbar = {
        enabled = false,
      },
    })
  end,
  keys = {
    { [[<C-\>]] },
    { "<leader>0", "<Cmd>2ToggleTerm<Cr>", desc = "Terminal #2" },
    {
      "<leader>td",
      "<cmd>ToggleTerm size=60 dir=~/Desktop direction=vertical<cr>",
      desc = "Open a horizontal terminal at the Desktop directory",
    },
  },
}
