return {
  "karb94/neoscroll.nvim",
  config = function()
    local neoscroll = require("neoscroll")
    neoscroll.setup({
      mappings = { "<C-u>", "<C-d>", "<C-b>", "<C-y>", "<C-e>", "zt", "zz", "zb" },
      -- performance_mode = true,
      easing = "linear",
    })
    local keymap = {
      ["<C-u>"] = function()
        neoscroll.ctrl_u({ duration = 200 })
      end,
      ["<C-d>"] = function()
        neoscroll.ctrl_d({ duration = 200 })
      end,
      -- When no value is passed the `easing` option supplied in `setup()` is used
      ["<C-y>"] = function()
        neoscroll.scroll(-0.1, { move_cursor = false, duration = 100 })
      end,
      ["<C-e>"] = function()
        neoscroll.scroll(0.1, { move_cursor = false, duration = 100 })
      end,
    }
    local modes = { "n", "v", "x" }
    for key, func in pairs(keymap) do
      vim.keymap.set(modes, key, func)
    end
  end,
}
