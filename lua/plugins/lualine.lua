return {
  "nvim-lualine/lualine.nvim",
  event = "VeryLazy",
  init = function()
    vim.g.lualine_laststatus = vim.o.laststatus
    if vim.fn.argc(-1) > 0 then
      -- set an empty statusline till lualine loads
      vim.o.statusline = " "
    else
      -- hide the statusline on the starter page
      vim.o.laststatus = 0
    end
  end,

  opts = function(_, opts)
    table.insert(opts.sections.lualine_x, {
      function()
        local status = require("ollama").status()
        if status == "IDLE" then
          return "󱙺 " -- nf-md-robot-outline
        elseif status == "WORKING" then
          return "󰚩 " -- nf-md-robot
        end
      end,
      cond = function()
        return require("ollama").status() ~= nil
      end,
    })
  end,
}
