import { React, useEffect, useState } from "react";
import { get } from "../API";
import { loading } from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import CarouselImage from "./CarouselImage";
export function sense(data) {
  return (
    <>
      <div>{data.sense}</div>
      <ul className="pl-4">
        {data.examples.map((x) => {
          return <li className="list-disc">{x}</li>;
        })}
      </ul>
    </>
  );
}
export function pronunciation(word, pro, lang) {
  return (
    <>
      <div className="text-lg flex items-center pt-2">
        <FontAwesomeIcon
          className={
            lang == "English"
              ? "hover:text-blue-600 pr-2"
              : "hover:text-red-600 pr-2"
          }
          icon={faVolumeUp}
          title={word + " pronunciation " + lang}
          onClick={() => {
            let audio = new Audio(pro.mp3_url);
            audio.play();
          }}
        />
        <div
          className="pb-1"
          style={{ fontFamily: "'Lucida Grande', 'Lucida Sans Unicode'" }}
        >
          {pro.pronunciation}
        </div>
      </div>
    </>
  );
}
export function DescriptionOfWord(props) {
  const [json, SetJson] = useState();
  useEffect(() => {
    get("/api/v1/search?word=" + props.word)
      .then((res) => {
        if (res.status == 200) {
          SetJson(res.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [props.word]);
  return (
    <>
      {json ? (
        <div className="w-full max-w-4xl mx-auto mt-4 font-sans">
          <div className="relative">
            <h1 className="inline-block text-4xl font-medium text-blue-600">
              {json.word}
            </h1>
            <span className="italic px-4">{json.partOfSpeech}</span>
            {pronunciation(json.word, json.uk, "English")}
            {pronunciation(json.word, json.us, "American")}
            <ol className="list-decimal pl-4">
              {json.senses.map((x) => {
                return <li>{sense(x)}</li>;
              })}
            </ol>
            <CarouselImage slides={json.images} />
          </div>
        </div>
      ) : (
        <div className="w-full max-w-4xl mx-auto mt-4">
          <div className="relative">{loading()}</div>
        </div>
      )}
    </>
  );
}
