import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerAllTools } from "./src/tools/index.js";
import { registerAllResources } from "./src/resources/index.js";
import { registerAllPrompts } from "./src/prompts/index.js";

// MCPサーバーの作成
const server = new McpServer({
  name: "MCP Server Base",
  version: "1.0.0"
});

// 全てのツール、リソース、プロンプトを登録
registerAllTools(server);
registerAllResources(server);
registerAllPrompts(server);

// stdioトランスポートでサーバー起動
const transport = new StdioServerTransport();
await server.connect(transport); 