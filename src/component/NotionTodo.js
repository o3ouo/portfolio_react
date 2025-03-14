import React from 'react';
import WorkContent from './WorkContent';

function NotionTodo() {
  return (
    <div className="notion_todo_box">
      <WorkContent title={"Notion"} icon={"notion"} />
      <WorkContent title={"TodoList"} icon={"todolist"} />
    </div>
  );
}

export default NotionTodo;
