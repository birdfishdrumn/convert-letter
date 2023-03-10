import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useState } from "react";
import { transform } from "typescript";
import { SearchImage } from "@/components/SearchImage";
import Link from "next/link";

export default function Home() {
  const [text, setText] = useState("");
  const [isReverse, setIsReverse] = useState(false);

  const textStyle = { style: { transform: isReverse ? "scaleX(-1)" : "initial" } };
  return (
    <div className='text-center mx-auto'>
      <Head>
        <title>Create Next App</title>

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${styles.main}`}>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
            名入れ文字
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='username'
            type='text'
            placeholder='名入れ'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={() => setIsReverse((prev) => !prev)}
            className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            {isReverse ? "戻す" : "反転する"}
          </button>
        </div>
        <h1 className={styles.title} {...textStyle}>
          {text}
        </h1>
      </main>
    </div>
  );
}
