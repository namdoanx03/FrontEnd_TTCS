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
import { useDispatch, useSelector } from "react-redux";

import { getAllSpecialty } from "../../../services/userService";
// import { connect } from "react-redux";
// import { LANGUAGES } from "../../utils";

// import { changeLanguageApp } from "../../store/actions/appActions";
// import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../store/actions";
import { LANGUAGES } from "../../../utils";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Divider from "@material-ui/core/Divider";

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
  content: {
    display: "flex",
    flexDirection: "column",
  },
}));

const ListOutStandingDoctor = () => {
  const classes = useStyles();
  const [arrDoctors, setArrDoctors] = useState([]);

  const allDoctors = useSelector((state) => state.admin.allDoctors);
  const language = useSelector((state) => state.app.language);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchAllDoctors());
  }, []);
  useEffect(() => {
    setArrDoctors(allDoctors);
  }, [allDoctors]);

  let history = useHistory();

  const handleViewDetailDoctor = (doctor) => {
    history.push(`/detail-doctor/${doctor.id}`);
  };
  const handleOnClickBackHome = () => (event) => {
    // history.goBack
    // history.push(`/home`);
  };
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.menu}>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              className={classes.menuButton}
              onClick={history.goBack}
              aria-label="menu"
            >
              <KeyboardBackspaceIcon className={classes.menuIcon} />
            </IconButton>
            <Typography variant="h5" className={classes.menuTitle}>
              Bác sĩ
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Paper className={classes.root2}>
        <MenuList id="long-menu">
          {arrDoctors &&
            arrDoctors.length > 0 &&
            arrDoctors.map((item, index) => {
              let imageBase64 = "";
              if (item.image) {
                imageBase64 = new Buffer(item.image, "base64").toString(
                  "binary"
                );
              }
              let nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName}`;
              let nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName}`;
              return (
                <div key={index} onClick={() => handleViewDetailDoctor(item)}>
                  <MenuItem>
                    <ListItemIcon>
                      <div
                        className={classes.bgImageListSpecialty}
                        style={{
                          backgroundImage: `url(${imageBase64})`,
                        }}
                      ></div>
                    </ListItemIcon>
                    <div className={classes.content}>
                      <Typography
                        variant="inherit"
                        className={classes.listSpecialtyName}
                      >
                        {language === LANGUAGES.VI ? nameVi : nameEn}
                      </Typography>
                      <Typography
                        variant="inherit"
                        className={classes.listSpecialtyName}
                      >
                        {item.Doctor_Infor &&
                        item.Doctor_Infor.specialtyData &&
                        item.Doctor_Infor.specialtyData.name
                          ? item.Doctor_Infor.specialtyData.name
                          : ""}
                      </Typography>
                    </div>
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

export default ListOutStandingDoctor;
