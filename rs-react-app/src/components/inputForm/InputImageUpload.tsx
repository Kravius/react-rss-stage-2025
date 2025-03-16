import React from 'react';

interface ImageUploadProps {
  errors: Record<string, string | undefined>;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ errors }) => {
  return (
    <div>
      <label htmlFor="image">Upload Image (PNG, JPEG, max 5MB):</label>
      <input type="file" name="image" id="image" accept=".png, .jpeg, .jpg" />
      {errors?.image && <span className="error">{errors.image}</span>}
    </div>
  );
};

export default ImageUpload;
