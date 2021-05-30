import { Button, Typography } from "@material-ui/core";
import { PlayArrow } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import GameDialog from "./GameDialog";
import RecordsTable from "./RecordsTable";
import noRecord from "../resources/norecord.svg";
import { highlightRow } from "../utils";

const slotStyle = {
  maxWidth: "50px",
  minWidth: "50px",
  sorting: false,
};

const columns = [
  {
    id: "id",
    label: "Id",
    numeric: "true",
    width: "1%",
    maxWidth: "2px",
    alignment: "center",
    sortable: true,
    render: (rowData) => rowData.tableData.id + 1,
  },
  {
    id: "slot1",
    label: "Slot1",
    alignment: "right",
    ...slotStyle,
  },
  {
    id: "slot2",
    label: "Slot2",
    alignment: "center",
    ...slotStyle,
  },
  {
    id: "slot3",
    label: "Slot3",
    alignment: "left",
    ...slotStyle,
  },
  {
    id: "time",
    label: "Time",
    type: "datetime",
    dateSettings: {
      locale: "ddd, dd MMM yyy HH:mm:ss",
    },
    width: 260,
    alignment: "center",
    sortable: true,
  },
];

const Content = (props) => {
  const [records, setRecords] = useState([]);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem("records"));
    if (
      storedRecords &&
      typeof storedRecords == "object" &&
      storedRecords.length
    ) {
      setRecords(storedRecords);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  return (
    <>
      <div
        style={{
          minHeight: "calc(100vh - 50px - 4rem)",
          marginBottom: "-50px",
        }}
      >
        <div style={{ padding: "2rem" }}>
          <Button
            size="large"
            variant="outlined"
            color="primary"
            onClick={() => setOpen(true)}
          >
            <PlayArrow /> play now
          </Button>

          <GameDialog
            open={open}
            priceSetter={(updatedAmount) => {
              props.setter(updatedAmount);
            }}
            handleClose={() => setOpen(false)}
            save={(entry) => {
              let newRecord = [
                { id: records.length + 1, ...entry },
                ...records,
              ];
              setRecords(newRecord);
            }}
          />
        </div>

        {records.length !== 0 ? (
          <RecordsTable
            columns={columns}
            rows={records}
            highlightRow={highlightRow}
          />
        ) : (
          <>
            <Typography
              variant="h4"
              style={{ marginTop: "3rem", fontFamily: "pattaya" }}
              className="slideIn"
            >
              Welcome!
            </Typography>
            <img
              src={noRecord}
              style={{
                animationDelay: "0.05s",
                width: "20rem",
                height: "20rem",
              }}
              className="slideIn"
              alt="No game history"
            />
            <Typography
              variant="h5"
              style={{ animationDelay: "0.1s", fontFamily: "pattaya" }}
              className="slideIn"
            >
              Glad to have you here. Start creating history
            </Typography>
          </>
        )}
      </div>
    </>
  );
};

export default Content;
