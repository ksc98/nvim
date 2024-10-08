return {
  {
    "hrsh7th/nvim-cmp",
    dependencies = {
      "hrsh7th/cmp-emoji",
      "hrsh7th/cmp-buffer",
      "hrsh7th/cmp-path",
      "L3MON4D3/LuaSnip",
      "saadparwaiz1/cmp_luasnip",
      "garymjr/nvim-snippets",
      "rafamadriz/friendly-snippets",
      "onsails/lspkind.nvim",
    },
    opts = function(_, opts)
      table.insert(opts.sources, { name = "emoji" })
    end,
    config = function()
      local cmp = require("cmp")
      local luasnip = require("luasnip")
      local lspkin = require("lspkind")
      cmp.setup({
        completion = {
          completeopt = "menu,menuone,preview,noselect",
        },
        snippet = {
          expand = function(args)
            luasnip.lsp_expand(args.body)
          end,
        },
        mapping = cmp.mapping.preset.insert({
          ["<C-j>"] = cmp.mapping.select_next_item(),
          ["<C-k>"] = cmp.mapping.select_prev_item(),
          ["<Tab>"] = cmp.mapping.select_next_item(),
          ["<S-Tab>"] = cmp.mapping.select_prev_item(),
          ["<cr>"] = cmp.mapping.confirm(),
        }),
        sources = cmp.config.sources({
          { name = "luasnip" },
          { name = "buffer" },
          { name = "path" },
        }),
      })
    end,
    -- ---@param opts cmp.ConfigSchema
    -- opts = function(_, opts)
    --   local has_words_before = function()
    --     unpack = unpack or table.unpack
    --     local line, col = unpack(vim.api.nvim_win_get_cursor(0))
    --     return col ~= 0 and vim.api.nvim_buf_get_lines(0, line - 1, line, true)[1]:sub(col, col):match("%s") == nil
    --   end
    --
    --   local luasnip = require("luasnip")
    --   local cmp = require("cmp")
    --
    --   opts.mapping = vim.tbl_extend("force", opts.mapping, {
    --     ["<Tab>"] = cmp.mapping(function(fallback)
    --       if cmp.visible() then
    --         cmp.select_next_item()
    --         -- You could replace the expand_or_jumpable() calls with expand_or_locally_jumpable()
    --         -- this way you will only jump inside the snippet region
    --       elseif luasnip.expand_or_jumpable() then
    --         luasnip.expand_or_jump()
    --       elseif has_words_before() then
    --         cmp.complete()
    --       else
    --         fallback()
    --       end
    --     end, { "i", "s" }),
    --     ["<S-Tab>"] = cmp.mapping(function(fallback)
    --       if cmp.visible() then
    --         cmp.select_prev_item()
    --       elseif luasnip.jumpable(-1) then
    --         luasnip.jump(-1)
    --       else
    --         fallback()
    --       end
    --     end, { "i", "s" }),
    --   })
    -- end,
  },
}
