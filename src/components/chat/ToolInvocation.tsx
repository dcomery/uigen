"use client";

import { Loader2 } from "lucide-react";

type ToolState = "call" | "partial-call" | "result";

interface ToolInvocationPart {
  toolCallId?: string;
  toolName: string;
  args?: Record<string, any>;
  state: ToolState;
  result?: unknown;
}

interface ToolInvocationProps {
  toolInvocation: ToolInvocationPart;
}

const STR_REPLACE_LABELS: Record<string, [string, string]> = {
  create: ["Creating", "Created"],
  str_replace: ["Editing", "Edited"],
  insert: ["Inserting into", "Inserted into"],
  view: ["Viewing", "Viewed"],
  undo_edit: ["Undoing edit to", "Undid edit to"],
};

const FILE_MANAGER_LABELS: Record<string, [string, string]> = {
  delete: ["Deleting", "Deleted"],
};

const TOOL_FALLBACK: Record<string, [string, string]> = {
  str_replace_editor: ["Editing file", "Edited file"],
  file_manager: ["Updating files", "Updated files"],
};

export function getToolLabel(tool: ToolInvocationPart): string {
  const isDone = tool.state === "result";
  const tense = (pair: [string, string]) => (isDone ? pair[1] : pair[0]);

  const args = tool.args ?? {};
  const command: string | undefined = args.command;
  const path: string | undefined = args.path;

  if (tool.toolName === "str_replace_editor" && command && STR_REPLACE_LABELS[command]) {
    const verb = tense(STR_REPLACE_LABELS[command]);
    return path ? `${verb} ${path}` : verb;
  }

  if (tool.toolName === "file_manager") {
    if (command === "rename" && path && args.new_path) {
      return `${isDone ? "Renamed" : "Renaming"} ${path} → ${args.new_path}`;
    }
    if (command && FILE_MANAGER_LABELS[command]) {
      const verb = tense(FILE_MANAGER_LABELS[command]);
      return path ? `${verb} ${path}` : verb;
    }
  }

  const fallback = TOOL_FALLBACK[tool.toolName];
  if (fallback) return tense(fallback);

  return tool.toolName;
}

export function ToolInvocation({ toolInvocation }: ToolInvocationProps) {
  const isDone = toolInvocation.state === "result";
  const label = getToolLabel(toolInvocation);

  return (
    <div className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 bg-neutral-50 rounded-lg text-xs border border-neutral-200">
      {isDone ? (
        <div
          data-testid="tool-status-done"
          className="w-2 h-2 rounded-full bg-emerald-500"
        />
      ) : (
        <Loader2
          data-testid="tool-status-pending"
          className="w-3 h-3 animate-spin text-blue-600"
        />
      )}
      <span className="text-neutral-700">{label}</span>
    </div>
  );
}

export default ToolInvocation;
