return {
  "nvim-zh/colorful-winsep.nvim",
  event = { "WinLeave" },
  config = function()
    require("colorful-winsep").setup({
      smooth = true,
      exponential_smoothing = true,
    })
  end,
}
-- return {
--   "nvim-zh/colorful-winsep.nvim",
--   config = true,
--   event = { "WinNew" },
--   -- highlight for Window separator
--   highlight = {
--     -- bg = "#16161E",
--     fg = "#BF40BF",
--   },
--   -- timer refresh rate
--   interval = 30,
--   -- This plugin will not be activated for filetype in the following table.
--   no_exec_files = { "packer", "TelescopePrompt", "mason", "CompetiTest", "NvimTree" },
--   -- Symbols for separator lines, the order: horizontal, vertical, top left, top right, bottom left, bottom right.
--   symbols = { "━", "┃", "┏", "┓", "┗", "┛" },
--   close_event = function()
--     -- Executed after closing the window separator
--   end,
--   create_event = function()
--     -- Executed after creating the window separator
--   end,
-- }
