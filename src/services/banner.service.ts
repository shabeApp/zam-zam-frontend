import { api } from "@/lib/axios";

export type BannerType = "HOME" | "CATEGORY" | "PRODUCT";

export interface Banner {
    id: string;
    title: string;
    slug: string;
    description: string;
    image: string;
    link: string;
    type: BannerType;
    createdAt: string;
    updatedAt: string;
}

export interface CreateBannerData {
    title: string;
    slug: string;
    description: string;
    image: string;
    link: string;
    type?: BannerType;
}

export interface UpdateBannerData {
    title?: string;
    slug?: string;
    description?: string;
    image?: string;
    link?: string;
    type?: BannerType;
}

export const bannerService = {
    // GET /banners — Public
    getAllBanners: async (): Promise<{ ok: boolean; message: string; data: Banner[] }> => {
        const response = await api.get("v1/banners");
        return response.data;
    },

    // GET /banners/:id — Public
    getBannerById: async (id: string): Promise<{ ok: boolean; message: string; data: Banner }> => {
        const response = await api.get(`v1/banners/${id}`);
        return response.data;
    },

    // POST /banners — Admin only
    createBanner: async (data: CreateBannerData): Promise<{ ok: boolean; message: string; data: Banner }> => {
        const response = await api.post("v1/banners", data);
        return response.data;
    },

    // PUT /banners/:id — Admin only
    updateBanner: async (id: string, data: UpdateBannerData): Promise<{ ok: boolean; message: string; data: Banner }> => {
        const response = await api.put(`v1/banners/${id}`, data);
        return response.data;
    },

    // DELETE /banners/:id — Admin only
    deleteBanner: async (id: string): Promise<{ ok: boolean; message: string; data: Banner }> => {
        const response = await api.delete(`v1/banners/${id}`);
        return response.data;
    },
};
