import { Annotation } from "@langchain/langgraph";
import { Feedback, Message, MessageType, SupportType } from "./types";

const graphAnnotation = Annotation.Root({
  message: Annotation<Message>(),
  messageType: Annotation<MessageType>(),
  supportType: Annotation<SupportType>(),
  feedback: Annotation<Feedback>(),
});

export type State = typeof graphAnnotation.State;
export type Update = typeof graphAnnotation.Update;


