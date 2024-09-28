/**
 * @module _constant
 * @description values used to send requests to ServiceNow
 */

// ServiceNow instance
const SERVICENOW_INSTANCE = import.meta.env.VITE_SERVICENOW_INSTANCE;
const SERVICENOW_USER = import.meta.env.VITE_SERVICENOW_USERNAME;
const SERVICENOW_PASSWORD = import.meta.env.VITE_SERVICENOW_PASSWORD;
const SERVICENOW_CREDENTIALS = `${SERVICENOW_USER}:${SERVICENOW_PASSWORD}`;
const BASE_URL = `${SERVICENOW_INSTANCE}/api/now/table/`;

// testing learner
const LEARNER_ID = import.meta.env.VITE_LEARNER_ID;

// table names
const COURSE_TABLE = "x_quo_coursehub_course";
const LEARNER_TABLE = "x_quo_coursehub_learner";
const SUBSCRIPTION_TABLE = "x_quo_coursehub_course_subscription";

// api queries
const EXCLUDE_REFERENC_LINK = "sysparm_exclude_reference_link=true";
const SELECT_SUBSCRIPTION_FIELDS =
  "sysparm_fields=sys_id%2Ccourse.sys_id%2Ccourse.title%2Ccourse.description%2Ccourse.duration";
const SELECT_FIELDS_FROM_USER_ACCOUNT = "sysparm_fields=user_account.email";

export {
  BASE_URL,
  SERVICENOW_CREDENTIALS,
  LEARNER_ID,
  COURSE_TABLE,
  LEARNER_TABLE,
  SUBSCRIPTION_TABLE,
  EXCLUDE_REFERENC_LINK,
  SELECT_SUBSCRIPTION_FIELDS,
  SELECT_FIELDS_FROM_USER_ACCOUNT,
};
