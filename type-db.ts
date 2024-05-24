import { Timestamp } from "firebase/firestore";

export interface store {
    di: string;
    name: string;
    userId: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}