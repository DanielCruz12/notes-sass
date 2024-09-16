import { Event } from "@/types";
import HttpClient from "@/utils/httpClient";

const getEventService = async (): Promise<Event[]> => {
  return HttpClient(`/api/v1/events`).then((res) => {
    return res.data as Event[];
  });
};

const EventServices = {
  getEventService,
};

export default EventServices;
