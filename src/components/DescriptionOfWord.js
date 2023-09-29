import { React, useEffect, useState } from "react";
import { get } from "../API";
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
  return <>{JSON.stringify(json)}</>;
}
