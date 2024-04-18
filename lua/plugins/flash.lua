return {
  "folke/flash.nvim",
  event = "VeryLazy",
  vscode = true,
  ---@type Flash.Config
  opts = {
    highlight = {
      backdrop = true,
      matches = true,
      priority = 5000,
      -- groups = {
      --   label = "@constructor", -- :hi for f/F
      --   match = "@constructor", -- :hi for t/T
      -- },
      groups = {
        match = "FlashMatch",
        current = "FlashCurrent",
        backdrop = "FlashBackdrop",
        label = "FlashLabel",
      },
    },
    label = {
      rainbow = {
        enabled = true,
        -- number between 1 and 9
        shade = 9,
      },
    },
    prompt = {
      enabled = true,
    },
  },
  -- stylua: ignore
  keys = {
    {
      "s",
      mode = { "n", "x", "o" },
      function()
        require("flash").jump()
      end,
      desc = "Flash",
    },
    {
      "S",
      mode = { "n", "o", "x" },
      function()
        require("flash").treesitter()
      end,
      desc = "Flash Treesitter",
    },
    {
      "r",
      mode = "o",
      function()
        require("flash").remote()
      end,
      desc = "Remote Flash",
    },
    {
      "R",
      mode = { "o", "x" },
      function()
        require("flash").treesitter_search()
      end,
      desc = "Treesitter Search",
    },
  },
}
