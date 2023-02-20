import React from 'react'
import { HomePageVideos } from '../Types';

function Card({ data }: {data: HomePageVideos}) {
  const isData = data ? true : false;

  return (
    <div>Card</div>
  )
}

export default Card;