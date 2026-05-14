import React, { useState } from 'react';

interface ExpandableImageProps {
  src?: string;
  alt?: string;
  caption?: React.ReactNode;
  width?: number | string;
}

export default function ExpandableImage({
  src,
  alt = 'Image',
  caption,
  width = 650,
}: ExpandableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!src) return null;

  return (
    <>
      <div className="doc-image">
        <img
          src={src}
          alt={alt}
          style={{ width, cursor: 'zoom-in' }}
          onClick={() => setIsOpen(true)}
        />
        {caption && <p>{caption}</p>}
      </div>

      {isOpen && (
        <div className="image-modal-overlay" onClick={() => setIsOpen(false)}>
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="image-modal-close"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>

            <img src={src} alt={alt} className="image-modal-img" />

            {caption && <p className="image-modal-caption">{caption}</p>}
          </div>
        </div>
      )}
    </>
  );
}