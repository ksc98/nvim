return {
  {
    "nvim-tree/nvim-tree.lua",
    dependencies = "nvim-tree/nvim-web-devicons",
    config = function()
      -- disable netrw at the very start of your init.lua
      vim.g.loaded_netrw = 1
      vim.g.loaded_netrwPlugin = 1

      -- optionally enable 24-bit colour
      vim.opt.termguicolors = true

      -- OR setup with some options
      require("nvim-tree").setup({
        sort = {
          sorter = "case_sensitive",
        },
        actions = {
          -- open_file = {
          --   quit_on_open = true,
          -- },
        },
        view = {
          width = 35,
          adaptive_size = true,
        },
        renderer = {
          group_empty = true,
        },
        filters = {
          dotfiles = true,
        },
      })
    end,
  },
  {
    "nvim-neo-tree/neo-tree.nvim",
    enabled = false,
  },
}
-- return {
--   "nvim-neo-tree/neo-tree.nvim",
--   -- branch = "v3.x",
--   dependencies = {
--     "nvim-lua/plenary.nvim",
--     "nvim-tree/nvim-web-devicons", -- not strictly required, but recommended
--     "MunifTanjim/nui.nvim",
--     -- "3rd/image.nvim", -- Optional image support in preview window: See `# Preview Mode` for more information
--   },
--   config = function()
--     require("neo-tree").setup({
--       close_if_last_window = true,
--       popup_border_style = "rounded",
--       window = {
--         mappings = {
--           ["<space>"] = {
--             "toggle_node",
--             nowait = false, -- disable `nowait` if you have existing combos starting with this char that you want to use
--           },
--           ["<2-LeftMouse>"] = "open",
--           ["<cr>"] = "open",
--           ["<esc>"] = "cancel", -- close preview or floating neo-tree window
--           ["P"] = { "toggle_preview", config = { use_float = true, use_image_nvim = true } },
--           -- Read `# Preview Mode` for more information
--           ["l"] = "focus_preview",
--           ["S"] = "open_split",
--           ["s"] = "open_vsplit",
--           -- ["S"] = "split_with_window_picker",
--           -- ["s"] = "vsplit_with_window_picker",
--           ["t"] = "open_tabnew",
--           -- ["<cr>"] = "open_drop",
--           -- ["t"] = "open_tab_drop",
--           ["w"] = "open_with_window_picker",
--           --["P"] = "toggle_preview", -- enter preview mode, which shows the current node without focusing
--           ["c"] = "close_node",
--           ["C"] = "close_all_subnodes",
--           ["z"] = "close_all_nodes",
--           --["Z"] = "expand_all_nodes",
--           ["a"] = {
--             "add",
--             -- this command supports BASH style brace expansion ("x{a,b,c}" -> xa,xb,xc). see `:h neo-tree-file-actions` for details
--             -- some commands may take optional config options, see `:h neo-tree-mappings` for details
--             config = {
--               show_path = "none", -- "none", "relative", "absolute"
--             },
--           },
--           ["A"] = "add_directory", -- also accepts the optional config.show_path option like "add". this also supports BASH style brace expansion.
--           ["d"] = "delete",
--           ["r"] = "rename",
--           ["y"] = "copy_to_clipboard",
--           ["x"] = "cut_to_clipboard",
--           ["p"] = "paste_from_clipboard",
--           -- ["c"] = "copy", -- takes text input for destination, also accepts the optional config.show_path option like "add":
--           -- ["c"] = {
--           --  "copy",
--           --  config = {
--           --    show_path = "none" -- "none", "relative", "absolute"
--           --  }
--           --}
--           ["m"] = "move", -- takes text input for destination, also accepts the optional config.show_path option like "add".
--           ["q"] = "close_window",
--           ["R"] = "refresh",
--           ["?"] = "show_help",
--           ["<"] = "prev_source",
--           [">"] = "next_source",
--           ["i"] = "show_file_details",
--         },
--       },
--     })
--     vim.g.loaded_netrw = 1
--     vim.g.loaded_netrwPlugin = 1
--
--     local keymap = vim.keymap
--     keymap.set("n", "<leader>ef", "<cmd>NvimTreeFindFileToggle<CR>")
--   end,
-- }
