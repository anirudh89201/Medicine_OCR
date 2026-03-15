import axios from "axios";
import { responseType } from "@/app/types/response";

export const uploadImage = async (image: string): Promise<string | undefined> => {
  try {
    const formData = new FormData();
    formData.append("image", {
      uri: image,
      name: "photo.jpg",
      type: "image/jpeg",
    } as any);

    const response = await axios.post<responseType | null>(
      "http://localhost:3000/api/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.data) {
      return response.data.message;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw error;
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};