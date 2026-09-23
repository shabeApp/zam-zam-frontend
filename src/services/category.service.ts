import { api } from "@/lib/axios";

export interface Category {
    id: string;
    name: string;
    slug: string;
    image: string;
    featured: boolean;
    parentCategoryId?: string | null;
    createdAt: string;
    updatedAt: string;
    _count?: {
        products: number;
        subCategories: number;
    };
    subCategories?: Category[];
}

export interface CategoryStats {
    totalCategories: number;
    mainCategories: number;
    subCategories: number;
    totalProducts: number;
}

export const categoryService = {
    getAllCategories: async (params?: { page?: number; limit?: number; featured?: boolean; includeProducts?: boolean }) => {
        const response = await api.get<{
            ok: boolean;
            data: {
                data: Category[];
                total: number;
                pages: number;
            }
        }>(
            "v1/categories",
            { params }
        );
        return response.data;
    },

    getCategoryTree: async () => {
        const response = await api.get<{ ok: boolean; data: Category[] }>("v1/categories/tree");
        return response.data;
    },

    getCategoryTreeShortData: async () => {
        const response = await api.get<{ ok: boolean; data: Category[] }>("v1/categories/tree-short-data");
        return response.data;
    },

    getCategoryById: async (id: string) => {
        const response = await api.get<{ ok: boolean; data: Category }>(`v1/categories/${id}`);
        return response.data;
    },

    getSubCategories: async (id: string) => {
        const response = await api.get<{ ok: boolean; data: Category }>(`v1/categories/${id}/subcategories`);
        return response.data;
    },

    getCategoryBySlug: async (slug: string) => {
        const response = await api.get<{ ok: boolean; data: Category }>(`v1/categories/slug/${slug}`);
        return response.data;
    },

    getCategoryStatistics: async () => {
        const response = await api.get<{ ok: boolean; data: CategoryStats }>("v1/categories/admin/stats");
        return response.data;
    },

    createMainCategory: async (data: { name: string; slug: string; image?: string; featured?: boolean }) => {
        const response = await api.post<{ ok: boolean; data: Category }>("v1/categories/main", data);
        return response.data;
    },

    createSubCategory: async (data: { name: string; slug: string; parentCategoryId: string; image?: string; featured?: boolean }) => {
        const response = await api.post<{ ok: boolean; data: Category }>("v1/categories/sub", data);
        return response.data;
    },

    updateCategory: async (id: string, data: Partial<{ name: string; slug: string; image: string; featured: boolean; parentCategoryId: string | null }>) => {
        const response = await api.put<{ ok: boolean; data: Category }>(`v1/categories/${id}`, data);
        return response.data;
    },

    deleteCategory: async (id: string) => {
        const response = await api.delete<{ ok: boolean; message: string }>(`v1/categories/${id}`);
        return response.data;
    }
};
