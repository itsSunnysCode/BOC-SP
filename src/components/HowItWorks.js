import React from "react";
import Grid from "@material-ui/core/Grid";

function HowItWorks({ data: componentData }) {
  const { heading_title, data = [] } = componentData || {};

  if (!(data && data.length)) return null;

  return (
    <section className="how-it-works" aria-label="working-explanation-of-burst">
      <section className="heading">{heading_title || "-"}</section>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        className="work-section"
        spacing={3}
      >
        {data.map((item, index) => (
          <Grid key={`each-work-${index}`} item sm={4} xs={12} className="ta-center each-work">
            {item.image_name ? (
              <figure>
                <img
                  src={require(`../images/${item.image_name}.svg`)}
                  alt={item?.alt_text || "a picture of work icon"}
                />
              </figure>
            ) : null}
            <section className="title">{item.title || "-"}</section>
            <section className="description">{item.description || "-"}</section>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default HowItWorks;
