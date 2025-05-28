import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

/**
 * コードレビュー用のプロンプトを登録
 */
export function registerCodeReviewPrompts(server: McpServer) {
  // コードレビュー用プロンプト
  server.prompt(
    "code-review",
    {
      code: z.string().describe("レビューするコード"),
      language: z.string().optional().describe("プログラミング言語（例: typescript, python, java）"),
      focus: z.string().optional().describe("レビューの焦点（例: performance, security, readability）")
    },
    ({ code, language = "Unknown", focus }) => {
      let reviewText = `以下の${language}コードをレビューして、改善点を提案してください：\n\n\`\`\`${language.toLowerCase()}\n${code}\n\`\`\``;
      
      if (focus) {
        reviewText += `\n\n特に${focus}の観点から詳しく分析してください。`;
      }
      
      reviewText += "\n\n以下の点について確認してください：\n- コードの可読性\n- パフォーマンス\n- セキュリティ\n- ベストプラクティスの遵守\n- バグの可能性";

      return {
        messages: [{
          role: "user",
          content: {
            type: "text",
            text: reviewText
          }
        }]
      };
    }
  );
}
