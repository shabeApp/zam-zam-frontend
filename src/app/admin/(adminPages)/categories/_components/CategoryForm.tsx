"use client";

import {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
  UseFormWatch,
} from "react-hook-form";
import {
  RefreshCw,
  Link2,
  Unlink,
  LayoutGrid,
  Tag,
  ImageIcon,
  LinkIcon,
} from "lucide-react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CategoryFormData } from "@/validations/category.validation";

interface CategoryFormProps {
  register: UseFormRegister<CategoryFormData>;
  handleSubmit: UseFormHandleSubmit<CategoryFormData>;
  onSubmit: (data: CategoryFormData) => Promise<void>;
  errors: FieldErrors<CategoryFormData>;
  watch: UseFormWatch<CategoryFormData>;

  isSlugSynced: boolean;
  setIsSlugSynced: (val: boolean) => void;
  handleSyncSlug: () => void;
  type: "main" | "sub";
}

export const CategoryForm = ({
  register,
  handleSubmit,
  onSubmit,
  errors,
  watch,
  isSlugSynced,
  setIsSlugSynced,
  handleSyncSlug,
  type,
}: CategoryFormProps) => {
  const watchImage = watch("image") || "";

  return (
    <form
      id="category-form"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 py-2"
    >
      {/* Category Name */}
      <div className="grid gap-2">
        <Label className="text-xs font-bold uppercase tracking-widest">
          Category Name
        </Label>

        <div className="relative">
          {type === "main" ? (
            <LayoutGrid className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          ) : (
            <Tag className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          )}

          <Input
            {...register("name")}
            placeholder={
              type === "main" ? "Electronics" : "Smartphones"
            }
            className="pl-12 h-14 rounded-2xl"
          />
        </div>

        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Slug */}
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <Label className="text-xs font-bold uppercase tracking-widest">
            URL Slug
          </Label>

          <button
            type="button"
            onClick={handleSyncSlug}
            className="text-xs flex items-center gap-1 text-primary"
          >
            <RefreshCw className="w-3 h-3" />
            Auto Sync
          </button>
        </div>

        <div className="relative">
          <Input
            {...register("slug")}
            placeholder="electronics"
            onChange={() => setIsSlugSynced(false)}
            className="pr-10 h-14 rounded-2xl"
          />

          {isSlugSynced ? (
            <Link2 className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
          ) : (
            <Unlink className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          )}
        </div>

        {errors.slug && (
          <p className="text-xs text-red-500">{errors.slug.message}</p>
        )}
      </div>

      {/* Image URL */}
      <div className="grid gap-2">
        <Label className="text-xs font-bold uppercase tracking-widest">
          Image URL
        </Label>

        <div className="relative">
          <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />

          <Input
            {...register("image")}
            placeholder="https://example.com/category.jpg"
            className="pl-12 h-12 rounded-2xl"
          />
        </div>

        {errors.image && (
          <p className="text-xs text-red-500">{errors.image.message}</p>
        )}
      </div>

      {/* Live Preview */}
      {watchImage && (
        <div className="flex items-center gap-3 p-3 rounded-2xl border bg-muted/20">
          <div className="w-14 h-14 rounded-xl overflow-hidden border bg-white">
            <img
              src={watchImage}
              alt="Preview"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground mb-1">
              Image Preview
            </p>
            <p className="truncate text-xs font-mono">{watchImage}</p>
          </div>
        </div>
      )}

      {/* Featured */}
      <div className="flex items-center justify-between rounded-3xl border p-5">
        <div>
          <h4 className="font-semibold">Featured</h4>
          <p className="text-xs text-muted-foreground">
            Show this category on homepage
          </p>
        </div>

        <input
          type="checkbox"
          {...register("featured")}
          className="h-5 w-5"
        />
      </div>
    </form>
  );
};