import {
  StateSchema,
  MessagesValue,
  StateGraph,
  START,
  END,
} from "@langchain/langgraph";

type JUDGEMENT = {
  winner: "solution1 || solution_2";
  solution_1_score: string;
  solution_2_score: string;
};

type AIBATTLESTATE = {
  messages: typeof MessagesValue;
  solution_1: string;
  solution_2: string;
  judgement: JUDGEMENT;
};
