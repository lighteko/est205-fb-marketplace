import { useState } from "react";

export type UsePhotoSelector = [File[], (newPhotos: File[]) => void];

export function usePhotoSelctor(): UsePhotoSelector {
  const [photos, setPhotos] = useState<File[]>([]);
  const handlePhotos = (newPhotos: File[]) => {
    setPhotos([...photos, ...newPhotos])
  }
  return [photos, handlePhotos];
}
