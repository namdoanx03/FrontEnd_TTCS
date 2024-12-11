import React from "react";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { getAllSpecialty } from "../../../services/userService";
// import { connect } from "react-redux";
// import { LANGUAGES } from "../../utils";

// import { changeLanguageApp } from "../../store/actions/appActions";
// import { useDispatch, useSelector } from "react-redux";
// import * as actions from "../../store/actions";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Divider from "@material-ui/core/Divider";
import { getAllClinic } from "../../../services/userService";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: "0px",
    zIndex: "100",
  },
  root2: {
    width: "100wh",
    height: "100vh",
  },
  menu: {
    backgroundColor: "#ffffff !important",
  },
  menuTitle: {
    color: "#3c3c3c",
    fontSize: "20px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  // menuIcon: {
  //   fontSize: "25px",
  //   color: "black",
  // },
  bgImageListSpecialty: {
    width: "100px",
    height: "67px",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  listSpecialtyName: {
    marginLeft: "10px",
    fontSize: "14px",
    color: "#333",
  },
}));

const ListMedicalFacility = () => {
  const classes = useStyles();
  const [dataClinics, setDataClinics] = useState([]);

  useEffect(() => {
    const fetchDataAllClinic = async () => {
      let res = await getAllClinic({});
      if (res && res.data) {
        setDataClinics(res.data ? res.data : []);
      }
    };
    fetchDataAllClinic();
  }, []);

  let history = useHistory();

  const handleViewDetailClinic = (clinic) => {
    history.push(`/detail-clinic/${clinic.id}`);
  };
  const handleOnClickBackHome = () => (event) => {
    history.push(`/home`);
  };
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.menu}>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              className={classes.menuButton}
              onClick={handleOnClickBackHome()}
              aria-label="menu"
            >
              <KeyboardBackspaceIcon className={classes.menuIcon} />
            </IconButton>
            <Typography variant="h5" className={classes.menuTitle}>
              Bệnh viện, phòng khám
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Paper className={classes.root2}>
        <MenuList id="long-menu">
          {dataClinics &&
            dataClinics.length > 0 &&
            dataClinics.map((item, index) => {
              return (
                <div key={index} onClick={() => handleViewDetailClinic(item)}>
                  <MenuItem>
                    <ListItemIcon>
                      <div
                        className={classes.bgImageListSpecialty}
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                      ></div>
                    </ListItemIcon>
                    <Typography
                      variant="inherit"
                      className={classes.listSpecialtyName}
                    >
                      {item.name}
                    </Typography>
                  </MenuItem>
                  <Divider />
                </div>
              );
            })}
        </MenuList>
      </Paper>
    </>
  );
};

export default ListMedicalFacility;
