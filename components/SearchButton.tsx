'use client';

import Image from "next/image";

interface SearchButtonProps {
    otherClasses: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({otherClasses}) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image src="/magnifying-glass.svg" alt="maginfying glass" width={40} height={40} className="object-contain"/>
    </button>
  );
};

export default SearchButton;