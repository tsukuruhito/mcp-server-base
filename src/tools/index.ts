import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerAddTool } from "./add.js";

export function registerAllTools(server: McpServer) {
  registerAddTool(server);
}
