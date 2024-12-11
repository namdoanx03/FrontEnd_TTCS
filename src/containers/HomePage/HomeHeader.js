import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils";

import { changeLanguageApp } from "../../store/actions/appActions";
import { withRouter } from "react-router";

import MenuHomeHeader from "./MenuHomeHeader";
import HomeMenuSearchSpecialty from "./HomeMenuSearchSpecialty";
import { emitter } from "../../utils/emitter";
import { Alert } from "reactstrap";

class HomeHeader extends Component {
  constructor() {
    super();

    this.state = {
      showMenuSearchSpecialty: false,
      previewImgURL:[]
    };
  }

  componentDidMount() {
    let imageBase64 = "";
    if (this.props && this.props.userInfo && this.props.userInfo.image) {
      imageBase64 = new Buffer(this.props.userInfo.image, "base64").toString("binary");
    }

    this.setState({
      previewImgURL: imageBase64,
    });
  }

  handleClickShowHomeMenuSearchSpecialty = () => {
    this.setState({
      showMenuSearchSpecialty: !this.state.showMenuSearchSpecialty,
    });
  };

  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
    //fire redux event: action
  };

  returnToHome = () => {
    if (this.props.history) {
      this.props.history.push(`/home`);
    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.userInfo !== this.props.userInfo) {
      let imageBase64 = "";
      if (this.props.userInfo.image) {
        imageBase64 = new Buffer(this.props.userInfo.image, "base64").toString("binary");
      }

      this.setState({
        previewImgURL: imageBase64,
      });
    }
  }

  render() {
    let language = this.props.language;
    // let {userInfo}=this.props;
    let {user}=this.state;

    return (
      <>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              {/* <i className="fas fa-bars"></i> */}
              {/* <div className="menu-home-header">
                <MenuHomeHeader />
              </div> */}
              <div
                className="header-logo"
                onClick={() => {
                  this.returnToHome();
                }}
              ></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.speciality" />
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id="homeheader.searchdoctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.health-facility" />
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id="homeheader.select-room" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.doctor" />
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id="homeheader.select-doctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.fee" />
                  </b>
                </div>
                <div className="subs-title">
                  <FormattedMessage id="homeheader.check-health" />
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle"></i>
                <FormattedMessage id="homeheader.support" />
              </div>
              <div
                className={
                  language === LANGUAGES.VI
                    ? "language-vi active"
                    : "language-vi"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                  VN
                </span>
              </div>
              <div
                className={
                  language === LANGUAGES.EN //bien language duoc khai bao ben tren
                    ? "language-en active"
                    : "language-en"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>
                  EN
                </span>
              </div>


           

              <div
              class="avatar-profile mx-10"
              style={{
                backgroundImage: `url(${this.state.previewImgURL ? this.state.previewImgURL : ""})`,
              }}
              >
                </div>

              <div className="menu-home-header">
                <MenuHomeHeader />
              </div>
            </div>
          </div>
        </div>
        {this.props.isShowBanner === true && (
          <div className="home-header-banner">
            <div className="content-up position-relative">
              <div class="position-absolute" style={{bottom:"0%",left:"50%",transform:"translateX(-50%)",background:"#F6F9FD"}}>
                <div className="title1">
                  <FormattedMessage id="banner.title1" />
                </div>
                <div className="title2">
                  <FormattedMessage id="banner.title2" />
                </div>
              </div>
             
              {/* <div
                className="search"
                onClick={() => this.handleClickShowHomeMenuSearchSpecialty()}
              >
                <i className="fas fa-search"></i>
                <FormattedMessage id="banner.search">
                  {(placeholder) => (
                    <input type="text" placeholder={placeholder} />
                  )}
                </FormattedMessage>

                {this.state.showMenuSearchSpecialty && (
                  <HomeMenuSearchSpecialty
                    showMenuSearchSpecialty={this.state.showMenuSearchSpecialty}
                  />
                )}
              </div> */}
            </div>
            {/* <div className="content-down">
              <div className="options">
                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-hospital-alt"></i>
                  </div>
                  <div className="text-child">
                    <FormattedMessage id="banner.child1" />
                  </div>
                </div>
                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <div className="text-child">
                    <FormattedMessage id="banner.child2" />
                  </div>
                </div>
                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-procedures"></i>
                  </div>
                  <div className="text-child">
                    <FormattedMessage id="banner.child3" />
                  </div>
                </div>
                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-flask"></i>
                  </div>
                  <div className="text-child">
                    <FormattedMessage id="banner.child4" />
                  </div>
                </div>
                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-user-md"></i>
                  </div>
                  <div className="text-child">
                    <FormattedMessage id="banner.child5" />
                  </div>
                </div>
                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-briefcase-medical"></i>
                  </div>
                  <div className="text-child">
                    <FormattedMessage id="banner.child6" />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
);
