const ImageCard = ({image}) => {
    return (
        <div className='max-w-sm px-2 rounded overflow-hidden shadow-lg'>
        <img src={image.webformatURL} className='w-full' alt='' />
        <div className="px-6 py-4">
          <div className='font-bold text-purple-500 text-xl mb-2'>Photo by John Doe</div>
        </div>
        <ul>
          <li><strong>Views: </strong> 4000</li>
          <li><strong>Downloads: </strong> 4000</li>
          <li><strong>Likes: </strong> 4000</li>
        </ul>
        <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
    </div>
      </div>
    )
}


export default ImageCard;