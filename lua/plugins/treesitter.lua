return {
  { "nvim-treesitter/playground", cmd = "TSPlaygroundToggle" },
  {
    "nvim-treesitter/nvim-treesitter",
    opts = {
      highlight = {
        enable = true,
      },
      indent = {
        enable = true,
      },
      autotag = {
        enable = true,
      },
      incremental_selection = {
        enable = true,
        keymaps = {
          init_selection = "<C-space>",
          node_incremental = "<C-space>",
          scope_incremental = false,
          node_decremental = "<bs>",
        },
      },
      ensure_installed = {
        "json",
        "kdl",
        "astro",
        "cmake",
        "cpp",
        "kdl",
        "toml",
        "yaml",
        "css",
        "markdown",
        "markdown_inline",
        "fish",
        "gitignore",
        "go",
        "graphql",
        "http",
        "java",
        "php",
        "ruby",
        "rust",
        "scss",
        "sql",
        "svelte",
        "lua",
        "dockerfile",
      },

      -- matchup = {
      -- 	enable = true,
      -- },

      -- https://github.com/nvim-treesitter/playground#query-linter
      query_linter = {
        enable = true,
        use_virtual_text = true,
        lint_events = { "BufWrite", "CursorHold" },
      },

      -- playground = {
      --   enable = true,
      --   disable = {},
      --   updatetime = 25, -- Debounced time for highlighting nodes in the playground from source code
      --   persist_queries = true, -- Whether the query persists across vim sessions
      --   keybindings = {
      --     toggle_query_editor = "o",
      --     toggle_hl_groups = "i",
      --     toggle_injected_languages = "t",
      --     toggle_anonymous_nodes = "a",
      --     toggle_language_display = "I",
      --     focus_language = "f",
      --     unfocus_language = "F",
      --     update = "R",
      --     goto_node = "<cr>",
      --     show_help = "?",
      --   },
      -- },
    },
    config = function(_, opts)
      require("nvim-treesitter.configs").setup(opts)

      -- MDX
      vim.filetype.add({
        extension = {
          mdx = "mdx",
        },
      })
      vim.treesitter.language.register("markdown", "mdx")
    end,
  },
}
