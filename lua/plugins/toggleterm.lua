return {
  "akinsho/toggleterm.nvim",
  config = function()
    require("toggleterm").setup({
      direction = "float",
      open_mapping = [[<C-f>]],
      shade_terminals = false,
      shell = "fish --login",
      autochdir = false,
      float_opts = {
        border = "curved",
        winblend = 22,
      },
      start_in_insert = true,
    })
  end,
  keys = {
    { [[<C-f>]] },
    { "<leader>0", "<Cmd>2ToggleTerm<Cr>", desc = "Terminal #2" },
    {
      "<leader>td",
      "<cmd>ToggleTerm size=60 dir=~/Desktop direction=vertical<cr>",
      desc = "Open a horizontal terminal at the Desktop directory",
    },
  },
}
