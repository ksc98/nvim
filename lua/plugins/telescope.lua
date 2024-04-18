return {
  {
    "telescope.nvim",
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
    config = function(_, opts)
      local telescope = require("telescope")
      local actions = require("telescope.actions")
      local fb_actions = require("telescope").extensions.file_browser.actions

      local mappings = {
        i = {
          ["<C-j>"] = "move_selection_next",
          ["<C-k>"] = "move_selection_previous",
          ["<tab>"] = "move_selection_next",
          ["<S-tab>"] = "move_selection_previous",
        },
        n = {
          ["<C-j>"] = "move_selection_next",
          ["<C-k>"] = "move_selection_previous",
          ["<tab>"] = "move_selection_next",
          ["<S-tab>"] = "move_selection_previous",
        },
      }
      opts.defaults = vim.tbl_deep_extend("force", opts.defaults, {
        -- wrap_results = false,
        -- layout_strategy = "horizontal",
        -- layout_config = { prompt_position = "top" },
        -- sorting_strategy = "ascending",
        -- depth = 5,
        winblend = 8,
        path_display = { "smart" },
        mappings = mappings,
        layout_config = {
          horizontal = { height = 0.6 },
        },
      })
      opts.pickers = {
        diagnostics = {
          -- theme = "ivy",
          -- initial_mode = "normal",
          -- layout_config = {
          --   preivew_cufogg = 9999,
          -- },
        },
      }
      opts.extensions = {
        file_browser = {
          theme = "dropdown",
          hijack_netrw = true,
          mappings = mappings,
          -- ["n"] = {
          --   mappings = {
          --     ["N"] = fb_actions.create,
          --     ["h"] = fb_actions.goto_parent_dir,
          --     -- ["l"] = fb_actions.open_dir,
          --     ["/"] = function()
          --       vim.cmd("startinsert")
          --     end,
          --     ["<C-u>"] = function(prompt_bufnr)
          --       for _ = 1, 10 do
          --         actions.move_selection_previous(prompt_bufnr)
          --       end
          --     end,
          --     ["<C-d>"] = function(prompt_bufnr)
          --       for _ = 1, 10 do
          --         actions.move_selection_next(prompt_bufnr)
          --       end
          --     end,
          --   },
          -- },
        },
        fzf = {
          fuzzy = true, -- false will only do exact matching
          override_generic_sorter = true, -- override the generic sorter
          override_file_sorter = true, -- override the file sorter
          case_mode = "smart_case", -- or "ignore_case" or "respect_case"
        },
      }
      require("telescope").load_extension("fzf")
      require("telescope").load_extension("file_browser")
      require("telescope").setup(opts)
    end,
  },
}
