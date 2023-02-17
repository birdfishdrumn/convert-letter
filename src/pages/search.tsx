import { SearchImage } from "@/components/SearchImage";
import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { SEARCH_RESULT } from "@/types/SearchResult";
import { ExchangeSVG } from "@/assets/svg/ExchangeSVG";
const Search = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<SEARCH_RESULT[]>([]);
  const [selectedImage, setSelectedImage] = useState<SEARCH_RESULT[]>([]);
  const [isReverse, setIsReverse] = useState(false);

  const sendSearchAPI = async () => {
    setLoading(true);
    const res = await axios.post("/api/searchBingImage", { text });
    setLoading(false);
    setSearchResult(res.data);
    console.log({ res });
  };

  const selectImage = (image: SEARCH_RESULT) => {
    setSelectedImage((prev) => [...prev, image]);
  };

  const deleteImage = (targetImage: SEARCH_RESULT) => {
    setSelectedImage((prev) => prev.filter((image) => image?.imageId !== targetImage?.imageId));
  };

  const imageStyle = { style: { transform: isReverse ? "scaleX(-1)" : "initial" } };
  return (
    <div>
      <main className={`${styles.main}`}>
        <div className='mb-2'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
            検索
          </label>
          <div className='flex items-center'>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2'
              id='username'
              type='text'
              placeholder='input text...'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              onClick={() => sendSearchAPI()}
              className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block w-20'
            >
              検索
            </button>
          </div>
          <div className='my-2'>
            <div
              className='rounded-md bg-lime-100 inline-block px-2 py-1 font-bold'
              role='button'
              onClick={() => setText((prev) => prev + " 楷書体")}
            >
              楷書体
            </div>
          </div>
        </div>
      </main>
      <div>
        <SearchImage loading={loading} searchResult={searchResult} selectImage={selectImage} />
        <div className='my-6 mx-auto text-center '>
          <div className='inline-block bg-stone-50 p-8 rounded-md relative'>
            <button className='absolute right-4 top-3' onClick={() => setIsReverse((prev) => !prev)}>
              <ExchangeSVG />
            </button>
            <p className='text-lg font-extrabold text-stone-600 mb-3'>Choose Image</p>
            {selectedImage?.length ? (
              selectedImage.map((image) => (
                <div>
                  <img
                    src={image.thumbnailUrl}
                    width={220}
                    className='mx-auto'
                    onClick={() => deleteImage(image)}
                    {...imageStyle}
                  />
                </div>
              ))
            ) : (
              <p className='text-sm font-extrabold text-red-400 mb-3'>no Image...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
