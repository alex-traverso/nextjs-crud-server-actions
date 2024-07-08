import { removeTask } from "@/actions/task-actions";
import { Button } from "./button";

export function TaskButtonDelete({ taskId }: { taskId: number }) {
	return (
		<form action={removeTask}>
			<input type="hidden" name="taskId" value={taskId} />
			<Button variant="destructive">Delete</Button>
		</form>
	);
}
