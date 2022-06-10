import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
//import entries from "../entrypoints.json";

const { Meta } = Card;
const gridStyle = {
  width: "33.33%",
  textAlign: "center",
};

const EntrypointsDashboard = () => {
  const [entryPointsList, setEntryPointsList] = useState(null);
  useEffect(() => {
    fetch("entrypoints.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("data from entry", data);
        setEntryPointsList(data.entries);
      });
  }, []);

  //const entryPointsList = entries.entries;

  const handleCardClick = (entrypoint) => {
    if (!entrypoint || !entrypoint.link) return;
    window.open(entrypoint.link, "_blank");
  };
  return (
    <div className="at-entrypoints-dashboard">
      <Row>
        <Col span={24}>
          <Card title="Explorug Entry Points">
            {entryPointsList &&
              entryPointsList.map((entrypoint, index) => (
                <Card.Grid key={index} style={gridStyle} onClick={() => handleCardClick(entrypoint)}>
                  <img
                    alt={entrypoint.title}
                    className="entrypoints-cards"
                    src={entrypoint.coverImgUrl}
                    title={entrypoint.title}
                  />
                  <Meta title={entrypoint.metaTitle} description={entrypoint.metaDesc} />
                </Card.Grid>
              ))}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

EntrypointsDashboard.propTypes = {};

export default EntrypointsDashboard;
