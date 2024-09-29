/**
 * Converts a date-time string retrieved from ServiceNow's TableAPI.
 *
 * The ServiceNow TableAPI returns duration values as date strings (treated as Unix epoch time) and it needs
 * to be converted back into a human-readable value. This function handles this conversion.
 *
 * @param {string} dateString - The date-time string in the format "YYYY-MM-DD HH:MM:SS" coming from the ServiceNow API.
 *                              Example: "1970-01-31 02:30:10".
 *
 * @returns {string} - A human-readable string representing the duration. Example: "30 Days 2 Hours 30 Minutes".
 *
 * Why we need "T" and "Z":
 *  - "T" is a delimiter between the date and time components in ISO 8601 format. It is standard format for JavaSCript's Date object.
 *  - "Z" indicates that the time is in UTC (Coordinated Universal Time). It is also a standard format for JavaScript's Date object.
 */

function convertEpochToDuration(dateString) {
  // Add T and Z to the date string
  dateString = dateString.replace(" ", "T");
  dateString += "Z"; // Treat as UTC

  // Parse the date string into a Date object
  const date = new Date(dateString);

  // Calculate the difference from the epoch (in ms)
  const diffInMs = date.getTime() - new Date("1970-01-01T00:00:00Z").getTime();

  // Convert the difference into days, hours, minutes, and seconds
  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

  // Build the duration string
  let durationString = `${days} Days`;
  if (hours > 0) durationString += ` ${hours} Hours`;
  if (minutes > 0) durationString += ` ${minutes} Minutes`;
  if (seconds > 0) durationString += ` ${seconds} Seconds`;

  return durationString;
}

export default convertEpochToDuration;
