import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { emitter } from "../../utils/emitter";

import { useState, useEffect } from "react";

import { getAllSpecialty } from "../../services/userService";

var options = [];

const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
  menuSpecialty: {
    position: "absolute !important",
    top: "270px !important",
    left: "550px !important",
  },
  titleHeader: {
    fontWeight: "600 !important",
    backgroundColor: "#ebebeb !important",
    marginTop: "-7px !important",
  },
}));

const HomeMenuSearchSpecialty = (props) => {
  let history = useHistory();
  const classes = useStyles();
  //   const [anchorEl, setAnchorEl] = React.useState(null);
  //   const open = Boolean(anchorEl);
  const [open, setOpen] = useState(false);
  const [dataSpecialty, setDataSpecialty] = useState([]);

  const handleClick = (event) => {
    // setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    // setAnchorEl(null);
    setOpen(false);
  };

  //   function listenToEmitter() {
  //     emitter.on("EVENT_OPEN_MENU_HOME_MENU_SEARCH_SPECIALTY", () => {
  //       alert("Clicked from child");
  //       //   open = true;
  //       //   console.log("open", open);
  //     });
  //   }

  useEffect(() => {
    const fetchDataGetAllSpecialty = async () => {
      if (dataSpecialty.length !== 0) return;
      let res = await getAllSpecialty({});
      if (res && res.errCode === 0) {
        let data = res.data ? res.data : [];
        setDataSpecialty(data);
      }
    };
    fetchDataGetAllSpecialty();
  }, []);

  const makeArraySpecityOptions = () => {
    options = [];
    dataSpecialty.map((item) => options.push(item.name));
  };

  useEffect(() => {
    setOpen(props.showMenuSearchSpecialty);
  }, [props.showMenuSearchSpecialty]);

  const findIdSpecialtyByName = (itemName) => {
    let item = dataSpecialty.find((element) => element.name === itemName);

    return item.id;
  };

  const handleViewDetail = (itemName) => (event) => {
    let id = findIdSpecialtyByName(itemName);
    if (history) {
      history.push(`/detail-specialty/${id}`);
    }
    setOpen(false);
  };

  makeArraySpecityOptions();
  return (
    <Menu
      id="long-menu"
      // anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={handleClose}
      anchorReference="none"
      PaperProps={{
        style: {
          maxHeight: ITEM_HEIGHT * 7,
          width: "58ch",
        },
      }}
      className={classes.menuSpecialty}
    >
      <MenuItem key={"specialty"} className={classes.titleHeader}>
        Chuyên khoa
      </MenuItem>

      {options.map((option) => (
        <MenuItem key={option} onClick={handleViewDetail(option)}>
          {option}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default HomeMenuSearchSpecialty;
