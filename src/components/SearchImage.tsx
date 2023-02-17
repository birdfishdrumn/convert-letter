import { useFetchImage } from "@/hooks/useFetchImage";
import { SEARCH_RESULT } from "@/types/SearchResult";
import React, { FC } from "react";

interface Props {
  searchResult: SEARCH_RESULT[] | undefined;
  selectImage: (image: SEARCH_RESULT) => void;
  loading: boolean;
}

export const SearchImage: FC<Props> = ({ searchResult, loading, selectImage }) => {
  // const { searchResult, loading } = useFetchImage();
  const width = { style: { width: 1200 } };
  return (
    <div className='overflow-x-scroll'>
      <div className='flex flex-row mx-auto' {...width}>
        {loading ? (
          <div className='text-center font-bold text-lg'>Loading...</div>
        ) : (
          <>
            {searchResult?.length
              ? searchResult.slice(0, 20).map((searchItem) => (
                  <div role='button' onClick={() => selectImage(searchItem)} key={searchItem.imageId}>
                    <img src={searchItem.thumbnailUrl} />
                  </div>
                ))
              : null}
          </>
        )}
      </div>
    </div>
  );
};
