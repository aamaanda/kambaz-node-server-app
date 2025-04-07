import model from "./model.js";
export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}
export function enrollUserInCourse(user, course) {
  const newEnrollment = { user, course, _id: `${user}-${course}` };
  return model.create(newEnrollment);
}
export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
}

// import Database from "../Database/index.js";
// import { v4 as uuidv4 } from "uuid";

// export function toggleUserInCourse(userId, courseId) {
//   const { enrollments } = Database;

//   const isEnrolled = enrollments.some(
//     enrollment => enrollment.user === userId && enrollment.course === courseId
//   );

//   if (isEnrolled) {
//     Database.enrollments = enrollments.filter(
//       enrollment => !(enrollment.user === userId && enrollment.course === courseId)
//     );
//   } else {
//     enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
//   }
//   return enrollments
// }

// export function getUserEnrollments(userId) {
//   const { enrollments } = Database;
//   return enrollments.filter(enrollment => enrollment.user === userId)
// }
