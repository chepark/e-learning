import axiosInstance from "./axiosInstance";
import {
  EXCLUDE_REFERENC_LINK,
  SELECT_SUBSCRIPTION_FIELDS,
  SUBSCRIPTION_TABLE,
} from "./constant";

// GET all subscriptions of a student
export const fetchSubscriptions = async (learnerId) => {
  const learner = `learner=${learnerId}`;
  const query =
    learner + "&" + EXCLUDE_REFERENC_LINK + "&" + SELECT_SUBSCRIPTION_FIELDS;
  const url = `${SUBSCRIPTION_TABLE}?${query}`;

  const response = await axiosInstance.get(url);

  return response.data.result;
};

// GET single course subscription of a student by course ID and learner ID
export const fetchSubscription = async (learnerId, courseId) => {
  const learner = `learner=${learnerId}`;
  const course = `course=${courseId}`;
  const query = learner + "&" + course;
  const url = `${SUBSCRIPTION_TABLE}?${query}`;

  const response = await axiosInstance.get(url);

  return response.data.result;
};

// POST add a course to a student's subscription
export const addSubscription = async (learnerId, courseId) => {
  const url = `${SUBSCRIPTION_TABLE}`;
  const data = {
    learner: learnerId,
    course: courseId,
  };

  const response = await axiosInstance.post(url, data);

  return response.data.result;
};

// PATCH delete a student's subscription when student unsubscribes from a course
export const deleteSubscription = async (subscriptionId) => {
  const url = `${SUBSCRIPTION_TABLE}/${subscriptionId}`;

  const response = axiosInstance.delete(url);

  return response;
};
