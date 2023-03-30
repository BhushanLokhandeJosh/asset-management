import React from "react"
import "./assets.css"
import { online } from "../../../data/dummydata";

const OnlineAssets = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} alt="can't load image" />
                </div>
                <h1>{val.Name}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineAssets
