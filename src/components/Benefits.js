import React from "react";

function Benefits({ data: componentData }) {
  const { heading_title, data = [] } = componentData || {};

  if (!(data && data.length)) return null;

  return (
    <section className="benefits">
      <section className="heading">{heading_title || "-"}</section>
      {data.map((item, index) => (
        <section key={`benefit-each-${index}`} aria-label="benefits of being a member of burst oral care">
          <section className="benefit-column">
            <section
              className={
                item?.isHeading ? "heading-color column-cell" : "column-cell"
              }
            >
              {item?.column_1 ?? "-"}
            </section>
            <section
              className={
                item?.isHeading ? "heading-color column-cell" : "column-cell"
              }
            >
              {item.column_2 ?? "-"}
            </section>
          </section>
          {index  !== data.length-1 ? <div className="divider" /> : null}
        </section>
      ))}
    </section>
  );
}

export default Benefits;
