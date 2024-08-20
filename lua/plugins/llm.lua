return {
  "huggingface/llm.nvim",
  enabled = false,
  opts = {
    -- cf Setup
    model = "deepseek-coder-v2",
    url = "http://localhost:11434", -- llm-ls uses "/api/generate"
    backend = "ollama",
    -- cf https://github.com/ollama/ollama/blob/main/docs/api.md#parameters
    request_body = {
      -- Modelfile options for the model you use
      options = {
        temperature = 0.2,
        top_p = 0.95,
      },
    },
  },
}
