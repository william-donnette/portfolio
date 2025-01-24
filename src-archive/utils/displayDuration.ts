export const displayDuration = (startedAt: Date, endedAt?: Date): string => {
  const displayStartedYear = startedAt.getFullYear();
  const displayEndedYear = endedAt?.getFullYear() ?? "Aujourd'hui";
  if (displayStartedYear === displayEndedYear) {
    return displayStartedYear.toString();
  }
  return [displayStartedYear, displayEndedYear].join(" - ");
};
