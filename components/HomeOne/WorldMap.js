import React from "react";
import World from "react-svg-worldmap";
import data from "../../data/country_map";

const IDS = ["NA", "SA", "AS", "AF", "EU", "OC"];

export default function WorldMap() {
  // useEffect(() => {
  //   const mapOffset = $(".map-img").offset();
  //   IDS.forEach((id) => {
  //     const itemOffset = $(`#${id}`).offset();
  //     const itemTop = itemOffset.top - mapOffset.top;
  //     $(`#${id}`).click(function () {
  //       console.log(id);
  //     });
  //   });
  // }, []);

  return (
    <div className="mt-30 mb-50 map-div">
      <World color="#78d2ff" size="xl" data={data} />
    </div>
  );
}
