return {
  "folke/snacks.nvim",
  ---@type snacks.Config
  opts = {
    scroll = { enabled = false },
    animate = {
      enabled = false,
      -- duration = 20, -- ms per step
      easing = "linear",
      fps = 240, -- frames per second. Global setting for all animations
      -- your animate configuration comes here
      -- or leave it empty to use the default settings
      -- refer to the configuration section below
    },
  },
}
