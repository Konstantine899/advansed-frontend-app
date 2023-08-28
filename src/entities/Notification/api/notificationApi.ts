// Notification/api/notificationApi.ts

import { rtkApi } from "shared/api/rtkApi";
import { Notifications } from "../model/types/notifications";

export const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notifications[], null>({
      query: () => ({ url: "/notifications" }),
    }),
  }),
});

export const useNotification = notificationApi.useGetNotificationsQuery;
