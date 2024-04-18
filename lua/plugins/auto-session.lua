return {
  "rmagatti/auto-session",
  config = function()
    local auto_session = require("auto-session")

    auto_session.setup({
      post_restore_cmds = { "NvimTreeToggle", "NvimTreeRefresh", "wincmd l" },
      auto_restore_enabled = true,
      auto_save_enabled = true,
      auto_session_enable_last_session = true,

      log_level = "error",
      auto_session_suppress_dirs = { "~/", "~/Downloads", "/" },

      session_lens = {
        -- If load_on_setup is set to false, one needs to eventually call `require("auto-session").setup_session_lens()` if they want to use session-lens.
        buftypes_to_ignore = {}, -- list of buffer types what should not be deleted from current session
        load_on_setup = false,
        theme_conf = { border = true },
        previewer = false,
      },
    })
  end,
}