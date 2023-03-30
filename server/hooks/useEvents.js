import { useEffect, useState } from "react";
import { fetchApi } from "../helpers/fetchApi";

// Fetch the items with useEffect
export const useEvents = ({ searchParamsString }) => {
  const [events, setEvents] = useState(null);
  const [totalNumberEvents, setTotalNumberEvents] = useState(null);

  useEffect(() => {
    fetchApi({
      apiUrl: "/get-events?" + searchParamsString,
      setData: setEvents,
      setTotalNumberEvents,
    });
  }, [searchParamsString]);

  return { events, totalNumberEvents };
};
