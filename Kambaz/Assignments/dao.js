import { v4 as uuid } from "uuid";
import model from "./model.js";

export function findAssignmentsForCourse(courseId) {
  return model.filter((assignment) => assignment.course === courseId);
}

export function addAssignment(assignmentInfo) {
  const newAssignment = { ...assignmentInfo, _id: uuid() };
  Database.assignments = [...assignments, newAssignment];
  return Database.assignments;
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  const { assignments } = Database;
  const assignment = model.find(
    (assignment) => assignment._id === assignmentId
  );
  Object.assign(assignment, assignmentUpdates);
  return assignment;
}

export function deleteAssignment(assignmentId) {
  Database.assignments = model.filter(
    (assignment) => assignment._id !== assignmentId
  );
  return assignments;
}
