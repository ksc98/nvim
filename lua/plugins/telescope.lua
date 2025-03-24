return {
  "nvim-telescope/telescope.nvim",
  enabled = false,
  dependencies = {
    "nvim-telescope/telescope-file-browser.nvim",
  },
  keys = {
    {
      "fr",
      function()
        local builtin = require("telescope.builtin")
        builtin.live_grep()
      end,
    },
    {
      "f?",
      function()
        local builtin = require("telescope.builtin")
        builtin.keymaps()
      end,
    },
    {
      ";;",
      function()
        local builtin = require("telescope.builtin")
        builtin.resume()
      end,
    },
    {
      "fd",
      function()
        local builtin = require("telescope.builtin")
        builtin.diagnostics()
      end,
    },
    {
      "ft",
      function()
        local builtin = require("telescope.builtin")
        builtin.treesitter()
      end,
    },
    {
      "ff",
      function()
        local telescope = require("telescope")
        -- local function telescope_buffer_dir()
        --   return vim.fn.expand("%")
        -- end
        telescope.extensions.file_browser.file_browser({
          respect_gitignore = false,
          hidden = false,
          grouped = false,
          previewer = true,
          initial_mode = "normal",
        })
      end,
    },
    {
      "ff.",
      function()
        local telescope = require("telescope")
        telescope.extensions.file_browser.file_browser({
          respect_gitignore = false,
          hidden = true,
          grouped = true,
          previewer = false,
          initial_mode = "normal",
        })
      end,
    },
    {
      "f.",
      function()
        local telescope = require("telescope")
        local function telescope_buffer_dir()
          return vim.fn.expand("%:p:h")
        end
        telescope.extensions.file_browser.file_browser({
          pwd = "%:p:h",
          cwd = telescope_buffer_dir(),
          respect_gitignore = false,
          hidden = false,
          grouped = true,
          previewer = false,
          initial_mode = "normal",
        })
      end,
    },
    {
      "f..",
      function()
        local telescope = require("telescope")
        local function telescope_buffer_dir()
          return vim.fn.expand("%:p:h")
        end
        telescope.extensions.file_browser.file_browser({
          pwd = "%:p:h",
          cwd = telescope_buffer_dir(),
          respect_gitignore = false,
          hidden = true,
          grouped = true,
          previewer = false,
          initial_mode = "normal",
        })
      end,
    },
  },
}
