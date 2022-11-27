import React from "react";

const ImageCard = ({image}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={image.largeImageURL} alt="" className="w-full" />
        <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
                Photo by {image.user}
            </div>
            <ul>
                <li>
                    <strong>Views: </strong>
                    {image.views}
                </li>
                <li>
                    <strong>Downloads: </strong>
                    {image.downloads}
                </li>
                <li>
                    <strong>Likes: </strong>
                    {image.likes}
                </li>
            </ul>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{image.tags.split(",")[0]}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{image.tags.split(",")[1]}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{image.tags.split(",")[2]}</span>
        </div>
    </div>
    
  );
};

export default ImageCard;
