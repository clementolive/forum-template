import { Message } from "./message";

export interface Thread {
    title: string; 
    user: string; 
    content: string;
    createdAt: Date; 
    messages: Message[];
}
