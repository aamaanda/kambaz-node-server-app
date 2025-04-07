import mongoose from "mongoose";
import schema from "./assignment.schema";
const model = mongoose.model("AssignmentModel", schema);
export default model;
