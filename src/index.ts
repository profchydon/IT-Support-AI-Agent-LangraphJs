import { createGraph } from "./graph";


const graph = createGraph();

const res = await graph.invoke({
  message: {
    sender: "mark@meta.com",
    message: "How do I setup slack account?",
  },
});