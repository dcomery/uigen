import { test, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { ToolInvocation, getToolLabel } from "../ToolInvocation";

afterEach(() => {
  cleanup();
});

test("renders friendly label for str_replace_editor create in result state", () => {
  render(
    <ToolInvocation
      toolInvocation={{
        toolCallId: "1",
        toolName: "str_replace_editor",
        args: { command: "create", path: "/components/Card.jsx" },
        state: "result",
        result: "ok",
      }}
    />
  );

  expect(screen.getByText("Created /components/Card.jsx")).toBeDefined();
  expect(screen.getByTestId("tool-status-done")).toBeDefined();
  expect(screen.queryByTestId("tool-status-pending")).toBeNull();
});

test("renders pending label and spinner for str_replace_editor str_replace in call state", () => {
  render(
    <ToolInvocation
      toolInvocation={{
        toolCallId: "1",
        toolName: "str_replace_editor",
        args: { command: "str_replace", path: "/App.jsx" },
        state: "call",
      }}
    />
  );

  expect(screen.getByText("Editing /App.jsx")).toBeDefined();
  expect(screen.getByTestId("tool-status-pending")).toBeDefined();
  expect(screen.queryByTestId("tool-status-done")).toBeNull();
});

test("renders insert, view, undo_edit labels", () => {
  const cases: Array<[string, string]> = [
    ["insert", "Inserted into /a.jsx"],
    ["view", "Viewed /a.jsx"],
    ["undo_edit", "Undid edit to /a.jsx"],
  ];

  for (const [command, expected] of cases) {
    cleanup();
    render(
      <ToolInvocation
        toolInvocation={{
          toolCallId: "1",
          toolName: "str_replace_editor",
          args: { command, path: "/a.jsx" },
          state: "result",
          result: "ok",
        }}
      />
    );
    expect(screen.getByText(expected)).toBeDefined();
  }
});

test("renders rename label with both paths for file_manager", () => {
  render(
    <ToolInvocation
      toolInvocation={{
        toolCallId: "1",
        toolName: "file_manager",
        args: {
          command: "rename",
          path: "/old.jsx",
          new_path: "/new.jsx",
        },
        state: "result",
        result: "ok",
      }}
    />
  );

  expect(screen.getByText("Renamed /old.jsx → /new.jsx")).toBeDefined();
});

test("renders delete label for file_manager", () => {
  render(
    <ToolInvocation
      toolInvocation={{
        toolCallId: "1",
        toolName: "file_manager",
        args: { command: "delete", path: "/gone.jsx" },
        state: "result",
        result: "ok",
      }}
    />
  );

  expect(screen.getByText("Deleted /gone.jsx")).toBeDefined();
});

test("falls back to generic verb when args are not yet populated", () => {
  expect(
    getToolLabel({
      toolName: "str_replace_editor",
      args: {},
      state: "call",
    })
  ).toBe("Editing file");

  expect(
    getToolLabel({
      toolName: "file_manager",
      args: {},
      state: "result",
      result: "ok",
    })
  ).toBe("Updated files");
});

test("falls back to raw toolName for unknown tools", () => {
  expect(
    getToolLabel({
      toolName: "mystery_tool",
      args: { foo: "bar" },
      state: "call",
    })
  ).toBe("mystery_tool");
});
