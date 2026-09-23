import { api } from "@/lib/axios";

export interface TopBarNotification {
    id: string;
    title: string;
    message: string;
    link?: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface CreateNotificationData {
    title: string;
    message: string;
    link?: string;
    isActive?: boolean;
}

export interface UpdateNotificationData {
    title?: string;
    message?: string;
    link?: string;
    isActive?: boolean;
}

export const notificationBarService = {
    // GET /notification-bar — Public
    getAll: async (): Promise<{ ok: boolean; message: string; data: TopBarNotification[] }> => {
        const response = await api.get("v1/notification-bar");
        return response.data;
    },

    // GET /notification-bar/:id — Public
    getById: async (id: string): Promise<{ ok: boolean; message: string; data: TopBarNotification }> => {
        const response = await api.get(`v1/notification-bar/${id}`);
        return response.data;
    },

    // POST /notification-bar — Admin only
    create: async (data: CreateNotificationData): Promise<{ ok: boolean; message: string; data: TopBarNotification }> => {
        const response = await api.post("v1/notification-bar", data);
        return response.data;
    },

    // PUT /notification-bar/:id — Admin only
    update: async (id: string, data: UpdateNotificationData): Promise<{ ok: boolean; message: string; data: TopBarNotification }> => {
        const response = await api.put(`v1/notification-bar/${id}`, data);
        return response.data;
    },

    // DELETE /notification-bar/:id — Admin only
    delete: async (id: string): Promise<{ ok: boolean; message: string; data: TopBarNotification }> => {
        const response = await api.delete(`v1/notification-bar/${id}`);
        return response.data;
    },
};
