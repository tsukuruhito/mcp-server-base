import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerCodeReviewPrompts } from "./code-review.js";

export function registerAllPrompts(server: McpServer) {
  // コードレビュー用のプロンプトを登録
  registerCodeReviewPrompts(server);
}
