import TaskCard from "@/components/ui/task-card";
import prisma from "@/lib/prisma";

export default async function Home() {
	const tasks = await prisma.task.findMany();

	console.log(tasks);
	return (
		<div className="grid grid-cols-3 gap-4">
			{tasks.length === 0 && (
				<h2 className="text-white font-bold text-xl">No existing tasks</h2>
			)}
			{tasks.length > 0 &&
				tasks.map((task) => <TaskCard task={task} key={task.id} />)}
		</div>
	);
}
